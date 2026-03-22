// ============================================================
// ThisLife — Career Events Part 2
// Crime, Sports, Business, Politics, Social Media
// ============================================================

import { GameEvent } from '../../types/events';

export const CAREER_EVENTS_PART2: GameEvent[] = [

  // ============================================================
  // CRIMINAL CAREER (requiredCareerId: 'criminalCareer')
  // ============================================================

  {
    id: 'career_criminal_undercover_cop',
    title: 'New Guy Seems... Off',
    description: 'The new crew member keeps asking questions and touching his chest suspiciously.',
    category: 'career',
    probability: 0.20,
    requiredCareerId: 'criminalCareer',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'criminalCareer' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'criminal_undercover_confront',
        text: 'Confront him directly',
        hint: 'Bold move, could backfire',
        outcomes: [
          {
            weight: 40,
            description: 'He stammers and sprints out. His wire falls from his shirt. The crew gives you a standing ovation.',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'He\'s not a cop, just genuinely awkward. Now the crew thinks you\'re paranoid.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'He IS a cop and your confrontation triggers a premature raid. You escape through a sewer grate.',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -2000, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'criminal_undercover_feed_disinfo',
        text: 'Feed him wrong information',
        hint: 'If he\'s a cop, waste their resources',
        outcomes: [
          {
            weight: 55,
            description: 'You tell him the big heist is at a Chuck E. Cheese. If he\'s a cop, a very confused SWAT team is incoming.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'He writes everything in a little notebook. Even your crew is starting to notice.',
            effects: [
              { type: 'career_satisfaction', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'criminal_undercover_ignore',
        text: 'Keep your head down',
        hint: 'Safe, but the crew might suffer',
        outcomes: [
          {
            weight: 60,
            description: 'He disappears after two weeks. You\'ll never know if he was a cop or just weird.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'A month later, half the crew gets arrested. You dodged it because you never said anything incriminating.',
            effects: [
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_criminal_rival_territory',
    title: 'Wrong Neighborhood',
    description: 'You wandered into rival territory looking for a taco truck.',
    category: 'career',
    probability: 0.18,
    requiredCareerId: 'criminalCareer',
    cooldown: 6,
    conditions: [
      { type: 'hasCareerId', value: 'criminalCareer' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'criminal_rival_stand_ground',
        text: 'Stand your ground',
        hint: 'Respect is everything on the streets',
        outcomes: [
          {
            weight: 35,
            description: 'Your fearless taco commitment earns their respect. They recommend the al pastor.',
            effects: [
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'They politely but firmly tell you to leave. At least they let you take the tacos to go.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'money', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'You get jumped. They take your wallet AND your tacos.',
            effects: [
              { type: 'stat', target: 'health', value: -15, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'criminal_rival_run',
        text: 'Tactical retreat',
        hint: 'Live to eat tacos another day',
        outcomes: [
          {
            weight: 70,
            description: 'You speed-walk away casually. Your dignity is the only casualty.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Someone from your crew sees you sprinting away. The nickname "Taco Runner" follows you for months.',
            effects: [
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_criminal_snitch',
    title: 'Loose Lips',
    description: 'Someone in the crew has been talking to police. You\'re a suspect.',
    category: 'career',
    probability: 0.17,
    requiredCareerId: 'criminalCareer',
    cooldown: 10,
    conditions: [
      { type: 'hasCareerId', value: 'criminalCareer' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'criminal_snitch_investigate',
        text: 'Launch your own investigation',
        hint: 'Find the rat before they find you',
        outcomes: [
          {
            weight: 45,
            description: 'You find the snitch by checking his phone. The crew promotes you to "head of internal affairs."',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Your investigation is inconclusive. You just made everyone paranoid. Three crew members quit.',
            effects: [
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'While investigating, you accidentally discover the boss is skimming money. Now you know too much.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'career_satisfaction', value: -12, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'criminal_snitch_deflect',
        text: 'Point fingers at someone else',
        hint: 'Classic misdirection',
        outcomes: [
          {
            weight: 50,
            description: 'You blame the quiet guy nobody likes. He gets banned from the group chat.',
            effects: [
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'The person you accused was literally in jail during the alleged snitching. Now everyone\'s looking at you.',
            effects: [
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_criminal_big_score',
    title: 'The Big One',
    description: 'A contact has intel on a score that could set you up for life.',
    category: 'career',
    probability: 0.15,
    requiredCareerId: 'criminalCareer',
    oneTime: true,
    conditions: [
      { type: 'hasCareerId', value: 'criminalCareer' },
      { type: 'notInPrison', value: true },
      { type: 'minAge', value: 20 },
    ],
    choices: [
      {
        id: 'criminal_big_score_go',
        text: 'All in',
        hint: 'Life-changing money or prison time',
        outcomes: [
          {
            weight: 30,
            description: 'It goes flawlessly. You walk away with more money than you\'ve ever seen.',
            effects: [
              { type: 'money', value: 50000, operation: 'add' },
              { type: 'career_performance', value: 25, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
              { type: 'reputation', value: 20, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'The job goes mostly right but the getaway car won\'t start. You escape on a stolen bicycle.',
            effects: [
              { type: 'money', value: 20000, operation: 'add' },
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'The business was a front for an even scarier criminal organization. You tried to rob the mob.',
            effects: [
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'money', value: -5000, operation: 'add' },
              { type: 'career_performance', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'criminal_big_score_pass',
        text: 'Too good to be true. Pass.',
        hint: 'Wisdom or cowardice?',
        outcomes: [
          {
            weight: 50,
            description: 'The crew does it without you. It was a setup. Everyone gets arrested. You watch from your couch.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'career_performance', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'The crew does it without you. It goes perfectly. They bought matching Rolexes. You weren\'t included.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_criminal_laundering',
    title: 'Dirty Money, Clean Hands',
    description: '"The Accountant" has a money laundering scheme involving laundromats.',
    category: 'career',
    probability: 0.18,
    requiredCareerId: 'criminalCareer',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'criminalCareer' },
      { type: 'notInPrison', value: true },
      { type: 'minAge', value: 21 },
    ],
    choices: [
      {
        id: 'criminal_laundering_invest',
        text: 'Invest in Gerald\'s empire',
        hint: 'Steady income or federal charges',
        outcomes: [
          {
            weight: 40,
            description: 'Gerald is a financial genius. The laundromats thrive, the money is clean, and you\'re making passive income.',
            effects: [
              { type: 'money', value: 8000, operation: 'add' },
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'The IRS starts sniffing around. Gerald flees to Belize with your investment. He sends a postcard: "Sorry, lol."',
            effects: [
              { type: 'money', value: -5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'career_performance', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'The laundromats become legitimately successful. You\'re now a semi-legal small business owner.',
            effects: [
              { type: 'money', value: 12000, operation: 'add' },
              { type: 'career_satisfaction', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'criminal_laundering_decline',
        text: 'Pass on Gerald\'s plan',
        outcomes: [
          {
            weight: 100,
            description: 'Gerald is heartbroken. He made a whole PowerPoint. Slide 7 had clip art.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_criminal_prison_contact',
    title: 'Collect Call from Cell Block D',
    description: 'An old associate in prison needs a "small favor." No questions.',
    category: 'career',
    probability: 0.17,
    requiredCareerId: 'criminalCareer',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'criminalCareer' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'criminal_prison_favor_accept',
        text: 'Do the favor',
        hint: 'He\'ll owe you when he gets out',
        outcomes: [
          {
            weight: 40,
            description: 'The locker contained his grandmother\'s antiques. He just wanted them in climate-controlled storage. His grandma makes you cookies.',
            effects: [
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'The locker definitely did NOT contain antiques. But your associate now owes you a life debt.',
            effects: [
              { type: 'money', value: 3000, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'career_performance', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'Cops were watching the locker. You escape through a Wendy\'s drive-through at 12 mph in a Civic.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'career_performance', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'criminal_prison_favor_decline',
        text: 'Decline the favor',
        hint: 'Safe but burns a bridge',
        outcomes: [
          {
            weight: 60,
            description: 'He takes it surprisingly well. The emotional maturity is honestly inspiring.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'He does NOT take it well. From prison, he somehow ruins your Yelp rating on a business you don\'t own.',
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
    id: 'career_criminal_initiation',
    title: 'The Initiation',
    description: 'The crew wants a loyalty ritual involving danger, tattoos, or karaoke.',
    category: 'career',
    probability: 0.20,
    requiredCareerId: 'criminalCareer',
    oneTime: true,
    conditions: [
      { type: 'hasCareerId', value: 'criminalCareer' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'criminal_initiation_accept',
        text: 'Whatever it takes',
        hint: 'Full commitment, full consequences',
        outcomes: [
          {
            weight: 40,
            description: 'It was karaoke. You butchered "Bohemian Rhapsody" in front of hardened criminals. They loved it. You\'re in.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'You had to rob a gas station with a water gun. It worked. You\'re in, with $47 and a laminated certificate.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'money', value: 47, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'It was the tattoo. On your neck. Of a dolphin with a knife. Every future job interview requires a turtleneck.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'add_trait', value: 'tattooed' },
            ],
          },
        ],
      },
      {
        id: 'criminal_initiation_refuse',
        text: 'Refuse the initiation',
        hint: 'Might cost you your position',
        outcomes: [
          {
            weight: 50,
            description: 'You\'re out. They take your crew jacket. It was a nice jacket too — leather, with your name embroidered.',
            effects: [
              { type: 'career_performance', value: -20, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'The boss admires your spine. You skip initiation and get in on reputation alone. Everyone else is furious.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'reputation', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_criminal_turf_war',
    title: 'Turf War: Season Finale',
    description: 'Tensions with a rival crew have hit a breaking point.',
    category: 'career',
    probability: 0.16,
    requiredCareerId: 'criminalCareer',
    cooldown: 12,
    conditions: [
      { type: 'hasCareerId', value: 'criminalCareer' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'criminal_turf_war_fight',
        text: 'Ride or die',
        hint: 'Glory or the hospital',
        outcomes: [
          {
            weight: 35,
            description: 'Your crew wins. You landed a legendary haymaker they call "The Fist Heard Round the Block."',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 18, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'It\'s a draw. Both sides trash-talk for two hours until cops arrive and everyone scatters.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'You get rocked. Hospital visit, stitches, the whole package.',
            effects: [
              { type: 'stat', target: 'health', value: -25, operation: 'add' },
              { type: 'money', value: -3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'criminal_turf_war_negotiate',
        text: 'Propose a sit-down',
        hint: 'Diplomacy in the underworld',
        outcomes: [
          {
            weight: 45,
            description: 'Both bosses agree to split territory. The treaty is written on a Denny\'s napkin.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description: 'The sit-down devolves into a food fight at Denny\'s. Both crews are now banned.',
            effects: [
              { type: 'reputation', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'career_performance', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // SPORTS CAREER (requiredCareerId: 'sports')
  // ============================================================

  {
    id: 'career_sports_injury_scare',
    title: 'Pop Goes the Knee',
    description: 'Your knee makes a horrifying sound during practice.',
    category: 'career',
    probability: 0.22,
    requiredCareerId: 'sports',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'sports' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'sports_injury_push_through',
        text: 'Walk it off',
        hint: 'Tough but potentially catastrophic',
        outcomes: [
          {
            weight: 30,
            description: 'Just a loud crack with zero damage. Your knee is fine. You\'re basically Wolverine.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'You play through it for two weeks before collapsing. MRI reveals your knee was "held together by vibes." Surgery time.',
            effects: [
              { type: 'stat', target: 'health', value: -25, operation: 'add' },
              { type: 'career_performance', value: -25, operation: 'add' },
              { type: 'money', value: -8000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'You limp through practice, fooling nobody. Coach benches you "for your own good."',
            effects: [
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'sports_injury_get_checked',
        text: 'Get it checked immediately',
        hint: 'Smart but might mean time off',
        outcomes: [
          {
            weight: 55,
            description: 'Minor strain. Two weeks rest, good as new.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'health', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'Torn ligament. But catching it early means 3 months recovery instead of 12.',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'money', value: -5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_sports_doping',
    title: 'The Special Supplement',
    description: 'A shady guy offers you a neon-green "vitamin supplement."',
    category: 'career',
    probability: 0.18,
    requiredCareerId: 'sports',
    cooldown: 10,
    conditions: [
      { type: 'hasCareerId', value: 'sports' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'sports_doping_take',
        text: 'Bottoms up',
        hint: 'Performance boost now, consequences later',
        outcomes: [
          {
            weight: 35,
            description: 'Whatever that was, it works. You dominate for three months and somehow pass the drug test.',
            effects: [
              { type: 'career_performance', value: 25, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'You fail a drug test so badly the lab calls to confirm you\'re not a horse. Two-month suspension.',
            effects: [
              { type: 'career_performance', value: -25, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -10000, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Nothing happens. The "supplement" was Mountain Dew mixed with food coloring. You paid $500 for it.',
            effects: [
              { type: 'money', value: -500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'sports_doping_refuse',
        text: 'Hard pass',
        hint: 'Integrity intact',
        outcomes: [
          {
            weight: 60,
            description: 'Two weeks later, the guy who took it grows a third nipple and gets banned from the sport.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'The guy who took it breaks every record and never gets caught. Integrity doesn\'t come with endorsement deals.',
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
    id: 'career_sports_championship',
    title: 'The Big Game',
    description: 'Championship day. Stadium packed, cameras rolling.',
    category: 'career',
    probability: 0.15,
    requiredCareerId: 'sports',
    cooldown: 12,
    conditions: [
      { type: 'hasCareerId', value: 'sports' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'sports_championship_give_all',
        text: 'Leave everything on the field',
        hint: 'Peak performance or embarrassment',
        outcomes: [
          {
            weight: 35,
            description: 'You play the game of your life. The winning play. Your mom is ugly-crying in the stands.',
            effects: [
              { type: 'career_performance', value: 30, operation: 'add' },
              { type: 'reputation', value: 25, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 30, operation: 'add' },
              { type: 'money', value: 15000, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'Solid performance, team wins, but you weren\'t the hero. Camera caught you picking your nose during celebration.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'money', value: 5000, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'You choke. Missed the easy shot, dropped the ball, tripped over your own feet. The ride home is very quiet.',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'sports_championship_play_safe',
        text: 'Play it safe',
        hint: 'Won\'t be hero or goat',
        outcomes: [
          {
            weight: 60,
            description: 'Team wins. You contributed adequately. MVP goes to someone else. Your mom still says you were the real MVP.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'money', value: 3000, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Team loses by one point. A point you could have scored. Coach keeps making eye contact during the post-game speech.',
            effects: [
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'career_satisfaction', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_sports_crazy_fan',
    title: 'Superfan Encounter',
    description: 'A superfan has been camping outside your facility for three days.',
    category: 'career',
    probability: 0.20,
    requiredCareerId: 'sports',
    cooldown: 6,
    conditions: [
      { type: 'hasCareerId', value: 'sports' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'sports_fan_engage',
        text: 'Sign their stuff, take a selfie',
        hint: 'Good PR, potentially encouraging',
        outcomes: [
          {
            weight: 45,
            description: 'They become your biggest online defender. Every hater gets a 2,000-word essay from this person.',
            effects: [
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'The selfie goes viral — but their shrine is visible in the background. Your agent is having a meltdown.',
            effects: [
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'Your kindness emboldens them. They now show up at your house, your dentist, your mom\'s book club.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'sports_fan_security',
        text: 'Have security escort them away',
        hint: 'Might look bad, but safety first',
        outcomes: [
          {
            weight: 50,
            description: 'They understand and even apologize for the tape shrine.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'They film it and post "MY HERO BETRAYED ME." It goes viral in the "cancelled" way.',
            effects: [
              { type: 'reputation', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_sports_contract',
    title: 'Show Me the Money',
    description: 'Your contract is up for renegotiation.',
    category: 'career',
    probability: 0.18,
    requiredCareerId: 'sports',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'sports' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'sports_contract_demand',
        text: 'Demand max money',
        hint: 'Big payday or you walk',
        outcomes: [
          {
            weight: 35,
            description: 'The team caves. Massive contract. You buy your mom a house.',
            effects: [
              { type: 'money', value: 30000, operation: 'add' },
              { type: 'career_satisfaction', value: 20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'Negotiations stall. Three weeks pass. You settle for slightly above average.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'They let you walk. Another team picks you up for less money in a city you\'ve never heard of.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'career_satisfaction', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'sports_contract_team_friendly',
        text: 'Take the team-friendly deal',
        hint: 'Less money, more goodwill',
        outcomes: [
          {
            weight: 55,
            description: 'Fans love you for it. Jersey sales spike. The owners send you a fruit basket.',
            effects: [
              { type: 'money', value: 8000, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'Six months later, a less talented teammate signs for triple your salary. Regret hits hard.',
            effects: [
              { type: 'money', value: 3000, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_sports_endorsement',
    title: 'The Endorsement Deal',
    description: 'A major brand wants you to endorse adult diapers for athletes.',
    category: 'career',
    probability: 0.20,
    requiredCareerId: 'sports',
    cooldown: 6,
    conditions: [
      { type: 'hasCareerId', value: 'sports' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'sports_endorsement_accept',
        text: 'Take the deal',
        hint: 'Rich but roasted',
        outcomes: [
          {
            weight: 45,
            description: 'The commercial goes viral. You\'re a meme but a RICH meme. Every interview starts with a diaper joke.',
            effects: [
              { type: 'money', value: 20000, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'The brand takes off. You\'re now seen as "authentic" and "brave." A think piece calls you "the athlete who dared."',
            effects: [
              { type: 'money', value: 25000, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'Opposing fans throw diapers onto the field when you play. The chant "DIAPER BOY" follows you forever.',
            effects: [
              { type: 'money', value: 15000, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'sports_endorsement_decline',
        text: 'Decline with dignity',
        hint: 'Dignity preserved, wallet thinner',
        outcomes: [
          {
            weight: 50,
            description: 'A rival athlete takes the deal and becomes a millionaire meme. Your agent keeps sighing.',
            effects: [
              { type: 'career_satisfaction', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'A premium brand sees your integrity and offers you a real endorsement deal. Shoes, not diapers.',
            effects: [
              { type: 'money', value: 12000, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_sports_locker_room_fight',
    title: 'Locker Room Brawl',
    description: 'A teammate accuses you of stealing his lucky socks.',
    category: 'career',
    probability: 0.19,
    requiredCareerId: 'sports',
    cooldown: 6,
    conditions: [
      { type: 'hasCareerId', value: 'sports' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'sports_fight_throw_hands',
        text: 'Square up',
        hint: 'Satisfying but professionally risky',
        outcomes: [
          {
            weight: 30,
            description: 'You land one good punch before coaches intervene. Local news runs "SPORTS STAR IN SOCK-RELATED ALTERCATION."',
            effects: [
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'money', value: -5000, operation: 'add' },
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'He\'s much bigger than you remembered. You take a hit that rearranges your concept of pain.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'money', value: -3000, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'The fight bonds you. After throwing punches, you both laugh and become best friends.',
            effects: [
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'sports_fight_defuse',
        text: 'Show him the label — they\'re from Target',
        hint: 'De-escalation via receipt',
        outcomes: [
          {
            weight: 70,
            description: 'The Target label proves your innocence. He finds his socks in his own locker. You are vindicated.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'He doesn\'t care about the label. This man is unhinged about socks. He checks your feet before every game.',
            effects: [
              { type: 'career_satisfaction', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_sports_retirement',
    title: 'Father Time Is Undefeated',
    description: 'Your body takes three days to recover from practice now.',
    category: 'career',
    probability: 0.18,
    requiredCareerId: 'sports',
    minAge: 30,
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'sports' },
      { type: 'minAge', value: 30 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'sports_retirement_one_more',
        text: 'One more season',
        hint: 'Legacy season or embarrassing farewell',
        outcomes: [
          {
            weight: 35,
            description: 'You play one of your best seasons ever. The media calls it "The Renaissance." You retire on top.',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'money', value: 10000, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'You\'re mediocre. Fans politely clap when you sub in. The farewell tour is more of a farewell whisper.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'money', value: 5000, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'You get injured in the first game. During warmups. Stretching. Your body literally chose for you.',
            effects: [
              { type: 'stat', target: 'health', value: -15, operation: 'add' },
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'sports_retirement_graceful',
        text: 'Retire gracefully',
        hint: 'Control the narrative',
        outcomes: [
          {
            weight: 65,
            description: 'Beautiful press conference. They retire your number. You transition to commentating.',
            effects: [
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'career_satisfaction', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'Your retirement press conference gets bumped by a celebrity scandal. Four people attend.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // BUSINESS CAREER (requiredCareerId: 'business')
  // ============================================================

  {
    id: 'career_business_hostile_takeover',
    title: 'Sharks in the Boardroom',
    description: 'A rival company is attempting a hostile takeover.',
    category: 'career',
    probability: 0.18,
    requiredCareerId: 'business',
    cooldown: 10,
    conditions: [
      { type: 'hasCareerId', value: 'business' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'business_takeover_fight',
        text: 'Fight the takeover',
        hint: 'Expensive but you keep your throne',
        outcomes: [
          {
            weight: 40,
            description: 'You mount a brilliant defense. The shareholders rally behind you. You send back an edible arrangement shaped like a middle finger.',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'money', value: -10000, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'You win, technically, but the legal fees cost more than the company is worth.',
            effects: [
              { type: 'money', value: -25000, operation: 'add' },
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'The shareholders side with the rival. You\'re out. The new CEO sends you a fruit basket.',
            effects: [
              { type: 'career_performance', value: -25, operation: 'add' },
              { type: 'money', value: -15000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'business_takeover_negotiate',
        text: 'Negotiate a golden parachute',
        hint: 'Lose the company, keep the money',
        outcomes: [
          {
            weight: 60,
            description: 'You negotiate an exit package so generous it makes the rival CEO physically ill.',
            effects: [
              { type: 'money', value: 50000, operation: 'add' },
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'They lowball you. The "golden parachute" is more of a bronze hang glider.',
            effects: [
              { type: 'money', value: 10000, operation: 'add' },
              { type: 'career_satisfaction', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_business_insider_trading',
    title: 'A Little Bird Told Me',
    description: 'You overhear that the stock is about to triple.',
    category: 'career',
    probability: 0.17,
    requiredCareerId: 'business',
    cooldown: 12,
    conditions: [
      { type: 'hasCareerId', value: 'business' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'business_insider_trade',
        text: 'Buy the stock',
        hint: 'Massive profit or federal prison',
        outcomes: [
          {
            weight: 35,
            description: 'The stock triples. You\'re rich — and paranoid every time you see anyone in a suit.',
            effects: [
              { type: 'money', value: 40000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_performance', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'The merger falls through. The stock tanks. You made a felony-adjacent decision based on office gossip.',
            effects: [
              { type: 'money', value: -20000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'The SEC comes knocking. The elevator DID have a camera. You\'re now a case study in business ethics textbooks.',
            effects: [
              { type: 'money', value: -50000, operation: 'add' },
              { type: 'reputation', value: -30, operation: 'add' },
              { type: 'career_performance', value: -25, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'business_insider_ignore',
        text: 'Pretend you heard nothing',
        hint: 'Legal and boring',
        outcomes: [
          {
            weight: 60,
            description: 'The stock triples. Your coworker drives a new Porsche. You drive your Honda Civic and the moral high ground.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'The merger was illegal. Everyone involved gets arrested. You watch from the office window eating a sandwich.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'career_satisfaction', value: 8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_business_whistleblower',
    title: 'The Smoking Gun',
    description: 'You discover the company is dumping toxic waste into a river.',
    category: 'career',
    probability: 0.16,
    requiredCareerId: 'business',
    cooldown: 12,
    oneTime: true,
    conditions: [
      { type: 'hasCareerId', value: 'business' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'business_whistleblow',
        text: 'Blow the whistle',
        hint: 'Do the right thing, nuke your career',
        outcomes: [
          {
            weight: 40,
            description: 'You become a national hero. Book deal, documentary. Blacklisted from corporate America but your Netflix special pays more.',
            effects: [
              { type: 'reputation', value: 25, operation: 'add' },
              { type: 'money', value: 20000, operation: 'add' },
              { type: 'career_performance', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'add_trait', value: 'whistleblower' },
            ],
          },
          {
            weight: 35,
            description: 'The company gets fined. You get fired. Whistleblower protection works on paper but not in practice.',
            effects: [
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'career_performance', value: -25, operation: 'add' },
              { type: 'money', value: -15000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'The company\'s lawyers are better. The complaint goes nowhere. You\'re labeled "disgruntled."',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'business_whistleblow_ignore',
        text: 'Look the other way',
        hint: 'Keep your job, lose your soul',
        outcomes: [
          {
            weight: 50,
            description: 'You don\'t sleep well. Your therapist is making a fortune. But your 401k is doing great.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Someone else blows the whistle six months later. The company collapses. No job AND no hero credit.',
            effects: [
              { type: 'career_performance', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_business_merger_chaos',
    title: 'Merger Mania',
    description: 'Your company is merging with a rival. Chaos ensues.',
    category: 'career',
    probability: 0.20,
    requiredCareerId: 'business',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'business' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'business_merger_embrace',
        text: 'Become the bridge between companies',
        hint: 'Exhausting but indispensable',
        outcomes: [
          {
            weight: 45,
            description: 'You become the only person both sides trust. You resolve the Steve situation. Promotion earned.',
            effects: [
              { type: 'career_performance', value: 18, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'money', value: 8000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'You work 80-hour weeks mediating stapler-brand arguments. Your eye develops a twitch.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'career_satisfaction', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'They discover your position exists in both companies. You get "restructured."',
            effects: [
              { type: 'career_performance', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -5000, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'business_merger_hunker',
        text: 'Keep your head down',
        hint: 'Survivor strategy',
        outcomes: [
          {
            weight: 55,
            description: 'You survive every layoff by being aggressively average. Stealth employment at its finest.',
            effects: [
              { type: 'career_performance', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'They forget you exist. Your email gets deactivated. You sit in the lobby for three hours before anyone notices.',
            effects: [
              { type: 'career_satisfaction', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_business_client_from_hell',
    title: 'The Client Who Must Not Be Named',
    description: 'Your biggest client calls at 3 AM and changes requirements hourly.',
    category: 'career',
    probability: 0.22,
    requiredCareerId: 'business',
    cooldown: 6,
    conditions: [
      { type: 'hasCareerId', value: 'business' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'business_client_appease',
        text: 'The customer is always right',
        hint: 'Money stays, sanity goes',
        outcomes: [
          {
            weight: 40,
            description: 'You fulfill every insane demand. Excellent quarterly numbers. Your therapist suggests boundaries.',
            effects: [
              { type: 'money', value: 15000, operation: 'add' },
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'No matter what you do, they\'re never satisfied. You develop a stress response to email notifications.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'career_satisfaction', value: -12, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'business_client_fire',
        text: 'Fire the client',
        hint: 'Revenue hit, hair stops falling out',
        outcomes: [
          {
            weight: 45,
            description: 'Your team throws a party. Someone bakes a cake that says "NO MORE 3 AM CALLS." Productivity doubles.',
            effects: [
              { type: 'money', value: -10000, operation: 'add' },
              { type: 'career_satisfaction', value: 20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'stat', target: 'health', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description: 'The revenue hit is brutal. Layoffs happen. The CFO gives you a look that could curdle milk.',
            effects: [
              { type: 'money', value: -20000, operation: 'add' },
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_business_embezzlement',
    title: 'The Missing Millions',
    description: 'The company is $3M short and the CFO has a suspicious new boat.',
    category: 'career',
    probability: 0.16,
    requiredCareerId: 'business',
    cooldown: 12,
    conditions: [
      { type: 'hasCareerId', value: 'business' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'business_embezzle_investigate',
        text: 'Investigate the CFO',
        hint: 'Could expose corruption',
        outcomes: [
          {
            weight: 40,
            description: 'You prove the CFO embezzled $3.2M. He\'s arrested. The board promotes you.',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'money', value: 10000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'The CFO finds out. Your parking spot gets moved to a different zip code. Corporate retaliation begins.',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'Plot twist: accounting typo. The CFO paid for the boat with family money. You accused an innocent man.',
            effects: [
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'business_embezzle_ignore',
        text: 'Not your department',
        hint: 'Plausible deniability',
        outcomes: [
          {
            weight: 50,
            description: 'Auditors eventually catch the fraud. You\'re not implicated. Strategic ignorance pays off.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Investigators find you "must have known." Your name is in a report. Professionally tainted.',
            effects: [
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_business_shark_tank',
    title: 'Pitch Perfect (Or Not)',
    description: 'You\'re pitching to VCs and the audience looks bored.',
    category: 'career',
    probability: 0.19,
    requiredCareerId: 'business',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'business' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'business_pitch_passion',
        text: 'Sell the vision, not the socks',
        hint: 'If you believe, maybe they will too',
        outcomes: [
          {
            weight: 35,
            description: 'Your passion is infectious. The sleeping VC wakes up and writes a $2M check for AI socks.',
            effects: [
              { type: 'money', value: 30000, operation: 'add' },
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'They pass but compliment your energy. One gives you a business card — it has someone else\'s name on it.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'You trip on the way to the podium and your first slide says "SMART SICKS." They laugh you out.',
            effects: [
              { type: 'reputation', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'career_performance', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'business_pitch_data',
        text: 'Lead with data',
        hint: 'Less exciting but more credible',
        outcomes: [
          {
            weight: 50,
            description: 'Your 47-slide deck puts two VCs to sleep but the one who stayed awake controls $500M. She gives you seed funding.',
            effects: [
              { type: 'money', value: 15000, operation: 'add' },
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Death by PowerPoint. By slide 12, the room is comatose. Back to the drawing board.',
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
    id: 'career_business_golden_parachute',
    title: 'The Golden Parachute',
    description: 'The board offers you a buyout to "step aside gracefully."',
    category: 'career',
    probability: 0.17,
    requiredCareerId: 'business',
    cooldown: 12,
    conditions: [
      { type: 'hasCareerId', value: 'business' },
      { type: 'minAge', value: 30 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'business_parachute_take',
        text: 'Take the money and run',
        hint: 'Financial security, career reset',
        outcomes: [
          {
            weight: 55,
            description: 'You cash out, vacation, and start a consulting firm that charges your old company $500/hour.',
            effects: [
              { type: 'money', value: 40000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'The money runs out faster than expected. You\'re back on the job market, overqualified for everything.',
            effects: [
              { type: 'money', value: 15000, operation: 'add' },
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'business_parachute_refuse',
        text: 'Refuse. They\'ll have to drag you out.',
        hint: 'Bold, possibly foolish',
        outcomes: [
          {
            weight: 40,
            description: 'Your defiance inspires the team. The board backs down. The corner office remains yours.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'They make your life miserable. Your office is "temporarily" relocated to a supply closet.',
            effects: [
              { type: 'career_satisfaction', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'career_performance', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // POLITICS CAREER (requiredCareerId: 'politics')
  // ============================================================

  {
    id: 'career_politics_scandal',
    title: 'Scandal!',
    description: 'A tabloid is running a scandal story about you.',
    category: 'career',
    probability: 0.20,
    requiredCareerId: 'politics',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'politics' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'politics_scandal_deny',
        text: 'Deny everything',
        hint: 'Classic political move',
        outcomes: [
          {
            weight: 35,
            description: 'The news cycle moves on in 48 hours when another politician does something actually illegal.',
            effects: [
              { type: 'reputation', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'A video surfaces of you double-dipping. In HD. With audio. #DipGate trends for a week.',
            effects: [
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'career_performance', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Your denial is so confident that a conspiracy theory emerges the video was deepfaked. Your base rallies.',
            effects: [
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'politics_scandal_own_it',
        text: '"I double-dipped, and I\'d do it again"',
        hint: 'Radical honesty',
        outcomes: [
          {
            weight: 50,
            description: 'The public loves your honesty. Your approval rating goes UP. You become the "Dip Candidate."',
            effects: [
              { type: 'reputation', value: 12, operation: 'add' },
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Your opponents weaponize it. Attack ads feature slow-motion dipping footage. You lose the "hygiene vote."',
            effects: [
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_politics_campaign_contribution',
    title: 'The Check with Strings',
    description: 'A wealthy donor offers a massive contribution with weird strings.',
    category: 'career',
    probability: 0.19,
    requiredCareerId: 'politics',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'politics' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'politics_contribution_take',
        text: 'Take the money',
        hint: 'Funded campaign, questionable morals',
        outcomes: [
          {
            weight: 40,
            description: 'The money floods in. Nobody connects you to the pigeon crossbow thing because it sounds too absurd.',
            effects: [
              { type: 'money', value: 20000, operation: 'add' },
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'A reporter traces the money. Headline: "CANDIDATE FUNDED BY BIG CROSSBOW." Pigeon rights activists protest.',
            effects: [
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'money', value: 10000, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'You support the bill and somehow it passes. Crossbow pigeon hunting is now legal. Nobody expected this.',
            effects: [
              { type: 'money', value: 15000, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'politics_contribution_refuse',
        text: 'Decline the pigeon money',
        hint: 'Integrity at the cost of funding',
        outcomes: [
          {
            weight: 55,
            description: 'The donor gives money to your opponent instead. You sleep well at night.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'Your refusal goes viral. Small donors flood in. Turns out a lot of people like pigeons.',
            effects: [
              { type: 'money', value: 12000, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'career_performance', value: 8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_politics_debate_gaffe',
    title: 'The Gaffe Heard Round the World',
    description: 'During a live debate, you say something deeply regrettable.',
    category: 'career',
    probability: 0.18,
    requiredCareerId: 'politics',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'politics' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'politics_gaffe_recover',
        text: 'Power through. "What I MEANT was..."',
        hint: 'Might save it or dig deeper',
        outcomes: [
          {
            weight: 35,
            description: 'You pivot brilliantly. "What I meant is we should treat children with the same RESPECT." Standing ovation.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'The recovery makes it worse. You end up saying "kids these days are too tall." Most-clipped debate moment of the year.',
            effects: [
              { type: 'reputation', value: -18, operation: 'add' },
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'You freeze. Ten seconds of dead air. Your opponent also says something stupid. Mutually assured embarrassment.',
            effects: [
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'politics_gaffe_joke',
        text: 'Make a self-deprecating joke',
        hint: 'Humor might disarm the audience',
        outcomes: [
          {
            weight: 55,
            description: '"Well, at least I proved I don\'t use a teleprompter." The audience laughs. Charisma activated.',
            effects: [
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'career_performance', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'The joke doesn\'t land. Your opponent quotes "children are short adults" at you for the rest of the debate.',
            effects: [
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_politics_election_day',
    title: 'Election Day',
    description: 'Polls have you in a dead heat on election day.',
    category: 'career',
    probability: 0.15,
    requiredCareerId: 'politics',
    cooldown: 16,
    conditions: [
      { type: 'hasCareerId', value: 'politics' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'politics_election_campaign_hard',
        text: 'One final push',
        hint: 'Maximum effort',
        outcomes: [
          {
            weight: 35,
            description: 'You win by 200 votes out of half a million. Your victory speech is 90% crying.',
            effects: [
              { type: 'career_performance', value: 25, operation: 'add' },
              { type: 'reputation', value: 20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
              { type: 'money', value: 10000, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'You lose by 47 votes. Your concession speech is graceful but internally you\'re counting missed handshakes.',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'You win comfortably. Victory tastes like stale coffee and vindication.',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'politics_election_let_voters_decide',
        text: 'Take a nap. Let voters decide.',
        hint: 'Zen approach',
        outcomes: [
          {
            weight: 50,
            description: 'You wake up to 200 missed calls. You won. Napping on election day is "relatable content."',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'stat', target: 'health', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'You lose by a margin one more day of campaigning could have covered. Your manager won\'t forgive the nap.',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_politics_lobbyist',
    title: 'The Lobbyist\'s Lunch',
    description: 'A lobbyist takes you to a fancy restaurant with a pitch.',
    category: 'career',
    probability: 0.21,
    requiredCareerId: 'politics',
    cooldown: 6,
    conditions: [
      { type: 'hasCareerId', value: 'politics' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'politics_lobbyist_play_along',
        text: 'Nod along, eat the wagyu',
        hint: 'Free meal, political tightrope',
        outcomes: [
          {
            weight: 45,
            description: 'You enjoy a $400 meal and leave without promising anything. Politics is just acting with better catering.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'career_performance', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Photos leak. "POLITICIAN DINES WITH BIG CHEESE LOBBYIST." Nobody cares about nuance.',
            effects: [
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'The lobbyist recorded you saying "I love cheese" and uses it as evidence of support. It was about the appetizer.',
            effects: [
              { type: 'reputation', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'politics_lobbyist_refuse',
        text: 'Decline the lunch',
        hint: 'Principled stand, empty stomach',
        outcomes: [
          {
            weight: 55,
            description: 'Your opponent gets photographed at the same restaurant. You release a statement: "I had a sandwich." It trends.',
            effects: [
              { type: 'reputation', value: 12, operation: 'add' },
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'The lobbyist funds your opponent instead. Cheese money is powerful. You\'re outspent 3-to-1.',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_politics_leaked_emails',
    title: 'Reply All: A Horror Story',
    description: 'Your private emails just leaked to the press.',
    category: 'career',
    probability: 0.17,
    requiredCareerId: 'politics',
    cooldown: 10,
    conditions: [
      { type: 'hasCareerId', value: 'politics' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'politics_emails_damage_control',
        text: 'Full damage control',
        hint: 'Damage control works if you commit',
        outcomes: [
          {
            weight: 40,
            description: 'The public forgives the "sentient necktie" comment because everyone was thinking it.',
            effects: [
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'A reporter asks about the mysterious 2 AM shrimp emoji. You have no explanation. The memes are merciless.',
            effects: [
              { type: 'reputation', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'During the press conference, you accidentally reveal another email: "politics is just high school with worse food."',
            effects: [
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'politics_emails_lean_in',
        text: '"My emails are the most honest thing in politics"',
        hint: 'Authenticity play',
        outcomes: [
          {
            weight: 50,
            description: 'Your "say what I think" brand resonates. "Sentient necktie" merch outsells your opponent\'s campaign merch.',
            effects: [
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'money', value: 5000, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'The "not reading bills" part sticks. Your opponent runs ads with the quote on loop.',
            effects: [
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_politics_opposition_research',
    title: 'The Dirt File',
    description: 'Your team dug up devastating dirt on your opponent.',
    category: 'career',
    probability: 0.19,
    requiredCareerId: 'politics',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'politics' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'politics_oppo_use_it',
        text: 'Leak it to the press',
        hint: 'Effective but petty',
        outcomes: [
          {
            weight: 40,
            description: 'Late-night hosts have a field day. The balloon animal jokes write themselves. Your opponent is sunk.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'It backfires. The public feels bad for your opponent. Sympathy donations pour in.',
            effects: [
              { type: 'reputation', value: -12, operation: 'add' },
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'Your opponent retaliates with dirt on you. Political discourse is now just two adults embarrassing each other.',
            effects: [
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'politics_oppo_take_high_road',
        text: 'Take the high road',
        hint: 'Honorable but you\'re sitting on gold',
        outcomes: [
          {
            weight: 50,
            description: 'You campaign on issues. Voters respect it. The clown college file stays in your drawer. Just in case.',
            effects: [
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'career_satisfaction', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'You lose. Your campaign manager screams: "We had CLOWN COLLEGE and you wouldn\'t use it!"',
            effects: [
              { type: 'career_performance', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_politics_rally_gone_wrong',
    title: 'Rally Roulette',
    description: 'The sound system blasts "Baby Shark" during your speech.',
    category: 'career',
    probability: 0.20,
    requiredCareerId: 'politics',
    cooldown: 6,
    conditions: [
      { type: 'hasCareerId', value: 'politics' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'politics_rally_dance',
        text: 'Do the Baby Shark dance',
        hint: 'Viral moment incoming',
        outcomes: [
          {
            weight: 45,
            description: 'The video gets 30 million views. Your approval among parents with young children skyrockets 40%.',
            effects: [
              { type: 'reputation', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'career_performance', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Your dance moves are terrible. One supporter yells "DON\'T QUIT YOUR DAY JOB."',
            effects: [
              { type: 'reputation', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'The opposition deepfakes it to look like you\'re dancing during a national crisis. Your legacy is a children\'s song.',
            effects: [
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'politics_rally_power_through',
        text: 'SHOUT OVER IT',
        hint: 'Professional but potentially hilarious',
        outcomes: [
          {
            weight: 40,
            description: 'You scream about tax reform over Baby Shark. The absurdity is inspiring. Most passionate fiscal policy speech ever.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'Nobody can hear you. Without audio context, the video looks like a villain monologue. Your voice is gone for a week.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // SOCIAL MEDIA CAREER (requiredCareerId: 'socialMedia')
  // ============================================================

  {
    id: 'career_social_mega_viral',
    title: 'The Algorithm Smiled Upon You',
    description: 'Your cat video got 50M views. Your documentary got 12.',
    category: 'career',
    probability: 0.18,
    requiredCareerId: 'socialMedia',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'socialMedia' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'social_viral_milk_it',
        text: 'Pivot to cat content',
        hint: 'Follow the views',
        outcomes: [
          {
            weight: 45,
            description: 'You become a cat content creator. Your cat has an agent now. Followers double every month.',
            effects: [
              { type: 'money', value: 15000, operation: 'add' },
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'The cat gets bored of being filmed and attacks the camera. The audience loves it. Your face does not.',
            effects: [
              { type: 'money', value: 8000, operation: 'add' },
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'Another creator\'s dog goes viral and steals your thunder. The internet moves fast.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'social_viral_stay_course',
        text: 'Stay true to your content',
        hint: 'Integrity over views',
        outcomes: [
          {
            weight: 40,
            description: 'The viral viewers leave but the ones who stay are genuine fans. Quality over quantity.',
            effects: [
              { type: 'career_satisfaction', value: 15, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'Every comment on every video: "where\'s the cat?" The cat has eclipsed you in your own audience.',
            effects: [
              { type: 'career_satisfaction', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_social_cancelled',
    title: 'You\'ve Been Cancelled',
    description: 'An old tweet resurfaced and your follower count is plummeting.',
    category: 'career',
    probability: 0.19,
    requiredCareerId: 'socialMedia',
    cooldown: 10,
    conditions: [
      { type: 'hasCareerId', value: 'socialMedia' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'social_cancelled_apologize',
        text: 'Post the notes app apology',
        hint: 'Classic damage control',
        outcomes: [
          {
            weight: 35,
            description: 'Your apology is accepted by most. You survive with 70% of your audience intact.',
            effects: [
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'People analyze your apology word by word. A linguistics professor tweets a grammar thread. Cancellation inception.',
            effects: [
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -18, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'A bigger celebrity gets cancelled the same day. Your controversy is instantly forgotten.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'social_cancelled_double_down',
        text: '"Pineapple on pizza IS wrong"',
        hint: 'Fearless or foolish',
        outcomes: [
          {
            weight: 45,
            description: 'Your defiance resonates. Anti-pineapple people rally behind you. Merch sells out: "NO FRUIT ON FLATBREAD."',
            effects: [
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'money', value: 8000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description: 'Brands pull out. Sponsorships vanish. Your follower count enters free fall. You die on a stupid hill.',
            effects: [
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'money', value: -10000, operation: 'add' },
              { type: 'career_performance', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_social_brand_deal',
    title: 'The Brand Deal',
    description: 'An energy drink company offers a six-figure brand deal.',
    category: 'career',
    probability: 0.21,
    requiredCareerId: 'socialMedia',
    cooldown: 6,
    conditions: [
      { type: 'hasCareerId', value: 'socialMedia' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'social_brand_accept',
        text: 'Take the deal',
        hint: 'Paid but possibly cringe',
        outcomes: [
          {
            weight: 40,
            description: 'The sponsored post performs incredibly. Your audience loves watching you drink something that glows.',
            effects: [
              { type: 'money', value: 20000, operation: 'add' },
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'Your audience sees through it. "SELL OUT" comments flood in. Engagement drops.',
            effects: [
              { type: 'money', value: 15000, operation: 'add' },
              { type: 'reputation', value: -12, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
              { type: 'career_performance', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'The drink gets recalled for "undisclosed stimulants." You promoted something now illegal in three states.',
            effects: [
              { type: 'money', value: 10000, operation: 'add' },
              { type: 'reputation', value: -18, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'social_brand_decline',
        text: 'Decline',
        hint: 'Credibility preserved',
        outcomes: [
          {
            weight: 50,
            description: 'Your audience respects it. A premium brand reaches out with a deal that doesn\'t require drinking radioactive mango.',
            effects: [
              { type: 'reputation', value: 12, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'money', value: 8000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'A rival creator takes the deal and upgrades their entire setup. Integrity doesn\'t buy 4K cameras.',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_social_copycat',
    title: 'They Copied Your Whole Flow',
    description: 'A bigger creator is blatantly copying your entire style.',
    category: 'career',
    probability: 0.20,
    requiredCareerId: 'socialMedia',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'socialMedia' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'social_copycat_call_out',
        text: 'Call them out publicly',
        hint: 'Drama drives engagement',
        outcomes: [
          {
            weight: 40,
            description: 'Your side-by-side comparison goes mega-viral. The copycat loses followers. You gain 500K. Justice served.',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'money', value: 5000, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'Their fans attack you. "They were INSPIRED, not copying." The internet chose a side and it\'s not yours.',
            effects: [
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'Both audiences get bored of the drama and unfollow both of you. Mutually assured unfollowing.',
            effects: [
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'social_copycat_innovate',
        text: 'Ignore them and evolve',
        hint: 'Hard to copy someone who keeps changing',
        outcomes: [
          {
            weight: 55,
            description: 'You pivot so dramatically the copycat can\'t keep up. Your new content is fresh, innovative, and uniquely yours.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'career_satisfaction', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'You change your style and your audience hates it. "We liked the old you!" You\'re competing with a copy of yourself and LOSING.',
            effects: [
              { type: 'career_performance', value: -12, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_social_algorithm_change',
    title: 'Algorithm Apocalypse',
    description: 'The algorithm changed overnight and your reach dropped 90%.',
    category: 'career',
    probability: 0.22,
    requiredCareerId: 'socialMedia',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'socialMedia' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'social_algorithm_adapt',
        text: 'Study the new algorithm',
        hint: 'Sell your soul to machine learning',
        outcomes: [
          {
            weight: 40,
            description: 'You crack the code. The secret: three-second hooks and posting at 4:17 AM. Sleep destroyed, metrics immaculate.',
            effects: [
              { type: 'career_performance', value: 18, operation: 'add' },
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'money', value: 5000, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'You optimize everything and it still doesn\'t work. Your content is now soulless and formulaic.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'career_satisfaction', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'You crack it, but it changes again next month. You\'re on a hamster wheel of optimization.',
            effects: [
              { type: 'career_satisfaction', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'social_algorithm_diversify',
        text: 'Diversify to other platforms',
        hint: 'More work but less platform-dependent',
        outcomes: [
          {
            weight: 50,
            description: 'You expand to three platforms. Your audience follows. When one tanks, others carry you.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'career_satisfaction', value: 8, operation: 'add' },
              { type: 'money', value: 3000, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'You can\'t crack any of them. Now mediocre on three platforms instead of one. Diversification of sadness.',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_social_collab',
    title: 'The Collaboration',
    description: 'A huge creator wants to collab at your messy apartment.',
    category: 'career',
    probability: 0.19,
    requiredCareerId: 'socialMedia',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'socialMedia' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'social_collab_go_for_it',
        text: 'Accept and panic-clean',
        hint: 'Career-changing opportunity',
        outcomes: [
          {
            weight: 40,
            description: 'The collab is incredible. You gain 200K followers overnight. The fake plants fooled everyone.',
            effects: [
              { type: 'career_performance', value: 25, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'money', value: 8000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'The video is fine. Not great, not terrible. You gain 10K followers. Polite but unimpressed.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'Mid-filming, the closet bursts open and an avalanche of laundry falls on the big creator.',
            effects: [
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'career_performance', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'social_collab_suggest_their_place',
        text: '"Let\'s film at your studio"',
        hint: 'Less embarrassing',
        outcomes: [
          {
            weight: 55,
            description: 'They agree. Their studio is gorgeous. Your content has never looked this good.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'They insist on your place for "authenticity." You hire a cleaning service and buy IKEA furniture at midnight.',
            effects: [
              { type: 'money', value: -3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'career_performance', value: 10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_social_hate_comments',
    title: 'The Comment Section From Hell',
    description: 'Your latest video has 2,000 comments and 1,800 are hateful.',
    category: 'career',
    probability: 0.22,
    requiredCareerId: 'socialMedia',
    cooldown: 6,
    conditions: [
      { type: 'hasCareerId', value: 'socialMedia' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'social_hate_clap_back',
        text: 'Clap back at the haters',
        hint: 'Satisfying but feeds the trolls',
        outcomes: [
          {
            weight: 40,
            description: 'Your replies are fire. "Creator DESTROYS haters" trends. You gain followers from the drama.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'The trolls are better at this than you. You\'re now in a war with anonymous accounts that have infinite time.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'One of your clap-backs is taken out of context. "Creator BULLIES fan." The narrative reverses.',
            effects: [
              { type: 'reputation', value: -12, operation: 'add' },
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'social_hate_ignore',
        text: 'Close the app. Touch grass.',
        hint: 'Mentally healthy',
        outcomes: [
          {
            weight: 60,
            description: 'You go outside. Sun hits your face. You return refreshed and post a happy video. Mental health saved.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'health', value: 5, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'You go outside but check your phone the entire time. A duck watches you doom-scroll with concern.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'career_social_platform_ban',
    title: 'Banned! (Maybe)',
    description: 'Your cooking tutorial was flagged as "dangerous content."',
    category: 'career',
    probability: 0.18,
    requiredCareerId: 'socialMedia',
    cooldown: 10,
    conditions: [
      { type: 'hasCareerId', value: 'socialMedia' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'social_ban_appeal',
        text: 'File an appeal',
        hint: 'Proper channels, long wait',
        outcomes: [
          {
            weight: 40,
            description: 'After 3 weeks, a human reviews it. "This was clearly an error. Also, your carbonara looks amazing." Restored.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'Appeal denied by another bot. "Heated liquid projectiles" falls under their weapons policy. Pasta = arms dealing.',
            effects: [
              { type: 'career_performance', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -18, operation: 'add' },
              { type: 'money', value: -5000, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'Your account is in limbo for a month. When you return, the algorithm has forgotten you exist.',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'career_satisfaction', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'social_ban_go_public',
        text: 'Post about it on every other platform',
        hint: 'Public pressure sometimes works',
        outcomes: [
          {
            weight: 50,
            description: '"I got banned for pasta" goes viral. The platform restores your account within hours.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'The platform doubles down. Your account is permanently restricted. You become a cautionary tale.',
            effects: [
              { type: 'career_performance', value: -25, operation: 'add' },
              { type: 'money', value: -8000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'career_satisfaction', value: -15, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

];
