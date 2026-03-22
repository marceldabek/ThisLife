// ============================================================
// ThisLife — Age-Up Engine
// Pure functions that compute the next state when advancing a season.
// performAgeUp takes GameState, returns a partial update — no mutation.
// ============================================================

import {
  GameState,
  Character,
  Season,
  Stats,
  Education,
  EducationLevel,
  CareerPosition,
  Relationship,
  Asset,
  EventLogEntry,
  getNextSeason,
  getLifeStage,
  getEmojiForAge,
} from '../types/game';

// ---- Deterministic random helpers (seeded from state for reproducibility) ----

/** Random integer in [min, max] inclusive. */
export function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Random float in [min, max). */
export function randFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/** Clamp a number to [lo, hi]. */
export function clamp(value: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, value));
}

/** Unique id generator for log entries. */
function makeId(prefix: string): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}

// ============================================================
// 1. Season advancement
// ============================================================

export interface SeasonAdvance {
  nextSeason: Season;
  newAge: number;
  isNewYear: boolean;
}

export function advanceSeason(currentSeason: Season, currentAge: number): SeasonAdvance {
  const nextSeason = getNextSeason(currentSeason);
  const isNewYear = nextSeason === 'spring';
  return {
    nextSeason,
    newAge: isNewYear ? currentAge + 1 : currentAge,
    isNewYear,
  };
}

// ============================================================
// 2. Stat decay / changes by age
// ============================================================

export interface StatChanges {
  health: number;
  happiness: number;
  looks: number;
}

export function computeStatChanges(age: number, currentStats: Stats): StatChanges {
  // --- Health ---
  let healthDelta = 0;
  if (age >= 70) {
    // Fast decline after 70
    healthDelta = randInt(-3, 0);
  } else if (age >= 50) {
    // Slow decline after 50
    healthDelta = randInt(-2, 0);
    // Occasionally no loss
    if (Math.random() < 0.3) healthDelta = 0;
  } else if (age < 18) {
    // Children slowly gain health back toward max
    if (currentStats.health < 90) {
      healthDelta = randInt(0, 1);
    }
  }

  // --- Happiness ---
  // Slight random fluctuation each season
  const happinessDelta = randInt(-3, 3);

  // --- Looks ---
  let looksDelta = 0;
  if (age >= 60) {
    looksDelta = randInt(-2, 0);
  } else if (age >= 40) {
    // Slow decline after 40
    looksDelta = Math.random() < 0.5 ? randInt(-1, 0) : 0;
  } else if (age >= 13 && age <= 20) {
    // Growing into looks during teens
    if (currentStats.looks < 80) {
      looksDelta = Math.random() < 0.3 ? 1 : 0;
    }
  }

  return { health: healthDelta, happiness: happinessDelta, looks: looksDelta };
}

export function applyStatChanges(stats: Stats, changes: StatChanges): Stats {
  return {
    health: clamp(stats.health + changes.health, 0, 100),
    happiness: clamp(stats.happiness + changes.happiness, 0, 100),
    smarts: stats.smarts, // smarts only change via events/education
    looks: clamp(stats.looks + changes.looks, 0, 100),
  };
}

// ============================================================
// 3. Natural death check
// ============================================================

export interface DeathCheck {
  died: boolean;
  cause: string | undefined;
}

export function checkNaturalDeath(age: number, health: number): DeathCheck {
  if (age < 70) return { died: false, cause: undefined };

  // Base chance starts at 1% at 70 and increases by ~1.5% per year
  let deathChance = 0.01 + (age - 70) * 0.015;

  // Low health dramatically increases risk
  if (health < 20) {
    deathChance += 0.15;
  } else if (health < 40) {
    deathChance += 0.08;
  } else if (health < 60) {
    deathChance += 0.03;
  }

  // Cap at 50% per season (so nobody lives forever, but also not guaranteed)
  deathChance = Math.min(deathChance, 0.50);

  // Zero health is always fatal
  if (health <= 0) {
    return { died: true, cause: 'Health failure' };
  }

  if (Math.random() < deathChance) {
    const causes = [
      'Natural causes',
      'Heart failure',
      'Organ failure',
      'Stroke',
      'Respiratory failure',
      'Passed away peacefully in sleep',
    ];
    return { died: true, cause: causes[randInt(0, causes.length - 1)] };
  }

  return { died: false, cause: undefined };
}

// ============================================================
// 4. Income
// ============================================================

export interface IncomeResult {
  salary: number;
  assetIncome: number;
  totalIncome: number;
}

