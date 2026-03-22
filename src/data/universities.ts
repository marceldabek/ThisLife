// ============================================================
// ThisLife — University Definitions
// Fictional universities with varying prestige and acceptance
// ============================================================

export interface University {
  id: string;
  name: string;
  emoji: string;
  prestige: 1 | 2 | 3 | 4 | 5;
  minSmarts: number;       // minimum smarts stat to get accepted
  tuitionPerSeason: number;
  description: string;
}

export interface Major {
  id: string;
  name: string;
  emoji: string;
  description: string;
  careerBonus: string[];  // career IDs that benefit from this major
}

// ---- Universities (sorted by prestige, highest first) ----

export const UNIVERSITIES: University[] = [
  // Prestige 5 — Elite (very hard to get in)
  {
    id: 'crestmont',
    name: 'Crestmont University',
    emoji: '🏛️',
    prestige: 5,
    minSmarts: 85,
    tuitionPerSeason: 12_000,
    description: 'The most prestigious university in the country. Acceptance is a golden ticket.',
  },
  {
    id: 'hargrove',
    name: 'Hargrove Institute',
    emoji: '🎓',
    prestige: 5,
    minSmarts: 82,
    tuitionPerSeason: 11_500,
    description: 'An Ivy-caliber institution known for producing world leaders and Nobel laureates.',
  },

  // Prestige 4 — Excellent
  {
    id: 'thornfield',
    name: 'Thornfield College',
    emoji: '📚',
    prestige: 4,
    minSmarts: 72,
    tuitionPerSeason: 9_000,
    description: 'A top-tier liberal arts college with beautiful grounds and rigorous academics.',
  },
  {
    id: 'pacifica',
    name: 'Pacifica State University',
    emoji: '🌊',
    prestige: 4,
    minSmarts: 68,
    tuitionPerSeason: 7_500,
    description: 'A leading public research university with a stunning coastal campus.',
  },

  // Prestige 3 — Good
  {
    id: 'meridian',
    name: 'Meridian University',
    emoji: '🏫',
    prestige: 3,
    minSmarts: 55,
    tuitionPerSeason: 5_500,
    description: 'A solid mid-tier university known for strong career placement programs.',
  },
  {
    id: 'lakeview',
    name: 'Lakeview State',
    emoji: '🌲',
    prestige: 3,
    minSmarts: 50,
    tuitionPerSeason: 4_500,
    description: 'An affordable state school with a vibrant campus life and decent academics.',
  },

  // Prestige 2 — Average
  {
    id: 'central',
    name: 'Central Community College',
    emoji: '🏢',
    prestige: 2,
    minSmarts: 35,
    tuitionPerSeason: 2_000,
    description: 'An accessible community college that gives everyone a fair shot at education.',
  },
  {
    id: 'northgate',
    name: 'Northgate Technical Institute',
    emoji: '🔧',
    prestige: 2,
    minSmarts: 38,
    tuitionPerSeason: 2_500,
    description: 'Hands-on technical education focused on practical career skills.',
  },

  // Prestige 1 — Open admission
  {
    id: 'openfield',
    name: 'Openfield Online University',
    emoji: '💻',
    prestige: 1,
    minSmarts: 20,
    tuitionPerSeason: 800,
    description: 'An online university with open enrollment. Flexible but less respected.',
  },
  {
    id: 'riverside',
    name: 'Riverside College',
    emoji: '🏘️',
    prestige: 1,
    minSmarts: 25,
    tuitionPerSeason: 1_200,
    description: 'A small local college. Not prestigious, but it gets you the degree.',
  },
];

// ---- Majors ----

export const MAJORS: Major[] = [
  {
    id: 'business',
    name: 'Business Administration',
    emoji: '📊',
    description: 'Management, finance, and entrepreneurship fundamentals.',
    careerBonus: ['business', 'politics'],
  },
  {
    id: 'computerScience',
    name: 'Computer Science',
    emoji: '💻',
    description: 'Programming, algorithms, and software engineering.',
    careerBonus: ['tech'],
  },
  {
    id: 'preMed',
    name: 'Pre-Med / Biology',
    emoji: '🧬',
    description: 'The pathway to medical school and healthcare careers.',
    careerBonus: ['medicine'],
  },
  {
    id: 'prelaw',
    name: 'Political Science / Pre-Law',
    emoji: '⚖️',
    description: 'Government, policy, and preparation for law school.',
    careerBonus: ['law', 'politics'],
  },
  {
    id: 'culinaryArts',
    name: 'Culinary Arts',
    emoji: '👨‍🍳',
    description: 'Cooking techniques, restaurant management, and food science.',
    careerBonus: ['food'],
  },
  {
    id: 'communications',
    name: 'Communications & Media',
    emoji: '📱',
    description: 'Marketing, public relations, and digital media.',
    careerBonus: ['socialMedia', 'business'],
  },
  {
    id: 'music',
    name: 'Music Performance',
    emoji: '🎵',
    description: 'Instrumental or vocal performance, theory, and composition.',
    careerBonus: ['music'],
  },
  {
    id: 'criminalJustice',
    name: 'Criminal Justice',
    emoji: '🔍',
    description: 'Law enforcement, criminology, and the justice system.',
    careerBonus: ['law', 'politics'],
  },
  {
    id: 'kinesiology',
    name: 'Kinesiology / Sports Science',
    emoji: '🏃',
    description: 'Exercise science, athletic training, and sports management.',
    careerBonus: ['sports'],
  },
  {
    id: 'liberalArts',
    name: 'Liberal Arts',
    emoji: '📖',
    description: 'A broad education in humanities, arts, and social sciences.',
    careerBonus: [],
  },
];

// ---- Helpers ----

export function getUniversityById(id: string): University | undefined {
  return UNIVERSITIES.find((u) => u.id === id);
}

export function getMajorById(id: string): Major | undefined {
  return MAJORS.find((m) => m.id === id);
}

/**
 * Get universities the player can apply to based on their smarts stat.
 * Returns all universities — UI should indicate which ones are reaches.
 */
export function getEligibleUniversities(smarts: number): University[] {
  return UNIVERSITIES.filter((u) => smarts >= u.minSmarts);
}

/**
 * Attempt university application. Acceptance chance based on how far
 * above the minimum smarts the player is.
 */
export function attemptUniversityApplication(
  university: University,
  smarts: number,
): { accepted: boolean; message: string } {
  if (smarts < university.minSmarts) {
    return {
      accepted: false,
      message: `Your grades weren't strong enough for ${university.name}. They need students with higher academic performance.`,
    };
  }

  // How much above the minimum? More buffer = higher chance
  const surplus = smarts - university.minSmarts;
  // Base 55% chance, +2% per point above minimum, capped at 95%
  const chance = Math.min(0.55 + surplus * 0.02, 0.95);

  const accepted = Math.random() < chance;

  if (accepted) {
    const messages = [
      `Congratulations! You've been accepted to ${university.name}!`,
      `The acceptance letter from ${university.name} arrived — you're in!`,
      `${university.name} wants you! Welcome to the class of incoming freshmen.`,
    ];
    return { accepted: true, message: messages[Math.floor(Math.random() * messages.length)] };
  }

  const rejections = [
    `Unfortunately, ${university.name} didn't accept your application this time.`,
    `${university.name} was very competitive this year. Your application was not selected.`,
    `The admissions office at ${university.name} regrets to inform you of their decision.`,
  ];
  return { accepted: false, message: rejections[Math.floor(Math.random() * rejections.length)] };
}
