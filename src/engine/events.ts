// ============================================================
// ThisLife — Event Selection & Resolution Engine
// Pure functions for checking conditions, filtering events,
// selecting via weighted random, and applying outcomes.
// ============================================================

import {
  GameState,
  Character,
  Relationship,
  Asset,
  StatKey,
  Season,
  LifeStage,
  EducationLevel,
  getLifeStage,
} from '../types/game';

import {
  EventCondition,
  GameEvent,
  EventChoice,
  WeightedOutcome,
  StatEffect,
  EffectType,
} from '../types/events';

import { weightedRandom, chance, clamp } from '../utils/random';

// ============================================================
// 1. checkCondition
// ============================================================

/**
 * Check whether a single EventCondition is satisfied by the current GameState.
 * Handles every ConditionType defined in the events type system.
 */
export function checkCondition(condition: EventCondition, state: GameState): boolean {
  const { character } = state;

  switch (condition.type) {
    // ---- Age ----
    case 'minAge':
      return character.age >= (condition.value as number);

    case 'maxAge':
      return character.age <= (condition.value as number);

    // ---- Stats ----
    case 'minStat': {
      const stat = condition.stat as StatKey;
      return character.stats[stat] >= (condition.value as number);
    }

    case 'maxStat': {
      const stat = condition.stat as StatKey;
      return character.stats[stat] <= (condition.value as number);
    }

    // ---- Career ----
    case 'hasCareerId':
      return character.career !== null && character.career.careerId === (condition.value as string);

    case 'noCareerId':
      return character.career === null || character.career.careerId !== (condition.value as string);

    // ---- Relationships ----
    case 'hasRelationType':
      return state.relationships.some(
        (r) => r.type === (condition.value as string) && r.isAlive
      );

    // ---- Prison ----
    case 'inPrison':
      return character.inPrison === (condition.value as boolean);

    case 'notInPrison':
      return !character.inPrison;

    // ---- Money ----
    case 'minMoney':
      return character.money >= (condition.value as number);

    case 'maxMoney':
      return character.money <= (condition.value as number);

    // ---- Education ----
    case 'hasEducation': {
      const levels: EducationLevel[] = [
        'none',
        'elementary',
        'middleSchool',
        'highSchool',
        'college',
        'gradSchool',
      ];
      const requiredIdx = levels.indexOf(condition.value as EducationLevel);
      const currentIdx = levels.indexOf(character.education.level);
      return currentIdx >= requiredIdx;
    }

    // ---- Season ----
    case 'season':
      return character.season === (condition.value as Season);

    // ---- Life stage ----
    case 'lifeStage':
      return getLifeStage(character.age) === (condition.value as LifeStage);

    // ---- Traits ----
    case 'hasTrait':
      return character.traits.includes(condition.value as string);

    // ---- Criminal record ----
    case 'hasCriminalRecord':
      return character.criminalRecord.length > 0;

    case 'noCriminalRecord':
      return character.criminalRecord.length === 0;

    // ---- Enrollment ----
    case 'isEnrolled':
      return character.education.isEnrolled;

    case 'notEnrolled':
      return !character.education.isEnrolled;

    default:
      return false;
  }
}

// ============================================================
// 2. getEligibleEvents
// ============================================================

/**
 * Filter the master event list down to events whose:
 *  - conditions are ALL satisfied
 *  - oneTime flag is respected (skip if already in firedEventIds)
 *  - probability check passes
 */
export function getEligibleEvents(allEvents: GameEvent[], state: GameState): GameEvent[] {
  return allEvents.filter((event) => {
    // One-time events that already fired are ineligible
    if (event.oneTime && state.firedEventIds.includes(event.id)) {
      return false;
    }

    // Every condition must be met
    const conditionsMet = event.conditions.every((c) => checkCondition(c, state));
    if (!conditionsMet) {
      return false;
    }

    // Probability gate
    if (!chance(event.probability)) {
      return false;
    }

    return true;
  });
}

// ============================================================
// 3. selectEvent
// ============================================================

/**
 * Weighted random selection from eligible events.
 * Priority acts as weight — higher priority events are more likely to be
 * chosen. Events without an explicit priority default to 1.
 * Returns null when there are no eligible events.
 */
