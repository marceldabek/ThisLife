// ============================================================
// ThisLife — Crime System
// Pure functions for committing crimes, standing trial,
// serving time, and attempting daring prison escapes.
// ============================================================

import {
  GameState,
  CrimeType,
} from '../types/game';

import {
  chance,
  randomInt,
  pickRandom,
  clamp,
} from '../utils/random';

// ============================================================
// 1. Crime Definitions
// ============================================================

export interface CrimeDefinition {
  name: string;
  description: string;
  minAge: number;
  difficulty: number;          // 0-100
  baseReward: [number, number]; // [min, max] money
  baseSentence: [number, number]; // [min, max] seasons
  emoji: string;
}

/**
 * Every crime in the game, from petty mischief to
 * the kind of thing that gets a Netflix documentary.
 */
export const CRIME_DEFINITIONS: Record<CrimeType, CrimeDefinition> = {
  shoplifting: {
    name: 'Shoplifting',
    description: 'Five-finger discount at the local store. Bold strategy, Cotton.',
    minAge: 10,
    difficulty: 15,
    baseReward: [20, 200],
    baseSentence: [1, 2],
    emoji: '\uD83D\uDED2',
  },
  pickpocketing: {
    name: 'Pickpocketing',
    description: 'Relieving strangers of their wallets. Oliver Twist would be proud.',
    minAge: 12,
    difficulty: 25,
    baseReward: [50, 500],
    baseSentence: [1, 2],
    emoji: '\uD83E\uDD0F',
  },
  vandalism: {
    name: 'Vandalism',
    description: 'Express yourself through the destruction of property. Art?',
    minAge: 10,
    difficulty: 10,
    baseReward: [0, 0],
    baseSentence: [1, 1],
    emoji: '\uD83C\uDFA8',
  },
  robbery: {
    name: 'Robbery',
    description: 'Taking things that belong to other people, but with enthusiasm.',
    minAge: 16,
    difficulty: 45,
    baseReward: [500, 5000],
    baseSentence: [4, 8],
    emoji: '\uD83D\uDD2B',
  },
  assault: {
    name: 'Assault',
    description: 'Sometimes diplomacy fails. Sometimes it never starts.',
    minAge: 16,
    difficulty: 40,
    baseReward: [0, 0],
    baseSentence: [2, 6],
    emoji: '\uD83E\uDD4A',
  },
  drugDealing: {
    name: 'Drug Dealing',
    description: 'Entrepreneurship, but the kind your parents warned you about.',
    minAge: 16,
    difficulty: 50,
    baseReward: [1000, 10000],
    baseSentence: [4, 12],
    emoji: '\uD83D\uDC8A',
  },
  fraud: {
    name: 'Fraud',
    description: 'White-collar crime: all the thrill, half the guilt.',
    minAge: 18,
    difficulty: 65,
    baseReward: [5000, 50000],
    baseSentence: [6, 16],
    emoji: '\uD83D\uDCBC',
  },
  grandTheft: {
    name: 'Grand Theft',
    description: 'Go big or go home. Preferably in a stolen car.',
    minAge: 18,
    difficulty: 75,
    baseReward: [10000, 100000],
    baseSentence: [8, 20],
    emoji: '\uD83D\uDE97',
  },
  murder: {
    name: 'Murder',
    description: 'The ultimate crime. There is absolutely no undo button for this one.',
    minAge: 16,
    difficulty: 90,
    baseReward: [0, 0],
    baseSentence: [20, 80],
    emoji: '\uD83D\uDD2A',
  },
};

// ============================================================
// 2. getAvailableCrimes
// ============================================================

/**
 * Returns crimes the character is old enough (and free enough)
 * to attempt. You can't shoplift from a prison cell, sadly.
 */
export function getAvailableCrimes(state: GameState): CrimeType[] {
  const { character } = state;

  // Can't do crime from behind bars
  if (character.inPrison) return [];

  // Can't do crime if dead (obviously)
  if (!character.isAlive) return [];

  const allCrimes = Object.keys(CRIME_DEFINITIONS) as CrimeType[];

  return allCrimes.filter((crimeType) => {
    const def = CRIME_DEFINITIONS[crimeType];

    // Must meet minimum age
    if (character.age < def.minAge) return false;

    // Fraud requires at least some smarts — you can't con people
    // if you can barely spell your own name
    if (crimeType === 'fraud' && character.stats.smarts < 30) return false;

    // Grand theft requires a bit of nerve and know-how
    if (crimeType === 'grandTheft' && character.stats.smarts < 20) return false;

    return true;
  });
}

