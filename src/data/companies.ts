// ============================================================
// ThisLife — Fictional Company Definitions
// Companies per career industry with varying prestige
// ============================================================

export interface Company {
  name: string;
  prestige: 1 | 2 | 3;  // affects salary multiplier
}

/**
 * Fictional companies grouped by career ID.
 * Prestige 3 = top-tier, 2 = mid-tier, 1 = entry-level/small.
 * Salary is multiplied by: prestige 1 = 0.85x, 2 = 1.0x, 3 = 1.2x
 */
export const COMPANIES: Record<string, Company[]> = {
  medicine: [
    { name: 'St. Meridian Hospital', prestige: 3 },
    { name: 'Evergreen Health System', prestige: 3 },
    { name: 'Pinnacle Medical Center', prestige: 2 },
    { name: 'Lakewood General Hospital', prestige: 2 },
    { name: 'Valley Community Clinic', prestige: 1 },
    { name: 'Sunrise Urgent Care', prestige: 1 },
  ],

  law: [
    { name: 'Sterling & Ashford LLP', prestige: 3 },
    { name: 'Blackwell Chambers', prestige: 3 },
    { name: 'Hawthorne Legal Group', prestige: 2 },
    { name: 'Redwood & Associates', prestige: 2 },
    { name: 'Metro Legal Aid', prestige: 1 },
    { name: 'Clearview Law Office', prestige: 1 },
  ],

  tech: [
    { name: 'Nexus Corp', prestige: 3 },
    { name: 'ByteWave', prestige: 3 },
    { name: 'CloudNine Software', prestige: 2 },
    { name: 'StackFlow', prestige: 2 },
    { name: 'PulseCode', prestige: 2 },
    { name: 'Gridline Studios', prestige: 1 },
    { name: 'Tinker Labs', prestige: 1 },
    { name: 'Bitshift Inc.', prestige: 1 },
  ],

  music: [
    { name: 'Platinum Sound Records', prestige: 3 },
    { name: 'Echo Chamber Music', prestige: 3 },
    { name: 'Velvet Records', prestige: 2 },
    { name: 'Bassline Entertainment', prestige: 2 },
    { name: 'Garage Door Records', prestige: 1 },
    { name: 'Unsigned Collective', prestige: 1 },
  ],

  food: [
    { name: 'Golden Griddle', prestige: 3 },
    { name: 'The Ivory Table', prestige: 3 },
    { name: "Primo's Kitchen", prestige: 2 },
    { name: 'BurgerVault', prestige: 2 },
    { name: 'Sizzle Shack', prestige: 1 },
    { name: 'Corner Bistro', prestige: 1 },
    { name: 'Noodle Junction', prestige: 1 },
  ],

  criminalCareer: [
    { name: 'The Syndicate', prestige: 3 },
    { name: 'Iron Circle', prestige: 3 },
    { name: 'Nightfall Crew', prestige: 2 },
    { name: 'The Outfit', prestige: 2 },
    { name: 'Street Runners', prestige: 1 },
    { name: 'Solo Operation', prestige: 1 },
  ],

  sports: [
    { name: 'Apex Athletics', prestige: 3 },
    { name: 'Velocity Sports Club', prestige: 3 },
    { name: 'Ironside FC', prestige: 2 },
    { name: 'Thunder Bay SC', prestige: 2 },
    { name: 'Metro Wolves', prestige: 1 },
    { name: 'Riverside Raptors', prestige: 1 },
  ],

  business: [
    { name: 'Monarch Industries', prestige: 3 },
    { name: 'Ashford & Wren', prestige: 3 },
    { name: 'Vanguard Corp', prestige: 2 },
    { name: 'Bridgepoint Capital', prestige: 2 },
    { name: 'Summit Solutions', prestige: 2 },
    { name: 'Greenleaf Enterprises', prestige: 1 },
    { name: 'Nova Retail', prestige: 1 },
  ],

  politics: [
    { name: 'City Hall', prestige: 3 },
    { name: 'State Capitol Office', prestige: 3 },
    { name: 'District Council', prestige: 2 },
    { name: 'Public Policy Institute', prestige: 2 },
    { name: 'Local Party Office', prestige: 1 },
    { name: 'Community Outreach Center', prestige: 1 },
  ],

  socialMedia: [
    { name: 'Chirper', prestige: 3 },
    { name: 'FaceSpace', prestige: 3 },
    { name: 'SnapVine', prestige: 2 },
    { name: 'BuzzReel', prestige: 2 },
    { name: 'PixelDrop', prestige: 1 },
    { name: 'Vlogistry', prestige: 1 },
  ],
};

// Salary multiplier by company prestige
const PRESTIGE_MULTIPLIER: Record<number, number> = {
  1: 0.85,
  2: 1.0,
  3: 1.2,
};

/**
 * Pick a random company for a career. Weighted toward mid-tier.
 */
export function pickRandomCompany(careerId: string): Company {
  const pool = COMPANIES[careerId];
  if (!pool || pool.length === 0) {
    return { name: 'Independent', prestige: 1 };
  }
  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * Get salary adjusted by company prestige.
 */
export function adjustSalaryForCompany(baseSalary: number, prestige: number): number {
  const multiplier = PRESTIGE_MULTIPLIER[prestige] ?? 1.0;
  return Math.round(baseSalary * multiplier);
}
