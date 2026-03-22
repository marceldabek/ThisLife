// ============================================================
// ThisLife — School & Education Events
// 35+ events for teens and young adults covering high school,
// college, trade school, and the glorious absence of education.
// ============================================================

import { GameEvent } from '../../types/events';

export const SCHOOL_EVENTS: GameEvent[] = [
  // ============================================================
  // HIGH SCHOOL (ages 13-17)
  // ============================================================

  {
    id: 'hs_caught_cheating',
    title: 'Academic Espionage',
    description: 'Your teacher catches you with an elaborate cheat sheet.',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'confess',
        text: 'Confess and beg for mercy',
        outcomes: [
          {
            weight: 6,
            description: 'She gives you a zero instead of reporting you. Keeps the cheat sheet "for the faculty party."',
            effects: [
              { type: 'stat', target: 'smarts', value: -5 },
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'reputation', value: -5 },
            ],
          },
          {
            weight: 4,
            description: 'Reported to the principal. Your parents get a call that ruins dinner for weeks.',
            effects: [
              { type: 'stat', target: 'smarts', value: -8 },
              { type: 'stat', target: 'happiness', value: -20 },
              { type: 'reputation', value: -15 },
            ],
          },
        ],
      },
      {
        id: 'deny',
        text: 'Deny everything',
        outcomes: [
          {
            weight: 3,
            description: 'The teacher buys it. Tyler takes the fall. You feel nothing.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'reputation', value: -10 },
              { type: 'add_trait', value: 'deceitful' },
            ],
          },
          {
            weight: 7,
            description: 'It has your name, student ID, and a doodle of your face on it. Suspended three days.',
            effects: [
              { type: 'stat', target: 'smarts', value: -5 },
              { type: 'stat', target: 'happiness', value: -25 },
              { type: 'reputation', value: -20 },
            ],
          },
        ],
      },
      {
        id: 'argue_art',
        text: 'Call it a work of art',
        outcomes: [
          {
            weight: 2,
            description: 'The art teacher agrees. You fail the test but win Best Mixed Media at the art show.',
            effects: [
              { type: 'stat', target: 'smarts', value: -3 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 8,
            description: 'Your teacher stares at you until you hear the fluorescent lights. Double detention.',
            effects: [
              { type: 'stat', target: 'smarts', value: -5 },
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'reputation', value: -10 },
            ],
          },
        ],
      },
    ],
    probability: 0.15,
    category: 'education',
    minAge: 13,
    maxAge: 17,
    cooldown: 8,
  },

  {
    id: 'hs_prom_invite',
    title: 'Prom Night',
    description: 'Someone asks you to prom with a sign in the cafeteria.',
    conditions: [
      { type: 'minAge', value: 16 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'accept',
        text: 'Accept the promposal',
        outcomes: [
          {
            weight: 5,
            description: 'Magical night. Bad DJ, questionable punch, but you dance like nobody\'s watching.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'money', value: -200 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 5,
            description: 'Your date stays on their phone all night. You slow dance alone.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'money', value: -200 },
              { type: 'reputation', value: 5 },
            ],
          },
        ],
      },
      {
        id: 'reject',
        text: 'Say no in front of everyone',
        outcomes: [
          {
            weight: 5,
            description: 'The cafeteria goes silent. Their friends decorate your locker with sad stickers.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'reputation', value: -20 },
            ],
          },
          {
            weight: 5,
            description: 'You say no so kindly people actually respect you for it.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'reputation', value: 5 },
            ],
          },
        ],
      },
      {
        id: 'go_alone',
        text: 'Go solo',
        outcomes: [
          {
            weight: 7,
            description: 'You own the dance floor alone. Three people ask for your number.',
            effects: [
              { type: 'stat', target: 'happiness', value: 25 },
              { type: 'stat', target: 'looks', value: 5 },
              { type: 'money', value: -150 },
              { type: 'reputation', value: 15 },
            ],
          },
          {
            weight: 3,
            description: 'Two hours at the snack table having an existential crisis by the chocolate fountain.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'money', value: -150 },
            ],
          },
        ],
      },
      {
        id: 'skip_prom',
        text: 'Skip prom entirely',
        outcomes: [
          {
            weight: 5,
            description: 'You binge-watch TV. Monday\'s stories make you feel everything you missed.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
          {
            weight: 5,
            description: 'Pizza and video games. Best night ever. Prom was reportedly terrible anyway.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
            ],
          },
        ],
      },
    ],
    probability: 0.25,
    category: 'education',
    minAge: 16,
    maxAge: 17,
    oneTime: true,
    priority: 3,
  },

  {
    id: 'hs_suspension',
    title: 'The Incident',
    description: 'You\'re called to the principal\'s office. "We need to talk about the ferret."',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'accept_punishment',
        text: 'Accept the suspension',
        outcomes: [
          {
            weight: 7,
            description: 'Three days of chores at home. More exhausting than school.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'smarts', value: -3 },
              { type: 'reputation', value: -10 },
            ],
          },
          {
            weight: 3,
            description: 'Three days off. You sleep till noon and discover a passion for documentaries.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'smarts', value: -5 },
              { type: 'reputation', value: -10 },
            ],
          },
        ],
      },
      {
        id: 'fight_it',
        text: 'Argue it wasn\'t your ferret',
        outcomes: [
          {
            weight: 4,
            description: 'Your defense works. The ferret is traced back to the biology teacher.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 6,
            description: 'Security footage shows you carrying the ferret in your backpack. Five days.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20 },
              { type: 'stat', target: 'smarts', value: -5 },
              { type: 'reputation', value: -15 },
            ],
          },
        ],
      },
      {
        id: 'parents_called',
        text: 'Break down and call your parents',
        outcomes: [
          {
            weight: 5,
            description: 'Your mom argues with the principal for 45 minutes. Warning only. Lectures for months.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 5,
            description: 'Your dad says "I\'m not even surprised anymore." Grounded for a month.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20 },
              { type: 'reputation', value: -5 },
            ],
          },
        ],
      },
    ],
    probability: 0.12,
    category: 'education',
    minAge: 13,
    maxAge: 17,
    cooldown: 12,
  },

  {
    id: 'hs_parttime_job',
    title: 'Help Wanted',
    description: 'A local business is hiring teens for minimum wage. You have options.',
    conditions: [
      { type: 'minAge', value: 15 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'fast_food',
        text: 'Take the fast food job',
        outcomes: [
          {
            weight: 6,
            description: 'Weekends asking "want to supersize?" The grease never washes out.',
            effects: [
              { type: 'money', value: 400 },
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'health', value: -5 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 4,
            description: 'You accidentally become the best employee. Promoted to shift lead.',
            effects: [
              { type: 'money', value: 600 },
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'reputation', value: 10 },
            ],
          },
        ],
      },
      {
        id: 'retail',
        text: 'Take the retail job',
        outcomes: [
          {
            weight: 5,
            description: 'You fold the same shirt 847 times. A customer screams about an expired coupon.',
            effects: [
              { type: 'money', value: 450 },
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'looks', value: 3 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 5,
            description: 'Employee discount is great. Best-dressed in school on a budget.',
            effects: [
              { type: 'money', value: 350 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'looks', value: 5 },
              { type: 'reputation', value: 10 },
            ],
          },
        ],
      },
      {
        id: 'tutoring',
        text: 'Become a tutor',
        conditions: [
          { type: 'minStat', value: 60, stat: 'smarts' },
        ],
        outcomes: [
          {
            weight: 6,
            description: 'Teaching others makes you smarter. You accidentally become a nerd.',
            effects: [
              { type: 'money', value: 500 },
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 4,
            description: 'Your student\'s parent blames you when the kid fails. He was gaming the whole time.',
            effects: [
              { type: 'money', value: 300 },
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'smarts', value: 5 },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'education',
    minAge: 15,
    maxAge: 17,
    oneTime: true,
  },

  {
    id: 'hs_peer_pressure_drugs',
    title: 'Behind the Bleachers',
    description: 'The cool kids offer you something "totally chill" behind the bleachers.',
    conditions: [
      { type: 'minAge', value: 14 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'try_it',
        text: 'Give in to peer pressure',
        outcomes: [
          {
            weight: 4,
            description: 'You cough for seven minutes. Everyone laughs. You\'re "cool" by the loosest definition.',
            effects: [
              { type: 'stat', target: 'health', value: -10 },
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'reputation', value: 5 },
              { type: 'add_trait', value: 'risk-taker' },
            ],
          },
          {
            weight: 3,
            description: 'Nothing happens. You spent $20 to stand behind bleachers and feel nothing.',
            effects: [
              { type: 'money', value: -20 },
              { type: 'stat', target: 'happiness', value: -5 },
            ],
          },
          {
            weight: 3,
            description: 'A teacher catches everyone. Your "friends" scatter. None vouch for you.',
            effects: [
              { type: 'stat', target: 'health', value: -5 },
              { type: 'stat', target: 'happiness', value: -20 },
              { type: 'reputation', value: -15 },
            ],
          },
        ],
      },
      {
        id: 'refuse',
        text: '"Nah, I\'m good"',
        outcomes: [
          {
            weight: 6,
            description: 'They call you boring for 30 seconds, then forget. Lungs and dignity intact.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'health', value: 3 },
              { type: 'reputation', value: -5 },
            ],
          },
          {
            weight: 4,
            description: 'Two others say no too. You accidentally form a wholesome friend group.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'reputation', value: 5 },
              { type: 'add_trait', value: 'strong-willed' },
            ],
          },
        ],
      },
      {
        id: 'snitch',
        text: 'Report them',
        outcomes: [
          {
            weight: 5,
            description: 'You get a "Good Citizenship" award nobody respects. Called a narc all year.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'reputation', value: -20 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
          {
            weight: 5,
            description: 'Your tip reveals they were selling oregano. Everyone\'s embarrassed.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: 5 },
            ],
          },
        ],
      },
    ],
    probability: 0.15,
    category: 'education',
    minAge: 14,
    maxAge: 17,
    cooldown: 8,
  },

  {
    id: 'hs_failing_class',
    title: 'The Red Letter Grade',
    description: 'You\'re failing a class so badly even the curve can\'t save you.',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'maxStat', value: 45, stat: 'smarts' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'study_hard',
        text: 'Actually try for once',
        outcomes: [
          {
            weight: 6,
            description: 'You lock yourself in with a textbook. Pull it up to a C-minus. Teacher checks for a body double.',
            effects: [
              { type: 'stat', target: 'smarts', value: 10 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'health', value: -5 },
            ],
          },
          {
            weight: 4,
            description: 'You study 48 hours straight, fall asleep during the makeup exam. Still fail, but in an educated way.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'health', value: -10 },
            ],
          },
        ],
      },
      {
        id: 'accept_failure',
        text: 'Accept your fate',
        outcomes: [
          {
            weight: 5,
            description: 'Summer school. Hotter and sadder than regular school.',
            effects: [
              { type: 'stat', target: 'smarts', value: -5 },
              { type: 'stat', target: 'happiness', value: -20 },
              { type: 'reputation', value: -10 },
            ],
          },
          {
            weight: 5,
            description: 'Your parents\' disappointment unlocks rebellious energy. You start reading for fun.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'add_trait', value: 'rebellious' },
            ],
          },
        ],
      },
      {
        id: 'beg_teacher',
        text: 'Beg for extra credit',
        outcomes: [
          {
            weight: 5,
            description: 'She assigns a 30-page essay. You write 31. D-minus feels like winning the lottery.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: 5 },
            ],
          },
          {
            weight: 5,
            description: '"I don\'t do extra credit." Dead eyes. You are not special.',
            effects: [
              { type: 'stat', target: 'smarts', value: -3 },
              { type: 'stat', target: 'happiness', value: -15 },
            ],
          },
        ],
      },
    ],
    probability: 0.18,
    category: 'education',
    minAge: 13,
    maxAge: 17,
    cooldown: 6,
  },

  {
    id: 'hs_honor_roll',
    title: 'Nerd Alert',
    description: 'Your name appears on the honor roll. Your parents threaten a bumper sticker.',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'minStat', value: 65, stat: 'smarts' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'celebrate',
        text: 'Celebrate publicly',
        outcomes: [
          {
            weight: 7,
            description: 'You post about it. Twelve likes (eleven relatives). Confidence soars.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 3,
            description: 'Grading error. You were one point away. They let you keep the certificate.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'smarts', value: 2 },
            ],
          },
        ],
      },
      {
        id: 'stay_humble',
        text: 'Stay humble',
        outcomes: [
          {
            weight: 8,
            description: 'People respect the quiet confidence. Teachers treat you like a human.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'reputation', value: 15 },
            ],
          },
          {
            weight: 2,
            description: 'Nobody notices. Your mom finds out from the school newsletter and is offended.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'smarts', value: 5 },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'education',
    minAge: 13,
    maxAge: 17,
    cooldown: 8,
  },

  {
    id: 'hs_sports_tryouts',
    title: 'Tryout Day',
    description: 'Sports tryouts. The coach treats high school like the Olympics.',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'try_out',
        text: 'Go for it',
        outcomes: [
          {
            weight: 4,
            description: 'You make the team! Coach says you have "raw potential." You ride the bench all season.',
            effects: [
              { type: 'stat', target: 'health', value: 15 },
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'looks', value: 5 },
              { type: 'reputation', value: 10 },
              { type: 'add_trait', value: 'athletic' },
            ],
          },
          {
            weight: 4,
            description: 'You don\'t make it. Coach suggests chess club. Chess club is apparently cutthroat.',
            effects: [
              { type: 'stat', target: 'health', value: 5 },
              { type: 'stat', target: 'happiness', value: -15 },
            ],
          },
          {
            weight: 2,
            description: 'You make the team AND become a starter. Local paper: "Local Teen Surprisingly Not Terrible."',
            effects: [
              { type: 'stat', target: 'health', value: 20 },
              { type: 'stat', target: 'happiness', value: 25 },
              { type: 'stat', target: 'looks', value: 8 },
              { type: 'reputation', value: 20 },
              { type: 'add_trait', value: 'athletic' },
            ],
          },
        ],
      },
      {
        id: 'skip',
        text: 'Sports aren\'t your thing',
        outcomes: [
          {
            weight: 10,
            description: 'You watch from the bleachers eating chips. Team goes 2-10. Good call.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
            ],
          },
        ],
      },
      {
        id: 'manager',
        text: 'Become team manager instead',
        outcomes: [
          {
            weight: 7,
            description: 'You carry equipment and fill water bottles. But you get a letterman jacket.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 3,
            description: '90% picking up towels, 10% being yelled at. You develop a hatred of whistles.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'reputation', value: 3 },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'education',
    minAge: 13,
    maxAge: 17,
    oneTime: true,
  },

  {
    id: 'hs_extracurricular',
    title: 'Join a Club',
    description: 'Extracurricular fair. Every club is competing for your soul.',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'drama',
        text: 'Join drama club',
        outcomes: [
          {
            weight: 6,
            description: 'Cast as Tree #3. Your tree performance makes the audience cry. You\'ve found your people.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'stat', target: 'looks', value: 3 },
              { type: 'reputation', value: 5 },
              { type: 'add_trait', value: 'creative' },
            ],
          },
          {
            weight: 4,
            description: '80% drama about who gets the lead, 20% actual drama.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'stat', target: 'looks', value: 3 },
              { type: 'reputation', value: 10 },
            ],
          },
        ],
      },
      {
        id: 'band',
        text: 'Join the band',
        outcomes: [
          {
            weight: 5,
            description: 'You have actual talent. Only hit two people with your trombone at homecoming.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'reputation', value: 5 },
              { type: 'add_trait', value: 'musical' },
            ],
          },
          {
            weight: 5,
            description: 'Assigned the triangle. You miss your one note. Band director stares.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'reputation', value: -5 },
            ],
          },
        ],
      },
      {
        id: 'debate',
        text: 'Join debate team',
        outcomes: [
          {
            weight: 5,
            description: 'Natural arguer. You win your first tournament.',
            effects: [
              { type: 'stat', target: 'smarts', value: 10 },
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'reputation', value: 10 },
              { type: 'add_trait', value: 'persuasive' },
            ],
          },
          {
            weight: 5,
            description: 'You lose to a kid who cries on command. Logic is no match for tears.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: -5 },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'education',
    minAge: 13,
    maxAge: 17,
    oneTime: true,
  },

  {
    id: 'hs_food_poisoning',
    title: 'Mystery Meat',
    description: 'You ate the cafeteria\'s gray "protein medley." Bad idea.',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'nurse',
        text: 'Go to the nurse',
        outcomes: [
          {
            weight: 6,
            description: 'Crackers and an hour lying down. You miss math. Net positive.',
            effects: [
              { type: 'stat', target: 'health', value: -5 },
              { type: 'stat', target: 'happiness', value: 5 },
            ],
          },
          {
            weight: 4,
            description: 'Sent home. 48 hours in the bathroom. Lifelong cafeteria trust issues.',
            effects: [
              { type: 'stat', target: 'health', value: -15 },
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'add_trait', value: 'picky-eater' },
            ],
          },
        ],
      },
      {
        id: 'power_through',
        text: 'Power through it',
        outcomes: [
          {
            weight: 3,
            description: 'Iron stomach prevails. The lunch lady nods with respect.',
            effects: [
              { type: 'stat', target: 'health', value: -3 },
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 7,
            description: 'The incident occurs during English class. It becomes your nickname for years.',
            effects: [
              { type: 'stat', target: 'health', value: -20 },
              { type: 'stat', target: 'happiness', value: -25 },
              { type: 'reputation', value: -15 },
            ],
          },
        ],
      },
    ],
    probability: 0.12,
    category: 'education',
    minAge: 13,
    maxAge: 17,
    cooldown: 12,
  },

  {
    id: 'hs_phone_caught',
    title: 'Phone Busted',
    description: 'You\'re on your phone under your desk. Teacher is right behind you.',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'hand_over',
        text: 'Surrender the phone',
        outcomes: [
          {
            weight: 7,
            description: 'You hand it over. Without a screen, you discover you have no thoughts.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
          {
            weight: 3,
            description: 'You forgot to close your tabs. She sees your "do fish have feelings" search.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'reputation', value: -5 },
            ],
          },
        ],
      },
      {
        id: 'hide_quick',
        text: 'Lightning-speed pocket move',
        outcomes: [
          {
            weight: 3,
            description: 'The phone vanishes. The teacher questions reality.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 7,
            description: 'You yeet the phone across the room. Screen cracks. Video still playing.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20 },
              { type: 'money', value: -200 },
              { type: 'reputation', value: -10 },
            ],
          },
        ],
      },
      {
        id: 'educational',
        text: '"Educational purposes"',
        outcomes: [
          {
            weight: 2,
            description: 'You were actually on a Byzantine Empire Wikipedia hole. She\'s impressed.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: 10 },
            ],
          },
          {
            weight: 8,
            description: 'She turns the phone around: cats falling off things. The class laughs.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'reputation', value: -5 },
            ],
          },
        ],
      },
    ],
    probability: 0.18,
    category: 'education',
    minAge: 13,
    maxAge: 17,
    cooldown: 6,
  },

  {
    id: 'hs_graduation',
    title: 'Graduation Day',
    description: 'You survived high school. Graduation day.',
    conditions: [
      { type: 'minAge', value: 17 },
      { type: 'maxAge', value: 18 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
      { type: 'lifeStage', value: 'teen' },
    ],
    choices: [
      {
        id: 'celebrate',
        text: 'Throw your cap with joy',
        outcomes: [
          {
            weight: 7,
            description: 'Cap flies high. Everyone cries. It hits someone in the eye. Beautiful moment.',
            effects: [
              { type: 'stat', target: 'happiness', value: 25 },
              { type: 'reputation', value: 10 },
              { type: 'education', value: 'highSchool' },
            ],
          },
          {
            weight: 3,
            description: 'You trip on your gown walking across the stage. The photo goes viral.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'looks', value: -3 },
              { type: 'reputation', value: -5 },
              { type: 'education', value: 'highSchool' },
            ],
          },
        ],
      },
      {
        id: 'emotional',
        text: 'Take it all in quietly',
        outcomes: [
          {
            weight: 8,
            description: 'You reflect on four years of survival. A single tear falls. You\'re proud.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'education', value: 'highSchool' },
            ],
          },
          {
            weight: 2,
            description: 'You realize you might have peaked. At least you have a diploma.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'education', value: 'highSchool' },
            ],
          },
        ],
      },
    ],
    probability: 0.3,
    category: 'education',
    minAge: 17,
    maxAge: 18,
    oneTime: true,
    priority: 5,
  },

  {
    id: 'hs_senior_prank',
    title: 'Senior Prank',
    description: 'Senior year. The class is planning a prank involving geese. You\'re invited.',
    conditions: [
      { type: 'minAge', value: 17 },
      { type: 'maxAge', value: 18 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'join_prank',
        text: 'Join the prank squad',
        outcomes: [
          {
            weight: 5,
            description: 'You release geese labeled #1, #3, #4. They search all day for #2. There is no #2.',
            effects: [
              { type: 'stat', target: 'happiness', value: 25 },
              { type: 'reputation', value: 15 },
              { type: 'add_trait', value: 'prankster' },
            ],
          },
          {
            weight: 3,
            description: 'The geese go rogue. One chases the VP into the parking lot. School cancelled.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'reputation', value: -10 },
              { type: 'stat', target: 'smarts', value: -3 },
            ],
          },
          {
            weight: 2,
            description: 'Caught on camera. They threaten to withhold your diploma.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20 },
              { type: 'reputation', value: -20 },
            ],
          },
        ],
      },
      {
        id: 'mastermind',
        text: 'Plan your own better prank',
        outcomes: [
          {
            weight: 4,
            description: 'Flash mob of 200 students opening textbooks simultaneously. Best prank ever.',
            effects: [
              { type: 'stat', target: 'happiness', value: 30 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'reputation', value: 20 },
            ],
          },
          {
            weight: 6,
            description: '500 rubber ducks in the pool. Takes 3 days to remove. Banned from pool forever.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'money', value: -100 },
              { type: 'reputation', value: 10 },
            ],
          },
        ],
      },
      {
        id: 'sit_out',
        text: 'Stay out of it',
        outcomes: [
          {
            weight: 10,
            description: 'You watch safely from the library. When investigations start, nobody says your name.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'education',
    minAge: 17,
    maxAge: 18,
    oneTime: true,
  },

  {
    id: 'hs_locker_room',
    title: 'Locker Room Mystery',
    description: 'Someone stole every left shoe during gym class. Somehow, you\'re a suspect.',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'investigate',
        text: 'Play detective',
        outcomes: [
          {
            weight: 5,
            description: 'You find the shoes on the roof arranged in a pentagram. School hero.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 5,
            description: 'The gym teacher\'s dog did it. You get a "Junior Detective" sticker.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: 5 },
            ],
          },
        ],
      },
      {
        id: 'ignore',
        text: 'Not your problem',
        outcomes: [
          {
            weight: 7,
            description: 'The shoes are never found. It becomes school folklore.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
            ],
          },
          {
            weight: 3,
            description: 'Your indifference looks suspicious. The gym teacher eyes you all semester.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'reputation', value: -5 },
            ],
          },
        ],
      },
    ],
    probability: 0.1,
    category: 'education',
    minAge: 13,
    maxAge: 17,
    cooldown: 16,
  },

  {
    id: 'hs_school_dance',
    title: 'School Dance',
    description: 'Dollar-store streamers, a DJ who played the same song twice. Hormones are high.',
    conditions: [
      { type: 'minAge', value: 14 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'dance',
        text: 'Hit the dance floor',
        outcomes: [
          {
            weight: 4,
            description: 'A circle forms around you. You peak right here, right now.',
            effects: [
              { type: 'stat', target: 'happiness', value: 25 },
              { type: 'stat', target: 'looks', value: 3 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 6,
            description: 'You try a move from online and pull a muscle. You\'re 16 with a back injury from dancing.',
            effects: [
              { type: 'stat', target: 'health', value: -5 },
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'reputation', value: -5 },
            ],
          },
        ],
      },
      {
        id: 'wallflower',
        text: 'Guard the snack table',
        outcomes: [
          {
            weight: 6,
            description: 'Deep conversations with fellow snack guardians. You make a lasting friend.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'health', value: -3 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 4,
            description: 'The chaperone asks if you\'re okay. You are not. But you are full.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'health', value: -5 },
            ],
          },
        ],
      },
      {
        id: 'drama_instigate',
        text: 'Request a chaos song',
        outcomes: [
          {
            weight: 5,
            description: 'You request your ex\'s least favorite song. They storm out. The DJ gives you a thumbs up.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: -10 },
            ],
          },
          {
            weight: 5,
            description: 'You request "Baby Shark" ironically. The DJ plays it unironically. Chaos.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'reputation', value: -5 },
            ],
          },
        ],
      },
    ],
    probability: 0.15,
    category: 'education',
    minAge: 14,
    maxAge: 17,
    cooldown: 8,
  },

  {
    id: 'hs_college_apps',
    title: 'College Applications',
    description: 'College application essays are due.',
    conditions: [
      { type: 'minAge', value: 17 },
      { type: 'maxAge', value: 18 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'pour_heart',
        text: 'Write from the heart',
        outcomes: [
          {
            weight: 5,
            description: 'Honest essay about crying in a parking lot. The admissions officer is moved. Accepted.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 5,
            description: 'Waitlisted at your dream school. Accepted at your safety school.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'stat', target: 'happiness', value: -10 },
            ],
          },
        ],
      },
      {
        id: 'ai_help',
        text: 'Get "creative help" online',
        outcomes: [
          {
            weight: 3,
            description: 'Nobody notices your TED-talk-sounding essay. You get into a decent school.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'smarts', value: -3 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 7,
            description: 'Flagged. Same opening paragraph as 847 applicants. Rejected.',
            effects: [
              { type: 'stat', target: 'happiness', value: -25 },
              { type: 'stat', target: 'smarts', value: -5 },
              { type: 'reputation', value: -15 },
            ],
          },
        ],
      },
      {
        id: 'skip_college',
        text: 'Decide college isn\'t for you',
        outcomes: [
          {
            weight: 5,
            description: 'Parents react like you joined a cult. But you feel free.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: -10 },
              { type: 'add_trait', value: 'independent' },
            ],
          },
          {
            weight: 5,
            description: 'No plan. You google "successful people without degrees" at 3 AM.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
        ],
      },
    ],
    probability: 0.25,
    category: 'education',
    minAge: 17,
    maxAge: 18,
    oneTime: true,
    priority: 3,
  },

  {
    id: 'hs_peer_pressure_shoplifting',
    title: 'Five-Finger Discount',
    description: 'Your friends dare you to shoplift a candy bar.',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'steal',
        text: 'Go for it',
        outcomes: [
          {
            weight: 3,
            description: 'You get away with it. The candy tastes like adrenaline and shame.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'reputation', value: -5 },
              { type: 'add_trait', value: 'risk-taker' },
            ],
          },
          {
            weight: 7,
            description: 'The clerk grabs you. Parents called. Silent car ride home.',
            effects: [
              { type: 'stat', target: 'happiness', value: -25 },
              { type: 'reputation', value: -20 },
            ],
          },
        ],
      },
      {
        id: 'refuse',
        text: 'No way, not for a candy bar',
        outcomes: [
          {
            weight: 8,
            description: 'You buy it like a normal person. Friends call you boring for ten seconds.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'money', value: -2 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 2,
            description: 'Your friend tries instead and gets caught. You watch his mom arrive.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
        ],
      },
    ],
    probability: 0.12,
    category: 'education',
    minAge: 13,
    maxAge: 17,
    cooldown: 12,
  },

  {
    id: 'hs_peer_pressure_alcohol',
    title: 'House Party',
    description: 'House party. Red cups everywhere. Someone hands you a drink.',
    conditions: [
      { type: 'minAge', value: 15 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'drink',
        text: 'Take the drink',
        outcomes: [
          {
            weight: 4,
            description: 'One sip, lemon face, secretly pour the rest into a plant. Social survival mastered.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 3,
            description: 'The room spins. You fall asleep in the bathtub. Photos will resurface at your wedding.',
            effects: [
              { type: 'stat', target: 'health', value: -15 },
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'reputation', value: -10 },
            ],
          },
          {
            weight: 3,
            description: 'Cops show up. Parents called. Longest 12-minute car ride of your life.',
            effects: [
              { type: 'stat', target: 'health', value: -10 },
              { type: 'stat', target: 'happiness', value: -25 },
              { type: 'reputation', value: -15 },
            ],
          },
        ],
      },
      {
        id: 'decline',
        text: 'Pass on it',
        outcomes: [
          {
            weight: 7,
            description: 'Nobody cares. You have fun sober and drive everyone home.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'health', value: 3 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 3,
            description: 'You stay sober and witness the chaos clearly. Lifetime of blackmail material.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
        ],
      },
      {
        id: 'leave',
        text: 'Leave the party',
        outcomes: [
          {
            weight: 6,
            description: 'You slip out. Cool night air. Rare peace of a teen making a good decision.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'health', value: 5 },
            ],
          },
          {
            weight: 4,
            description: 'FOMO for a week. Apparently it involved a trampoline and a neighbor\'s goat.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
            ],
          },
        ],
      },
    ],
    probability: 0.15,
    category: 'education',
    minAge: 15,
    maxAge: 17,
    cooldown: 8,
  },

  {
    id: 'hs_talent_show',
    title: 'Talent Show',
    description: 'Sign-ups are open. Previous acts include a Rubik\'s cube beatboxer.',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'perform',
        text: 'Sign up and perform',
        outcomes: [
          {
            weight: 4,
            description: 'Standing ovation. A teacher wipes away a tear. Three minutes of glory.',
            effects: [
              { type: 'stat', target: 'happiness', value: 30 },
              { type: 'stat', target: 'looks', value: 5 },
              { type: 'reputation', value: 20 },
              { type: 'add_trait', value: 'confident' },
            ],
          },
          {
            weight: 4,
            description: 'You forget everything halfway through. You improvise. Somehow it\'s better.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 2,
            description: 'So bad it loops to amazing. People think it\'s ironic. You become a meme.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'reputation', value: 10 },
            ],
          },
        ],
      },
      {
        id: 'watch',
        text: 'Watch from the audience',
        outcomes: [
          {
            weight: 10,
            description: 'Row 7 commentary with friends. The real talent was the roasts.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
            ],
          },
        ],
      },
    ],
    probability: 0.15,
    category: 'education',
    minAge: 13,
    maxAge: 17,
    cooldown: 12,
  },

  {
    id: 'hs_group_project',
    title: 'Group Project',
    description: 'Group project with the usual cast of useless teammates.',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'carry_team',
        text: 'Do all the work yourself',
        outcomes: [
          {
            weight: 6,
            description: 'You do everything. Everyone gets an A. The injustice fuels you.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'health', value: -5 },
            ],
          },
          {
            weight: 4,
            description: 'You do all the work. One member takes credit during Q&A. Eye twitches.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: -20 },
              { type: 'reputation', value: -5 },
            ],
          },
        ],
      },
      {
        id: 'delegate',
        text: 'Try to lead and delegate',
        outcomes: [
          {
            weight: 4,
            description: 'Two people ghost, one submits in Comic Sans. Somehow it works.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: 10 },
              { type: 'add_trait', value: 'leader' },
            ],
          },
          {
            weight: 6,
            description: 'Nobody listens. Group chat becomes meme channel. Due tomorrow. Nobody started.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'stat', target: 'happiness', value: -15 },
            ],
          },
        ],
      },
      {
        id: 'do_nothing',
        text: 'Contribute nothing',
        outcomes: [
          {
            weight: 5,
            description: 'The overachiever carries the team. You get an A. Your soul gets an F.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'smarts', value: -5 },
              { type: 'reputation', value: -10 },
            ],
          },
          {
            weight: 5,
            description: 'The overachiever tells the teacher. Solo project due Monday. Karma is real.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'smarts', value: -3 },
              { type: 'reputation', value: -15 },
            ],
          },
        ],
      },
    ],
    probability: 0.18,
    category: 'education',
    minAge: 13,
    maxAge: 17,
    cooldown: 6,
  },

  {
    id: 'hs_bathroom_pass',
    title: 'Bathroom Pass Crisis',
    description: 'Out of bathroom passes. 45 minutes left. Biology disagrees.',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'ask_anyway',
        text: 'Ask anyway',
        outcomes: [
          {
            weight: 5,
            description: 'The teacher sighs and lets you go. Small victory.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'health', value: 3 },
            ],
          },
          {
            weight: 5,
            description: 'She says no and lectures about "time management" for five minutes.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'health', value: -5 },
            ],
          },
        ],
      },
      {
        id: 'sneak_out',
        text: 'Sneak out during a distraction',
        outcomes: [
          {
            weight: 4,
            description: 'Someone drops a water bottle. You\'re there and back in 90 seconds. Bathroom ninja.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'health', value: 3 },
            ],
          },
          {
            weight: 6,
            description: 'The teacher says your name in THAT tone. You slink back.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'reputation', value: -5 },
            ],
          },
        ],
      },
      {
        id: 'hold_it',
        text: 'Suffer in silence',
        outcomes: [
          {
            weight: 6,
            description: 'You hold it for 45 minutes. Sprint to the bathroom at the bell. Victory.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'stat', target: 'health', value: -3 },
            ],
          },
          {
            weight: 4,
            description: 'Can\'t focus. Miss the entire lesson. It\'s on the test.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'smarts', value: -3 },
              { type: 'stat', target: 'health', value: -3 },
            ],
          },
        ],
      },
    ],
    probability: 0.12,
    category: 'education',
    minAge: 13,
    maxAge: 17,
    cooldown: 8,
  },

  {
    id: 'hs_substitute_teacher',
    title: 'Sub Day',
    description: 'Substitute teacher. The class senses weakness.',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'take_advantage',
        text: 'Join the chaos',
        outcomes: [
          {
            weight: 6,
            description: 'You give a fake name. Free period in disguise.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'smarts', value: -3 },
            ],
          },
          {
            weight: 4,
            description: 'The sub is a retired Marine. Class whipped into shape in 30 seconds.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'smarts', value: 5 },
            ],
          },
        ],
      },
      {
        id: 'help_sub',
        text: 'Help the sub',
        outcomes: [
          {
            weight: 6,
            description: 'They leave a note: "this one is good." Your regular teacher is confused.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 4,
            description: 'The class turns on you for being a narc. The sub doesn\'t remember your name.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'reputation', value: -10 },
            ],
          },
        ],
      },
      {
        id: 'zone_out',
        text: 'Put in headphones',
        outcomes: [
          {
            weight: 8,
            description: 'One earbud, hood up. Chaos swirls around you. You are the eye of the hurricane.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
            ],
          },
          {
            weight: 2,
            description: 'This sub has done this before. Headphones confiscated.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
            ],
          },
        ],
      },
    ],
    probability: 0.15,
    category: 'education',
    minAge: 13,
    maxAge: 17,
    cooldown: 6,
  },

  {
    id: 'hs_pop_quiz',
    title: 'Pop Quiz',
    description: 'The teacher walks in with THAT smirk. Pencils are drawn like swords.',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'try_best',
        text: 'Give it your best shot',
        outcomes: [
          {
            weight: 4,
            description: 'You accidentally absorbed knowledge. Solid B. Your subconscious is carrying you.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: 10 },
            ],
          },
          {
            weight: 6,
            description: 'You answer three with confidence and seven with fortune-cookie energy.',
            effects: [
              { type: 'stat', target: 'smarts', value: -3 },
              { type: 'stat', target: 'happiness', value: -10 },
            ],
          },
        ],
      },
      {
        id: 'creative_answers',
        text: 'Get creative with answers',
        outcomes: [
          {
            weight: 4,
            description: 'Partial credit for "effort and entertainment value." This will never happen again.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 6,
            description: '"See me after class" in red ink thick enough to bleed through.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'stat', target: 'smarts', value: -3 },
            ],
          },
        ],
      },
      {
        id: 'strategic_absence',
        text: 'Suddenly feel very sick',
        outcomes: [
          {
            weight: 4,
            description: 'Convincing performance. An hour on the nurse\'s cot. Beats a quiz.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'smarts', value: -3 },
            ],
          },
          {
            weight: 6,
            description: '"You can take it when you get back from the nurse." Checkmate.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'reputation', value: -5 },
            ],
          },
        ],
      },
    ],
    probability: 0.18,
    category: 'education',
    minAge: 13,
    maxAge: 17,
    cooldown: 6,
  },

  {
    id: 'hs_yearbook_photo',
    title: 'Picture Day',
    description: 'Picture day. One shot at an image that lasts forever.',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'try_hard',
        text: 'Spend an hour getting ready',
        outcomes: [
          {
            weight: 5,
            description: 'Perfect hair, perfect outfit. They catch you mid-blink. Retake costs $15.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'looks', value: -3 },
              { type: 'money', value: -15 },
            ],
          },
          {
            weight: 5,
            description: 'The photo is genuinely great. You look like you have your life together.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'looks', value: 5 },
              { type: 'reputation', value: 5 },
            ],
          },
        ],
      },
      {
        id: 'dont_care',
        text: 'Show up as you are',
        outcomes: [
          {
            weight: 6,
            description: 'Most authentic yearbook photo in school history.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
            ],
          },
          {
            weight: 4,
            description: 'You look terrible and you know it the moment the flash goes off.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'looks', value: -3 },
            ],
          },
        ],
      },
      {
        id: 'funny_face',
        text: 'Make a ridiculous face',
        outcomes: [
          {
            weight: 5,
            description: 'It makes it into the yearbook. Your friends can\'t stop laughing for a week.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 5,
            description: 'They don\'t retake it. That\'s your permanent legacy.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'reputation', value: 5 },
            ],
          },
        ],
      },
    ],
    probability: 0.15,
    category: 'education',
    minAge: 13,
    maxAge: 17,
    cooldown: 8,
  },

  // ============================================================
  // COLLEGE (ages 18-22)
  // ============================================================

  {
    id: 'college_choose_major',
    title: 'Choose a Major',
    description: 'Time to declare a major. The advisor is waiting.',
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'maxAge', value: 20 },
      { type: 'isEnrolled', value: true },
      { type: 'hasEducation', value: 'highSchool' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'stem',
        text: 'STEM',
        outcomes: [
          {
            weight: 6,
            description: 'Social life dies but future salary potential lives. You dream in equations.',
            effects: [
              { type: 'stat', target: 'smarts', value: 15 },
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'health', value: -5 },
              { type: 'add_trait', value: 'analytical' },
            ],
          },
          {
            weight: 4,
            description: 'Organic Chemistry nearly kills you. GPA can only be described as "alive."',
            effects: [
              { type: 'stat', target: 'smarts', value: 10 },
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'health', value: -10 },
            ],
          },
        ],
      },
      {
        id: 'liberal_arts',
        text: 'Liberal Arts',
        outcomes: [
          {
            weight: 5,
            description: 'You can explain why nothing matters in twelve frameworks. Parents ask "but what will you DO?"',
            effects: [
              { type: 'stat', target: 'smarts', value: 10 },
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'add_trait', value: 'creative' },
            ],
          },
          {
            weight: 5,
            description: 'Genuine passion for poetry. Job prospects are not.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: 5 },
            ],
          },
        ],
      },
      {
        id: 'business',
        text: 'Business',
        outcomes: [
          {
            weight: 6,
            description: 'You start using "synergy" unironically. LinkedIn profile professionally lit.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'reputation', value: 10 },
              { type: 'add_trait', value: 'ambitious' },
            ],
          },
          {
            weight: 4,
            description: 'Just group projects where one person does everything. You are that person.',
            effects: [
              { type: 'stat', target: 'smarts', value: 10 },
              { type: 'stat', target: 'happiness', value: -5 },
            ],
          },
        ],
      },
      {
        id: 'undeclared',
        text: 'Undeclared',
        outcomes: [
          {
            weight: 5,
            description: 'You find unexpected joy in something you never considered.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: 15 },
            ],
          },
          {
            weight: 5,
            description: 'Three semesters, 14 departments, zero majors. Advisor says "pick before the money runs out."',
            effects: [
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'money', value: -2000 },
            ],
          },
        ],
      },
    ],
    probability: 0.3,
    category: 'education',
    minAge: 18,
    maxAge: 20,
    oneTime: true,
    priority: 4,
  },

  {
    id: 'college_party',
    title: 'Greek Row Party',
    description: 'Massive party on Greek Row tonight.',
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'maxAge', value: 22 },
      { type: 'isEnrolled', value: true },
      { type: 'hasEducation', value: 'highSchool' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'go_wild',
        text: 'Go all in',
        outcomes: [
          {
            weight: 4,
            description: 'Night of your life. Phone number in Sharpie on your arm. Two-day hangover.',
            effects: [
              { type: 'stat', target: 'happiness', value: 25 },
              { type: 'stat', target: 'health', value: -15 },
              { type: 'stat', target: 'smarts', value: -5 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 4,
            description: 'You wake up on a lawn with one shoe and someone\'s goldfish in your pocket.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'health', value: -20 },
              { type: 'stat', target: 'smarts', value: -5 },
              { type: 'reputation', value: -10 },
            ],
          },
          {
            weight: 2,
            description: 'Campus police show up. You escape through a first-floor window.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'health', value: -10 },
              { type: 'reputation', value: -5 },
            ],
          },
        ],
      },
      {
        id: 'go_chill',
        text: 'Go but stay chill',
        outcomes: [
          {
            weight: 7,
            description: 'You nurse one drink and become everyone\'s therapist. Unsung hero.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'health', value: -3 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 3,
            description: 'Staying sober is like watching a nature documentary. You leave early with good stories.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
        ],
      },
      {
        id: 'skip_party',
        text: 'Stay home and study',
        outcomes: [
          {
            weight: 5,
            description: 'You feel great the next morning. Everyone else looks like zombies.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'health', value: 5 },
              { type: 'stat', target: 'happiness', value: -5 },
            ],
          },
          {
            weight: 5,
            description: 'You watch everyone\'s stories instead of studying. Learn nothing, feel everything.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'education',
    minAge: 18,
    maxAge: 22,
    cooldown: 6,
  },

  {
    id: 'college_professor_drama',
    title: 'Professor Meltdown',
    description: 'Your professor is having a very public existential crisis.',
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'maxAge', value: 22 },
      { type: 'isEnrolled', value: true },
      { type: 'hasEducation', value: 'highSchool' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'report',
        text: 'Report to the department',
        outcomes: [
          {
            weight: 5,
            description: 'They send a strongly worded email. He gives everyone a B+ and retires.',
            effects: [
              { type: 'stat', target: 'smarts', value: -3 },
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 5,
            description: 'Department chair: "That\'s just how he is." He gets tenure.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
        ],
      },
      {
        id: 'befriend',
        text: 'Connect with him',
        outcomes: [
          {
            weight: 5,
            description: 'He rants for 90 minutes about his ex. Then writes you an incredible recommendation.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 5,
            description: 'He assigns you a 50-page reading list. Unwanted mentor and unwanted homework.',
            effects: [
              { type: 'stat', target: 'smarts', value: 10 },
              { type: 'stat', target: 'happiness', value: -10 },
            ],
          },
        ],
      },
      {
        id: 'ride_it_out',
        text: 'Ride out the semester',
        outcomes: [
          {
            weight: 7,
            description: 'His crisis becomes class entertainment. Final exam: "write about what you learned."',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: 5 },
            ],
          },
          {
            weight: 3,
            description: 'He vanishes for the last three weeks. Final cancelled. You get a "Pass."',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'smarts', value: -5 },
            ],
          },
        ],
      },
    ],
    probability: 0.15,
    category: 'education',
    minAge: 18,
    maxAge: 22,
    cooldown: 8,
  },

  {
    id: 'college_allnighter',
    title: 'The All-Nighter',
    description: 'Finals in 12 hours. Zero studying done. Notes look like abstract art.',
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'maxAge', value: 22 },
      { type: 'isEnrolled', value: true },
      { type: 'hasEducation', value: 'highSchool' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'cram',
        text: 'Full cram session',
        outcomes: [
          {
            weight: 4,
            description: '11 hours of panic-learning. You pass with a B. Then sleep for 19 hours.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'health', value: -15 },
              { type: 'stat', target: 'happiness', value: 5 },
            ],
          },
          {
            weight: 4,
            description: 'At 4 AM the words stop making sense. You pass out at your desk.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'stat', target: 'health', value: -20 },
              { type: 'stat', target: 'happiness', value: -15 },
            ],
          },
          {
            weight: 2,
            description: 'Flow state unlocked. You ace it. Professor asks if you were holding out all semester.',
            effects: [
              { type: 'stat', target: 'smarts', value: 12 },
              { type: 'stat', target: 'health', value: -10 },
              { type: 'stat', target: 'happiness', value: 20 },
            ],
          },
        ],
      },
      {
        id: 'accept_fate',
        text: 'Go to sleep and accept fate',
        outcomes: [
          {
            weight: 5,
            description: 'Rested brain remembers more than expected. C+. Sleep: the underrated study technique.',
            effects: [
              { type: 'stat', target: 'health', value: 5 },
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
          {
            weight: 5,
            description: 'You sleep peacefully and fail refreshedly.',
            effects: [
              { type: 'stat', target: 'health', value: 5 },
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'smarts', value: -5 },
            ],
          },
        ],
      },
      {
        id: 'study_group',
        text: 'Find a study group',
        outcomes: [
          {
            weight: 6,
            description: 'One has notes, one has practice exams, you bring snacks. Teamwork saves everyone.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'health', value: -8 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 4,
            description: 'Four hours complaining about the professor. Two hours studying. Learn nothing, feel validated.',
            effects: [
              { type: 'stat', target: 'smarts', value: 2 },
              { type: 'stat', target: 'health', value: -5 },
              { type: 'stat', target: 'happiness', value: 5 },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'education',
    minAge: 18,
    maxAge: 22,
    cooldown: 4,
  },

  {
    id: 'college_roommate_hell',
    title: 'Roommate From Hell',
    description: 'Your roommate plays the same song at 3 AM and returned your shampoo empty.',
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'maxAge', value: 22 },
      { type: 'isEnrolled', value: true },
      { type: 'hasEducation', value: 'highSchool' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'confront',
        text: 'Have an adult conversation',
        outcomes: [
          {
            weight: 4,
            description: 'You use "I" statements. They put headphones on while you\'re talking.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
          {
            weight: 6,
            description: 'It actually works. Ground rules established. By senior year, they\'re in your wedding.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'reputation', value: 5 },
            ],
          },
        ],
      },
      {
        id: 'passive_aggressive',
        text: 'Passive-aggressive post-it war',
        outcomes: [
          {
            weight: 5,
            description: 'Increasingly specific notes everywhere. The Cold War of dorm life.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'reputation', value: -5 },
            ],
          },
          {
            weight: 5,
            description: 'The RA forces you both into a conflict resolution seminar. Humiliating and effective.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
        ],
      },
      {
        id: 'request_transfer',
        text: 'Request a room transfer',
        outcomes: [
          {
            weight: 4,
            description: 'New roommate is quiet, clean, sleeps at 10 PM. Paradise found.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'stat', target: 'health', value: 5 },
            ],
          },
          {
            weight: 6,
            description: 'Waitlist is 200 long. You buy noise-canceling headphones and a fridge with a lock.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'money', value: -300 },
            ],
          },
        ],
      },
    ],
    probability: 0.18,
    category: 'education',
    minAge: 18,
    maxAge: 22,
    oneTime: true,
  },

  {
    id: 'college_study_abroad',
    title: 'Study Abroad',
    description: 'A semester in Europe. The brochure looks amazing. The fine print shows the cost.',
    conditions: [
      { type: 'minAge', value: 19 },
      { type: 'maxAge', value: 22 },
      { type: 'isEnrolled', value: true },
      { type: 'hasEducation', value: 'highSchool' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'go_abroad',
        text: 'Apply for study abroad',
        outcomes: [
          {
            weight: 6,
            description: 'Life-changing. You learn a language (poorly) and become 60% "when I was in Europe."',
            effects: [
              { type: 'stat', target: 'happiness', value: 30 },
              { type: 'stat', target: 'smarts', value: 10 },
              { type: 'stat', target: 'looks', value: 5 },
              { type: 'money', value: -5000 },
              { type: 'reputation', value: 10 },
              { type: 'add_trait', value: 'worldly' },
            ],
          },
          {
            weight: 4,
            description: '10% studying, 90% abroad. You fail two classes but gain a European ex.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'stat', target: 'smarts', value: -5 },
              { type: 'money', value: -5000 },
              { type: 'reputation', value: 5 },
            ],
          },
        ],
      },
      {
        id: 'cant_afford',
        text: 'Can\'t afford it',
        outcomes: [
          {
            weight: 6,
            description: 'You watch everyone\'s photos for four months. Rich inner world of jealousy.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
          {
            weight: 4,
            description: 'You take extra classes instead. A semester closer to graduating.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'happiness', value: 5 },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'education',
    minAge: 19,
    maxAge: 22,
    oneTime: true,
    priority: 2,
  },

  {
    id: 'college_dropout',
    title: 'The Dropout Daydream',
    description: '8 AM lecture, $47 in the bank, $40K in loans.',
    conditions: [
      { type: 'minAge', value: 19 },
      { type: 'maxAge', value: 22 },
      { type: 'isEnrolled', value: true },
      { type: 'hasEducation', value: 'highSchool' },
      { type: 'notInPrison', value: true },
      { type: 'maxStat', value: 40, stat: 'happiness' },
    ],
    choices: [
      {
        id: 'drop_out',
        text: 'Drop out',
        outcomes: [
          {
            weight: 4,
            description: 'Immediate relief. You get a job, start living, never look back.',
            effects: [
              { type: 'stat', target: 'happiness', value: 25 },
              { type: 'stat', target: 'smarts', value: -5 },
              { type: 'money', value: -500 },
              { type: 'add_trait', value: 'independent' },
            ],
          },
          {
            weight: 6,
            description: 'Relief lasts two weeks. Then reality of no degree hits.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'smarts', value: -5 },
              { type: 'money', value: -500 },
              { type: 'reputation', value: -15 },
            ],
          },
        ],
      },
      {
        id: 'stay_push',
        text: 'Push through',
        outcomes: [
          {
            weight: 6,
            description: 'Next semester you find a class that excites you. The light is dim but real.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'health', value: -5 },
            ],
          },
          {
            weight: 4,
            description: 'Physically present, mentally gone. GPA in hospice. But technically making progress.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'stat', target: 'smarts', value: 2 },
              { type: 'stat', target: 'health', value: -10 },
            ],
          },
        ],
      },
      {
        id: 'take_break',
        text: 'Take a semester off',
        outcomes: [
          {
            weight: 6,
            description: 'You work, get perspective, come back refreshed. Exactly what you needed.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'stat', target: 'health', value: 10 },
              { type: 'money', value: 2000 },
            ],
          },
          {
            weight: 4,
            description: 'One semester off becomes two years. Going back gets harder every month.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'smarts', value: -8 },
              { type: 'money', value: 1000 },
            ],
          },
        ],
      },
    ],
    probability: 0.15,
    category: 'education',
    minAge: 19,
    maxAge: 22,
    oneTime: true,
    priority: 2,
  },

  {
    id: 'college_student_debt',
    title: 'Student Loan Statement',
    description: 'You open your loan statement. The number has more digits than your phone number.',
    conditions: [
      { type: 'minAge', value: 19 },
      { type: 'maxAge', value: 22 },
      { type: 'isEnrolled', value: true },
      { type: 'hasEducation', value: 'highSchool' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'face_it',
        text: 'Make a budget',
        outcomes: [
          {
            weight: 6,
            description: 'You create a spreadsheet. Terrifying but organized.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'money', value: -1000 },
              { type: 'add_trait', value: 'financially-aware' },
            ],
          },
          {
            weight: 4,
            description: 'You budget aggressively and get a campus job. No free time, but progress.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'health', value: -5 },
              { type: 'money', value: 500 },
            ],
          },
        ],
      },
      {
        id: 'ignore',
        text: 'Put it in a drawer',
        outcomes: [
          {
            weight: 5,
            description: 'Bliss for eight months. Then the calls start. Credit score tanks.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'money', value: -2000 },
              { type: 'reputation', value: -10 },
            ],
          },
          {
            weight: 5,
            description: 'You forget about it. The debt does not forget about you.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'money', value: -1500 },
            ],
          },
        ],
      },
      {
        id: 'scholarship_hunt',
        text: 'Apply for scholarships',
        outcomes: [
          {
            weight: 4,
            description: 'You win $3,000 from a foundation for "left-handed students interested in maritime history."',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'money', value: 3000 },
            ],
          },
          {
            weight: 6,
            description: 'Dozens of applications. Zero wins. At least you got good at essay writing.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'smarts', value: 5 },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'education',
    minAge: 19,
    maxAge: 22,
    oneTime: true,
  },

  {
    id: 'college_protest',
    title: 'Campus Protest',
    description: 'Students are protesting on the quad.',
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'maxAge', value: 22 },
      { type: 'isEnrolled', value: true },
      { type: 'hasEducation', value: 'highSchool' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'join',
        text: 'Join the protest',
        outcomes: [
          {
            weight: 5,
            description: 'Six hours marching. The protest leads to a policy change. You helped.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'stat', target: 'health', value: -5 },
              { type: 'reputation', value: 15 },
              { type: 'add_trait', value: 'activist' },
            ],
          },
          {
            weight: 3,
            description: 'It gets intense. You end up in the background of a news report grandma sees.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'health', value: -10 },
              { type: 'reputation', value: -10 },
            ],
          },
          {
            weight: 2,
            description: 'Your speech goes viral for 72 hours before the internet moves on.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'reputation', value: 20 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
        ],
      },
      {
        id: 'observe',
        text: 'Watch from a distance',
        outcomes: [
          {
            weight: 7,
            description: 'Library window, nuanced opinions, committing to nothing. Peak college.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: 5 },
            ],
          },
          {
            weight: 3,
            description: 'You feel guilty and post a supportive message online. Three likes.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
        ],
      },
      {
        id: 'pet_dog',
        text: 'Skip the protest, pet the dog',
        outcomes: [
          {
            weight: 10,
            description: '45 minutes of unconditional love. Most productive thing all semester.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'stat', target: 'health', value: 5 },
            ],
          },
        ],
      },
    ],
    probability: 0.15,
    category: 'education',
    minAge: 18,
    maxAge: 22,
    cooldown: 8,
  },

  {
    id: 'college_internship',
    title: 'Internship Opportunity',
    description: 'A company offers "competitive compensation" — either minimum wage or "exposure."',
    conditions: [
      { type: 'minAge', value: 19 },
      { type: 'maxAge', value: 22 },
      { type: 'isEnrolled', value: true },
      { type: 'hasEducation', value: 'highSchool' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'take_internship',
        text: 'Take the internship',
        outcomes: [
          {
            weight: 5,
            description: 'Coffee-fetching leads to a real project. Supervisor writes a glowing reference.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'money', value: 1500 },
              { type: 'reputation', value: 15 },
            ],
          },
          {
            weight: 3,
            description: 'Unpaid. You learn to operate a fax machine and attend meetings that could be emails.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'money', value: -500 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 2,
            description: 'It leads to a full-time job offer before graduation. The system worked.',
            effects: [
              { type: 'stat', target: 'smarts', value: 10 },
              { type: 'stat', target: 'happiness', value: 25 },
              { type: 'money', value: 3000 },
              { type: 'reputation', value: 20 },
            ],
          },
        ],
      },
      {
        id: 'skip_intern',
        text: 'Skip it',
        outcomes: [
          {
            weight: 5,
            description: 'You work a paying job instead. More money now, less resume later.',
            effects: [
              { type: 'money', value: 3000 },
              { type: 'stat', target: 'happiness', value: 5 },
            ],
          },
          {
            weight: 5,
            description: 'Summer of gaming and sleeping till 2 PM. Glorious. Resume-destroying.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'health', value: -5 },
              { type: 'reputation', value: -5 },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'education',
    minAge: 19,
    maxAge: 22,
    oneTime: true,
    priority: 2,
  },

  {
    id: 'college_thesis_crisis',
    title: 'Thesis Crisis',
    description: 'Thesis due in two weeks. You have a title page and 47 browser tabs.',
    conditions: [
      { type: 'minAge', value: 20 },
      { type: 'maxAge', value: 22 },
      { type: 'isEnrolled', value: true },
      { type: 'hasEducation', value: 'highSchool' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'grind',
        text: 'Lock in and write it',
        outcomes: [
          {
            weight: 5,
            description: 'Panic and caffeine fuel a writing machine. Advisor says it\'s "surprisingly competent."',
            effects: [
              { type: 'stat', target: 'smarts', value: 10 },
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'health', value: -15 },
            ],
          },
          {
            weight: 5,
            description: 'Page 12 is just the word "however" repeated. Advisor requests "significant revisions."',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'health', value: -15 },
            ],
          },
        ],
      },
      {
        id: 'beg_extension',
        text: 'Beg for an extension',
        outcomes: [
          {
            weight: 6,
            description: 'Two extra weeks granted with exhausted compassion.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'reputation', value: -5 },
            ],
          },
          {
            weight: 4,
            description: '"No extensions, it was in the syllabus." The syllabus you lost in week one.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'health', value: -5 },
            ],
          },
        ],
      },
      {
        id: 'pivot_topic',
        text: 'Scrap everything and start over',
        outcomes: [
          {
            weight: 3,
            description: 'New topic you actually care about. Words flow. Done in a week.',
            effects: [
              { type: 'stat', target: 'smarts', value: 12 },
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'stat', target: 'health', value: -10 },
            ],
          },
          {
            weight: 7,
            description: 'No sources exist for the new topic. Two unfinished theses. One week left.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'stat', target: 'happiness', value: -25 },
              { type: 'stat', target: 'health', value: -10 },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'education',
    minAge: 20,
    maxAge: 22,
    oneTime: true,
  },

  {
    id: 'college_graduation',
    title: 'College Graduation',
    description: 'Cap and gown. A billionaire tells you to "follow your dreams."',
    conditions: [
      { type: 'minAge', value: 21 },
      { type: 'maxAge', value: 23 },
      { type: 'isEnrolled', value: true },
      { type: 'hasEducation', value: 'highSchool' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'celebrate_big',
        text: 'Celebrate like you earned it',
        outcomes: [
          {
            weight: 7,
            description: 'Cap throw, family photos, ugly cry in the parking lot. A degree! Well done.',
            effects: [
              { type: 'stat', target: 'happiness', value: 30 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'reputation', value: 15 },
              { type: 'education', value: 'college' },
              { type: 'money', value: -500 },
            ],
          },
          {
            weight: 3,
            description: 'Great until your aunt asks "so what will you DO with that degree?"',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'education', value: 'college' },
              { type: 'money', value: -500 },
            ],
          },
        ],
      },
      {
        id: 'quiet_pride',
        text: 'Take it in quietly',
        outcomes: [
          {
            weight: 8,
            description: 'Every all-nighter, every ramen dinner, every almost-quit moment. You didn\'t quit.',
            effects: [
              { type: 'stat', target: 'happiness', value: 25 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'reputation', value: 10 },
              { type: 'education', value: 'college' },
            ],
          },
          {
            weight: 2,
            description: 'Calm until they call your name. Then tears and a trip on nothing.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'education', value: 'college' },
            ],
          },
        ],
      },
    ],
    probability: 0.3,
    category: 'education',
    minAge: 21,
    maxAge: 23,
    oneTime: true,
    priority: 5,
  },

  {
    id: 'college_change_major',
    title: 'Major Change Crisis',
    description: 'Three semesters in and every class feels wrong.',
    conditions: [
      { type: 'minAge', value: 19 },
      { type: 'maxAge', value: 22 },
      { type: 'isEnrolled', value: true },
      { type: 'hasEducation', value: 'highSchool' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'switch_major',
        text: 'Switch majors',
        outcomes: [
          {
            weight: 6,
            description: 'New major changes everything. Classes are interesting. Will to live returns.',
            effects: [
              { type: 'stat', target: 'happiness', value: 25 },
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'money', value: -5000 },
            ],
          },
          {
            weight: 4,
            description: 'New major is somehow worse. A year wasted on different grass that also costs tuition.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'money', value: -5000 },
            ],
          },
        ],
      },
      {
        id: 'double_down',
        text: 'Stay the course',
        outcomes: [
          {
            weight: 5,
            description: 'Not what you love, but the degree opens doors. Sometimes "good enough" is enough.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'health', value: -5 },
            ],
          },
          {
            weight: 5,
            description: 'Permanent twitch during lectures. Mediocre grades. Technically making progress.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'stat', target: 'health', value: -10 },
            ],
          },
        ],
      },
      {
        id: 'add_minor',
        text: 'Add a minor you love',
        outcomes: [
          {
            weight: 7,
            description: 'The minor reminds you learning can be fun. Major still hurts.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'money', value: -1000 },
            ],
          },
          {
            weight: 3,
            description: 'More classes, less sleep. But your resume now has TWO things.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'health', value: -10 },
              { type: 'money', value: -1000 },
            ],
          },
        ],
      },
    ],
    probability: 0.18,
    category: 'education',
    minAge: 19,
    maxAge: 22,
    oneTime: true,
  },

  // ============================================================
  // TRADE SCHOOL / NO COLLEGE (ages 18-22)
  // ============================================================

  {
    id: 'trade_learn_trade',
    title: 'Trade School',
    description: 'A local trade school offers practical skills and actual jobs.',
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'maxAge', value: 22 },
      { type: 'notEnrolled', value: true },
      { type: 'hasEducation', value: 'highSchool' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'enroll_electrician',
        text: 'Train as an electrician',
        outcomes: [
          {
            weight: 7,
            description: 'Talent for not electrocuting yourself. Good pay, steady work.',
            effects: [
              { type: 'stat', target: 'smarts', value: 10 },
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'money', value: -2000 },
              { type: 'reputation', value: 10 },
              { type: 'add_trait', value: 'handy' },
            ],
          },
          {
            weight: 3,
            description: 'You shock yourself on day two. Hair stands up for a week. You push through.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'health', value: -5 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'money', value: -2000 },
            ],
          },
        ],
      },
      {
        id: 'enroll_plumber',
        text: 'Train as a plumber',
        outcomes: [
          {
            weight: 7,
            description: 'You make more than most friends with bachelor\'s degrees.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'money', value: -2000 },
              { type: 'reputation', value: 10 },
              { type: 'add_trait', value: 'handy' },
            ],
          },
          {
            weight: 3,
            description: 'Harder than expected. After six months you can fix a toilet with your eyes closed.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'money', value: -2000 },
              { type: 'stat', target: 'health', value: -3 },
            ],
          },
        ],
      },
      {
        id: 'nah',
        text: 'Not ready to commit',
        outcomes: [
          {
            weight: 5,
            description: 'Series of temporary jobs. Each teaches something. None feel permanent.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'money', value: 500 },
            ],
          },
          {
            weight: 5,
            description: 'You float and discover an unexpected passion.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: -5 },
            ],
          },
        ],
      },
    ],
    probability: 0.25,
    category: 'education',
    minAge: 18,
    maxAge: 22,
    oneTime: true,
    priority: 3,
  },

  {
    id: 'trade_apprenticeship',
    title: 'Apprenticeship',
    description: 'A local tradesperson needs an apprentice. "Can you show up on time?" they ask.',
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'maxAge', value: 22 },
      { type: 'notEnrolled', value: true },
      { type: 'hasEducation', value: 'highSchool' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'take_apprenticeship',
        text: 'Take the apprenticeship',
        outcomes: [
          {
            weight: 6,
            description: 'Gruff mentor teaches more in three months than four years of school could.',
            effects: [
              { type: 'stat', target: 'smarts', value: 10 },
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'health', value: -5 },
              { type: 'money', value: 2000 },
              { type: 'reputation', value: 10 },
              { type: 'add_trait', value: 'hardworking' },
            ],
          },
          {
            weight: 4,
            description: 'Backbreaking work. But the first thing you build that doesn\'t collapse makes you tear up.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'health', value: -10 },
              { type: 'money', value: 1500 },
            ],
          },
        ],
      },
      {
        id: 'decline_apprenticeship',
        text: 'Not interested',
        outcomes: [
          {
            weight: 5,
            description: 'They shrug: "you\'ll be back." Plumbers make more than most managers.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
            ],
          },
          {
            weight: 5,
            description: 'You keep your options open. Your options are currently: nothing.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'reputation', value: -5 },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'education',
    minAge: 18,
    maxAge: 22,
    oneTime: true,
  },

  {
    id: 'trade_certificate',
    title: 'Certificate Program',
    description: 'An online program promises certification in 12 weeks.',
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'maxAge', value: 24 },
      { type: 'notEnrolled', value: true },
      { type: 'hasEducation', value: 'highSchool' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'take_cert',
        text: 'Enroll in the program',
        outcomes: [
          {
            weight: 6,
            description: 'You learn useful skills. The certificate opens doors.',
            effects: [
              { type: 'stat', target: 'smarts', value: 10 },
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'money', value: -1500 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 4,
            description: 'Harder than advertised. Week 8 is brutal. But you finish.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'money', value: -1500 },
              { type: 'stat', target: 'health', value: -5 },
            ],
          },
        ],
      },
      {
        id: 'self_teach',
        text: 'Teach yourself for free',
        outcomes: [
          {
            weight: 4,
            description: 'Three months of tutorials. You learn 80% and pay nothing.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'add_trait', value: 'self-taught' },
            ],
          },
          {
            weight: 6,
            description: 'Three tutorials in, you\'re watching conspiracy videos. Three months wasted.',
            effects: [
              { type: 'stat', target: 'smarts', value: -3 },
              { type: 'stat', target: 'happiness', value: -5 },
            ],
          },
        ],
      },
      {
        id: 'scam_check',
        text: 'Research if it\'s a scam',
        outcomes: [
          {
            weight: 5,
            description: 'It\'s legit, but your research took so long enrollment closed.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: -5 },
            ],
          },
          {
            weight: 5,
            description: 'Due diligence pays off. You enroll with confidence and crush it.',
            effects: [
              { type: 'stat', target: 'smarts', value: 10 },
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'money', value: -1500 },
              { type: 'reputation', value: 10 },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'education',
    minAge: 18,
    maxAge: 24,
    oneTime: true,
  },

];