// ============================================================
// 3. attemptCrime
// ============================================================

export interface CrimeAttemptResult {
  success: boolean;
  caught: boolean;
  reward: number;
  message: string;
  sentenceSeasons?: number;
}

/**
 * Attempt a crime. Success depends on difficulty, smarts, and
 * criminal reputation. Getting caught depends on all of that
 * plus a healthy dose of luck.
 *
 * Pure function — returns the outcome but doesn't mutate state.
 */
export function attemptCrime(crimeType: CrimeType, state: GameState): CrimeAttemptResult {
  const { character } = state;
  const def = CRIME_DEFINITIONS[crimeType];

  // ---- Calculate success chance ----
  // Base: inversely proportional to difficulty
  const baseChance = (100 - def.difficulty) / 100;

  // Smarts bonus: up to +25% at 100 smarts
  const smartsBonus = (character.stats.smarts / 100) * 0.25;

  // Reputation modifier: negative reputation (criminal) helps
  // with harder crimes (you know the ropes), positive rep hurts
  // (you stick out like a sore thumb in the underworld)
  const repModifier = (-character.reputation / 100) * 0.15;

  // Prior experience with this specific crime type
  const priorCrimes = character.criminalRecord.filter(
    (r) => r.crimeType === crimeType && !r.caught
  ).length;
  const experienceBonus = Math.min(priorCrimes * 0.03, 0.15);

  const successChance = clamp(
    baseChance + smartsBonus + repModifier + experienceBonus,
    0.05,
    0.95
  );

  const success = chance(successChance);

  // ---- Calculate catch chance ----
  // Even if the crime succeeds, you might still get caught.
  // Failed crimes have a much higher catch rate.
  const baseCatchChance = success ? 0.15 : 0.5;

  // Smarts reduce catch chance
  const smartsCatchReduction = (character.stats.smarts / 100) * 0.2;

  // Harder crimes attract more police attention
  const difficultyModifier = (def.difficulty / 100) * 0.2;

  // Criminal record makes cops watch you more closely
  const recordModifier = Math.min(character.criminalRecord.length * 0.03, 0.15);

  const catchChance = clamp(
    baseCatchChance - smartsCatchReduction + difficultyModifier + recordModifier,
    0.05,
    0.85
  );

  const caught = chance(catchChance);

  // ---- Calculate reward ----
  let reward = 0;
  if (success && def.baseReward[1] > 0) {
    reward = randomInt(def.baseReward[0], def.baseReward[1]);
  }

  // ---- Calculate sentence if caught ----
  let sentenceSeasons: number | undefined;
  if (caught) {
    const trial = generateTrialOutcome(crimeType, state);
    if (trial.convicted) {
      sentenceSeasons = trial.sentence;
    }
  }

  // ---- Build message ----
  const message = buildCrimeMessage(crimeType, success, caught, reward, sentenceSeasons);

  return { success, caught, reward, message, sentenceSeasons };
}

/**
 * Builds a darkly humorous crime outcome message.
 */
