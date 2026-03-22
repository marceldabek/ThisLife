// ============================================================
// ThisLife — Crime Events
// Dark humor, tension, absurdity. GTA meets dark comedy.
// ============================================================

import { GameEvent } from '../../types/events';

export const CRIME_EVENTS: GameEvent[] = [

  // ============================================================
  // PETTY CRIME (age 13+)
  // ============================================================

  {
    id: 'crime_shoplift_convenience',
    title: 'Five-Finger Discount',
    description:
      'You\'re browsing a convenience store when you notice the cashier is completely absorbed in their phone. A candy bar practically screams "take me." The security camera looks like it hasn\'t worked since the Clinton administration.',
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
        text: 'Pocket it. Free candy is the best candy.',
        hint: 'Low risk, low reward',
        outcomes: [
          {
            weight: 70,
            description:
              'You slide it into your pocket smooth as butter. The cashier never looked up. You feel like a criminal mastermind over $1.50 worth of chocolate.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
              { type: 'add_trait', value: 'sticky_fingers' },
            ],
          },
          {
            weight: 30,
            description:
              'The cashier looks up at exactly the wrong moment. "Hey! HEY! I SAW THAT!" They have surprisingly good lungs for someone who works at a gas station.',
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
        text: 'Nah. You\'re better than petty theft.',
        outcomes: [
          {
            weight: 100,
            description:
              'You pay for your items like a functioning member of society. The cashier doesn\'t even acknowledge your existence. Heroism is thankless.',
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
    description:
      'You\'re at an electronics store and the display model of a brand-new phone is just... sitting there. The anti-theft cable looks like it was installed by an intern on their first day. One good yank and that phone is yours.',
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
        text: 'Yank it and bolt for the exit.',
        hint: 'Higher reward, higher risk',
        outcomes: [
          {
            weight: 40,
            description:
              'The cable snaps free. You power-walk out with the conviction of someone who definitely paid for this. $800 richer in phone. Your heart is pounding so loud the greeter can probably hear it.',
            effects: [
              { type: 'money', value: 800, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'An alarm screams. A loss-prevention guy the size of a refrigerator materializes from nowhere. You didn\'t even know stores still had those. Police are called.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'The cable holds. You\'re just standing there tugging on a phone like a dog with a chew toy while a sales associate stares at you. "Can I... help you, sir?" You have never left a store faster.',
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
            description:
              'You admire the phone like a normal person and leave. Your bank account weeps, but your freedom remains intact.',
            effects: [],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_found_wallet',
    title: 'Finders Keepers?',
    description:
      'You find a wallet on the ground. Inside: $300 cash, several credit cards, and a driver\'s license belonging to someone who looks annoyingly wealthy in their photo. Also a Costco membership. This guy has it all.',
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
        text: 'Keep the cash. Toss the wallet.',
        hint: 'Quick money, guilty conscience',
        outcomes: [
          {
            weight: 80,
            description:
              'Three hundred bucks richer. You toss the wallet in a trash can and walk away, refusing to think about whether that was someone\'s rent money. It probably wasn\'t. Probably.',
            effects: [
              { type: 'money', value: 300, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'You pocket the cash, then realize you\'re standing directly under a security camera. A week later, a police officer knocks on your door. Turns out the wallet belonged to a local judge.',
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
        text: 'Return it. Be the hero.',
        outcomes: [
          {
            weight: 60,
            description:
              'You track down the owner. He\'s so grateful he gives you $50 as a reward. It\'s $250 less than you would have gotten, but at least you can sleep at night. Probably.',
            effects: [
              { type: 'money', value: 50, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You return the wallet. The owner snatches it, checks the cash, glares at you like YOU\'RE the thief, and walks away without a word. No good deed goes unpunished.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'wallet_use_cards',
        text: 'Keep the cash AND try the credit cards.',
        hint: 'Greedy. Very greedy.',
        outcomes: [
          {
            weight: 30,
            description:
              'You go on a mini shopping spree before the cards get cancelled. Total haul: $1,200. You feel like a genius for approximately 48 hours before the paranoia sets in.',
            effects: [
              { type: 'money', value: 1200, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description:
              'The card gets declined on your very first purchase. The cashier looks at the name on the card, then looks at you. You are very clearly not a "Theodore Pemberton III." Police arrive in four minutes flat.',
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
    description:
      'Your friend produces two cans of spray paint from their backpack with the showmanship of a magician. "That wall is basically begging for it," they say, pointing at a pristine concrete surface. The night is young, the wall is blank, and your decision-making is questionable.',
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
        text: 'Go full Banksy on that wall.',
        outcomes: [
          {
            weight: 55,
            description:
              'You create what is, objectively, a masterpiece. Or at least a legible name. You and your friend high-five and disappear into the night like the delinquents you are.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'A patrol car rounds the corner mid-spray. Your "art" is literally just the letter "S" because that\'s how far you got before the sirens hit. The cops are not art critics.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -200, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 15,
            description:
              'You accidentally spray yourself in the face. Your friend laughs so hard they drop the other can, which rolls into a storm drain. The wall remains untouched. Your dignity does not.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'vandalism_decline',
        text: 'Hard pass. You like your record clean.',
        outcomes: [
          {
            weight: 100,
            description:
              'You decline. Your friend calls you boring, then misspells their own name on the wall. You feel better about your choice.',
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
    description:
      'You\'ve somehow gotten your hands on the answer key for next week\'s big exam. Half the class would pay real money for this. You could be the hero they need, for a modest fee of course.',
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
        text: 'Set up shop. $20 per answer key.',
        outcomes: [
          {
            weight: 50,
            description:
              'Business is booming. You sell 15 copies and make $300. You\'re basically the Wolf of Algebra Class.',
            effects: [
              { type: 'money', value: 300, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'One of your customers is the world\'s worst actor. The teacher notices that the kid who normally writes "idk" for every answer suddenly got a perfect score. The investigation leads straight back to you.',
            effects: [
              { type: 'money', value: 100, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -5, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'Turns out the answer key was for last year\'s version of the exam. Everyone fails. An angry mob of teenagers is honestly scarier than any cop.',
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
        text: 'Destroy the answers. Integrity wins.',
        outcomes: [
          {
            weight: 100,
            description:
              'You take the exam honestly. You get a B-. It feels earned. Sort of.',
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
    description:
      'A guy at school says he knows a guy who knows a guy who makes fake IDs. For $100, you could be "Derek, age 25, organ donor" by Friday. The photo quality is apparently "decent if you squint."',
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
            description:
              'The ID actually looks halfway decent. You are now Derek. Derek gets into bars. Derek lives on the edge. Derek has a terrible photo but bouncers don\'t seem to care.',
            effects: [
              { type: 'money', value: -100, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'add_trait', value: 'fake_id' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The ID looks like it was made in Microsoft Paint. The bouncer takes one look, laughs, snaps it in half, and tells you to come back when you can grow facial hair.',
            effects: [
              { type: 'money', value: -100, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'The "ID guy" takes your $100 and ghosts you. You just paid a stranger a hundred bucks for the privilege of being scammed. Welcome to the criminal underworld.',
            effects: [
              { type: 'money', value: -100, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'fake_id_decline',
        text: 'Pass. You\'re fine being your actual age.',
        outcomes: [
          {
            weight: 100,
            description:
              'You decline. Your friends will just have to party without Derek. Derek would\'ve been the life of the party, but whatever.',
            effects: [],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_scam_tourists',
    title: 'Tourist Trap',
    description:
      'A bus full of tourists just pulled up, cameras out, fanny packs loaded with cash. One of them asks if you can take their photo. You notice their wallets are practically falling out of their pockets. Or... you could sell them "exclusive local tour" tickets to a tour that doesn\'t exist.',
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
        text: 'Sell fake tour tickets. $50 each.',
        outcomes: [
          {
            weight: 55,
            description:
              'You sell eight tickets to a "haunted history walking tour" that starts at an address that doesn\'t exist. $400 for twenty minutes of improv. You should be in sales.',
            effects: [
              { type: 'money', value: 400, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'One tourist is an off-duty cop from out of state. He doesn\'t arrest you, but the lecture he gives is so thorough and so loud that every person within 200 feet now knows your name and your crime.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'The tourists actually show up at the fake address and call the cops. Security footage traces it back to you. The mugshot is unflattering.',
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
        text: 'Go for the wallets while taking their photo.',
        hint: 'Riskier but more direct',
        outcomes: [
          {
            weight: 35,
            description:
              'Smooth hands. You palm a wallet containing $200 while they pose for a group shot. They don\'t notice until you\'re three blocks away.',
            effects: [
              { type: 'money', value: 200, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 65,
            description:
              'You fumble the wallet and it drops. The tourist turns around. "What are you—HEY!" Turns out this particular tourist is a retired wrestler. He does not let go of your arm.',
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
        text: 'Just take the photo and be nice.',
        outcomes: [
          {
            weight: 100,
            description:
              'You take a genuinely great photo. They tip you $10 and say you\'ve "restored their faith in the youth." If only they knew what you were considering.',
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
    description:
      'You just finished an incredible meal at a restaurant that\'s way out of your budget. The bill arrives: $85. Your wallet contains significantly less than $85. The bathroom window looks suspiciously large enough to fit through.',
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
        text: 'Bathroom window escape. Classic.',
        outcomes: [
          {
            weight: 45,
            description:
              'You squeeze through the window with the grace of a greased cat, land in the alley, and sprint into the night. Free dinner. You can never eat here again, but it was worth it.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'You get stuck halfway through the window. A busboy finds you dangling there like a piñata. The kitchen staff takes photos before helping you down. You pay double.',
            effects: [
              { type: 'money', value: -170, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'You make it out the window but land directly next to the restaurant owner, who is on a smoke break. Awkward eye contact. He is not amused. The cops are called.',
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
        text: 'Just... walk out the front door. Confidence.',
        outcomes: [
          {
            weight: 40,
            description:
              'You stand up, wave to the waiter like you\'re coming back, and stride out the front door. Pure audacity. Nobody stops the person who looks like they belong.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'reputation', value: -4, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'The hostess stops you. "Sir, your check?" Your poker face crumbles like a sandcastle. You mumble something about forgetting your wallet and slink back to the table in defeat.',
            effects: [
              { type: 'money', value: -85, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'dine_dash_honest',
        text: 'Explain the situation and offer to wash dishes.',
        outcomes: [
          {
            weight: 100,
            description:
              'The manager sighs and puts you on dish duty for three hours. Your hands are pruny. Your dignity is bruised. But you ate well and nobody called the cops.',
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
    description:
      'A sketchy acquaintance approaches you with a "business opportunity." He\'s got a duffel bag full of product and needs someone to move it. The money is good. The legal consequences are... less good.',
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
        text: 'Take the product. Start selling.',
        hint: 'Big money, big consequences',
        outcomes: [
          {
            weight: 40,
            description:
              'Turns out you have a knack for this. You move the entire supply in two weeks and pocket $2,000. Your acquaintance is impressed. Your mother would not be.',
            effects: [
              { type: 'money', value: 2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'add_trait', value: 'street_smart' },
            ],
          },
          {
            weight: 30,
            description:
              'You sell to the wrong person. An undercover cop. The sting operation involves three patrol cars and a helicopter, which feels like overkill for a duffel bag of weed, but here we are.',
            effects: [
              { type: 'money', value: -1000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -30, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'prison', value: 4, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'A rival dealer finds out you\'re on their turf. They don\'t send a cease-and-desist letter. They send three large men. You lose the product and gain several bruises.',
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
        text: 'No thanks. You choose life.',
        outcomes: [
          {
            weight: 80,
            description:
              'You walk away. Your acquaintance shrugs and finds someone else. You sleep well that night, which is more than most drug dealers can say.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'You decline, but your acquaintance takes it personally. He tells everyone you\'re a snitch, which you absolutely are not, but try explaining that to the streets.',
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
    description:
      'Walking through a wealthy neighborhood at night, you notice a house with no lights on, no car in the driveway, and a window that\'s been left open. A stack of mail suggests the owners are on vacation. Your conscience and your empty wallet argue loudly.',
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
        text: 'Climb through the window.',
        hint: 'Serious crime, serious time',
        outcomes: [
          {
            weight: 30,
            description:
              'You grab electronics, jewelry, and some cash. Total haul: $3,000. You leave no trace. You feel simultaneously terrible and rich, which is an interesting combination.',
            effects: [
              { type: 'money', value: 3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'The owners have a dog. Not a cute little yapper. A Rottweiler named Brutus who was sleeping in the living room and is now very awake and very unhappy about your visit.',
            effects: [
              { type: 'stat', target: 'health', value: -25, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'Silent alarm. The owners are tech people. Of course they have a silent alarm with cameras. The police arrive in six minutes. You are arrested holding a decorative vase you thought was expensive. It\'s from IKEA.',
            effects: [
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'prison', value: 6, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'You trip over a cat in the dark, crash into a shelf of porcelain figurines, and set off every car alarm on the street. You flee with nothing but a bruised knee and shattered pride.',
            effects: [
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'break_in_skip',
        text: 'Keep walking. This isn\'t worth prison.',
        outcomes: [
          {
            weight: 100,
            description:
              'You keep walking. A neighbor spots you anyway and gives you a suspicious look. You wave innocently and speed-walk home, where you belong.',
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
    description:
      'A luxury car sits in a parking lot, engine running, door open. The owner just dashed into the store for "one quick thing." This car costs more than everything you\'ve ever owned combined. The keys are literally in the ignition.',
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
        text: 'Hop in and floor it.',
        hint: 'Felony territory',
        outcomes: [
          {
            weight: 25,
            description:
              'You peel out of the parking lot like you\'re in an action movie. You sell the car to a chop shop for $5,000 — a fraction of its value, but hey, you didn\'t pay for it.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The car has GPS tracking. The owner has OnStar. The police have a helicopter. You have regrets. The chase lasts eleven minutes. The mugshot lasts forever.',
            effects: [
              { type: 'stat', target: 'happiness', value: -30, operation: 'add' },
              { type: 'reputation', value: -25, operation: 'add' },
              { type: 'prison', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'You can\'t figure out how to put it in drive. It\'s a European car with seventeen buttons and a transmission from the future. The owner returns to find you sitting in their car pressing random things.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
          {
            weight: 15,
            description:
              'You take it for a joyride, then park it back in the same spot two hours later. Nothing stolen, no damage. Just... vibes. Criminal, illegal vibes.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'car_leave',
        text: 'Walk away. Grand theft auto is grand theft auto.',
        outcomes: [
          {
            weight: 100,
            description:
              'You walk away. Someone else steals it three minutes later. You watch the police chase from your apartment window while eating cereal.',
            effects: [],
          },
        ],
      },
    ],
  },

  {
    id: 'crime_bar_fight',
    title: 'Closing Time Confrontation',
    description:
      'Some drunk at the bar just bumped into you and spilled your drink. Then he turned around and called you something that would get bleeped on television. The bartender\'s already reaching for the phone. Your fists have opinions.',
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
        text: 'Throw the first punch.',
        outcomes: [
          {
            weight: 30,
            description:
              'One punch and he\'s on the floor. The bar goes silent. You feel like a champion for about five seconds before the bouncer tosses you out like a frisbee.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'Full-blown bar brawl. Chairs are flying. Someone throws a bottle. You take a barstool to the ribs but give as good as you get. Police arrive to find everyone bleeding and lying.',
            effects: [
              { type: 'stat', target: 'health', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'reputation', value: -12, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'He\'s way bigger than he looked sitting down. One hit and you\'re seeing stars, a white tunnel, and possibly your dead grandmother waving at you. You wake up on the bar floor.',
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
        text: 'Use your words. Devastating insults only.',
        outcomes: [
          {
            weight: 50,
            description:
              'You deliver a comeback so surgical it makes the entire bar wince. The drunk stares at you, processes it, and then buys you a drink. Respect earned through pure verbal violence.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'He doesn\'t appreciate your wit. He punches you anyway. Your eloquence does not protect you from his right hook.',
            effects: [
              { type: 'stat', target: 'health', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'bar_fight_leave',
        text: 'Walk away. Not your circus.',
        outcomes: [
          {
            weight: 100,
            description:
              'You leave. He yells something at your back that doesn\'t even make grammatical sense. You go home with all your teeth intact. Victory.',
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
    description:
      'A friend of a friend has a "foolproof" insurance fraud scheme. Stage a car accident, fake some injuries, collect a fat settlement. "Nobody gets hurt," they insist, though they\'re wearing a neck brace from the last time they said that.',
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
        text: 'You\'re in. Time to be a terrible actor.',
        hint: 'Big payout or big prison time',
        outcomes: [
          {
            weight: 30,
            description:
              'Against all odds, it works. The insurance company pays out $8,000. Your friend takes his cut. You walk away with $5,000 and a new appreciation for the art of lying.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The insurance investigator is suspiciously thorough. They notice the "accident" happened in a parking lot with no other witnesses at 3 AM. Your friend cracks under questioning in eleven seconds. Fraud charges for everyone.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'prison', value: 4, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The staged accident goes wrong when your friend actually hits you harder than planned. Your fake injuries become real injuries. The irony is not lost on the ER doctor.',
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
            description:
              'You decline. Three weeks later, your friend is on the news getting arrested in his neck brace. You feel incredibly smart.',
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
    description:
      'You\'re desperate for cash. Like, really desperate. A convenience store sits on a quiet corner with one teenager behind the counter. Your hoodie has a deep hood. Your hand could look like a gun in your pocket if you commit to the bit. This is either the worst or best idea you\'ve ever had.',
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
        text: 'Go in. Hand in pocket. Demand the cash.',
        hint: 'This will not end well. Or will it?',
        outcomes: [
          {
            weight: 20,
            description:
              'The cashier hands over $400 without a fight. You run six blocks before you stop to breathe. Your hands won\'t stop shaking for three days. You are now a felon in spirit if not on paper.',
            effects: [
              { type: 'money', value: 400, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'add_trait', value: 'desperate' },
            ],
          },
          {
            weight: 30,
            description:
              'The cashier is a 17-year-old who does not get paid enough for this. He presses the silent alarm, then gives you the money anyway. Cops are waiting outside. The $400 was not worth it.',
            effects: [
              { type: 'stat', target: 'happiness', value: -30, operation: 'add' },
              { type: 'reputation', value: -25, operation: 'add' },
              { type: 'prison', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'The cashier pulls out an ACTUAL weapon from under the counter. Not a hand-in-pocket bluff. The real thing. You have never run faster in your entire life. Olympic scouts would be impressed.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'Your pocket-hand slips and it\'s very obviously just a hand. The cashier stares at you. You stare back. "I\'ll just... get a Gatorade," you say, and pay with exact change.',
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
            description:
              'You walk home, eat ramen, and question every decision that led you to almost robbing a gas station with a finger gun. Tomorrow you\'ll look for a real job.',
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
    description:
      'While browsing the dark web (for research purposes, obviously), you stumble across a database of stolen personal information. Names, socials, credit histories — thousands of identities just sitting there. A tutorial pops up: "How to Open Credit Lines in 5 Easy Steps."',
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
        text: 'Download the data. Start a new "career."',
        hint: 'Federal crime territory',
        outcomes: [
          {
            weight: 25,
            description:
              'You open credit lines, order merchandise, sell it online. Over three months, you net $15,000. You live in constant paranoia, but you live well.',
            effects: [
              { type: 'money', value: 15000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'add_trait', value: 'cybercriminal' },
            ],
          },
          {
            weight: 40,
            description:
              'The FBI traces the digital breadcrumbs back to your IP address. Turns out the VPN you were using was shut down last month. Federal agents show up at your door at 6 AM. They are not morning people.',
            effects: [
              { type: 'stat', target: 'happiness', value: -35, operation: 'add' },
              { type: 'reputation', value: -30, operation: 'add' },
              { type: 'prison', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The stolen data is outdated. Every identity has already been flagged. You spend three days setting up fake accounts that immediately get frozen. All that crime and nothing to show for it.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'identity_theft_close',
        text: 'Close the browser. Some doors should stay shut.',
        outcomes: [
          {
            weight: 100,
            description:
              'You close the tab, clear your history, and take a shower because you somehow feel dirty. Good call. The FBI catches the people who did download it.',
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
    description:
      'An old acquaintance shows you a $100 bill. Then shows you another one. They\'re identical. "Printed them myself," he grins. The quality is impressive — you can barely tell the difference. He offers to sell you $5,000 in counterfeits for $500 real.',
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
        text: 'Buy the counterfeits. 10x return? Easy math.',
        outcomes: [
          {
            weight: 25,
            description:
              'You carefully spend the fake bills at various stores over several weeks. Small purchases, different locations, never the same place twice. You net about $4,000 in real goods. Walter White would be proud.',
            effects: [
              { type: 'money', value: 3500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'The first cashier you try holds the bill up to the light, grabs a counterfeit pen, and the bill fails spectacularly. "Barely tell the difference" was apparently a generous assessment. The Secret Service gets involved. Yes, the actual Secret Service. They do more than protect presidents.',
            effects: [
              { type: 'money', value: -500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'prison', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'You spend a few successfully, then realize you\'re looking over your shoulder every second of every day. The paranoia eats you alive. You end up burning the rest of the counterfeits in your bathtub at 2 AM.',
            effects: [
              { type: 'money', value: 200, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'counterfeit_pass',
        text: 'Decline. Counterfeiting is a federal offense.',
        outcomes: [
          {
            weight: 100,
            description:
              'You pass. Your friend gets caught three months later trying to buy a used Honda with $15,000 in fake hundreds. The car dealer was a retired cop. You really dodged a bullet.',
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
    description:
      'A well-dressed man approaches you at a bar. He knows your name. He knows your record. He says his "organization" has been watching you, and they\'re impressed. He slides a business card across the table. It just has a phone number. "Call when you\'re ready to make real money."',
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
        text: 'Make the call. You\'re ready for the big leagues.',
        outcomes: [
          {
            weight: 60,
            description:
              'You\'re in. The initiation involves more paperwork than you expected — apparently even organized crime has HR. You\'re given a territory and a "mentor" named Big Tony who has suspiciously few fingers.',
            effects: [
              { type: 'money', value: 2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -25, operation: 'add' },
              { type: 'add_trait', value: 'connected' },
            ],
          },
          {
            weight: 40,
            description:
              'The "initiation" is doing a job that goes sideways. You barely make it out. On the bright side, you\'re now too deep to quit. On the dark side, you\'re now too deep to quit.',
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
        text: 'Burn the card. You work alone.',
        outcomes: [
          {
            weight: 70,
            description:
              'The man nods respectfully and leaves. They don\'t bother you again. Some doors, once closed, stay closed.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'Declining the offer is taken as a sign of disrespect. Nothing happens immediately, but you notice the same car parked outside your place for the next week. Probably nothing.',
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
    description:
      'Word on the street is that a rival crew has been moving in on your territory. Your associates expect you to handle it. "Handle it" apparently means anything from a stern conversation to... well, the other thing.',
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
        text: 'Confront the rival crew directly.',
        outcomes: [
          {
            weight: 35,
            description:
              'Your reputation precedes you. The rival crew backs down after a tense standoff. No shots fired. No blood spilled. Just pure intimidation. You\'re basically a diplomat with tattoos.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'money', value: 1000, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Things escalate. A brawl breaks out. You take a few hits but hold your ground. The territory stays yours, but you\'re going to need ice. And a lawyer. And possibly stitches.',
            effects: [
              { type: 'stat', target: 'health', value: -25, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'money', value: 500, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'The rivals came prepared. You did not. A humbling retreat through an alley that smells like regret and dumpster juice. Your associates are not pleased.',
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
        text: 'Try to negotiate a split.',
        outcomes: [
          {
            weight: 50,
            description:
              'Surprising everyone, diplomacy works. You split the territory. Both sides profit less but nobody bleeds. Your boss calls it "mature." From him, that\'s practically a love letter.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'money', value: 300, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'They interpret "negotiate" as "weakness." The situation gets worse. Now they want ALL of your territory. Your associates blame you for making them look soft.',
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
    description:
      'The organization needs clean money. They\'ve identified a struggling laundromat (ironic) that could serve as a front. Your job: run the books, make dirty money look squeaky clean. Pun fully intended.',
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
        text: 'Take the gig. Time to cook the books.',
        outcomes: [
          {
            weight: 40,
            description:
              'You\'re a natural. The laundromat "earns" $50,000 a month in the books. The IRS doesn\'t blink. Your cut is $3,000 and you now have a very boring cover story about fabric softener.',
            effects: [
              { type: 'money', value: 3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'An IRS auditor notices that your laundromat earns more per square foot than a Manhattan hedge fund. The investigation takes six months. You spend those six months stress-eating and not sleeping.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'You accidentally launder the money so well that the laundromat becomes a legitimately successful business. Regular customers love it. You\'re somehow both a criminal and a small business success story.',
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
        text: 'Decline. Financial crimes bore you.',
        outcomes: [
          {
            weight: 100,
            description:
              'You pass. Someone else takes the gig and immediately gets audited. You feel like you dodged a tax-shaped bullet.',
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
    description:
      'One of your associates is facing trial, and there\'s a witness who could put them away. The organization wants you to "talk" to the witness. "Just talk. Nothing physical. Unless talking doesn\'t work."',
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
        text: 'Pay the witness a visit.',
        outcomes: [
          {
            weight: 35,
            description:
              'You knock on their door, say very little but say it very menacingly, and leave. The witness suddenly develops amnesia on the stand. Your associate walks free. You get a nice bonus.',
            effects: [
              { type: 'money', value: 2000, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The witness is wearing a wire. The cops were expecting exactly this move. You walked into a setup. Witness tampering charges are added to your growing collection of legal problems.',
            effects: [
              { type: 'stat', target: 'happiness', value: -30, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'prison', value: 6, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The witness isn\'t home. Their neighbor answers instead and turns out to be extremely chatty. You end up spending 45 minutes hearing about their cat\'s surgery. Mission failed in the most mundane way possible.',
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
            description:
              'Your associates are disappointed but respect the boundary. Someone else does the dirty work. Your hands stay clean. Relatively.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Refusing is seen as disloyalty. You\'re cut out of the next job. The cold shoulder from your crew is palpable. Even Big Tony won\'t look at you.',
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
    description:
      'Your crew has been casing a jewelry store for weeks. The plan is detailed, the timing is tight, and the potential payout is enormous. "One last job and we\'re set for life," says the guy who\'s said that about the last four jobs.',
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
        text: 'You\'re in. Time to make history.',
        hint: 'All or nothing',
        outcomes: [
          {
            weight: 20,
            description:
              'The heist goes flawlessly. Like a movie, but with more sweating. Your cut: $25,000 in jewelry, fenced for cash. For one beautiful moment, you understand why people do this.',
            effects: [
              { type: 'money', value: 25000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
              { type: 'reputation', value: -25, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'Someone trips the silent alarm 90 seconds in. You grab what you can and scatter. Your cut: $3,000. Less than planned. More than prison, which is where your driver ended up.',
            effects: [
              { type: 'money', value: 3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The cops were waiting. An informant tipped them off. The whole crew goes down. Cameras catch everything. Your lawyer watches the footage and sighs so deeply it counts as a weather event.',
            effects: [
              { type: 'stat', target: 'happiness', value: -40, operation: 'add' },
              { type: 'reputation', value: -30, operation: 'add' },
              { type: 'prison', value: 16, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'The getaway car won\'t start. The entire crew is standing outside a jewelry store with bags of stolen goods while your driver tries to jumpstart a 2003 Honda Civic. Surreal doesn\'t begin to cover it.',
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
            description:
              'You bail. The crew is furious. They do the job without you — and get caught. Every single one of them. You watch the news from your couch. Best decision you ever made.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You bail. The crew pulls it off perfectly and splits $100,000. You get nothing. They send you a postcard from Cancun. It says "Wish you were here." You very much wish you were there.',
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
    description:
      'The rival gang has crossed a line. They jumped one of your crew in broad daylight. Everyone\'s calling for retaliation. The boss wants a response that "sends a message." In this line of work, messages are rarely written on paper.',
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
        text: 'Ride with the crew. Loyalty demands it.',
        outcomes: [
          {
            weight: 30,
            description:
              'Your crew rolls up deep. The show of force alone is enough. The rival gang\'s leadership agrees to a sit-down. A truce is reached. You feel like a character in a Scorsese film.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'money', value: 1000, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'It turns into a full-scale street brawl. People are bleeding. Someone loses a tooth. Somehow a mailbox gets destroyed. Police sirens approach. Everyone scatters like cockroaches in the light.',
            effects: [
              { type: 'stat', target: 'health', value: -25, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The rival gang was expecting you. Ambush. You take a serious beating and barely get away. Hospital visit. Police questions. A very concerned nurse who\'s seen this too many times.',
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
        text: 'Sit this one out. Let the hotheads fight.',
        outcomes: [
          {
            weight: 50,
            description:
              'You stay home. Your crew handles it — messily. No one died, but two people are hospitalized. You\'re quietly labeled as "not reliable" within the organization.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Smart move. The retaliation goes badly and several crew members get arrested. You stayed clean. Sometimes the best move is no move at all.',
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
    description:
      'A police officer pulls you over, then says something unexpected: "I know who you work for. I can make problems go away... for the right price." He slides you his number. A dirty cop is the most useful and dangerous tool in the criminal toolkit.',
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
        text: 'Put him on the payroll. $500/month.',
        outcomes: [
          {
            weight: 45,
            description:
              'The cop delivers. He tips you off about raids, loses evidence, and redirects patrols away from your operations. Best $500 you\'ve ever spent. Your criminal efficiency increases dramatically.',
            effects: [
              { type: 'money', value: -500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'add_trait', value: 'police_connections' },
            ],
          },
          {
            weight: 30,
            description:
              'It\'s a sting operation. Internal Affairs has been tracking this cop for months and you just became their star witness — or rather, their star defendant. The irony of being arrested by a dirty cop is not lost on anyone.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -30, operation: 'add' },
              { type: 'prison', value: 6, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'The cop takes your money and provides exactly nothing useful. Every "tip" is public information. He\'s scamming the scammers. You got out-criminaled by a cop.',
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
            description:
              'You decline. The cop looks offended, then nervous, then drives away. You\'ll never know if it was real or a setup. That\'s probably for the best.',
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
    description:
      'During yard time, a fellow inmate shoulders you hard and calls you fresh meat. The guards are looking the other way — they always do during yard time. Everyone\'s watching to see what the new fish does.',
    category: 'crime',
    probability: 0.15,
    cooldown: 4,
    conditions: [
      { type: 'inPrison', value: true },
    ],
    choices: [
      {
        id: 'prison_fight_back',
        text: 'Fight. Show them you\'re not prey.',
        outcomes: [
          {
            weight: 35,
            description:
              'You land a solid hit and hold your own. The yard goes quiet. Nobody cheers — that\'s not how prison works — but you notice people stop bumping into you after that. Respect earned.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'He\'s been in here for seven years and works out twelve hours a day. You last about four seconds. The infirmary nurse recognizes you — this is your third visit. She doesn\'t even ask what happened anymore.',
            effects: [
              { type: 'stat', target: 'health', value: -25, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'Guards break it up after both of you land a few hits. Solitary for a week. Dark, quiet, and you get to rethink every decision that led to this concrete box.',
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
        text: 'Walk away. Survive. Adapt.',
        outcomes: [
          {
            weight: 50,
            description:
              'You walk away. Some inmates see it as weakness. Others see it as smart. The bully gets bored and moves on to someone else. Prison is high school with worse food.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Walking away is taken as an invitation. The bullying gets worse. Every day is a minefield. Your commissary keeps "disappearing." Prison survival requires a thicker skin than this.',
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
    description:
      'A guard approaches you in the hallway. He\'s the one everyone whispers about — Officer Davis, the one who "helps out" for the right price. He can get you anything from the outside: phones, snacks, substances. For a fee, of course.',
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
            description:
              'Officer Davis delivers. You now have a contraband phone hidden in your mattress. Connection to the outside world. You can coordinate, plan, and doomscroll at 2 AM just like a free person.',
            effects: [
              { type: 'money', value: -200, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The phone gets detected in a random cell search. Solitary confinement. Officer Davis denies everything and somehow you\'re the only one in trouble. Shocker.',
            effects: [
              { type: 'money', value: -200, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'prison', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'He brings you a phone from 2008. No internet. Just Snake and a cracked screen. You paid $200 for a Nokia. On the bright side, your Snake high score is now legendary.',
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
            description:
              'You decline. Officer Davis shrugs and moves on. Next week, the warden announces a crackdown on contraband. Cells are searched. You sleep peacefully with nothing to hide.',
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
    description:
      'In prison, who you know matters more than what you did. A group in the cafeteria makes room for you at their table. Their leader, a lifer named Marcus, nods at you. "We look out for our own. Interested?"',
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
            description:
              'Marcus\'s crew is solid. Nobody messes with you anymore. You get protection, commissary connections, and someone to watch your back. Prison just got 50% more survivable.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'stat', target: 'health', value: 5, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Marcus\'s crew has beef with another group. By joining, you inherited their enemies. The protection is real, but so are the threats from the other side of the cafeteria.',
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
        text: 'Stay independent. Don\'t owe anyone.',
        outcomes: [
          {
            weight: 50,
            description:
              'You keep to yourself. It\'s lonely but uncomplicated. Nobody asks you for favors. Nobody puts a target on your back. Just you and the walls.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Being unaffiliated makes you a target for everyone. Without a crew, you\'re just a free agent in a world where free agents get tested daily.',
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
    description:
      'Your cellmate has been digging. Not metaphorically. There\'s a tunnel behind the movie poster (yes, really) that leads to a drainage pipe that exits outside the perimeter. He needs a lookout. The tunnel is done. Tonight\'s the night.',
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
        text: 'Crawl to freedom. What\'s the worst that could happen?',
        hint: 'A LOT could happen',
        outcomes: [
          {
            weight: 15,
            description:
              'You crawl through 500 feet of drainage pipe that smells like humanity\'s worst decisions, emerge in a field, and run. You\'re free. Filthy, traumatized, and a fugitive — but free.',
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
            description:
              'The tunnel collapses twenty feet in. You\'re stuck in dirt and darkness, screaming, until guards dig you out three hours later. Solitary confinement. Extra time added. Your cellmate pretends he\'s never seen that tunnel before.',
            effects: [
              { type: 'stat', target: 'happiness', value: -30, operation: 'add' },
              { type: 'stat', target: 'health', value: -15, operation: 'add' },
              { type: 'prison', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'You make it to the drainage pipe and discover your cellmate\'s measurements were... optimistic. You are stuck. Not a little stuck. Completely, humiliatingly stuck. The fire department has to be called.',
            effects: [
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'prison', value: 6, operation: 'add' },
            ],
          },
          {
            weight: 15,
            description:
              'You emerge outside the perimeter... directly in front of a guard who stepped outside for a cigarette. He looks at you. You look at him. He slowly picks up his radio. This is rock bottom.',
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
            description:
              'Your cellmate goes alone. He makes it out. Good for him. You do your time the hard way — one day at a time, staring at the poster that used to hide a tunnel to freedom.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Your cellmate gets caught and thrown in solitary. If he had ratted you out as an accomplice, you\'d be there too. Smart call staying out of it.',
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
    description:
      'You\'ve been sent to solitary confinement. A concrete room the size of a parking space with a metal bed and a toilet. No windows. No company. Just you and your thoughts, and your thoughts are not great company right now.',
    category: 'crime',
    probability: 0.08,
    cooldown: 8,
    conditions: [
      { type: 'inPrison', value: true },
    ],
    choices: [
      {
        id: 'solitary_meditate',
        text: 'Use the time. Meditate. Reflect.',
        outcomes: [
          {
            weight: 50,
            description:
              'You spend the time in genuine reflection. Who are you? How did you get here? What would you do differently? By the time you get out, something has shifted. You feel... different. Calmer.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You try to meditate. Instead, you count the cracks in the ceiling (47), the bolts in the door (12), and the number of regrets you have (uncountable). The silence is deafening.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'solitary_survive',
        text: 'Just survive. One hour at a time.',
        outcomes: [
          {
            weight: 60,
            description:
              'You survive. Barely. When you rejoin general population, sunlight feels like an assault and other humans feel overwhelming. But you made it. That counts for something.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'The isolation breaks something. You come out harder, quieter, and with a thousand-yard stare that makes even the guards uncomfortable. Prison changes people. Solitary changes them faster.',
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
    description:
      'The prison offers an education program. GED classes, college courses, even a book club (though the selection is limited and heavily censored). The program coordinator says it could help with your parole hearing. It could also help with, you know, being a functional human.',
    category: 'crime',
    probability: 0.12,
    cooldown: 8,
    conditions: [
      { type: 'inPrison', value: true },
    ],
    choices: [
      {
        id: 'prison_edu_enroll',
        text: 'Sign up. Nothing but time anyway.',
        outcomes: [
          {
            weight: 70,
            description:
              'You dive into the coursework and discover you\'re actually smart when you apply yourself. Who knew? The teacher says you\'re one of the best students she\'s had. Your parole file gets a nice note.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The classes are mind-numbing. The textbooks are from 1997. The teacher means well but keeps calling you "honey." You learn a little, but mostly you learn patience.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'prison_edu_skip',
        text: 'School? In prison? Pass.',
        outcomes: [
          {
            weight: 100,
            description:
              'You skip the program. Another inmate who enrolled gets paroled early because of it. You still have three more seasons. Hindsight is 20/20 through prison bars.',
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
    description:
      'Your parole hearing is today. A panel of three serious-looking people will decide if you\'ve "been rehabilitated" based on a 15-minute conversation. Your entire future depends on your ability to look remorseful and articulate. No pressure.',
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
            description:
              'Your sincerity comes through. The board members nod. One even smiles. "Parole granted." Two words that sound like a choir of angels. You\'re getting out early.',
            effects: [
              { type: 'prison', value: -99, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 40, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The board acknowledges your progress but isn\'t convinced. "We\'ll revisit in six months." Six months. A lifetime in prison time. But at least the door isn\'t closed.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'Denied. The victim\'s family testified against you. Their words hit harder than anything in the prison yard. The board barely deliberated. Back to your cell.',
            effects: [
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'parole_perform',
        text: 'Put on the performance of a lifetime.',
        hint: 'Fake it till you make it',
        outcomes: [
          {
            weight: 35,
            description:
              'Your acting deserves an Oscar. Tears on command. The perfect cracking voice. "I\'ve found God and a purpose." Parole granted. You wink at the camera on the way out. Probably shouldn\'t have done that.',
            effects: [
              { type: 'prison', value: -99, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 35, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'The board chairwoman has been doing this for 30 years. She sees through you like glass. "You\'re performing, not growing." Denied. She\'s not wrong, and that somehow makes it worse.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'You overdo it. You literally fall to your knees and beg. A board member stifles a laugh. The court reporter is clearly struggling to maintain professionalism. Denied with extreme prejudice.',
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
    description:
      'Two detectives show up at your door. They have questions about "some recent incidents in the area." They\'re smiling, but it\'s the kind of smile a cat gives a mouse before dinner. They\'d love for you to "come down to the station for a chat."',
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
        text: 'Cooperate. Answer their questions.',
        outcomes: [
          {
            weight: 40,
            description:
              'You answer carefully. They don\'t have anything concrete. After two hours of circular questioning, they let you go. "Don\'t leave town," they say, which is what cops say when they have nothing.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You talk too much. In trying to seem innocent, you accidentally mention details about a crime that weren\'t public knowledge. The detectives exchange a look. That look is never good.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'prison', value: 4, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'They were actually investigating your neighbor, not you. Your panicked cooperation was unnecessary. The detectives thank you for your time and leave. You need to lie down.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'police_lawyer',
        text: '"I\'d like to speak with my lawyer."',
        outcomes: [
          {
            weight: 70,
            description:
              'The magic words. The detectives\' smiles falter. They hand you a card and leave. Your lawyer later tells you that you did the right thing. The only winning move is not to play.',
            effects: [
              { type: 'money', value: -500, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'Lawyering up makes them more suspicious. They come back with a warrant. Turns out "I want a lawyer" buys you time but not innocence.',
            effects: [
              { type: 'money', value: -1000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'police_run',
        text: 'Slam the door and run out the back.',
        hint: 'Definitely makes you look innocent',
        outcomes: [
          {
            weight: 20,
            description:
              'You escape through the back, hop a fence, and disappear into the neighborhood. They don\'t chase you. But now there\'s a warrant. You just escalated a chat into a manhunt.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 80,
            description:
              'You run directly into a third officer who was covering the back door. They\'re always covering the back door. You are arrested with grass stains on your pants and dignity on the ground.',
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
    description:
      'The trial date has arrived. You\'re sitting in a courtroom wearing your best clothes (which aren\'t great), listening to a prosecutor describe you as "a menace to society" with surprising theatrical flair. Your lawyer counters that you\'re "a product of circumstances." The jury looks bored.',
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
            description:
              'Your lawyer earns their fee. A brilliant cross-examination destroys the prosecution\'s key witness. The jury deliberates for six hours and returns: not guilty. You nearly collapse with relief.',
            effects: [
              { type: 'money', value: -3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 30, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'Guilty. The judge gives you a lengthy sentence and a lecture about wasted potential that somehow hurts more than the sentence itself. Your lawyer mouths "I\'m sorry" as you\'re led away.',
            effects: [
              { type: 'money', value: -5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -35, operation: 'add' },
              { type: 'prison', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'Hung jury. Mistrial. The prosecutor vows to retry. You\'re free for now, but the cloud hangs over you like the world\'s worst umbrella.',
            effects: [
              { type: 'money', value: -3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'trial_plea_deal',
        text: 'Take the plea deal. Reduced sentence.',
        outcomes: [
          {
            weight: 60,
            description:
              'You plead guilty to a lesser charge. The sentence is lighter — a few seasons instead of years. It\'s not great, but it could have been much worse. Your lawyer calls it "a win." A strange definition of winning.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'prison', value: 4, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'The plea deal includes community service and probation instead of prison. You spend weekends picking up trash in an orange vest. It\'s humbling, but at least you sleep in your own bed.',
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
    description:
      'You thought that crime was behind you. Then a witness comes forward — someone you didn\'t even know was there. They\'ve identified you. A detective leaves a voicemail. Your stomach drops to your shoes.',
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
            description:
              'Your lawyer discredits the witness on the stand. Their memory is fuzzy, their timeline doesn\'t add up, and they wear glasses they weren\'t wearing that night. Case dismissed.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The witness is credible. Very credible. The kind of witness lawyers hate. Your past catches up with you like a freight train.',
            effects: [
              { type: 'money', value: -3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'prison', value: 6, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'The witness identifies you but the statute of limitations has expired. You\'re free, but the detective gives you a look that says "I know what you did, and I\'ll remember." Sleep tight.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'witness_skip_town',
        text: 'Pack a bag. Time to relocate.',
        hint: 'Running makes everything worse',
        outcomes: [
          {
            weight: 30,
            description:
              'You move to a new city, get a fresh start. The case goes cold without you there to arrest. It\'s not a clean escape — you look over your shoulder forever — but it\'s freedom.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'add_trait', value: 'fugitive' },
            ],
          },
          {
            weight: 70,
            description:
              'Running triggers a warrant. You\'re flagged. Picked up at a traffic stop three states away. Fleeing charges are added on top. Your lawyer does the deep sigh thing again.',
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
    description:
      'You get a call from your lawyer. Bad news. Physical evidence from a past crime has been re-examined with new technology. DNA doesn\'t lie, and yours is apparently chatty. The walls feel like they\'re closing in.',
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
        text: 'Get the best lawyer money can buy.',
        outcomes: [
          {
            weight: 35,
            description:
              'Your lawyer finds a procedural error in how the evidence was stored. Chain of custody was broken. The evidence is thrown out. You walk free, poorer but free.',
            effects: [
              { type: 'money', value: -5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'The evidence is airtight. Your lawyer does their best, but DNA is DNA. The conviction is swift. The judge mentions the word "egregious" three times.',
            effects: [
              { type: 'money', value: -5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -35, operation: 'add' },
              { type: 'prison', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'Plot twist: the DNA evidence was contaminated. It matches you AND 4% of the population. The case is thrown out on reasonable doubt. Science gives, and science takes away.',
            effects: [
              { type: 'money', value: -3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'evidence_confess',
        text: 'Come clean. Confess everything.',
        outcomes: [
          {
            weight: 50,
            description:
              'Your confession and cooperation result in a reduced sentence. The judge acknowledges your honesty. It\'s prison, but it\'s less prison. Small mercies.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'prison', value: 4, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You confess, hoping for leniency. The judge gives you the full sentence anyway. "Honesty is its own reward," she says. You disagree from your cell.',
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
    description:
      'You pull up to a red light and the car next to you revs its engine. The driver looks over, nods, and revs again. It\'s the universal language of "want to race?" The road ahead is empty. Your engine is not.',
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
        text: 'Rev back. Light turns green. GO.',
        outcomes: [
          {
            weight: 30,
            description:
              'You win by two car lengths. The other driver gives you a respectful nod and peels off. Adrenaline surges through you. You feel alive. Also, you broke about nine traffic laws.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You lose. Badly. Your car was not built for this. The other driver is already at the next light by the time you catch up. Your car makes a concerning noise for the next week.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'money', value: -300, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'Cops. Immediately. They were parked right there. Both of you get pulled over. The ticket is astronomical. The cop says "you kids" even though you\'re possibly older than him.',
            effects: [
              { type: 'money', value: -800, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 15,
            description:
              'You lose control and clip a mailbox. Just a mailbox, thankfully. The homeowner comes out in a bathrobe looking like they want to commit a crime of their own.',
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
        text: 'Shake your head. You\'re not in Fast & Furious.',
        outcomes: [
          {
            weight: 100,
            description:
              'You drive the speed limit like a responsible adult. The other car rockets off and runs a red. You hear a crash two blocks later. You drive home very, very carefully.',
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
    description:
      'You discover a surprisingly effective phishing email template online. With a few tweaks, you could send it to thousands of people. Statistically, even a 0.1% success rate would net decent money. Morally? Well, that\'s a different statistic.',
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
        text: 'Send the emails. Cast a wide net.',
        outcomes: [
          {
            weight: 30,
            description:
              'Seven people fall for it. Total take: $4,200. You feel like a tech startup founder, except your product is crime and your investors are victims. The money spends the same though.',
            effects: [
              { type: 'money', value: 4200, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Your email gets flagged by spam filters immediately. Zero responses. You then realize you accidentally sent it from your personal email with your real name in the signature. Amateur hour.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'One of your targets is a cybersecurity expert who traces the email back to you, reports you to the FBI, and publishes your attempt on Reddit where it goes viral for being "impressively incompetent."',
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
        text: 'Delete the template. Too scummy even for you.',
        outcomes: [
          {
            weight: 100,
            description:
              'You delete it and close your laptop. Somewhere, a thousand potential victims go about their day undisturbed. You feel marginally better about yourself.',
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
    description:
      'Your landlord has been terrible. Like, historically terrible. He\'s refused every repair request, raised rent twice, and once told you the rats were "character." You overhear him bragging about his insurance policy on the building. A terrible idea forms.',
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
        text: 'Light it up. He deserves it.',
        hint: 'Felony. People could get hurt.',
        outcomes: [
          {
            weight: 15,
            description:
              'The building burns. Nobody is hurt. The insurance investigation blames faulty wiring (which was actually faulty). You\'re never suspected. Your landlord loses the building. Karma, delivered by fire.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Security cameras. Of course there are security cameras. You\'re arrested for arson — a felony that makes your previous crimes look like parking tickets. The judge uses words like "unconscionable."',
            effects: [
              { type: 'stat', target: 'happiness', value: -40, operation: 'add' },
              { type: 'reputation', value: -30, operation: 'add' },
              { type: 'prison', value: 16, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The fire gets out of control. Other buildings are threatened. Firefighters risk their lives. Nobody dies, but a family loses everything. The guilt is crushing and permanent.',
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
        text: 'Report the landlord to the housing authority instead.',
        outcomes: [
          {
            weight: 70,
            description:
              'The housing authority investigates and slaps your landlord with massive fines. He\'s forced to make repairs. Justice, delivered through paperwork instead of fire. Less dramatic, but nobody goes to prison.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The housing authority does nothing. Your landlord finds out you reported him and raises your rent again. The system works beautifully.',
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
    description:
      'A college buddy approaches you with a crypto scheme. He\'s created a new token called "SafeMoonRocket" and needs help pumping it on social media before they dump their holdings. "It\'s not illegal if it\'s crypto," he says, which is exactly what someone doing something illegal would say.',
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
        text: 'Join the pump. Influencer mode activated.',
        outcomes: [
          {
            weight: 30,
            description:
              'The pump works. The token moons. You and your buddy cash out $10,000 before it crashes. A thousand Reddit users lose their savings, but hey, you\'re not on Reddit.',
            effects: [
              { type: 'money', value: 10000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The SEC comes knocking. Turns out crypto fraud is, in fact, illegal. Your buddy flips on you faster than the token crashed. Legal fees devour everything.',
            effects: [
              { type: 'money', value: -5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'Nobody buys the token. It trades at $0.0000001 for eternity. You spent three weeks making Instagram posts about SafeMoonRocket for nothing. Your followers think you\'ve lost your mind.',
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
            description:
              'You decline. Six months later, your buddy is featured in a documentary about crypto fraud. He\'s wearing an ankle monitor in the interview. You feel extremely vindicated.',
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
    description:
      'You were so careful. Or so you thought. A detective shows you surveillance footage of your latest criminal endeavor, played in slow motion. You can actually see the moment your life fell apart, frame by frame. "Care to explain?" the detective asks.',
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
        text: '"That doesn\'t look like me."',
        outcomes: [
          {
            weight: 20,
            description:
              'Somehow, it works. The footage is grainy. Your lawyer argues it could be anyone. The case is dropped. You need to buy a lottery ticket because your luck is impossible.',
            effects: [
              { type: 'money', value: -1000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 80,
            description:
              'The detective zooms in on your face, clear as day, looks at you, looks at the screen, and raises an eyebrow. "Doesn\'t look like you?" Your lawyer puts his head in his hands.',
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
        text: 'Come clean. No point fighting a tape.',
        outcomes: [
          {
            weight: 60,
            description:
              'Your cooperation earns you a reduced sentence. The judge appreciates the honesty. Your lawyer appreciates the billable hours. Nobody wins, but you lose less.',
            effects: [
              { type: 'money', value: -1500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'prison', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Full confession, full sentence. The judge says your honesty is "noted but insufficient." You go to prison with the world\'s most hollow moral victory.',
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
    description:
      'Lying awake at 3 AM, staring at the ceiling, you have a moment of clarity. The money isn\'t worth the paranoia. The thrill isn\'t worth the prison time. Maybe — just maybe — it\'s time to go legit. The thought terrifies you more than any crime ever did.',
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
        text: 'Go legit. Leave the life behind.',
        outcomes: [
          {
            weight: 50,
            description:
              'You cut ties, delete numbers, and start applying for real jobs. It\'s hard. Employers see the record and flinch. But slowly, painfully, you build something honest. It doesn\'t pay as well. It lets you sleep though.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'remove_trait', value: 'connected' },
            ],
          },
          {
            weight: 50,
            description:
              'You try to leave the life, but the life doesn\'t want to leave you. Old associates call constantly. Opportunities keep falling in your lap. Going straight is harder than any crime you\'ve ever committed.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'go_straight_no',
        text: 'Nah. You are who you are.',
        outcomes: [
          {
            weight: 100,
            description:
              'The moment passes. You roll over and go back to sleep. Tomorrow, you\'ll be back at it. Some people can\'t change. Or won\'t. The difference doesn\'t matter much at 3 AM.',
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
