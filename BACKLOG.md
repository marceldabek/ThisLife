# ThisLife — Backlog

## Features

### Core Mechanic Overhaul
- [ ] **Season transition animation** — Add animation between seasons when clicking "Next Season". Smooth visual transition instead of instant state change.

### Countries & Locations
- [ ] **Country selection** — Add country of birth to character creation. List every country. Affects available careers, events, education system, and flavor text.
- [ ] **Random cities/towns** — Pick random cities or towns from the selected country for education locations, career locations, etc. Have a curated list of cities per country.

### Career / Education
- [x] **Job listings show company name + salary** — Job listings display company name and salary. Requirements show degree needed (like real job postings) instead of stat numbers.
- [x] **Career page redesign (employed vs. unemployed)** — Employed view: job card + action grid (work hard, slack off, promotion, quit). Job listings hidden behind "Explore Other Jobs" toggle. Unemployed view: listings shown directly.
- [x] **Company system** — 5-8 fictional companies per industry with 3 prestige tiers (salary multiplier: 0.85x/1.0x/1.2x). Company assigned on hire, shown in job card and event logs.
- [ ] **More careers with management aspect** — Expand career list significantly. Each career should have a management/simulation element (e.g., restaurant: manage staff and menu; tech: ship products and manage team; music: release albums and tour; F1: race for fictional teams like "Apex Racing" or "Velocity Motorsport").
- [x] **Fictional company name generator** — `src/data/companies.ts` with fictional companies per industry (Nexus Corp, Chirper, FaceSpace, BurgerVault, Golden Griddle, Sterling & Ashford LLP, etc.).
- [x] **University system** — 10 fictional universities across 5 prestige tiers, 10 majors with career bonuses. After HS graduation, modal prompts player to apply (acceptance based on smarts). Tuition deducted per season. Major/prestige boost hiring chances.
### Social / Lifestyle (Future)
- [ ] **Social media system** — Follower count, posting, post types, virality, fame/reputation impact. Player controls what they post and how it affects their life.

### Events
- [ ] **Situation-specific event pools** — Dedicated event sets for: prison life, hospital stays, military service, school life, workplace, etc. Events should feel curated to current circumstances.
- [ ] **Activity-triggered random events** — When doing activities, very low chance of a random event firing related to that activity. Examples: Nightclubbing → someone wants to sleep with you, someone offers you drugs, someone collapses and you can help them. Gym → injury risk, meet someone, spot someone who needs help. Library → pick a book to read, meet someone studying. Each individual event should have a very low probability, but there should be many possible events per activity.

---

## Ideas / Later
- [ ] Deeper career progression and workplace dynamics
- [ ] Stat growth/decline control mechanics
- [ ] Generated images or AI art for event cards
- [ ] Sound effects and haptic feedback for events
