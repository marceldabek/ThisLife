import { create } from 'zustand';

interface AppState {
  hasStartedGame: boolean;
  currentSaveSlot: number | null;
  isLoading: boolean;
  showCharacterCreation: boolean;

  setHasStartedGame: (value: boolean) => void;
  setCurrentSaveSlot: (slot: number | null) => void;
  setIsLoading: (value: boolean) => void;
  setShowCharacterCreation: (value: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  hasStartedGame: false,
  currentSaveSlot: null,
  isLoading: false,
  showCharacterCreation: false,

  setHasStartedGame: (value) => set({ hasStartedGame: value }),
  setCurrentSaveSlot: (slot) => set({ currentSaveSlot: slot }),
  setIsLoading: (value) => set({ isLoading: value }),
  setShowCharacterCreation: (value) => set({ showCharacterCreation: value }),
}));
