// ============================================================
// ThisLife — Central Event Registry
// Imports all event data files and exports a flat array + lookup.
// ============================================================

import { GameEvent } from '../../types/events';

// Import event arrays (files created by parallel agents)
// These imports will work once the data agents complete their files.
// For now, we use try/catch-style safe imports via re-exports.

let ALL_EVENTS: GameEvent[] = [];

// We build the registry lazily so imports that don't exist yet don't crash the app.
let _initialized = false;

export function initializeEventRegistry() {
  if (_initialized) return;
  _initialized = true;

  try {
    // Each of these files exports a named array of GameEvent[]
    const childhood = require('./childhood');
    ALL_EVENTS.push(...(childhood.CHILDHOOD_EVENTS || []));
  } catch {}

  try {
    const school = require('./school');
    ALL_EVENTS.push(...(school.SCHOOL_EVENTS || []));
  } catch {}

  try {
    const career = require('./career');
    ALL_EVENTS.push(...(career.CAREER_EVENTS || []));
  } catch {}

  try {
    const crime = require('./crime');
    ALL_EVENTS.push(...(crime.CRIME_EVENTS || []));
  } catch {}

  try {
    const relationship = require('./relationship');
    ALL_EVENTS.push(...(relationship.RELATIONSHIP_EVENTS || []));
  } catch {}

  try {
    const random = require('./random');
    ALL_EVENTS.push(...(random.RANDOM_EVENTS || []));
  } catch {}

  try {
    const careerPart2 = require('./career_part2');
    ALL_EVENTS.push(...(careerPart2.CAREER_EVENTS_PART2 || []));
  } catch {}
}

export function getAllEvents(): GameEvent[] {
  initializeEventRegistry();
  return ALL_EVENTS;
}

export function getEventById(id: string): GameEvent | undefined {
  initializeEventRegistry();
  return ALL_EVENTS.find((e) => e.id === id);
}

export function getEventsByCategory(category: string): GameEvent[] {
  initializeEventRegistry();
  return ALL_EVENTS.filter((e) => e.category === category);
}

export function getEventCount(): number {
  initializeEventRegistry();
  return ALL_EVENTS.length;
}
