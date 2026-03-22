// ============================================================
// ThisLife — Navigation Types
// ============================================================

export type TabName = 'life' | 'career' | 'relationships' | 'activities' | 'identity';

export type RootStackParamList = {
  '(tabs)': undefined;
  'event/[id]': { id: string };
  'minigame/[type]': { type: string };
  'character-creation': undefined;
};