function buildCrimeMessage(
  crimeType: CrimeType,
  success: boolean,
  caught: boolean,
  reward: number,
  sentenceSeasons?: number
): string {
  const def = CRIME_DEFINITIONS[crimeType];
  const parts: string[] = [];

  if (success && !caught) {
    // Clean getaway
    const successMessages: Record<CrimeType, string[]> = {
      shoplifting: [
        'You casually walked out with the goods. Nobody blinked.',
        'The security guard was on his phone. His loss, your gain.',
        'You pocketed the merchandise with the grace of a seasoned pro.',
      ],
      pickpocketing: [
        'Fingers like silk. They never felt a thing.',
        'You bumped into them, apologized, and walked away richer.',
        'Their wallet practically jumped into your hand.',
      ],
      vandalism: [
        'You left your mark on the world. Literally.',
        'The spray paint dried before anyone noticed.',
        'Property values in the area just went down. You monster.',
      ],
      robbery: [
        'In and out. Clean. Professional. Terrifying for them, thrilling for you.',
        'They handed it over without a fight. Smart.',
        'You pulled it off like a movie heist, minus the dramatic soundtrack.',
      ],
      assault: [
        'You won the fight. They did not.',
        'They went down fast. You walked away before anyone showed up.',
        'Violence isn\'t the answer, but it sure felt effective.',
      ],
      drugDealing: [
        'The deal went smoothly. Your customer left satisfied. What a business.',
        'Another successful transaction in the pharmaceutical grey market.',
        'Street corner MBA in action.',
      ],
      fraud: [
        'The numbers lined up perfectly. Because you made them up.',
        'They signed on the dotted line, never suspecting a thing.',
        'White-collar crime: all the excitement, none of the running.',
      ],
      grandTheft: [
        'You drove off into the sunset. In someone else\'s sunset.',
        'The alarm didn\'t trigger until you were three blocks away.',
        'Gone in sixty seconds. Well, maybe ninety.',
      ],
      murder: [
        'It\'s done. There\'s no coming back from this.',
        'You crossed a line that can never be uncrossed.',
        'The weight of what you\'ve done settles in. Heavy.',
      ],
    };
    parts.push(pickRandom(successMessages[crimeType]));
    if (reward > 0) {
      parts.push(`You got away with $${reward.toLocaleString()}.`);
    }
  } else if (success && caught) {
    // Got the goods but also got nabbed
    parts.push(`You pulled off the ${def.name.toLowerCase()}, but the cops caught up with you.`);
    if (reward > 0) {
      parts.push(`The $${reward.toLocaleString()} you took won't do you much good now.`);
    }
  } else if (!success && !caught) {
    // Failed but got away
    const failMessages: string[] = [
      `The ${def.name.toLowerCase()} went sideways, but at least you got away.`,
      'That was a disaster, but miraculously, nobody saw.',
      'Complete failure. But hey, no witnesses.',
      'Nothing went according to plan. Fortunately, you escaped the scene.',
    ];
    parts.push(pickRandom(failMessages));
  } else {
    // Failed AND got caught — the worst timeline
    const worstMessages: string[] = [
      `Not only did the ${def.name.toLowerCase()} fail, but the cops were right there.`,
      'Failed spectacularly, then got arrested. Today is not your day.',
      'Everything that could go wrong did go wrong. Including handcuffs.',
      `You botched the ${def.name.toLowerCase()} and got caught. Impressive incompetence.`,
    ];
    parts.push(pickRandom(worstMessages));
  }

  if (caught && sentenceSeasons !== undefined && sentenceSeasons > 0) {
    const years = Math.floor(sentenceSeasons / 4);
    const remainingSeasons = sentenceSeasons % 4;
    if (years > 0 && remainingSeasons > 0) {
      parts.push(`Sentenced to ${years} year${years > 1 ? 's' : ''} and ${remainingSeasons} season${remainingSeasons > 1 ? 's' : ''} in prison.`);
    } else if (years > 0) {
      parts.push(`Sentenced to ${years} year${years > 1 ? 's' : ''} in prison.`);
    } else {
      parts.push(`Sentenced to ${sentenceSeasons} season${sentenceSeasons > 1 ? 's' : ''} in prison.`);
    }
  } else if (caught) {
    parts.push('The judge let you off with a warning. Lucky break.');
  }

  return parts.join(' ');
}

// ============================================================
// 4. generateTrialOutcome
// ============================================================

export interface TrialOutcome {
  convicted: boolean;
  sentence: number;  // seasons
  fine: number;
  message: string;
}

/**
 * Simulate a trial. Justice is blind, but she peeks when
 * you can afford a good lawyer.
 *
 * Higher smarts = better self-defense.
 * More money = better lawyer.
 * Criminal record = harder to get off.
 */
