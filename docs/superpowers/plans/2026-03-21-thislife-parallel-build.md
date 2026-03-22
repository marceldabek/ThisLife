# ThisLife Parallel Build Plan

> **For agentic workers:** Each task is assigned to an independent sub-agent. Read `src/types/game.ts` and `src/types/events.ts` for all shared interfaces before writing code.

**Goal:** Build all game engine modules, data content, and enhanced screens in parallel to produce a playable life simulator.

**Architecture:** Pure engine functions in `src/engine/` are imported by the Zustand store. Static game content in `src/data/` exports typed arrays. Screens in `app/` consume the store.

**Tech Stack:** TypeScript, React Native (Expo), Zustand, Expo Router

---

## Agent Tasks

### 1. Engine: ageUp.ts
- Create: `src/engine/ageUp.ts`
- Season advancement: stat decay by age, salary income, education progression, prison time, relationship aging, asset value changes, trigger random events

### 2. Engine: events.ts
- Create: `src/engine/events.ts`
- Event system: filter eligible events by conditions, weighted random selection, resolve choice outcomes using weighted outcomes, apply stat effects

### 3. Engine: careers.ts
- Create: `src/engine/careers.ts`
- Career logic: get available jobs based on education/stats/age, apply for job (interview check), work hard/slack off performance changes, promotion eligibility, salary scaling

### 4. Engine: relationships.ts
- Create: `src/engine/relationships.ts`
- Generate family at birth (2 parents, 0-3 siblings), add friends through school/work, romantic mechanics, interaction effects, aging/death of NPCs

### 5. Engine: economy.ts
- Create: `src/engine/economy.ts`
- Per-season income/expense calculation, asset appreciation/depreciation, investment returns, debt interest, net worth calculation

### 6. Engine: crime.ts
- Create: `src/engine/crime.ts`
- Attempt crime with success probability (based on smarts, reputation), arrest/trial/sentencing, prison duration, organized crime unlocks

### 7. Data: Career Definitions
- Create: `src/data/careers.ts`
- All 10 careers (Medicine, Law, Tech, Music, Food, Crime, Sports, Business, Politics, Social Media) with 4-6 levels each, salaries, requirements

### 8. Data: Childhood Events
- Create: `src/data/events/childhood.ts`
- 25+ events for ages 0-12: family moments, school events, playground drama, first experiences

### 9. Data: School Events
- Create: `src/data/events/school.ts`
- 35+ events for school years: exams, bullying, clubs, prom, graduation, college decisions

### 10. Data: Career Events
- Create: `src/data/events/career.ts`
- 15-20 events per career (150+ total): workplace scenarios, promotion opportunities, office drama

### 11. Data: Crime Events
- Create: `src/data/events/crime.ts`
- 30+ crime events: opportunities, close calls, arrests, prison life, gang dynamics

### 12. Data: Relationship Events
- Create: `src/data/events/relationship.ts`
- 50+ events: dating drama, marriage proposals, affairs, family conflicts, friendships

### 13. Data: Random/Life Events
- Create: `src/data/events/random.ts`
- 60+ general life events: lottery, accidents, weather, viral moments, inheritances, health scares

### 14. Data: Names
- Create: `src/data/names.ts`
- 500+ first names (male + female) and 500+ last names for character generation

### 15. Data: Items & Assets
- Create: `src/data/items.ts`
- Houses, cars, businesses, stocks with prices and value appreciation rates

### 16. Data: Achievements
- Create: `src/data/achievements.ts`
- 30+ achievements with conditions: "Millionaire", "Crime Boss", "PhD", etc.

### 17. Screen: Event Modal
- Modify: `app/event/[id].tsx`
- Full event display with dynamic choices, outcome animations, stat change display

### 18. Screen: Character Creation Enhancement
- Modify: `app/character-creation.tsx`
- Add random name generation, "Random Life" button, character preview

### 19. Components: Game-Specific
- Create: `src/components/game/EventCard.tsx`
- Create: `src/components/game/RelationshipCard.tsx`
- Create: `src/components/game/CareerListingCard.tsx`
- Create: `src/components/game/AchievementBadge.tsx`
- Create: `src/components/game/index.ts`

### 20. Mini-game: Job Interview
- Create: `src/components/minigames/InterviewGame.tsx`
- Timed multiple-choice questions, scoring, pass/fail

### 21. Mini-game: Blackjack
- Create: `src/components/minigames/BlackjackGame.tsx`
- Simple blackjack with hit/stand, bet with in-game money

### 22. Mini-game: Exam
- Create: `src/components/minigames/ExamGame.tsx`
- Multiple choice exam, difficulty scales with education level
