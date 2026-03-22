// ============================================================
// ThisLife — Relationship Mechanics
// Family generation, NPC creation, interactions, compatibility,
// seasonal updates, and available-action resolution.
// All functions are pure (no side effects).
// ============================================================

import type {
  Gender,
  Relationship,
  RelationshipType,
  Stats,
} from '../types/game';
import {
  pickRandom,
  pickRandomN,
  randomInt,
  chance,
  clamp,
} from '../utils/random';

// ------------------------------------------------------------------
// Placeholder name pools (will be replaced by names.ts later)
// ------------------------------------------------------------------

const MALE_FIRST_NAMES = [
  'James', 'Robert', 'John', 'Michael', 'David', 'William',
  'Richard', 'Joseph', 'Thomas', 'Daniel', 'Matthew', 'Anthony',
  'Mark', 'Steven', 'Paul', 'Andrew', 'Joshua', 'Kenneth',
  'Kevin', 'Brian', 'George', 'Timothy', 'Ronald', 'Edward',
];

const FEMALE_FIRST_NAMES = [
  'Mary', 'Patricia', 'Jennifer', 'Linda', 'Barbara', 'Elizabeth',
  'Susan', 'Jessica', 'Sarah', 'Karen', 'Lisa', 'Nancy',
  'Betty', 'Margaret', 'Sandra', 'Ashley', 'Dorothy', 'Kimberly',
  'Emily', 'Donna', 'Michelle', 'Carol', 'Amanda', 'Melissa',
];

const LAST_NAMES = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia',
  'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez',
  'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson',
  'Martin', 'Lee', 'Perez', 'Thompson', 'White', 'Harris',
];

// ------------------------------------------------------------------
// Trait pool
// ------------------------------------------------------------------

const TRAIT_POOL = [
  'kind', 'funny', 'serious', 'stubborn', 'generous', 'selfish',
  'ambitious', 'lazy', 'loyal', 'jealous', 'creative', 'boring',
  'adventurous', 'cautious', 'optimistic', 'pessimistic', 'charming',
  'awkward', 'intelligent', 'naive', 'athletic', 'clumsy',
  'honest', 'manipulative', 'patient', 'impulsive', 'compassionate',
  'cold', 'confident', 'insecure',
];

// ------------------------------------------------------------------
// Emoji helpers
// ------------------------------------------------------------------

const MALE_EMOJIS: Record<string, string[]> = {
  parent:   ['👨', '👴'],
  sibling:  ['👦', '🧑'],
  child:    ['👶', '👦', '🧑'],
  friend:   ['🧑', '👨'],
  romantic: ['💑', '🧑'],
  spouse:   ['💍', '👨'],
  exSpouse: ['💔', '🧑'],
  coworker: ['👷', '🧑'],
  boss:     ['🤵', '👨‍💼'],
};

const FEMALE_EMOJIS: Record<string, string[]> = {
  parent:   ['👩', '👵'],
  sibling:  ['👧', '🧑'],
  child:    ['👶', '👧', '🧑'],
  friend:   ['🧑', '👩'],
  romantic: ['💑', '🧑'],
  spouse:   ['💍', '👩'],
  exSpouse: ['💔', '🧑'],
  coworker: ['👷‍♀️', '🧑'],
  boss:     ['🤵‍♀️', '👩‍💼'],
};

function emojiForPerson(gender: Gender, type: RelationshipType): string {
  const pool = gender === 'male' ? MALE_EMOJIS : FEMALE_EMOJIS;
  return pickRandom(pool[type] ?? ['🧑']);
}

// ------------------------------------------------------------------
// Internal helpers
// ------------------------------------------------------------------

let _nextId = 1;

function makeId(): string {
  return `rel_${Date.now()}_${_nextId++}`;
}

function randomGender(): Gender {
  return chance(0.5) ? 'male' : 'female';
}

function randomFirstName(gender: Gender): string {
  return gender === 'male'
    ? pickRandom(MALE_FIRST_NAMES)
    : pickRandom(FEMALE_FIRST_NAMES);
}

