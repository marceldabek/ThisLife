// ============================================================
// ThisLife — Core Game Types
// All game state interfaces and type definitions
// ============================================================

export type Gender = 'male' | 'female';

export type Season = 'spring' | 'summer' | 'fall' | 'winter';

export type LifeStage = 'baby' | 'child' | 'teen' | 'youngAdult' | 'adult' | 'senior';

export type EducationLevel =
  | 'none'
  | 'elementary'
  | 'middleSchool'
  | 'highSchool'
  | 'college'
  | 'gradSchool';

export type RelationshipType =
  | 'parent'
  | 'sibling'
  | 'child'
  | 'friend'
  | 'romantic'
  | 'spouse'
  | 'exSpouse'
  | 'coworker'
  | 'boss';

export type AssetType = 'house' | 'car' | 'business' | 'stock' | 'crypto';

export type CrimeType =
  | 'shoplifting'
  | 'pickpocketing'
  | 'vandalism'
  | 'robbery'
  | 'assault'
  | 'drugDealing'
  | 'fraud'
  | 'grandTheft'
  | 'murder';

export type ActivityType =
  | 'gym'
  | 'library'
  | 'nightclub'
  | 'dating'
  | 'shopping'
  | 'crime'
  | 'gambling'
  | 'volunteer'
  | 'travel';

// ---- Stats ----

export interface Stats {
  health: number;     // 0-100
  happiness: number;  // 0-100
  smarts: number;     // 0-100
  looks: number;      // 0-100
}

export type StatKey = keyof Stats;

// ---- Education ----

export interface Education {
  level: EducationLevel;
  school?: string;
  gpa?: number;
  major?: string;
  yearsCompleted: number;
  isEnrolled: boolean;
}

// ---- Career ----

export interface CareerLevel {
  title: string;
  salary: number;              // per season
  requiredPerformance: number; // min performance to promote
  seasonsToPromote: number;    // min seasons at this level before eligible
  description: string;
}

export interface CareerDefinition {
  id: string;
  name: string;
  emoji: string;
  description: string;
  levels: CareerLevel[];
  requiredEducation: EducationLevel;
  requiredSmarts?: number;
  requiredLooks?: number;
  minAge: number;
}

export interface CareerPosition {
  careerId: string;
  title: string;
  level: number;         // index into CareerDefinition.levels
  salary: number;        // per season
  seasonsInRole: number;
  satisfaction: number;  // 0-100
  performance: number;   // 0-100
}

// ---- Crime ----

export interface CriminalRecord {
  crime: string;
  crimeType: CrimeType;
  age: number;
  season: Season;
  caught: boolean;
  sentenced?: number;  // seasons in prison
  served?: number;
}

// ---- Assets ----

export interface Asset {
  id: string;
  type: AssetType;
  name: string;
  value: number;
  purchasePrice: number;
  purchaseAge: number;
  income?: number;    // per season (rentals, dividends)
  expense?: number;   // per season (maintenance)
}

// ---- Relationships ----

export interface Relationship {
  id: string;
  name: string;
  type: RelationshipType;
  gender: Gender;
  age: number;
  closeness: number;   // 0-100
  traits: string[];
  isAlive: boolean;
  emoji: string;
  // Romantic
  yearsTogether?: number;
  isDateable?: boolean;
  // Professional
  company?: string;
}

// ---- Achievements ----

export interface Achievement {
  id: string;
  title: string;
  description: string;
  condition: string;        // human-readable unlock condition
  hidden: boolean;
  unlockedAt?: { age: number; season: Season };
}

// ---- Event Log ----

export interface EventLogEntry {
  id: string;
  age: number;
  season: Season;
  title: string;
  description: string;
  choiceMade?: string;
  outcome?: string;
  effects?: Record<string, number>;
  timestamp: number;
}

// ---- Settings ----

export interface GameSettings {
  soundEnabled: boolean;
  hapticsEnabled: boolean;
  textSpeed: 'slow' | 'normal' | 'fast';
  autoSave: boolean;
}

// ---- Character ----

export interface Character {
  firstName: string;
  lastName: string;
  gender: Gender;
  age: number;
  season: Season;
  stats: Stats;
  money: number;
  reputation: number;       // hidden, -100 to 100
  traits: string[];
  education: Education;
  career: CareerPosition | null;
  criminalRecord: CriminalRecord[];
  isAlive: boolean;
  emoji: string;
  causeOfDeath?: string;
  inPrison: boolean;
  prisonSeasonsLeft: number;
}

// ---- Full Game State ----

export interface GameState {
  character: Character;
  relationships: Relationship[];
  assets: Asset[];
  eventLog: EventLogEntry[];
  achievements: Achievement[];
  settings: GameSettings;
  currentEventId: string | null;
  firedEventIds: string[];     // one-time events that already fired
  gameOver: boolean;
  lifetimeEarnings: number;
}

// ---- Helpers ----

export function getLifeStage(age: number): LifeStage {
  if (age <= 4) return 'baby';
  if (age <= 12) return 'child';
  if (age <= 17) return 'teen';
  if (age <= 25) return 'youngAdult';
  if (age <= 59) return 'adult';
  return 'senior';
}

export function getNextSeason(season: Season): Season {
  const order: Season[] = ['spring', 'summer', 'fall', 'winter'];
  const idx = order.indexOf(season);
  return order[(idx + 1) % 4];
}

export function getSeasonIndex(season: Season): number {
  return ['spring', 'summer', 'fall', 'winter'].indexOf(season);
}

export const DEFAULT_STATS: Stats = {
  health: 100,
  happiness: 100,
  smarts: 50,
  looks: 50,
};

export const DEFAULT_SETTINGS: GameSettings = {
  soundEnabled: true,
  hapticsEnabled: true,
  textSpeed: 'normal',
  autoSave: true,
};

export const DEFAULT_EDUCATION: Education = {
  level: 'none',
  yearsCompleted: 0,
  isEnrolled: false,
};
