// ============================================================
// ThisLife — Career Definitions
// All 10 career paths with level progression and requirements
// ============================================================

import type { CareerDefinition } from '../types/game';

export const CAREERS: CareerDefinition[] = [
  // -------------------------------------------------------
  // 1. Medicine
  // -------------------------------------------------------
  {
    id: 'medicine',
    name: 'Medicine',
    emoji: '\u2695\uFE0F',
    description: 'Save lives and earn respect in the medical field. Long education required, but the rewards are worth it.',
    requiredEducation: 'college',
    requiredSmarts: 60,
    minAge: 22,
    levels: [
      {
        title: 'Nurse',
        salary: 15_000,
        requiredPerformance: 50,
        seasonsToPromote: 6,
        description: 'Provide bedside care, administer medications, and keep patients comfortable.',
      },
      {
        title: 'Resident',
        salary: 25_000,
        requiredPerformance: 60,
        seasonsToPromote: 8,
        description: 'Grueling hospital rotations under attending physicians. Sleep is optional.',
      },
      {
        title: 'Doctor',
        salary: 45_000,
        requiredPerformance: 70,
        seasonsToPromote: 10,
        description: 'Diagnose and treat patients with full authority. You finally get to wear the long coat.',
      },
      {
        title: 'Surgeon',
        salary: 70_000,
        requiredPerformance: 80,
        seasonsToPromote: 12,
        description: 'Perform complex operations. Steady hands and nerves of steel required.',
      },
      {
        title: 'Chief of Surgery',
        salary: 100_000,
        requiredPerformance: 85,
        seasonsToPromote: 0,
        description: 'Lead the surgical department. The pinnacle of a medical career.',
      },
    ],
  },

  // -------------------------------------------------------
  // 2. Law
  // -------------------------------------------------------
  {
    id: 'law',
    name: 'Law',
    emoji: '\u2696\uFE0F',
    description: 'Argue cases, draft contracts, and climb the ranks at a prestigious firm.',
    requiredEducation: 'college',
    requiredSmarts: 55,
    minAge: 22,
    levels: [
      {
        title: 'Paralegal',
        salary: 12_000,
        requiredPerformance: 50,
        seasonsToPromote: 6,
        description: 'Research case law, organize documents, and support the attorneys above you.',
      },
      {
        title: 'Associate',
        salary: 22_000,
        requiredPerformance: 60,
        seasonsToPromote: 8,
        description: 'Bill hours relentlessly and hope the partners notice your work ethic.',
      },
      {
        title: 'Attorney',
        salary: 40_000,
        requiredPerformance: 70,
        seasonsToPromote: 10,
        description: 'Represent clients in court and negotiate settlements. Your reputation grows.',
      },
      {
        title: 'Partner',
        salary: 65_000,
        requiredPerformance: 80,
        seasonsToPromote: 12,
        description: 'Equity stake in the firm. You bring in clients and mentor junior lawyers.',
      },
      {
        title: 'Senior Partner',
        salary: 90_000,
        requiredPerformance: 85,
        seasonsToPromote: 0,
        description: 'Your name is on the door. The firm rises and falls on your decisions.',
      },
    ],
  },

  // -------------------------------------------------------
  // 3. Tech
  // -------------------------------------------------------
  {
    id: 'tech',
    name: 'Tech',
    emoji: '\uD83D\uDCBB',
    description: 'Build software, ship products, and ride the startup rollercoaster. College helps but talent matters more.',
    requiredEducation: 'highSchool',
    requiredSmarts: 50,
    minAge: 18,
    levels: [
      {
        title: 'Junior Dev',
        salary: 18_000,
        requiredPerformance: 50,
        seasonsToPromote: 4,
        description: 'Write code, break things, fix things. Stack Overflow is your best friend.',
      },
      {
        title: 'Developer',
        salary: 30_000,
        requiredPerformance: 60,
        seasonsToPromote: 6,
        description: 'Own features end-to-end. You actually understand the codebase now.',
      },
      {
        title: 'Senior Dev',
        salary: 50_000,
        requiredPerformance: 70,
        seasonsToPromote: 8,
        description: 'Design systems, review code, and mentor juniors. People ask for your opinion.',
      },
      {
        title: 'Tech Lead',
        salary: 75_000,
        requiredPerformance: 80,
        seasonsToPromote: 10,
        description: 'Set technical direction for your team. Half coding, half meetings.',
      },
      {
        title: 'CTO',
        salary: 120_000,
        requiredPerformance: 85,
        seasonsToPromote: 0,
        description: 'Define the technology vision for the entire company. Stock options included.',
      },
    ],
  },

  // -------------------------------------------------------
  // 4. Music
  // -------------------------------------------------------
  {
    id: 'music',
    name: 'Music',
    emoji: '\uD83C\uDFB5',
    description: 'Chase your dream of stardom. The odds are against you, but the ceiling is sky-high.',
    requiredEducation: 'none',
    requiredLooks: 30,
    minAge: 16,
    levels: [
      {
        title: 'Busker',
        salary: 1_000,
        requiredPerformance: 50,
        seasonsToPromote: 6,
        description: 'Play on street corners and in subway stations for tips and exposure.',
      },
      {
        title: 'Local Act',
        salary: 5_000,
        requiredPerformance: 60,
        seasonsToPromote: 8,
        description: 'Headline at local bars and small venues. You have actual fans now.',
      },
      {
        title: 'Signed Artist',
        salary: 20_000,
        requiredPerformance: 70,
        seasonsToPromote: 8,
        description: 'A record label noticed you. Studio time, tour buses, and contractual obligations.',
      },
      {
        title: 'Famous',
        salary: 60_000,
        requiredPerformance: 80,
        seasonsToPromote: 10,
        description: 'Your songs are on the radio. Paparazzi follow you. Privacy is a memory.',
      },
      {
        title: 'Platinum Artist',
        salary: 150_000,
        requiredPerformance: 85,
        seasonsToPromote: 0,
        description: 'Multi-platinum records, sold-out arenas, and a legacy that outlasts you.',
      },
    ],
  },

  // -------------------------------------------------------
  // 5. Food / Restaurant
  // -------------------------------------------------------
  {
    id: 'food',
    name: 'Food',
    emoji: '\uD83C\uDF73',
    description: 'Work your way up from the kitchen line to running your own restaurant empire.',
    requiredEducation: 'none',
    minAge: 16,
    levels: [
      {
        title: 'Line Cook',
        salary: 4_000,
        requiredPerformance: 50,
        seasonsToPromote: 4,
        description: 'Chop, sear, plate, repeat. The kitchen is hot and the pace is relentless.',
      },
      {
        title: 'Sous Chef',
        salary: 8_000,
        requiredPerformance: 55,
        seasonsToPromote: 6,
        description: 'Second in command. You run the kitchen when the head chef is away.',
      },
      {
        title: 'Head Chef',
        salary: 15_000,
        requiredPerformance: 65,
        seasonsToPromote: 8,
        description: 'Design the menu, manage the kitchen staff, and maintain quality standards.',
      },
      {
        title: 'Restaurant Manager',
        salary: 25_000,
        requiredPerformance: 75,
        seasonsToPromote: 10,
        description: 'Oversee the entire operation from front-of-house to the bottom line.',
      },
      {
        title: 'Restaurant Owner',
        salary: 50_000,
        requiredPerformance: 85,
        seasonsToPromote: 0,
        description: 'Your name, your brand, your empire. Multiple locations and a cookbook deal.',
      },
    ],
  },

  // -------------------------------------------------------
  // 6. Crime
  // -------------------------------------------------------
  {
    id: 'criminalCareer',
    name: 'Crime',
    emoji: '\uD83D\uDD2A',
    description: 'Live outside the law. High risk, high reward, and always looking over your shoulder.',
    requiredEducation: 'none',
    minAge: 16,
    levels: [
      {
        title: 'Pickpocket',
        salary: 3_000,
        requiredPerformance: 50,
        seasonsToPromote: 4,
        description: 'Lift wallets and snatch phones. Small-time crime with small-time risk.',
      },
      {
        title: 'Thief',
        salary: 10_000,
        requiredPerformance: 60,
        seasonsToPromote: 6,
        description: 'Burglaries and heists. You have a crew and a plan for every job.',
      },
      {
        title: 'Dealer',
        salary: 25_000,
        requiredPerformance: 70,
        seasonsToPromote: 8,
        description: 'Control the supply. Territory disputes come with the territory.',
      },
      {
        title: 'Underboss',
        salary: 60_000,
        requiredPerformance: 80,
        seasonsToPromote: 10,
        description: 'Right hand to the boss. You manage operations and enforce loyalty.',
      },
      {
        title: 'Crime Boss',
        salary: 120_000,
        requiredPerformance: 85,
        seasonsToPromote: 0,
        description: 'You run the syndicate. Everyone answers to you, and the feds want you most.',
      },
    ],
  },

  // -------------------------------------------------------
  // 7. Sports
  // -------------------------------------------------------
  {
    id: 'sports',
    name: 'Sports',
    emoji: '\uD83C\uDFC6',
    description: 'Compete at the highest level. Glory awaits, but careers are short and injuries lurk.',
    requiredEducation: 'none',
    requiredSmarts: 30,
    requiredLooks: 40,
    minAge: 18,
    levels: [
      {
        title: 'Amateur',
        salary: 2_000,
        requiredPerformance: 55,
        seasonsToPromote: 4,
        description: 'Compete in local leagues and showcases, hoping a scout is watching.',
      },
      {
        title: 'Minor League',
        salary: 10_000,
        requiredPerformance: 65,
        seasonsToPromote: 6,
        description: 'Grind through the development leagues. Long bus rides and cheap hotels.',
      },
      {
        title: 'Pro Athlete',
        salary: 40_000,
        requiredPerformance: 75,
        seasonsToPromote: 8,
        description: 'You made the show. National TV, endorsement deals, and adoring fans.',
      },
      {
        title: 'Star',
        salary: 80_000,
        requiredPerformance: 85,
        seasonsToPromote: 8,
        description: 'All-star selections and MVP buzz. Kids wear your jersey.',
      },
      {
        title: 'Hall of Famer',
        salary: 150_000,
        requiredPerformance: 85,
        seasonsToPromote: 0,
        description: 'A legend of the game. Your number is retired and your plaque is in the hall.',
      },
    ],
  },

  // -------------------------------------------------------
  // 8. Business
  // -------------------------------------------------------
  {
    id: 'business',
    name: 'Business',
    emoji: '\uD83D\uDCBC',
    description: 'Climb the corporate ladder from the sales floor to the corner office.',
    requiredEducation: 'highSchool',
    requiredSmarts: 45,
    minAge: 18,
    levels: [
      {
        title: 'Sales Rep',
        salary: 10_000,
        requiredPerformance: 50,
        seasonsToPromote: 4,
        description: 'Cold calls, quotas, and commission checks. Hustle is the name of the game.',
      },
      {
        title: 'Account Manager',
        salary: 20_000,
        requiredPerformance: 60,
        seasonsToPromote: 6,
        description: 'Manage key client relationships and hit your revenue targets.',
      },
      {
        title: 'Director',
        salary: 40_000,
        requiredPerformance: 70,
        seasonsToPromote: 8,
        description: 'Lead a department and own a P&L. Strategy meetings fill your calendar.',
      },
      {
        title: 'VP',
        salary: 70_000,
        requiredPerformance: 80,
        seasonsToPromote: 10,
        description: 'Shape company strategy from the executive suite. Board presentations are routine.',
      },
      {
        title: 'CEO',
        salary: 130_000,
        requiredPerformance: 85,
        seasonsToPromote: 0,
        description: 'The buck stops here. You steer the ship and answer to the shareholders.',
      },
    ],
  },

  // -------------------------------------------------------
  // 9. Politics
  // -------------------------------------------------------
  {
    id: 'politics',
    name: 'Politics',
    emoji: '\uD83C\uDFDB\uFE0F',
    description: 'Serve the public, or serve yourself. Either way, every handshake is a transaction.',
    requiredEducation: 'college',
    requiredSmarts: 50,
    minAge: 25,
    levels: [
      {
        title: 'Volunteer',
        salary: 2_000,
        requiredPerformance: 50,
        seasonsToPromote: 4,
        description: 'Knock on doors, stuff envelopes, and learn how the sausage gets made.',
      },
      {
        title: 'Campaign Manager',
        salary: 8_000,
        requiredPerformance: 60,
        seasonsToPromote: 6,
        description: 'Run a candidate\'s campaign. Strategy, fundraising, and damage control.',
      },
      {
        title: 'City Council',
        salary: 20_000,
        requiredPerformance: 70,
        seasonsToPromote: 8,
        description: 'Your first elected office. Zoning disputes and ribbon-cutting ceremonies.',
      },
      {
        title: 'Governor',
        salary: 50_000,
        requiredPerformance: 80,
        seasonsToPromote: 12,
        description: 'Lead an entire state. Sign bills, declare emergencies, and eye the White House.',
      },
      {
        title: 'President',
        salary: 100_000,
        requiredPerformance: 85,
        seasonsToPromote: 0,
        description: 'Leader of the free world. Every decision shapes history.',
      },
    ],
  },

  // -------------------------------------------------------
  // 10. Social Media
  // -------------------------------------------------------
  {
    id: 'socialMedia',
    name: 'Social Media',
    emoji: '\uD83D\uDCF1',
    description: 'Build a following, land brand deals, and turn your online presence into an empire.',
    requiredEducation: 'none',
    requiredLooks: 40,
    minAge: 14,
    levels: [
      {
        title: 'Nobody',
        salary: 500,
        requiredPerformance: 50,
        seasonsToPromote: 4,
        description: 'Post content into the void. Your mom is your most loyal follower.',
      },
      {
        title: 'Micro-Influencer',
        salary: 5_000,
        requiredPerformance: 60,
        seasonsToPromote: 6,
        description: 'A niche audience knows your name. Small brand deals trickle in.',
      },
      {
        title: 'Influencer',
        salary: 25_000,
        requiredPerformance: 70,
        seasonsToPromote: 8,
        description: 'Hundreds of thousands of followers. Sponsored posts pay the bills.',
      },
      {
        title: 'Celebrity',
        salary: 75_000,
        requiredPerformance: 80,
        seasonsToPromote: 10,
        description: 'Millions of followers across platforms. Your own product lines and a talent agent.',
      },
      {
        title: 'Mogul',
        salary: 200_000,
        requiredPerformance: 85,
        seasonsToPromote: 0,
        description: 'A media empire built on likes and shares. You set trends, not follow them.',
      },
    ],
  },
];

// ---- Helper ----

/** Look up a career definition by its unique id. */
export function getCareerById(id: string): CareerDefinition | undefined {
  return CAREERS.find((career) => career.id === id);
}