function randomTraits(count?: number): string[] {
  const n = count ?? randomInt(1, 3);
  return pickRandomN(TRAIT_POOL, n);
}

// ------------------------------------------------------------------
// 1. generateFamily
// ------------------------------------------------------------------

/**
 * Generate the player's starting family at birth.
 * Returns mother, father, and 0-3 siblings.
 */
export function generateFamily(playerGender: Gender): Relationship[] {
  const familyLastName = pickRandom(LAST_NAMES);
  const family: Relationship[] = [];

  // Mother
  const motherAge = randomInt(20, 40);
  family.push({
    id: makeId(),
    name: `${randomFirstName('female')} ${familyLastName}`,
    type: 'parent',
    gender: 'female',
    age: motherAge,
    closeness: randomInt(70, 95),
    traits: randomTraits(),
    isAlive: true,
    emoji: '👩',
  });

  // Father
  const fatherAge = randomInt(20, 45);
  family.push({
    id: makeId(),
    name: `${randomFirstName('male')} ${familyLastName}`,
    type: 'parent',
    gender: 'male',
    age: fatherAge,
    closeness: randomInt(70, 95),
    traits: randomTraits(),
    isAlive: true,
    emoji: '👨',
  });

  // 0-3 siblings
  const siblingCount = randomInt(0, 3);
  for (let i = 0; i < siblingCount; i++) {
    const sibGender = randomGender();
    const sibAge = randomInt(1, 15); // older siblings
    family.push({
      id: makeId(),
      name: `${randomFirstName(sibGender)} ${familyLastName}`,
      type: 'sibling',
      gender: sibGender,
      age: sibAge,
      closeness: randomInt(50, 80),
      traits: randomTraits(),
      isAlive: true,
      emoji: sibGender === 'male' ? '👦' : '👧',
    });
  }

  return family;
}

// ------------------------------------------------------------------
// 2. generateRandomPerson
// ------------------------------------------------------------------

/** Default starting closeness ranges by relationship type */
const BASE_CLOSENESS: Record<RelationshipType, [number, number]> = {
  parent:   [70, 95],
  sibling:  [50, 80],
  child:    [80, 100],
  friend:   [30, 60],
  romantic: [40, 70],
  spouse:   [70, 95],
  exSpouse: [5, 30],
  coworker: [20, 50],
  boss:     [15, 45],
};

/**
 * Create a random NPC (without `id` — caller assigns that).
 */
export function generateRandomPerson(
  type: RelationshipType,
  ageRange: [number, number],
): Omit<Relationship, 'id'> {
  const gender = randomGender();
  const firstName = randomFirstName(gender);
  const lastName = pickRandom(LAST_NAMES);
  const [minClose, maxClose] = BASE_CLOSENESS[type];

  return {
    name: `${firstName} ${lastName}`,
    type,
    gender,
    age: randomInt(ageRange[0], ageRange[1]),
    closeness: randomInt(minClose, maxClose),
    traits: randomTraits(),
    isAlive: true,
    emoji: emojiForPerson(gender, type),
    ...(type === 'romantic' ? { isDateable: true, yearsTogether: 0 } : {}),
    ...(type === 'spouse' ? { yearsTogether: 0 } : {}),
  };
}

// ------------------------------------------------------------------
// 3. interactionEffect
// ------------------------------------------------------------------

interface InteractionResult {
  closenessChange: number;
  message: string;
}

/**
 * Compute the effect of a player action on a relationship.
 * Returns the closeness delta and a descriptive message.
 */
