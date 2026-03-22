// ============================================================
// ThisLife — Random Events
// The absurd, unexpected, hilarious curveballs life throws.
// "Wait, what just happened?" moments.
// ============================================================

import type { GameEvent } from '../../types/events';

export const RANDOM_EVENTS: GameEvent[] = [
  // ==========================================================
  //  LIFE EVENTS
  // ==========================================================

  // -------------------------------------------------------
  // 1. Small Lottery Win
  // -------------------------------------------------------
  {
    id: 'random_small_lottery',
    title: 'Scratch-Off Sensation',
    description:
      'You bought a scratch ticket on a whim at a gas station. The cashier looked bored, you looked broke. But then — three matching symbols. You just won $5,000. The cashier is no longer bored.',
    category: 'life',
    probability: 0.06,
    minAge: 18,
    oneTime: false,
    cooldown: 20,
    conditions: [{ type: 'minAge', value: 18 }],
    choices: [
      {
        id: 'pocket_it',
        text: 'Pocket the cash',
        hint: 'Safe and boring — just like your savings account',
        outcomes: [
          {
            weight: 1,
            description: 'You deposit the money and feel responsible for exactly one afternoon.',
            effects: [
              { type: 'money', value: 5_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'buy_more_tickets',
        text: 'Buy $200 more in scratch tickets',
        hint: 'The house always wins... unless?',
        outcomes: [
          {
            weight: 6,
            description: 'You win absolutely nothing. Every ticket is a loser. The cashier smirks.',
            effects: [
              { type: 'money', value: 4_800, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description: 'You win another $500! The universe briefly rewards your recklessness.',
            effects: [
              { type: 'money', value: 5_300, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 1,
            description: 'ANOTHER big winner! $10,000 this time! The cashier calls the manager. The manager calls corporate. You are a statistical anomaly.',
            effects: [
              { type: 'money', value: 14_800, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'treat_stranger',
        text: 'Buy everyone in the store a coffee',
        hint: 'Generosity looks good on you',
        outcomes: [
          {
            weight: 1,
            description:
              'You spend $60 on coffee for strangers. Three people cry. One gives you a hug that lasts uncomfortably long. Worth it.',
            effects: [
              { type: 'money', value: 4_940, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 2. Big Lottery Win
  // -------------------------------------------------------
  {
    id: 'random_big_lottery',
    title: 'The Jackpot',
    description:
      'You check your lottery numbers three times. Then a fourth time. Then you call your mother. Then you faint. You have won $250,000. This is not a drill.',
    category: 'life',
    probability: 0.01,
    minAge: 18,
    oneTime: true,
    conditions: [{ type: 'minAge', value: 18 }],
    choices: [
      {
        id: 'invest_wisely',
        text: 'Hire a financial advisor',
        hint: 'Boring, but your future self will send a thank-you card',
        outcomes: [
          {
            weight: 7,
            description:
              'The advisor puts you in index funds. In ten years you will be very grateful and very boring at dinner parties.',
            effects: [
              { type: 'money', value: 230_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'The "advisor" turns out to be a guy named Kevin who works out of a Denny\'s. You lose $20,000 in fees before you catch on.',
            effects: [
              { type: 'money', value: 210_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'blow_it_all',
        text: 'Live like royalty for a month',
        hint: 'Champagne tastes, bank account consequences',
        outcomes: [
          {
            weight: 1,
            description:
              'You rent a yacht, buy a designer wardrobe, and eat at restaurants where the menu has no prices. The month ends. The money is mostly gone. The Instagram photos are forever.',
            effects: [
              { type: 'money', value: 40_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 30, operation: 'add' },
              { type: 'stat', target: 'looks', value: 5, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'quit_job_lottery',
        text: 'Quit your job dramatically',
        hint: 'That fantasy email you always drafted',
        outcomes: [
          {
            weight: 5,
            description:
              'You send the email. You clean out your desk. You walk out to your car and sit there for 20 minutes questioning everything. But it felt amazing.',
            effects: [
              { type: 'money', value: 250_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
              { type: 'career_satisfaction', value: 0, operation: 'set' },
            ],
          },
          {
            weight: 5,
            description:
              'You send the email... then realize you hit Reply All. Your boss, your boss\'s boss, and the entire HR department have now seen you call the office "a soul-crushing beige nightmare." Legendary.',
            effects: [
              { type: 'money', value: 250_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 3. Car Accident
  // -------------------------------------------------------
  {
    id: 'random_car_accident',
    title: 'Fender Bender From Hell',
    description:
      'Someone rear-ends you at a stoplight while they were texting. Your bumper is crumpled, your coffee is everywhere, and your neck feels like it owes you an apology.',
    category: 'life',
    probability: 0.12,
    minAge: 16,
    cooldown: 8,
    conditions: [{ type: 'minAge', value: 16 }],
    choices: [
      {
        id: 'exchange_insurance',
        text: 'Exchange insurance info like an adult',
        hint: 'The responsible path, paved with paperwork',
        outcomes: [
          {
            weight: 6,
            description:
              'Insurance covers it. You get a rental. The rental is a Nissan Versa. You have never felt less alive.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'The other driver\'s insurance is expired. Yours hikes your premium. You mutter "unbelievable" at least forty times.',
            effects: [
              { type: 'money', value: -2_000, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'fake_injury',
        text: 'Overreact and fake a neck injury',
        hint: 'Your acting career finally pays off',
        outcomes: [
          {
            weight: 4,
            description:
              'You win a $15,000 settlement. You wear the neck brace for two months. Your family is suspicious but too polite to say anything.',
            effects: [
              { type: 'money', value: 15_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 6,
            description:
              'The insurance investigator catches you on camera doing jumping jacks the very next day. Your claim is denied and you owe legal fees.',
            effects: [
              { type: 'money', value: -5_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'road_rage_response',
        text: 'Lose your temper completely',
        hint: 'Deep breaths... or not',
        outcomes: [
          {
            weight: 3,
            description:
              'You scream at the other driver for five solid minutes. They cry. You feel terrible. Everyone at the stoplight is staring.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 7,
            description:
              'The other driver turns out to be an off-duty cop. You are now getting a ticket AND your car is still wrecked. Congratulations.',
            effects: [
              { type: 'money', value: -3_000, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 4. House Fire
  // -------------------------------------------------------
  {
    id: 'random_house_fire',
    title: 'Something\'s Burning (And It\'s Not Dinner)',
    description:
      'You wake up at 3 AM to the smoke detector screaming. Your kitchen is on fire — apparently the toaster has finally chosen violence. Time to move.',
    category: 'life',
    probability: 0.04,
    minAge: 18,
    oneTime: false,
    cooldown: 40,
    conditions: [{ type: 'minAge', value: 18 }],
    choices: [
      {
        id: 'call_911',
        text: 'Call 911 and evacuate',
        hint: 'Survival: a solid life strategy',
        outcomes: [
          {
            weight: 6,
            description:
              'Fire department arrives quickly. The kitchen is destroyed but the house is salvageable. Your toaster is not.',
            effects: [
              { type: 'money', value: -8_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'The fire spreads fast. You lose most of your belongings. Insurance covers some of it. The firefighter who carries you out is unfairly attractive.',
            effects: [
              { type: 'money', value: -20_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'fight_fire',
        text: 'Grab a fire extinguisher and fight it',
        hint: 'Hero complex, activate',
        outcomes: [
          {
            weight: 5,
            description:
              'You actually put it out! You stand in your ruined kitchen in your underwear, fire extinguisher in hand, feeling like an action hero. The cat is unimpressed.',
            effects: [
              { type: 'money', value: -3_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'The fire extinguisher expired in 2014. It makes a sad little puff and dies. The fire does not. You run outside in your socks.',
            effects: [
              { type: 'money', value: -15_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'stat', target: 'health', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'save_stuff',
        text: 'Try to grab your valuables first',
        hint: 'Material possessions or material existence?',
        outcomes: [
          {
            weight: 4,
            description:
              'You save your laptop, your wallet, and a framed photo of your dog. Everything else is gone. But you have priorities.',
            effects: [
              { type: 'money', value: -10_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 6,
            description:
              'You trip over the cat and drop everything. You escape with nothing but second-degree burns and a new perspective on life.',
            effects: [
              { type: 'money', value: -20_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'stat', target: 'health', value: -20, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 5. Tornado / Natural Disaster
  // -------------------------------------------------------
  {
    id: 'random_tornado',
    title: 'Category: Oh No',
    description:
      'A tornado is heading straight for your neighborhood and it looks personally offended.',
    category: 'life',
    probability: 0.05,
    minAge: 5,
    cooldown: 40,
    conditions: [{ type: 'minAge', value: 5 }],
    choices: [
      {
        id: 'shelter',
        text: 'Get to the basement immediately',
        hint: 'Where the spiders live, but also where the living live',
        outcomes: [
          {
            weight: 7,
            description:
              'You ride it out in the basement. The tornado takes your mailbox and a lawn chair but spares the house. Nature is a bully.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'The tornado rips off your roof. You are now an open-floor-plan enthusiast whether you like it or not.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'money', value: -15_000, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'film_it',
        text: 'Stand outside and film it for clout',
        hint: 'Content creators never die... right?',
        outcomes: [
          {
            weight: 3,
            description:
              'The video goes viral. 2 million views. You are now "Tornado Guy" forever. Sponsors slide into your DMs.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'money', value: 5_000, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 7,
            description:
              'A flying trash can hits you square in the chest. Your phone is destroyed. You got zero footage and a bruised sternum.',
            effects: [
              { type: 'stat', target: 'health', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -1_200, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 6. Found Money on the Street
  // -------------------------------------------------------
  {
    id: 'random_found_money',
    title: 'Sidewalk Treasure',
    description:
      'You spot a crisp $100 bill on the sidewalk and nobody else has noticed yet.',
    category: 'life',
    probability: 0.1,
    minAge: 6,
    cooldown: 12,
    conditions: [{ type: 'minAge', value: 6 }],
    choices: [
      {
        id: 'keep_money',
        text: 'Pocket it and walk away casually',
        hint: 'Finders keepers is technically a legal doctrine... sort of',
        outcomes: [
          {
            weight: 8,
            description: 'You pocket the $100 and spend the rest of the day feeling like a secret agent.',
            effects: [
              { type: 'money', value: 100, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 2,
            description:
              'An old woman across the street shouts "HEY! THAT\'S MINE!" It wasn\'t hers. But the guilt follows you home.',
            effects: [
              { type: 'money', value: 100, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'turn_in_money',
        text: 'Turn it in to the police',
        hint: 'Karma is watching',
        outcomes: [
          {
            weight: 5,
            description:
              'The officer looks at you like you\'re insane. "You want to turn in... a hundred dollars?" But you feel great about it.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'Nobody claims it after 30 days. The police return it to you. You got $100 AND moral superiority. The rarest double win.',
            effects: [
              { type: 'money', value: 100, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 7. Jury Duty
  // -------------------------------------------------------
  {
    id: 'random_jury_duty',
    title: 'You\'ve Been Summoned',
    description:
      'A letter from the county courthouse arrives. You have been selected for jury duty. The American justice system needs YOU specifically to sit in a wooden chair for two weeks.',
    category: 'life',
    probability: 0.08,
    minAge: 18,
    cooldown: 16,
    conditions: [{ type: 'minAge', value: 18 }],
    choices: [
      {
        id: 'serve_jury',
        text: 'Show up and do your civic duty',
        hint: 'Free coffee and a front-row seat to drama',
        outcomes: [
          {
            weight: 5,
            description:
              'It\'s a petty theft case. The defendant stole 47 cans of SpaghettiOs. You learn more about SpaghettiOs than you ever wanted to know. Guilty.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
              { type: 'money', value: -200, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'It\'s a juicy corporate fraud case. You become the foreman. The experience is genuinely fascinating. You now understand what "fiduciary duty" means.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 2,
            description:
              'You hold out as the lone dissenter for three days. Eleven angry jurors stare at you. You eventually cave. 12 Angry You.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'dodge_jury',
        text: 'Try to get out of it',
        hint: 'Everyone has a cousin who "knows how"',
        outcomes: [
          {
            weight: 6,
            description:
              'You claim you can\'t be impartial because you "have strong feelings about the legal system." The judge sighs and dismisses you. Freedom tastes sweet.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'Your excuse doesn\'t work. You serve anyway, plus you now have a reputation as someone who tried to weasel out of civic duty. The bailiff remembers faces.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
              { type: 'money', value: -200, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 8. Celebrity Encounter
  // -------------------------------------------------------
  {
    id: 'random_celebrity_encounter',
    title: 'Is That...?',
    description:
      'You spot a genuine celebrity ordering an oat milk latte at your coffee shop.',
    category: 'life',
    probability: 0.08,
    minAge: 10,
    cooldown: 12,
    conditions: [{ type: 'minAge', value: 10 }],
    choices: [
      {
        id: 'play_it_cool',
        text: 'Play it cool, say nothing',
        hint: 'Treat them like a normal person. Radical concept.',
        outcomes: [
          {
            weight: 6,
            description:
              'You nod at them. They nod back. You both sip your coffee in mutual acknowledgment of the other\'s existence. You will tell this story at every party for the next five years.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'They actually strike up a conversation with you because you\'re the first person today who hasn\'t screamed. You chat for 10 minutes. You are now spiritually best friends.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'ask_selfie',
        text: 'Ask for a selfie',
        hint: 'Pics or it didn\'t happen',
        outcomes: [
          {
            weight: 5,
            description:
              'They smile, lean in, and your phone camera makes you look like a haunted potato. But the selfie exists. Proof is proof.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'They politely decline. You are crushed but pretend to be fine. You are not fine.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 2,
            description:
              'You trip walking toward them and spill your entire coffee on their shoes. They are gracious about it. You die inside.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'looks', value: -2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'freak_out',
        text: 'Completely lose your composure',
        hint: 'Your dignity left the chat',
        outcomes: [
          {
            weight: 1,
            description:
              'You scream. You actually scream. The celebrity laughs and gives you an autograph. The barista films the whole thing. You go mildly viral.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'reputation', value: -2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 9. Inheritance from Unknown Relative
  // -------------------------------------------------------
  {
    id: 'random_inheritance',
    title: 'A Stranger\'s Fortune',
    description:
      'A lawyer contacts you. Your great-uncle twice removed — a man you have literally never heard of — has died and left you $50,000. Apparently he liked your "energy." You never met him.',
    category: 'life',
    probability: 0.03,
    minAge: 18,
    oneTime: true,
    conditions: [{ type: 'minAge', value: 18 }],
    choices: [
      {
        id: 'accept_inheritance',
        text: 'Accept the inheritance gratefully',
        hint: 'Thank you, mysterious uncle',
        outcomes: [
          {
            weight: 7,
            description:
              'The money clears. You also receive a taxidermied raccoon and a handwritten note that says "Guard him well." You don\'t know what that means.',
            effects: [
              { type: 'money', value: 50_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'After taxes and legal fees, the $50,000 is actually $32,000. But also, you inherit a storage unit full of vintage furniture worth a small fortune. Uncle knew what he was doing.',
            effects: [
              { type: 'money', value: 60_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'investigate_uncle',
        text: 'Investigate who this uncle was',
        hint: 'Every family tree has a weird branch',
        outcomes: [
          {
            weight: 5,
            description:
              'He was a retired magician who lived on a houseboat. He had 14 cats. He once opened for David Copperfield. Incredible.',
            effects: [
              { type: 'money', value: 50_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 18, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'Turns out he was involved in some... legally questionable activities. The money is clean, the lawyer assures you. You choose to believe the lawyer.',
            effects: [
              { type: 'money', value: 50_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'donate_inheritance',
        text: 'Donate it all to charity',
        hint: 'Sainthood application pending',
        outcomes: [
          {
            weight: 1,
            description:
              'You donate every penny. The local animal shelter names a wing after you. You cry every time you visit. The raccoon taxidermy watches from your mantle.',
            effects: [
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 10. Identity Stolen
  // -------------------------------------------------------
  {
    id: 'random_identity_theft',
    title: 'There Are Two of You Now',
    description:
      'Your bank calls. Someone in another state has been using your identity to buy jet skis. You do not own a jet ski. You have never wanted a jet ski. But apparently "you" just bought three.',
    category: 'life',
    probability: 0.07,
    minAge: 18,
    cooldown: 20,
    conditions: [{ type: 'minAge', value: 18 }],
    choices: [
      {
        id: 'report_fraud',
        text: 'Report the fraud immediately',
        hint: 'Hours on hold, but necessary',
        outcomes: [
          {
            weight: 6,
            description:
              'After 47 phone calls and 12 hours on hold listening to smooth jazz, the fraud is resolved. You now have a credit monitoring subscription and trust issues.',
            effects: [
              { type: 'money', value: -500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'The bank takes months to resolve it. Your credit score tanks. You cannot buy a sandwich without being declined. Dark times.',
            effects: [
              { type: 'money', value: -3_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'hunt_thief',
        text: 'Try to track down the thief yourself',
        hint: 'You are not Liam Neeson but you have a very particular set of search engine skills',
        outcomes: [
          {
            weight: 3,
            description:
              'You actually find them through social media. They posted selfies on YOUR jet ski. The police are impressed. You are a legend.',
            effects: [
              { type: 'money', value: 2_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 7,
            description:
              'Your "investigation" consists of Googling your own name for three hours. You find nothing useful but discover a blog from 2009 where you reviewed a Subway sandwich. Life is strange.',
            effects: [
              { type: 'money', value: -1_500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 11. Alien Abduction
  // -------------------------------------------------------
  {
    id: 'random_alien_abduction',
    title: 'Close Encounter of the WTF Kind',
    description:
      'You wake up in a field at 4 AM with no memory, a strange burn mark, and sudden knowledge of seven alien languages.',
    category: 'life',
    probability: 0.005,
    minAge: 12,
    oneTime: true,
    conditions: [{ type: 'minAge', value: 12 }],
    choices: [
      {
        id: 'tell_everyone',
        text: 'Tell everyone what happened',
        hint: 'Believability: approximately zero',
        outcomes: [
          {
            weight: 7,
            description:
              'Nobody believes you. Your coworkers exchange glances. Your mother calls more often "just to check in." You become the person at parties who brings up aliens unprompted.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'A UFO podcast picks up your story. You have 50,000 loyal listeners who call you "The Chosen One." You have never felt more validated or more insane.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'money', value: 2_000, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'tell_nobody',
        text: 'Never speak of this again',
        hint: 'Some memories are best repressed',
        outcomes: [
          {
            weight: 1,
            description:
              'You bury the memory deep. But sometimes at night, you stare at the sky and the sky stares back. You definitely know things now that you didn\'t before.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'add_trait', value: 'mysterious' },
            ],
          },
        ],
      },
      {
        id: 'write_book',
        text: 'Write a book about it',
        hint: 'Science fiction... or science fact?',
        outcomes: [
          {
            weight: 4,
            description:
              'The book sells modestly in alien conspiracy circles. You make $8,000 and attend conventions where people wear tinfoil hats unironically. You fit right in.',
            effects: [
              { type: 'money', value: 8_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 6,
            description:
              'A major publisher picks it up as fiction. It becomes a bestseller. Nobody knows it\'s a memoir. You become rich from the most absurd truth you\'ll never prove.',
            effects: [
              { type: 'money', value: 40_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 12. Won a Contest You Forgot You Entered
  // -------------------------------------------------------
  {
    id: 'random_forgotten_contest',
    title: 'Congratulations, Apparently',
    description:
      'You get a phone call. "Congratulations! You\'ve won our sweepstakes!" You have zero memory of entering any sweepstakes. But according to them, drunk-you at a county fair six months ago filled out a card. Drunk-you is a genius.',
    category: 'life',
    probability: 0.06,
    minAge: 18,
    cooldown: 20,
    conditions: [{ type: 'minAge', value: 18 }],
    choices: [
      {
        id: 'claim_prize',
        text: 'Claim the prize',
        hint: 'If it sounds too good to be true...',
        outcomes: [
          {
            weight: 6,
            description:
              'It\'s real! You win an all-expenses-paid trip to... Toledo, Ohio. It\'s... fine. The hotel has a pool. You make the best of it.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'money', value: 500, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'You win a brand new car! Well, a brand new Kia. But still! Free car! You will never speak ill of county fairs again.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'money', value: 15_000, operation: 'add' },
            ],
          },
          {
            weight: 1,
            description:
              'It was a scam. They needed your social security number "for verification." You just gave a stranger in a call center the keys to your identity. Drunk-you is NOT a genius.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -5_000, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'ignore_contest',
        text: 'Assume it\'s a scam and hang up',
        hint: 'Trust issues save money sometimes',
        outcomes: [
          {
            weight: 7,
            description:
              'It was actually a scam. You dodged a bullet. Your paranoia has been vindicated.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'It was real. You find out months later that you could have won a car. You will think about this at 2 AM for the rest of your life.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 13. Wrongly Accused
  // -------------------------------------------------------
  {
    id: 'random_wrongly_accused',
    title: 'It Wasn\'t Me (Seriously)',
    description:
      'Your neighbor accuses you of stealing their garden gnome and the muddy footprint evidence is damning.',
    category: 'life',
    probability: 0.08,
    minAge: 12,
    cooldown: 16,
    conditions: [{ type: 'minAge', value: 12 }],
    choices: [
      {
        id: 'defend_yourself',
        text: 'Present a rigorous alibi',
        hint: 'Time to prove where you were at 11 PM on a Tuesday',
        outcomes: [
          {
            weight: 6,
            description:
              'Your alibi checks out — you were at home watching four consecutive hours of cooking shows. Your browser history confirms it. Vindicated by the Food Network.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'Nobody believes you. The neighborhood takes sides. Your other neighbor starts a petition. You are the Gnome Thief now. There is no going back.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'buy_replacement',
        text: 'Just buy them a new gnome to keep the peace',
        hint: 'Diplomacy costs $24.99 at Home Depot',
        outcomes: [
          {
            weight: 1,
            description:
              'You buy a replacement gnome. It\'s nicer than the original. Your neighbor is suspiciously pleased. You wonder if this was their plan all along.',
            effects: [
              { type: 'money', value: -30, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'investigate_gnome',
        text: 'Launch your own investigation',
        hint: 'CSI: Cul-de-sac',
        outcomes: [
          {
            weight: 5,
            description:
              'You check the neighbor\'s Ring camera. The gnome was taken by a raccoon. A RACCOON. You play the footage at the next HOA meeting. Standing ovation.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'Your investigation reveals nothing. But you did discover that another neighbor has been running an unlicensed hair salon out of their garage. The plot thickens.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 14. Went Viral for Something Embarrassing
  // -------------------------------------------------------
  {
    id: 'random_viral_embarrassment',
    title: 'Main Character (Derogatory)',
    description:
      'A video of you tripping up stairs with a tray of nachos has 4 million views and your mom already sent the link.',
    category: 'life',
    probability: 0.06,
    minAge: 13,
    cooldown: 20,
    conditions: [{ type: 'minAge', value: 13 }],
    choices: [
      {
        id: 'lean_into_it',
        text: 'Lean into the fame',
        hint: 'All publicity is good publicity... allegedly',
        outcomes: [
          {
            weight: 5,
            description:
              'You make a self-deprecating follow-up video. It gets 10 million views. Nacho companies want to sponsor you. You are now "The Nacho Stair Person." Embrace it.',
            effects: [
              { type: 'money', value: 5_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'Your follow-up video flops. The internet has already moved on. You are yesterday\'s meme. Somehow that\'s worse than being today\'s meme.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'hide_viral',
        text: 'Delete all social media and hide',
        hint: 'The digital equivalent of moving to Alaska',
        outcomes: [
          {
            weight: 7,
            description:
              'You disappear from the internet. The video eventually fades. You emerge six months later, scarred but wiser. Nobody at your new job knows.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'Someone at work recognizes you. "Aren\'t you the nacho stairs person?" You consider faking your own death.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 15. Stuck in an Elevator
  // -------------------------------------------------------
  {
    id: 'random_stuck_elevator',
    title: 'Going Nowhere',
    description:
      'The elevator stops between floors and you\'re trapped with a loud breather and a mysterious smell.',
    category: 'life',
    probability: 0.07,
    minAge: 10,
    cooldown: 16,
    conditions: [{ type: 'minAge', value: 10 }],
    choices: [
      {
        id: 'press_button',
        text: 'Press the emergency button and wait calmly',
        hint: 'Patience: the hardest game',
        outcomes: [
          {
            weight: 6,
            description:
              'Rescued in 45 minutes. You and the stranger bond over shared trauma. You exchange numbers. You never text each other. Classic.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'Three hours. THREE HOURS. The stranger turns out to be a retired astronaut with incredible stories. Worst-best day ever.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'pry_doors',
        text: 'Try to pry the doors open yourself',
        hint: 'Action hero or liability?',
        outcomes: [
          {
            weight: 3,
            description:
              'You actually get them open. The gap between floors is small enough to climb through. You feel like Jason Statham.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 7,
            description:
              'You pull a muscle immediately. The stranger watches you writhe on the elevator floor. The rescue team finds you in this position 90 minutes later.',
            effects: [
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'panic_elevator',
        text: 'Have a complete meltdown',
        hint: 'Claustrophobia doesn\'t negotiate',
        outcomes: [
          {
            weight: 1,
            description:
              'You panic so hard that the stranger — a retired therapist — gives you an impromptu counseling session. You emerge from the elevator with less anxiety than when you entered. Life is weird.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 16. Won a Free Vacation
  // -------------------------------------------------------
  {
    id: 'random_free_vacation',
    title: 'You\'re Going Somewhere!',
    description:
      'A radio station calls — you\'re their 100th caller from three weeks ago! You\'ve won an all-expenses-paid vacation to a tropical island. Or it\'s a timeshare scam. Only one way to find out.',
    category: 'life',
    probability: 0.05,
    minAge: 18,
    oneTime: true,
    conditions: [{ type: 'minAge', value: 18 }],
    choices: [
      {
        id: 'go_vacation',
        text: 'Pack your bags immediately',
        hint: 'YOLO was invented for exactly this',
        outcomes: [
          {
            weight: 5,
            description:
              'It\'s real! Beachside resort, unlimited buffet, crystal water. You get a tan and a new appreciation for doing absolutely nothing.',
            effects: [
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
              { type: 'stat', target: 'health', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'It\'s real, but the "resort" is basically a motel near a muddy beach. You make the best of it. The cocktails are strong and the sunsets are still beautiful.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'health', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 2,
            description:
              'You sit through a 4-hour timeshare presentation to get the "free" part. You accidentally sign something. You now own 1/52nd of a condo in Cancun.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'money', value: -8_000, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'decline_vacation',
        text: 'Decline — it\'s definitely a scam',
        hint: 'Safety over sand',
        outcomes: [
          {
            weight: 1,
            description:
              'You later see the radio station post photos of the real winner — your coworker — at a gorgeous resort. You stare at the photos for an hour. Regret is a cold beverage.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 17. Tax Audit
  // -------------------------------------------------------
  {
    id: 'random_tax_audit',
    title: 'The IRS Remembers',
    description:
      'A letter with no sense of humor arrives from the IRS. You are being audited. Those "creative deductions" from last year — your cat as a dependent, your Netflix as a business expense — have attracted attention.',
    category: 'life',
    probability: 0.06,
    minAge: 18,
    cooldown: 20,
    conditions: [{ type: 'minAge', value: 18 }],
    choices: [
      {
        id: 'cooperate_audit',
        text: 'Cooperate fully and honestly',
        hint: 'Honesty: cheaper than a lawyer sometimes',
        outcomes: [
          {
            weight: 5,
            description:
              'They find a few errors. You owe $2,000 in back taxes plus interest. The auditor is actually pretty nice about it. You exchange pleasantries about weather. Surreal.',
            effects: [
              { type: 'money', value: -2_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'The auditor discovers THEY owe YOU money. $800 refund! The IRS audited itself into paying you. You have never felt more powerful.',
            effects: [
              { type: 'money', value: 800, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 2,
            description:
              'Major discrepancies found. You owe $8,000. Your accountant suddenly "doesn\'t recall" doing your taxes. You fire your accountant.',
            effects: [
              { type: 'money', value: -8_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'hire_lawyer_audit',
        text: 'Hire a tax attorney',
        hint: 'Expensive but effective shield',
        outcomes: [
          {
            weight: 7,
            description:
              'The lawyer handles everything. You owe $500 in back taxes and $3,000 in legal fees. Net loss, but zero stress.',
            effects: [
              { type: 'money', value: -3_500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'The lawyer is so aggressive the IRS backs off entirely. You owe nothing. You now understand why lawyers drive BMWs.',
            effects: [
              { type: 'money', value: -3_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 18. Hit by a Golf Ball
  // -------------------------------------------------------
  {
    id: 'random_golf_ball',
    title: 'FORE! (Too Late)',
    description:
      'A golf ball rockets out of the sky and nails your shoulder — someone yells "FORE!" three seconds too late.',
    category: 'life',
    probability: 0.06,
    minAge: 8,
    cooldown: 20,
    conditions: [{ type: 'minAge', value: 8 }],
    choices: [
      {
        id: 'confront_golfer',
        text: 'March onto the course and confront the golfer',
        hint: 'Trespassing onto a golf course: a power move',
        outcomes: [
          {
            weight: 5,
            description:
              'The golfer is mortified and insists on buying you dinner. You end up at a steakhouse. Best meal you\'ve had in months. Thank you, incompetent golfer.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'The golfer says "Well, you shouldn\'t have been standing there." You were on a public sidewalk. You contemplate the nature of entitlement.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'keep_ball',
        text: 'Keep the ball as a trophy',
        hint: 'You earned this through suffering',
        outcomes: [
          {
            weight: 1,
            description:
              'You pocket the ball and walk away. It sits on your desk as a reminder that the universe has aim. The bruise fades. The memory doesn\'t.',
            effects: [
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'sue_golfer',
        text: 'Threaten to sue',
        hint: 'America\'s favorite pastime',
        outcomes: [
          {
            weight: 4,
            description:
              'The golf course settles for $3,000 to avoid the headache. Your shoulder feels better already.',
            effects: [
              { type: 'money', value: 3_000, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 6,
            description:
              'Your lawyer says you don\'t have a case because there was a "WARNING: GOLF BALLS" sign. You didn\'t read the sign. Reading: still important.',
            effects: [
              { type: 'money', value: -500, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 19. Bird Poops on You
  // -------------------------------------------------------
  {
    id: 'random_bird_poop',
    title: 'Aerial Assault',
    description:
      'A bird poops directly on your head in front of people — they say it\'s good luck, they\'re lying.',
    category: 'life',
    probability: 0.1,
    minAge: 3,
    cooldown: 12,
    conditions: [{ type: 'minAge', value: 3 }],
    choices: [
      {
        id: 'laugh_it_off',
        text: 'Laugh it off',
        hint: 'If you can\'t beat nature, join the joke',
        outcomes: [
          {
            weight: 6,
            description:
              'You laugh, everyone laughs, and weirdly, the rest of your day goes perfectly. Maybe it IS good luck. You still wash your hair three times.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'looks', value: -1, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'You find a $20 bill on your way home. Coincidence? Or the universe\'s apology for the bird thing? You choose to believe.',
            effects: [
              { type: 'money', value: 20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'freak_out_bird',
        text: 'Scream and flail wildly',
        hint: 'Understandable response, honestly',
        outcomes: [
          {
            weight: 1,
            description:
              'You scream. You wave your arms. The bird circles back and does it AGAIN. Twice! The universe is testing you and you are failing spectacularly.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 20. Found a Winning Scratch Ticket (on the ground)
  // -------------------------------------------------------
  {
    id: 'random_ground_scratcher',
    title: 'One Person\'s Trash',
    description:
      'You pick up a discarded scratch ticket on the ground. Out of boredom, you scratch off the remaining spots. Wait. WAIT. There are three matching symbols. This ticket is a $1,000 winner. Someone threw away a thousand dollars.',
    category: 'life',
    probability: 0.04,
    minAge: 18,
    cooldown: 40,
    conditions: [{ type: 'minAge', value: 18 }],
    choices: [
      {
        id: 'claim_ground_ticket',
        text: 'Rush to the store and claim it',
        hint: 'Possession is nine-tenths of the law',
        outcomes: [
          {
            weight: 8,
            description:
              'It\'s valid! $1,000 is yours! The cashier is confused why the ticket has a footprint on it. You don\'t explain.',
            effects: [
              { type: 'money', value: 1_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 2,
            description:
              'The store says the ticket is damaged and can\'t be scanned. You argue. They say no. You stare at the $1,000 ticket that is worth $0. Existence is pain.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'leave_ground_ticket',
        text: 'Put it back — karma',
        hint: 'Sainthood or stupidity? The line is thin.',
        outcomes: [
          {
            weight: 1,
            description:
              'You put it back. A child picks it up. The child\'s parent claims the money and buys the kid ice cream. You watch from across the street, a silent hero.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 21. Caught in a Flash Mob
  // -------------------------------------------------------
  {
    id: 'random_flash_mob',
    title: 'Why Is Everyone Dancing?',
    description:
      'A flash mob erupts around you in a mall and you\'re standing dead center with cameras everywhere.',
    category: 'life',
    probability: 0.06,
    minAge: 8,
    cooldown: 20,
    conditions: [{ type: 'minAge', value: 8 }],
    choices: [
      {
        id: 'join_dance',
        text: 'Start dancing with them',
        hint: 'Nobody remembers the wallflowers',
        outcomes: [
          {
            weight: 4,
            description:
              'You have no idea what the choreography is, but you COMMIT. Full body. Eyes closed. The flash mob organizer calls you a "beautiful chaos agent." The video gets 500k views.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 6,
            description:
              'You throw yourself into the dance and immediately crash into someone. A domino effect takes out three dancers. The video still goes viral, just not the way you hoped.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'freeze_mob',
        text: 'Stand completely still like a statue',
        hint: 'Become the eye of the storm',
        outcomes: [
          {
            weight: 1,
            description:
              'Your deer-in-headlights face becomes the thumbnail of the video. "That one person who had NO idea" becomes a meme. You are famous for being confused.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'flee_mob',
        text: 'Run away as fast as possible',
        hint: 'Flight response: engaged',
        outcomes: [
          {
            weight: 1,
            description:
              'You sprint through the dancers like a running back, knocking over a speaker. Security chases you. You are banned from this mall. It was worth it.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'health', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 22. Random Act of Kindness from a Stranger
  // -------------------------------------------------------
  {
    id: 'random_kindness',
    title: 'Unexpected Humanity',
    description:
      'On your worst day ever, a stranger hands you their umbrella and walks away in the rain.',
    category: 'life',
    probability: 0.1,
    minAge: 8,
    cooldown: 8,
    conditions: [{ type: 'minAge', value: 8 }],
    choices: [
      {
        id: 'accept_kindness',
        text: 'Accept it and pay it forward later',
        hint: 'The chain of kindness has to start somewhere',
        outcomes: [
          {
            weight: 7,
            description:
              'You take the umbrella. You cry a little. You buy a stranger coffee the next day. The cycle of not-being-terrible continues.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'You take the umbrella and later find a $10 bill tucked inside the handle. This stranger was either an angel or extremely forgetful.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'money', value: 10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'chase_stranger',
        text: 'Chase them down and give it back',
        hint: 'Stubborn pride or genuine concern?',
        outcomes: [
          {
            weight: 5,
            description:
              'You catch up. They insist you keep it. You insist they take it. You both stand in the rain arguing about who deserves to be less wet. Beautiful.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'They\'re already gone. Vanished into the rain like a benevolent ghost. You never see them again. You think about them sometimes.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 23. Freak Banana Peel Accident
  // -------------------------------------------------------
  {
    id: 'random_banana_peel',
    title: 'Life Imitates Cartoons',
    description:
      'You slip on an actual banana peel and land flat on your back in front of a crowd.',
    category: 'life',
    probability: 0.05,
    minAge: 6,
    cooldown: 20,
    conditions: [{ type: 'minAge', value: 6 }],
    choices: [
      {
        id: 'take_a_bow',
        text: 'Stand up and take a bow',
        hint: 'Dignity is a choice',
        outcomes: [
          {
            weight: 6,
            description:
              'You stand up, bow deeply, and the crowd actually applauds. Someone shouts "TEN OUT OF TEN!" You\'ve turned humiliation into performance art.',
            effects: [
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'You try to stand up and slip on the SAME banana peel. Twice. The crowd is filming. You will see this on the internet later.',
            effects: [
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'blame_banana',
        text: 'Loudly blame the banana peel',
        hint: 'Accountability: it was the banana\'s fault',
        outcomes: [
          {
            weight: 1,
            description:
              'You pick up the banana peel, hold it up like evidence in a courtroom, and shout "WHO LEFT THIS HERE?" Nobody answers. You throw it in the trash. Justice served.',
            effects: [
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 24. Mysterious Package Arrives
  // -------------------------------------------------------
  {
    id: 'random_mystery_package',
    title: 'You\'ve Got... Something',
    description:
      'A package arrives at your door. Your name, your address, but you didn\'t order anything. There\'s no return address. It\'s heavy. It makes a slight ticking sound. Or maybe that\'s your anxiety.',
    category: 'life',
    probability: 0.07,
    minAge: 18,
    cooldown: 20,
    conditions: [{ type: 'minAge', value: 18 }],
    choices: [
      {
        id: 'open_package',
        text: 'Open it immediately',
        hint: 'Curiosity killed the cat but satisfaction brought it back',
        outcomes: [
          {
            weight: 4,
            description:
              'It\'s a vintage clock (hence the ticking) from an eBay order you placed at 2 AM three weeks ago. You have no memory of this. Sleepy-you shops aggressively.',
            effects: [
              { type: 'money', value: -120, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'It\'s a care package from a friend you haven\'t spoken to in years. Snacks, a handwritten letter, and a photo of you from college where your hair is TERRIBLE. Heartwarming and humbling.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'It\'s someone else\'s Amazon order delivered to the wrong address. 47 rolls of toilet paper and a singing bass fish. You keep the fish.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'call_police_package',
        text: 'Call the authorities',
        hint: 'If you see something, say something',
        outcomes: [
          {
            weight: 7,
            description:
              'The bomb squad shows up. They X-ray it. It\'s a fruit basket from a real estate agent. Your neighbors will never let you live this down.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'Turns out it actually WAS something sketchy — wrong address for a smuggling operation. You helped crack a case. A detective shakes your hand.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 25. Power Outage Adventure
  // -------------------------------------------------------
  {
    id: 'random_power_outage',
    title: 'Darkness Falls',
    description:
      'The power goes out on the whole block — no WiFi, no TV, and your phone is at 12%.',
    category: 'life',
    probability: 0.1,
    minAge: 5,
    cooldown: 8,
    conditions: [{ type: 'minAge', value: 5 }],
    choices: [
      {
        id: 'enjoy_outage',
        text: 'Light candles and enjoy the quiet',
        hint: 'Who needs electricity when you have vibes?',
        outcomes: [
          {
            weight: 6,
            description:
              'You sit in candlelight, read an actual book, and go to bed at 9 PM. You sleep better than you have in months. Maybe technology was the problem all along.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'health', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'You knock over a candle and almost start a second fire event. You switch to a flashlight. Electricity was invented for a reason.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'panic_outage',
        text: 'Panic about the food in your fridge',
        hint: 'That leftover sushi has 4 hours, tops',
        outcomes: [
          {
            weight: 5,
            description:
              'You eat everything perishable in one sitting. An entire rotisserie chicken. A pint of ice cream. Leftover pad thai. You feel like a bloated king.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'The power comes back 20 minutes later. You panicked over nothing. The ice cream hasn\'t even softened.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'neighborhood_outage',
        text: 'Go outside and meet your neighbors',
        hint: 'Catastrophe: the ultimate icebreaker',
        outcomes: [
          {
            weight: 6,
            description:
              'The whole block is outside. Someone brings a guitar. Someone else brings beer. You have the best block party that was never planned. You learn your neighbor\'s name for the first time in three years.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'Your neighbors are weird. One is a conspiracy theorist who blames the outage on "them." You nod politely and retreat inside.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 26. Neighborhood Drama
  // -------------------------------------------------------
  {
    id: 'random_neighborhood_drama',
    title: 'The HOA Has Opinions',
    description:
      'Your neighbor has painted their house neon purple. The HOA is in meltdown. Petitions are circulating. Battle lines are being drawn. You must choose a side in the Great Purple House War.',
    category: 'life',
    probability: 0.07,
    minAge: 18,
    cooldown: 12,
    conditions: [{ type: 'minAge', value: 18 }],
    choices: [
      {
        id: 'support_purple',
        text: 'Support the purple house',
        hint: 'Freedom of expression (and eyesore)',
        outcomes: [
          {
            weight: 5,
            description:
              'The purple house stays. Your neighbor is grateful and becomes your ride-or-die. Three other houses paint themselves wild colors in solidarity. Your street looks like a Lisa Frank folder.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'The HOA retaliates. Your garbage pickup is "accidentally" skipped for two weeks. The purple house neighbor doesn\'t seem bothered. You are bothered.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'stay_neutral',
        text: 'Stay completely neutral',
        hint: 'Switzerland had the right idea',
        outcomes: [
          {
            weight: 1,
            description:
              'Both sides accuse you of being a coward. You spend the summer being passive-aggressively waved at. Nobody brings you cookies anymore.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // ==========================================================
  //  HEALTH EVENTS
  // ==========================================================

  // -------------------------------------------------------
  // 27. Caught the Flu
  // -------------------------------------------------------
  {
    id: 'random_flu',
    title: 'The Great Unwellness',
    description:
      'You wake up shivering and sneezing. The flu has arrived.',
    category: 'health',
    probability: 0.08,
    minAge: 8,
    cooldown: 6,
    conditions: [
      { type: 'minAge', value: 8 },
    ],
    choices: [
      {
        id: 'rest_flu',
        text: 'Rest and drink fluids like the doctor says',
        hint: 'Chicken soup and daytime TV',
        outcomes: [
          {
            weight: 7,
            description:
              'You spend a week in bed watching an entire Netflix series. You emerge pale, weak, but caught up on prestige television.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'It turns into bronchitis. Three weeks of coughing. You develop abs from coughing so hard. Silver lining.',
            effects: [
              { type: 'stat', target: 'health', value: -18, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'push_through_flu',
        text: 'Push through it and go to work',
        hint: 'Your coworkers will definitely appreciate this',
        outcomes: [
          {
            weight: 4,
            description:
              'You infect the entire office. Seven people call in sick the next week. Your boss sends a very pointed email about "coming to work while symptomatic." Oops.',
            effects: [
              { type: 'stat', target: 'health', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 6,
            description:
              'You tough it out, but you\'re running at 30% capacity. Everything takes twice as long. Your body files a formal complaint.',
            effects: [
              { type: 'stat', target: 'health', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'career_performance', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'home_remedies',
        text: 'Try every home remedy you can find',
        hint: 'Garlic, ginger, and questionable internet advice',
        outcomes: [
          {
            weight: 5,
            description:
              'You drink a concoction of garlic, honey, apple cider vinegar, and something your grandmother swears by. It tastes like a war crime. But you DO feel better in three days.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'You try putting Vicks VapoRub on your feet with socks. It does nothing for the flu but your feet have never been softer.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 28. Food Poisoning
  // -------------------------------------------------------
  {
    id: 'random_food_poisoning',
    title: 'Revenge of Last Night\'s Sushi',
    description:
      'Something you ate is fighting back. Hard.',
    category: 'health',
    probability: 0.08,
    minAge: 14,
    cooldown: 8,
    conditions: [
      { type: 'minAge', value: 14 },
    ],
    choices: [
      {
        id: 'suffer_quietly',
        text: 'Suffer in silence and wait it out',
        hint: 'This too shall pass... eventually',
        outcomes: [
          {
            weight: 7,
            description:
              'Twelve miserable hours later, it passes. You have lost 3 pounds and all desire to eat sushi ever again. You drink Gatorade like it\'s holy water.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'It doesn\'t pass. You end up in the ER getting IV fluids while a nurse who\'s seen it all says "Gas station sushi?" without even asking. They always know.',
            effects: [
              { type: 'stat', target: 'health', value: -18, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'money', value: -800, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'complain_restaurant',
        text: 'Call the restaurant to complain',
        hint: 'Someone must answer for this',
        outcomes: [
          {
            weight: 5,
            description:
              'The restaurant offers a $50 gift card. To their restaurant. For food. The food that just tried to kill you. You decline politely.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'The health department investigates. Three other people reported the same thing. You are now a public health hero. Your stomach is not impressed.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 29. Broken Bone from Random Accident
  // -------------------------------------------------------
  {
    id: 'random_broken_bone',
    title: 'Snap, Crackle, OWWW',
    description:
      'You step wrong and hear a crack. That\'s not good.',
    category: 'health',
    probability: 0.06,
    minAge: 12,
    cooldown: 12,
    conditions: [
      { type: 'minAge', value: 12 },
    ],
    choices: [
      {
        id: 'er_broken',
        text: 'Go to the emergency room',
        hint: 'The responsible choice with the irresponsible price tag',
        outcomes: [
          {
            weight: 6,
            description:
              'Hairline fracture. Six weeks in a boot. People sign it. Most of the signatures are from coworkers you barely know writing "Get well soon!" in identical handwriting.',
            effects: [
              { type: 'stat', target: 'health', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'money', value: -2_500, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'Full break. Cast for three months. You discover you cannot itch inside a cast and it slowly drives you insane. You develop an intimate relationship with a chopstick.',
            effects: [
              { type: 'stat', target: 'health', value: -22, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -5_000, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'walk_it_off',
        text: 'Walk it off, it\'s probably fine',
        hint: 'Narrator: it was not fine',
        outcomes: [
          {
            weight: 3,
            description:
              'It WAS just a sprain! You rest it, ice it, and feel smugly self-diagnosed.',
            effects: [
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 7,
            description:
              'It was not fine. You walked on a broken ankle for two days. The doctor looks at you the way a mechanic looks at someone who drove 100 miles on a flat tire.',
            effects: [
              { type: 'stat', target: 'health', value: -25, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -6_000, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 30. Diagnosed with Something Serious
  // -------------------------------------------------------
  {
    id: 'random_serious_diagnosis',
    title: 'The Doctor Sits Down',
    description:
      'You know it\'s bad when the doctor sits down before speaking. They\'ve found something. It\'s treatable, but it\'s going to be a long road. The room gets very quiet.',
    category: 'health',
    probability: 0.04,
    minAge: 30,
    cooldown: 40,
    conditions: [{ type: 'minAge', value: 30 }],
    choices: [
      {
        id: 'aggressive_treatment',
        text: 'Pursue aggressive treatment immediately',
        hint: 'Fight with everything you\'ve got',
        outcomes: [
          {
            weight: 6,
            description:
              'Months of treatment. Exhausting, painful, isolating. But the follow-up scans come back clear. You are in remission. You hug the oncologist. They hug you back.',
            effects: [
              { type: 'stat', target: 'health', value: -25, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'money', value: -20_000, operation: 'add' },
              { type: 'add_trait', value: 'resilient' },
            ],
          },
          {
            weight: 4,
            description:
              'Treatment is rough. Really rough. But you respond well, and in a year you\'re back to almost normal. The experience changes your perspective on everything.',
            effects: [
              { type: 'stat', target: 'health', value: -30, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -30_000, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'second_opinion',
        text: 'Get a second opinion',
        hint: 'Trust, but verify',
        outcomes: [
          {
            weight: 4,
            description:
              'Second doctor confirms. But they recommend a less aggressive approach that works just as well. Time and money saved. Second opinions exist for a reason.',
            effects: [
              { type: 'stat', target: 'health', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'money', value: -12_000, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'The second opinion reveals it was a misdiagnosis! You are fine. FINE. You sit in your car in the parking lot and happy-cry for an hour.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'money', value: -2_000, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'Both doctors agree. You get treatment. It works. The delay from getting the second opinion didn\'t matter. You\'re okay.',
            effects: [
              { type: 'stat', target: 'health', value: -25, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'money', value: -18_000, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 31. Mental Health Episode — Depression
  // -------------------------------------------------------
  {
    id: 'random_depression',
    title: 'The Gray Season',
    description:
      'The things that used to make you happy just don\'t anymore — something is wrong, and it has a name.',
    category: 'health',
    probability: 0.1,
    minAge: 14,
    cooldown: 12,
    conditions: [{ type: 'minAge', value: 14 }],
    choices: [
      {
        id: 'seek_therapy',
        text: 'See a therapist',
        hint: 'Talking to someone who actually went to school for this',
        outcomes: [
          {
            weight: 7,
            description:
              'It takes a few sessions to open up, but eventually it helps. You learn coping mechanisms that actually work. The gray lifts, slowly but surely.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'money', value: -2_000, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'Your therapist is incredible. You start to understand patterns in your thinking you never noticed. It\'s hard work, but you feel genuinely better. Worth every penny.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'money', value: -3_000, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'add_trait', value: 'self-aware' },
            ],
          },
        ],
      },
      {
        id: 'push_through_depression',
        text: 'Try to push through it alone',
        hint: 'The bootstrap method (not recommended)',
        outcomes: [
          {
            weight: 3,
            description:
              'You force yourself to exercise and maintain routines. It helps, barely. You survive the episode but it takes months longer than it needed to.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 7,
            description:
              'It gets worse. Much worse. You withdraw from everything. Friends call and you don\'t pick up. Months blur together. Please, talk to someone.',
            effects: [
              { type: 'stat', target: 'health', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -25, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'confide_friend',
        text: 'Open up to a friend',
        hint: 'Vulnerability is not weakness',
        outcomes: [
          {
            weight: 6,
            description:
              'Your friend listens without judgment. They check on you every day. They drag you out for walks. It\'s not a cure, but it\'s a lifeline.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'Your friend says "just think positive!" and you realize this particular friend is not equipped for this conversation. But they try, and that matters.',
            effects: [
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 32. Addiction — Gambling
  // -------------------------------------------------------
  {
    id: 'random_gambling_addiction',
    title: 'Just One More Bet',
    description:
      'What started as a fun night at the casino has become... a pattern. You\'re checking betting apps in the bathroom at work. Your savings account is shrinking. The thrill of the win is the only thing that makes you feel alive.',
    category: 'health',
    probability: 0.06,
    minAge: 18,
    cooldown: 20,
    conditions: [{ type: 'minAge', value: 18 }],
    choices: [
      {
        id: 'get_help_gambling',
        text: 'Recognize the problem and get help',
        hint: 'The first step is the hardest',
        outcomes: [
          {
            weight: 6,
            description:
              'You join a support group. The people there understand. Nobody judges. Quitting is hard — some weeks you white-knuckle through — but you do it.',
            effects: [
              { type: 'stat', target: 'health', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'money', value: -1_000, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'remove_trait', value: 'gambler' },
            ],
          },
          {
            weight: 4,
            description:
              'Recovery is non-linear. You slip up a few times. But each time you get back on the wagon a little faster. Progress isn\'t perfection.',
            effects: [
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'money', value: -5_000, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'double_down_gambling',
        text: 'You can control it. Just one more big win.',
        hint: 'Spoiler: you cannot control it',
        outcomes: [
          {
            weight: 2,
            description:
              'You win big. $10,000. The rush is incredible. You feel invincible. This will definitely not be a problem. (It will be a problem.)',
            effects: [
              { type: 'money', value: 10_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'add_trait', value: 'gambler' },
            ],
          },
          {
            weight: 8,
            description:
              'You lose $12,000 in a single weekend. You stare at your bank app at 4 AM. The balance is a number that makes your chest tight. This has to stop.',
            effects: [
              { type: 'money', value: -12_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'add_trait', value: 'gambler' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 33. Gym Injury
  // -------------------------------------------------------
  {
    id: 'random_gym_injury',
    title: 'Gains to Pains',
    description:
      'You were feeling strong. Too strong. You loaded up the bench press with an ambitious amount of weight, and your right shoulder said "absolutely not." A popping sound, a flash of pain, and your gym session is over.',
    category: 'health',
    probability: 0.08,
    minAge: 15,
    cooldown: 8,
    conditions: [{ type: 'minAge', value: 15 }],
    choices: [
      {
        id: 'rest_gym',
        text: 'Rest and recover properly',
        hint: 'Patience is a muscle too',
        outcomes: [
          {
            weight: 7,
            description:
              'Four weeks off. You do physical therapy. You come back stronger and — importantly — with correct form. Your shoulder forgives you.',
            effects: [
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'Six weeks of physical therapy. Your shoulder will never be quite the same. You become the person who says "I used to bench a lot more before my injury." Everyone has met this person.',
            effects: [
              { type: 'stat', target: 'health', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'money', value: -1_500, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'keep_lifting',
        text: 'Walk it off and keep lifting',
        hint: 'Your physical therapist is screaming somewhere',
        outcomes: [
          {
            weight: 3,
            description:
              'It actually was minor. You switch to lighter weights and feel fine. Your ego is the only thing bruised.',
            effects: [
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 7,
            description:
              'You tear something. Actually tear it. The doctor says "surgery" and you realize that maybe you should have taken a day off.',
            effects: [
              { type: 'stat', target: 'health', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -8_000, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 34. Allergic Reaction
  // -------------------------------------------------------
  {
    id: 'random_allergic_reaction',
    title: 'Body Says NO',
    description:
      'You try a new food and your face starts swelling. Allergic reaction.',
    category: 'health',
    probability: 0.07,
    minAge: 8,
    cooldown: 12,
    conditions: [
      { type: 'minAge', value: 8 },
    ],
    choices: [
      {
        id: 'epipen',
        text: 'Take antihistamines immediately',
        hint: 'Benadryl: the great equalizer',
        outcomes: [
          {
            weight: 7,
            description:
              'The swelling goes down. You sleep for 14 hours from the Benadryl. You wake up groggy but alive and deeply suspicious of all shellfish.',
            effects: [
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'money', value: -50, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'The swelling is bad. You end up at urgent care. They give you a shot and you feel better in an hour. You now carry an EpiPen everywhere like a tiny medical sword.',
            effects: [
              { type: 'stat', target: 'health', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'ignore_allergy',
        text: 'Ignore it, you\'re probably fine',
        hint: 'Your face disagrees',
        outcomes: [
          {
            weight: 3,
            description:
              'It goes away on its own. Turns out it was mild. But you look absolutely deranged in the photos from the dinner party.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'looks', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 7,
            description:
              'Your throat starts closing. Someone at the party calls 911. You arrive at the hospital looking like you lost a fight with a beehive. Do not ignore allergic reactions.',
            effects: [
              { type: 'stat', target: 'health', value: -25, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -3_000, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 35. Sleep Deprivation
  // -------------------------------------------------------
  {
    id: 'random_sleep_deprivation',
    title: 'Who Needs Sleep?',
    description:
      'You\'ve been averaging 4 hours of sleep for the past month. Your eyes look like two tomatoes in a bowl of milk. You called your boss "Mom" in a meeting. You put your phone in the refrigerator. Twice.',
    category: 'health',
    probability: 0.12,
    minAge: 16,
    cooldown: 8,
    conditions: [{ type: 'minAge', value: 16 }],
    choices: [
      {
        id: 'fix_sleep',
        text: 'Establish a real sleep schedule',
        hint: 'Screens off at 10 PM. Yes, really.',
        outcomes: [
          {
            weight: 6,
            description:
              'You start going to bed at a reasonable hour. No screens. Chamomile tea. Within two weeks, you feel human again. This is what rested people feel like? Incredible.',
            effects: [
              { type: 'stat', target: 'health', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'You try. You really try. But your brain has other plans. You lie awake thinking about embarrassing things you said in 2009. The schedule lasts three days.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'coffee_solution',
        text: 'More coffee. Coffee is the answer.',
        hint: 'Your heart rate: currently "hummingbird"',
        outcomes: [
          {
            weight: 5,
            description:
              'You\'re now drinking six cups a day. You vibrate slightly. You can hear colors. Your productivity is through the roof but your hands won\'t stop shaking.',
            effects: [
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'You crash hard one afternoon. Fall asleep at your desk. Your keyboard has left an imprint on your face. A coworker takes a photo. It\'s already in the group chat.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 36. Mystery Illness
  // -------------------------------------------------------
  {
    id: 'random_mystery_illness',
    title: 'Doctor Google Is Not Helping',
    description:
      'You have symptoms that don\'t match anything. Fatigue, random joint pain, and an inexplicable ringing in your left ear. Google says it\'s either nothing or everything. Three doctors have shrugged.',
    category: 'health',
    probability: 0.06,
    minAge: 20,
    cooldown: 20,
    conditions: [{ type: 'minAge', value: 20 }],
    choices: [
      {
        id: 'keep_searching',
        text: 'See a specialist',
        hint: 'The answer is out there',
        outcomes: [
          {
            weight: 5,
            description:
              'The specialist finds it — a vitamin deficiency so mundane it\'s almost insulting. You needed more B12. A $5 supplement fixes months of suffering. Modern medicine.',
            effects: [
              { type: 'stat', target: 'health', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'money', value: -2_000, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'They find an obscure condition that requires ongoing management. Not great, but at least you have an answer. Names have power.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'money', value: -5_000, operation: 'add' },
            ],
          },
          {
            weight: 2,
            description:
              'Nobody can figure it out. After $8,000 in tests, the answer is "sometimes bodies are just weird." You learn to live with it.',
            effects: [
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'money', value: -8_000, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'live_with_it',
        text: 'Accept the mystery and adapt',
        hint: 'Not every question has an answer',
        outcomes: [
          {
            weight: 5,
            description:
              'You adjust your lifestyle. More sleep, better food, less stress. The symptoms fade to a background hum. You become weirdly zen about the whole thing.',
            effects: [
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'The symptoms get worse. You finally see a doctor who figures it out in five minutes. "Stress," she says. "You\'re stressed." Revolutionary diagnosis.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 37. Doctor Finds Something Concerning
  // -------------------------------------------------------
  {
    id: 'random_concerning_checkup',
    title: 'Routine Checkup, Non-Routine Result',
    description:
      'You went for a routine physical. Routine! And now the doctor wants to run "a few more tests." They say it\'s "probably nothing" in a tone that suggests it is "probably something."',
    category: 'health',
    probability: 0.08,
    minAge: 25,
    cooldown: 16,
    conditions: [{ type: 'minAge', value: 25 }],
    choices: [
      {
        id: 'follow_up',
        text: 'Schedule the follow-up tests immediately',
        hint: 'Knowing is better than not knowing',
        outcomes: [
          {
            weight: 6,
            description:
              'False alarm. Everything is fine. You just have "unusual blood work" that is apparently totally normal for you. Two weeks of anxiety for nothing.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'money', value: -800, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'They catch something early. Because they caught it early, treatment is simple. This is why checkups exist. You promise to stop skipping them.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'money', value: -3_000, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 1,
            description:
              'They find high cholesterol. You are prescribed a statin and told to eat less pizza. You mourn the pizza.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'money', value: -200, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'avoid_followup',
        text: 'Avoid the follow-up and pretend everything is fine',
        hint: 'If you don\'t look at it, it doesn\'t exist',
        outcomes: [
          {
            weight: 4,
            description:
              'It WAS nothing. You luck out. But the anxiety of not knowing eats at you for months. Ignorance is not bliss; it\'s insomnia.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 6,
            description:
              'It was something, and you let it progress. When you finally go back, treatment is harder and more expensive. The doctor does not say "I told you so" but their eyes do.',
            effects: [
              { type: 'stat', target: 'health', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -10_000, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 38. Dental Emergency
  // -------------------------------------------------------
  {
    id: 'random_dental_emergency',
    title: 'Tooth Be Told',
    description:
      'You bite into an apple and your molar goes CRACK — half is in the apple, half is screaming.',
    category: 'health',
    probability: 0.08,
    minAge: 12,
    cooldown: 12,
    conditions: [{ type: 'minAge', value: 12 }],
    choices: [
      {
        id: 'emergency_dentist',
        text: 'See an emergency dentist',
        hint: 'The drill awaits',
        outcomes: [
          {
            weight: 6,
            description:
              'Crown replacement. $1,200. The dentist lectures you about flossing. You promise to floss. You will not floss.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'money', value: -1_200, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'Root canal. The worst two words in the English language. Two hours in the chair. You emerge looking like a chipmunk storing supplies for winter.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'money', value: -3_000, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'ignore_tooth',
        text: 'Ignore it and chew on the other side',
        hint: 'Denial is not just a river in Egypt',
        outcomes: [
          {
            weight: 3,
            description:
              'It doesn\'t get worse! You develop a permanent head-tilt while eating. People think it\'s a quirk. It\'s actually oral neglect.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 7,
            description:
              'It gets infected. The pain wakes you up at night. You finally go to the dentist and it\'s now twice as expensive to fix. The dentist does not congratulate you on your patience.',
            effects: [
              { type: 'stat', target: 'health', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -4_000, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 39. Sudden Weight Gain
  // -------------------------------------------------------
  {
    id: 'random_weight_gain',
    title: 'The Pants Don\'t Lie',
    description:
      'Your jeans don\'t fit anymore. Not in the "they\'re a little snug" way. In the "you need to lie down on the bed to zip them" way. The pandemic, the desk job, and the nightly ice cream habit have caught up.',
    category: 'health',
    probability: 0.1,
    minAge: 20,
    cooldown: 12,
    conditions: [{ type: 'minAge', value: 20 }],
    choices: [
      {
        id: 'lifestyle_change',
        text: 'Commit to a genuine lifestyle change',
        hint: 'No fad diets, just boring consistent effort',
        outcomes: [
          {
            weight: 5,
            description:
              'You start walking daily, cooking at home, and cutting portions. It\'s slow, unsexy progress. But in three months, the jeans fit again. Boring works.',
            effects: [
              { type: 'stat', target: 'health', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'looks', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'You make it two weeks before the siren call of late-night nachos pulls you back. You try again next month. And the month after. Progress is not linear.',
            effects: [
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'looks', value: -2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'buy_new_pants',
        text: 'Just buy bigger pants',
        hint: 'Body positivity or strategic avoidance?',
        outcomes: [
          {
            weight: 5,
            description:
              'New pants fit great. You feel comfortable. Comfort is underrated. But the doctor gently mentions your blood pressure at the next checkup.',
            effects: [
              { type: 'money', value: -200, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'New pants. New you. You decide that self-acceptance is more important than a number on a scale. You feel genuinely at peace.',
            effects: [
              { type: 'money', value: -200, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'fad_diet',
        text: 'Try the latest fad diet',
        hint: 'This one involves only eating foods that are purple',
        outcomes: [
          {
            weight: 4,
            description:
              'You lose 15 pounds in two weeks. You gain 20 pounds in the next four weeks. Net loss: your dignity.',
            effects: [
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'looks', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 6,
            description:
              'The diet works... sort of. You\'re thinner but you\'re also angry, tired, and you cannot stop thinking about bread. You dream about bread. You compose love letters to bread.',
            effects: [
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'looks', value: 3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 40. Mid-Life Crisis
  // -------------------------------------------------------
  {
    id: 'random_midlife_crisis',
    title: 'Is This All There Is?',
    description:
      'You\'re standing in your bathroom at 2 AM staring at yourself in the mirror. When did that gray hair get there? When did this become your life? You suddenly feel an overwhelming urge to buy a motorcycle and learn to surf.',
    category: 'health',
    probability: 0.12,
    minAge: 40,
    maxAge: 55,
    oneTime: true,
    conditions: [
      { type: 'minAge', value: 40 },
      { type: 'maxAge', value: 55 },
    ],
    choices: [
      {
        id: 'buy_convertible',
        text: 'Buy an impractical sports car',
        hint: 'Red goes faster. This is science.',
        outcomes: [
          {
            weight: 5,
            description:
              'You buy a cherry-red convertible. You drive it with the top down. You feel 25 again. For about three months. Then you realize you need to put groceries somewhere.',
            effects: [
              { type: 'money', value: -35_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'stat', target: 'looks', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'The sports car is a lemon. It breaks down twice in the first month. The mechanic charges more per hour than your therapist. You sell it at a loss.',
            effects: [
              { type: 'money', value: -20_000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'reinvent_yourself',
        text: 'Reinvent yourself entirely',
        hint: 'New haircut, new hobby, new you',
        outcomes: [
          {
            weight: 6,
            description:
              'You start painting. Turns out you\'re actually good. You sell a piece at a local gallery for $500. The crisis becomes a calling. Not bad for an existential breakdown.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'money', value: 500, operation: 'add' },
              { type: 'add_trait', value: 'creative' },
            ],
          },
          {
            weight: 4,
            description:
              'You get a tattoo, learn guitar, and sign up for a marathon. The tattoo is fine. The guitar sounds like a cat in a blender. The marathon gives you shin splints. But you feel alive.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'money', value: -2_000, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'accept_aging',
        text: 'Accept it and embrace getting older',
        hint: 'Wisdom is just wrinkles for the brain',
        outcomes: [
          {
            weight: 1,
            description:
              'You sit with the feeling. You journal. You talk to friends who feel the same way. You realize that aging is not an emergency — it\'s a privilege. The gray hair stays.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'add_trait', value: 'wise' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 41. Anxiety Episode
  // -------------------------------------------------------
  {
    id: 'random_anxiety',
    title: 'The Spiral',
    description:
      'Your heart is racing and your palms are sweating — something terrible feels imminent but you can\'t name it.',
    category: 'health',
    probability: 0.1,
    minAge: 14,
    cooldown: 8,
    conditions: [{ type: 'minAge', value: 14 }],
    choices: [
      {
        id: 'breathing_exercise',
        text: 'Try the breathing exercises you read about',
        hint: '4 in, 7 hold, 8 out',
        outcomes: [
          {
            weight: 6,
            description:
              'It takes a few tries, but the breathing works. Your heart slows down. The walls go back to where they were. You feel wrung out but okay.',
            effects: [
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'Breathing doesn\'t help this time. You ride the wave for an hour. It passes, like it always does. But the residue lingers for the rest of the day.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'call_someone_anxiety',
        text: 'Call someone you trust',
        hint: 'Connection is the antidote to isolation',
        outcomes: [
          {
            weight: 7,
            description:
              'They pick up on the second ring. They stay on the phone until you feel better. They don\'t try to fix it — they just listen. That\'s everything.',
            effects: [
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'They don\'t pick up. Voicemail. You leave a message that you immediately regret. They call back 20 minutes later, worried. You feel embarrassed but cared for.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 42. Addiction — Alcohol
  // -------------------------------------------------------
  {
    id: 'random_alcohol_problem',
    title: 'One More Won\'t Hurt',
    description:
      'The drinks at dinner became drinks after dinner. Then drinks instead of dinner. You catch yourself hiding bottles. Your hands shake in the morning. This isn\'t social anymore.',
    category: 'health',
    probability: 0.05,
    minAge: 21,
    cooldown: 20,
    conditions: [{ type: 'minAge', value: 21 }],
    choices: [
      {
        id: 'seek_treatment_alcohol',
        text: 'Admit you need help',
        hint: 'Courage isn\'t the absence of fear',
        outcomes: [
          {
            weight: 6,
            description:
              'Rehab is humbling. But the people there get it. For the first time in months, you don\'t feel alone with this. Recovery begins.',
            effects: [
              { type: 'stat', target: 'health', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'money', value: -10_000, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'remove_trait', value: 'alcoholic' },
              { type: 'add_trait', value: 'resilient' },
            ],
          },
          {
            weight: 4,
            description:
              'You start attending meetings. Ninety meetings in ninety days. It\'s the hardest thing you\'ve ever done. But each sober morning feels like a small victory.',
            effects: [
              { type: 'stat', target: 'health', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
              { type: 'add_trait', value: 'resilient' },
            ],
          },
        ],
      },
      {
        id: 'deny_alcohol',
        text: 'You can quit anytime. Just not today.',
        hint: 'Tomorrow never comes',
        outcomes: [
          {
            weight: 8,
            description:
              'It gets worse. You lose a relationship. You call in sick to work three Mondays in a row. The bottle becomes the only friend that doesn\'t ask questions.',
            effects: [
              { type: 'stat', target: 'health', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'add_trait', value: 'alcoholic' },
            ],
          },
          {
            weight: 2,
            description:
              'A wake-up call arrives in the form of an ER visit. Your body has filed a formal resignation. This is the bottom. The only direction from here is up.',
            effects: [
              { type: 'stat', target: 'health', value: -30, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -5_000, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 43. Started a Fitness Trend
  // -------------------------------------------------------
  {
    id: 'random_fitness_trend',
    title: 'New Year, New You (Again)',
    description:
      'Your social media feed is flooded with people doing this new workout. It\'s CrossFit meets yoga meets kickboxing meets... interpretive dance? Everyone says it changed their life. You are susceptible to peer pressure.',
    category: 'health',
    probability: 0.1,
    minAge: 16,
    cooldown: 8,
    conditions: [{ type: 'minAge', value: 16 }],
    choices: [
      {
        id: 'try_trend',
        text: 'Sign up immediately',
        hint: 'The first class is always free (the hospital visit isn\'t)',
        outcomes: [
          {
            weight: 5,
            description:
              'You actually love it. The instructor is motivating, the community is supportive, and you can feel yourself getting stronger. You become the annoying person who won\'t stop talking about it.',
            effects: [
              { type: 'stat', target: 'health', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'looks', value: 3, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'You pull something in the first class. The instructor says "listen to your body" as you lie on the floor unable to move. Your body is saying words that would get this game an R rating.',
            effects: [
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'money', value: -200, operation: 'add' },
            ],
          },
          {
            weight: 2,
            description:
              'You go once, post about it, and never go back. The $200 monthly membership auto-renews for six months before you notice. Classic.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'money', value: -1_200, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'skip_trend',
        text: 'Wait for the trend to die',
        hint: 'All fads pass. This too shall cringe.',
        outcomes: [
          {
            weight: 1,
            description:
              'Six months later, nobody talks about it anymore. You feel vindicated. Your couch has never felt more comfortable. You are a genius of strategic inaction.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // ==========================================================
  //  SOCIAL EVENTS
  // ==========================================================

  // -------------------------------------------------------
  // 44. Invited to Exclusive Party
  // -------------------------------------------------------
  {
    id: 'random_exclusive_party',
    title: 'You\'re On The List',
    description:
      'A friend of a friend of a friend invites you to a party at a penthouse downtown. The kind of party where people casually mention their "winter home." You own one (1) blazer. It has a stain.',
    category: 'social',
    probability: 0.06,
    minAge: 18,
    cooldown: 12,
    conditions: [{ type: 'minAge', value: 18 }],
    choices: [
      {
        id: 'go_party',
        text: 'Go and fake it til you make it',
        hint: 'Confidence is just well-dressed anxiety',
        outcomes: [
          {
            weight: 5,
            description:
              'You charm a tech CEO with a story about your cat. They think you\'re "refreshingly normal." You get a business card and an existential crisis about class.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'You knock over a champagne tower. It dominoes beautifully. The host laughs. You are now the party\'s legend AND its villain. You will not be invited back.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
              { type: 'money', value: -200, operation: 'add' },
            ],
          },
          {
            weight: 2,
            description:
              'You spend the entire night next to the shrimp cocktail talking to the host\'s golden retriever. Honestly? Best party you\'ve ever attended.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'skip_party',
        text: 'Skip it — not your scene',
        hint: 'Couch > penthouse',
        outcomes: [
          {
            weight: 1,
            description:
              'You stay home and eat cereal in your underwear while watching nature documentaries. Zero regrets. This IS your scene.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 45. Neighbor Feud
  // -------------------------------------------------------
  {
    id: 'random_neighbor_feud',
    title: 'War Next Door',
    description:
      'Your neighbor has started mowing their lawn at 6 AM on Saturdays. Every Saturday. With what sounds like a jet engine. You\'ve asked politely. Then firmly. They smiled and mowed louder.',
    category: 'social',
    probability: 0.08,
    minAge: 18,
    cooldown: 12,
    conditions: [{ type: 'minAge', value: 18 }],
    choices: [
      {
        id: 'escalate_feud',
        text: 'Escalate — play music at midnight',
        hint: 'Mutually assured annoyance',
        outcomes: [
          {
            weight: 4,
            description:
              'An arms race begins. They get a rooster. You get a drum set. They install flood lights. You install a motion-activated sprinkler aimed at their yard. This is your life now.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
          {
            weight: 6,
            description:
              'They call the cops on you. The officer who shows up is tired and unamused. You both get a warning. The cold war continues, but quieter.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'make_peace',
        text: 'Bring them cookies and negotiate',
        hint: 'Baked goods: the universal peace treaty',
        outcomes: [
          {
            weight: 6,
            description:
              'They accept the cookies. They agree to mow at 9 AM. It turns out they\'re actually pretty nice. They were just oblivious. You now wave at each other.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'They take the cookies, eat them, and mow at 5:30 AM the next Saturday. Out of spite. The cookies made it worse. You have created a monster.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'money', value: -20, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 46. Social Media Drama
  // -------------------------------------------------------
  {
    id: 'random_social_media_drama',
    title: 'The Reply That Launched a Thousand Screams',
    description:
      'You posted what you thought was an innocent opinion about pineapple on pizza. Somehow, it has divided your entire social network. Your aunt is arguing with your college roommate. Strangers are tagging you. You have 200 notifications.',
    category: 'social',
    probability: 0.1,
    minAge: 13,
    cooldown: 8,
    conditions: [{ type: 'minAge', value: 13 }],
    choices: [
      {
        id: 'double_down_social',
        text: 'Double down on your take',
        hint: 'Die on this hill. It\'s a good hill.',
        outcomes: [
          {
            weight: 5,
            description:
              'You become a folk hero in the pro-pineapple community. Anti-pineapple people block you. You lose 50 followers and gain 200 new ones. The internet is a strange place.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'Your hot take gets screenshot-shared by someone with 500,000 followers. The dunks are brutal. You learn what "ratio" means the hard way.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'delete_post',
        text: 'Delete the post and pretend it never happened',
        hint: 'The internet never forgets... but maybe it will this time',
        outcomes: [
          {
            weight: 7,
            description:
              'You delete it. The firestorm dies within hours. Nobody remembers by next week. The internet\'s attention span is mercifully short.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'Someone screenshot it before you deleted. It lives on in group chats. You are now "the pineapple pizza person" in three separate friend groups.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 47. Public Embarrassment
  // -------------------------------------------------------
  {
    id: 'random_public_embarrassment',
    title: 'The Mic Was Still On',
    description:
      'You\'re at a work presentation. You finish, nailed it, feeling great — then realize your fly has been down the entire time. The front row has been maintaining aggressive eye contact for 20 minutes.',
    category: 'social',
    probability: 0.08,
    minAge: 14,
    cooldown: 12,
    conditions: [{ type: 'minAge', value: 14 }],
    choices: [
      {
        id: 'own_it',
        text: 'Own it with a joke',
        hint: 'The best defense is a good punchline',
        outcomes: [
          {
            weight: 6,
            description:
              '"Well, that\'s one way to make sure everyone pays attention!" The room laughs. Your boss smirks. You are now known for being a good sport. And for the fly thing.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'Your joke falls flat. The room gets quieter. You zip up in the silence. A single cough is heard. You will think about this moment every night at 3 AM for the next decade.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'pretend_nothing',
        text: 'Fix it and pretend nothing happened',
        hint: 'If you don\'t acknowledge it, it didn\'t happen (it did)',
        outcomes: [
          {
            weight: 1,
            description:
              'You subtly fix it. Maybe nobody noticed? (They noticed.) But they\'re kind enough to never mention it. This is called grace.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 48. Making a New Friend Randomly
  // -------------------------------------------------------
  {
    id: 'random_new_friend',
    title: 'Found One in the Wild',
    description:
      'You strike up a conversation in a long line and discover you share the same obscure taste in everything.',
    category: 'social',
    probability: 0.1,
    minAge: 10,
    cooldown: 8,
    conditions: [{ type: 'minAge', value: 10 }],
    choices: [
      {
        id: 'exchange_numbers',
        text: 'Exchange numbers and make plans',
        hint: 'Adult friendships require proactive scheduling',
        outcomes: [
          {
            weight: 6,
            description:
              'You actually follow through! You hang out the next week. Then the week after. Six months later, they\'re one of your closest friends. Proof that good things happen in long lines.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
              { type: 'add_relationship', value: 'friend' },
            ],
          },
          {
            weight: 4,
            description:
              'You exchange numbers. You text once. They text back a week later. You text back two weeks later. The conversation dies. Another almost-friendship for the pile.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'enjoy_moment',
        text: 'Enjoy the conversation and move on',
        hint: 'Some connections are beautiful because they\'re brief',
        outcomes: [
          {
            weight: 1,
            description:
              'You chat, you laugh, you part ways. You never see them again. But for an hour in a line, you remembered that strangers can be wonderful. That\'s enough.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 49. Invited to Join a Club
  // -------------------------------------------------------
  {
    id: 'random_club_invite',
    title: 'You\'re In (If You Want)',
    description:
      'An acquaintance invites you to join their book club / hiking group / fantasy football league / competitive birdwatching team. You didn\'t know competitive birdwatching was a thing. It is.',
    category: 'social',
    probability: 0.08,
    minAge: 15,
    cooldown: 12,
    conditions: [{ type: 'minAge', value: 15 }],
    choices: [
      {
        id: 'join_club',
        text: 'Join the group',
        hint: 'Community is the cure for modern loneliness',
        outcomes: [
          {
            weight: 6,
            description:
              'You love it. The group meets every week. You make three new friends. You have strong opinions about warblers now. Who are you?',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'The group is... intense. They have uniforms. There are bylaws. Someone cries when they lose at trivia. You quietly stop attending after three weeks.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'decline_club',
        text: 'Politely decline',
        hint: 'Your couch misses you',
        outcomes: [
          {
            weight: 1,
            description:
              'You say no. Your evenings remain free. Your social life remains identical. Was this the right choice? Probably. Maybe. You\'ll never know.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 50. Asked to Give a Speech
  // -------------------------------------------------------
  {
    id: 'random_speech',
    title: 'All Eyes on You',
    description:
      'Someone asks you to give a speech at an event. A hundred people will be watching. Your palms are already sweating. Your brain is already writing your excuse. But also... this could be amazing.',
    category: 'social',
    probability: 0.06,
    minAge: 16,
    cooldown: 12,
    conditions: [{ type: 'minAge', value: 16 }],
    choices: [
      {
        id: 'give_speech',
        text: 'Accept and prepare meticulously',
        hint: 'Practice in front of the mirror until your reflection applauds',
        outcomes: [
          {
            weight: 5,
            description:
              'You nail it. Standing ovation. Three people come up to you afterward and say it changed their perspective. You are vibrating with adrenaline for the next 48 hours.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'You blank halfway through. Ten seconds of silence. Then your brain reboots and you improvise the rest. It\'s messy but genuine. People love the honesty.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 2,
            description:
              'The microphone squeals feedback for the first 30 seconds. You power through. Nobody remembers what you said but everyone remembers the noise.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'decline_speech',
        text: 'Decline — public speaking is your nightmare',
        hint: 'There is no shame in knowing your limits',
        outcomes: [
          {
            weight: 1,
            description:
              'You say no. Someone else gives the speech. They\'re terrible. You think "I could have done better." The eternal paradox of potential.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 51. Volunteering Opportunity
  // -------------------------------------------------------
  {
    id: 'random_volunteering',
    title: 'Help Wanted (No Pay, Great Feelings)',
    description:
      'A local organization needs volunteers this weekend and your Saturday of doing nothing can wait.',
    category: 'social',
    probability: 0.1,
    minAge: 13,
    cooldown: 8,
    conditions: [{ type: 'minAge', value: 13 }],
    choices: [
      {
        id: 'volunteer',
        text: 'Show up and help',
        hint: 'The meaning of life might be in service to others',
        outcomes: [
          {
            weight: 6,
            description:
              'You spend eight hours working harder than you do at your actual job. Your body hurts. But at the end, someone thanks you with tears in their eyes. This is what it feels like to matter.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'stat', target: 'health', value: 3, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'The volunteering is disorganized. You stand around for two hours waiting for supplies. But you meet amazing people and make a genuine difference. Worth the chaos.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'skip_volunteering',
        text: 'Stay home — self-care is important too',
        hint: 'You can\'t pour from an empty cup',
        outcomes: [
          {
            weight: 5,
            description:
              'You sleep in, recharge, and have a quiet day. Sometimes rest is the most productive thing you can do.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'stat', target: 'health', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'You spend the day scrolling your phone and feel vaguely guilty. The photos from the event look fun. Maybe next time.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 52. Gossip About You
  // -------------------------------------------------------
  {
    id: 'random_gossip',
    title: 'They\'re Talking About You',
    description:
      'You overhear someone telling a wildly inaccurate story about you involving a bear, a circus, and minor celebrity status in Belgium.',
    category: 'social',
    probability: 0.08,
    minAge: 14,
    cooldown: 12,
    conditions: [{ type: 'minAge', value: 14 }],
    choices: [
      {
        id: 'confront_gossip',
        text: 'Confront them directly',
        hint: 'Facts are your weapon',
        outcomes: [
          {
            weight: 5,
            description:
              'You walk over and say "Hi, that\'s not quite how it happened." The gossiper turns the color of a tomato. The truth is restored. You feel powerful but petty.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'They double down. "No, I\'m pretty sure you wrestled a bear." Others are now looking at you expectantly. You realize the bear story is actually cooler than reality.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'play_along_gossip',
        text: 'Play along and make it even wilder',
        hint: 'Lean into the legend',
        outcomes: [
          {
            weight: 7,
            description:
              '"The bear? That was nothing. You should hear about the time I fought a kangaroo." Everyone is captivated. You have become your own mythology.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'You go too far. "...and then the Queen knighted me." People start to realize you\'re making things up. The original gossip now seems tame by comparison.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'ignore_gossip',
        text: 'Ignore it completely',
        hint: 'The high road is lonely but scenic',
        outcomes: [
          {
            weight: 1,
            description:
              'You walk away. The gossip fizzles out on its own. People forget. You have mastered the art of not caring. Or at least the art of pretending not to care.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 53. Road Rage Incident
  // -------------------------------------------------------
  {
    id: 'random_road_rage',
    title: 'Highway Hostility',
    description:
      'Someone cuts you off in traffic, nearly causing an accident, then has the audacity to honk at YOU. They make a gesture. Your blood pressure could power a small city. The light is red. You are now trapped next to them.',
    category: 'social',
    probability: 0.1,
    minAge: 16,
    cooldown: 8,
    conditions: [{ type: 'minAge', value: 16 }],
    choices: [
      {
        id: 'stay_calm_road',
        text: 'Take a deep breath and ignore them',
        hint: 'You are the bigger person. Literally everyone is the bigger person than a road rager.',
        outcomes: [
          {
            weight: 7,
            description:
              'You breathe. You stare forward. The light turns green. You drive away. Your heart rate returns to normal. Maturity feels boring but safe.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'You stay calm, but they follow you for two blocks. You take a random turn into a police station parking lot. They disappear immediately. Big brain move.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'engage_road_rage',
        text: 'Roll down the window and express your feelings',
        hint: 'Feelings: expressed at 90 decibels',
        outcomes: [
          {
            weight: 4,
            description:
              'You scream at each other. It\'s cathartic but pointless. You both drive away angrier than before. Your voice is hoarse. Worth it? Unclear.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 6,
            description:
              'They get out of their car at the next light. You lock your doors so fast you pull a finger muscle. They bang on your window. You call the police. This was a bad decision.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 54. Caught in Someone Else's Proposal
  // -------------------------------------------------------
  {
    id: 'random_proposal_witness',
    title: 'Bystander to Love',
    description:
      'The guy at the next table gets on one knee and now you\'re an unwilling extra in someone else\'s love story.',
    category: 'social',
    probability: 0.06,
    minAge: 16,
    cooldown: 16,
    conditions: [{ type: 'minAge', value: 16 }],
    choices: [
      {
        id: 'cheer_proposal',
        text: 'Cheer and clap enthusiastically',
        hint: 'Be the hype person they didn\'t know they needed',
        outcomes: [
          {
            weight: 7,
            description:
              'She says yes! The restaurant erupts! The couple buys everyone a round of champagne! You clink glasses with strangers! You cry! Everyone cries! Beautiful!',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'She says... no. Your enthusiastic cheering dies mid-clap. The silence that follows is the loudest thing you\'ve ever heard. You stare at your pasta for twenty minutes.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'mind_own_proposal',
        text: 'Mind your own business and eat faster',
        hint: 'This pasta isn\'t going to eat itself',
        outcomes: [
          {
            weight: 1,
            description:
              'You eat your spaghetti at warp speed while chaos unfolds around you. You are the calm in the storm. The eye of the emotional hurricane. You tip 30% and leave.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 55. Accidentally Became a Local Hero
  // -------------------------------------------------------
  {
    id: 'random_accidental_hero',
    title: 'Reluctant Hero',
    description:
      'You make a diving catch to save a kid\'s runaway balloon and a news crew caught the whole thing.',
    category: 'social',
    probability: 0.05,
    minAge: 12,
    cooldown: 20,
    conditions: [{ type: 'minAge', value: 12 }],
    choices: [
      {
        id: 'accept_hero',
        text: 'Accept the accidental fame',
        hint: 'Not all heroes wear capes. Some wear bush leaves.',
        outcomes: [
          {
            weight: 6,
            description:
              'The local news runs the story. "BALLOON HERO SAVES THE DAY." Your mom records it. Your coworkers see it. You are a legend for exactly one news cycle.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'The kid pops the balloon five seconds after you hand it back. The look on your face makes the news reel. "HERO\'S MOMENT: SHORT-LIVED." Still worth it.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'flee_hero',
        text: 'Get out of the bush and walk away quickly',
        hint: 'True heroes don\'t seek glory (also you\'re covered in leaves)',
        outcomes: [
          {
            weight: 1,
            description:
              'You limp away covered in twigs and dignity. The kid waves. The parents look confused. The camera crew films your retreat. You become "Mystery Bush Person" on the local news.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 56. Awkward Reunion
  // -------------------------------------------------------
  {
    id: 'random_awkward_reunion',
    title: 'Look Who It Is',
    description:
      'You run into your ex at the grocery store. You\'re wearing sweatpants with a stain. They look amazing. You\'re holding a frozen pizza and cat food. The universe has impeccable timing.',
    category: 'social',
    probability: 0.08,
    minAge: 18,
    cooldown: 12,
    conditions: [{ type: 'minAge', value: 18 }],
    choices: [
      {
        id: 'chat_reunion',
        text: 'Chat and pretend everything is fine',
        hint: 'Emotional acting: Oscar-worthy',
        outcomes: [
          {
            weight: 5,
            description:
              'You have a surprisingly pleasant five-minute conversation. You part ways amicably. You sit in your car afterward and feel... nothing. Growth.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'It\'s awkward. SO awkward. They mention their new partner. You mention your cat. You compare these as equals. The frozen pizza defrosts in your hands.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'hide_reunion',
        text: 'Duck behind the cereal aisle',
        hint: 'Stealth mode: activated',
        outcomes: [
          {
            weight: 5,
            description:
              'You hide behind the Cheerios. They walk right past. Mission accomplished. Your heart rate suggests you just completed a heist.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'You duck behind the cereal and land directly in front of their mother. She recognizes you. She asks why you\'re crouching. There is no good answer.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 57. Mistaken Identity
  // -------------------------------------------------------
  {
    id: 'random_mistaken_identity',
    title: 'Wrong Person, Wild Ride',
    description:
      'A stranger hugs you screaming "STEVE!" — you are not Steve but they\'re so happy you can\'t correct them.',
    category: 'social',
    probability: 0.06,
    minAge: 14,
    cooldown: 16,
    conditions: [{ type: 'minAge', value: 14 }],
    choices: [
      {
        id: 'be_steve',
        text: 'Be Steve for a while',
        hint: 'Steve sounds like he has a great life',
        outcomes: [
          {
            weight: 5,
            description:
              'You\'re Steve for 15 glorious minutes. Steve apparently saved this person\'s dog once. As Steve, you are a hero. Eventually the real Steve texts them. Your reign ends.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'Being Steve goes too far when they invite you to Steve\'s family reunion next week. You finally confess. They stare at you with the betrayal of a thousand Steves.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'not_steve',
        text: 'Gently break the news that you\'re not Steve',
        hint: 'The truth will set you free, but first it will set them free of joy',
        outcomes: [
          {
            weight: 7,
            description:
              'They\'re embarrassed but laugh it off. You both agree you look remarkably like Steve. You exchange numbers. You have a friend now. Being not-Steve worked out.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'They refuse to believe you\'re not Steve. "Classic Steve, always joking!" They walk away waving. Somewhere, the real Steve feels a disturbance in the force.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 58. Package Thief Karma
  // -------------------------------------------------------
  {
    id: 'random_porch_pirate',
    title: 'Justice, Delivered',
    description:
      'You install a doorbell camera after your packages keep disappearing. Within a week, you catch the thief on camera. It\'s your own mailman. He\'s been taking your Amazon boxes to his car. The footage is crystal clear.',
    category: 'social',
    probability: 0.06,
    minAge: 18,
    cooldown: 20,
    conditions: [{ type: 'minAge', value: 18 }],
    choices: [
      {
        id: 'report_thief',
        text: 'Report it to the post office',
        hint: 'Federal offense, federal consequences',
        outcomes: [
          {
            weight: 7,
            description:
              'He\'s fired. Your packages start arriving safely. The new mailman is delightful. You get $200 in reimbursements. The system works, occasionally.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'money', value: 200, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'The investigation takes months. During that time, you have no mail carrier. Your mail piles up at the post office. Bureaucracy punishes everyone equally.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'money', value: 100, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'confront_thief',
        text: 'Confront them yourself',
        hint: 'You have the evidence. And you have chosen violence.',
        outcomes: [
          {
            weight: 5,
            description:
              'You show them the footage. They go pale. They return everything — including a blender you forgot you ordered. You feel like a detective. Case closed.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'money', value: 300, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'They deny everything despite the 4K video evidence. They call you a liar. You stare at each other. You post the video online. It gets 2 million views. They get fired anyway.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'money', value: 150, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 59. Accidentally Tipped 100%
  // -------------------------------------------------------
  {
    id: 'random_overtip',
    title: 'Math Is Hard',
    description:
      'You sign the check at a restaurant without your glasses. You meant to tip $12. You tipped $120. The waiter is staring at the receipt. You are staring at your bank notification. Math has betrayed you.',
    category: 'social',
    probability: 0.08,
    minAge: 18,
    cooldown: 12,
    conditions: [{ type: 'minAge', value: 18 }],
    choices: [
      {
        id: 'let_it_go_tip',
        text: 'Let it go — they probably needed it',
        hint: 'Accidental generosity is still generosity',
        outcomes: [
          {
            weight: 7,
            description:
              'The waiter chases you outside to ask if you meant it. You lie and say yes. Their face lights up. They\'re a single parent working doubles. You go home and cry in the car. Good tears.',
            effects: [
              { type: 'money', value: -108, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'You let it go. Your bank account weeps. But karma smiles upon you — the next day you find $50 in an old jacket pocket. The universe partial-refunds.',
            effects: [
              { type: 'money', value: -58, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'correct_tip',
        text: 'Go back and explain the mistake',
        hint: 'Honesty is the best policy (also the cheapest)',
        outcomes: [
          {
            weight: 5,
            description:
              'The waiter understands completely. You adjust the tip. They are kind about it. You leave a normal 20% and feel like a reasonable human.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'The waiter already told the kitchen about their huge tip. They had a celebration. You now have to crush their joy in person. This is worse than losing the money.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 60. Witness a Crime
  // -------------------------------------------------------
  {
    id: 'random_witness_crime',
    title: 'Wrong Place, Wrong Time',
    description:
      'You lock eyes with someone shoplifting an armful of cheese wheels — time stops, the cheese does not.',
    category: 'social',
    probability: 0.07,
    minAge: 14,
    cooldown: 16,
    conditions: [{ type: 'minAge', value: 14 }],
    choices: [
      {
        id: 'report_cheese',
        text: 'Tell the store manager',
        hint: 'You are a cheese guardian',
        outcomes: [
          {
            weight: 6,
            description:
              'The manager catches them at the door. Seven pounds of brie recovered. You receive a $20 gift card. You are the hero the dairy section needed.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'money', value: 20, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'The thief sees you talking to the manager and sprints out the automatic doors. Cheese wheels rolling everywhere. It\'s chaos. Beautiful, cheesy chaos.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'mind_business_cheese',
        text: 'Mind your own business',
        hint: 'You have enough problems without adding cheese crime',
        outcomes: [
          {
            weight: 7,
            description:
              'You look away. The cheese thief escapes. You spend the rest of the day wondering what someone needs with seven wheels of brie. You will never know.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'The security camera shows you watching the theft and doing nothing. The manager gives you a look next time you shop there. The look says "cheese betrayer." You switch grocery stores.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 61. Time Capsule Discovery
  // -------------------------------------------------------
  {
    id: 'random_time_capsule',
    title: 'Message from the Past',
    description:
      'While cleaning out your closet, you find a box you sealed when you were 12. Inside: a letter to your future self, $3.47 in coins, a friendship bracelet, and a crayon drawing of what you wanted to be when you grew up. It was "dinosaur doctor."',
    category: 'life',
    probability: 0.05,
    minAge: 25,
    oneTime: true,
    conditions: [{ type: 'minAge', value: 25 }],
    choices: [
      {
        id: 'read_letter',
        text: 'Read the letter',
        hint: 'Past you had something to say',
        outcomes: [
          {
            weight: 6,
            description:
              'The letter says "Dear future me, I hope you\'re a dinosaur doctor and have a pet wolf. Also I hope you\'re happy." You are none of these things. But reading it, somehow, you are the last one.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'The letter also contains a brutally honest assessment of your family. 12-year-old you had no filter. It\'s hilarious. And a little too accurate.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'reseal_capsule',
        text: 'Add something new and reseal it for another 10 years',
        hint: 'A gift for future-future you',
        outcomes: [
          {
            weight: 1,
            description:
              'You add a photo, a note, and a $20 bill. You seal it up and write "OPEN AT 35." Future you will either be moved or confused. Either way, the tradition continues.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
              { type: 'money', value: -20, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 62. Wrong Number Turns Into Something
  // -------------------------------------------------------
  {
    id: 'random_wrong_number',
    title: 'New Number, Who Dis?',
    description:
      'You get a text from an unknown number: "Hey, are we still on for tacos?" You don\'t know this person. But tacos sound amazing right now.',
    category: 'social',
    probability: 0.06,
    minAge: 16,
    cooldown: 20,
    conditions: [{ type: 'minAge', value: 16 }],
    choices: [
      {
        id: 'say_yes_tacos',
        text: 'Reply "Absolutely, where?"',
        hint: 'Life is short, tacos are important',
        outcomes: [
          {
            weight: 4,
            description:
              'They realize you\'re not who they meant. But they think your boldness is hilarious. You actually end up getting tacos with a stranger. The tacos are incredible. You exchange real numbers.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 6,
            description:
              'They send an address. You show up. It\'s a child\'s birthday party. You are a stranger at a child\'s birthday party. The parents are concerned. You leave quickly. No tacos.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'correct_wrong_number',
        text: 'Let them know they have the wrong number',
        hint: 'Boring but correct',
        outcomes: [
          {
            weight: 7,
            description:
              'They thank you. You go back to your evening. No tacos. No adventure. Just the quiet comfort of being a helpful stranger. And a lingering craving for tacos.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'They don\'t believe you. "Come on, stop messing around, I\'m already at the restaurant." You block the number. Somewhere, tacos go uneaten.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 63. Sleepwalking Incident
  // -------------------------------------------------------
  {
    id: 'random_sleepwalking',
    title: 'Night Moves',
    description:
      'You wake up in your front yard at 3 AM. You sleepwalked again.',
    category: 'health',
    probability: 0.05,
    minAge: 10,
    cooldown: 20,
    conditions: [
      { type: 'minAge', value: 10 },
    ],
    choices: [
      {
        id: 'see_doctor_sleep',
        text: 'See a doctor about it',
        hint: 'Unconscious landscaping is a red flag',
        outcomes: [
          {
            weight: 6,
            description:
              'The doctor prescribes better sleep hygiene. It works. You stop sleepwalking. Your neighbor\'s gnomes return to their chaotic original positions.',
            effects: [
              { type: 'stat', target: 'health', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'money', value: -300, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'Turns out it was caused by a new medication. You switch meds. But the neighbor keeps the gnome circle. "It looks better this way," they admit.',
            effects: [
              { type: 'stat', target: 'health', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'money', value: -200, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'ignore_sleepwalk',
        text: 'Pretend it never happened',
        hint: 'You can\'t be held responsible for what asleep-you does',
        outcomes: [
          {
            weight: 5,
            description:
              'It doesn\'t happen again. One-time thing. Probably. You do start locking your front door with the deadbolt, though. Just in case.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 5,
            description:
              'It happens again. This time you wake up in your car. In the driver\'s seat. The car is still parked, thank god. Okay, maybe see a doctor.',
            effects: [
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 64. Surprise Audit of Your Life Choices
  // -------------------------------------------------------
  {
    id: 'random_life_audit',
    title: 'The 3 AM Question',
    description:
      'You\'re lying awake at 3 AM when your brain decides it\'s time for a comprehensive review of every decision you\'ve ever made. The highlight reel includes that haircut from 2008, the email you sent to the wrong person, and the time you called your teacher "Mom."',
    category: 'health',
    probability: 0.12,
    minAge: 18,
    cooldown: 8,
    conditions: [{ type: 'minAge', value: 18 }],
    choices: [
      {
        id: 'journal_thoughts',
        text: 'Get up and journal about it',
        hint: 'Put the chaos on paper where it belongs',
        outcomes: [
          {
            weight: 6,
            description:
              'You write for an hour. It\'s messy and honest. By the end, you feel lighter. You read it the next morning and it\'s half brilliant, half incomprehensible. Classic 3 AM writing.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'You write down all your regrets. Then you write down all the things that went right. The second list is longer. Huh. Maybe you\'re doing okay after all.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'distract_yourself',
        text: 'Put on a podcast and force yourself to sleep',
        hint: 'Someone else\'s voice drowns out the inner critic',
        outcomes: [
          {
            weight: 7,
            description:
              'A soothing voice talks about the history of bread-making. You fall asleep somewhere around ancient Mesopotamia. The existential crisis has been postponed.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'stat', target: 'health', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 3,
            description:
              'The podcast is about someone who achieved everything they wanted by age 25. This makes everything worse. You switch to rain sounds. The rain doesn\'t judge.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // 65. Hilariously Bad Date Witnessed
  // -------------------------------------------------------
  {
    id: 'random_bad_date_witnessed',
    title: 'Dinner and a Show',
    description:
      'The table next to you is hosting the worst first date in history and the victim is making eye contact with you.',
    category: 'social',
    probability: 0.07,
    minAge: 16,
    cooldown: 12,
    conditions: [{ type: 'minAge', value: 16 }],
    choices: [
      {
        id: 'rescue_stranger',
        text: 'Pretend to be their long-lost friend and rescue them',
        hint: 'Be the hero rom-coms promised',
        outcomes: [
          {
            weight: 6,
            description:
              '"Oh my GOD, is that you?! It\'s been SO long!" You fake-recognize them. They play along perfectly. You "catch up" while the bad date sits there confused. Mission accomplished.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 4,
            description:
              'The person you\'re "rescuing" doesn\'t pick up on the hint and introduces you to their date. Now you\'re trapped too. You hear about the ex for another 20 minutes.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'watch_date',
        text: 'Just enjoy the show',
        hint: 'Free entertainment with your entree',
        outcomes: [
          {
            weight: 1,
            description:
              'You eat your meal in silence while absorbing every excruciating detail. It\'s better than any reality show. The bad dater spills wine. The trapped person fakes a phone call. Chef\'s kiss.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
        ],
      },
    ],
  },
];
