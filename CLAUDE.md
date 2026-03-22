# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ThisLife is a text-based life simulator mobile game (like BitLife) built with React Native/Expo. Players live a full life from birth to death making choices about education, careers, relationships, crime, etc. The design philosophy is "If Apple made a life simulator" — premium minimalist UI inspired by Flighty/Things 3.

## Commands

```bash
npx expo start          # Start dev server (press i for iOS, a for Android, w for web)
npx expo start --web    # Start for web directly
npx expo lint           # Run linter
npx expo export --platform web  # Build for web
```

No test framework is currently configured.

## Architecture

### Routing (Expo Router — file-based)

- `app/_layout.tsx` — Root Stack navigator
- `app/(tabs)/_layout.tsx` — Bottom tab navigator (Life, Career, People, Activities, Identity)
- `app/(tabs)/index.tsx` — Main life screen with age-up button and event log
- `app/event/[id].tsx` — Modal for event choices
- `app/minigame/[type].tsx` — Full-screen mini-game modal
- `app/character-creation.tsx` — New game character creation

### Engine Layer (`src/engine/`) — Pure Functions, No UI

All engine modules are pure: they take state in, return deltas out, never mutate. The store merges their output.

- **`ageUp.ts`** — Core season-advancement orchestrator. `performAgeUp(state)` returns a partial `GameState` update that handles: season/age advancement, stat decay by age, natural death checks, income/expenses, education auto-progression, prison time, relationship aging, asset value changes, career progression. This is the heartbeat of the game.
- **`events.ts`** — Event selection pipeline: `checkCondition()` → `getEligibleEvents()` → `selectEvent()` (weighted random) → `getAvailableChoices()` → `resolveChoice()` → `applyOutcome()`. Entry point: `processSeasonEvents(allEvents, state)`.
- **`careers.ts`** — Job eligibility, hire probability, promotions, work/slack effects.
- **`relationships.ts`** — Family generation, NPC creation, interaction effects (spend time, gift, insult, propose, etc.), compatibility scoring, seasonal drift.
- **`economy.ts`** / **`crime.ts`** — Money and crime subsystems.

### State Management (Zustand)

Two stores:
- **`src/store/gameStore.ts`** (`useGameStore`) — All game state: character, relationships, assets, event log, achievements. Exposes the full `GameActions` API that screens and engine modules call. Some methods are stubs pointing to engine implementations.
- **`src/store/settingsStore.ts`** (`useAppStore`) — App-level state: `hasStartedGame`, `currentSaveSlot`, loading flags.

### Data Layer (`src/data/`)

- **`events/index.ts`** — Lazy-loaded event registry using `require()` with try/catch. Call `initializeEventRegistry()` before accessing events. Each category file exports a named constant (e.g., `CHILDHOOD_EVENTS`, `CAREER_EVENTS`).
- **`events/*.ts`** — Event definitions by category: childhood, school, career, career_part2, crime, relationship, random.
- **`careers.ts`** — 10 career definitions with level progressions.
- **`names.ts`**, **`items.ts`**, **`achievements.ts`** — Static game content.

### Type System (`src/types/`)

- **`game.ts`** — All core interfaces: `GameState`, `Character`, `Stats`, `CareerDefinition`, `CareerPosition`, `Relationship`, `Asset`, `Education`, etc. Also exports helper functions (`getLifeStage`, `getNextSeason`) and defaults (`DEFAULT_STATS`, `DEFAULT_SETTINGS`).
- **`events.ts`** — Event system types: `GameEvent`, `EventChoice`, `WeightedOutcome`, `StatEffect`, `EventCondition`. The condition/effect type system is extensive — new conditions/effects must be added to both the type unions and the engine switch statements.

### UI Components

- **`src/components/ui/`** — Base design-system components: `Button`, `Card`, `Text`, `StatBar` + barrel export.
- **`src/components/game/`** — Game-specific: `EventCard`, `RelationshipRow`, `CareerListingCard`, `AchievementBadge`, `SeasonBanner` + barrel export.
- **`src/components/minigames/`** — `ExamGame`, `InterviewGame`, `BlackjackGame`.

### Theme (`src/theme/`)

Apple-inspired design tokens. Light mode only. Key conventions:
- Colors: near-monochrome + iOS blue accent (`#007AFF`). Stat-specific colors (health=red, happiness=yellow, smarts=purple, looks=pink, money=green).
- Spacing scale and border radius in `spacing.ts`.
- Typography variants in `typography.ts`.

## Key Patterns

- **Time unit**: Seasons (Spring→Summer→Fall→Winter). Each "Next Season" tap = 3 months. Year increments when winter→spring.
- **Stats**: health, happiness, smarts, looks (all 0-100). Money is unclamped dollars. Reputation is hidden (-100 to 100).
- **Event flow**: Life screen calls `ageUp()` → then `processSeasonEvents()` → if event selected, navigates to `/event/[id]` modal → player picks choice → `resolveChoice()` picks weighted outcome → `applyOutcome()` returns state delta.
- **Adding events**: Create `GameEvent` objects matching the interfaces in `src/types/events.ts`. Add to the appropriate `src/data/events/*.ts` file and ensure the export name is registered in `src/data/events/index.ts`.
- **Path alias**: `@/*` maps to the project root (tsconfig paths).
- **Styling**: React Native `StyleSheet.create` + theme tokens. No external styling library.
