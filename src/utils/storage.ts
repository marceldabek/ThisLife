import AsyncStorage from '@react-native-async-storage/async-storage';
import { GameState } from '../types/game';

const SAVE_KEY_PREFIX = 'thislife_save_';
const SAVE_META_KEY = 'thislife_saves_meta';

interface SaveMeta {
  slot: number;
  name: string;
  age: number;
  date: string;
}

/**
 * Save game state to a numbered slot (0-2)
 */
export async function saveGameToSlot(slot: number, state: GameState): Promise<void> {
  const key = `${SAVE_KEY_PREFIX}${slot}`;
  const data = JSON.stringify(state);
  await AsyncStorage.setItem(key, data);

  // Update meta
  const meta = await getSavesMeta();
  meta[slot] = {
    slot,
    name: `${state.character.firstName} ${state.character.lastName}`,
    age: state.character.age,
    date: new Date().toISOString(),
  };
  await AsyncStorage.setItem(SAVE_META_KEY, JSON.stringify(meta));
}

/**
 * Load game state from a numbered slot
 */
export async function loadGameFromSlot(slot: number): Promise<GameState | null> {
  const key = `${SAVE_KEY_PREFIX}${slot}`;
  const data = await AsyncStorage.getItem(key);
  if (!data) return null;
  return JSON.parse(data) as GameState;
}

/**
 * Delete a save slot
 */
export async function deleteSaveSlot(slot: number): Promise<void> {
  const key = `${SAVE_KEY_PREFIX}${slot}`;
  await AsyncStorage.removeItem(key);

  const meta = await getSavesMeta();
  delete meta[slot];
  await AsyncStorage.setItem(SAVE_META_KEY, JSON.stringify(meta));
}

/**
 * Get metadata for all save slots
 */
export async function getSavesMeta(): Promise<Record<number, SaveMeta>> {
  const data = await AsyncStorage.getItem(SAVE_META_KEY);
  if (!data) return {};
  return JSON.parse(data);
}

/**
 * List all saves with metadata
 */
export async function listSaves(): Promise<SaveMeta[]> {
  const meta = await getSavesMeta();
  return Object.values(meta).sort((a, b) => a.slot - b.slot);
}
