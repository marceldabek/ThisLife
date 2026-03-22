// ============================================================
// ThisLife — Career Events
// ============================================================

import { GameEvent } from '../../types/events';

export const CAREER_EVENTS: GameEvent[] = [

  // ============================================================
  // SECTION A: GENERAL WORKPLACE EVENTS (any career)
  // ============================================================

  {
    id: 'career_overtime_request',
    title: 'Weekend Warriors',
    description: 'Your boss asks you to work the entire weekend at 4:55 PM on a Friday.',
    category: 'career',
    probability: 0.2,
    cooldown: 4,
    conditions: [{ type: 'hasCareerId', value: true }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'overtime_accept',
        text: 'Sacrifice your weekend',
        hint: 'Boss will remember this',
        outcomes: [
          {
            weight: 60,
            description: 'You stare at spreadsheets all weekend. The overtime pay is nice, at least.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'money', value: 500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'The "urgent project" was already handled. You sat in an empty building for six hours.',
            effects: [
              { type: 'career_performance', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'money', value: 200, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'overtime_refuse',
        text: 'Make up an excuse and decline',
        outcomes: [
          {
            weight: 50,
            description: 'Your boss glares but says nothing. Your parking spot got reassigned.',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'The weekend project was a disaster. Your absence looks like genius foresight.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'career_performance', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'overtime_negotiate',
        text: 'Demand double overtime pay',
        hint: 'Bold move',
        outcomes: [
          {
            weight: 35,
            description: 'They agree out of desperation. You make more in one weekend than two weeks.',
            effects: [
              { type: 'money', value: 1200, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 65,
            description: 'Your boss laughs in your face and walks away.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_lunch_thief',
    title: 'The Lunch Bandit',
    description: 'Your lunch vanished from the office fridge.',
    category: 'career',
    probability: 0.18,
    cooldown: 6,
    conditions: [{ type: 'hasCareerId', value: true }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'lunch_investigate',
        text: 'Launch a full investigation',
        outcomes: [
          {
            weight: 50,
            description: 'It was Dave from accounting. He offers to buy you lunch.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'The investigation becomes office drama. HR gets involved. No thief found.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'career_performance', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'lunch_revenge',
        text: 'Leave a decoy with ghost pepper sauce',
        hint: 'Chaotic good?',
        outcomes: [
          {
            weight: 60,
            description: 'The thief is caught chugging milk in the break room. Never steals again.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Your boss ate it. They got rushed to urgent care.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'career_performance', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'lunch_let_go',
        text: 'Buy a sad vending machine sandwich',
        outcomes: [
          {
            weight: 100,
            description: 'You eat a $4 sandwich that tastes like regret.',
            effects: [
              { type: 'money', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_office_gossip',
    title: 'The Rumor Mill',
    description: 'Break room conversation stops dead when you walk in.',
    category: 'career',
    probability: 0.15,
    cooldown: 6,
    conditions: [{ type: 'hasCareerId', value: true }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'gossip_confront',
        text: 'Confront them directly',
        outcomes: [
          {
            weight: 40,
            description: 'The gossip stops. Nobody messes with you now.',
            effects: [
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'The rumor was about your promotion. Now they think you\'re unhinged.',
            effects: [
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'gossip_ignore',
        text: 'Ignore it and grab your coffee',
        outcomes: [
          {
            weight: 60,
            description: 'The rumor dies in three days.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'The rumor grows. By Friday, the office thinks you\'re in witness protection.',
            effects: [
              { type: 'reputation', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'gossip_join',
        text: 'Start a wilder rumor about yourself',
        hint: 'Fight fire with fire',
        outcomes: [
          {
            weight: 50,
            description: 'You claim you used to be a spy. It replaces the original gossip.',
            effects: [
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'HR wants a background check now. This backfired.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_annual_review',
    title: 'Performance Review Roulette',
    description: 'Your boss silently reads a folder containing the sum of your professional worth.',
    category: 'career',
    probability: 0.22,
    cooldown: 4,
    conditions: [{ type: 'hasCareerId', value: true }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'review_confident',
        text: 'Project confidence',
        outcomes: [
          {
            weight: 45,
            description: '"Exceeds expectations." You get a raise and your boss uses your correct name.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'career_satisfaction', value: 8, operation: 'add' },
              { type: 'money', value: 800, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: '"Meets expectations." The most soul-crushing two words in corporate America.',
            effects: [
              { type: 'career_performance', value: 2, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: '"Needs improvement." You\'re put on a Performance Improvement Plan.',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'review_humble',
        text: 'Be humble and acknowledge growth areas',
        outcomes: [
          {
            weight: 55,
            description: 'Your self-awareness impresses your boss. You get a modest raise.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
              { type: 'money', value: 500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'Your boss takes your humility as confirmation that you\'re terrible.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_workplace_romance',
    title: 'Cubicle Cupid',
    description: 'A coworker lingered a little too long at your desk. Was that flirting?',
    category: 'career',
    probability: 0.12,
    cooldown: 8,
    conditions: [{ type: 'hasCareerId', value: true }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'romance_pursue',
        text: 'Ask them out',
        hint: 'Don\'t dip your pen in company ink',
        outcomes: [
          {
            weight: 35,
            description: 'They say yes! You bond over mutual hatred of the same coworkers.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: '"I don\'t date coworkers." You avoid the break room for three months.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'They report you to HR. You sit through a "workplace interactions" seminar.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'romance_ignore',
        text: 'Keep it professional',
        outcomes: [
          {
            weight: 100,
            description: 'You bury your feelings in spreadsheets. Career trajectory unscathed.',
            effects: [
              { type: 'career_performance', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_caught_sleeping',
    title: 'Nap Trap',
    description: 'Your boss catches you asleep at your desk.',
    category: 'career',
    probability: 0.12,
    cooldown: 8,
    conditions: [{ type: 'hasCareerId', value: true }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'sleep_excuse',
        text: 'Claim you were meditating',
        outcomes: [
          {
            weight: 30,
            description: 'Your boss buys it. You accidentally start a company meditation program.',
            effects: [
              { type: 'career_performance', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description: '"You were snoring." Written warning. Desk moved next to boss\'s office.',
            effects: [
              { type: 'career_performance', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'sleep_own_it',
        text: 'Admit you were exhausted',
        hint: 'Radical honesty',
        outcomes: [
          {
            weight: 25,
            description: 'Your boss respects the honesty and gives you the rest of the day off.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 75,
            description: 'Sent home unpaid. At least you can nap there.',
            effects: [
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'money', value: -200, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_holiday_party',
    title: 'Holiday Party From Hell',
    description: 'Annual company holiday party with spiked eggnog and bad karaoke.',
    category: 'career',
    probability: 0.15,
    cooldown: 4,
    conditions: [{ type: 'hasCareerId', value: true }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'party_go_hard',
        text: 'Hit the open bar',
        hint: 'YOLO has consequences',
        outcomes: [
          {
            weight: 30,
            description: 'Your karaoke becomes legendary. You wake up a company icon.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'You tell your boss what you REALLY think. Monday will be rough.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'You photocopied something regrettable. Security footage is making rounds.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'career_performance', value: -12, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'party_network',
        text: 'Stay sober and network with execs',
        outcomes: [
          {
            weight: 70,
            description: 'A VP remembers your "great energy." This will help at promotion time.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'The VP you networked with gets fired next week. Bad association.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'party_skip',
        text: 'Skip it entirely',
        outcomes: [
          {
            weight: 100,
            description: 'Sweatpants and movies while coworkers send unhinged group texts. Best decision.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'career_satisfaction', value: -2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_raise_time',
    title: 'Show Me the Money',
    description: 'Time to ask for a raise. You schedule a meeting with your boss.',
    category: 'career',
    probability: 0.18,
    cooldown: 4,
    conditions: [{ type: 'hasCareerId', value: true }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'raise_ask_big',
        text: 'Ask for a 25% raise',
        hint: 'Swing big or go home',
        outcomes: [
          {
            weight: 25,
            description: 'They say yes. The budget was there all along. You just had to ask.',
            effects: [
              { type: 'money', value: 2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'career_satisfaction', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Counter-offer: 5%. After negotiation, you settle on 8%.',
            effects: [
              { type: 'money', value: 600, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_satisfaction', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'Your boss laughs. "Twenty-five percent? In THIS economy?"',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'raise_ask_modest',
        text: 'Ask for 10% with data to back it up',
        outcomes: [
          {
            weight: 60,
            description: 'Your boss is impressed by the research. You get the 10%.',
            effects: [
              { type: 'money', value: 1000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'career_satisfaction', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: '"Let\'s revisit in six months." They won\'t.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_workplace_injury',
    title: 'Workers\' Comp Opportunity',
    description: 'You had an accident at work. Someone definitely recorded it on their phone.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    conditions: [{ type: 'hasCareerId', value: true }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'injury_file_claim',
        text: 'File a workers\' comp claim',
        outcomes: [
          {
            weight: 50,
            description: 'Claim approved. Two weeks paid leave and a comfortable neck brace.',
            effects: [
              { type: 'money', value: 1500, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_performance', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Security footage shows you tripping over your own shoelace. Claim denied.',
            effects: [
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'injury_tough_it_out',
        text: 'Walk it off',
        outcomes: [
          {
            weight: 60,
            description: 'Coworkers are impressed. Your back will remind you of this for years.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Three days later you can\'t get out of bed. Should\'ve filed the claim.',
            effects: [
              { type: 'stat', target: 'health', value: -20, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
              { type: 'career_performance', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_hr_complaint',
    title: 'HR Would Like a Word',
    description: 'HR sent a confidential meeting request about a complaint.',
    category: 'career',
    probability: 0.12,
    cooldown: 8,
    conditions: [{ type: 'hasCareerId', value: true }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'hr_cooperate',
        text: 'Cooperate fully',
        outcomes: [
          {
            weight: 50,
            description: 'The complaint was about your "aggressive typing." You get a keyboard pad.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_performance', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Legitimate complaint about something you said in a meeting. Formal warning.',
            effects: [
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'It\'s about the microwave fish incident. Banned from the break room microwave.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'hr_defensive',
        text: 'Demand a lawyer be present',
        hint: 'This is a workplace, not a courtroom',
        outcomes: [
          {
            weight: 30,
            description: 'HR drops the whole thing. Not worth the hassle.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description: 'You\'re now known as "the lawyer person." People actively avoid you.',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_team_building',
    title: 'Team Building: The Seventh Circle',
    description: 'Mandatory team building day with trust falls and escape rooms.',
    category: 'career',
    probability: 0.15,
    cooldown: 4,
    conditions: [{ type: 'hasCareerId', value: true }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'team_enthusiastic',
        text: 'Fake enthusiasm',
        outcomes: [
          {
            weight: 50,
            description: 'Your performance impresses management. The team bonds over shared misery.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Nobody catches you in the trust fall. You hit the ground hard.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'team_sabotage',
        text: 'Participate with maximum sarcasm',
        outcomes: [
          {
            weight: 40,
            description: 'Your commentary turns the day into comedy gold. Even your boss laughs.',
            effects: [
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'HR is not amused. Your "attitude" is "not conducive to team synergy."',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'team_call_in_sick',
        text: 'Call in sick',
        outcomes: [
          {
            weight: 50,
            description: 'Flawless sick call. You spend the day on the couch.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'career_performance', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Your boss sees your Instagram story at the beach.',
            effects: [
              { type: 'career_performance', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_bankruptcy_rumor',
    title: 'Sinking Ship?',
    description: 'Rumor says the company is going bankrupt.',
    category: 'career',
    probability: 0.1,
    cooldown: 8,
    conditions: [{ type: 'hasCareerId', value: true }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'bankruptcy_jump_ship',
        text: 'Start job hunting immediately',
        outcomes: [
          {
            weight: 45,
            description: 'The company folds three months later. You already have a better job.',
            effects: [
              { type: 'money', value: 1000, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description: 'The rumor was false. But your boss found your resume on the office printer.',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'bankruptcy_stay_loyal',
        text: 'Stay the course',
        outcomes: [
          {
            weight: 40,
            description: 'The company pulls through. Your loyalty earns a promotion.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'money', value: 1500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'The company goes under. You get a cardboard box and two weeks\' severance.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'career_satisfaction', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_toxic_coworker',
    title: 'Office Villain Origin Story',
    description: 'A terrible coworker CC\'d your boss blaming you for their mistake.',
    category: 'career',
    probability: 0.15,
    cooldown: 6,
    conditions: [{ type: 'hasCareerId', value: true }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'toxic_retaliate',
        text: 'Reply-all with documented evidence',
        hint: 'Nuclear option',
        outcomes: [
          {
            weight: 40,
            description: 'Your evidence is devastating. The toxic coworker gets a PIP.',
            effects: [
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'The reply-all starts a war. Both of you get written warnings.',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'toxic_hr',
        text: 'Report them to HR',
        outcomes: [
          {
            weight: 50,
            description: 'HR moves the coworker to a different team. Sweet quiet victory.',
            effects: [
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'HR finds "no actionable issue." The coworker finds out you reported them.',
            effects: [
              { type: 'career_satisfaction', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'toxic_befriend',
        text: 'Kill them with kindness',
        outcomes: [
          {
            weight: 35,
            description: 'They become your ally. Turns out they were just lonely and awkward.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 65,
            description: 'They see kindness as weakness and steal even more of your credit.',
            effects: [
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_coworker_salary',
    title: 'The Forbidden Knowledge',
    description: 'You saw a coworker\'s pay stub. Same job as you, 30% more pay.',
    category: 'career',
    probability: 0.12,
    cooldown: 8,
    conditions: [{ type: 'hasCareerId', value: true }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'salary_confront_boss',
        text: 'Demand equal pay from your boss',
        outcomes: [
          {
            weight: 40,
            description: 'Your boss panics. You get a raise to match within a week.',
            effects: [
              { type: 'money', value: 1500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'Now YOU\'RE in trouble for seeing the pay stub.',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'salary_quiet_quit',
        text: 'Start doing exactly 30% less work',
        outcomes: [
          {
            weight: 50,
            description: 'Nobody notices. The system is broken and you\'re just living in it.',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Your reduced output is immediately noticed. You get a talking-to.',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_free_food',
    title: 'Break Room Buffet',
    description: 'Someone left donuts. Two are left: chocolate glazed and plain.',
    category: 'career',
    probability: 0.2,
    cooldown: 3,
    conditions: [{ type: 'hasCareerId', value: true }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'food_grab_good',
        text: 'Grab the chocolate one',
        outcomes: [
          {
            weight: 60,
            description: 'Best thing that happened all week and it\'s only Monday.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'You grabbed it at the same time as your boss. You let go.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'career_performance', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'food_take_plain',
        text: 'Take the plain one',
        outcomes: [
          {
            weight: 100,
            description: 'It tastes like compromise. But nobody can call you selfish.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'food_take_both',
        text: 'Take both. Assert dominance.',
        hint: 'Some people want to watch the world burn',
        outcomes: [
          {
            weight: 40,
            description: 'You walk back with a donut in each hand. Everyone fears you now.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'A coworker loudly says "WOW, really?" The entire office judges you.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_boss_credit',
    title: 'Identity Theft (Professional Edition)',
    description: 'Your boss presented your project as their own idea.',
    category: 'career',
    probability: 0.15,
    cooldown: 6,
    conditions: [{ type: 'hasCareerId', value: true }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'credit_speak_up',
        text: 'Speak up in the meeting',
        outcomes: [
          {
            weight: 30,
            description: 'The exec team is impressed. Your boss now fears you.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description: 'Your boss says "Yes, they helped with some details." You look petty.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'credit_document',
        text: 'Say nothing but start documenting everything',
        outcomes: [
          {
            weight: 60,
            description: 'You build a paper trail for next time. The long game begins.',
            effects: [
              { type: 'career_performance', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Documenting becomes an obsession. You haven\'t done real work in a week.',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'credit_let_go',
        text: 'Let it go',
        outcomes: [
          {
            weight: 100,
            description: 'You swallow your rage like a professional. Your therapist will hear about this.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_elevator_ceo',
    title: 'Elevator of Doom',
    description: 'You\'re alone in the elevator with the CEO. Thirty floors to go.',
    category: 'career',
    probability: 0.1,
    cooldown: 8,
    conditions: [{ type: 'hasCareerId', value: true }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'elevator_pitch',
        text: 'Deliver your elevator pitch',
        hint: 'High risk, high reward',
        outcomes: [
          {
            weight: 25,
            description: 'The CEO is interested and gives you their email. Golden ticket.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'Nervous word-salad comes out. The CEO sprints off the elevator.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'The elevator gets stuck. You bond for 45 minutes. Accidental networking.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'elevator_silence',
        text: 'Stare at your phone and pray',
        outcomes: [
          {
            weight: 100,
            description: 'Thirty floors of weapons-grade silence. You had one shot and wasted it.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_reply_all',
    title: 'Reply-All Apocalypse',
    description: 'You hit "Reply All" calling the new VP a thumb. 847 employees received this.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    oneTime: true,
    conditions: [{ type: 'hasCareerId', value: true }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'reply_all_apologize',
        text: 'Send a groveling apology (also reply-all)',
        outcomes: [
          {
            weight: 40,
            description: 'The apology triggers a reply-all chain. IT shuts down the email system.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'The VP saw it. You\'re called into a meeting that feels like a tribunal.',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'reply_all_own_it',
        text: 'Own it completely',
        hint: 'Career suicide or legend status?',
        outcomes: [
          {
            weight: 30,
            description: 'The office agrees: the VP does look like a thumb. You\'re a folk hero.',
            effects: [
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'career_performance', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description: 'You\'re put on a PIP. Start updating that resume.',
            effects: [
              { type: 'career_performance', value: -20, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_parking_drama',
    title: 'Lot Politics',
    description: 'A new hire parked in YOUR unassigned-but-everyone-knows-it\'s-yours spot.',
    category: 'career',
    probability: 0.15,
    cooldown: 6,
    conditions: [{ type: 'hasCareerId', value: true }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'parking_note',
        text: 'Leave a passive-aggressive note',
        outcomes: [
          {
            weight: 50,
            description: 'The new hire moves and never parks there again. Victory.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'The new hire is the CEO\'s nephew. Your note is shown to management.',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'parking_arrive_earlier',
        text: 'Start arriving 30 minutes early',
        outcomes: [
          {
            weight: 70,
            description: 'You reclaim your spot. Your boss thinks you\'re a go-getter now.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'The new hire starts arriving even earlier. It escalates to 5 AM standoffs.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'parking_let_go',
        text: 'Find a new spot',
        outcomes: [
          {
            weight: 100,
            description: 'The new spot has shade, which is objectively better. Totally moved on.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_thermostat_war',
    title: 'The Cold War (Literally)',
    description: 'The office thermostat war has reached its breaking point. Time to take a side.',
    category: 'career',
    probability: 0.18,
    cooldown: 4,
    conditions: [{ type: 'hasCareerId', value: true }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'thermostat_cold',
        text: 'Team Cold. Crank it to 66.',
        outcomes: [
          {
            weight: 50,
            description: 'Half the office loves you. Someone blows a fuse with a space heater.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Your desk is covered in angry sticky notes about circulation problems.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'career_satisfaction', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'thermostat_hot',
        text: 'Team Warm. Push it to 76.',
        outcomes: [
          {
            weight: 50,
            description: 'The cold faction retaliates by opening every window in January.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Your boss is Team Cold. The thermostat has a camera now.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'thermostat_diplomatic',
        text: 'Propose a 72-degree compromise',
        outcomes: [
          {
            weight: 60,
            description: 'You\'re now the office temperature czar.',
            effects: [
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_performance', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Both sides see you as a traitor. You\'ve united the office against you.',
            effects: [
              { type: 'reputation', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },


  // ============================================================
  // SECTION B: CAREER-SPECIFIC EVENTS
  // ============================================================


  // ============================================================
  // MEDICINE (requiredCareerId: 'medicine')
  // ============================================================

  {
    id: 'med_patient_dies',
    title: 'Code Blue',
    description: 'Your patient is crashing. The team is looking at you. Every second counts.',
    category: 'career',
    probability: 0.15,
    cooldown: 6,
    requiredCareerId: 'medicine',
    conditions: [{ type: 'hasCareerId', value: 'medicine' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'code_blue_heroic',
        text: 'Throw everything at saving them',
        outcomes: [
          {
            weight: 40,
            description: 'Against all odds, the patient pulls through. This is why you became a doctor.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'You did everything right. But they\'re gone. You drive home in silence.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'code_blue_by_book',
        text: 'Follow protocol exactly',
        outcomes: [
          {
            weight: 45,
            description: 'Protocol works. Your attending nods approvingly. "Good work."',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description: 'Protocol wasn\'t enough. "You did everything right" rings hollow.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'career_performance', value: 3, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'med_miracle_save',
    title: 'One in a Million',
    description: 'You pushed for one more test on a terminal patient. It\'s treatable.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    requiredCareerId: 'medicine',
    conditions: [{ type: 'hasCareerId', value: 'medicine' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'miracle_pursue',
        text: 'Push for experimental treatment',
        outcomes: [
          {
            weight: 55,
            description: 'It works. The patient walks out three weeks later. Local news covers it.',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
              { type: 'career_satisfaction', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'The treatment doesn\'t work. The hospital board questions your judgment.',
            effects: [
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'miracle_conservative',
        text: 'Recommend palliative care instead',
        outcomes: [
          {
            weight: 100,
            description: 'Months later, another hospital publishes the exact treatment. It works. The "what if" haunts you.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
              { type: 'career_performance', value: 3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'med_malpractice',
    title: 'Lawyer\'s Calling',
    description: 'A patient is suing for malpractice. You followed standard protocol.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    requiredCareerId: 'medicine',
    conditions: [{ type: 'hasCareerId', value: 'medicine' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'malpractice_fight',
        text: 'Fight the suit aggressively',
        outcomes: [
          {
            weight: 55,
            description: 'Your documentation is airtight. Suit dismissed.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'The case drags on for months. You win, but the stress takes its toll.',
            effects: [
              { type: 'money', value: -5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'malpractice_settle',
        text: 'Settle out of court',
        outcomes: [
          {
            weight: 60,
            description: 'Settlement costs money but saves sanity. Insurance premiums go up.',
            effects: [
              { type: 'money', value: -8000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Settling is seen as guilt. Colleagues whisper. Your Yelp page gets bombed.',
            effects: [
              { type: 'money', value: -10000, operation: 'add' },
              { type: 'reputation', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'med_epidemic',
    title: 'Patient Zero',
    description: 'Half the ER has mystery symptoms and you\'re in charge.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    requiredCareerId: 'medicine',
    conditions: [{ type: 'hasCareerId', value: 'medicine' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'epidemic_lead',
        text: 'Take charge of the response',
        outcomes: [
          {
            weight: 45,
            description: 'You contain the outbreak. It was contaminated food. You\'re quoted as "hero doctor."',
            effects: [
              { type: 'career_performance', value: 18, operation: 'add' },
              { type: 'reputation', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description: 'The outbreak was bigger than expected. You survive it, but barely.',
            effects: [
              { type: 'stat', target: 'health', value: -15, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'epidemic_call_cdc',
        text: 'Call the CDC immediately',
        outcomes: [
          {
            weight: 60,
            description: 'Smart call. The CDC handles it. You\'re commended for knowing your limits.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Turns out it was just a bad flu season. The CDC is annoyed you called.',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'med_celebrity_patient',
    title: 'VIP Treatment',
    description: 'A famous actor is admitted under a fake name.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    requiredCareerId: 'medicine',
    conditions: [{ type: 'hasCareerId', value: 'medicine' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'celeb_patient_professional',
        text: 'Treat them like any other patient',
        outcomes: [
          {
            weight: 60,
            description: 'They send a six-figure donation to the hospital in your name.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'money', value: 2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'They recover and leave. No thank you, no donation. Just another patient.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'celeb_patient_leak',
        text: 'Leak it to the press',
        hint: 'HIPAA exists for a reason',
        outcomes: [
          {
            weight: 20,
            description: 'A tabloid pays $5,000. But the hospital starts an investigation.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'career_performance', value: -25, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 80,
            description: 'Caught immediately. HIPAA fines. Your medical license is under review.',
            effects: [
              { type: 'money', value: -15000, operation: 'add' },
              { type: 'career_performance', value: -30, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'med_pharma_rep',
    title: 'The Devil Wears Scrubs',
    description: 'A pharma rep offers a free trip to Hawaii to push their drug.',
    category: 'career',
    probability: 0.15,
    cooldown: 8,
    requiredCareerId: 'medicine',
    conditions: [{ type: 'hasCareerId', value: 'medicine' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'pharma_accept',
        text: 'Accept the Hawaii trip',
        hint: 'Ethics are expensive',
        outcomes: [
          {
            weight: 40,
            description: 'Three days of beach, one hour of propaganda. The drug actually works though.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'A journalist discovers your trip. Your face is on the evening news next to "doctors taking bribes."',
            effects: [
              { type: 'money', value: 3000, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'pharma_decline',
        text: 'Decline. Prescribe what\'s best for patients.',
        outcomes: [
          {
            weight: 70,
            description: 'Integrity intact. You sleep great at night.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'The rep bad-mouths you to the hospital board. They golf together.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'med_36_hour_shift',
    title: 'The Endless Shift',
    description: 'Hour 32 of a 36-hour shift. You\'ve consumed enough coffee to kill a horse.',
    category: 'career',
    probability: 0.2,
    cooldown: 4,
    requiredCareerId: 'medicine',
    conditions: [{ type: 'hasCareerId', value: 'medicine' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'shift_power_through',
        text: 'More coffee. Push through.',
        outcomes: [
          {
            weight: 40,
            description: 'Your sleep-deprived brain connects dots your rested brain never would.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'health', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'You mix up two patient charts. The attending sends you home immediately.',
            effects: [
              { type: 'career_performance', value: -12, operation: 'add' },
              { type: 'stat', target: 'health', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'shift_sneak_nap',
        text: 'Sneak a nap in the supply closet',
        outcomes: [
          {
            weight: 50,
            description: 'Fifteen glorious minutes. Nobody noticed. The supply closet is your new favorite room.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_performance', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'A code is called while you\'re asleep. They find you drooling on latex gloves.',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'med_breakthrough',
    title: 'Eureka Moment',
    description: 'You noticed a pattern in patient data nobody else saw.',
    category: 'career',
    probability: 0.1,
    cooldown: 16,
    oneTime: true,
    requiredCareerId: 'medicine',
    conditions: [{ type: 'hasCareerId', value: 'medicine' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'breakthrough_publish',
        text: 'Write and submit the paper',
        outcomes: [
          {
            weight: 40,
            description: 'Published and cited. Your research changes treatment protocols nationwide.',
            effects: [
              { type: 'career_performance', value: 25, operation: 'add' },
              { type: 'reputation', value: 20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
              { type: 'career_satisfaction', value: 20, operation: 'add' },
              { type: 'money', value: 5000, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'Published but nobody reads it. Your mom is very proud though.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'Rejected. A reviewer calls your methodology "interesting but flawed."',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'breakthrough_sit_on_it',
        text: 'Wait for more data first',
        outcomes: [
          {
            weight: 100,
            description: 'A team at Johns Hopkins publishes the same finding two weeks before you.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },


  // ============================================================
  // LAW (requiredCareerId: 'law')
  // ============================================================

  {
    id: 'law_losing_case',
    title: 'Verdict: Not Great',
    description: 'The jury foreman won\'t make eye contact with your client.',
    category: 'career',
    probability: 0.18,
    cooldown: 6,
    requiredCareerId: 'law',
    conditions: [{ type: 'hasCareerId', value: 'law' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'case_appeal',
        text: 'File an appeal',
        outcomes: [
          {
            weight: 35,
            description: 'The appeal succeeds on a technicality. Your client hugs you.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'money', value: 3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 65,
            description: 'Appeal denied. Three more months and $10K wasted on a losing battle.',
            effects: [
              { type: 'money', value: -3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'case_accept',
        text: 'Accept the loss and move on',
        outcomes: [
          {
            weight: 60,
            description: 'You take the L with grace. Colleagues respect how you handled it.',
            effects: [
              { type: 'career_performance', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'The loss eats at you. Your next three cases suffer from second-guessing.',
            effects: [
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'law_corrupt_judge',
    title: 'Justice Is Blind (And For Sale)',
    description: 'You saw opposing counsel hand the judge an envelope in the parking garage.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    requiredCareerId: 'law',
    conditions: [{ type: 'hasCareerId', value: 'law' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'judge_report',
        text: 'Report it to the ethics board',
        outcomes: [
          {
            weight: 40,
            description: 'The judge is removed from the bench. You\'re hailed as a champion of justice.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'reputation', value: 20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: '"Insufficient evidence." The judge knows you reported them. Powerful enemy made.',
            effects: [
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'judge_play_game',
        text: 'Look the other way',
        outcomes: [
          {
            weight: 50,
            description: 'Someone else catches the judge eventually. You feel relief mixed with guilt.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'The corruption spreads. When it blows up, people ask why nobody reported sooner.',
            effects: [
              { type: 'career_satisfaction', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'law_celebrity_client',
    title: 'Famous Faces, Felony Cases',
    description: 'A celebrity needs a lawyer for a media-circus case.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    requiredCareerId: 'law',
    conditions: [{ type: 'hasCareerId', value: 'law' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'celeb_client_accept',
        text: 'Take the case',
        outcomes: [
          {
            weight: 40,
            description: 'You win. The celebrity thanks you on live TV. Phone doesn\'t stop ringing.',
            effects: [
              { type: 'money', value: 10000, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'The celebrity fires you mid-trial for a TV lawyer. Retainer check clears though.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'Paparazzi and death threats destroy your personal life. You win but lose your sanity.',
            effects: [
              { type: 'money', value: 8000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'celeb_client_decline',
        text: 'Pass on it',
        outcomes: [
          {
            weight: 100,
            description: 'You watch the lawyer who took it have a visible breakdown on TV. Good call.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_satisfaction', value: 3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'law_pro_bono',
    title: 'Justice Doesn\'t Pay the Bills',
    description: 'A single parent needs pro bono help against an illegal eviction.',
    category: 'career',
    probability: 0.15,
    cooldown: 8,
    requiredCareerId: 'law',
    conditions: [{ type: 'hasCareerId', value: 'law' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'pro_bono_take',
        text: 'Take the case pro bono',
        outcomes: [
          {
            weight: 55,
            description: 'You win easily. The family keeps their home. You remember why you went to law school.',
            effects: [
              { type: 'reputation', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'career_satisfaction', value: 15, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'The case takes months. Your billable hours suffer. Partner gives the "idealism" speech.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'pro_bono_decline',
        text: 'Refer them to legal aid',
        outcomes: [
          {
            weight: 100,
            description: 'Back to your case about two millionaires fighting over a boat. You feel nothing.',
            effects: [
              { type: 'money', value: 1500, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'law_evidence_tampering',
    title: 'Exhibit A for "Oh No"',
    description: 'You\'re 90% sure opposing counsel submitted fabricated evidence.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    requiredCareerId: 'law',
    conditions: [{ type: 'hasCareerId', value: 'law' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'evidence_challenge',
        text: 'Challenge it in open court',
        hint: 'Perry Mason moment',
        outcomes: [
          {
            weight: 45,
            description: 'Your analysis is devastating. The judge holds opposing counsel in contempt.',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description: 'The evidence was legitimate with bad formatting. You accused a respected attorney of fraud.',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'reputation', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'evidence_quiet_investigate',
        text: 'Investigate quietly first',
        outcomes: [
          {
            weight: 60,
            description: 'Your investigation confirms tampering. Opposing counsel is disbarred.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Investigation takes too long. The tampered evidence already influenced the verdict.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'law_rival_attorney',
    title: 'Nemesis at Law',
    description: 'Your law school rival is sitting at the opposing table. This just got personal.',
    category: 'career',
    probability: 0.15,
    cooldown: 8,
    requiredCareerId: 'law',
    conditions: [{ type: 'hasCareerId', value: 'law' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'rival_destroy',
        text: 'Make it personal. Crush them.',
        outcomes: [
          {
            weight: 45,
            description: 'Your closing argument makes the jury weep. You win. It feels incredible.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description: 'Your emotions cloud your judgment. Your rival picks your arguments apart.',
            effects: [
              { type: 'career_performance', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -18, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'rival_professional',
        text: 'Keep it professional',
        outcomes: [
          {
            weight: 55,
            description: 'The judge commends both attorneys. Your rival buys you a drink. Growth.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'Your rival doesn\'t keep it professional. The judge calls them out. You win by default.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'law_courtroom_outburst',
    title: 'Order in the Court!',
    description: 'Your client just screamed at opposing counsel mid-trial.',
    category: 'career',
    probability: 0.12,
    cooldown: 8,
    requiredCareerId: 'law',
    conditions: [{ type: 'hasCareerId', value: 'law' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'outburst_control',
        text: 'Restrain your client and beg the judge',
        outcomes: [
          {
            weight: 50,
            description: 'You tackle them back into their seat. The judge only holds your client in contempt.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Your client shoves you. The bailiff gets involved. This case is over.',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'outburst_spin',
        text: 'Spin it as passion for justice',
        hint: 'Spin it like a top',
        outcomes: [
          {
            weight: 30,
            description: 'The jury buys it. Your improvisation turns disaster into raw authenticity.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description: 'The judge threatens to hold you both in contempt.',
            effects: [
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'law_partner_politics',
    title: 'Making Partner (Or Not)',
    description: 'One partner spot open. You and your office-mate are both on the shortlist.',
    category: 'career',
    probability: 0.12,
    cooldown: 12,
    requiredCareerId: 'law',
    conditions: [{ type: 'hasCareerId', value: 'law' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'partner_campaign',
        text: 'Wine and dine every partner',
        outcomes: [
          {
            weight: 40,
            description: 'You make partner. Your name goes on the letterhead.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'career_satisfaction', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'Your campaigning seems desperate. They choose your rival instead.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'career_satisfaction', value: -12, operation: 'add' },
              { type: 'money', value: -1000, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'partner_merit',
        text: 'Let your work speak for itself',
        outcomes: [
          {
            weight: 50,
            description: 'Your numbers are impeccable. You make partner on pure merit.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'money', value: 4000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'career_satisfaction', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Your rival golfed with the senior partner every weekend. Merit doesn\'t beat golf.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },


  // ============================================================
  // TECH (requiredCareerId: 'tech')
  // ============================================================

  {
    id: 'tech_app_viral',
    title: 'You\'re Trending',
    description: 'Your silly side project app has 500,000 downloads after going viral on TikTok.',
    category: 'career',
    probability: 0.1,
    cooldown: 16,
    oneTime: true,
    requiredCareerId: 'tech',
    conditions: [{ type: 'hasCareerId', value: 'tech' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'viral_quit_job',
        text: 'Quit your job and go full startup',
        hint: 'The startup dream',
        outcomes: [
          {
            weight: 35,
            description: 'VC funding, a team, and a $10M valuation within a year.',
            effects: [
              { type: 'money', value: 20000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'career_satisfaction', value: 20, operation: 'add' },
            ],
          },
          {
            weight: 65,
            description: 'The app peaks then dies overnight. You\'re now unemployed.',
            effects: [
              { type: 'money', value: 3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'career_performance', value: -20, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'viral_keep_job',
        text: 'Keep your day job, run it on the side',
        outcomes: [
          {
            weight: 60,
            description: 'Smart move. The app generates passive income for a year. Safe and sound.',
            effects: [
              { type: 'money', value: 8000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Maintaining both is killing you. Day job performance tanks.',
            effects: [
              { type: 'money', value: 4000, operation: 'add' },
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'tech_server_crash',
    title: '3 AM Wake-Up Call',
    description: 'Production servers are down and your phone is exploding.',
    category: 'career',
    probability: 0.18,
    cooldown: 4,
    requiredCareerId: 'tech',
    conditions: [{ type: 'hasCareerId', value: 'tech' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'crash_hero_fix',
        text: 'Jump in and fix it yourself',
        outcomes: [
          {
            weight: 45,
            description: 'A single misplaced semicolon. Fixed in 20 minutes. You get a Slack emoji.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description: 'Your "fix" makes it worse. Servers are now actively corrupting data.',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'crash_escalate',
        text: 'Escalate to the on-call team',
        outcomes: [
          {
            weight: 50,
            description: 'Senior engineer fixes it in five minutes. You go back to sleep.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Nobody answers. By elimination, you ARE the on-call team.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'tech_acquisition_offer',
    title: 'Big Tech Wants You',
    description: 'A FAANG company wants to acquire your startup.',
    category: 'career',
    probability: 0.1,
    cooldown: 16,
    requiredCareerId: 'tech',
    conditions: [{ type: 'hasCareerId', value: 'tech' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'acquisition_support',
        text: 'Support it and cash out',
        outcomes: [
          {
            weight: 50,
            description: 'Your stock options vest into real money. Free lunch and therapy dogs now.',
            effects: [
              { type: 'money', value: 15000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Your product is shut down. Everything you built is deleted. Rich but dead inside.',
            effects: [
              { type: 'money', value: 12000, operation: 'add' },
              { type: 'career_satisfaction', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'acquisition_resist',
        text: 'Fight the acquisition',
        outcomes: [
          {
            weight: 40,
            description: 'The startup thrives independently. Worth 10x the offer two years later.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'career_satisfaction', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'The startup runs out of money. Your stock options are worth nothing.',
            effects: [
              { type: 'money', value: -3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'tech_ai_replacement',
    title: 'The Machine Is Learning (Your Job)',
    description: 'Management demoed an AI tool that does 80% of your job.',
    category: 'career',
    probability: 0.15,
    cooldown: 8,
    requiredCareerId: 'tech',
    conditions: [{ type: 'hasCareerId', value: 'tech' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'ai_embrace',
        text: 'Become the AI expert',
        outcomes: [
          {
            weight: 55,
            description: 'You\'re now 3x more productive. Management thinks you\'re irreplaceable.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'career_satisfaction', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'The AI makes mistakes that become YOUR mistakes. A hallucinated API call takes down a client.',
            effects: [
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'ai_resist',
        text: 'Refuse to use AI tools',
        outcomes: [
          {
            weight: 25,
            description: 'Your hand-crafted code has fewer bugs. There\'s still a place for artisan code.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 75,
            description: 'Your output is 3x slower than everyone else. You\'re the blacksmith of the Industrial Revolution.',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'tech_hackathon',
    title: '48 Hours of Pain',
    description: 'Company hackathon: 48 hours and a $10K prize.',
    category: 'career',
    probability: 0.15,
    cooldown: 8,
    requiredCareerId: 'tech',
    conditions: [{ type: 'hasCareerId', value: 'tech' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'hackathon_all_in',
        text: 'Go all in. Sleep is for losers.',
        outcomes: [
          {
            weight: 40,
            description: 'Your team wins! $2,500 each and bragging rights.',
            effects: [
              { type: 'money', value: 2500, operation: 'add' },
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'Your project crashes on stage. The error message contains a debug swear word.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'Second place. The winners just had a nicer UI. Substance lost to style.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'hackathon_chill',
        text: 'Build something fun and low-stress',
        outcomes: [
          {
            weight: 100,
            description: 'Your Slack compliment bot gets deployed company-wide. Morale improved more than any winner.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'tech_code_review',
    title: 'PR of Shame',
    description: 'Your pull request got 47 review comments. One just says "lol."',
    category: 'career',
    probability: 0.2,
    cooldown: 4,
    requiredCareerId: 'tech',
    conditions: [{ type: 'hasCareerId', value: 'tech' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'review_fix_all',
        text: 'Address every single comment',
        outcomes: [
          {
            weight: 60,
            description: 'Your revised PR is a masterpiece. Thumbs-up emoji from the senior engineer.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'V2 gets 23 new comments. You\'re on v5 now. This PR has its own git history.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'review_push_back',
        text: 'Push back on the nitpicks',
        outcomes: [
          {
            weight: 40,
            description: 'Healthy debate. You both learn something. This is how review should work.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'The senior engineer takes it personally. Every future PR gets 3x more comments.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'tech_production_bug',
    title: 'It Works on My Machine',
    description: 'A critical production bug is traced to YOUR commit from two months ago.',
    category: 'career',
    probability: 0.15,
    cooldown: 6,
    requiredCareerId: 'tech',
    conditions: [{ type: 'hasCareerId', value: 'tech' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'bug_own_it',
        text: 'Own it publicly and fix it',
        outcomes: [
          {
            weight: 55,
            description: 'Your honesty earns respect. The post-mortem improves the codebase.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'The "Root Cause Analysis" meeting is just a public blame session. Your name is on every slide.',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'bug_blame_process',
        text: 'Blame the process, not yourself',
        outcomes: [
          {
            weight: 40,
            description: 'Valid points raised. New testing requirements implemented. You\'re the hero somehow.',
            effects: [
              { type: 'career_performance', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'Nobody buys the deflection. QA, reviewers, and management all blame you.',
            effects: [
              { type: 'career_performance', value: -12, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'tech_bro_culture',
    title: 'The Ping Pong Table Problem',
    description: 'Ping pong table, unlimited PTO nobody takes. They call it "culture."',
    category: 'career',
    probability: 0.12,
    cooldown: 8,
    requiredCareerId: 'tech',
    conditions: [{ type: 'hasCareerId', value: 'tech' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'bro_embrace',
        text: 'Drink the Kool-Aid',
        outcomes: [
          {
            weight: 50,
            description: 'The culture is cringe but the people are genuine. You enjoy coming to work.',
            effects: [
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'You spend more time at ping pong than your desk. Performance slips.',
            effects: [
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'bro_push_change',
        text: 'Suggest market-rate salaries instead',
        outcomes: [
          {
            weight: 35,
            description: 'Your feedback reaches the board. Salaries adjusted. You\'re the office hero.',
            effects: [
              { type: 'money', value: 2000, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 65,
            description: 'CEO labels you "not a culture fit." You\'re on thin ice.',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },


  // ============================================================
  // MUSIC (requiredCareerId: 'music')
  // ============================================================

  {
    id: 'music_song_viral',
    title: 'TikTok Famous',
    description: 'A song you almost deleted just got 4.7 million Spotify streams overnight.',
    category: 'career',
    probability: 0.1,
    cooldown: 16,
    oneTime: true,
    requiredCareerId: 'music',
    conditions: [{ type: 'hasCareerId', value: 'music' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'viral_capitalize',
        text: 'Release everything you\'ve got',
        outcomes: [
          {
            weight: 45,
            description: 'Your EP rides the wave perfectly. Labels are calling. Music pays the bills.',
            effects: [
              { type: 'money', value: 10000, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description: 'The follow-up is mid. The internet calls you a one-song artist.',
            effects: [
              { type: 'money', value: 3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'viral_stay_chill',
        text: 'Take your time on the next project',
        outcomes: [
          {
            weight: 50,
            description: 'A polished album silences doubters. Critics praise your "artistic patience."',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'career_satisfaction', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'By the time your album drops, the moment has passed.',
            effects: [
              { type: 'money', value: 1500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'music_record_deal',
    title: 'Sign on the Dotted Line',
    description: 'A label offers $50K advance but owns your masters and takes 80% of royalties.',
    category: 'career',
    probability: 0.1,
    cooldown: 16,
    requiredCareerId: 'music',
    conditions: [{ type: 'hasCareerId', value: 'music' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'deal_sign',
        text: 'Sign the deal',
        outcomes: [
          {
            weight: 40,
            description: 'Your music is everywhere. Radio, playlists, commercials. Living the dream.',
            effects: [
              { type: 'money', value: 15000, operation: 'add' },
              { type: 'reputation', value: 12, operation: 'add' },
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'The label shelves your album. You can\'t release it yourself either.',
            effects: [
              { type: 'money', value: 8000, operation: 'add' },
              { type: 'career_satisfaction', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'deal_negotiate',
        text: 'Counter-offer: keep your masters',
        hint: 'Channel your inner Taylor Swift',
        outcomes: [
          {
            weight: 30,
            description: 'They agree to a 60/40 split with you keeping masters. Dream deal.',
            effects: [
              { type: 'money', value: 10000, operation: 'add' },
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'career_satisfaction', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description: 'The label moves on to the next artist. You kept your principles and your day job.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'music_groupie_drama',
    title: 'Backstage Chaos',
    description: 'An obsessive fan got past security backstage.',
    category: 'career',
    probability: 0.15,
    cooldown: 8,
    requiredCareerId: 'music',
    conditions: [{ type: 'hasCareerId', value: 'music' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'groupie_entertain',
        text: 'Hang out with them',
        hint: 'What could go wrong?',
        outcomes: [
          {
            weight: 30,
            description: 'They\'re actually cool. You exchange numbers and make a genuine friend.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description: 'They post everything on social media. You wake up to fan fiction about yourself.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'groupie_security',
        text: 'Call security',
        outcomes: [
          {
            weight: 60,
            description: 'Security escorts them out. Your manager confirms you made the right call.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'The fan posts a tearful video. Half your fanbase thinks you\'re arrogant.',
            effects: [
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'music_one_hit_wonder',
    title: 'Sophomore Slump',
    description: 'Your first song was a hit but nothing since has landed.',
    category: 'career',
    probability: 0.15,
    cooldown: 8,
    requiredCareerId: 'music',
    conditions: [{ type: 'hasCareerId', value: 'music' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'wonder_reinvent',
        text: 'Completely reinvent your sound',
        outcomes: [
          {
            weight: 40,
            description: 'Critics call it "brave" and "mature." You\'re an artist with range.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'career_satisfaction', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'Alienates old fans, fails to attract new ones. Now you\'re a no-hit wonder.',
            effects: [
              { type: 'career_performance', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -2000, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'wonder_lean_in',
        text: 'Give the people Hit 2.0',
        outcomes: [
          {
            weight: 50,
            description: 'Hit 2.0 works. Similar enough to satisfy, different enough to not be a copy.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Critics call it "derivative." Streaming numbers are decent though.',
            effects: [
              { type: 'money', value: 2000, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'music_plagiarism',
    title: 'Did You Just Steal That?',
    description: 'A blog accuses you of plagiarizing an obscure 1970s track.',
    category: 'career',
    probability: 0.12,
    cooldown: 12,
    requiredCareerId: 'music',
    conditions: [{ type: 'hasCareerId', value: 'music' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'plagiarism_deny',
        text: 'Deny it completely',
        outcomes: [
          {
            weight: 40,
            description: 'Experts conclude it\'s coincidence. The blog issues a correction nobody reads.',
            effects: [
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'Someone finds a photo of you wearing the band\'s t-shirt. The lawsuit is expensive.',
            effects: [
              { type: 'money', value: -8000, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'plagiarism_credit',
        text: 'Give writing credit to the original',
        outcomes: [
          {
            weight: 70,
            description: 'The original artist is thrilled. They share your song. Controversy becomes collaboration.',
            effects: [
              { type: 'money', value: -1000, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Giving credit is seen as admitting guilt. The estate demands money.',
            effects: [
              { type: 'money', value: -5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'music_festival',
    title: 'Festival Madness',
    description: 'You\'re performing at a major festival. Small stage, same time as the headliner.',
    category: 'career',
    probability: 0.12,
    cooldown: 8,
    requiredCareerId: 'music',
    conditions: [{ type: 'hasCareerId', value: 'music' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'festival_give_everything',
        text: 'Give the performance of your life',
        outcomes: [
          {
            weight: 45,
            description: 'People drift over from the headliner. A journalist tweets "just witnessed a star being born."',
            effects: [
              { type: 'career_performance', value: 18, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
              { type: 'career_satisfaction', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Great performance but the headliner stole all the attention.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'Equipment failure. You finish the set acapella.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'festival_safe_set',
        text: 'Play it safe with the hits',
        outcomes: [
          {
            weight: 100,
            description: 'Solid set. Nobody blown away, nobody disappointed. You sell some merch.',
            effects: [
              { type: 'career_performance', value: 3, operation: 'add' },
              { type: 'money', value: 500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'music_creative_block',
    title: 'The Blank Page',
    description: 'Three weeks staring at a blank page. No lyrics, no melodies. The well is dry.',
    category: 'career',
    probability: 0.2,
    cooldown: 6,
    requiredCareerId: 'music',
    conditions: [{ type: 'hasCareerId', value: 'music' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'block_force',
        text: 'Force it. Write anything.',
        outcomes: [
          {
            weight: 40,
            description: 'Fifth draft has something. The block breaks. Creativity is a muscle.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'It produces garbage and everyone knows it. The block wins this round.',
            effects: [
              { type: 'career_satisfaction', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'block_break',
        text: 'Step away from music entirely',
        outcomes: [
          {
            weight: 55,
            description: 'Two months later, you write your best song in one sitting. Can\'t write about life without living it.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'career_satisfaction', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'money', value: -1000, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'The break turns into a year. Are you "taking a break" or "quitting"?',
            effects: [
              { type: 'career_performance', value: -12, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'music_band_breakup',
    title: 'Creative Differences',
    description: 'Band meeting ended with a shoe being thrown. The band is fracturing.',
    category: 'career',
    probability: 0.12,
    cooldown: 12,
    requiredCareerId: 'music',
    conditions: [{ type: 'hasCareerId', value: 'music' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'band_save',
        text: 'Try to hold the band together',
        outcomes: [
          {
            weight: 35,
            description: 'Group therapy works. The conflict fuels the best album you\'ve ever made.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 65,
            description: 'Can\'t fix what\'s broken. The "hiatus" announcement means "breakup."',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -18, operation: 'add' },
              { type: 'career_satisfaction', value: -12, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'band_go_solo',
        text: 'Go solo',
        outcomes: [
          {
            weight: 40,
            description: 'Solo career takes off. You were the star all along.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'money', value: 3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'Your music sounds empty without the band. Reviews say "disappointing."',
            effects: [
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'money', value: -2000, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },


  // ============================================================
  // FOOD (requiredCareerId: 'food')
  // ============================================================

  {
    id: 'food_health_inspector',
    title: 'Surprise Visit',
    description: 'A health inspector just walked through the front door with a clipboard.',
    category: 'career',
    probability: 0.18,
    cooldown: 6,
    requiredCareerId: 'food',
    conditions: [{ type: 'hasCareerId', value: 'food' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'inspector_honest',
        text: 'Give them the full tour',
        outcomes: [
          {
            weight: 45,
            description: '96 out of 100. "One of the cleanest they\'ve seen this month."',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: '76. "Minor violations." Technically passing but barely.',
            effects: [
              { type: 'career_performance', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'An ecosystem was developing behind the ice machine. Temporary closure.',
            effects: [
              { type: 'career_performance', value: -20, operation: 'add' },
              { type: 'money', value: -5000, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'inspector_distract',
        text: 'Offer a complimentary meal',
        hint: 'Hospitality or bribery?',
        outcomes: [
          {
            weight: 40,
            description: 'Your food is so good their notes become more lenient. 89.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'money', value: -100, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: '"Are you trying to bribe a government official?" Extra scrutiny. Score: 62.',
            effects: [
              { type: 'career_performance', value: -12, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'food_critic_review',
    title: 'The Critic Has Arrived',
    description: 'A notorious food critic just sat down at table seven.',
    category: 'career',
    probability: 0.12,
    cooldown: 8,
    requiredCareerId: 'food',
    conditions: [{ type: 'hasCareerId', value: 'food' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'critic_best_work',
        text: 'Cook the meal of your life',
        outcomes: [
          {
            weight: 40,
            description: 'FOUR STARS. "A revelation." Reservations triple overnight.',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: '"Ambitious but inconsistent." Two and a half stars.',
            effects: [
              { type: 'career_performance', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'You oversalt the main. The review is one word: "Unfortunate."',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'critic_normal_service',
        text: 'Treat them like any other customer',
        outcomes: [
          {
            weight: 60,
            description: 'Review praises "unpretentious excellence." Three stars.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'money', value: 2000, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'The review doesn\'t mention you at all. Being ignored is worse than being roasted.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'food_kitchen_fire',
    title: 'Flame On (Not the Good Kind)',
    description: 'A towel on the flat top is on fire. The fire is now on the wall.',
    category: 'career',
    probability: 0.12,
    cooldown: 12,
    requiredCareerId: 'food',
    conditions: [{ type: 'hasCareerId', value: 'food' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'fire_handle_it',
        text: 'Grab the fire extinguisher',
        outcomes: [
          {
            weight: 55,
            description: 'Fire out before sprinklers activate. The dining room never knew.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'Sprinklers go off. Water on the grill, on the food, on the guests. Service cancelled.',
            effects: [
              { type: 'money', value: -3000, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'fire_evacuate',
        text: 'Evacuate immediately',
        outcomes: [
          {
            weight: 70,
            description: 'Nobody hurt. Minor damage. You get sympathy reservations for a month.',
            effects: [
              { type: 'money', value: -1000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'The fire was tiny. Firefighters arrive to a smoldering towel. Diners want refunds.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'food_celebrity_diner',
    title: 'Famous Appetite',
    description: 'An A-list celebrity walked in with an entourage of eight. No reservation.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    requiredCareerId: 'food',
    conditions: [{ type: 'hasCareerId', value: 'food' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'celeb_diner_special',
        text: 'Create a custom off-menu experience',
        outcomes: [
          {
            weight: 45,
            description: '"BEST MEAL EVER" with location tag. Booked out three months.',
            effects: [
              { type: 'money', value: 8000, operation: 'add' },
              { type: 'reputation', value: 20, operation: 'add' },
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description: 'They have seventeen allergies. Three bites, "it\'s fine," and they leave. No post.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'celeb_diner_normal',
        text: 'Serve the regular menu',
        outcomes: [
          {
            weight: 50,
            description: 'They leave a 40% tip. Bodyguard says "they said it was really good."',
            effects: [
              { type: 'money', value: 1000, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'They order the cheapest thing, split it nine ways, and tip 10%.',
            effects: [
              { type: 'money', value: 100, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'food_staff_walkout',
    title: 'Kitchen Mutiny',
    description: 'Your kitchen crew walked out on a packed Saturday night.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    requiredCareerId: 'food',
    conditions: [{ type: 'hasCareerId', value: 'food' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'walkout_solo',
        text: 'Cook everything yourself',
        outcomes: [
          {
            weight: 35,
            description: 'Four hours of possessed cooking. Every dish goes out. Legendary performance.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 65,
            description: 'One person can\'t run six stations. Two-hour waits. Tables walk out.',
            effects: [
              { type: 'money', value: -3000, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'stat', target: 'health', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'walkout_close',
        text: 'Close the kitchen for the night',
        outcomes: [
          {
            weight: 60,
            description: 'You comp everyone\'s drinks and apologize. Most understand. Time to restructure pay.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Word gets out. "What kind of kitchen do you run?" becomes the question.',
            effects: [
              { type: 'money', value: -4000, operation: 'add' },
              { type: 'reputation', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'food_viral_trend',
    title: 'TikTok Made Me Cook It',
    description: 'A ridiculous food trend is blowing up and customers want it.',
    category: 'career',
    probability: 0.15,
    cooldown: 6,
    requiredCareerId: 'food',
    conditions: [{ type: 'hasCareerId', value: 'food' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'trend_embrace',
        text: 'Add it to the menu',
        outcomes: [
          {
            weight: 50,
            description: 'Smash hit. Food bloggers post about it. Best-selling item on the menu.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'The trend dies in two weeks. $2,000 of specialty ingredients nobody wants.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'trend_refuse',
        text: 'This is a serious kitchen',
        outcomes: [
          {
            weight: 50,
            description: 'You become known as the place that doesn\'t chase trends. Food purists love you.',
            effects: [
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'The restaurant down the street does it and goes viral while you sit empty.',
            effects: [
              { type: 'money', value: -1500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'career_satisfaction', value: 3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'food_gordon_ramsay',
    title: 'This Dish Is RAW',
    description: 'Three customers sent back the same dish. Someone used sugar instead of salt.',
    category: 'career',
    probability: 0.18,
    cooldown: 6,
    requiredCareerId: 'food',
    conditions: [{ type: 'hasCareerId', value: 'food' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'ramsay_fix_fast',
        text: 'Make new sauce from scratch, fast',
        outcomes: [
          {
            weight: 45,
            description: 'New batch in fifteen minutes, somehow BETTER than the original. Service recovers.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description: 'The rushed sauce is... different. Regulars notice. "Did you change the recipe?"',
            effects: [
              { type: 'career_performance', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'ramsay_86_it',
        text: '86 the dish for tonight',
        outcomes: [
          {
            weight: 60,
            description: 'Replacement dish works fine. Crisis managed, dignity intact.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'People came for that dish. A table of eight walks out.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'food_recipe_stolen',
    title: 'Recipe for Betrayal',
    description: 'Your former sous chef opened a restaurant using your signature recipe.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    requiredCareerId: 'food',
    conditions: [{ type: 'hasCareerId', value: 'food' }, { type: 'notInPrison', value: true }],
    choices: [
      {
        id: 'recipe_legal',
        text: 'Sue them',
        outcomes: [
          {
            weight: 35,
            description: 'Your lawyer proves the theft. They settle and rebrand. Justice served.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 65,
            description: 'You can\'t copyright a recipe. Lawyer charges $10K to tell you this.',
            effects: [
              { type: 'money', value: -10000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'recipe_evolve',
        text: 'Create an even better version',
        outcomes: [
          {
            weight: 55,
            description: 'Your 2.0 makes the stolen recipe taste like cafeteria food. Revenge served elevated.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'Anger clouds your creativity. The stolen version gets better reviews.',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

];