export function computeIncome(career: CareerPosition | null, assets: Asset[]): IncomeResult {
  const salary = career ? career.salary : 0;
  const assetIncome = assets.reduce((sum, a) => sum + (a.income ?? 0), 0);
  return {
    salary,
    assetIncome,
    totalIncome: salary + assetIncome,
  };
}

// ============================================================
// 5. Expenses
// ============================================================

export interface ExpenseResult {
  food: number;
  housing: number;
  assetExpenses: number;
  totalExpenses: number;
}

export function computeExpenses(age: number, assets: Asset[]): ExpenseResult {
  // Base food cost: kids eat less, adults normal, seniors slightly more (medical)
  let food: number;
  if (age < 5) food = 200;
  else if (age < 13) food = 400;
  else if (age < 18) food = 600;
  else if (age >= 65) food = 1000;
  else food = 800;

  // Housing: free if minor, otherwise basic rent unless they own a house
  let housing: number;
  const ownsHouse = assets.some((a) => a.type === 'house');
  if (age < 18) {
    housing = 0; // parents cover it
  } else if (ownsHouse) {
    housing = 300; // property tax / maintenance baseline
  } else {
    housing = 1200; // rent
  }

  const assetExpenses = assets.reduce((sum, a) => sum + (a.expense ?? 0), 0);

  return {
    food,
    housing,
    assetExpenses,
    totalExpenses: food + housing + assetExpenses,
  };
}

// ============================================================
// 6. Education progression
// ============================================================

const EDUCATION_DURATION: Record<EducationLevel, number> = {
  none: 0,
  elementary: 24, // 6 years * 4 seasons
  middleSchool: 12, // 3 years * 4 seasons
  highSchool: 16, // 4 years * 4 seasons
  college: 16, // 4 years * 4 seasons
  gradSchool: 8, // 2 years * 4 seasons
};

const NEXT_EDUCATION: Partial<Record<EducationLevel, EducationLevel>> = {
  elementary: 'middleSchool',
  middleSchool: 'highSchool',
};

export interface EducationUpdate {
  education: Education;
  graduated: boolean;
  graduatedLevel: EducationLevel | null;
}

export function progressEducation(education: Education, age: number): EducationUpdate {
  if (!education.isEnrolled) {
    // Auto-enroll children in elementary at age 6
    if (age === 6 && education.level === 'none') {
      return {
        education: {
          ...education,
          level: 'elementary',
          isEnrolled: true,
          school: 'Local Elementary',
          yearsCompleted: 0,
        },
        graduated: false,
        graduatedLevel: null,
      };
    }
    return { education, graduated: false, graduatedLevel: null };
  }

  // Increment seasons completed (stored as yearsCompleted, but we increment per season call)
  const newSeasonsCompleted = education.yearsCompleted + 1;
  const requiredSeasons = EDUCATION_DURATION[education.level];

  if (requiredSeasons > 0 && newSeasonsCompleted >= requiredSeasons) {
    // Graduated!
    const graduatedLevel = education.level;
    const autoNext = NEXT_EDUCATION[education.level];

    if (autoNext) {
      // Auto-advance through mandatory education
      const schoolNames: Partial<Record<EducationLevel, string>> = {
        middleSchool: 'Local Middle School',
        highSchool: 'Local High School',
      };
      return {
        education: {
          ...education,
          level: autoNext,
          school: schoolNames[autoNext] || education.school,
          yearsCompleted: 0,
          isEnrolled: true,
        },
        graduated: true,
        graduatedLevel: graduatedLevel,
      };
    }

    // Non-mandatory (high school, college, grad school) — just graduate
    return {
      education: {
        ...education,
        yearsCompleted: newSeasonsCompleted,
        isEnrolled: false,
      },
      graduated: true,
      graduatedLevel: graduatedLevel,
    };
  }

  return {
    education: { ...education, yearsCompleted: newSeasonsCompleted },
    graduated: false,
    graduatedLevel: null,
  };
}

// ============================================================
// 7. Prison time
// ============================================================

export interface PrisonUpdate {
  inPrison: boolean;
  prisonSeasonsLeft: number;
  released: boolean;
}

export function progressPrison(inPrison: boolean, seasonsLeft: number): PrisonUpdate {
  if (!inPrison || seasonsLeft <= 0) {
    return { inPrison: false, prisonSeasonsLeft: 0, released: false };
  }

  const remaining = seasonsLeft - 1;
  return {
    inPrison: remaining > 0,
    prisonSeasonsLeft: Math.max(0, remaining),
    released: remaining <= 0,
  };
}

// ============================================================
// 8. Relationship aging
// ============================================================

