// ============================================================
// ThisLife — Relationship Events
// 55 events: family, romantic, friends, dating, marriage & kids
// ============================================================

import type { GameEvent } from '../../types/events';

export const RELATIONSHIP_EVENTS: GameEvent[] = [
  // ===========================================================
  //  FAMILY EVENTS (parent / sibling)
  // ===========================================================

  // 1
  {
    id: 'rel_parent_life_advice_good',
    title: 'Words of Wisdom',
    description:
      'Your parent has that look — a life lecture is incoming.',
    category: 'relationship',
    probability: 0.06,
    cooldown: 8,
    conditions: [{ type: 'hasRelationType', value: 'parent' }, { type: 'minAge', value: 13 }],
    choices: [
      {
        id: 'listen_carefully',
        text: 'Actually listen for once',
        hint: 'Might learn something',
        outcomes: [
          {
            weight: 70,
            description:
              'Their advice is surprisingly good. Something about compound interest and being kind to strangers. You feel a little more prepared for life.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'They ramble for forty-five minutes about the importance of a firm handshake. You zone out but appreciate the effort.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: 4, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'tune_out',
        text: 'Nod along while checking your phone',
        hint: 'Disrespectful but honest',
        outcomes: [
          {
            weight: 60,
            description:
              'They catch you scrolling. The disappointment in their eyes could power a guilt trip for weeks.',
            effects: [
              { type: 'relationship_closeness', target: 'parent', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'They don\'t notice. You miss what was apparently their secret recipe for happiness. Oh well.',
            effects: [
              { type: 'relationship_closeness', target: 'parent', value: -2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 2
  {
    id: 'rel_parent_terrible_advice',
    title: 'Questionable Parenting',
    description:
      'Your parent confidently dispenses the worst advice you\'ve ever heard.',
    category: 'relationship',
    probability: 0.05,
    cooldown: 8,
    conditions: [{ type: 'hasRelationType', value: 'parent' }, { type: 'minAge', value: 10 }],
    choices: [
      {
        id: 'follow_advice',
        text: 'Take their advice to heart',
        hint: 'This might not end well',
        outcomes: [
          {
            weight: 50,
            description:
              'You try never apologizing. Turns out people really don\'t like that. Who could have predicted this?',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Against all odds, the aggressive confidence works out for one specific situation. You still shouldn\'t make it a habit.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'politely_ignore',
        text: 'Smile and do the opposite',
        hint: 'The wise choice',
        outcomes: [
          {
            weight: 80,
            description:
              'You go on apologizing when appropriate like a functional human being. Your parent never finds out.',
            effects: [
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'Your parent catches you apologizing and launches into a two-hour lecture about "having a spine."',
            effects: [
              { type: 'relationship_closeness', target: 'parent', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 3
  {
    id: 'rel_sibling_rivalry',
    title: 'Sibling Showdown',
    description:
      'Your sibling got praised for something and the smug look on their face is unbearable.',
    category: 'relationship',
    probability: 0.06,
    cooldown: 6,
    conditions: [{ type: 'hasRelationType', value: 'sibling' }, { type: 'minAge', value: 8 }],
    choices: [
      {
        id: 'one_up_them',
        text: 'Try to one-up them immediately',
        hint: 'Competitive but petty',
        outcomes: [
          {
            weight: 40,
            description:
              'You spectacularly outperform them. The look of defeat on their face is... honestly kind of satisfying. You\'re not proud of how good this feels.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'relationship_closeness', target: 'sibling', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'Your attempt to show them up backfires spectacularly. Now they have even more to gloat about. Well played, you.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'sibling', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'congratulate',
        text: 'Swallow your pride and congratulate them',
        hint: 'Kill them with kindness',
        outcomes: [
          {
            weight: 70,
            description:
              'They\'re so confused by your genuine kindness that they stop gloating. It\'s the most effective power move you\'ve ever pulled.',
            effects: [
              { type: 'stat', target: 'happiness', value: 4, operation: 'add' },
              { type: 'relationship_closeness', target: 'sibling', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'They think you\'re being sarcastic and it escalates into an argument anyway. No good deed, right?',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'relationship_closeness', target: 'sibling', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'silent_treatment',
        text: 'Give them the silent treatment',
        hint: 'Passive-aggressive classic',
        outcomes: [
          {
            weight: 50,
            description:
              'Two can play this game. The house descends into an icy cold war. Your parent is thrilled.',
            effects: [
              { type: 'stat', target: 'happiness', value: -4, operation: 'add' },
              { type: 'relationship_closeness', target: 'sibling', value: -6, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'They don\'t even notice you\'re ignoring them, which is somehow worse.',
            effects: [
              { type: 'stat', target: 'happiness', value: -6, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 4
  {
    id: 'rel_family_reunion_disaster',
    title: 'The Family Reunion',
    description:
      'The annual family reunion is here and the chaos is already brewing.',
    category: 'relationship',
    probability: 0.04,
    cooldown: 16,
    conditions: [{ type: 'hasRelationType', value: 'parent' }, { type: 'minAge', value: 10 }],
    choices: [
      {
        id: 'embrace_chaos',
        text: 'Dive into the chaos headfirst',
        hint: 'Memories are made of this',
        outcomes: [
          {
            weight: 50,
            description:
              'You end up on Uncle Dave\'s volleyball team, eat suspicious potato salad, and hear Aunt Marge\'s unfiltered life story. Somehow it\'s the best day you\'ve had in months.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: 6, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The potato salad was as dangerous as it smelled. You spend the next two days in the bathroom questioning every life decision that led to this moment.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'hide_corner',
        text: 'Find a quiet corner and people-watch',
        hint: 'Observe the carnage safely',
        outcomes: [
          {
            weight: 60,
            description:
              'You watch the drama unfold from a safe distance. When Uncle Dave flips the volleyball net, you\'re glad you weren\'t underneath it.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'A relative you barely know corners you and asks why you\'re "not doing more with your life." For forty-five minutes.',
            effects: [
              { type: 'stat', target: 'happiness', value: -6, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'skip_reunion',
        text: 'Fake sick and stay home',
        hint: 'Avoidance: a family tradition',
        outcomes: [
          {
            weight: 40,
            description:
              'Peace and quiet. You binge-watch TV in your underwear while your phone buzzes with family group chat drama. No regrets.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'Your parent finds out you lied. The guilt trip they lay on you has its own gravitational pull.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: -12, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 5
  {
    id: 'rel_parent_sick',
    title: 'The Phone Call You Dread',
    description:
      'Your parent has been hospitalized — the doctor says it\'s serious.',
    category: 'relationship',
    probability: 0.03,
    cooldown: 20,
    oneTime: true,
    conditions: [{ type: 'hasRelationType', value: 'parent' }, { type: 'minAge', value: 25 }],
    choices: [
      {
        id: 'drop_everything',
        text: 'Drop everything and rush to the hospital',
        hint: 'Nothing else matters right now',
        outcomes: [
          {
            weight: 60,
            description:
              'You spend every day at their bedside. They recover slowly, but the fear lingers. Something shifted between you — you\'re closer now, in a way that only almost-losing someone can create.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: 20, operation: 'add' },
              { type: 'money', value: -2000, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Despite the best care, it\'s a long road to recovery. You take time off work and the medical bills pile up, but you wouldn\'t trade a single bedside moment.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: 25, operation: 'add' },
              { type: 'money', value: -5000, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'send_support',
        text: 'Send flowers and call every day',
        hint: 'Support from a distance',
        outcomes: [
          {
            weight: 50,
            description:
              'Your daily calls become the highlight of their recovery. "You don\'t need to call every day," they say. You both know that\'s a lie.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: 10, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'They recover but mention to relatives that you "couldn\'t be bothered to visit." The guilt hits different when it comes through the family grapevine.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 6
  {
    id: 'rel_inheritance_drama',
    title: 'Reading of the Will',
    description:
      'A distant relative\'s will is about to tear the family apart over money.',
    category: 'relationship',
    probability: 0.02,
    cooldown: 40,
    oneTime: true,
    conditions: [{ type: 'hasRelationType', value: 'parent' }, { type: 'minAge', value: 20 }],
    choices: [
      {
        id: 'claim_share',
        text: 'Fight for your fair share',
        hint: 'You deserve this... right?',
        outcomes: [
          {
            weight: 50,
            description:
              'After a tense legal process, you walk away with a decent sum. Half the family isn\'t speaking to the other half, but hey, money.',
            effects: [
              { type: 'money', value: 15000, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: -10, operation: 'add' },
              { type: 'relationship_closeness', target: 'sibling', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The legal fees eat up most of the inheritance. You "won" but at what cost? Everyone\'s angry and you have a $800 check to show for it.',
            effects: [
              { type: 'money', value: 800, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: -12, operation: 'add' },
              { type: 'relationship_closeness', target: 'sibling', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'stay_out',
        text: 'Stay out of it and let the family sort it out',
        hint: 'Take the high road',
        outcomes: [
          {
            weight: 60,
            description:
              'You stay above the fray. Your family respects your maturity — and you still get a small share because your parent went to bat for you.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Your noble stance gets you exactly nothing. Your sibling took your share while you were being "the bigger person." Lesson learned.',
            effects: [
              { type: 'relationship_closeness', target: 'sibling', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -6, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 7
  {
    id: 'rel_family_secret',
    title: 'Skeleton in the Closet',
    description:
      'You find old letters in the attic that reveal a family secret nobody was supposed to know.',
    category: 'relationship',
    probability: 0.02,
    oneTime: true,
    cooldown: 40,
    conditions: [{ type: 'hasRelationType', value: 'parent' }, { type: 'minAge', value: 16 }],
    choices: [
      {
        id: 'confront_family',
        text: 'Confront your parent about it',
        hint: 'Pandora\'s box',
        outcomes: [
          {
            weight: 50,
            description:
              'After tears, shouting, and more tears, the truth comes out. It\'s messy, but at least it\'s honest. Your relationship with your parent enters uncharted territory.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: -10, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The confrontation leads to an emotional breakthrough. Your parent breaks down and tells you everything. It\'s painful, but you understand them better now.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: 10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'keep_secret',
        text: 'Put the box back and pretend you never saw it',
        hint: 'Some things are buried for a reason',
        outcomes: [
          {
            weight: 60,
            description:
              'You bury the secret, but it eats at you. Every family dinner feels different now. You look at old photos with new eyes.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You successfully forget about it. The human capacity for denial is truly remarkable.',
            effects: [
              { type: 'stat', target: 'happiness', value: -1, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 8
  {
    id: 'rel_holiday_blowup',
    title: 'Holiday Dinner from Hell',
    description:
      'Holiday dinner is going great until someone brings up politics.',
    category: 'relationship',
    probability: 0.05,
    cooldown: 8,
    conditions: [
      { type: 'hasRelationType', value: 'parent' },
      { type: 'minAge', value: 14 },
      { type: 'season', value: 'winter' },
    ],
    choices: [
      {
        id: 'change_subject',
        text: 'Desperately try to change the subject',
        hint: '"So how about that weather?"',
        outcomes: [
          {
            weight: 40,
            description:
              'Your heroic topic change ("Did anyone see that movie?") actually works. Crisis averted. You should get a medal for diplomatic service.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'They talk over you and the argument escalates. Someone storms away from the table. The turkey goes cold. Classic.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'join_argument',
        text: 'Pick a side and jump in',
        hint: 'Pour gasoline on the fire',
        outcomes: [
          {
            weight: 30,
            description:
              'Your impassioned speech actually makes some people reconsider their positions. Just kidding — it makes everything ten times worse.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'sibling', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description:
              'The yelling reaches a crescendo, someone cries, and two people leave early. Merry holidays, everyone.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: -6, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'go_eat_dessert',
        text: 'Quietly take your plate to another room',
        hint: 'Strategic retreat',
        outcomes: [
          {
            weight: 80,
            description:
              'You eat pie in peaceful solitude while the battle rages in the dining room. This is self-care.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'Someone follows you and demands to know why you\'re "being antisocial." There is no escape.',
            effects: [
              { type: 'stat', target: 'happiness', value: -4, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 9
  {
    id: 'rel_parent_disapproves',
    title: 'Parental Disappointment',
    description:
      'Your parent discovered your latest life choice and the sighing is seismic.',
    category: 'relationship',
    probability: 0.06,
    cooldown: 8,
    conditions: [{ type: 'hasRelationType', value: 'parent' }, { type: 'minAge', value: 16 }],
    choices: [
      {
        id: 'stand_ground',
        text: 'Stand your ground — it\'s your life',
        hint: 'Assert independence',
        outcomes: [
          {
            weight: 50,
            description:
              'You deliver a firm but respectful speech about making your own choices. Your parent is still upset, but there\'s a flicker of grudging respect.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: -5, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'It turns into a full shouting match. Doors are slammed. Regrettable things are said. The house doesn\'t feel like home for a while.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'try_to_please',
        text: 'Apologize and try to meet them halfway',
        hint: 'People-pleasing mode activate',
        outcomes: [
          {
            weight: 60,
            description:
              'A compromise is reached. Your parent calms down. You\'re not entirely happy, but the peace is worth something.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Your compromise isn\'t enough. They wanted total capitulation and your halfway offer just made them angrier.',
            effects: [
              { type: 'stat', target: 'happiness', value: -7, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: -4, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 10
  {
    id: 'rel_sibling_money',
    title: 'The Sibling Bailout',
    description:
      'Your sibling calls with that tone — the one that means they need money.',
    category: 'relationship',
    probability: 0.05,
    cooldown: 10,
    conditions: [
      { type: 'hasRelationType', value: 'sibling' },
      { type: 'minAge', value: 20 },
      { type: 'minMoney', value: 1000 },
    ],
    choices: [
      {
        id: 'lend_money',
        text: 'Lend them the money',
        hint: 'Family helps family... right?',
        outcomes: [
          {
            weight: 40,
            description:
              'They pay you back on time and with interest. Just kidding — they pay you back on time though. Miracles happen.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'relationship_closeness', target: 'sibling', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'Months later, they\'ve conveniently forgotten about the loan. When you mention it, they act like you\'re the unreasonable one. Classic sibling move.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'relationship_closeness', target: 'sibling', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'say_no',
        text: 'Tell them you can\'t afford it',
        hint: 'Set boundaries',
        outcomes: [
          {
            weight: 50,
            description:
              'They\'re disappointed but understand. They figure it out on their own and you get to keep your money and your sanity.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'relationship_closeness', target: 'sibling', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'They tell your parent you "refused to help family." Now you\'re getting guilt-tripped from two directions. Wonderful.',
            effects: [
              { type: 'stat', target: 'happiness', value: -6, operation: 'add' },
              { type: 'relationship_closeness', target: 'sibling', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 11
  {
    id: 'rel_family_vacation',
    title: 'Family Vacation From Hell',
    description:
      'The car is packed for a family vacation and everyone\'s already arguing about the playlist.',
    category: 'relationship',
    probability: 0.04,
    cooldown: 12,
    conditions: [
      { type: 'hasRelationType', value: 'parent' },
      { type: 'minAge', value: 10 },
      { type: 'season', value: 'summer' },
    ],
    choices: [
      {
        id: 'be_positive',
        text: 'Be the relentlessly positive one',
        hint: 'Someone has to hold this together',
        outcomes: [
          {
            weight: 50,
            description:
              'Your optimism is infectious. Against all odds, the vacation turns out to be genuinely fun. You make memories that will be laughed about for years.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: 10, operation: 'add' },
              { type: 'relationship_closeness', target: 'sibling', value: 8, operation: 'add' },
              { type: 'money', value: -1500, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your relentless positivity cracks when the hotel loses the reservation and it starts raining. You have a very public meltdown in the lobby.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'money', value: -2000, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'headphones_on',
        text: 'Headphones in, world out',
        hint: 'Self-preservation mode',
        outcomes: [
          {
            weight: 60,
            description:
              'You survive the trip in your own little bubble. Your family bonds without you, which is fine. Totally fine. You\'re fine.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: -5, operation: 'add' },
              { type: 'money', value: -1000, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Your parent confiscates your headphones on day two. "This is FAMILY time!" The next five days feel like five years.',
            effects: [
              { type: 'stat', target: 'happiness', value: -7, operation: 'add' },
              { type: 'money', value: -1000, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // ===========================================================
  //  ROMANTIC EVENTS
  // ===========================================================

  // 12
  {
    id: 'rel_partner_texting',
    title: 'Who\'s That Texting?',
    description:
      'Your partner\'s phone buzzes at 2 AM and they flip it face-down real quick.',
    category: 'relationship',
    probability: 0.05,
    cooldown: 10,
    conditions: [
      { type: 'hasRelationType', value: 'romantic' },
      { type: 'minAge', value: 16 },
    ],
    choices: [
      {
        id: 'confront_directly',
        text: 'Ask them about it directly',
        hint: 'Communication is key... right?',
        outcomes: [
          {
            weight: 50,
            description:
              'Turns out they were planning a surprise birthday party for you with your friends. Now you feel like a paranoid jerk, but also kind of loved.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'They get defensive and accuse you of not trusting them. The argument that follows is spectacular in the worst way. No resolution reached.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'They come clean — they\'ve been texting their ex. "Just as friends." The air quotes you hear are imaginary but deafening.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'check_phone',
        text: 'Sneak a look at their phone',
        hint: 'Trust issues, activated',
        outcomes: [
          {
            weight: 40,
            description:
              'It\'s just memes from a group chat. You feel relieved and deeply ashamed simultaneously. A new personal low.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'They catch you snooping. The betrayal of trust argument is somehow worse than whatever you were worried about.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You find messages that make your blood run cold. Heart emojis. "Miss you." Pet names that aren\'t yours. The evidence is damning.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -25, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'let_it_go',
        text: 'Roll over and go back to sleep',
        hint: 'Ignorance is bliss... maybe',
        outcomes: [
          {
            weight: 60,
            description:
              'The late-night texting stops on its own after a week. Probably nothing. Almost certainly nothing. You choose to believe it was nothing.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'It doesn\'t stop. In fact it gets worse. Now they\'re taking calls in the other room. The anxiety is eating you alive.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 13
  {
    id: 'rel_romantic_surprise',
    title: 'Surprise Romantic Gesture',
    description:
      'Your partner shows up with flowers, candles, and a homemade dinner they clearly spent hours on.',
    category: 'relationship',
    probability: 0.06,
    cooldown: 8,
    conditions: [
      { type: 'hasRelationType', value: 'romantic' },
      { type: 'minAge', value: 16 },
    ],
    choices: [
      {
        id: 'be_thrilled',
        text: 'Be completely swept off your feet',
        hint: 'Let yourself enjoy this',
        outcomes: [
          {
            weight: 80,
            description:
              'The dinner is slightly overcooked and one of the candles sets off the smoke alarm, but it\'s the most romantic night you\'ve had in ages. You fall a little more in love.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'Perfect evening. Like, suspiciously perfect. Later you find out they\'re overcompensating for something. But tonight? Tonight was beautiful.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'suspicious',
        text: '"Okay, what did you do wrong?"',
        hint: 'Cynical but sometimes accurate',
        outcomes: [
          {
            weight: 40,
            description:
              'They\'re genuinely hurt. "I just wanted to do something nice." The guilt spiral that follows kind of ruins the evening. Nice job.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'Your suspicion was right — they dented your car. But the dinner is really good, and at least they told you before you found out yourself.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 14
  {
    id: 'rel_meet_the_parents',
    title: 'Meet the Parents',
    description:
      'You\'re meeting your partner\'s parents for the first time — "just be yourself" has never sounded so terrifying.',
    category: 'relationship',
    probability: 0.04,
    cooldown: 20,
    conditions: [
      { type: 'hasRelationType', value: 'romantic' },
      { type: 'minAge', value: 18 },
    ],
    choices: [
      {
        id: 'be_charming',
        text: 'Turn on maximum charm',
        hint: 'First impressions matter',
        outcomes: [
          {
            weight: 40,
            description:
              'You nail it. Firm handshake, perfect eye contact, laugh at the dad jokes. Their mom whispers "I like this one" and you basically ascend to heaven.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'You overdo the charm. Their dad thinks you\'re fake, their mom thinks you\'re "nice but trying too hard." Your partner assures you it went fine. It did not go fine.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'You accidentally call their mom by the wrong name, spill wine on their white carpet, and then choke on a shrimp. It\'s a masterclass in disaster.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -8, operation: 'add' },
              { type: 'stat', target: 'looks', value: -2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'be_honest',
        text: 'Just be genuinely yourself',
        hint: 'Radical authenticity',
        outcomes: [
          {
            weight: 60,
            description:
              'Your authentic self is actually pretty likeable. Their parents appreciate the honesty and their dad even invites you to go fishing sometime.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Your authentic self includes nervous rambling. You accidentally overshare about your childhood. There\'s a very long, very awkward silence.',
            effects: [
              { type: 'stat', target: 'happiness', value: -6, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -4, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 15
  {
    id: 'rel_moving_in',
    title: 'The Big Move',
    description:
      'You and your partner are talking about moving in together.',
    category: 'relationship',
    probability: 0.04,
    oneTime: true,
    cooldown: 20,
    conditions: [
      { type: 'hasRelationType', value: 'romantic' },
      { type: 'minAge', value: 20 },
    ],
    choices: [
      {
        id: 'move_in',
        text: 'Go for it — sign the lease together',
        hint: 'What could go wrong?',
        outcomes: [
          {
            weight: 50,
            description:
              'Living together is amazing. Morning coffee in your underwear, splitting rent, and falling asleep next to someone every night. This was a great decision.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 15, operation: 'add' },
              { type: 'money', value: 3000, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'Week one: bliss. Week three: why do they leave wet towels EVERYWHERE? Week eight: you\'re having a calm, mature conversation about toothpaste tube etiquette. It\'s an adjustment.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 5, operation: 'add' },
              { type: 'money', value: 2000, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'The honeymoon phase crashes into reality at terminal velocity. You discover they\'re a complete slob and they discover you\'re insufferably neat (or vice versa). This may have been premature.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -10, operation: 'add' },
              { type: 'money', value: 1000, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'wait',
        text: 'Suggest waiting a bit longer',
        hint: 'Slow and steady',
        outcomes: [
          {
            weight: 60,
            description:
              'They understand. You keep dating at your own pace and enjoy the excitement of having separate spaces. Smart move.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'They take it personally. "Do you not see a future with me?" This conversation is going well.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 16
  {
    id: 'rel_marriage_proposal',
    title: 'The Big Question',
    description:
      'The ring is in your pocket and your palms are sweating — someone\'s about to pop the question.',
    category: 'relationship',
    probability: 0.03,
    oneTime: true,
    cooldown: 40,
    conditions: [
      { type: 'hasRelationType', value: 'romantic' },
      { type: 'minAge', value: 22 },
    ],
    choices: [
      {
        id: 'propose',
        text: 'Get down on one knee',
        hint: 'This is it',
        outcomes: [
          {
            weight: 70,
            description:
              'They say yes! The restaurant erupts in applause. Strangers are crying. The waiter brings free champagne. This is the happiest moment of your life.',
            effects: [
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 25, operation: 'add' },
              { type: 'money', value: -3000, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'They say yes through tears, but also mention they "need to talk about some things first." A yes with asterisks. Still, they said yes.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 15, operation: 'add' },
              { type: 'money', value: -3000, operation: 'add' },
            ],
          },
          {
            weight: 10,
            description:
              'The silence lasts an eternity. "I\'m not ready." The walk to the car is the longest of your life. The ring sits in your jacket like a lead weight.',
            effects: [
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -20, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'money', value: -3000, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'wait_for_moment',
        text: 'Chicken out — the moment isn\'t right',
        hint: 'Cold feet',
        outcomes: [
          {
            weight: 50,
            description:
              'The ring stays in your pocket. Maybe next time. Your partner doesn\'t notice anything unusual. The moment passes like a normal Tuesday.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your partner found the ring box in your coat last week and has been waiting all evening. They look increasingly disappointed as you order dessert without getting up.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 17
  {
    id: 'rel_wedding_stress',
    title: 'Wedding Planning Nightmare',
    description:
      'Wedding planning has consumed your life and everyone has opinions about napkin colors.',
    category: 'relationship',
    probability: 0.04,
    oneTime: true,
    cooldown: 20,
    conditions: [
      { type: 'hasRelationType', value: 'romantic' },
      { type: 'minAge', value: 22 },
    ],
    choices: [
      {
        id: 'push_through',
        text: 'Power through with the big wedding',
        hint: 'It\'ll be worth it... probably',
        outcomes: [
          {
            weight: 50,
            description:
              'The wedding is beautiful. The cake is perfect. Nobody falls during the first dance. Your parent cries happy tears. Worth every panic attack.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 10, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: 8, operation: 'add' },
              { type: 'money', value: -15000, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The DJ plays the wrong first dance song, a groomsman passes out, and your drunk uncle gives a speech that should be classified as a war crime. But you\'re married!',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 8, operation: 'add' },
              { type: 'money', value: -20000, operation: 'add' },
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'elope',
        text: 'Scrap everything — let\'s elope',
        hint: 'Just the two of you',
        outcomes: [
          {
            weight: 60,
            description:
              'You get married in a courthouse on a Tuesday afternoon and it\'s somehow the most romantic thing ever. Your families are furious, but who cares? You\'re in love.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 20, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: -15, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Your parent doesn\'t speak to you for three months. Your partner\'s mom sends a passive-aggressive gift basket. The marriage is great though.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 15, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: -20, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 18
  {
    id: 'rel_kids_disagreement',
    title: 'The Kids Conversation',
    description:
      'The kids conversation comes up and you two don\'t feel the same way about it.',
    category: 'relationship',
    probability: 0.03,
    oneTime: true,
    cooldown: 20,
    conditions: [
      { type: 'hasRelationType', value: 'romantic' },
      { type: 'minAge', value: 25 },
    ],
    choices: [
      {
        id: 'compromise',
        text: 'Try to find a middle ground',
        hint: 'Is there a middle ground on this?',
        outcomes: [
          {
            weight: 40,
            description:
              'You agree to revisit the conversation in a year. The tension doesn\'t fully resolve, but the pressure valve has been released for now.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'Turns out this is one of those topics with no real compromise. You both know it. The elephant in the room just got bigger.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -10, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'agree_with_partner',
        text: 'Give in to what your partner wants',
        hint: 'Self-sacrifice or love?',
        outcomes: [
          {
            weight: 50,
            description:
              'Your partner is overjoyed. You push down your own feelings. It\'ll be fine. It\'s fine. Everything is fine.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The resentment builds slowly, like a pressure cooker. You agreed to something you didn\'t want, and it shows in small ways every day.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -5, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 19
  {
    id: 'rel_caught_cheating',
    title: 'The Betrayal',
    description:
      'You walk in on your partner with someone else.',
    category: 'relationship',
    probability: 0.02,
    cooldown: 40,
    conditions: [
      { type: 'hasRelationType', value: 'romantic' },
      { type: 'minAge', value: 18 },
    ],
    choices: [
      {
        id: 'confront_rage',
        text: 'Explode with righteous fury',
        hint: 'Scorched earth',
        outcomes: [
          {
            weight: 60,
            description:
              'You deliver a devastating verbal takedown that would make a reality TV producer weep with joy. The relationship is over, but at least you left with your dignity. Well, most of it.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -50, operation: 'add' },
              { type: 'remove_relationship', target: 'romantic', value: 'exSpouse' },
            ],
          },
          {
            weight: 40,
            description:
              'The confrontation turns ugly. Things are thrown (not at anyone, but at walls). Neighbors call the building manager. Your heart shatters into pieces you\'ll be finding for years.',
            effects: [
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'stat', target: 'health', value: -15, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
              { type: 'remove_relationship', target: 'romantic', value: 'exSpouse' },
            ],
          },
        ],
      },
      {
        id: 'walk_away_silent',
        text: 'Walk away in silence',
        hint: 'The cold exit',
        outcomes: [
          {
            weight: 50,
            description:
              'You leave without a word. The silence is more devastating than any scream. Your partner calls fifty times. You don\'t answer. It\'s over.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -40, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The quiet exit haunts you both. They never stop trying to explain. You never give them the chance. The relationship dissolves in unanswered messages.',
            effects: [
              { type: 'stat', target: 'happiness', value: -18, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'remove_relationship', target: 'romantic', value: 'exSpouse' },
            ],
          },
        ],
      },
      {
        id: 'try_to_forgive',
        text: 'Try to work through it',
        hint: 'Can trust be rebuilt?',
        outcomes: [
          {
            weight: 30,
            description:
              'Against all odds, couples therapy and brutal honesty slowly rebuild something. It\'s never the same, but it\'s something. Maybe something stronger.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -20, operation: 'add' },
              { type: 'money', value: -3000, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description:
              'You try. You really try. But you can\'t stop picturing it. Every late text, every unexplained absence — the paranoia eats you alive. It ends anyway, just slower and more painfully.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'stat', target: 'health', value: -12, operation: 'add' },
              { type: 'remove_relationship', target: 'romantic', value: 'exSpouse' },
              { type: 'money', value: -2000, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 20
  {
    id: 'rel_divorce',
    title: 'Irreconcilable Differences',
    description:
      'The lawyers are involved — what started as "taking a break" is now a divorce.',
    category: 'relationship',
    probability: 0.02,
    oneTime: true,
    cooldown: 40,
    conditions: [
      { type: 'hasRelationType', value: 'spouse' },
      { type: 'minAge', value: 25 },
    ],
    choices: [
      {
        id: 'amicable_divorce',
        text: 'Try for an amicable split',
        hint: 'End it with grace',
        outcomes: [
          {
            weight: 50,
            description:
              'You manage to divide everything fairly and part on decent terms. It still hurts like hell, but you handle it like adults. Your therapist would be proud.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'money', value: -8000, operation: 'add' },
              { type: 'remove_relationship', target: 'spouse', value: 'exSpouse' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You tried for amicable, but they didn\'t. Their lawyer is ruthless. You lose more than you expected — money, the couch you both loved, and a little piece of your faith in people.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'money', value: -15000, operation: 'add' },
              { type: 'remove_relationship', target: 'spouse', value: 'exSpouse' },
            ],
          },
        ],
      },
      {
        id: 'fight_for_everything',
        text: 'Lawyer up and fight for everything',
        hint: 'War mode',
        outcomes: [
          {
            weight: 40,
            description:
              'Your lawyer earns every penny. You come out ahead financially, but emotionally you\'re a wreck. Was it worth it? The money says yes. The bags under your eyes say no.',
            effects: [
              { type: 'stat', target: 'happiness', value: -18, operation: 'add' },
              { type: 'stat', target: 'health', value: -15, operation: 'add' },
              { type: 'money', value: -5000, operation: 'add' },
              { type: 'remove_relationship', target: 'spouse', value: 'exSpouse' },
            ],
          },
          {
            weight: 60,
            description:
              'The legal battle drags on for months. Both sides rack up enormous legal fees. The judge, clearly tired of both of you, splits everything down the middle. All that fighting for nothing.',
            effects: [
              { type: 'stat', target: 'happiness', value: -22, operation: 'add' },
              { type: 'stat', target: 'health', value: -15, operation: 'add' },
              { type: 'money', value: -20000, operation: 'add' },
              { type: 'remove_relationship', target: 'spouse', value: 'exSpouse' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 21
  {
    id: 'rel_anniversary_forgotten',
    title: 'The Forgotten Anniversary',
    description:
      'Your partner gives you that look — you forgot your anniversary.',
    category: 'relationship',
    probability: 0.05,
    cooldown: 8,
    conditions: [
      { type: 'hasRelationType', value: 'spouse' },
      { type: 'minAge', value: 23 },
    ],
    choices: [
      {
        id: 'grovel',
        text: 'Launch into emergency damage control',
        hint: 'Grovel like you\'ve never groveled before',
        outcomes: [
          {
            weight: 50,
            description:
              'You book a last-minute dinner, buy flowers from a gas station (they don\'t need to know that), and deliver an apology speech worthy of an Oscar. Crisis mostly averted.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: -5, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your desperate scramble is transparent and kind of insulting. "Gas station flowers? Really?" This is going to take more than one dinner to fix.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: -12, operation: 'add' },
              { type: 'money', value: -300, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'own_it',
        text: 'Be completely honest about forgetting',
        hint: 'Honesty is... brave',
        outcomes: [
          {
            weight: 40,
            description:
              'Your honesty is refreshing. They\'re hurt but appreciate that you didn\'t lie. You plan a proper belated celebration together.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              '"You just forgot?" The hurt in their voice is worse than anger. They sleep facing the wall tonight. The cold side of the bed has never felt colder.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: -15, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 22
  {
    id: 'rel_ex_returns',
    title: 'Blast from the Past',
    description:
      'You spot your ex in public and they look annoyingly good.',
    category: 'relationship',
    probability: 0.04,
    cooldown: 12,
    conditions: [
      { type: 'minAge', value: 20 },
    ],
    choices: [
      {
        id: 'be_cordial',
        text: 'Make pleasant small talk',
        hint: 'Keep it civil',
        outcomes: [
          {
            weight: 50,
            description:
              'You have a surprisingly normal conversation. They\'re doing well, you\'re doing well. You part ways and feel... fine? Maybe you\'re finally over it.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The small talk devolves into "remember when..." and suddenly you\'re laughing together like old times. Dangerous territory. Very dangerous territory.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'Your current partner sees you two chatting and now you have to explain why you\'re laughing with your ex in a coffee shop. Good luck.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'pretend_not_see',
        text: 'Pretend you don\'t see them and walk fast',
        hint: 'The mature approach',
        outcomes: [
          {
            weight: 60,
            description:
              'You successfully avoid eye contact and power-walk to safety. Your heart is racing but crisis averted. Today\'s cardio: emotional evasion.',
            effects: [
              { type: 'stat', target: 'happiness', value: 1, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              '"Hey! HEY! Is that you?" They saw you. They definitely saw you speed-walking away. Now you look ridiculous AND have to talk to them.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 23
  {
    id: 'rel_long_distance',
    title: 'Miles Between Us',
    description:
      'Your partner got an amazing opportunity in another city — the love is real, but so is geography.',
    category: 'relationship',
    probability: 0.03,
    oneTime: true,
    cooldown: 20,
    conditions: [
      { type: 'hasRelationType', value: 'romantic' },
      { type: 'minAge', value: 20 },
    ],
    choices: [
      {
        id: 'try_long_distance',
        text: 'Try to make long distance work',
        hint: 'Love conquers all... maybe',
        outcomes: [
          {
            weight: 40,
            description:
              'Video calls, care packages, and airport reunions. It\'s hard, but every visit feels like falling in love all over again. You make it work.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -5, operation: 'add' },
              { type: 'money', value: -3000, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'Three months in, the calls get shorter. The visits get less frequent. You\'re living parallel lives that barely intersect anymore. The slow fade is worse than a clean break.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -20, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'money', value: -2000, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'go_with_them',
        text: 'Pack your bags and go with them',
        hint: 'Leap of faith',
        outcomes: [
          {
            weight: 50,
            description:
              'New city, same love. Starting fresh together brings you closer than ever. The adventure of building a life together somewhere new is thrilling.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 15, operation: 'add' },
              { type: 'money', value: -5000, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You gave up everything — job, friends, familiar places. And now you\'re alone in a new city while they work 80-hour weeks. The resentment creeps in like fog.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -15, operation: 'add' },
              { type: 'money', value: -5000, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'let_them_go',
        text: 'Let them go and end things cleanly',
        hint: 'If you love them, set them free',
        outcomes: [
          {
            weight: 50,
            description:
              'You part as best friends who just couldn\'t make it work. It hurts, but there\'s peace in knowing you both chose happiness, even if it\'s apart.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -15, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You say goodbye at the airport like a movie scene, except you\'re ugly-crying and a security guard asks if you\'re okay. You are not okay.',
            effects: [
              { type: 'stat', target: 'happiness', value: -18, operation: 'add' },
              { type: 'remove_relationship', target: 'romantic', value: 'exSpouse' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 24
  {
    id: 'rel_jealousy_incident',
    title: 'The Green-Eyed Monster',
    description:
      'Your partner won\'t stop raving about their "amazing" new coworker.',
    category: 'relationship',
    probability: 0.05,
    cooldown: 8,
    conditions: [
      { type: 'hasRelationType', value: 'romantic' },
      { type: 'minAge', value: 18 },
    ],
    choices: [
      {
        id: 'trust_partner',
        text: 'You trust your partner — let it go',
        hint: 'Secure attachment energy',
        outcomes: [
          {
            weight: 70,
            description:
              'The coworker turns out to be perfectly nice and zero threat. Your trust in your partner deepens. Maybe you\'re finally becoming a healthy, well-adjusted person.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You later find out the "amazing" coworker has been flirting with your partner. Your partner hasn\'t noticed, but you sure have. The jealousy was justified.',
            effects: [
              { type: 'stat', target: 'happiness', value: -6, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -4, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'express_concern',
        text: 'Mention it\'s making you uncomfortable',
        hint: 'Open communication',
        outcomes: [
          {
            weight: 50,
            description:
              'Your partner listens, reassures you, and makes a conscious effort to include you when the coworker comes up. That\'s what healthy communication looks like.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              '"You\'re being jealous over NOTHING." The dismissal stings. They start mentioning the coworker less, but not because they understand — because they\'re hiding it. Not great.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // ===========================================================
  //  FRIEND EVENTS
  // ===========================================================

  // 25
  {
    id: 'rel_friend_trouble',
    title: 'A Friend in Need',
    description:
      'Your friend calls at 3 AM from the police station — you\'re their one phone call.',
    category: 'relationship',
    probability: 0.04,
    cooldown: 12,
    conditions: [
      { type: 'hasRelationType', value: 'friend' },
      { type: 'minAge', value: 18 },
    ],
    choices: [
      {
        id: 'bail_them_out',
        text: 'Go bail them out immediately',
        hint: 'That\'s what friends are for',
        outcomes: [
          {
            weight: 60,
            description:
              'You show up at 4 AM looking like a zombie and pay the bail. Your friend is tearfully grateful. "I owe you my life." They definitely owe you $2,000.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: 20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You bail them out only to learn what they were arrested for. It\'s... worse than you thought. Now you\'re associated with whatever that was. Great.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: 10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'let_them_wait',
        text: 'Tell them to wait until morning',
        hint: 'You need your beauty sleep',
        outcomes: [
          {
            weight: 50,
            description:
              'You show up in the morning, rested and ready. They survived a night in a holding cell and have a new perspective on life decisions. The friendship survives.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'They never fully forgive you for making them spend a night in jail. "Real friends show up at 3 AM." The passive-aggressive comments continue for months.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'decline',
        text: 'Tell them to call someone else',
        hint: 'Not your circus, not your monkeys',
        outcomes: [
          {
            weight: 40,
            description:
              'They find another way out. The friendship cools significantly. You see each other less and less.',
            effects: [
              { type: 'relationship_closeness', target: 'friend', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'Word gets around that you left your friend hanging. Your social circle shrinks noticeably. Apparently loyalty is a big deal to people. Who knew.',
            effects: [
              { type: 'relationship_closeness', target: 'friend', value: -25, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 26
  {
    id: 'rel_friend_betrays_secret',
    title: 'Loose Lips',
    description:
      'Your friend spilled a secret you told them in confidence — apparently "the grave" was three days.',
    category: 'relationship',
    probability: 0.05,
    cooldown: 10,
    conditions: [
      { type: 'hasRelationType', value: 'friend' },
      { type: 'minAge', value: 14 },
    ],
    choices: [
      {
        id: 'confront_friend',
        text: 'Confront them about it',
        hint: 'Clear the air',
        outcomes: [
          {
            weight: 40,
            description:
              'They\'re mortified and genuinely sorry. They didn\'t realize how serious it was. The apology feels real. You establish better boundaries.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              '"It just slipped out! Why are you making such a big deal?" They minimize your feelings and somehow make YOU feel dramatic. The trust crack deepens.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'distance_yourself',
        text: 'Quietly pull away from the friendship',
        hint: 'Slow fade',
        outcomes: [
          {
            weight: 50,
            description:
              'You stop sharing personal things with them. The friendship becomes surface-level. They don\'t even notice the change, which tells you everything.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -12, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'They notice you\'re pulling away and confront you. The resulting conversation is uncomfortable but leads to a more honest (if less deep) friendship.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 27
  {
    id: 'rel_friend_group_drama',
    title: 'Choose Your Side',
    description:
      'Your friend group has split into factions and both sides demand you pick a team.',
    category: 'relationship',
    probability: 0.05,
    cooldown: 10,
    conditions: [
      { type: 'hasRelationType', value: 'friend' },
      { type: 'minAge', value: 15 },
    ],
    choices: [
      {
        id: 'pick_a_side',
        text: 'Pick the side you agree with more',
        hint: 'Alliances have consequences',
        outcomes: [
          {
            weight: 50,
            description:
              'You chose correctly — your side "wins" the drama and the other group eventually comes back, humbled. Your loyalty is rewarded with stronger friendships.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your side loses. Half the group isn\'t speaking to you. You\'re invited to significantly fewer things now. Social life: damaged.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'mediate',
        text: 'Try to be the peacemaker',
        hint: 'Noble but exhausting',
        outcomes: [
          {
            weight: 40,
            description:
              'Your mediation skills would make the UN proud. You get both sides talking again. Everyone credits you with saving the group. Exhausting, but worth it.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: 12, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'Both sides decide the only thing they agree on is that you\'re being annoying. Congratulations — you\'ve unified them against you.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'walk_away_drama',
        text: 'Remove yourself from the drama entirely',
        hint: 'Peace is priceless',
        outcomes: [
          {
            weight: 60,
            description:
              'You spend a quiet weekend while everyone else fights. When the dust settles, both sides respect that you stayed out of it.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Your absence is interpreted as not caring about the group. "Must be nice to just check out when things get hard." You can\'t win.',
            effects: [
              { type: 'stat', target: 'happiness', value: -4, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 28
  {
    id: 'rel_friend_moving',
    title: 'The Going-Away Party',
    description:
      'Your best friend is moving across the country — you\'re happy for them and devastated at the same time.',
    category: 'relationship',
    probability: 0.03,
    cooldown: 20,
    oneTime: true,
    conditions: [
      { type: 'hasRelationType', value: 'friend' },
      { type: 'minAge', value: 20 },
    ],
    choices: [
      {
        id: 'throw_party',
        text: 'Throw them an amazing going-away party',
        hint: 'Celebrate the friendship',
        outcomes: [
          {
            weight: 70,
            description:
              'The party is legendary. Speeches are given, tears are shed, embarrassing stories are shared. You both promise to stay in touch. This time, you both mean it.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: 10, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The party is great, but saying goodbye at the door breaks you. You cry on the couch for an hour after everyone leaves. Your life is about to feel emptier.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: 8, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'avoid_goodbye',
        text: 'Avoid the goodbye — it\'s too painful',
        hint: 'Emotional self-preservation',
        outcomes: [
          {
            weight: 40,
            description:
              'You skip the farewell and immediately regret it. They text "missed you tonight" and the guilt is a physical weight on your chest.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'They understand. You were never good at goodbyes. You text them after they leave and promise to visit. You\'re already looking at flights.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 29
  {
    id: 'rel_friend_wedding',
    title: 'Best Man/Maid of Honor',
    description:
      'Your friend asked you to be in their wedding party — then you see the price tag.',
    category: 'relationship',
    probability: 0.04,
    cooldown: 16,
    conditions: [
      { type: 'hasRelationType', value: 'friend' },
      { type: 'minAge', value: 22 },
    ],
    choices: [
      {
        id: 'go_all_in',
        text: 'Go all out — spare no expense',
        hint: 'YOLO (your savings tho)',
        outcomes: [
          {
            weight: 60,
            description:
              'The bachelorette/bachelor weekend is epic. The wedding speech you give makes everyone cry. Your friend hugs you and whispers, "You\'re the best." Worth every penny.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: 15, operation: 'add' },
              { type: 'money', value: -3000, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'The bachelor/bachelorette party gets out of hand. Your speech goes viral for the wrong reasons. Your friend laughs it off but their spouse gives you a look that could curdle milk.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: 5, operation: 'add' },
              { type: 'money', value: -4000, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'budget_approach',
        text: 'Set a firm budget and stick to it',
        hint: 'Responsible but potentially awkward',
        outcomes: [
          {
            weight: 70,
            description:
              'You participate within your means and nobody judges you for it. Turns out most people appreciate someone who doesn\'t blow their rent money on a party.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: 8, operation: 'add' },
              { type: 'money', value: -800, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The bride/groom-to-be\'s other friend keeps making passive-aggressive comments about you being "cheap." Your friend defends you, but the sting lingers.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: 3, operation: 'add' },
              { type: 'money', value: -800, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 30
  {
    id: 'rel_friend_dates_ex',
    title: 'Of All People',
    description:
      'Your friend is dating your ex and broke the news over text.',
    category: 'relationship',
    probability: 0.03,
    cooldown: 20,
    conditions: [
      { type: 'hasRelationType', value: 'friend' },
      { type: 'minAge', value: 18 },
    ],
    choices: [
      {
        id: 'be_mature',
        text: 'Take the high road and wish them well',
        hint: 'Emotional Olympic gold',
        outcomes: [
          {
            weight: 40,
            description:
              'You handle it with grace that surprises even yourself. The friendship survives, though double dates are firmly off the table. Forever.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -5, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'You say you\'re fine. You\'re not fine. Every time they post a couple photo, something inside you dies a little. But you said you\'re fine, so you\'re committed to the bit.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -8, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'blow_up',
        text: 'Let them know exactly how you feel',
        hint: 'This will be dramatic',
        outcomes: [
          {
            weight: 50,
            description:
              'You express your hurt and they actually listen. They had no idea how much it would affect you. The friendship is strained but not broken.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The confrontation goes nuclear. You say things you can\'t take back. So do they. A longtime friendship ends over someone who\'s probably not worth it.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -30, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 31
  {
    id: 'rel_best_friend_fallout',
    title: 'The Friendship Breakup',
    description:
      'Unanswered texts, cancelled plans — your best friendship is slowly crumbling.',
    category: 'relationship',
    probability: 0.03,
    cooldown: 20,
    conditions: [
      { type: 'hasRelationType', value: 'friend' },
      { type: 'minAge', value: 16 },
    ],
    choices: [
      {
        id: 'have_the_talk',
        text: 'Have an honest conversation about it',
        hint: 'The friendship equivalent of couples therapy',
        outcomes: [
          {
            weight: 40,
            description:
              'The conversation is raw and uncomfortable. But you both acknowledge what\'s been happening and commit to doing better. The friendship finds new footing.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'The conversation reveals that you\'ve both grown in different directions. It\'s nobody\'s fault, which somehow makes it worse. You part as amicable strangers.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -20, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'let_it_fade',
        text: 'Let it fade naturally',
        hint: 'The silent ending',
        outcomes: [
          {
            weight: 50,
            description:
              'The friendship slowly becomes an acquaintanceship. You still like each other\'s posts. It\'s not dramatic — it\'s just life. And somehow that\'s sadder.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Months later, they reach out. "Hey, I miss you." Four words that undo months of distance. You grab coffee and it\'s like no time has passed.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: 5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 32
  {
    id: 'rel_friend_fwb',
    title: 'Blurred Lines',
    description:
      'Late-night hangouts, lingering eye contact — the "just friends" label is under serious strain.',
    category: 'relationship',
    probability: 0.04,
    cooldown: 16,
    conditions: [
      { type: 'hasRelationType', value: 'friend' },
      { type: 'minAge', value: 18 },
    ],
    choices: [
      {
        id: 'cross_the_line',
        text: 'Give in to the tension',
        hint: 'What\'s the worst that could happen?',
        outcomes: [
          {
            weight: 30,
            description:
              'It turns into something real. The friendship evolves into a genuine romance. All those years of friendship were just a really long first date.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: 20, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'It\'s fun for about two weeks, then everything gets awkward. You can\'t go back to being "just friends" because you know what each other looks like at breakfast.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'One of you catches feelings and the other doesn\'t. The resulting heartbreak is twice as bad because you also lost your best friend.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -20, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'keep_boundary',
        text: 'Maintain the friendship boundary',
        hint: 'Protect what you have',
        outcomes: [
          {
            weight: 60,
            description:
              'You have an honest conversation and agree to keep things platonic. It\'s a little awkward for a week, then everything goes back to normal. Crisis averted.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You set the boundary, but the tension never fully goes away. Every hug lasts a beat too long. You both know, and you both pretend you don\'t.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // ===========================================================
  //  DATING EVENTS (age 16+, no spouse)
  // ===========================================================

  // 33
  {
    id: 'rel_meet_at_party',
    title: 'Eyes Across the Room',
    description:
      'You lock eyes with a stranger at a party and your brain forgets how smiling works.',
    category: 'relationship',
    probability: 0.06,
    cooldown: 6,
    conditions: [
      { type: 'minAge', value: 16 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'go_talk',
        text: 'Walk over and introduce yourself',
        hint: 'Courage mode activated',
        outcomes: [
          {
            weight: 40,
            description:
              'You open with something charming (accidentally) and they laugh (genuinely). Numbers are exchanged. You float home on a cloud of dopamine.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'add_relationship', target: 'romantic', value: 'New romantic interest met at a party' },
            ],
          },
          {
            weight: 35,
            description:
              'The conversation is nice but there\'s no spark. You part ways amicably, both knowing you\'ll never call. Classic party interaction.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'You trip on the way over and spill your drink on them. In your defense, the floor was uneven. They don\'t care about your defense. Mortifying.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'stat', target: 'looks', value: -2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'wait_for_them',
        text: 'Play it cool and hope they come to you',
        hint: 'The mysterious approach',
        outcomes: [
          {
            weight: 30,
            description:
              'They walk over! Your "mysterious loner" vibe worked. Or they just needed to get past you to the bathroom. Nope — they\'re talking to you! This is happening!',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'add_relationship', target: 'romantic', value: 'Someone who approached you at a party' },
            ],
          },
          {
            weight: 70,
            description:
              'You spend the entire party leaning against a wall looking "mysterious" while they leave with someone else. Should have just said hi.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 34
  {
    id: 'rel_dating_app',
    title: 'Swipe Right on Destiny',
    description:
      'A dating app match with good photos, a witty bio, and complete sentences — might be too good to be true.',
    category: 'relationship',
    probability: 0.06,
    cooldown: 6,
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'meet_up',
        text: 'Suggest meeting up for coffee',
        hint: 'Low-stakes first date',
        outcomes: [
          {
            weight: 35,
            description:
              'They look like their photos (a miracle) and the conversation flows like you\'ve known each other for years. You schedule a second date before the coffee gets cold.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'add_relationship', target: 'romantic', value: 'A dating app match who turned out to be amazing' },
              { type: 'money', value: -30, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'They\'re nice but their photos were... optimistic. The conversation is pleasant enough. You both know there won\'t be a second date but you finish your lattes like civilized people.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'money', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'They spend the entire date talking about their ex, their therapist, and their complicated relationship with dairy. You excuse yourself to the bathroom and consider climbing out the window.',
            effects: [
              { type: 'stat', target: 'happiness', value: -6, operation: 'add' },
              { type: 'money', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'keep_texting',
        text: 'Keep the conversation digital for now',
        hint: 'Get to know them first',
        outcomes: [
          {
            weight: 50,
            description:
              'The texting is addictive. You stay up way too late exchanging messages. There\'s a real connection building here, pixel by pixel.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'After a week of promising texting, they ghost you mid-conversation. No explanation, no closure. Just silence. Welcome to modern dating.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 35
  {
    id: 'rel_blind_date',
    title: 'The Setup',
    description:
      'A friend set you up on a blind date — "You\'ll LOVE them, I promise!"',
    category: 'relationship',
    probability: 0.04,
    cooldown: 8,
    conditions: [
      { type: 'hasRelationType', value: 'friend' },
      { type: 'minAge', value: 18 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'show_up',
        text: 'Put on your best outfit and go',
        hint: 'Fortune favors the brave',
        outcomes: [
          {
            weight: 30,
            description:
              'Your friend was right! The date is charming, funny, and gets your sense of humor. You owe your friend a very nice thank-you gift.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: 5, operation: 'add' },
              { type: 'add_relationship', target: 'romantic', value: 'A blind date that actually worked out' },
              { type: 'money', value: -60, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'The date is perfectly fine. Average. Unremarkable. Like a Tuesday in human form. You\'ll probably never see them again.',
            effects: [
              { type: 'stat', target: 'happiness', value: -1, operation: 'add' },
              { type: 'money', value: -50, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'Within ten minutes they\'ve shown you their knife collection, mentioned their mother seven times, and asked if you believe in ghosts (they do, passionately). You\'re reassessing your friend\'s judgment.',
            effects: [
              { type: 'stat', target: 'happiness', value: -6, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -5, operation: 'add' },
              { type: 'money', value: -40, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'cancel_last_min',
        text: 'Cancel at the last minute',
        hint: 'The anxiety won',
        outcomes: [
          {
            weight: 50,
            description:
              'Your friend is annoyed but gets over it. You spend the evening at home and feel a mix of relief and regret.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The blind date messages your friend to say they were really looking forward to it. Your friend guilt-trips you for a week straight. Their disappointment is relentless.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 36
  {
    id: 'rel_speed_dating',
    title: 'Speed Dating Roulette',
    description:
      'You signed up for speed dating — twenty people, three minutes each, unlimited awkwardness.',
    category: 'relationship',
    probability: 0.03,
    cooldown: 12,
    conditions: [
      { type: 'minAge', value: 21 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'give_it_best',
        text: 'Put your best foot forward',
        hint: 'Speed-run romance',
        outcomes: [
          {
            weight: 30,
            description:
              'Seventeen duds and two maybes, but person number twenty makes you forget the other nineteen existed. You both circle each other\'s names so fast the pen rips the paper.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'add_relationship', target: 'romantic', value: 'Someone special from speed dating' },
              { type: 'money', value: -50, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Nobody clicks, but you have some genuinely interesting three-minute conversations. And the free appetizers were excellent.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
              { type: 'money', value: -50, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'One person cries during their three minutes with you. Another one tries to sell you insurance. Someone asks if you\'re "the one from the prophecy." Dating is a warzone.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'money', value: -50, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'treat_as_comedy',
        text: 'Treat it as a comedy experience',
        hint: 'Lower expectations = higher enjoyment',
        outcomes: [
          {
            weight: 60,
            description:
              'You go in with zero expectations and have a hilarious time. Your self-deprecating humor kills. You collect stories, not phone numbers. Best night out in ages.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'money', value: -50, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Your jokes accidentally charm someone who takes it seriously. Now you have a date you didn\'t actually want. The comedy has become the tragedy.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'money', value: -50, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 37
  {
    id: 'rel_crush_work_school',
    title: 'The Impossible Crush',
    description:
      'You have a devastating crush on someone you see every day — focus and productivity are gone.',
    category: 'relationship',
    probability: 0.06,
    cooldown: 8,
    conditions: [
      { type: 'minAge', value: 16 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'shoot_your_shot',
        text: 'Make a move before you lose your nerve',
        hint: 'Regret is worse than rejection... probably',
        outcomes: [
          {
            weight: 35,
            description:
              'They say yes! YES! You play it cool on the outside while your internal monologue is doing cartwheels. Best day ever.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'add_relationship', target: 'romantic', value: 'Your crush who said yes' },
            ],
          },
          {
            weight: 35,
            description:
              'They let you down gently. "I think you\'re great, but..." The "but" echoes in your head for weeks. You still have to see them every day. That\'s fun.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You trip over your words so badly that you accidentally ask them to "go out sometime... to the dentist." Your brain has betrayed you. They look confused. You don\'t recover.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'stat', target: 'looks', value: -1, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'admire_from_afar',
        text: 'Pine silently like a romantic poet',
        hint: 'Safe but torturous',
        outcomes: [
          {
            weight: 50,
            description:
              'The crush fades naturally over a few months. You never made a fool of yourself, but you also never took a chance. The great "what if" of your life continues.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The crush intensifies to an unbearable degree. You start finding excuses to be near them. Your friends are tired of hearing about it. You are a walking clich\u00e9.',
            effects: [
              { type: 'stat', target: 'happiness', value: -6, operation: 'add' },
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 38
  {
    id: 'rel_love_triangle',
    title: 'Love Triangle',
    description:
      'Two people are interested in you at the same time — someone\'s definitely getting hurt.',
    category: 'relationship',
    probability: 0.03,
    cooldown: 16,
    conditions: [
      { type: 'minAge', value: 17 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'choose_one',
        text: 'Follow your heart and choose one',
        hint: 'Someone will be disappointed',
        outcomes: [
          {
            weight: 50,
            description:
              'You make your choice and it feels right. The other person takes it with surprising grace. Your heart knows what it wants.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'add_relationship', target: 'romantic', value: 'The one you chose in the love triangle' },
            ],
          },
          {
            weight: 50,
            description:
              'You make your choice, but the person you didn\'t choose makes it very public and very dramatic. Social media becomes a battlefield. You chose love but got war.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
              { type: 'add_relationship', target: 'romantic', value: 'Your choice from a complicated situation' },
            ],
          },
        ],
      },
      {
        id: 'choose_neither',
        text: 'Walk away from both — it\'s too complicated',
        hint: 'Zero drama, maximum loneliness',
        outcomes: [
          {
            weight: 50,
            description:
              'You save yourself a lot of drama. Both people eventually move on. You\'re single but peaceful, and that\'s worth something.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The two people you rejected end up dating each other. You see them looking happy together everywhere. The universe has a cruel sense of humor.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // ===========================================================
  //  MARRIAGE & KIDS (spouse)
  // ===========================================================

  // 39
  {
    id: 'rel_baby_coming',
    title: 'Two Lines',
    description:
      'The pregnancy test shows two lines — unambiguous and life-changing.',
    category: 'relationship',
    probability: 0.03,
    oneTime: true,
    cooldown: 40,
    conditions: [
      { type: 'hasRelationType', value: 'spouse' },
      { type: 'minAge', value: 20 },
      { type: 'maxAge', value: 45 },
    ],
    choices: [
      {
        id: 'overjoyed',
        text: 'This is the best news ever!',
        hint: 'Embrace parenthood',
        outcomes: [
          {
            weight: 70,
            description:
              'The pregnancy goes well. Nine months of anticipation, preparation, and your spouse craving pickles at 3 AM. Then one day, a tiny human enters your life and nothing is ever the same. In the best way.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: 15, operation: 'add' },
              { type: 'add_relationship', target: 'child', value: 'Your newborn child' },
              { type: 'money', value: -5000, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The pregnancy has complications that scare you both. But you get through it together, and when the baby finally arrives healthy, the relief is overwhelming. You\'ve never felt love like this.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: 20, operation: 'add' },
              { type: 'add_relationship', target: 'child', value: 'Your precious newborn' },
              { type: 'money', value: -10000, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'terrified',
        text: 'Panic quietly on the inside',
        hint: 'Ready or not...',
        outcomes: [
          {
            weight: 60,
            description:
              'The panic fades and is replaced by a fierce protective love you didn\'t know you had. By the time the baby arrives, you\'re terrified but ready. Mostly terrified.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: 10, operation: 'add' },
              { type: 'add_relationship', target: 'child', value: 'Your newborn' },
              { type: 'money', value: -5000, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Your panic is more visible than you think. Your spouse notices and it leads to a tense few months. You eventually come around, but the early anxiety takes a toll on both of you.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: -8, operation: 'add' },
              { type: 'add_relationship', target: 'child', value: 'Your newborn' },
              { type: 'money', value: -5000, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 40
  {
    id: 'rel_parenting_disagreement',
    title: 'Parenting Wars',
    description:
      'You and your spouse disagree on parenting style — and the kid is playing you both like fiddles.',
    category: 'relationship',
    probability: 0.05,
    cooldown: 8,
    conditions: [
      { type: 'hasRelationType', value: 'spouse' },
      { type: 'hasRelationType', value: 'child' },
      { type: 'minAge', value: 25 },
    ],
    choices: [
      {
        id: 'present_united',
        text: 'Agree to present a united front',
        hint: 'Teamwork makes the dream work',
        outcomes: [
          {
            weight: 60,
            description:
              'You hash out a compromise behind closed doors and present a consistent approach to the kid. They\'re onto you, but it works. Parenting level: intermediate.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: 8, operation: 'add' },
              { type: 'relationship_closeness', target: 'child', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'The "united front" cracks when the kid throws a tantrum in public. You break rank and now your spouse is mad at you AND the kid is still screaming. Triple threat.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'my_way',
        text: 'Insist your approach is right',
        hint: 'Confident but stubborn',
        outcomes: [
          {
            weight: 30,
            description:
              'Your approach actually works this time. Your spouse grudgingly admits you might have a point. The sweet taste of parenting victory is rare — savor it.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description:
              'Your stubbornness creates a rift. The kid starts playing the "other parent said I could" card and you\'re both losing. Congratulations — the five-year-old is winning.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 41
  {
    id: 'rel_marriage_counseling',
    title: 'The Therapist\'s Couch',
    description:
      'Someone suggested marriage counseling — either a great sign or the beginning of the end.',
    category: 'relationship',
    probability: 0.03,
    cooldown: 16,
    conditions: [
      { type: 'hasRelationType', value: 'spouse' },
      { type: 'minAge', value: 25 },
    ],
    choices: [
      {
        id: 'commit_therapy',
        text: 'Commit fully to the process',
        hint: 'Vulnerability is strength',
        outcomes: [
          {
            weight: 50,
            description:
              'The therapist is good. Like, scary good. They untangle resentments you didn\'t even know you had. It\'s painful but it works. Slowly, the marriage starts to heal.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: 15, operation: 'add' },
              { type: 'money', value: -3000, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Therapy reveals issues deeper than either of you expected. The sessions are exhausting and emotionally draining. But at least you\'re talking.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: 5, operation: 'add' },
              { type: 'money', value: -3000, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'go_through_motions',
        text: 'Show up but don\'t really engage',
        hint: 'Physical presence, emotional absence',
        outcomes: [
          {
            weight: 30,
            description:
              'The therapist calls you out on it. Something they say pierces through your walls and you actually start opening up. Even half-hearted therapy is better than none.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: 5, operation: 'add' },
              { type: 'money', value: -3000, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description:
              'Your spouse can tell you\'re not trying. The therapist can definitely tell. The sessions become a weekly ritual of disappointment. Money well wasted.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: -8, operation: 'add' },
              { type: 'money', value: -3000, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 42
  {
    id: 'rel_career_conflict',
    title: 'Whose Career Wins?',
    description:
      'Both your careers are at a critical point — someone needs to compromise.',
    category: 'relationship',
    probability: 0.04,
    cooldown: 12,
    conditions: [
      { type: 'hasRelationType', value: 'spouse' },
      { type: 'hasCareerId', value: 'any' },
      { type: 'minAge', value: 25 },
    ],
    choices: [
      {
        id: 'prioritize_yours',
        text: 'Advocate for your career\'s importance',
        hint: 'Your dreams matter too',
        outcomes: [
          {
            weight: 50,
            description:
              'Your spouse supports your decision, even though it means they turn down the promotion. They say they\'re fine. You choose to believe them.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The argument about "who has the better job" gets ugly fast. Salary numbers are thrown around like weapons. Nobody wins a fight about who earns more.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: -12, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'support_spouse',
        text: 'Step back and support their career',
        hint: 'Sacrifice for the partnership',
        outcomes: [
          {
            weight: 50,
            description:
              'Your spouse thrives and the extra income helps the whole family. They make sure to show their appreciation. The sacrifice feels worth it.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: 10, operation: 'add' },
              { type: 'career_performance', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You step back from your career and quietly resent it. Your spouse doesn\'t notice the resentment building. They\'re too busy with their promotion.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 43
  {
    id: 'rel_empty_nest',
    title: 'The Quiet House',
    description:
      'Your last child moved out — the house is quiet and you need to rediscover each other.',
    category: 'relationship',
    probability: 0.03,
    oneTime: true,
    cooldown: 40,
    conditions: [
      { type: 'hasRelationType', value: 'spouse' },
      { type: 'hasRelationType', value: 'child' },
      { type: 'minAge', value: 45 },
    ],
    choices: [
      {
        id: 'reconnect',
        text: 'Use this as a chance to reconnect',
        hint: 'Second honeymoon energy',
        outcomes: [
          {
            weight: 60,
            description:
              'You rediscover each other. Date nights, hobbies together, sleeping in on weekends. It\'s like falling in love again, but with someone who already knows your worst habits and chose to stay anyway.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You try, but realize that without the kids as a buffer, you don\'t have much in common anymore. The silence in the house feels different than you expected. Heavier.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'pursue_personal',
        text: 'Finally pursue your own interests',
        hint: 'Me time, at last',
        outcomes: [
          {
            weight: 50,
            description:
              'You pick up hobbies, take classes, and start living for yourself. Your spouse does the same. You become more interesting people, both separately and together.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your "personal interests" become an excuse to avoid dealing with your marriage. You\'re never home. Your spouse starts to feel like they lost you along with the kids.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // ===========================================================
  //  ADDITIONAL EVENTS (to reach 55+)
  // ===========================================================

  // 44
  {
    id: 'rel_surprise_pregnancy',
    title: 'Surprise!',
    description:
      'A pregnancy test delivers news that was NOT in the plan.',
    category: 'relationship',
    probability: 0.02,
    oneTime: true,
    cooldown: 40,
    conditions: [
      { type: 'hasRelationType', value: 'romantic' },
      { type: 'minAge', value: 18 },
      { type: 'maxAge', value: 42 },
    ],
    choices: [
      {
        id: 'embrace_surprise',
        text: 'Roll with it — life has other plans',
        hint: 'Unplanned doesn\'t mean unwanted',
        outcomes: [
          {
            weight: 60,
            description:
              'The shock wears off and is replaced by a growing excitement. You adjust your plans, tighten your budget, and prepare for the beautiful chaos of parenthood.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 12, operation: 'add' },
              { type: 'add_relationship', target: 'child', value: 'Your unexpected but loved child' },
              { type: 'money', value: -4000, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'The adjustment is rocky. Finances are tight, sleep becomes a distant memory, and your relationship is tested in ways you never expected. But that tiny face makes it all bearable.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 5, operation: 'add' },
              { type: 'add_relationship', target: 'child', value: 'Your unplanned bundle of joy' },
              { type: 'money', value: -6000, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'panic_about_it',
        text: 'Spiral into anxiety about the future',
        hint: 'Rational fears, irrational volume',
        outcomes: [
          {
            weight: 50,
            description:
              'The panic gives way to planning. You channel anxiety into spreadsheets. Financial plans. Baby-proofing research. By the time the baby arrives, you\'re the most prepared parent alive.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
              { type: 'add_relationship', target: 'child', value: 'Your meticulously planned-for surprise baby' },
              { type: 'money', value: -5000, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your visible panic strains the relationship. Your partner needs support and you\'re too busy hyperventilating into a paper bag to provide it. It takes months to find your footing.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -10, operation: 'add' },
              { type: 'add_relationship', target: 'child', value: 'Your newborn' },
              { type: 'money', value: -5000, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 45
  {
    id: 'rel_partner_promotion',
    title: 'Living in Their Shadow',
    description:
      'Your partner landed a massive promotion that dwarfs your salary.',
    category: 'relationship',
    probability: 0.04,
    cooldown: 12,
    conditions: [
      { type: 'hasRelationType', value: 'romantic' },
      { type: 'minAge', value: 24 },
    ],
    choices: [
      {
        id: 'genuinely_celebrate',
        text: 'Be genuinely happy for them',
        hint: 'Their success isn\'t your failure',
        outcomes: [
          {
            weight: 70,
            description:
              'Your support means the world to them. They celebrate by taking you on a vacation. Having a successful partner isn\'t so bad when they share the wealth.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You\'re genuinely happy, but the comparison creeps in during quiet moments. Your career feels small next to theirs. The envy shames you, but it\'s there.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'feel_jealous',
        text: 'Let the jealousy simmer',
        hint: 'Comparison is the thief of joy',
        outcomes: [
          {
            weight: 50,
            description:
              'The jealousy motivates you to work harder on your own career. You channel the competitive energy productively. Sometimes envy is just misdirected ambition.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The jealousy turns toxic. You make snide comments about their job. They start hiding good news from you. The power imbalance poisons the relationship.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -12, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 46
  {
    id: 'rel_toxic_in_law',
    title: 'The In-Law Problem',
    description:
      'Your spouse\'s parent is visiting for two weeks and has opinions about everything you do.',
    category: 'relationship',
    probability: 0.04,
    cooldown: 10,
    conditions: [
      { type: 'hasRelationType', value: 'spouse' },
      { type: 'minAge', value: 24 },
    ],
    choices: [
      {
        id: 'kill_with_kindness',
        text: 'Be aggressively nice',
        hint: 'They can\'t complain if you\'re perfect',
        outcomes: [
          {
            weight: 40,
            description:
              'Your unrelenting niceness wears them down. By week two, they actually compliment your cooking. It\'s a small victory, but you\'ll take it.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: 8, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'They see through your performance and double down on the criticism. "You don\'t have to try so hard, dear." Said with a smile that could cut glass.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'set_boundaries',
        text: 'Ask your spouse to set boundaries',
        hint: 'Their parent, their problem',
        outcomes: [
          {
            weight: 50,
            description:
              'Your spouse steps up and has a firm conversation with their parent. The criticism drops by 80%. Your marriage strengthens in the process.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              '"That\'s just how they are, you need to be more understanding." Your spouse sides with their parent. You have never felt more alone in your own house.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'relationship_closeness', target: 'spouse', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 47
  {
    id: 'rel_first_big_fight',
    title: 'The First Big Fight',
    description:
      'A fight about dishes snowballs into every grievance since date one.',
    category: 'relationship',
    probability: 0.05,
    cooldown: 10,
    conditions: [
      { type: 'hasRelationType', value: 'romantic' },
      { type: 'minAge', value: 17 },
    ],
    choices: [
      {
        id: 'cool_down',
        text: 'Take a breather before it escalates',
        hint: 'De-escalation skills',
        outcomes: [
          {
            weight: 60,
            description:
              'You step away, calm down, and come back with a rational perspective. The conversation that follows is productive. You feel closer after working through it.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You try to take space, but they follow you. "WE\'RE NOT DONE TALKING!" Turns out you can\'t de-escalate when both people have to agree to it.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'say_everything',
        text: 'Let it all out — every stored-up frustration',
        hint: 'Emotional volcano',
        outcomes: [
          {
            weight: 30,
            description:
              'The volcanic eruption is ugly, but everything that needed to be said gets said. Exhausted and teary, you both apologize and order takeout. Weirdly cathartic.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description:
              'You say something you can\'t unsay. The words hang in the air like a grenade with the pin pulled. There\'s a before this fight and an after, and the after is much colder.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -15, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 48
  {
    id: 'rel_social_media_drama',
    title: 'Posted Without Permission',
    description:
      'Your partner posted an unflattering photo of you to social media and it has 200 likes.',
    category: 'relationship',
    probability: 0.05,
    cooldown: 8,
    conditions: [
      { type: 'hasRelationType', value: 'romantic' },
      { type: 'minAge', value: 16 },
    ],
    choices: [
      {
        id: 'laugh_it_off',
        text: 'Laugh it off and own it',
        hint: 'Self-deprecating humor is hot',
        outcomes: [
          {
            weight: 70,
            description:
              'You comment something hilarious underneath it and the post goes semi-viral. Your self-awareness is inspiring. People love someone who can laugh at themselves.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You try to laugh it off, but inside you\'re dying. The photo lives in your head rent-free. Every time your phone buzzes, you wonder if it\'s another person seeing THAT photo.',
            effects: [
              { type: 'stat', target: 'happiness', value: -4, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'demand_removal',
        text: 'Demand they take it down immediately',
        hint: 'Your face, your rules',
        outcomes: [
          {
            weight: 50,
            description:
              'They take it down with a pouty "Fine." They clearly think you\'re overreacting, but at least the evidence is destroyed. Mostly. Screenshots exist.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              '"It\'s just a joke, lighten up!" They refuse to take it down. You post a revenge photo. The social media cold war has begun.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 49
  {
    id: 'rel_reconnect_parent',
    title: 'The Olive Branch',
    description:
      'After years of distance, your parent texts: "I\'d like to talk, if you\'re open to it."',
    category: 'relationship',
    probability: 0.03,
    cooldown: 20,
    conditions: [
      { type: 'hasRelationType', value: 'parent' },
      { type: 'minAge', value: 22 },
    ],
    choices: [
      {
        id: 'accept_olive_branch',
        text: 'Agree to meet and talk',
        hint: 'Healing is possible',
        outcomes: [
          {
            weight: 50,
            description:
              'The conversation is hard, raw, and long overdue. Neither of you is perfect, but you both want to try. The relationship begins a slow, fragile repair.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: 20, operation: 'add' },
              { type: 'stat', target: 'health', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You meet, but old patterns resurface within minutes. The same arguments, the same pain. You leave with a headache and the realization that some wounds don\'t close easily.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: -5, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'protect_yourself',
        text: 'Decline — some bridges are burned for a reason',
        hint: 'Self-preservation',
        outcomes: [
          {
            weight: 50,
            description:
              'You set a clear boundary and feel empowered by the choice. Your peace is worth more than their comfort. The guilt is there, but it fades.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'relationship_closeness', target: 'parent', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The "no" sits heavy in your chest. You wonder if you\'ll regret this. At 3 AM, you almost text them back. You don\'t, but the almost keeps you up.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 50
  {
    id: 'rel_sibling_bonding',
    title: 'Unexpected Sibling Moment',
    description:
      'You and your sibling end up stuck together with nothing to do but actually talk.',
    category: 'relationship',
    probability: 0.04,
    cooldown: 12,
    conditions: [
      { type: 'hasRelationType', value: 'sibling' },
      { type: 'minAge', value: 15 },
    ],
    choices: [
      {
        id: 'open_up',
        text: 'Open up and really talk',
        hint: 'Vulnerability with your sibling',
        outcomes: [
          {
            weight: 60,
            description:
              'You share things you\'ve never told anyone. They share things back. It turns out you\'ve both been struggling with the same family stuff from different angles. You laugh, you cry, and for the first time in ages, you feel like a team.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'relationship_closeness', target: 'sibling', value: 20, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'The deep conversation is going well until they bring up something from childhood that they remember very differently from you. An old wound reopens.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'sibling', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'keep_it_light',
        text: 'Keep things light and fun',
        hint: 'Laughter is its own bonding',
        outcomes: [
          {
            weight: 70,
            description:
              'You trade inside jokes and embarrassing family memories. The laughter is medicine. You make plans to hang out more often. This time, you actually will.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'relationship_closeness', target: 'sibling', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The light conversation is fine, but there\'s an unspoken heaviness in the room that both of you are politely ignoring. A missed opportunity for something deeper.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'relationship_closeness', target: 'sibling', value: 5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 51
  {
    id: 'rel_partner_depression',
    title: 'The Weight They Carry',
    description:
      'Your partner has gone quiet lately — less laughter, more "I\'m fine" that clearly isn\'t.',
    category: 'relationship',
    probability: 0.03,
    cooldown: 16,
    conditions: [
      { type: 'hasRelationType', value: 'romantic' },
      { type: 'minAge', value: 18 },
    ],
    choices: [
      {
        id: 'be_supportive',
        text: 'Be patient and gently supportive',
        hint: 'Show up without fixing',
        outcomes: [
          {
            weight: 60,
            description:
              'You don\'t try to fix them — you just show up. Every day. With tea, or silence, or a hand to hold. Slowly, they start to come back. They tell you later that your steadiness saved them.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 15, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'It takes a toll on you too. Being someone\'s anchor is exhausting when you\'re also trying to stay afloat. You push through, but the caregiver fatigue is real.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'suggest_help',
        text: 'Suggest they talk to a professional',
        hint: 'Point them toward help',
        outcomes: [
          {
            weight: 50,
            description:
              'They\'re initially defensive, but eventually agree to see someone. The therapist helps. Your partner starts to find their way back. The relationship survives and deepens.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 10, operation: 'add' },
              { type: 'money', value: -1500, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              '"You think I\'m crazy?" The suggestion backfires and they shut you out even more. The gap between you widens. You\'re trying to help someone who won\'t let you.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 52
  {
    id: 'rel_double_date',
    title: 'The Double Date',
    description:
      'Your friend insists on a double date so you can meet their "amazing" new partner.',
    category: 'relationship',
    probability: 0.05,
    cooldown: 8,
    conditions: [
      { type: 'hasRelationType', value: 'friend' },
      { type: 'hasRelationType', value: 'romantic' },
      { type: 'minAge', value: 20 },
    ],
    choices: [
      {
        id: 'be_social',
        text: 'Put your game face on',
        hint: 'Socializing is a team sport',
        outcomes: [
          {
            weight: 50,
            description:
              'The evening is actually wonderful. Your friend\'s partner is great, the conversation flows, and the four of you make plans to do it again. A rare social success.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: 8, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 5, operation: 'add' },
              { type: 'money', value: -100, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'Your friend\'s partner is insufferable. They one-up every story and touch your friend possessively. Your partner keeps kicking you under the table to stop making faces.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -3, operation: 'add' },
              { type: 'money', value: -100, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'In the car home, your partner says "I\'m so glad we\'re not like them." You dissect the evening for an hour. It was terrible, but bonding over shared judgment is relationship glue.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 5, operation: 'add' },
              { type: 'money', value: -100, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'bail_early',
        text: 'Make an excuse to leave early',
        hint: '"Something came up"',
        outcomes: [
          {
            weight: 50,
            description:
              'Your "emergency" fools nobody, but your friend is too polite to call you out. You spend the rest of the evening on the couch in pajamas. No regrets.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your friend is genuinely hurt. They put effort into the evening and you bailed. The trust takes a small hit.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 53
  {
    id: 'rel_child_first_day',
    title: 'First Day of School',
    description:
      'Your child clings to your leg at the school entrance — "Please don\'t make me go."',
    category: 'relationship',
    probability: 0.04,
    oneTime: true,
    cooldown: 40,
    conditions: [
      { type: 'hasRelationType', value: 'child' },
      { type: 'minAge', value: 25 },
    ],
    choices: [
      {
        id: 'be_brave',
        text: 'Be strong for them (fall apart in the car later)',
        hint: 'Parenting means hiding your tears',
        outcomes: [
          {
            weight: 70,
            description:
              'You gently pry them off your leg, give them a brave smile, and walk away. You cry the entire drive home. They come back beaming, full of stories. They made a friend! You\'re so proud you might explode.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'relationship_closeness', target: 'child', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'They have a rough first day and come home subdued. The guilt of leaving them there gnaws at you all night. They adjust eventually, but that first day haunts you.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'child', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'stay_longer',
        text: 'Stay at the school until they\'re comfortable',
        hint: 'Helicopter parent energy',
        outcomes: [
          {
            weight: 40,
            description:
              'You stay until they find a friend and start playing. The teacher gives you a look that says "please leave now" but your child is smiling. Mission accomplished.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'relationship_closeness', target: 'child', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'The teacher firmly asks you to leave because you\'re "disrupting the settling-in process." Your child watches you get gently escorted out. Mortifying for everyone involved.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'relationship_closeness', target: 'child', value: 5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 54
  {
    id: 'rel_romantic_road_trip',
    title: 'The Spontaneous Road Trip',
    description:
      'Your partner wakes you at 5 AM — "Let\'s just drive somewhere."',
    category: 'relationship',
    probability: 0.04,
    cooldown: 10,
    conditions: [
      { type: 'hasRelationType', value: 'romantic' },
      { type: 'minAge', value: 18 },
    ],
    choices: [
      {
        id: 'go_for_it',
        text: 'Say yes before your brain wakes up',
        hint: 'Be spontaneous for once',
        outcomes: [
          {
            weight: 60,
            description:
              'The best weekend of your life. A small-town diner with the best pie you\'ve ever had. A sunset that makes you both go quiet. Falling asleep in the car laughing about nothing.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 12, operation: 'add' },
              { type: 'money', value: -400, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'The car breaks down in the middle of nowhere, you argue about directions, and you eat gas station food for two meals. But weirdly, you\'ll remember this trip fondly.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: 5, operation: 'add' },
              { type: 'money', value: -800, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'go_back_sleep',
        text: '"It\'s 5 AM. Go back to sleep."',
        hint: 'Reasonable but boring',
        outcomes: [
          {
            weight: 50,
            description:
              'They\'re disappointed but you sleep until noon. Sometimes self-care is choosing sleep over romance. You feel rested and unromantic.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'stat', target: 'health', value: 3, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'They go without you. Their Instagram posts from the trip are infuriatingly good. You could have been in that photo at sunset.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'romantic', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // 55
  {
    id: 'rel_friend_success',
    title: 'Their Big Break',
    description:
      'Your friend just achieved something incredible and everyone\'s celebrating them — you\'re happy, and also something else.',
    category: 'relationship',
    probability: 0.04,
    cooldown: 10,
    conditions: [
      { type: 'hasRelationType', value: 'friend' },
      { type: 'minAge', value: 20 },
    ],
    choices: [
      {
        id: 'celebrate_friend',
        text: 'Celebrate them wholeheartedly',
        hint: 'Be the friend you\'d want',
        outcomes: [
          {
            weight: 70,
            description:
              'You throw yourself into celebrating their win. Your genuine joy strengthens the friendship. They remember who was truly happy for them when things got big.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: 10, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You celebrate publicly but privately wonder why good things happen to everyone but you. The smile is real; the envy underneath it is also real.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'pull_away',
        text: 'Create some distance until the envy passes',
        hint: 'Honest but isolating',
        outcomes: [
          {
            weight: 50,
            description:
              'The space helps. You process your feelings, recognize the envy for what it is, and come back as a better friend. Growth isn\'t always pretty.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'They notice your absence during their biggest moment. "I thought you\'d be happy for me." The hurt in their voice makes you feel about two inches tall.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'relationship_closeness', target: 'friend', value: -12, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },
];