export function selectEvent(eligibleEvents: GameEvent[]): GameEvent | null {
  if (eligibleEvents.length === 0) {
    return null;
  }

  const weighted = eligibleEvents.map((event) => ({
    ...event,
    weight: event.priority ?? 1,
  }));

  return weightedRandom(weighted);
}

// ============================================================
// 4. getAvailableChoices
// ============================================================

/**
 * Return only the choices the player is allowed to pick given the
 * current game state.  Choices without conditions are always available.
 */
export function getAvailableChoices(event: GameEvent, state: GameState): EventChoice[] {
  return event.choices.filter((choice) => {
    if (!choice.conditions || choice.conditions.length === 0) {
      return true;
    }
    return choice.conditions.every((c) => checkCondition(c, state));
  });
}

// ============================================================
// 5. resolveChoice
// ============================================================

/**
 * Given a player's chosen EventChoice, pick one WeightedOutcome at
 * random according to the outcome weights.
 */
export function resolveChoice(choice: EventChoice): WeightedOutcome {
  return weightedRandom(choice.outcomes);
}

// ============================================================
// 6. applyOutcome
// ============================================================

/**
 * Convert an outcome's StatEffect[] into a partial GameState delta.
 *
 * This function is pure: it creates a shallow-cloned copy of the parts
 * of state that change and returns them.  The caller is responsible for
 * merging the result into the authoritative GameState.
 */
export function applyOutcome(outcome: WeightedOutcome, state: GameState): Partial<GameState> {
  // Deep-clone the portions of state we may mutate
  const character: Character = {
    ...state.character,
    stats: { ...state.character.stats },
    traits: [...state.character.traits],
    education: { ...state.character.education },
    criminalRecord: [...state.character.criminalRecord],
    career: state.character.career ? { ...state.character.career } : null,
  };
  const relationships: Relationship[] = state.relationships.map((r) => ({ ...r }));
  const assets: Asset[] = state.assets.map((a) => ({ ...a }));

  for (const effect of outcome.effects) {
    applyEffect(effect, character, relationships, assets);
  }

  return {
    character,
    relationships,
    assets,
  };
}

// ---- Internal: apply a single StatEffect ----

function applyEffect(
  effect: StatEffect,
  character: Character,
  relationships: Relationship[],
  assets: Asset[],
): void {
  const op = effect.operation ?? 'add';

  switch (effect.type as EffectType) {
    // ---- Core stat change ----
    case 'stat': {
      const stat = effect.target as StatKey;
      const numVal = effect.value as number;
      character.stats[stat] = computeValue(character.stats[stat], numVal, op);
      character.stats[stat] = clamp(character.stats[stat], 0, 100);
      break;
    }

    // ---- Money ----
    case 'money': {
      const numVal = effect.value as number;
      character.money = computeValue(character.money, numVal, op);
      break;
    }

    // ---- Reputation ----
    case 'reputation': {
      const numVal = effect.value as number;
      character.reputation = computeValue(character.reputation, numVal, op);
      character.reputation = clamp(character.reputation, -100, 100);
      break;
    }

    // ---- Relationship closeness ----
    case 'relationship_closeness': {
      const rel = relationships.find((r) => r.id === effect.target);
      if (rel) {
        const numVal = effect.value as number;
        rel.closeness = computeValue(rel.closeness, numVal, op);
        rel.closeness = clamp(rel.closeness, 0, 100);
      }
      break;
    }

    // ---- Add relationship (value is a JSON-encoded partial or a name) ----
    case 'add_relationship': {
      // Minimal: push a placeholder; the game layer should flesh it out
      // We don't modify here because the full relationship shape depends
      // on higher-level logic.  We signal intent with a stub.
      break;
    }

    // ---- Remove relationship ----
    case 'remove_relationship': {
      const idx = relationships.findIndex((r) => r.id === effect.target);
      if (idx !== -1) {
        relationships.splice(idx, 1);
      }
      break;
    }

    // ---- Traits ----
    case 'add_trait': {
      const trait = effect.value as string;
      if (!character.traits.includes(trait)) {
        character.traits.push(trait);
      }
      break;
    }

    case 'remove_trait': {
      const trait = effect.value as string;
      const idx = character.traits.indexOf(trait);
      if (idx !== -1) {
        character.traits.splice(idx, 1);
      }
      break;
    }

    // ---- Prison ----
    case 'prison': {
      const seasons = effect.value as number;
      if (seasons > 0) {
        character.inPrison = true;
        character.prisonSeasonsLeft = seasons;
      } else {
        character.inPrison = false;
        character.prisonSeasonsLeft = 0;
      }
      break;
    }

    // ---- Career performance ----
    case 'career_performance': {
      if (character.career) {
        const numVal = effect.value as number;
        character.career = {
          ...character.career,
          performance: clamp(computeValue(character.career.performance, numVal, op), 0, 100),
        };
      }
      break;
    }

    // ---- Career satisfaction ----
    case 'career_satisfaction': {
      if (character.career) {
        const numVal = effect.value as number;
        character.career = {
          ...character.career,
          satisfaction: clamp(computeValue(character.career.satisfaction, numVal, op), 0, 100),
        };
      }
      break;
    }

    // ---- Education level change ----
    case 'education': {
      const newLevel = effect.value as string;
      character.education = {
        ...character.education,
        level: newLevel as typeof character.education.level,
      };
      break;
    }

    // ---- Death ----
    case 'death': {
      character.isAlive = false;
      character.causeOfDeath = effect.value as string;
      break;
    }

    // ---- Assets ----
    case 'add_asset': {
      // Similar to add_relationship, the full asset shape is driven by
      // higher-level logic. The effect signals intent.
      break;
    }

    case 'remove_asset': {
      const assetIdx = assets.findIndex((a) => a.id === effect.target);
      if (assetIdx !== -1) {
        assets.splice(assetIdx, 1);
      }
      break;
    }
  }
}

