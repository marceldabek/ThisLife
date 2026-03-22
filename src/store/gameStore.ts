import { create } from 'zustand';
import {
  GameState,
  Character,
  Stats,
  Season,
  StatKey,
  Relationship,
  Asset,
  EventLogEntry,
  GameSettings,
  CareerPosition,
  Education,
  CriminalRecord,
  DEFAULT_STATS,
  DEFAULT_SETTINGS,
  DEFAULT_EDUCATION,
  getNextSeason,
} from '../types/game';
import { performAgeUp } from '../engine/ageUp';

// ---- Actions Interface ----
// This defines the full API that screens and engine modules call.
// Implementation is filled in by the engine modules.

export interface GameActions {
  // Lifecycle
  newGame: (firstName: string, lastName: string, gender: 'male' | 'female') => void;
  ageUp: () => void;
  resetGame: () => void;

  // Stats
  modifyStat: (stat: StatKey, amount: number) => void;
  setStat: (stat: StatKey, value: number) => void;

  // Money
  addMoney: (amount: number) => void;
  removeMoney: (amount: number) => boolean;

  // Reputation
  modifyReputation: (amount: number) => void;

  // Career
  applyForJob: (careerId: string) => boolean;
  workHard: () => void;
  slackOff: () => void;
  quitJob: () => void;
  getPromoted: () => void;

  // Relationships
  addRelationship: (relationship: Omit<Relationship, 'id'>) => string;
  modifyCloseness: (relationshipId: string, amount: number) => void;
  removeRelationship: (relationshipId: string) => void;
  interactWithRelationship: (relationshipId: string, action: string) => void;

  // Assets
  buyAsset: (asset: Omit<Asset, 'id'>) => boolean;
  sellAsset: (assetId: string) => void;

  // Events
  setCurrentEvent: (eventId: string | null) => void;
  addEventToLog: (entry: Omit<EventLogEntry, 'id' | 'timestamp'>) => void;
  markEventFired: (eventId: string) => void;

  // Crime
  addCriminalRecord: (record: Omit<CriminalRecord, 'age' | 'season'>) => void;
  goToPrison: (seasons: number) => void;
  servePrisonTime: () => void;

  // Education
  setEducation: (updates: Partial<Education>) => void;
  enroll: (level: Education['level'], school?: string, major?: string) => void;
  graduate: () => void;

  // Traits
  addTrait: (trait: string) => void;
  removeTrait: (trait: string) => void;

  // Achievements
  unlockAchievement: (achievementId: string) => void;

  // Settings
  updateSettings: (settings: Partial<GameSettings>) => void;

  // Save/Load
  saveGame: (slot: number) => Promise<void>;
  loadGame: (slot: number) => Promise<boolean>;
  listSaves: () => Promise<{ slot: number; name: string; age: number; date: string }[]>;

  // Death
  die: (cause: string) => void;

  // Batch effects (for event outcomes)
  applyEffects: (effects: { type: string; target?: string; value: number | string; operation?: string }[]) => void;
}

export type GameStore = GameState & GameActions;

// ---- Initial State ----

const initialCharacter: Character = {
  firstName: '',
  lastName: '',
  gender: 'male',
  age: 0,
  season: 'spring',
  stats: { ...DEFAULT_STATS },
  money: 0,
  reputation: 0,
  traits: [],
  education: { ...DEFAULT_EDUCATION },
  career: null,
  criminalRecord: [],
  isAlive: true,
  emoji: '',
  inPrison: false,
  prisonSeasonsLeft: 0,
};

const initialState: GameState = {
  character: initialCharacter,
  relationships: [],
  assets: [],
  eventLog: [],
  achievements: [],
  settings: { ...DEFAULT_SETTINGS },
  currentEventId: null,
  firedEventIds: [],
  gameOver: false,
  lifetimeEarnings: 0,
};

// ---- Store ----

