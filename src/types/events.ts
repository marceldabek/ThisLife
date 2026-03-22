// ============================================================
// ThisLife — Event System Types
// ============================================================

import { Season, StatKey, EducationLevel, LifeStage, CrimeType } from './game';

export type EventCategory =
  | 'life'
  | 'social'
  | 'career'
  | 'crime'
  | 'health'
  | 'relationship'
  | 'education';

export type ConditionType =
  | 'minAge'
  | 'maxAge'
  | 'minStat'
  | 'maxStat'
  | 'hasCareerId'
  | 'noCareerId'
  | 'hasRelationType'
  | 'inPrison'
  | 'notInPrison'
  | 'minMoney'
  | 'maxMoney'
  | 'hasEducation'
  | 'season'
  | 'lifeStage'
  | 'hasTrait'
  | 'hasCriminalRecord'
  | 'noCriminalRecord'
  | 'isEnrolled'
  | 'notEnrolled';

export interface EventCondition {
  type: ConditionType;
  value: string | number | boolean;
  stat?: StatKey;
}

export type EffectType =
  | 'stat'
  | 'money'
  | 'reputation'
  | 'relationship_closeness'
  | 'add_relationship'
  | 'remove_relationship'
  | 'add_trait'
  | 'remove_trait'
  | 'prison'
  | 'career_performance'
  | 'career_satisfaction'
  | 'education'
  | 'death'
  | 'add_asset'
  | 'remove_asset';

export interface StatEffect {
  type: EffectType;
  target?: string;                // stat name, relationship id, etc.
  value: number | string;         // change amount or new value
  operation?: 'add' | 'set' | 'multiply';
}

export interface WeightedOutcome {
  weight: number;
  description: string;
  effects: StatEffect[];
}

export interface EventChoice {
  id: string;
  text: string;
  hint?: string;                  // subtle consequence hint
  outcomes: WeightedOutcome[];
  conditions?: EventCondition[];  // requirements for this choice to appear
}

export interface GameEvent {
  id: string;
  title: string;
  description: string;
  conditions: EventCondition[];
  choices: EventChoice[];
  probability: number;            // 0-1, chance per season
  category: EventCategory;
  minAge?: number;
  maxAge?: number;
  requiredCareerId?: string;
  oneTime?: boolean;              // can only happen once per life
  priority?: number;              // higher = more likely selected
  cooldown?: number;              // min seasons between re-fires
}

// ---- Mini-Game Types ----

export type MiniGameType =
  | 'interview'
  | 'exam'
  | 'negotiation'
  | 'escape'
  | 'blackjack'
  | 'slots'
  | 'roulette';

export interface MiniGameResult {
  type: MiniGameType;
  success: boolean;
  score?: number;
  effects: StatEffect[];
}