export function interactionEffect(
  action: string,
  relationship: Relationship,
): InteractionResult {
  const { name, type, closeness } = relationship;

  switch (action) {
    // ---- Universal actions ----

    case 'spend_time':
      return {
        closenessChange: randomInt(5, 15),
        message: `You spent quality time with ${name}.`,
      };

    case 'gift': {
      const bonus = randomInt(10, 20);
      return {
        closenessChange: bonus,
        message: `You gave ${name} a thoughtful gift. (+${bonus} closeness)`,
      };
    }

    case 'compliment':
      return {
        closenessChange: randomInt(3, 8),
        message: `You paid ${name} a nice compliment.`,
      };

    case 'insult':
      return {
        closenessChange: -randomInt(10, 20),
        message: `You insulted ${name}. They didn't take it well.`,
      };

    case 'argue':
      return {
        closenessChange: -randomInt(15, 25),
        message: `You got into a heated argument with ${name}.`,
      };

    case 'fight': {
      const policeInvolved = chance(0.25);
      const delta = -randomInt(20, 30);
      const msg = policeInvolved
        ? `You got into a physical fight with ${name}. The police were called!`
        : `You got into a physical fight with ${name}.`;
      return { closenessChange: delta, message: msg };
    }

    // ---- Romantic-specific actions ----

    case 'flirt': {
      if (type !== 'romantic' && type !== 'friend' && type !== 'coworker') {
        return {
          closenessChange: -randomInt(5, 10),
          message: `You tried to flirt with ${name}... it was awkward.`,
        };
      }
      return {
        closenessChange: randomInt(5, 10),
        message: `You flirted with ${name}. They seemed into it.`,
      };
    }

    case 'date': {
      if (type !== 'romantic' && type !== 'spouse') {
        return {
          closenessChange: 0,
          message: `${name} isn't interested in going on a date with you.`,
        };
      }
      return {
        closenessChange: randomInt(8, 15),
        message: `You went on a wonderful date with ${name}.`,
      };
    }

    case 'propose': {
      if (type !== 'romantic') {
        return {
          closenessChange: -randomInt(5, 15),
          message: `You can't propose to ${name} — you're not in a romantic relationship.`,
        };
      }
      if (closeness < 80) {
        return {
          closenessChange: -randomInt(10, 20),
          message: `You proposed to ${name}, but they said it's too soon. Awkward...`,
        };
      }
      return {
        closenessChange: randomInt(10, 20),
        message: `You proposed to ${name} and they said YES!`,
      };
    }

    case 'cheat': {
      const caught = chance(0.7);
      if (caught) {
        return {
          closenessChange: -100,
          message: `${name} found out you cheated. The relationship is destroyed.`,
        };
      }
      return {
        closenessChange: -randomInt(5, 10),
        message: `You cheated on ${name}... they don't know yet, but the guilt weighs on you.`,
      };
    }

    // ---- Family-specific actions ----

    case 'ask_money': {
      if (type !== 'parent' && type !== 'sibling' && type !== 'spouse') {
        return {
          closenessChange: -randomInt(3, 8),
          message: `You asked ${name} for money. They were offended.`,
        };
      }
      const willGive = closeness >= 50 && chance(0.6);
      if (willGive) {
        const amount = randomInt(100, 5000);
        return {
          closenessChange: -randomInt(2, 5),
          message: `${name} gave you $${amount.toLocaleString()}.`,
        };
      }
      return {
        closenessChange: -randomInt(5, 10),
        message: `${name} refused to give you money.`,
      };
    }

    default:
      return {
        closenessChange: 0,
        message: `Nothing happened with ${name}.`,
      };
  }
}

// ------------------------------------------------------------------
// 4. checkCompatibility
// ------------------------------------------------------------------

/** Trait-to-stat affinity map (trait favors higher stat) */
const TRAIT_STAT_AFFINITY: Record<string, keyof Stats> = {
  athletic:    'health',
  adventurous: 'health',
  intelligent: 'smarts',
  creative:    'smarts',
  ambitious:   'smarts',
  charming:    'looks',
  confident:   'looks',
  funny:       'happiness',
  optimistic:  'happiness',
  kind:        'happiness',
  compassionate: 'happiness',
  generous:    'happiness',
};