/**
 * Compute new value based on operation type.
 */
function computeValue(current: number, amount: number, op: 'add' | 'set' | 'multiply'): number {
  switch (op) {
    case 'add':
      return current + amount;
    case 'set':
      return amount;
    case 'multiply':
      return current * amount;
  }
}

// ============================================================
// 7. Pity System — escalating event probability
// ============================================================

// Normal pity table (age >= 10): guaranteed by 5th dry season
const PITY_TABLE = [0.10, 0.25, 0.50, 0.75, 1.0];

// Child pity table (age < 10): slower ramp, ~1 event per 2 years
const CHILD_PITY_TABLE = [0, 0.05, 0.05, 0.10, 0.15, 0.25, 0.40, 0.75, 1.0];

function getPityChance(seasonsSinceLastEvent: number, age: number): number {
  const table = age < 10 ? CHILD_PITY_TABLE : PITY_TABLE;
  const idx = Math.min(seasonsSinceLastEvent, table.length - 1);
  return table[idx];
}

/**
 * Get events eligible by conditions only (no probability gate).
 * Used by the pity system — the pity roll replaces per-event probability.
 */
function getConditionEligibleEvents(allEvents: GameEvent[], state: GameState): GameEvent[] {
  return allEvents.filter((event) => {
    if (event.oneTime && state.firedEventIds.includes(event.id)) {
      return false;
    }
    return event.conditions.every((c) => checkCondition(c, state));
  });
}

// ============================================================
// 8. processSeasonEvents
// ============================================================

/**
 * Main entry point called once per season tick.
 *
 * Uses the pity system: escalating probability each season without
 * an event. When the pity roll succeeds, selects from condition-eligible
 * events using each event's probability as a relative weight.
 *
 * Returns null when no event fires this season.
 */
export function processSeasonEvents(
  allEvents: GameEvent[],
  state: GameState,
): { event: GameEvent; availableChoices: EventChoice[] } | null {
  const pityChance = getPityChance(state.seasonsSinceLastEvent, state.character.age);

  // Pity roll: should any event fire this season?
  if (!chance(pityChance)) {
    return null;
  }

  // Get events that pass conditions (not probability — pity replaces that)
  const eligible = getConditionEligibleEvents(allEvents, state);
  if (eligible.length === 0) {
    return null;
  }

  // Use each event's probability as a relative weight for selection
  const weighted = eligible.map((event) => ({
    ...event,
    weight: (event.probability ?? 0.1) * (event.priority ?? 1),
  }));
  const event = weightedRandom(weighted);

  if (!event) {
    return null;
  }

  const availableChoices = getAvailableChoices(event, state);

  return { event, availableChoices };
}