export function generateTrialOutcome(crimeType: CrimeType, state: GameState): TrialOutcome {
  const { character } = state;
  const def = CRIME_DEFINITIONS[crimeType];

  // ---- Conviction chance ----
  // Base conviction rate scales with crime severity
  const baseConviction = 0.5 + (def.difficulty / 100) * 0.3; // 50-80%

  // Smarts help you in court (understanding law, composure)
  const smartsDefense = (character.stats.smarts / 100) * 0.2;

  // Money buys better lawyers
  const lawyerQuality = getLawyerQuality(character.money);

  // Prior record makes conviction more likely
  const priorConvictions = character.criminalRecord.filter((r) => r.caught).length;
  const recordPenalty = Math.min(priorConvictions * 0.05, 0.2);

  const convictionChance = clamp(
    baseConviction - smartsDefense - lawyerQuality + recordPenalty,
    0.1,
    0.95
  );

  const convicted = chance(convictionChance);

  if (!convicted) {
    const acquittalMessages = [
      'The jury found you not guilty. You tried not to smile.',
      'Acquitted! Your lawyer earned every penny.',
      'Not guilty. The prosecution\'s case fell apart like wet cardboard.',
      'The judge dismissed the case. Sometimes the system works (for you).',
      'You walked out of the courtroom a free person. For now.',
    ];
    return {
      convicted: false,
      sentence: 0,
      fine: 0,
      message: pickRandom(acquittalMessages),
    };
  }

  // ---- Sentence calculation ----
  let sentence = randomInt(def.baseSentence[0], def.baseSentence[1]);

  // Good lawyer can reduce sentence
  const sentenceReduction = Math.floor(sentence * lawyerQuality * 0.5);
  sentence = Math.max(1, sentence - sentenceReduction);

  // Repeat offenders get harsher sentences
  if (priorConvictions >= 3) {
    sentence = Math.floor(sentence * 1.5);
  }
  if (priorConvictions >= 5) {
    sentence = Math.floor(sentence * 1.3); // stacks
  }

  // ---- Fine calculation ----
  // Fine scales with crime severity and how much money you have
  // (judges love fining rich people — they can actually pay)
  const baseFine = def.difficulty * 50;
  const wealthMultiplier = character.money > 100000 ? 2.0
    : character.money > 10000 ? 1.5
    : 1.0;
  const fine = Math.floor(baseFine * wealthMultiplier * (0.5 + Math.random()));

  // ---- Build conviction message ----
  const severityWord = sentence >= 40 ? 'life'
    : sentence >= 20 ? 'severe'
    : sentence >= 8 ? 'significant'
    : 'short';

  const convictionMessages = [
    `Guilty. The gavel came down hard. You received a ${severityWord} sentence.`,
    `The jury wasn't buying your story. Convicted.`,
    `Guilty on all counts. Your lawyer looked at the floor.`,
    `Convicted. The judge showed no mercy.`,
  ];

  const msg = pickRandom(convictionMessages);
  const fineMsg = fine > 0 ? ` Fined $${fine.toLocaleString()}.` : '';

  return {
    convicted: true,
    sentence,
    fine,
    message: `${msg}${fineMsg}`,
  };
}

/**
 * Returns a 0-0.3 quality bonus based on how much money
 * you can throw at a lawyer.
 */
function getLawyerQuality(money: number): number {
  if (money >= 500000) return 0.30;  // Dream team
  if (money >= 100000) return 0.25;  // Top-tier attorney
  if (money >= 50000) return 0.20;   // Very good lawyer
  if (money >= 10000) return 0.15;   // Decent lawyer
  if (money >= 1000) return 0.08;    // Budget lawyer
  return 0.0;                        // Public defender (bless their hearts)
}

// ============================================================
// 5. getPrisonEvents
// ============================================================

/**
 * Flavor text for the prison experience. Each season behind
 * bars serves up one of these delightful vignettes.
 */