export function ageRelationships(relationships: Relationship[]): Relationship[] {
  return relationships.map((rel) => {
    if (!rel.isAlive) return rel;

    // Age the relationship person by 0.25 (one season = quarter year)
    const newAge = rel.age + 0.25;

    // Small random closeness drift (-2 to +2)
    const drift = randInt(-2, 2);
    const newCloseness = clamp(rel.closeness + drift, 0, 100);

    // Romantic partners: increment yearsTogether
    let newYearsTogether = rel.yearsTogether;
    if (
      (rel.type === 'romantic' || rel.type === 'spouse') &&
      newYearsTogether !== undefined
    ) {
      newYearsTogether = newYearsTogether + 0.25;
    }

    // Random chance of elderly relatives dying
    let isAlive: boolean = rel.isAlive;
    if (newAge >= 70) {
      const deathChance = 0.005 + (newAge - 70) * 0.003;
      if (Math.random() < deathChance) {
        isAlive = false;
      }
    }

    return {
      ...rel,
      age: newAge,
      closeness: newCloseness,
      yearsTogether: newYearsTogether,
      isAlive,
    };
  });
}

// ============================================================
// 9. Asset value changes
// ============================================================

export function updateAssetValues(assets: Asset[]): Asset[] {
  return assets.map((asset) => {
    // Appreciation/depreciation depends on asset type
    let changePercent: number;
    switch (asset.type) {
      case 'house':
        // Houses generally appreciate 0-2% per season, occasionally dip
        changePercent = randFloat(-0.5, 2.0) / 100;
        break;
      case 'car':
        // Cars always depreciate
        changePercent = randFloat(-3.0, -0.5) / 100;
        break;
      case 'business':
        // Businesses are volatile
        changePercent = randFloat(-3.0, 5.0) / 100;
        break;
      case 'stock':
        // Stocks are moderately volatile
        changePercent = randFloat(-5.0, 6.0) / 100;
        break;
      case 'crypto':
        // Crypto is very volatile
        changePercent = randFloat(-15.0, 20.0) / 100;
        break;
      default:
        changePercent = 0;
    }

    const newValue = Math.max(0, Math.round(asset.value * (1 + changePercent)));
    return { ...asset, value: newValue };
  });
}

// ============================================================
// 10. Career progression
// ============================================================

export interface CareerUpdate {
  career: CareerPosition | null;
  performanceDelta: number;
  satisfactionDelta: number;
}

export function progressCareer(career: CareerPosition | null): CareerUpdate {
  if (!career) {
    return { career: null, performanceDelta: 0, satisfactionDelta: 0 };
  }

  const performanceDelta = randInt(-3, 5);
  const satisfactionDelta = randInt(-3, 3);

  const updatedCareer: CareerPosition = {
    ...career,
    seasonsInRole: career.seasonsInRole + 1,
    performance: clamp(career.performance + performanceDelta, 0, 100),
    satisfaction: clamp(career.satisfaction + satisfactionDelta, 0, 100),
  };

  return {
    career: updatedCareer,
    performanceDelta,
    satisfactionDelta,
  };
}

// ============================================================
// 11. Season log entry
// ============================================================

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function buildSeasonLogEntry(
  age: number,
  season: Season,
  summaryParts: string[],
): EventLogEntry {
  const title = `Age ${age} - ${capitalize(season)}`;
  const description = summaryParts.length > 0 ? summaryParts.join(' ') : 'Another season passes.';

  return {
    id: makeId('log'),
    age,
    season,
    title,
    description,
    timestamp: Date.now(),
  };
}

// ============================================================
// Main: performAgeUp
// ============================================================

export interface AgeUpResult {
  character: Character;
  relationships: Relationship[];
  assets: Asset[];
  eventLog: EventLogEntry[];
  gameOver: boolean;
  lifetimeEarnings: number;
  pendingUniversityChoice?: boolean;
}

