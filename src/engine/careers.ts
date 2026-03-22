// ============================================================
// ThisLife — Career Progression Engine
// Pure functions for job applications, promotions, and work life
// ============================================================

import {
  CareerDefinition,
  CareerPosition,
  CareerLevel,
  EducationLevel,
  GameState,
} from '../types/game';
import { chance, randomInt, clamp, pickRandom } from '../utils/random';
import { pickRandomCompany, adjustSalaryForCompany } from '../data/companies';
import { getMajorById } from '../data/universities';

// ---- Education Rank (for comparison) ----

const EDUCATION_RANK: Record<EducationLevel, number> = {
  none: 0,
  elementary: 1,
  middleSchool: 2,
  highSchool: 3,
  college: 4,
  gradSchool: 5,
};

function meetsEducation(
  playerLevel: EducationLevel,
  requiredLevel: EducationLevel,
): boolean {
  return EDUCATION_RANK[playerLevel] >= EDUCATION_RANK[requiredLevel];
}

// ---- Interview Flavor Text ----

const INTERVIEW_SUCCESS_MESSAGES = [
  'You nailed the interview! The hiring manager was visibly impressed.',
  'They loved your energy. Welcome aboard!',
  'After a tough round of interviews, you got the call — you\'re hired!',
  'Your resume stood out and the interview sealed the deal.',
  'The team was unanimous: you\'re exactly who they were looking for.',
  'You charmed everyone in the room. The offer letter is on its way.',
];

const INTERVIEW_FAIL_MESSAGES = [
  'The interviewer didn\'t seem convinced. You got a polite rejection email.',
  'You fumbled a key question. They went with another candidate.',
  'They said they\'d call, but you never heard back.',
  'The competition was fierce — they chose someone with more experience.',
  'You showed up late and it went downhill from there.',
  'The vibes were off. They decided to go in a different direction.',
];

// ---- 1. Get Available Jobs ----

/**
 * Filter career definitions the player currently qualifies for based on
 * education level, minimum smarts, minimum looks, and minimum age.
 */
export function getAvailableJobs(
  careerDefinitions: CareerDefinition[],
  state: GameState,
): CareerDefinition[] {
  const { character } = state;

  return careerDefinitions.filter((career) => {
    // Education check
    if (!meetsEducation(character.education.level, career.requiredEducation)) {
      return false;
    }

    // Smarts check
    if (
      career.requiredSmarts !== undefined &&
      character.stats.smarts < career.requiredSmarts
    ) {
      return false;
    }

    // Looks check
    if (
      career.requiredLooks !== undefined &&
      character.stats.looks < career.requiredLooks
    ) {
      return false;
    }

    // Age check
    if (character.age < career.minAge) {
      return false;
    }

    return true;
  });
}

// ---- 2. Attempt Application ----

/**
 * Simulate a job application. Hire chance starts at ~60% and is modified
 * by smarts, looks (for careers that require them), education surplus,
 * and reputation.
 *
 * Returns whether the player was hired and interview flavor text.
 */
export function attemptApplication(
  career: CareerDefinition,
  state: GameState,
): { hired: boolean; message: string } {
  const { character } = state;

  // Base hire probability
  let hireChance = 0.6;

  // Smarts modifier: each point above 50 adds 0.4%, below subtracts 0.4%
  const smartsDelta = (character.stats.smarts - 50) * 0.004;
  hireChance += smartsDelta;

  // Looks modifier (only for careers that value looks)
  if (career.requiredLooks !== undefined) {
    const looksDelta = (character.stats.looks - 50) * 0.003;
    hireChance += looksDelta;
  }

  // Education surplus bonus: each level above the requirement adds 5%
  const eduSurplus =
    EDUCATION_RANK[character.education.level] -
    EDUCATION_RANK[career.requiredEducation];
  hireChance += eduSurplus * 0.05;

  // Reputation modifier: reputation ranges -100 to 100, scale to -0.1 to 0.1
  hireChance += (character.reputation / 100) * 0.1;

  // Major bonus: if player's college major matches this career, +10%
  if (character.education.majorId) {
    const major = getMajorById(character.education.majorId);
    if (major && major.careerBonus.includes(career.id)) {
      hireChance += 0.10;
    }
  }

  // University prestige bonus: 1-5 scaled to 0-5%
  if (character.education.universityPrestige) {
    hireChance += character.education.universityPrestige * 0.01;
  }

  // Criminal record penalty
  if (character.criminalRecord.length > 0) {
    hireChance -= 0.05 * Math.min(character.criminalRecord.length, 4);
  }

  // Clamp probability to a sane range
  hireChance = clamp(hireChance, 0.05, 0.95);

  const hired = chance(hireChance);

  const message = hired
    ? pickRandom(INTERVIEW_SUCCESS_MESSAGES)
    : pickRandom(INTERVIEW_FAIL_MESSAGES);

  return { hired, message };
}