export const useGameStore = create<GameStore>((set, get) => ({
  ...initialState,

  // -- Lifecycle --
  newGame: (firstName, lastName, gender) => {
    const emoji = gender === 'male' ? '\u{1F476}' : '\u{1F476}';
    set({
      ...initialState,
      character: {
        ...initialCharacter,
        firstName,
        lastName,
        gender,
        emoji,
        stats: {
          health: 80 + Math.floor(Math.random() * 21),
          happiness: 70 + Math.floor(Math.random() * 31),
          smarts: 20 + Math.floor(Math.random() * 61),
          looks: 20 + Math.floor(Math.random() * 61),
        },
      },
      relationships: [],
      assets: [],
      eventLog: [],
      firedEventIds: [],
      gameOver: false,
      lifetimeEarnings: 0,
    });
  },

  ageUp: () => {
    const state = get();
    if (!state.character.isAlive || state.gameOver) return;

    const updates = performAgeUp(state);
    if (Object.keys(updates).length > 0) {
      set(updates);
    }
  },

  resetGame: () => set(initialState),

  // -- Stats --
  modifyStat: (stat, amount) =>
    set((s) => ({
      character: {
        ...s.character,
        stats: {
          ...s.character.stats,
          [stat]: Math.max(0, Math.min(100, s.character.stats[stat] + amount)),
        },
      },
    })),

  setStat: (stat, value) =>
    set((s) => ({
      character: {
        ...s.character,
        stats: {
          ...s.character.stats,
          [stat]: Math.max(0, Math.min(100, value)),
        },
      },
    })),

  // -- Money --
  addMoney: (amount) =>
    set((s) => ({
      character: { ...s.character, money: s.character.money + amount },
      lifetimeEarnings: amount > 0 ? s.lifetimeEarnings + amount : s.lifetimeEarnings,
    })),

  removeMoney: (amount) => {
    const state = get();
    if (state.character.money < amount) return false;
    set((s) => ({
      character: { ...s.character, money: s.character.money - amount },
    }));
    return true;
  },

  // -- Reputation --
  modifyReputation: (amount) =>
    set((s) => ({
      character: {
        ...s.character,
        reputation: Math.max(-100, Math.min(100, s.character.reputation + amount)),
      },
    })),

  // -- Career --
  applyForJob: (_careerId) => {
    // Stub — implemented in src/engine/careers.ts
    return false;
  },
  workHard: () => {
    // Stub
  },
  slackOff: () => {
    // Stub
  },
  quitJob: () =>
    set((s) => ({
      character: { ...s.character, career: null },
    })),
  getPromoted: () => {
    // Stub — implemented in src/engine/careers.ts
  },

  // -- Relationships --
  addRelationship: (rel) => {
    const id = `rel_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    set((s) => ({
      relationships: [...s.relationships, { ...rel, id }],
    }));
    return id;
  },

  modifyCloseness: (relationshipId, amount) =>
    set((s) => ({
      relationships: s.relationships.map((r) =>
        r.id === relationshipId
          ? { ...r, closeness: Math.max(0, Math.min(100, r.closeness + amount)) }
          : r
      ),
    })),

  removeRelationship: (relationshipId) =>
    set((s) => ({
      relationships: s.relationships.filter((r) => r.id !== relationshipId),
    })),

  interactWithRelationship: (_relationshipId, _action) => {
    // Stub — implemented in src/engine/relationships.ts
  },

  // -- Assets --
  buyAsset: (asset) => {
    const state = get();
    if (state.character.money < asset.purchasePrice) return false;
    const id = `asset_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    set((s) => ({
      character: { ...s.character, money: s.character.money - asset.purchasePrice },
      assets: [...s.assets, { ...asset, id }],
    }));
    return true;
  },

  sellAsset: (assetId) => {
    const state = get();
    const asset = state.assets.find((a) => a.id === assetId);
    if (!asset) return;
    set((s) => ({
      character: { ...s.character, money: s.character.money + asset.value },
      assets: s.assets.filter((a) => a.id !== assetId),
    }));
  },

  // -- Events --
  setCurrentEvent: (eventId) => set({ currentEventId: eventId }),

  addEventToLog: (entry) => {
    const id = `log_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    set((s) => ({
      eventLog: [{ ...entry, id, timestamp: Date.now() }, ...s.eventLog],
    }));
  },

  markEventFired: (eventId) =>
    set((s) => ({
      firedEventIds: [...s.firedEventIds, eventId],
    })),

  // -- Crime --
  addCriminalRecord: (record) =>
    set((s) => ({
      character: {
        ...s.character,
        criminalRecord: [
          ...s.character.criminalRecord,
          {
            ...record,
            age: s.character.age,
            season: s.character.season,
          },
        ],
      },
    })),

  goToPrison: (seasons) =>
    set((s) => ({
      character: {
        ...s.character,
        inPrison: true,
        prisonSeasonsLeft: seasons,
        career: null, // lose job
      },
    })),

  servePrisonTime: () =>
    set((s) => {
      const remaining = s.character.prisonSeasonsLeft - 1;
      return {
        character: {
          ...s.character,
          prisonSeasonsLeft: Math.max(0, remaining),
          inPrison: remaining > 0,
        },
      };
    }),

  // -- Education --
  setEducation: (updates) =>
    set((s) => ({
      character: {
        ...s.character,
        education: { ...s.character.education, ...updates },
      },
    })),

  enroll: (level, school, major) =>
    set((s) => ({
      character: {
        ...s.character,
        education: {
          ...s.character.education,
          level,
          school: school || s.character.education.school,
          major: major || s.character.education.major,
          isEnrolled: true,
        },
      },
    })),

  graduate: () =>
    set((s) => ({
      character: {
        ...s.character,
        education: {
          ...s.character.education,
          isEnrolled: false,
        },
      },
    })),

  // -- Traits --
  addTrait: (trait) =>
    set((s) => ({
      character: {
        ...s.character,
        traits: s.character.traits.includes(trait)
          ? s.character.traits
          : [...s.character.traits, trait],
      },
    })),

  removeTrait: (trait) =>
    set((s) => ({
      character: {
        ...s.character,
        traits: s.character.traits.filter((t) => t !== trait),
      },
    })),

  // -- Achievements --
  unlockAchievement: (achievementId) =>
    set((s) => ({
      achievements: s.achievements.map((a) =>
        a.id === achievementId
          ? { ...a, unlockedAt: { age: s.character.age, season: s.character.season } }
          : a
      ),
    })),

  // -- Settings --
  updateSettings: (updates) =>
    set((s) => ({
      settings: { ...s.settings, ...updates },
    })),

  // -- Save/Load --
  saveGame: async (_slot) => {
    // Stub — implemented in src/utils/storage.ts
  },

  loadGame: async (_slot) => {
    // Stub — implemented in src/utils/storage.ts
    return false;
  },

  listSaves: async () => {
    // Stub — implemented in src/utils/storage.ts
    return [];
  },

  // -- Death --
  die: (cause) =>
    set((s) => ({
      character: {
        ...s.character,
        isAlive: false,
        causeOfDeath: cause,
      },
      gameOver: true,
    })),

  // -- Batch Effects --
  applyEffects: (effects) => {
    const state = get();
    for (const effect of effects) {
      switch (effect.type) {
        case 'stat':
          if (effect.target && effect.target in state.character.stats) {
            const amount = typeof effect.value === 'number' ? effect.value : 0;
            get().modifyStat(effect.target as StatKey, amount);
          }
          break;
        case 'money': {
          const amount = typeof effect.value === 'number' ? effect.value : 0;
          if (amount >= 0) get().addMoney(amount);
          else get().removeMoney(Math.abs(amount));
          break;
        }
        case 'reputation': {
          const amount = typeof effect.value === 'number' ? effect.value : 0;
          get().modifyReputation(amount);
          break;
        }
        case 'death':
          get().die(typeof effect.value === 'string' ? effect.value : 'Unknown');
          break;
        case 'prison': {
          const seasons = typeof effect.value === 'number' ? effect.value : 1;
          get().goToPrison(seasons);
          break;
        }
        case 'add_trait':
          if (typeof effect.value === 'string') get().addTrait(effect.value);
          break;
        case 'remove_trait':
          if (typeof effect.value === 'string') get().removeTrait(effect.value);
          break;
        case 'relationship_closeness': {
          const amount = typeof effect.value === 'number' ? effect.value : 0;
          if (effect.target) get().modifyCloseness(effect.target, amount);
          break;
        }
      }
    }
  },
}));