/** Traits that penalise compatibility regardless of stats */
const NEGATIVE_TRAITS = new Set([
  'selfish', 'jealous', 'manipulative', 'cold', 'boring', 'stubborn',
]);

/** Traits that always boost compatibility */
const POSITIVE_TRAITS = new Set([
  'loyal', 'honest', 'patient', 'kind', 'generous', 'compassionate',
]);

/**
 * Return a 0-100 compatibility score between the player's stats and an
 * NPC's trait list.
 */
export function checkCompatibility(
  playerStats: Stats,
  personTraits: string[],
): number {
  if (personTraits.length === 0) return 50; // neutral baseline

  let score = 50; // start at midpoint

  for (const trait of personTraits) {
    // Stat-affinity bonus: the higher the linked stat, the bigger the boost
    const linkedStat = TRAIT_STAT_AFFINITY[trait];
    if (linkedStat) {
      // Stat is 0-100 — scale contribution to roughly +0..+15
      score += Math.round((playerStats[linkedStat] / 100) * 15);
    }

    // Flat bonuses / penalties
    if (POSITIVE_TRAITS.has(trait)) {
      score += randomInt(3, 8);
    }
    if (NEGATIVE_TRAITS.has(trait)) {
      score -= randomInt(3, 10);
    }
  }

  return clamp(Math.round(score), 0, 100);
}

// ------------------------------------------------------------------
// 5. seasonRelationshipUpdate
// ------------------------------------------------------------------

/**
 * Apply passive per-season changes to every relationship:
 *  - Small closeness drift (-2 to +1)
 *  - Age increment (each call = 1 season = 0.25 years)
 *  - Small chance of death for elderly NPCs (age > 70)
 *
 * Returns a new array (does not mutate the input).
 */
export function seasonRelationshipUpdate(
  relationships: Relationship[],
): Relationship[] {
  return relationships.map((rel) => {
    // Skip already-dead NPCs
    if (!rel.isAlive) return rel;

    // Closeness drift: -2 to +1
    const drift = randomInt(-2, 1);
    const newCloseness = clamp(rel.closeness + drift, 0, 100);

    // Age increment: +0.25 per season
    const newAge = parseFloat((rel.age + 0.25).toFixed(2));

    // Mortality check for elderly (age > 70)
    // Probability increases with age: base 0.5% per season at 70,
    // rising ~0.5% per additional year of age.
    let died = false;
    if (newAge > 70) {
      const yearsOver70 = newAge - 70;
      const deathChance = 0.005 + yearsOver70 * 0.005;
      died = chance(deathChance);
    }

    return {
      ...rel,
      closeness: newCloseness,
      age: newAge,
      isAlive: !died,
      ...(rel.yearsTogether !== undefined
        ? { yearsTogether: parseFloat((rel.yearsTogether + 0.25).toFixed(2)) }
        : {}),
    };
  });
}

// ------------------------------------------------------------------
// 6. getAvailableInteractions
// ------------------------------------------------------------------

/**
 * Return the list of valid action strings for the given relationship,
 * based on its type and current state.
 */
export function getAvailableInteractions(relationship: Relationship): string[] {
  const { type, isAlive, closeness } = relationship;

  if (!isAlive) return [];

  // Universal actions available to every living relationship
  const actions: string[] = [
    'spend_time',
    'gift',
    'compliment',
    'insult',
    'argue',
  ];

  // Fight is always possible but risky
  actions.push('fight');

  // Family actions
  if (type === 'parent' || type === 'sibling') {
    actions.push('ask_money');
  }

  // Romantic actions
  if (type === 'romantic') {
    actions.push('flirt', 'date', 'cheat');
    if (closeness >= 80) {
      actions.push('propose');
    }
  }

  // Spouse actions
  if (type === 'spouse') {
    actions.push('date', 'cheat', 'ask_money');
  }

  // Flirting with friends / coworkers (could spark romance)
  if (type === 'friend' || type === 'coworker') {
    actions.push('flirt');
  }

  return actions;
}