export function getPrisonEvents(): string[] {
  return [
    // Daily life
    'You stared at the ceiling and counted the cracks. There are 47.',
    'Cafeteria lunch today: mystery meat surprise. The surprise was regret.',
    'You did pushups in your cell until your arms gave out. Then you did more.',
    'A fellow inmate taught you to play chess. You lost 12 games in a row.',
    'You wrote a letter to nobody in particular. It felt therapeutic.',
    'Lights out at 9 PM. You lay awake until 3 AM thinking about your choices.',
    'You got a new cellmate. He snores like a freight train with a head cold.',

    // Events
    'A fight broke out in the yard. You wisely stayed out of it.',
    'Someone smuggled in a phone. You pretended not to notice.',
    'The warden gave a speech about rehabilitation. Nobody was listening.',
    'A prison guard remembered your name today. Not sure if that\'s good or bad.',
    'You found a book in the prison library and read it cover to cover.',
    'Mail day. Nothing for you. Again.',
    'Someone started a rumor about you. It was both untrue and oddly flattering.',

    // Self-improvement
    'You started working out seriously. Prison has great fitness motivation.',
    'You enrolled in a prison education program. Knowledge is power, even here.',
    'You took up meditation. The first session lasted 30 seconds.',
    'You volunteered for kitchen duty. The food didn\'t improve.',
    'You learned to make art from whatever materials you could find.',

    // Dark humor
    'Another day in paradise. The barbed wire really catches the sunlight nicely.',
    'You\'ve started rating the prison meals on a scale of 1-10. Today was a 2.',
    'Conjugal visit day. Not for you, though. You watched TV instead.',
    'The highlight of your week was finding a ramen flavor you hadn\'t tried.',
    'You marked another day on your calendar. The wall is running out of space.',
    'A bird landed on your windowsill. It was the most exciting thing all week.',
    'You realized you\'re institutionalized when you started defending the food.',
    'Someone asked what you\'re in for. You made up something more impressive.',
    'You had a dream about freedom. Waking up was the worst part.',
    'Prison talent show tonight. Someone sang off-key. Everyone cheered anyway.',
  ];
}

// ============================================================
// 6. canAttemptEscape
// ============================================================

export interface EscapeAssessment {
  canAttempt: boolean;
  successChance: number;
}

/**
 * Evaluate whether a prison escape is feasible and how likely
 * it is to succeed. Spoiler: it's almost never a good idea.
 *
 * Factors:
 * - Must have served at least 2 seasons (you need to learn the layout)
 * - Higher smarts = better planning
 * - More time served = better knowledge of routines
 * - Health matters — you might need to run
 */
export function canAttemptEscape(state: GameState): EscapeAssessment {
  const { character } = state;

  // Must actually be in prison
  if (!character.inPrison) {
    return { canAttempt: false, successChance: 0 };
  }

  // Need to have served some time to learn the layout
  const totalSentence = character.criminalRecord.reduce(
    (sum, r) => sum + (r.sentenced ?? 0), 0
  );
  const totalServed = character.criminalRecord.reduce(
    (sum, r) => sum + (r.served ?? 0), 0
  );
  const timeServedThisBid = totalServed > 0 ? totalServed : 0;

  if (timeServedThisBid < 2) {
    return { canAttempt: false, successChance: 0 };
  }

  // ---- Calculate success chance ----

  // Base chance: pretty low — prisons are designed to keep you in
  let successChance = 0.08;

  // Smarts: clever planning, up to +15%
  successChance += (character.stats.smarts / 100) * 0.15;

  // Health: need to be physically capable, up to +10%
  successChance += (character.stats.health / 100) * 0.10;

  // Time served: more time = better knowledge of guard rotations
  // Up to +10% at 8+ seasons served
  const timeBonus = Math.min(timeServedThisBid / 8, 1) * 0.10;
  successChance += timeBonus;

  // Short sentence remaining makes escape less desperate (and
  // guards know it), but also you have less to lose
  if (character.prisonSeasonsLeft <= 2) {
    successChance -= 0.05; // Guards watch short-timers less, but you're less motivated
  }

  // Previous escape attempts (implied by multiple sentences) make
  // guards more vigilant
  const priorSentences = character.criminalRecord.filter(
    (r) => r.sentenced !== undefined && r.sentenced > 0
  ).length;
  if (priorSentences > 1) {
    successChance -= 0.05 * (priorSentences - 1);
  }

  successChance = clamp(successChance, 0.02, 0.35);

  return {
    canAttempt: true,
    successChance: Math.round(successChance * 100) / 100,
  };
}