export function performAgeUp(state: GameState): Partial<AgeUpResult> {
  // Guard: do nothing if dead or game over
  if (!state.character.isAlive || state.gameOver) {
    return {};
  }

  const summaryParts: string[] = [];

  // 1. Advance season
  const { nextSeason, newAge, isNewYear } = advanceSeason(
    state.character.season,
    state.character.age,
  );

  if (isNewYear) {
    summaryParts.push(`Turned ${newAge}.`);
  }

  // 2. Stat changes
  const statChanges = computeStatChanges(newAge, state.character.stats);
  const newStats = applyStatChanges(state.character.stats, statChanges);

  // 3. Natural death check (uses new stats)
  const deathCheck = checkNaturalDeath(newAge, newStats.health);
  if (deathCheck.died) {
    const deathLog = buildSeasonLogEntry(newAge, nextSeason, [
      `Died at age ${newAge} from ${deathCheck.cause}.`,
    ]);

    return {
      character: {
        ...state.character,
        age: newAge,
        season: nextSeason,
        stats: newStats,
        isAlive: false,
        causeOfDeath: deathCheck.cause,
      },
      eventLog: [deathLog, ...state.eventLog],
      gameOver: true,
    };
  }

  // 4. Income
  const income = computeIncome(state.character.career, state.assets);
  let money = state.character.money;
  let lifetimeEarnings = state.lifetimeEarnings;

  if (income.totalIncome > 0) {
    money += income.totalIncome;
    lifetimeEarnings += income.totalIncome;
    if (income.salary > 0) {
      summaryParts.push(`Earned $${income.salary.toLocaleString()} from work.`);
    }
    if (income.assetIncome > 0) {
      summaryParts.push(`Earned $${income.assetIncome.toLocaleString()} from assets.`);
    }
  }

  // 5. Expenses (children under 18 pay no expenses)
  const expenses = computeExpenses(newAge, state.assets);
  if (newAge >= 18) {
    money -= expenses.totalExpenses;
    if (expenses.totalExpenses > 0) {
      summaryParts.push(`Spent $${expenses.totalExpenses.toLocaleString()} on living expenses.`);
    }
  }

  // Children can't go negative
  if (newAge < 18) {
    money = Math.max(0, money);
  }

  // 6. Education progression
  const eduUpdate = progressEducation(state.character.education, newAge);
  let triggerUniversityChoice = false;
  if (eduUpdate.graduated && eduUpdate.graduatedLevel) {
    const levelNames: Record<EducationLevel, string> = {
      none: '',
      elementary: 'elementary school',
      middleSchool: 'middle school',
      highSchool: 'high school',
      college: 'college',
      gradSchool: 'graduate school',
    };
    summaryParts.push(`Graduated from ${levelNames[eduUpdate.graduatedLevel]}!`);

    // After high school graduation → prompt university selection
    if (eduUpdate.graduatedLevel === 'highSchool') {
      triggerUniversityChoice = true;
    }
  }

  // Tuition expenses for enrolled college/grad students
  if (
    eduUpdate.education.isEnrolled &&
    (eduUpdate.education.level === 'college' || eduUpdate.education.level === 'gradSchool') &&
    newAge >= 18
  ) {
    // Tuition is stored on character via university prestige, default moderate
    const tuition = state.character.education.universityPrestige
      ? [800, 1200, 2000, 5500, 9000, 12000][state.character.education.universityPrestige] ?? 2000
      : 2000;
    money -= tuition;
    summaryParts.push(`Paid $${tuition.toLocaleString()} tuition.`);
  }

  // 7. Prison
  let prisonUpdate: PrisonUpdate = {
    inPrison: state.character.inPrison,
    prisonSeasonsLeft: state.character.prisonSeasonsLeft,
    released: false,
  };
  if (state.character.inPrison) {
    prisonUpdate = progressPrison(
      state.character.inPrison,
      state.character.prisonSeasonsLeft,
    );
    if (prisonUpdate.released) {
      summaryParts.push('Released from prison!');
    } else {
      summaryParts.push(
        `Serving time in prison (${prisonUpdate.prisonSeasonsLeft} season${prisonUpdate.prisonSeasonsLeft === 1 ? '' : 's'} left).`,
      );
    }
  }

  // 8. Relationship aging
  const updatedRelationships = ageRelationships(state.relationships);
  const diedRelatives = updatedRelationships.filter(
    (r) => !r.isAlive && state.relationships.find((orig) => orig.id === r.id)?.isAlive,
  );
  for (const dead of diedRelatives) {
    summaryParts.push(`${dead.name} passed away.`);
  }

  // 9. Asset value changes
  const updatedAssets = updateAssetValues(state.assets);

  // 10. Career progression
  const careerUpdate = progressCareer(state.character.career);

  // 11. Build log entry
  const logEntry = buildSeasonLogEntry(newAge, nextSeason, summaryParts);

  // Assemble the updated character
  const updatedCharacter: Character = {
    ...state.character,
    age: newAge,
    season: nextSeason,
    stats: newStats,
    money: Math.round(money),
    emoji: getEmojiForAge(newAge, state.character.gender),
    education: eduUpdate.education,
    career: careerUpdate.career,
    inPrison: prisonUpdate.inPrison,
    prisonSeasonsLeft: prisonUpdate.prisonSeasonsLeft,
  };

  return {
    character: updatedCharacter,
    relationships: updatedRelationships,
    assets: updatedAssets,
    eventLog: [logEntry, ...state.eventLog],
    lifetimeEarnings,
    ...(triggerUniversityChoice ? { pendingUniversityChoice: true } : {}),
  };
}
