// ============================================================
// ThisLife — Crime Events
// ============================================================

import { GameEvent } from '../../types/events';

export const CRIME_EVENTS: GameEvent[] = [

  // ============================================================
  // PETTY CRIME (age 13+)
  // ============================================================

  {
    id: 'crime_shoplift_convenience',
    title: 'Five-Finger Discount',
    description: 'The cashier is distracted and a candy bar is right there.',
    category: 'crime',
    probability: 0.12,
    minAge: 13,
    maxAge: 25,
    cooldown: 8,
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'shoplift_do_it',
        text: 'Pocket it',
        hint: 'Low risk, low reward',
        outcomes: [
          {
            weight: 70,
            description: 'Smooth as butter. The cashier never looked up. You feel like a criminal mastermind over $1.50 of chocolate.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
              { type: 'add_trait', value: 'sticky_fingers' },
            ],
          },
          {
            weight: 30,
            description: 'The cashier looks up at exactly the wrong moment. "HEY! I SAW THAT!"',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
              { type: 'money', value: -50, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'shoplift_pass',
        text: 'Nah, not worth it',
        outcomes: [
          {
            weight: 100,
            description: 'You pay like a functioning member of society. Heroism is thankless.',
            effects: [
              { type: 'stat', target: 'happiness', value: 1, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_shoplift_electronics',
    title: 'Hot Gadgets',
    description: 'A display phone has a flimsy anti-theft cable.',
    category: 'crime',
    probability: 0.08,
    minAge: 15,
    cooldown: 12,
    conditions: [
      { type: 'minAge', value: 15 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'shoplift_phone_grab',
        text: 'Yank it and bolt',
        hint: 'Higher reward, higher risk',
        outcomes: [
          {
            weight: 40,
            description: 'The cable snaps. You power-walk out $800 richer. Your heart is pounding.',
            effects: [
              { type: 'money', value: 800, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'An alarm screams. A loss-prevention guy the size of a fridge materializes. Police are called.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'The cable holds. You\'re standing there tugging like a dog with a chew toy while a sales associate stares.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'shoplift_phone_pass',
        text: 'Walk away. Not worth a felony.',
        outcomes: [
          {
            weight: 100,
            description: 'You admire the phone like a normal person and leave.',
            effects: [],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_found_wallet',
    title: 'Finders Keepers?',
    description: 'A wallet on the ground with $300 cash and credit cards.',
    category: 'crime',
    probability: 0.1,
    minAge: 13,
    cooldown: 16,
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'wallet_keep',
        text: 'Keep the cash, toss the wallet',
        hint: 'Quick money, guilty conscience',
        outcomes: [
          {
            weight: 80,
            description: '$300 richer. You toss the wallet and walk away.',
            effects: [
              { type: 'money', value: 300, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'You pocket the cash under a security camera. The wallet belonged to a local judge. A cop knocks on your door.',
            effects: [
              { type: 'money', value: -200, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'wallet_return',
        text: 'Return it',
        outcomes: [
          {
            weight: 60,
            description: 'The owner gives you $50 as a reward. $250 less than you would\'ve gotten, but you can sleep at night.',
            effects: [
              { type: 'money', value: 50, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'The owner snatches it, checks the cash, glares at you, and walks away without a word.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'wallet_use_cards',
        text: 'Keep cash AND try the cards',
        hint: 'Greedy',
        outcomes: [
          {
            weight: 30,
            description: 'You go on a mini spree before the cards get cancelled. Total haul: $1,200.',
            effects: [
              { type: 'money', value: 1200, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description: 'Card declined on your first purchase. You are very clearly not a "Theodore Pemberton III." Police arrive fast.',
            effects: [
              { type: 'money', value: -500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_vandalism',
    title: 'The Art of Destruction',
    description: 'Your friend has spray paint and an empty wall.',
    category: 'crime',
    probability: 0.1,
    minAge: 13,
    maxAge: 22,
    cooldown: 8,
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'vandalism_tag',
        text: 'Go full Banksy',
        outcomes: [
          {
            weight: 55,
            description: 'You create a masterpiece. Or at least a legible name. You disappear into the night like delinquents.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'A patrol car rounds the corner mid-spray. You only got the letter "S" before the sirens hit.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -200, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 15,
            description: 'You accidentally spray yourself in the face. The wall remains untouched. Your dignity does not.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'vandalism_decline',
        text: 'Hard pass',
        outcomes: [
          {
            weight: 100,
            description: 'You decline. Your friend misspells their own name on the wall. Good choice.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_sell_test_answers',
    title: 'Academic Entrepreneur',
    description: 'You got the answer key for next week\'s exam.',
    category: 'crime',
    probability: 0.09,
    minAge: 13,
    maxAge: 22,
    cooldown: 8,
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
      { type: 'minStat', value: 40, stat: 'smarts' },
    ],
    choices: [
      {
        id: 'sell_answers_yes',
        text: 'Sell copies at $20 each',
        outcomes: [
          {
            weight: 50,
            description: 'You sell 15 copies. $300. You\'re the Wolf of Algebra Class.',
            effects: [
              { type: 'money', value: 300, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'One customer gets a perfect score when he normally writes "idk." The investigation leads to you.',
            effects: [
              { type: 'money', value: 100, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -5, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'The key was for last year\'s version. Everyone fails. An angry mob of teenagers is scarier than any cop.',
            effects: [
              { type: 'money', value: -100, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'sell_answers_no',
        text: 'Destroy the answers',
        outcomes: [
          {
            weight: 100,
            description: 'You take the exam honestly. B-. It feels earned.',
            effects: [
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_fake_id',
    title: 'Identity Crisis',
    description: 'A guy offers you a fake ID for $100.',
    category: 'crime',
    probability: 0.08,
    minAge: 15,
    maxAge: 20,
    oneTime: true,
    conditions: [
      { type: 'minAge', value: 15 },
      { type: 'maxAge', value: 20 },
      { type: 'notInPrison', value: true },
      { type: 'minMoney', value: 100 },
    ],
    choices: [
      {
        id: 'fake_id_buy',
        text: 'Pay up. Derek has places to be.',
        outcomes: [
          {
            weight: 50,
            description: 'The ID looks decent. You are now Derek. Derek gets into bars.',
            effects: [
              { type: 'money', value: -100, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'add_trait', value: 'fake_id' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'The ID looks like it was made in Microsoft Paint. The bouncer snaps it in half.',
            effects: [
              { type: 'money', value: -100, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'The "ID guy" takes your $100 and ghosts you. Welcome to the criminal underworld.',
            effects: [
              { type: 'money', value: -100, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'fake_id_decline',
        text: 'Pass. Fine being your actual age.',
        outcomes: [
          {
            weight: 100,
            description: 'You decline. Your friends party without Derek.',
            effects: [],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_scam_tourists',
    title: 'Tourist Trap',
    description: 'A bus of gullible tourists just arrived with cash to burn.',
    category: 'crime',
    probability: 0.07,
    minAge: 14,
    cooldown: 12,
    conditions: [
      { type: 'minAge', value: 14 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'scam_fake_tour',
        text: 'Sell fake tour tickets',
        outcomes: [
          {
            weight: 55,
            description: 'You sell eight tickets to a nonexistent "haunted history tour." $400 for twenty minutes of improv.',
            effects: [
              { type: 'money', value: 400, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'One tourist is an off-duty cop. He lectures you so loudly that everyone within 200 feet knows your crime.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'The tourists call the cops. Security footage traces it back to you.',
            effects: [
              { type: 'money', value: -300, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'scam_pickpocket',
        text: 'Go for the wallets',
        hint: 'Riskier but more direct',
        outcomes: [
          {
            weight: 35,
            description: 'Smooth hands. You palm a wallet with $200 while they pose for a group shot.',
            effects: [
              { type: 'money', value: 200, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 65,
            description: 'You fumble the wallet. The tourist — a retired wrestler — grabs your arm and doesn\'t let go.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'scam_help',
        text: 'Just take the photo and be nice',
        outcomes: [
          {
            weight: 100,
            description: 'You take a great photo. They tip you $10 and say you\'ve "restored their faith in youth."',
            effects: [
              { type: 'money', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_dine_and_dash',
    title: 'The Check, Please... Never',
    description: 'You just ate an $85 meal and your wallet is empty.',
    category: 'crime',
    probability: 0.08,
    minAge: 14,
    cooldown: 10,
    conditions: [
      { type: 'minAge', value: 14 },
      { type: 'notInPrison', value: true },
      { type: 'maxMoney', value: 200 },
    ],
    choices: [
      {
        id: 'dine_dash_run',
        text: 'Bathroom window escape',
        outcomes: [
          {
            weight: 45,
            description: 'You squeeze through and sprint into the night. Free dinner. You can never eat here again.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'You get stuck halfway. A busboy finds you dangling. Kitchen staff takes photos. You pay double.',
            effects: [
              { type: 'money', value: -170, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'You land next to the owner on a smoke break. Awkward eye contact. Cops are called.',
            effects: [
              { type: 'money', value: -250, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'dine_dash_front_door',
        text: 'Walk out the front door confidently',
        outcomes: [
          {
            weight: 40,
            description: 'Pure audacity. You wave to the waiter and stride out. Nobody stops the person who looks like they belong.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'reputation', value: -4, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'The hostess stops you. "Sir, your check?" Your poker face crumbles. You slink back to the table.',
            effects: [
              { type: 'money', value: -85, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'dine_dash_honest',
        text: 'Explain and offer to wash dishes',
        outcomes: [
          {
            weight: 100,
            description: 'Three hours of dish duty. Pruny hands, bruised dignity. But nobody called the cops.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // SERIOUS CRIME (age 16+)
  // ============================================================

  {
    id: 'crime_drug_deal',
    title: 'Pharmaceutical Entrepreneur',
    description: 'A sketchy acquaintance needs someone to move a duffel bag of product.',
    category: 'crime',
    probability: 0.08,
    minAge: 16,
    cooldown: 8,
    conditions: [
      { type: 'minAge', value: 16 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'drug_deal_accept',
        text: 'Start selling',
        hint: 'Big money, big consequences',
        outcomes: [
          {
            weight: 40,
            description: 'You move the entire supply in two weeks. $2,000. Your mother would not be proud.',
            effects: [
              { type: 'money', value: 2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'add_trait', value: 'street_smart' },
            ],
          },
          {
            weight: 30,
            description: 'You sell to an undercover cop. Three patrol cars and a helicopter for a duffel bag of weed.',
            effects: [
              { type: 'money', value: -1000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -30, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'prison', value: 4, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'A rival dealer sends three large men. You lose the product and gain several bruises.',
            effects: [
              { type: 'stat', target: 'health', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'drug_deal_decline',
        text: 'No thanks',
        outcomes: [
          {
            weight: 80,
            description: 'You walk away. You sleep well that night.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'He tells everyone you\'re a snitch. You absolutely are not, but try explaining that.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_break_and_enter',
    title: 'Window Shopping (Literally)',
    description: 'A dark, empty house in a wealthy neighborhood. Window open.',
    category: 'crime',
    probability: 0.06,
    minAge: 16,
    cooldown: 12,
    conditions: [
      { type: 'minAge', value: 16 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'break_in_go',
        text: 'Climb through the window',
        hint: 'Serious crime, serious time',
        outcomes: [
          {
            weight: 30,
            description: 'Electronics, jewelry, cash. Total haul: $3,000. You leave no trace.',
            effects: [
              { type: 'money', value: 3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'The owners have a Rottweiler named Brutus who was sleeping in the living room. He\'s awake now.',
            effects: [
              { type: 'stat', target: 'health', value: -25, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'Silent alarm. Police arrive in six minutes. You\'re arrested holding an IKEA vase you thought was expensive.',
            effects: [
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'prison', value: 6, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'You trip over a cat, crash into a shelf of figurines, and set off every car alarm on the street.',
            effects: [
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'break_in_skip',
        text: 'Keep walking',
        outcomes: [
          {
            weight: 100,
            description: 'A neighbor gives you a suspicious look. You wave and speed-walk home.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_car_theft',
    title: 'Grand Theft Auto',
    description: 'A luxury car sits running with the keys in the ignition.',
    category: 'crime',
    probability: 0.06,
    minAge: 16,
    cooldown: 16,
    conditions: [
      { type: 'minAge', value: 16 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'car_steal',
        text: 'Hop in and floor it',
        hint: 'Felony territory',
        outcomes: [
          {
            weight: 25,
            description: 'You sell it to a chop shop for $5,000. A fraction of its value, but you didn\'t pay for it.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'GPS tracking, OnStar, helicopter. The chase lasts eleven minutes. The mugshot lasts forever.',
            effects: [
              { type: 'stat', target: 'happiness', value: -30, operation: 'add' },
              { type: 'reputation', value: -25, operation: 'add' },
              { type: 'prison', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'You can\'t figure out the European transmission. The owner returns to find you pressing random buttons.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
          {
            weight: 15,
            description: 'You take it for a joyride and park it back two hours later. Nothing stolen, just criminal vibes.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'car_leave',
        text: 'Walk away',
        outcomes: [
          {
            weight: 100,
            description: 'Someone else steals it three minutes later. You watch the police chase from your window.',
            effects: [],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_bar_fight',
    title: 'Closing Time Confrontation',
    description: 'A drunk at the bar spills your drink and insults you.',
    category: 'crime',
    probability: 0.1,
    minAge: 16,
    cooldown: 6,
    conditions: [
      { type: 'minAge', value: 16 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'bar_fight_swing',
        text: 'Throw the first punch',
        outcomes: [
          {
            weight: 30,
            description: 'One punch and he\'s down. The bouncer tosses you out like a frisbee.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'Full bar brawl. Chairs flying, bottles breaking. You take a barstool to the ribs. Police arrive.',
            effects: [
              { type: 'stat', target: 'health', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'reputation', value: -12, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'He\'s way bigger than he looked sitting down. One hit and you\'re seeing stars. You wake up on the bar floor.',
            effects: [
              { type: 'stat', target: 'health', value: -30, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'stat', target: 'looks', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'bar_fight_words',
        text: 'Use devastating insults only',
        outcomes: [
          {
            weight: 50,
            description: 'Your comeback is so surgical the whole bar winces. He buys you a drink. Respect earned.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'He doesn\'t appreciate your wit. He punches you anyway. Eloquence doesn\'t stop a right hook.',
            effects: [
              { type: 'stat', target: 'health', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'bar_fight_leave',
        text: 'Walk away',
        outcomes: [
          {
            weight: 100,
            description: 'He yells something that doesn\'t even make grammatical sense. You go home with all your teeth.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_insurance_fraud',
    title: 'Creative Claims',
    description: 'A friend has a "foolproof" insurance fraud scheme.',
    category: 'crime',
    probability: 0.05,
    minAge: 18,
    cooldown: 20,
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'notInPrison', value: true },
      { type: 'minMoney', value: 500 },
    ],
    choices: [
      {
        id: 'insurance_fraud_join',
        text: 'You\'re in',
        hint: 'Big payout or prison time',
        outcomes: [
          {
            weight: 30,
            description: 'It works. Insurance pays $8,000. Your cut: $5,000.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'The investigator notices the "accident" happened at 3 AM with no witnesses. Your friend cracks in eleven seconds. Fraud charges.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'prison', value: 4, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'The staged accident goes wrong — your friend actually hits you hard. Your fake injuries become real.',
            effects: [
              { type: 'stat', target: 'health', value: -25, operation: 'add' },
              { type: 'money', value: -1000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'insurance_fraud_pass',
        text: 'Pass. "Foolproof" is a red flag.',
        outcomes: [
          {
            weight: 100,
            description: 'Three weeks later, your friend is on the news getting arrested in his neck brace. Great call.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_robbery_gone_wrong',
    title: 'Stick \'Em Up',
    description: 'You\'re desperate for cash and staring at a convenience store.',
    category: 'crime',
    probability: 0.04,
    minAge: 17,
    cooldown: 20,
    conditions: [
      { type: 'minAge', value: 17 },
      { type: 'notInPrison', value: true },
      { type: 'maxMoney', value: 100 },
    ],
    choices: [
      {
        id: 'robbery_do_it',
        text: 'Go in. Hand in pocket.',
        hint: 'This will not end well',
        outcomes: [
          {
            weight: 20,
            description: 'The cashier hands over $400. You run six blocks. Your hands won\'t stop shaking for three days.',
            effects: [
              { type: 'money', value: 400, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'add_trait', value: 'desperate' },
            ],
          },
          {
            weight: 30,
            description: 'The cashier presses the silent alarm. Cops are waiting outside. The $400 was not worth it.',
            effects: [
              { type: 'stat', target: 'happiness', value: -30, operation: 'add' },
              { type: 'reputation', value: -25, operation: 'add' },
              { type: 'prison', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'The cashier pulls out a REAL weapon from under the counter. You have never run faster.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'Your pocket-hand slips. It\'s obviously just a hand. "I\'ll just... get a Gatorade," you say.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'robbery_dont',
        text: 'Go home. This is rock bottom.',
        outcomes: [
          {
            weight: 100,
            description: 'You eat ramen and question every decision that led here. Tomorrow you\'ll look for a real job.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_identity_theft',
    title: 'Ctrl+C, Ctrl+Fraud',
    description: 'You find a database of stolen identities on the dark web.',
    category: 'crime',
    probability: 0.04,
    minAge: 18,
    cooldown: 20,
    oneTime: true,
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'notInPrison', value: true },
      { type: 'minStat', value: 50, stat: 'smarts' },
    ],
    choices: [
      {
        id: 'identity_theft_go',
        text: 'Download the data',
        hint: 'Federal crime territory',
        outcomes: [
          {
            weight: 25,
            description: 'You open credit lines and sell merchandise. Over three months, you net $15,000. Constant paranoia.',
            effects: [
              { type: 'money', value: 15000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'add_trait', value: 'cybercriminal' },
            ],
          },
          {
            weight: 40,
            description: 'FBI traces it to your IP. Your VPN was shut down last month. Federal agents at 6 AM.',
            effects: [
              { type: 'stat', target: 'happiness', value: -35, operation: 'add' },
              { type: 'reputation', value: -30, operation: 'add' },
              { type: 'prison', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'The data is outdated. Every identity is already flagged. Three days of setup for nothing.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'identity_theft_close',
        text: 'Close the browser',
        outcomes: [
          {
            weight: 100,
            description: 'You close the tab and take a shower. The FBI catches the people who did download it.',
            effects: [
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_counterfeit',
    title: 'Funny Money',
    description: 'An acquaintance offers $5K in counterfeit bills for $500 real.',
    category: 'crime',
    probability: 0.04,
    minAge: 18,
    cooldown: 20,
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'notInPrison', value: true },
      { type: 'minMoney', value: 500 },
    ],
    choices: [
      {
        id: 'counterfeit_buy',
        text: 'Buy the counterfeits',
        outcomes: [
          {
            weight: 25,
            description: 'You carefully spend the fakes at various stores. Net about $4,000 in real goods.',
            effects: [
              { type: 'money', value: 3500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'First cashier uses a counterfeit pen. Bill fails spectacularly. The Secret Service gets involved.',
            effects: [
              { type: 'money', value: -500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'prison', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'The paranoia eats you alive. You burn the rest of the counterfeits in your bathtub at 2 AM.',
            effects: [
              { type: 'money', value: 200, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'counterfeit_pass',
        text: 'Decline. Federal offense.',
        outcomes: [
          {
            weight: 100,
            description: 'Your friend gets caught trying to buy a Honda with $15K in fake hundreds. The dealer was a retired cop.',
            effects: [
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // ORGANIZED CRIME (age 18+, criminal background)
  // ============================================================

  {
    id: 'crime_gang_recruit',
    title: 'The Family Wants You',
    description: 'A well-dressed stranger at a bar says his "organization" wants you.',
    category: 'crime',
    probability: 0.05,
    minAge: 18,
    oneTime: true,
    priority: 3,
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'notInPrison', value: true },
      { type: 'hasCriminalRecord', value: true },
    ],
    choices: [
      {
        id: 'gang_join',
        text: 'Make the call',
        outcomes: [
          {
            weight: 60,
            description: 'You\'re in. The initiation involves more paperwork than expected. You get a territory and a mentor named Big Tony.',
            effects: [
              { type: 'money', value: 2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -25, operation: 'add' },
              { type: 'add_trait', value: 'connected' },
            ],
          },
          {
            weight: 40,
            description: 'The initiation job goes sideways. You barely make it out. You\'re now too deep to quit.',
            effects: [
              { type: 'stat', target: 'health', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'add_trait', value: 'connected' },
            ],
          },
        ],
      },
      {
        id: 'gang_decline',
        text: 'Burn the card',
        outcomes: [
          {
            weight: 70,
            description: 'He nods respectfully and leaves. They don\'t bother you again.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Declining is taken as disrespect. The same car parks outside your place for a week.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_territory_dispute',
    title: 'Turf War',
    description: 'A rival crew is moving in on your territory.',
    category: 'crime',
    probability: 0.07,
    minAge: 18,
    cooldown: 8,
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'notInPrison', value: true },
      { type: 'hasTrait', value: 'connected' },
    ],
    choices: [
      {
        id: 'turf_confront',
        text: 'Confront the rival crew',
        outcomes: [
          {
            weight: 35,
            description: 'Your reputation makes them back down after a tense standoff. No blood spilled.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'money', value: 1000, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'A brawl breaks out. You hold your ground but need ice, a lawyer, and possibly stitches.',
            effects: [
              { type: 'stat', target: 'health', value: -25, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'money', value: 500, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'The rivals came prepared. You retreat through an alley. Your associates are not pleased.',
            effects: [
              { type: 'stat', target: 'health', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'turf_negotiate',
        text: 'Try to negotiate a split',
        outcomes: [
          {
            weight: 50,
            description: 'Diplomacy works. You split the territory. Your boss calls it "mature."',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'money', value: 300, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'They interpret "negotiate" as weakness. Now they want ALL your territory.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -1000, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_money_laundering',
    title: 'Spin Cycle',
    description: 'The organization needs you to run the books at a front business.',
    category: 'crime',
    probability: 0.05,
    minAge: 18,
    cooldown: 16,
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'notInPrison', value: true },
      { type: 'hasTrait', value: 'connected' },
      { type: 'minStat', value: 40, stat: 'smarts' },
    ],
    choices: [
      {
        id: 'launder_accept',
        text: 'Cook the books',
        outcomes: [
          {
            weight: 40,
            description: 'You\'re a natural. The laundromat "earns" $50K/month. Your cut: $3,000.',
            effects: [
              { type: 'money', value: 3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'An IRS auditor notices the laundromat earns more per sq ft than a Manhattan hedge fund. Investigation begins.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'You launder so well the laundromat becomes legitimately successful. Regular customers love it.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'launder_decline',
        text: 'Decline',
        outcomes: [
          {
            weight: 100,
            description: 'Someone else takes the gig and immediately gets audited. Dodged a tax-shaped bullet.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_witness_intimidation',
    title: 'Friendly Persuasion',
    description: 'The organization wants you to "talk" to a witness before trial.',
    category: 'crime',
    probability: 0.04,
    minAge: 18,
    cooldown: 16,
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'notInPrison', value: true },
      { type: 'hasTrait', value: 'connected' },
    ],
    choices: [
      {
        id: 'witness_intimidate',
        text: 'Pay the witness a visit',
        outcomes: [
          {
            weight: 35,
            description: 'You say very little but say it menacingly. The witness develops amnesia on the stand. Nice bonus earned.',
            effects: [
              { type: 'money', value: 2000, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'The witness is wearing a wire. You walked into a setup. Witness tampering charges.',
            effects: [
              { type: 'stat', target: 'happiness', value: -30, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'prison', value: 6, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'The witness isn\'t home. Their chatty neighbor tells you about their cat\'s surgery for 45 minutes.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'witness_refuse',
        text: 'Refuse. This crosses a line.',
        outcomes: [
          {
            weight: 60,
            description: 'They respect the boundary. Someone else does the dirty work. Your hands stay clean.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Refusing is seen as disloyalty. You\'re cut out of the next job. Even Big Tony won\'t look at you.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_heist_planning',
    title: 'One Last Job',
    description: 'Your crew is planning a jewelry store heist. "One last job."',
    category: 'crime',
    probability: 0.03,
    minAge: 20,
    oneTime: true,
    priority: 5,
    conditions: [
      { type: 'minAge', value: 20 },
      { type: 'notInPrison', value: true },
      { type: 'hasTrait', value: 'connected' },
      { type: 'hasCriminalRecord', value: true },
    ],
    choices: [
      {
        id: 'heist_go',
        text: 'You\'re in',
        hint: 'All or nothing',
        outcomes: [
          {
            weight: 20,
            description: 'Flawless. Your cut: $25,000 in jewelry, fenced for cash.',
            effects: [
              { type: 'money', value: 25000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
              { type: 'reputation', value: -25, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Someone trips the alarm 90 seconds in. You grab what you can. Your cut: $3,000.',
            effects: [
              { type: 'money', value: 3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'The cops were waiting. An informant tipped them off. Your lawyer\'s sigh counts as a weather event.',
            effects: [
              { type: 'stat', target: 'happiness', value: -40, operation: 'add' },
              { type: 'reputation', value: -30, operation: 'add' },
              { type: 'prison', value: 16, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'The getaway car won\'t start. Your driver tries to jumpstart a 2003 Honda Civic while holding bags of stolen goods.',
            effects: [
              { type: 'stat', target: 'happiness', value: -30, operation: 'add' },
              { type: 'reputation', value: -25, operation: 'add' },
              { type: 'prison', value: 12, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'heist_out',
        text: 'Back out. Your gut says no.',
        outcomes: [
          {
            weight: 50,
            description: 'The crew gets caught. Every single one. You watch from your couch. Best decision ever.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'The crew pulls it off and splits $100,000. They send you a postcard from Cancun.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_rival_gang',
    title: 'Cross Town Beef',
    description: 'The rival gang jumped one of your crew. Retaliation expected.',
    category: 'crime',
    probability: 0.05,
    minAge: 18,
    cooldown: 12,
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'notInPrison', value: true },
      { type: 'hasTrait', value: 'connected' },
    ],
    choices: [
      {
        id: 'rival_retaliate',
        text: 'Ride with the crew',
        outcomes: [
          {
            weight: 30,
            description: 'Your show of force gets the rivals to agree to a sit-down. Truce reached.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'money', value: 1000, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Full-scale street brawl. People are bleeding. Police sirens approach. Everyone scatters.',
            effects: [
              { type: 'stat', target: 'health', value: -25, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Ambush. You take a serious beating and barely get away. Hospital visit, police questions.',
            effects: [
              { type: 'stat', target: 'health', value: -35, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'rival_stay_back',
        text: 'Sit this one out',
        outcomes: [
          {
            weight: 50,
            description: 'Your crew handles it messily. You\'re quietly labeled as "not reliable."',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'The retaliation goes badly. Several crew members arrested. You stayed clean.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_corrupt_cop',
    title: 'Badge for Sale',
    description: 'A cop offers to make your problems disappear — for a price.',
    category: 'crime',
    probability: 0.04,
    minAge: 18,
    oneTime: true,
    priority: 4,
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'notInPrison', value: true },
      { type: 'hasTrait', value: 'connected' },
      { type: 'minMoney', value: 2000 },
    ],
    choices: [
      {
        id: 'cop_payoff',
        text: 'Put him on payroll. $500/month.',
        outcomes: [
          {
            weight: 45,
            description: 'He tips you off about raids and redirects patrols. Best $500 you\'ve ever spent.',
            effects: [
              { type: 'money', value: -500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'add_trait', value: 'police_connections' },
            ],
          },
          {
            weight: 30,
            description: 'It\'s a sting. Internal Affairs has been tracking this cop for months. You\'re their star defendant.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -30, operation: 'add' },
              { type: 'prison', value: 6, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'He takes your money and provides nothing useful. Every "tip" is public information. You got out-criminaled by a cop.',
            effects: [
              { type: 'money', value: -1500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'cop_decline',
        text: 'Decline. Dirty cops are unpredictable.',
        outcomes: [
          {
            weight: 100,
            description: 'He looks offended, then nervous, then drives away. You\'ll never know if it was real or a setup.',
            effects: [
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // PRISON EVENTS (condition: inPrison)
  // ============================================================

  {
    id: 'crime_prison_yard_fight',
    title: 'Yard Time Throwdown',
    description: 'A fellow inmate shoulders you in the yard. Everyone\'s watching.',
    category: 'crime',
    probability: 0.15,
    cooldown: 4,
    conditions: [
      { type: 'inPrison', value: true },
    ],
    choices: [
      {
        id: 'prison_fight_back',
        text: 'Fight back',
        outcomes: [
          {
            weight: 35,
            description: 'You hold your own. People stop bumping into you after that. Respect earned.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'He\'s been in here seven years and works out twelve hours a day. You last about four seconds.',
            effects: [
              { type: 'stat', target: 'health', value: -25, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Guards break it up. Solitary for a week. Dark, quiet, and time to rethink everything.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'prison', value: 1, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'prison_fight_avoid',
        text: 'Walk away',
        outcomes: [
          {
            weight: 50,
            description: 'The bully gets bored and moves on. Prison is high school with worse food.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Walking away is taken as an invitation. The bullying gets worse. Your commissary keeps "disappearing."',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -50, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_prison_smuggling',
    title: 'Contraband Express',
    description: 'A guard can get you anything from outside. For a fee.',
    category: 'crime',
    probability: 0.08,
    cooldown: 8,
    conditions: [
      { type: 'inPrison', value: true },
      { type: 'minMoney', value: 200 },
    ],
    choices: [
      {
        id: 'smuggle_phone',
        text: 'Get a phone. $200.',
        outcomes: [
          {
            weight: 50,
            description: 'Contraband phone hidden in your mattress. Connection to the outside world. You can doomscroll at 2 AM again.',
            effects: [
              { type: 'money', value: -200, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Phone detected in a cell search. Solitary. Davis denies everything.',
            effects: [
              { type: 'money', value: -200, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'prison', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'He brings a phone from 2008. No internet. Just Snake and a cracked screen. Your high score is legendary though.',
            effects: [
              { type: 'money', value: -200, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'smuggle_decline',
        text: 'Pass. Don\'t trust dirty guards.',
        outcomes: [
          {
            weight: 100,
            description: 'Next week: contraband crackdown. Cells searched. You sleep peacefully with nothing to hide.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_prison_allies',
    title: 'Prison Politics',
    description: 'A prison crew invites you to their table.',
    category: 'crime',
    probability: 0.1,
    cooldown: 12,
    oneTime: true,
    conditions: [
      { type: 'inPrison', value: true },
    ],
    choices: [
      {
        id: 'prison_ally_join',
        text: 'Sit down. Join up.',
        outcomes: [
          {
            weight: 60,
            description: 'Marcus\'s crew is solid. Protection, commissary connections, someone watching your back. Prison got 50% more survivable.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'stat', target: 'health', value: 5, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'By joining, you inherited their enemies. Protection is real, but so are the threats from across the cafeteria.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'prison_ally_solo',
        text: 'Stay independent',
        outcomes: [
          {
            weight: 50,
            description: 'Lonely but uncomplicated. Nobody asks for favors. Nobody puts a target on your back.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Being unaffiliated makes you a target. Without a crew, you get tested daily.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_prison_escape',
    title: 'The Shawshank Situation',
    description: 'Your cellmate has dug a tunnel behind a movie poster.',
    category: 'crime',
    probability: 0.03,
    oneTime: true,
    priority: 5,
    conditions: [
      { type: 'inPrison', value: true },
    ],
    choices: [
      {
        id: 'escape_go',
        text: 'Crawl to freedom',
        hint: 'A LOT could happen',
        outcomes: [
          {
            weight: 15,
            description: 'You crawl through 500 feet of pipe, emerge in a field, and run. Filthy, traumatized, but free.',
            effects: [
              { type: 'prison', value: -99, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 30, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'add_trait', value: 'fugitive' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'The tunnel collapses twenty feet in. Guards dig you out three hours later. Solitary. Extra time.',
            effects: [
              { type: 'stat', target: 'happiness', value: -30, operation: 'add' },
              { type: 'stat', target: 'health', value: -15, operation: 'add' },
              { type: 'prison', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'You get completely stuck in the drainage pipe. The fire department has to be called.',
            effects: [
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'prison', value: 6, operation: 'add' },
            ],
          },
          {
            weight: 15,
            description: 'You emerge directly in front of a guard on a cigarette break. He slowly picks up his radio.',
            effects: [
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'prison', value: 8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'escape_stay',
        text: 'Keep your head down. Do the time.',
        outcomes: [
          {
            weight: 60,
            description: 'Your cellmate goes alone and makes it out. You stare at the poster that used to hide a tunnel.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Your cellmate gets caught. If he\'d ratted you out, you\'d be in solitary too. Smart call.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_prison_solitary',
    title: 'The Box',
    description: 'Solitary confinement. Just you and your thoughts.',
    category: 'crime',
    probability: 0.08,
    cooldown: 8,
    conditions: [
      { type: 'inPrison', value: true },
    ],
    choices: [
      {
        id: 'solitary_meditate',
        text: 'Meditate. Reflect.',
        outcomes: [
          {
            weight: 50,
            description: 'Genuine reflection. Something shifts. You feel calmer when you get out.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'You count ceiling cracks (47), door bolts (12), and regrets (uncountable). The silence is deafening.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'solitary_survive',
        text: 'Just survive',
        outcomes: [
          {
            weight: 60,
            description: 'You survive. Barely. Sunlight feels like an assault when you rejoin general population.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'The isolation breaks something. You come out harder, quieter, with a thousand-yard stare.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'add_trait', value: 'hardened' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_prison_education',
    title: 'Books Over Bars',
    description: 'The prison offers education programs that could help with parole.',
    category: 'crime',
    probability: 0.12,
    cooldown: 8,
    conditions: [
      { type: 'inPrison', value: true },
    ],
    choices: [
      {
        id: 'prison_edu_enroll',
        text: 'Sign up',
        outcomes: [
          {
            weight: 70,
            description: 'You discover you\'re actually smart when you apply yourself. Teacher says you\'re one of the best. Parole file gets a nice note.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'The textbooks are from 1997. You learn a little, but mostly learn patience.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'prison_edu_skip',
        text: 'Pass',
        outcomes: [
          {
            weight: 100,
            description: 'Another inmate who enrolled gets paroled early. You still have three more seasons.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_prison_early_release',
    title: 'Parole Hearing',
    description: 'Your parole hearing is today. No pressure.',
    category: 'crime',
    probability: 0.15,
    priority: 5,
    cooldown: 6,
    conditions: [
      { type: 'inPrison', value: true },
    ],
    choices: [
      {
        id: 'parole_sincere',
        text: 'Be genuine. Show real remorse.',
        outcomes: [
          {
            weight: 45,
            description: '"Parole granted." Two words that sound like a choir of angels. You\'re getting out early.',
            effects: [
              { type: 'prison', value: -99, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 40, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: '"We\'ll revisit in six months." Not denied, but not free. The door isn\'t closed.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'Denied. The victim\'s family testified against you. Their words hit harder than anything in the yard.',
            effects: [
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'parole_perform',
        text: 'Put on the performance of a lifetime',
        hint: 'Fake it till you make it',
        outcomes: [
          {
            weight: 35,
            description: 'Tears on command, perfect cracking voice. Parole granted. You wink at the camera on the way out.',
            effects: [
              { type: 'prison', value: -99, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 35, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'The chairwoman has done this 30 years. "You\'re performing, not growing." Denied. She\'s not wrong.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'You overdo it and literally fall to your knees begging. A board member stifles a laugh. Denied with extreme prejudice.',
            effects: [
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // CONSEQUENCES & LEGAL EVENTS
  // ============================================================

  {
    id: 'crime_police_questioning',
    title: 'Knock Knock',
    description: 'Two detectives at your door with "questions."',
    category: 'crime',
    probability: 0.06,
    cooldown: 12,
    conditions: [
      { type: 'notInPrison', value: true },
      { type: 'hasCriminalRecord', value: true },
    ],
    choices: [
      {
        id: 'police_cooperate',
        text: 'Cooperate',
        outcomes: [
          {
            weight: 40,
            description: 'You answer carefully. They have nothing concrete. After two hours, they let you go.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'You talk too much and mention details that weren\'t public. The detectives exchange a look.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'prison', value: 4, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'They were investigating your neighbor. Your panicked cooperation was unnecessary.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'police_lawyer',
        text: '"I\'d like to speak with my lawyer"',
        outcomes: [
          {
            weight: 70,
            description: 'The magic words. Their smiles falter. They leave. Your lawyer says you did the right thing.',
            effects: [
              { type: 'money', value: -500, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Lawyering up makes them more suspicious. They come back with a warrant.',
            effects: [
              { type: 'money', value: -1000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'police_run',
        text: 'Slam the door and run',
        hint: 'Definitely looks innocent',
        outcomes: [
          {
            weight: 20,
            description: 'You hop a fence and disappear. But now there\'s a warrant. You escalated a chat into a manhunt.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 80,
            description: 'You run into a third officer covering the back door. They\'re ALWAYS covering the back door.',
            effects: [
              { type: 'stat', target: 'happiness', value: -30, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'prison', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_trial',
    title: 'Your Day in Court',
    description: 'Trial day. The prosecutor is not holding back.',
    category: 'crime',
    probability: 0.05,
    priority: 4,
    cooldown: 16,
    conditions: [
      { type: 'notInPrison', value: true },
      { type: 'hasCriminalRecord', value: true },
    ],
    choices: [
      {
        id: 'trial_plead_innocent',
        text: 'Plead not guilty. Fight it.',
        outcomes: [
          {
            weight: 30,
            description: 'Brilliant cross-examination destroys the key witness. Not guilty. You nearly collapse with relief.',
            effects: [
              { type: 'money', value: -3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 30, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'Guilty. The judge gives a lengthy sentence and a lecture about wasted potential that hurts more than the sentence.',
            effects: [
              { type: 'money', value: -5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -35, operation: 'add' },
              { type: 'prison', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'Hung jury. Mistrial. You\'re free for now, but the cloud hangs over you.',
            effects: [
              { type: 'money', value: -3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'trial_plea_deal',
        text: 'Take the plea deal',
        outcomes: [
          {
            weight: 60,
            description: 'Guilty to a lesser charge. A few seasons instead of years. Your lawyer calls it "a win."',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'prison', value: 4, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Community service and probation instead of prison. Weekends in an orange vest picking up trash.',
            effects: [
              { type: 'money', value: -1500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_witness_appears',
    title: 'Blast from the Past',
    description: 'A witness from an old crime has identified you.',
    category: 'crime',
    probability: 0.04,
    cooldown: 20,
    conditions: [
      { type: 'notInPrison', value: true },
      { type: 'hasCriminalRecord', value: true },
    ],
    choices: [
      {
        id: 'witness_face_it',
        text: 'Face the music. Hire a lawyer.',
        outcomes: [
          {
            weight: 40,
            description: 'Your lawyer discredits the witness. Fuzzy memory, bad timeline, wrong glasses. Case dismissed.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'The witness is very credible. Your past catches up like a freight train.',
            effects: [
              { type: 'money', value: -3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'prison', value: 6, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'Statute of limitations has expired. You\'re free, but the detective\'s look says "I know what you did."',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'witness_skip_town',
        text: 'Pack a bag and relocate',
        hint: 'Running makes everything worse',
        outcomes: [
          {
            weight: 30,
            description: 'Fresh start in a new city. The case goes cold. You look over your shoulder forever.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'add_trait', value: 'fugitive' },
            ],
          },
          {
            weight: 70,
            description: 'Running triggers a warrant. Picked up at a traffic stop three states away. Fleeing charges added.',
            effects: [
              { type: 'money', value: -3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -30, operation: 'add' },
              { type: 'prison', value: 8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_evidence_found',
    title: 'CSI: Your Life',
    description: 'Physical evidence from an old crime has been re-examined.',
    category: 'crime',
    probability: 0.03,
    cooldown: 20,
    priority: 4,
    conditions: [
      { type: 'notInPrison', value: true },
      { type: 'hasCriminalRecord', value: true },
    ],
    choices: [
      {
        id: 'evidence_lawyer_up',
        text: 'Get the best lawyer',
        outcomes: [
          {
            weight: 35,
            description: 'Procedural error in evidence storage. Chain of custody broken. Evidence thrown out. You walk free.',
            effects: [
              { type: 'money', value: -5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'The evidence is airtight. DNA is DNA. Swift conviction. The judge says "egregious" three times.',
            effects: [
              { type: 'money', value: -5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -35, operation: 'add' },
              { type: 'prison', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'DNA was contaminated — matches you AND 4% of the population. Thrown out on reasonable doubt.',
            effects: [
              { type: 'money', value: -3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'evidence_confess',
        text: 'Come clean. Confess.',
        outcomes: [
          {
            weight: 50,
            description: 'Cooperation earns a reduced sentence. The judge acknowledges your honesty. Small mercies.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'prison', value: 4, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'You confess hoping for leniency. Full sentence anyway. "Honesty is its own reward," says the judge.',
            effects: [
              { type: 'stat', target: 'happiness', value: -30, operation: 'add' },
              { type: 'prison', value: 8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // ADDITIONAL CRIME EVENTS
  // ============================================================

  {
    id: 'crime_street_racing',
    title: 'Red Light, Green Light',
    description: 'The car next to you revs its engine at a red light.',
    category: 'crime',
    probability: 0.08,
    minAge: 16,
    cooldown: 8,
    conditions: [
      { type: 'minAge', value: 16 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'race_accept',
        text: 'Rev back. GO.',
        outcomes: [
          {
            weight: 30,
            description: 'You win by two car lengths. Adrenaline surges. Also, you broke about nine traffic laws.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'You lose badly. Your car makes a concerning noise for the next week.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'money', value: -300, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description: 'Cops were parked right there. The ticket is astronomical.',
            effects: [
              { type: 'money', value: -800, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 15,
            description: 'You lose control and clip a mailbox. The homeowner comes out in a bathrobe looking murderous.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'race_decline',
        text: 'Shake your head',
        outcomes: [
          {
            weight: 100,
            description: 'The other car rockets off and runs a red. You hear a crash two blocks later. You drive home very carefully.',
            effects: [
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_online_scam',
    title: 'Nigerian Prince 2.0',
    description: 'You find an effective phishing email template online.',
    category: 'crime',
    probability: 0.05,
    minAge: 16,
    cooldown: 16,
    conditions: [
      { type: 'minAge', value: 16 },
      { type: 'notInPrison', value: true },
      { type: 'minStat', value: 45, stat: 'smarts' },
    ],
    choices: [
      {
        id: 'scam_send',
        text: 'Send the emails',
        outcomes: [
          {
            weight: 30,
            description: 'Seven people fall for it. Total take: $4,200.',
            effects: [
              { type: 'money', value: 4200, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Spam filters catch it. Zero responses. Also, you sent it from your personal email with your real name.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'One target is a cybersecurity expert who traces it back to you and reports you to the FBI.',
            effects: [
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'money', value: -1000, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'scam_delete',
        text: 'Delete the template',
        outcomes: [
          {
            weight: 100,
            description: 'You delete it. Somewhere, a thousand potential victims go about their day undisturbed.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_arson_opportunity',
    title: 'Burning Bridges (Literally)',
    description: 'Your terrible landlord brags about his insurance policy.',
    category: 'crime',
    probability: 0.03,
    minAge: 18,
    cooldown: 20,
    oneTime: true,
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'arson_do_it',
        text: 'Light it up',
        hint: 'Felony. People could get hurt.',
        outcomes: [
          {
            weight: 15,
            description: 'Nobody hurt. Investigation blames faulty wiring (which WAS faulty). Landlord loses the building.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Security cameras. You\'re arrested for arson. The judge uses words like "unconscionable."',
            effects: [
              { type: 'stat', target: 'happiness', value: -40, operation: 'add' },
              { type: 'reputation', value: -30, operation: 'add' },
              { type: 'prison', value: 16, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'The fire gets out of control. A family loses everything. The guilt is crushing and permanent.',
            effects: [
              { type: 'stat', target: 'happiness', value: -35, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'reputation', value: -25, operation: 'add' },
              { type: 'prison', value: 12, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'arson_report',
        text: 'Report him to housing authority',
        outcomes: [
          {
            weight: 70,
            description: 'The authority slaps your landlord with massive fines. He\'s forced to make repairs. Justice via paperwork.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'The authority does nothing. Your landlord finds out you reported him and raises rent again.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'money', value: -200, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_crypto_scheme',
    title: 'To the Moon (Scam)',
    description: 'A buddy needs help pumping a crypto coin before they dump it.',
    category: 'crime',
    probability: 0.05,
    minAge: 18,
    cooldown: 16,
    conditions: [
      { type: 'minAge', value: 18 },
      { type: 'notInPrison', value: true },
      { type: 'minStat', value: 40, stat: 'smarts' },
    ],
    choices: [
      {
        id: 'crypto_pump',
        text: 'Join the pump',
        outcomes: [
          {
            weight: 30,
            description: 'The token moons. You and your buddy cash out $10,000 before it crashes.',
            effects: [
              { type: 'money', value: 10000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'The SEC comes knocking. Crypto fraud IS illegal. Your buddy flips on you instantly.',
            effects: [
              { type: 'money', value: -5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description: 'Nobody buys the token. It trades at $0.0000001 forever. Three weeks of Instagram posts wasted.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'crypto_decline',
        text: 'No. This screams "future court date."',
        outcomes: [
          {
            weight: 100,
            description: 'Six months later, your buddy is in a crypto fraud documentary wearing an ankle monitor.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_caught_redhanded',
    title: 'Busted',
    description: 'A detective shows you surveillance footage of your latest crime.',
    category: 'crime',
    probability: 0.05,
    priority: 3,
    cooldown: 16,
    conditions: [
      { type: 'notInPrison', value: true },
      { type: 'hasCriminalRecord', value: true },
      { type: 'minAge', value: 16 },
    ],
    choices: [
      {
        id: 'busted_deny',
        text: '"That doesn\'t look like me"',
        outcomes: [
          {
            weight: 20,
            description: 'The footage is grainy. Your lawyer argues it could be anyone. Case dropped. Buy a lottery ticket.',
            effects: [
              { type: 'money', value: -1000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 80,
            description: 'The detective zooms in on your face, clear as day. Your lawyer puts his head in his hands.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'prison', value: 6, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'busted_confess',
        text: 'Come clean',
        outcomes: [
          {
            weight: 60,
            description: 'Cooperation earns a reduced sentence. Nobody wins, but you lose less.',
            effects: [
              { type: 'money', value: -1500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'prison', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Full confession, full sentence. "Honesty is noted but insufficient." World\'s most hollow moral victory.',
            effects: [
              { type: 'money', value: -1500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'prison', value: 6, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_go_straight',
    title: 'The Straight and Narrow',
    description: 'Lying awake at 3 AM, you wonder if it\'s time to go legit.',
    category: 'crime',
    probability: 0.06,
    cooldown: 20,
    priority: 3,
    conditions: [
      { type: 'notInPrison', value: true },
      { type: 'hasCriminalRecord', value: true },
      { type: 'minAge', value: 20 },
    ],
    choices: [
      {
        id: 'go_straight_yes',
        text: 'Go legit',
        outcomes: [
          {
            weight: 50,
            description: 'You cut ties and start applying for real jobs. It\'s hard. Employers see the record. But slowly, you build something honest.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'remove_trait', value: 'connected' },
            ],
          },
          {
            weight: 50,
            description: 'You try to leave the life, but old associates keep calling. Going straight is harder than any crime.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'go_straight_no',
        text: 'You are who you are',
        outcomes: [
          {
            weight: 100,
            description: 'The moment passes. You roll over. Tomorrow, you\'ll be back at it.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },
];
