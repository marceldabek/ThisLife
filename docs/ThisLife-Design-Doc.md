# ThisLife — Life Simulator
## Game Design Document v1.0

> **Purpose**: This document is the single source of truth for building ThisLife. It should be provided to Claude Code as context when setting up the repo, building features, and making architectural decisions.

---

## 1. Vision

ThisLife is a modern, polished text-based life simulator for iOS and Android. Players live a full life from birth to death — making choices about education, careers, relationships, crime, and everything in between. The game plays like BitLife but looks like a premium Apple Design Award-winning app (think **Flighty**, not a typical mobile game). The long-term vision adds deep career management mini-games where players don't just *have* a job — they *run* it.

**Core differentiators vs BitLife:**
- Award-winning minimalist UI — clean, light, spacious, like a premium productivity app
- No aggressive monetization — free to play, no paywalls, no interstitial ads at launch
- Career management depth (future updates) — top-down interactive views, not just menus
- Humor + darkness — absurd, funny writing with genuinely dark options available

---

## 2. Time System

Time advances in **seasons** — Spring, Summer, Fall, Winter. Each tap of the "Next Season" button advances 3 months. This gives ~4 decisions per year (more granularity than BitLife's yearly system) while keeping the pace fast enough to live a full life in a reasonable play session.

- **Age display**: "Age 24 — Summer"
- **Season affects gameplay**: Job availability, holidays, weather events, seasonal activities
- **A full life** (~80 years) = ~320 seasons = roughly 30-45 minutes of play

---

## 3. Core Gameplay Loop

```
Birth → Childhood → School → Career/Life Choices → Aging → Death
         ↕              ↕            ↕
    Random Events    Education    Relationships
                     Choices      Money/Property
                                  Crime
                                  Health
```

### 3.1 Life Stages
- **Baby (0-4)**: Random events only. Stats established.
- **Child (5-12)**: School begins. Choose extracurriculars. Family events.
- **Teen (13-17)**: High school. Part-time jobs. First relationships. Peer pressure events.
- **Young Adult (18-25)**: College/trade school/work. Major life choices begin.
- **Adult (26-59)**: Career peak. Marriage, kids, property, investments, crime empire, etc.
- **Senior (60+)**: Retirement options. Health decline. Legacy decisions.

### 3.2 Core Stats
- **Health** (0-100): Affected by lifestyle, diet, accidents, age
- **Happiness** (0-100): Affected by relationships, career satisfaction, money, events
- **Smarts** (0-100): Affects education success, career options, decision outcomes
- **Looks** (0-100): Affects relationships, certain careers, social events
- **Money**: Actual dollar amount (not a percentage)
- **Reputation** (hidden modifier): Affects how NPCs treat you, job opportunities, legal outcomes

### 3.3 Main Menu Tabs
The game is primarily menu-driven with these main sections:

- **Life** (home): Current status, age up button, recent events log
- **Career**: Current job, job listings, career actions, management (future)
- **Relationships**: Family, friends, romantic partners, interactions
- **Education**: School status, skills, courses
- **Activities**: Gym, library, nightlife, hobbies, crime, shopping
- **Assets**: Money, property, vehicles, investments
- **Identity**: Name, appearance (emoji for now), traits, achievements

---

## 4. Careers — 10 at Launch

Each career has a basic progression path (entry → mid → senior) with salary scaling. Future updates will add deep management mini-games to each.

| # | Career | Entry Role | Top Role | Notes |
|---|--------|-----------|----------|-------|
| 1 | Medicine | Nurse | Chief of Surgery | Future: surgery mini-game, manage a practice |
| 2 | Law | Paralegal | Senior Partner | Future: pick cases, courtroom decisions |
| 3 | Tech | Junior Dev | CTO / Founder | Future: build apps, manage startup |
| 4 | Music | Busker | Platinum Artist | Future: release tracks, tour management |
| 5 | Food/Restaurant | Line Cook | Restaurant Owner | Future: menu design, staff, health inspections |
| 6 | Crime | Pickpocket | Crime Boss | Future: manage operations, territory, laundering |
| 7 | Sports | Amateur | Pro Athlete / Hall of Fame | Future: training regimens, contract negotiations |
| 8 | Business | Sales Rep | CEO | Future: company management, M&A, stocks |
| 9 | Politics | Volunteer | President | Future: campaign management, policy decisions |
| 10 | Social Media | Nobody | Influencer / Mogul | Future: content strategy, brand deals, drama |

**Launch behavior**: Careers work like BitLife — apply, get hired, work hard, get promoted, earn money. Career-specific random events and decisions make each feel distinct through writing/scenarios.

**Future updates**: Each career gets a dedicated management sub-game with interactive views (not just text menus). This is the long-term differentiator.

---

## 5. Mini-Games

Mini-games appear during specific life events. They are simple but more interactive than pure text choices.

### 5.1 Launch Mini-Games (Simple)
- **Job Interview**: Timed multiple-choice questions. Wrong answers reduce hire chance.
- **Exam/Test**: Drag-and-drop or tap correct answers. Difficulty scales with education.
- **Negotiation**: Slider-based — pick your ask, opponent counters, find middle ground.
- **Escape**: Simple puzzle (prison break, evading police) — tap sequence or maze.
- **Gambling**: Blackjack, slots, roulette — simple casino games for in-game money.

### 5.2 Future Mini-Games (Post-Launch)
- **Surgery**: Drag tools to correct spots, timing-based
- **Cooking**: Ingredient selection, timing, plating
- **Court Case**: Choose arguments, present evidence
- **Concert/Performance**: Rhythm-lite tapping game
- **Heist Planning**: Choose crew, plan route, execute

---

## 6. Relationships

### 6.1 Relationship Types
- **Family**: Parents, siblings, children (auto-generated at birth)
- **Friends**: Met through school, work, activities
- **Romantic**: Dating, marriage, divorce, affairs
- **Professional**: Boss, coworkers, business partners

### 6.2 Interactions
Each relationship has a **closeness** meter (0-100) and possible actions:
- Spend time, give gift, compliment, insult, argue, fight
- Romantic-specific: Flirt, date, propose, marry, cheat, break up
- Family-specific: Ask for money, move in/out, care for aging parents

### 6.3 Dating
- **Meet people**: Through work, school, activities, dating apps, random encounters
- **Compatibility**: Based on shared traits, looks, smarts
- **Marriage**: Costs money (wedding), affects taxes, can have kids

---

## 7. Random Events

Events fire each season with varying probability. They are the soul of the game — funny, dark, unexpected, and consequential.

### 7.1 Event Categories
- **Life**: Tornados, car accidents, finding money, lottery, inheritance
- **Social**: Party invites, drama, betrayal, viral moments
- **Career**: Promotion opportunity, fired, workplace drama, business opportunity
- **Crime**: Witness a crime, opportunity to steal, police encounter
- **Health**: Illness, injury, addiction, mental health
- **Relationship**: Cheating partner discovered, surprise pregnancy, family death

### 7.2 Writing Tone
- **Primary**: Absurd and funny. Unexpected situations. Dark humor.
- **Secondary**: Genuinely dark when appropriate — crime, death, addiction treated with weight but still engaging
- **Never**: Preachy, boring, overly serious. The game should make players laugh and go "wait what?"

### 7.3 Event Format
```
[Event Title]
[1-3 sentences describing the situation]

Option A: [Action] → [Consequence hint]
Option B: [Action] → [Consequence hint]
Option C: [Action] → [Consequence hint] (sometimes)
```

---

## 8. Economy

- **Income**: Salary (per season), side hustles, investments, crime, inheritance
- **Expenses**: Rent/mortgage, food, transportation, lifestyle, legal fees
- **Assets**: Houses, cars, businesses (value can appreciate/depreciate)
- **Investments**: Stocks (simplified), crypto (volatile), real estate
- **Debt**: Student loans, mortgages, credit cards, loan sharks
- **Net worth**: Calculated and displayed prominently

---

## 9. Crime System

Players can choose a life of crime at any point. Crime is risky but potentially lucrative.

- **Petty crime**: Shoplifting, pickpocketing, vandalism
- **Serious crime**: Robbery, assault, drug dealing, fraud
- **Organized crime**: Unlocked through career path or connections
- **Consequences**: Arrest chance (based on smarts, reputation), trial, prison
- **Prison**: Mini-game to escape or serve time. Prison events. Gang dynamics.

---

## 10. Visual Design

### 10.1 Design Philosophy
**"If Apple made a life simulator."**

The app should feel like Flighty, Linear, or Things 3 — a premium, award-worthy iOS app that happens to be a game. No game-y UI. No flashy colors. No clutter.

### 10.2 Design Principles
1. **Whitespace is a feature** — generous padding, breathing room everywhere
2. **Typography-first** — the text IS the game, so fonts must be beautiful and readable
3. **Minimal color** — near-monochrome with one accent color for interactive elements
4. **Subtle animation** — smooth transitions, gentle haptics, no bouncing/flashing
5. **Information hierarchy** — most important info is biggest, clear visual scanning
6. **No chrome** — minimize borders, boxes, dividers. Use spacing instead.

### 10.3 Color Palette (Light Mode)
```
Background:        #FFFFFF (pure white)
Surface/Cards:     #F5F5F7 (Apple-style light gray)
Primary Text:      #1D1D1F (near-black)
Secondary Text:    #86868B (medium gray)
Tertiary Text:     #AEAEB2 (light gray)
Accent:            #007AFF (iOS blue) — for buttons, links, interactive elements
Success:           #34C759 (green — money gained, positive events)
Danger:            #FF3B30 (red — health loss, negative events, crime)
Warning:           #FF9500 (orange — caution events)
```

### 10.4 Typography
- **Primary font**: System default (San Francisco on iOS, Roboto on Android)
- **Headings**: Semibold, larger sizes
- **Body**: Regular weight, comfortable reading size (16-17pt)
- **Stats/Numbers**: Tabular/monospace variant for alignment
- **NO**: All caps headers, decorative fonts, colored text (except status indicators)

### 10.5 Component Style
- **Cards**: Minimal shadow or no shadow. Slight background tint (#F5F5F7). Rounded corners (12-16px).
- **Buttons**: Text buttons or pill-shaped. Accent color for primary actions. Never more than one primary button visible.
- **Lists**: Clean rows with subtle separators. Left-aligned text. Right-aligned values/chevrons.
- **Modals/Sheets**: Bottom sheets sliding up, not centered popups. Clean dismiss gesture.
- **Progress bars**: Thin (4-6px), rounded, subtle colors.
- **Navigation**: Bottom tab bar with 4-5 icons maximum. No hamburger menus.

### 10.6 Character Display
- **For now**: Simple emoji representation (👨 👩 etc.)
- **Future**: Custom avatar system with minimalist illustrated style

### 10.7 Dark Mode
- **Not at launch**. Design light mode to be excellent first.
- **Future**: Implement as a theme toggle. True black (#000000) background for OLED.

---

## 11. Technical Architecture

### 11.1 Framework & Platform
- **Framework**: React Native (Expo managed workflow recommended for faster iteration)
- **Language**: TypeScript
- **Target**: iOS and Android simultaneously
- **iOS Builds**: Will require cloud Mac service (e.g., EAS Build via Expo) since developer does not have a Mac

### 11.2 State Management
- **Zustand** — lightweight, simple, perfect for game state
- Game state is a single large object representing the current life
- Actions/reducers modify state (age up, make choice, trigger event)

### 11.3 Data Architecture

```typescript
// Core game state shape
interface GameState {
  character: {
    name: string;
    gender: 'male' | 'female';
    age: number;
    season: 'spring' | 'summer' | 'fall' | 'winter';
    stats: {
      health: number;      // 0-100
      happiness: number;   // 0-100
      smarts: number;      // 0-100
      looks: number;       // 0-100
    };
    money: number;
    reputation: number;    // hidden
    traits: string[];
    education: Education;
    career: Career | null;
    criminalRecord: CriminalRecord[];
    isAlive: boolean;
  };
  relationships: Relationship[];
  assets: Asset[];
  eventLog: EventLogEntry[];  // scrollable history
  achievements: Achievement[];
  settings: GameSettings;
}
```

### 11.4 Event System
```typescript
interface GameEvent {
  id: string;
  title: string;
  description: string;
  conditions: EventCondition[];  // when can this fire?
  choices: EventChoice[];
  probability: number;           // 0-1, chance per season
  category: 'life' | 'social' | 'career' | 'crime' | 'health' | 'relationship';
  minAge?: number;
  maxAge?: number;
  requiredCareer?: string;
  oneTime?: boolean;             // can only happen once per life
}

interface EventChoice {
  text: string;
  hint?: string;                  // subtle consequence hint
  outcomes: WeightedOutcome[];    // multiple possible results with weights
}

interface WeightedOutcome {
  weight: number;                 // probability weight
  description: string;
  effects: StatEffect[];          // what changes
}
```

### 11.5 Navigation
- **React Navigation** (v6+) with bottom tab navigator
- Stack navigators within each tab for drill-down screens
- Bottom sheet library (**@gorhom/bottom-sheet**) for event popups and choices

### 11.6 Animations
- **React Native Reanimated** for smooth transitions
- **Haptics** via expo-haptics for button presses and events
- Keep animations subtle — 200-300ms duration, ease-in-out

### 11.7 Persistence
- **Local storage**: AsyncStorage or MMKV for game saves
- **Save format**: JSON serialization of GameState
- **Auto-save**: After every season advance
- **Multiple save slots**: Allow 3 concurrent lives
- **Future**: Cloud sync via Apple Game Center / Google Play Games

### 11.8 Project Structure
```
thislife/
├── app/                          # Expo Router screens
│   ├── (tabs)/                   # Bottom tab layout
│   │   ├── _layout.tsx           # Tab navigator config
│   │   ├── index.tsx             # Life (home) tab
│   │   ├── career.tsx            # Career tab
│   │   ├── relationships.tsx     # Relationships tab
│   │   ├── activities.tsx        # Activities tab
│   │   └── identity.tsx          # Identity/stats tab
│   ├── event/[id].tsx            # Event detail/choice screen
│   ├── minigame/[type].tsx       # Mini-game screens
│   └── _layout.tsx               # Root layout
├── src/
│   ├── components/               # Reusable UI components
│   │   ├── ui/                   # Base components (Button, Card, Text, etc.)
│   │   ├── game/                 # Game-specific components (StatBar, EventCard, etc.)
│   │   └── minigames/            # Mini-game components
│   ├── store/                    # Zustand stores
│   │   ├── gameStore.ts          # Main game state
│   │   ├── settingsStore.ts      # App settings
│   │   └── achievementStore.ts   # Achievement tracking
│   ├── engine/                   # Game logic (no UI)
│   │   ├── ageUp.ts              # Season advancement logic
│   │   ├── events.ts             # Event selection & resolution
│   │   ├── careers.ts            # Career progression logic
│   │   ├── relationships.ts      # Relationship mechanics
│   │   ├── economy.ts            # Money/asset calculations
│   │   └── crime.ts              # Crime mechanics
│   ├── data/                     # Static game content
│   │   ├── events/               # Event definitions (JSON or TS)
│   │   │   ├── childhood.ts
│   │   │   ├── school.ts
│   │   │   ├── career.ts
│   │   │   ├── crime.ts
│   │   │   ├── relationship.ts
│   │   │   └── random.ts
│   │   ├── careers.ts            # Career definitions
│   │   ├── names.ts              # Name generation data
│   │   └── items.ts              # Purchasable items
│   ├── utils/                    # Helpers
│   │   ├── random.ts             # Weighted random, dice rolls
│   │   ├── format.ts             # Money formatting, age display
│   │   └── storage.ts            # Save/load helpers
│   ├── theme/                    # Design system
│   │   ├── colors.ts             # Color palette
│   │   ├── typography.ts         # Font styles
│   │   ├── spacing.ts            # Spacing scale
│   │   └── index.ts              # Theme export
│   └── types/                    # TypeScript interfaces
│       ├── game.ts               # Game state types
│       ├── events.ts             # Event types
│       └── navigation.ts         # Navigation types
├── assets/                       # Images, icons
├── app.json                      # Expo config
├── tsconfig.json
└── package.json
```

---

## 12. Monetization

### 12.1 Launch
- **Completely free**. No ads. No IAP. Focus on building the best game and gathering feedback.

### 12.2 Future (Post-Launch, Based on Reception)
- **Rewarded ads only**: Players choose to watch an ad for an in-game bonus (extra money, stat boost, retry a failed event). Never forced.
- **Optional premium** (if added): One-time purchase, reasonable price. Unlocks everything permanently. No expansion packs. No subscriptions. No multiple tiers.
- **Marketing message**: "One price. The whole life." — directly contrasting BitLife's 40+ IAPs.

---

## 13. Content Volume Targets (Launch)

| Content Type | Target Count |
|-------------|-------------|
| Random events (general) | 150+ |
| Career-specific events (per career) | 15-20 each |
| Relationship events | 50+ |
| Crime events | 30+ |
| School/education events | 30+ |
| Childhood events | 20+ |
| Mini-games | 5 types |
| Achievements (hidden) | 30+ |
| Names (first + last) | 500+ each |

---

## 14. Development Roadmap

### Phase 1: Foundation (Week 1)
- [ ] Expo + React Native project setup with TypeScript
- [ ] Design system / theme (colors, typography, spacing, base components)
- [ ] Navigation structure (bottom tabs + stack navigators)
- [ ] Game state store (Zustand) with core data model
- [ ] Character creation screen (name, gender — simple)
- [ ] Main life screen — age display, stat bars, season advance button
- [ ] Event log — scrollable history of what's happened
- [ ] Age-up engine — advance season, trigger random events
- [ ] Basic event system — display event, show choices, apply outcomes
- [ ] 30-50 starter events across categories

### Phase 2: Depth (Week 2)
- [ ] Career system — job listings, apply, get hired, promotion path
- [ ] All 10 career definitions with entry/mid/senior roles
- [ ] Relationship system — family generation, friend/romantic mechanics
- [ ] Dating and marriage flows
- [ ] Education system — school progression, college choice, grades
- [ ] Economy — income, expenses, buying property/cars
- [ ] Crime system — petty to serious, arrest/trial/prison
- [ ] 2-3 mini-games (interview, exam, gambling)
- [ ] Additional 100+ events
- [ ] Save/load system with 3 slots
- [ ] Polish: animations, haptics, transitions

### Phase 3: Polish & Ship (Days 13-14)
- [ ] App icon (commission or AI-generate)
- [ ] App Store screenshots and description
- [ ] Bug fixing and playtesting
- [ ] Performance optimization
- [ ] Build via EAS for iOS + Android
- [ ] Submit to stores

### Future Updates (Post-Launch)
- Generations (continue as your children)
- Career management mini-games (the big differentiator)
- Custom avatar system
- Dark mode
- Cloud saves
- More careers, events, mini-games
- Rewarded ads / optional premium unlock
- Localization

---

## 15. Key Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | React Native (Expo) | Cross-platform from Windows PC, excellent TypeScript support, Claude Code proficiency |
| Router | Expo Router | File-based routing, simpler than React Navigation standalone |
| State | Zustand | Lightweight, no boilerplate, perfect for game state |
| Styling | StyleSheet + custom theme | Native performance, no external style library needed |
| Animations | Reanimated 3 | Smooth 60fps, runs on UI thread |
| Bottom sheets | @gorhom/bottom-sheet | Best-in-class for iOS-style sheets |
| Storage | expo-secure-store or MMKV | Fast local persistence |
| Haptics | expo-haptics | Native feel on interactions |
| Icons | Lucide React Native | Clean, minimal icon set matching design aesthetic |
| iOS Builds | EAS Build (Expo) | Cloud builds — no Mac required |

---

## 16. Design Reference

**Apps to study for visual inspiration:**
- **Flighty** — the gold standard. Clean typography, generous whitespace, premium feel.
- **Things 3** — minimal, beautiful task management
- **Linear** — modern, clean, professional
- **Apple Health** — cards, stats, clean data display
- **Gentler Streak** — Apple Design Award winner, warm minimal design

**What to avoid:**
- BitLife's cluttered, ad-filled UI
- Bright gradients, game-y fonts, neon colors
- Heavy borders and boxes
- Information overload on any single screen

---

*ThisLife — Every choice writes your story.*