// ---- 3. Create Position ----

/**
 * Create a new CareerPosition at level 0 (entry level) of the given career.
 * Assigns a random fictional company and adjusts salary by company prestige.
 */
export function createPosition(career: CareerDefinition): CareerPosition {
  const entryLevel: CareerLevel = career.levels[0];
  const company = pickRandomCompany(career.id);
  const adjustedSalary = adjustSalaryForCompany(entryLevel.salary, company.prestige);

  return {
    careerId: career.id,
    companyName: company.name,
    companyPrestige: company.prestige,
    title: entryLevel.title,
    level: 0,
    salary: adjustedSalary,
    seasonsInRole: 0,
    satisfaction: 50,
    performance: 50,
  };
}

// ---- 4. Check Promotion ----

/**
 * Check if the player meets the promotion requirements for their current
 * career level: minimum seasonsInRole and minimum performance.
 */
export function checkPromotion(
  position: CareerPosition,
  career: CareerDefinition,
): { eligible: boolean; message: string } {
  const currentLevel = career.levels[position.level];

  // Already at max level
  if (position.level >= career.levels.length - 1) {
    return {
      eligible: false,
      message: `You're already at the top of the ${career.name} career ladder.`,
    };
  }

  const needsSeasons = currentLevel.seasonsToPromote;
  const needsPerformance = currentLevel.requiredPerformance;

  const hasTime = position.seasonsInRole >= needsSeasons;
  const hasPerformance = position.performance >= needsPerformance;

  if (hasTime && hasPerformance) {
    const nextTitle = career.levels[position.level + 1].title;
    return {
      eligible: true,
      message: `Your hard work has paid off — you're eligible for promotion to ${nextTitle}!`,
    };
  }

  // Build a helpful message about what's missing
  const missing: string[] = [];
  if (!hasTime) {
    const remaining = needsSeasons - position.seasonsInRole;
    missing.push(
      `${remaining} more season${remaining !== 1 ? 's' : ''} in your current role`,
    );
  }
  if (!hasPerformance) {
    missing.push(
      `performance of ${needsPerformance} (currently ${position.performance})`,
    );
  }

  return {
    eligible: false,
    message: `Not yet eligible for promotion. You still need: ${missing.join(' and ')}.`,
  };
}

// ---- 5. Promote ----

/**
 * Move to the next career level. Resets seasonsInRole, updates salary and title.
 * If already at max level, returns the position unchanged.
 */
export function promote(
  position: CareerPosition,
  career: CareerDefinition,
): CareerPosition {
  if (position.level >= career.levels.length - 1) {
    return { ...position };
  }

  const nextLevelIndex = position.level + 1;
  const nextLevel: CareerLevel = career.levels[nextLevelIndex];

  return {
    ...position,
    level: nextLevelIndex,
    title: nextLevel.title,
    salary: adjustSalaryForCompany(nextLevel.salary, position.companyPrestige),
    seasonsInRole: 0,
  };
}

// ---- 6. Work Hard ----

/**
 * The player chooses to work hard this season.
 * Increases performance by 5-15, with a slight satisfaction drift.
 */
export function workHardEffect(
  position: CareerPosition,
): Partial<CareerPosition> {
  const performanceGain = randomInt(5, 15);
  // Working hard can be tiring — satisfaction shifts by -5 to +3
  const satisfactionShift = randomInt(-5, 3);

  return {
    performance: clamp(position.performance + performanceGain, 0, 100),
    satisfaction: clamp(position.satisfaction + satisfactionShift, 0, 100),
  };
}

// ---- 7. Slack Off ----

/**
 * The player chooses to slack off this season.
 * Decreases performance by 5-10, slight happiness boost conceptually
 * (satisfaction bumps up a bit from taking it easy).
 */
export function slackOffEffect(
  position: CareerPosition,
): Partial<CareerPosition> {
  const performanceDrop = randomInt(5, 10);
  // Taking it easy feels good — satisfaction rises slightly by 1 to 5
  const satisfactionBump = randomInt(1, 5);

  return {
    performance: clamp(position.performance - performanceDrop, 0, 100),
    satisfaction: clamp(position.satisfaction + satisfactionBump, 0, 100),
  };
}

// ---- 8. Season Career Update ----

/**
 * Per-season passive changes applied automatically:
 * - Small random performance drift (-3 to +3)
 * - Small random satisfaction drift (-4 to +4)
 * - Increment seasonsInRole by 1
 */
export function seasonCareerUpdate(
  position: CareerPosition,
): Partial<CareerPosition> {
  const performanceDrift = randomInt(-3, 3);
  const satisfactionDrift = randomInt(-4, 4);

  return {
    performance: clamp(position.performance + performanceDrift, 0, 100),
    satisfaction: clamp(position.satisfaction + satisfactionDrift, 0, 100),
    seasonsInRole: position.seasonsInRole + 1,
  };
}
