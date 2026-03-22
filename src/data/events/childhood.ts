// ============================================================
// ThisLife — Childhood Events (Ages 0–12)
// 25+ events covering baby, child, and preteen years
// ============================================================

import { GameEvent } from '../../types/events';

export const CHILDHOOD_EVENTS: GameEvent[] = [

  // ================================================================
  //  BABY (0–4)
  // ================================================================

  {
    id: 'childhood_first_words',
    title: 'First Words',
    description: 'Your parents are filming — time to say something.',
    conditions: [
      { type: 'minAge', value: 1 },
      { type: 'maxAge', value: 2 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'say_mama',
        text: 'Say "Mama"',
        outcomes: [
          {
            weight: 70,
            description: 'Your mother bursts into tears of joy.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'You say "Mama" while staring at the dog.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'say_dada',
        text: 'Say "Dada"',
        outcomes: [
          {
            weight: 70,
            description: 'Your father fist-pumps and knocks the camera over.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Your mother posts passive-aggressively about it online.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'say_something_weird',
        text: 'Say something unsettling',
        outcomes: [
          {
            weight: 50,
            description: 'You whisper "darkness." Your parents laugh nervously.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'You repeat a profanity from Dad\'s poker night. Grandma is visiting.',
            effects: [
              { type: 'stat', target: 'happiness', value: 4, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.35,
    category: 'life',
    minAge: 1,
    maxAge: 2,
    oneTime: true,
  },

  {
    id: 'childhood_crawling_adventure',
    title: 'The Great Crawl',
    description: 'You just learned to crawl and the whole house is fair game.',
    conditions: [
      { type: 'minAge', value: 0 },
      { type: 'maxAge', value: 2 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'crawl_kitchen',
        text: 'Head for the kitchen',
        outcomes: [
          {
            weight: 50,
            description: 'You eat an ancient Cheerio off the floor. Immune system upgraded.',
            effects: [
              { type: 'stat', target: 'health', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'You pull a pot off the counter. It misses you by an inch.',
            effects: [
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'You build a fortress of tupperware before anyone notices.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 4, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'crawl_stairs',
        text: 'Attempt the stairs',
        outcomes: [
          {
            weight: 40,
            description: 'Your parent snatches you after three steps. You scream in protest.',
            effects: [
              { type: 'stat', target: 'health', value: 1, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'You summit the staircase. A baby gate is installed within the hour.',
            effects: [
              { type: 'stat', target: 'health', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'crawl_pet',
        text: 'Chase the family pet',
        outcomes: [
          {
            weight: 50,
            description: 'The cat tolerates you for one second, then vanishes.',
            effects: [
              { type: 'stat', target: 'happiness', value: -1, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'The dog licks your entire face. You taste dog food.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'health', value: -1, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.3,
    category: 'life',
    minAge: 0,
    maxAge: 2,
    oneTime: true,
  },

  {
    id: 'childhood_terrible_twos',
    title: 'Nuclear Meltdown',
    description: 'Your parent said no to candy at the store.',
    conditions: [
      { type: 'minAge', value: 2 },
      { type: 'maxAge', value: 4 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'tantrum_full_send',
        text: 'Go nuclear',
        outcomes: [
          {
            weight: 60,
            description: 'Your parent caves and buys the candy. You learn about power.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Your parent carries you out like a surfboard. An old lady shakes her head.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'tantrum_silent_rage',
        text: 'Deploy the silent stare',
        outcomes: [
          {
            weight: 50,
            description: 'You stare without blinking for 45 seconds. You get candy AND a toy.',
            effects: [
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Your parent stares back. You blink first. Defeat.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'tantrum_accept',
        text: 'Accept the "no"',
        outcomes: [
          {
            weight: 80,
            description: 'You nod solemnly. Your parent buys you two candy bars out of guilt.',
            effects: [
              { type: 'stat', target: 'happiness', value: 4, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'You hold it together until the parking lot. Strategic tantrum.',
            effects: [
              { type: 'stat', target: 'happiness', value: 1, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.3,
    category: 'social',
    minAge: 2,
    maxAge: 4,
    oneTime: true,
  },

  {
    id: 'childhood_eating_incident',
    title: 'Culinary Explorer',
    description: 'Something green just landed on your plate.',
    conditions: [
      { type: 'minAge', value: 1 },
      { type: 'maxAge', value: 4 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'eat_throw',
        text: 'Launch it across the room',
        outcomes: [
          {
            weight: 60,
            description: 'Direct hit on the dog. It eats the broccoli happily.',
            effects: [
              { type: 'stat', target: 'happiness', value: 4, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'It lands in your father\'s coffee. He drinks it anyway.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'eat_try_it',
        text: 'Actually eat it',
        outcomes: [
          {
            weight: 40,
            description: 'You actually like it. Your parents high-five each other.',
            effects: [
              { type: 'stat', target: 'health', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'You gag so dramatically your mom starts recording.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'stat', target: 'looks', value: -1, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'eat_hide',
        text: 'Hide it in your diaper',
        outcomes: [
          {
            weight: 100,
            description: 'They find it during the next diaper change. Questions are raised.',
            effects: [
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.25,
    category: 'life',
    minAge: 1,
    maxAge: 4,
    oneTime: true,
  },

  {
    id: 'childhood_sibling_rivalry',
    title: 'The New Arrival',
    description: 'Your parents brought home a new baby.',
    conditions: [
      { type: 'minAge', value: 2 },
      { type: 'maxAge', value: 5 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'sibling_love',
        text: 'Welcome the baby',
        outcomes: [
          {
            weight: 60,
            description: 'You pat the baby\'s head and say "my baby." Everyone cries.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'add_relationship', target: 'sibling', value: 'sibling' },
            ],
          },
          {
            weight: 40,
            description: 'You "share" your juice by pouring it on the baby.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'add_relationship', target: 'sibling', value: 'sibling' },
            ],
          },
        ],
      },
      {
        id: 'sibling_jealous',
        text: 'Ask to return the baby',
        outcomes: [
          {
            weight: 50,
            description: 'You ask if the hospital takes refunds. Dad laughs so hard he pulls a muscle.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
              { type: 'add_relationship', target: 'sibling', value: 'sibling' },
            ],
          },
          {
            weight: 50,
            description: 'You pack the baby\'s things and leave them by the door.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'add_relationship', target: 'sibling', value: 'sibling' },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'relationship',
    minAge: 2,
    maxAge: 5,
    oneTime: true,
  },

  {
    id: 'childhood_pet_encounter',
    title: 'The Beast',
    description: 'There\'s an animal in the neighbor\'s yard about your size.',
    conditions: [
      { type: 'minAge', value: 2 },
      { type: 'maxAge', value: 5 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'pet_hug',
        text: 'Try to hug it',
        outcomes: [
          {
            weight: 50,
            description: 'It\'s a golden retriever. Instant best friends.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'health', value: 1, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'It\'s a cat. It scratches you and vanishes over the fence.',
            effects: [
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'It\'s a raccoon. It hisses. You hiss back. Your parent sprints over.',
            effects: [
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'pet_observe',
        text: 'Watch from a distance',
        outcomes: [
          {
            weight: 70,
            description: 'You watch a squirrel for twenty minutes without moving.',
            effects: [
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'The animal leaves. You cry for an hour.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.25,
    category: 'life',
    minAge: 2,
    maxAge: 5,
  },

  {
    id: 'childhood_imaginary_friend',
    title: 'Imaginary Friend',
    description: 'You invented an invisible friend named Gerald.',
    conditions: [
      { type: 'minAge', value: 3 },
      { type: 'maxAge', value: 7 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'imaginary_keep',
        text: 'Keep hanging out with Gerald',
        outcomes: [
          {
            weight: 50,
            description: 'Gerald helps you process emotions better than any adult could.',
            effects: [
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Gerald starts telling you to hide your sister\'s shoes. Pediatrician visit scheduled.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'imaginary_breakup',
        text: 'Break up with Gerald',
        outcomes: [
          {
            weight: 60,
            description: 'Gerald vanishes and never comes back.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Gerald gets replaced by "Doctor Chaos." Your parents were not ready.',
            effects: [
              { type: 'stat', target: 'happiness', value: 4, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'health', value: -1, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'social',
    minAge: 3,
    maxAge: 7,
    oneTime: true,
  },

  // ================================================================
  //  CHILD (5–8)
  // ================================================================

  {
    id: 'childhood_first_day_school',
    title: 'First Day of School',
    description: 'First day at school — a kid nearby is eating glue.',
    conditions: [
      { type: 'minAge', value: 5 },
      { type: 'maxAge', value: 6 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'school_brave',
        text: 'Walk in confidently',
        outcomes: [
          {
            weight: 60,
            description: 'You make two friends by sharing your fruit snacks.',
            effects: [
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'You trip over a backpack and face-plant. A kid laughs. You become friends.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'stat', target: 'looks', value: -2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'school_cry',
        text: 'Cling to your parent\'s leg',
        outcomes: [
          {
            weight: 50,
            description: 'Your parent peels you off and sprints to the car. By lunch, you\'re fine.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Your crying triggers a chain reaction. Every kid starts crying.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'school_glue_kid',
        text: 'Sit next to the glue kid',
        outcomes: [
          {
            weight: 60,
            description: 'His name is Kyle. He shows you how to make a catapult out of a ruler.',
            effects: [
              { type: 'stat', target: 'happiness', value: 7, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -1, operation: 'add' },
              { type: 'add_relationship', target: 'friend', value: 'friend' },
            ],
          },
          {
            weight: 40,
            description: 'He offers you glue. You try it. It tastes like regret.',
            effects: [
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 4, operation: 'add' },
              { type: 'add_relationship', target: 'friend', value: 'friend' },
            ],
          },
        ],
      },
    ],
    probability: 0.4,
    category: 'education',
    minAge: 5,
    maxAge: 6,
    oneTime: true,
    priority: 5,
  },

  {
    id: 'childhood_playground_bully',
    title: 'Playground Justice',
    description: 'A bigger kid wants your lunch money.',
    conditions: [
      { type: 'minAge', value: 6 },
      { type: 'maxAge', value: 9 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'bully_fight',
        text: 'Stand your ground',
        outcomes: [
          {
            weight: 40,
            description: 'You fight back. He\'s so shocked he leaves you alone forever.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'He pushes you down. But two kids come check on you. You have allies now.',
            effects: [
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'bully_outsmart',
        text: 'Try to outsmart him',
        outcomes: [
          {
            weight: 50,
            description: 'You say the principal is behind him. He turns. You bolt.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Negotiations fail. You lose your lunch money and your dignity.',
            effects: [
              { type: 'stat', target: 'happiness', value: -6, operation: 'add' },
              { type: 'money', target: 'money', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'bully_tell_teacher',
        text: 'Tell a teacher',
        outcomes: [
          {
            weight: 40,
            description: 'The bully apologizes while making eye contact that promises revenge.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'The teacher takes it seriously. The bully gets detention.',
            effects: [
              { type: 'stat', target: 'happiness', value: 4, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.25,
    category: 'social',
    minAge: 6,
    maxAge: 9,
    oneTime: true,
  },

  {
    id: 'childhood_tooth_fairy',
    title: 'Tooth Economy',
    description: 'Your first tooth is hanging by a thread.',
    conditions: [
      { type: 'minAge', value: 5 },
      { type: 'maxAge', value: 8 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'tooth_yank',
        text: 'Tie it to a doorknob',
        outcomes: [
          {
            weight: 50,
            description: 'The tooth flies out. You find $5 under your pillow the next morning.',
            effects: [
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'money', target: 'money', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'The tooth holds. It falls out during dinner instead.',
            effects: [
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 1, operation: 'add' },
              { type: 'money', target: 'money', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'tooth_negotiate',
        text: 'Write the Tooth Fairy a letter',
        outcomes: [
          {
            weight: 40,
            description: 'Your letter cites rising candy costs. You find $20 under your pillow.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'money', target: 'money', value: 20, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'The Tooth Fairy leaves a note: "nice try." You get $1.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'money', target: 'money', value: 1, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'tooth_swallow',
        text: 'Accidentally swallow it',
        outcomes: [
          {
            weight: 100,
            description: 'Your friend says you\'ll grow a tooth tree in your stomach. You believe it.',
            effects: [
              { type: 'stat', target: 'health', value: -1, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -4, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -2, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.3,
    category: 'life',
    minAge: 5,
    maxAge: 8,
    oneTime: true,
  },

  {
    id: 'childhood_weird_discovery',
    title: 'The Forbidden Drawer',
    description: 'You found a mysterious drawer in your parents\' room.',
    conditions: [
      { type: 'minAge', value: 6 },
      { type: 'maxAge', value: 9 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'drawer_open',
        text: 'Open it',
        outcomes: [
          {
            weight: 40,
            description: 'It\'s full of confiscated Halloween candy. The betrayal cuts deep.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'stat', target: 'health', value: -1, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'You find your parent\'s old report cards. They got a D in math. Leverage.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'It\'s just tax documents. Adulthood looks terrible.',
            effects: [
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'drawer_resist',
        text: 'Walk away',
        outcomes: [
          {
            weight: 60,
            description: 'You think about that drawer every night for three years.',
            effects: [
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'You develop iron willpower.',
            effects: [
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 1, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'life',
    minAge: 6,
    maxAge: 9,
    oneTime: true,
  },

  {
    id: 'childhood_birthday_chaos',
    title: 'Birthday Party',
    description: 'Twenty sugar-fueled kids and a leaning bounce house.',
    conditions: [
      { type: 'minAge', value: 5 },
      { type: 'maxAge', value: 9 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'party_enjoy',
        text: 'Embrace the chaos',
        outcomes: [
          {
            weight: 60,
            description: 'A lamp breaks, the cake falls, and the clown cries. Best party ever.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Your two best friends discover they hate each other. A fight breaks out.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'party_cake',
        text: 'Guard the cake',
        outcomes: [
          {
            weight: 50,
            description: 'You guard it like Secret Service. You get the first and biggest piece.',
            effects: [
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'You accidentally knock it off the table. The dog eats it.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'looks', value: -1, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'party_presents',
        text: 'Speed-run the presents',
        outcomes: [
          {
            weight: 50,
            description: 'You rip through everything. Three of the same Lego set.',
            effects: [
              { type: 'stat', target: 'happiness', value: 7, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Your uncle got you an encyclopedia. You fake a smile so well they sign you up for drama.',
            effects: [
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -1, operation: 'add' },
              { type: 'stat', target: 'looks', value: 1, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.25,
    category: 'social',
    minAge: 5,
    maxAge: 9,
  },

  {
    id: 'childhood_first_crush',
    title: 'Butterflies',
    description: 'A kid in class is making your stomach feel weird.',
    conditions: [
      { type: 'minAge', value: 6 },
      { type: 'maxAge', value: 9 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'crush_note',
        text: 'Write them a note',
        outcomes: [
          {
            weight: 30,
            description: 'They check "yes." You hold hands at recess for two days.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'looks', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'They check "no" with a frowny face. First heartbreak.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'They show the note to the entire class.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'crush_ignore',
        text: 'Pretend they don\'t exist',
        outcomes: [
          {
            weight: 60,
            description: 'You avoid eye contact so hard they think you hate them. They start being nice.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'You bottle up every feeling. Immunity to crushes for three years.',
            effects: [
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'relationship',
    minAge: 6,
    maxAge: 9,
    oneTime: true,
  },

  {
    id: 'childhood_pet_goldfish',
    title: 'Circle of Life',
    description: 'Mr. Bubbles is floating at the top of the tank.',
    conditions: [
      { type: 'minAge', value: 5 },
      { type: 'maxAge', value: 8 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'fish_funeral',
        text: 'Hold a funeral',
        outcomes: [
          {
            weight: 60,
            description: 'You deliver a eulogy that makes your father cry.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'You bury Mr. Bubbles in the backyard. The cats keep digging it up.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'fish_replace',
        text: 'Get a replacement fish',
        outcomes: [
          {
            weight: 70,
            description: 'You pick a new fish. Mr. Bubbles II. The dynasty continues.',
            effects: [
              { type: 'stat', target: 'happiness', value: 4, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Mr. Bubbles II dies within a week. You suspect a curse.',
            effects: [
              { type: 'stat', target: 'happiness', value: -6, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'life',
    minAge: 5,
    maxAge: 8,
    oneTime: true,
  },

  {
    id: 'childhood_caught_naughty',
    title: 'Busted',
    description: 'Caught eating Oreos at 2 AM.',
    conditions: [
      { type: 'minAge', value: 5 },
      { type: 'maxAge', value: 9 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'naughty_deny',
        text: 'Deny everything',
        outcomes: [
          {
            weight: 30,
            description: 'You claim sleepwalking despite a chocolate-covered face. They buy it.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 4, operation: 'add' },
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description: 'The crumb trail gives you away. No dessert for a week.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'naughty_confess',
        text: 'Offer to share',
        outcomes: [
          {
            weight: 60,
            description: 'Your parent sits down and takes an Oreo. "We never speak of this."',
            effects: [
              { type: 'stat', target: 'happiness', value: 7, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'They appreciate the honesty but still ground you.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'naughty_cry',
        text: 'Weaponize tears',
        outcomes: [
          {
            weight: 50,
            description: 'You cry so well your parent feels guilty. They tuck you in and forget it.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
              { type: 'stat', target: 'looks', value: 1, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'They\'ve seen this trick before. They wait you out. Grounded.',
            effects: [
              { type: 'stat', target: 'happiness', value: -4, operation: 'add' },
              { type: 'stat', target: 'looks', value: -1, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'life',
    minAge: 5,
    maxAge: 9,
  },

  {
    id: 'childhood_class_clown',
    title: 'Comedy Hour',
    description: 'A great joke is forming during math class.',
    conditions: [
      { type: 'minAge', value: 6 },
      { type: 'maxAge', value: 10 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'clown_tell_joke',
        text: 'Tell the joke',
        outcomes: [
          {
            weight: 50,
            description: 'The class erupts. Even the teacher cracks a smile.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -3, operation: 'add' },
              { type: 'stat', target: 'looks', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Nobody laughs. Complete silence. A kid coughs.',
            effects: [
              { type: 'stat', target: 'happiness', value: -7, operation: 'add' },
              { type: 'stat', target: 'looks', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'A kid shoots milk out of his nose. You get sent to the principal.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -5, operation: 'add' },
              { type: 'stat', target: 'looks', value: 4, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'clown_hold_it',
        text: 'Hold it in, focus on math',
        outcomes: [
          {
            weight: 60,
            description: 'You learn fractions. The joke dies inside you.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'The joke leaks out as a snort during a quiet moment. Everyone stares.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -1, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'education',
    minAge: 6,
    maxAge: 10,
  },

  {
    id: 'childhood_library_nerd',
    title: 'The Stacks',
    description: 'You notice a dusty library section nobody else sees.',
    conditions: [
      { type: 'minAge', value: 6 },
      { type: 'maxAge', value: 10 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'library_explore',
        text: 'Explore the back section',
        outcomes: [
          {
            weight: 50,
            description: 'You find a dinosaur book that changes your worldview.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'looks', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'You find a book with interesting illustrations. You develop an interest in art.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'You find $20 used as a bookmark. The librarian lets you keep it.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'money', target: 'money', value: 20, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'library_graphic_novels',
        text: 'Read graphic novels',
        outcomes: [
          {
            weight: 70,
            description: 'You discover manga. You try running like Naruto at recess.',
            effects: [
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'You bond with other kids over comics. A friend group forms.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'education',
    minAge: 6,
    maxAge: 10,
    oneTime: true,
  },

  {
    id: 'childhood_lemonade_stand',
    title: 'Lemonade Stand',
    description: 'You set up a lemonade stand — your first business.',
    conditions: [
      { type: 'minAge', value: 7 },
      { type: 'maxAge', value: 11 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'lemonade_honest',
        text: 'Sell honest lemonade',
        outcomes: [
          {
            weight: 50,
            description: 'You sell 12 cups but spent $15 on supplies. Lesson in profit margins.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'money', target: 'money', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'A neighbor gives you $20 for one cup. Pity is a viable business model.',
            effects: [
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
              { type: 'money', target: 'money', value: 20, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'lemonade_hustle',
        text: 'Price gouge — $5 "artisanal"',
        outcomes: [
          {
            weight: 40,
            description: 'Three adults actually pay $5 each. You understand gentrification now.',
            effects: [
              { type: 'stat', target: 'smarts', value: 6, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'money', target: 'money', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'A competitor sets up with better lemonade at lower prices.',
            effects: [
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'money', target: 'money', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'life',
    minAge: 7,
    maxAge: 11,
    oneTime: true,
  },

  {
    id: 'childhood_report_card',
    title: 'Report Card Day',
    description: 'Report cards are out.',
    conditions: [
      { type: 'minAge', value: 7 },
      { type: 'maxAge', value: 12 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'report_hide',
        text: 'Intercept it first',
        outcomes: [
          {
            weight: 30,
            description: 'You swap in a fake one. The guilt will eat you alive later.',
            effects: [
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description: 'They find it in your backpack. The D in math stares up at everyone.',
            effects: [
              { type: 'stat', target: 'happiness', value: -6, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'report_face',
        text: 'Face it head-on',
        outcomes: [
          {
            weight: 50,
            description: 'It\'s actually not bad. Your parent takes you out for ice cream.',
            effects: [
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Teacher\'s comment: "needs to stop making sound effects during reading."',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'education',
    minAge: 7,
    maxAge: 12,
  },

  {
    id: 'childhood_broken_bone',
    title: 'The Snap',
    description: 'You climbed something you shouldn\'t have and gravity won.',
    conditions: [
      { type: 'minAge', value: 6 },
      { type: 'maxAge', value: 12 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'bone_tough',
        text: 'Be tough about it',
        outcomes: [
          {
            weight: 50,
            description: 'You walk to the nurse holding your own arm. She calls you the bravest kid ever.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'stat', target: 'looks', value: 3, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'You try to say "I\'m fine" but the noise you make frightens birds.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'bone_milk_it',
        text: 'Milk it for sympathy',
        outcomes: [
          {
            weight: 60,
            description: 'Six weeks off chores. Everyone signs your cast. Peak childhood.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'looks', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Your parent catches you gaming with the "broken" arm. Special treatment ends.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.15,
    category: 'health',
    minAge: 6,
    maxAge: 12,
    oneTime: true,
  },

  {
    id: 'childhood_snow_day',
    title: 'Snow Day',
    description: 'School is cancelled and the world is white.',
    conditions: [
      { type: 'minAge', value: 5 },
      { type: 'maxAge', value: 12 },
      { type: 'season', value: 'winter' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'snow_outside',
        text: 'Spend the day outside',
        outcomes: [
          {
            weight: 60,
            description: 'You build a magnificent snowman. Frozen solid but radiating joy.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Snowball fight escalates into full neighborhood war. You lose spectacularly.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'snow_inside',
        text: 'Hot chocolate and video games',
        outcomes: [
          {
            weight: 70,
            description: 'Pajamas until 4 PM. You beat that level you\'ve been stuck on.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'health', value: 1, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -1, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Power goes out. You read a book out of desperation. It\'s actually great.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.3,
    category: 'life',
    minAge: 5,
    maxAge: 12,
  },

  {
    id: 'childhood_weird_kid',
    title: 'The Weird Kid',
    description: 'The kid who calls himself "Shadow Wolf" is heading your way.',
    conditions: [
      { type: 'minAge', value: 6 },
      { type: 'maxAge', value: 10 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'weird_befriend',
        text: 'Be their friend',
        outcomes: [
          {
            weight: 60,
            description: 'Shadow Wolf knows every constellation. Most interesting person you\'ve met.',
            effects: [
              { type: 'stat', target: 'happiness', value: 7, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
              { type: 'add_relationship', target: 'friend', value: 'friend' },
            ],
          },
          {
            weight: 40,
            description: 'They follow you everywhere. They made you a bracelet out of... hair.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'stat', target: 'looks', value: -4, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'add_relationship', target: 'friend', value: 'friend' },
            ],
          },
        ],
      },
      {
        id: 'weird_avoid',
        text: 'Politely avoid them',
        outcomes: [
          {
            weight: 50,
            description: 'Years later they become a famous YouTuber. You could\'ve been in those videos.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'stat', target: 'looks', value: 1, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'They find another friend. You feel an irrational pang of jealousy.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'social',
    minAge: 6,
    maxAge: 10,
    oneTime: true,
  },

  {
    id: 'childhood_allowance',
    title: 'First Paycheck',
    description: 'You\'re getting $5 a week for chores now.',
    conditions: [
      { type: 'minAge', value: 7 },
      { type: 'maxAge', value: 11 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'allowance_save',
        text: 'Save every penny',
        outcomes: [
          {
            weight: 60,
            description: 'After three months you have $60. The waiting made it sweeter.',
            effects: [
              { type: 'stat', target: 'smarts', value: 6, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'money', target: 'money', value: 60, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'You save for weeks then buy a toy that breaks in two days.',
            effects: [
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -4, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'allowance_spend',
        text: 'Spend it all on candy',
        outcomes: [
          {
            weight: 60,
            description: 'You buy so much candy the cashier asks if it\'s a party. It\'s not.',
            effects: [
              { type: 'stat', target: 'happiness', value: 7, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Sugar crash. You lie on the floor questioning happiness.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'allowance_negotiate',
        text: 'Negotiate for a raise',
        outcomes: [
          {
            weight: 40,
            description: 'You present a 3-slide PowerPoint. They agree to $10/week.',
            effects: [
              { type: 'stat', target: 'smarts', value: 7, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'money', target: 'money', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'They counter with more chores for the same pay. You played yourself.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'life',
    minAge: 7,
    maxAge: 11,
    oneTime: true,
  },

  {
    id: 'childhood_scary_basement',
    title: 'The Basement',
    description: 'Your ball rolled into the dark basement.',
    conditions: [
      { type: 'minAge', value: 5 },
      { type: 'maxAge', value: 10 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'basement_brave',
        text: 'Go into the darkness',
        outcomes: [
          {
            weight: 50,
            description: 'Just a leaky pipe. You grab the ball and sprint back upstairs anyway.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'A cobweb brushes your face. You teleport back upstairs screaming.',
            effects: [
              { type: 'stat', target: 'happiness', value: -4, operation: 'add' },
              { type: 'stat', target: 'health', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'You find the ball AND a box of forgotten vintage toys.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'basement_abandon',
        text: 'Sacrifice the ball',
        outcomes: [
          {
            weight: 60,
            description: 'You walk away. You think about that ball every night for a year.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'Your parent retrieves it later. You claim the basement is haunted.',
            effects: [
              { type: 'stat', target: 'happiness', value: 1, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'life',
    minAge: 5,
    maxAge: 10,
    oneTime: true,
  },

  // ================================================================
  //  PRETEEN (9–12)
  // ================================================================

  {
    id: 'childhood_talent_show',
    title: 'The Talent Show',
    description: 'You signed up and your only talent is burping the alphabet.',
    conditions: [
      { type: 'minAge', value: 9 },
      { type: 'maxAge', value: 12 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'talent_burp',
        text: 'Perform the burp alphabet',
        outcomes: [
          {
            weight: 40,
            description: 'You make it to Q. Disgust and admiration in equal measure.',
            effects: [
              { type: 'stat', target: 'happiness', value: 7, operation: 'add' },
              { type: 'stat', target: 'looks', value: -4, operation: 'add' },
              { type: 'stat', target: 'health', value: -1, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Full alphabet. Standing ovation from the boys. Principal unamused.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'You throw up on stage.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'looks', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'talent_lip_sync',
        text: 'Do a lip sync instead',
        outcomes: [
          {
            weight: 50,
            description: 'You lip sync so passionately people forget you\'re not singing.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'looks', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'The audio cuts out. You mouth silently in front of 200 people.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'stat', target: 'looks', value: -2, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'talent_skip',
        text: 'Chicken out',
        outcomes: [
          {
            weight: 60,
            description: 'Someone wins with a mediocre magic trick. You know you could\'ve won.',
            effects: [
              { type: 'stat', target: 'happiness', value: -4, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'A karate kid kicks a water bottle into the front row. The show is cancelled forever.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'education',
    minAge: 9,
    maxAge: 12,
    oneTime: true,
  },

  {
    id: 'childhood_first_fight',
    title: 'Throwdown',
    description: 'Someone insulted you and a circle has formed.',
    conditions: [
      { type: 'minAge', value: 9 },
      { type: 'maxAge', value: 12 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'fight_swing',
        text: 'Throw hands',
        outcomes: [
          {
            weight: 35,
            description: 'You land one hit. The other kid backs off. Legend status.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description: 'You both swing and miss wildly. Both suspended for three days.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'You get rocked. The video is not flattering.',
            effects: [
              { type: 'stat', target: 'health', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'stat', target: 'looks', value: -4, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'fight_roast',
        text: 'Destroy them with words',
        outcomes: [
          {
            weight: 50,
            description: 'Your roast is devastating. The crowd goes "OOOOOH." They walk away.',
            effects: [
              { type: 'stat', target: 'smarts', value: 6, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Your comeback is weak. You think of the perfect one at 3 AM.',
            effects: [
              { type: 'stat', target: 'happiness', value: -6, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'fight_walk_away',
        text: 'Walk away',
        outcomes: [
          {
            weight: 40,
            description: 'Some call you chicken. But the quiet kid nods at you with respect.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'You get hit with a juice box from behind. Right choice, wrong feeling.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'social',
    minAge: 9,
    maxAge: 12,
    oneTime: true,
  },

  {
    id: 'childhood_discover_internet',
    title: 'The Rabbit Hole',
    description: 'Unsupervised computer access with weak parental controls.',
    conditions: [
      { type: 'minAge', value: 9 },
      { type: 'maxAge', value: 12 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'internet_youtube',
        text: 'Fall down YouTube',
        outcomes: [
          {
            weight: 50,
            description: 'Cat videos to deep sea documentaries at 3 AM. You know more than your teacher.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'You find a conspiracy channel and briefly believe birds aren\'t real.',
            effects: [
              { type: 'stat', target: 'smarts', value: -4, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'internet_game',
        text: 'Download a "free" game',
        outcomes: [
          {
            weight: 40,
            description: 'The game is great. Your grades drop but your reflexes are inhuman.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -5, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'You install seventeen toolbars and a virus. Your parent is not happy.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'internet_learn',
        text: 'Try to learn something',
        outcomes: [
          {
            weight: 50,
            description: 'You learn to code. Your first program prints "butts" a thousand times.',
            effects: [
              { type: 'stat', target: 'smarts', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'You try to learn Spanish but only pick up phrases that\'ll get you in trouble.',
            effects: [
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.3,
    category: 'education',
    minAge: 9,
    maxAge: 12,
    oneTime: true,
  },

  {
    id: 'childhood_embarrassing_parent',
    title: 'Maximum Embarrassment',
    description: 'Your parent showed up at school shouting your nickname.',
    conditions: [
      { type: 'minAge', value: 9 },
      { type: 'maxAge', value: 12 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'parent_pretend',
        text: 'Pretend you don\'t know them',
        outcomes: [
          {
            weight: 50,
            description: 'You look away so hard you walk into a door. They follow you.',
            effects: [
              { type: 'stat', target: 'happiness', value: -6, operation: 'add' },
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'They yell your full name across the cafeteria. Middle name included.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'stat', target: 'looks', value: -2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'parent_own_it',
        text: 'Own it',
        outcomes: [
          {
            weight: 60,
            description: 'They tell embarrassing stories. Everyone laughs with you. Mostly.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'looks', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'They show your baby bath photo. From their phone wallpaper.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'social',
    minAge: 9,
    maxAge: 12,
    oneTime: true,
  },

  {
    id: 'childhood_home_alone',
    title: 'Home Alone',
    description: 'Home alone for the first time with a list of rules on the fridge.',
    conditions: [
      { type: 'minAge', value: 10 },
      { type: 'maxAge', value: 12 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'home_junk_food',
        text: 'Eat everything forbidden',
        outcomes: [
          {
            weight: 60,
            description: 'Chips, cake, soda from the bottle. You feel like a god for forty minutes.',
            effects: [
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'You mix every condiment into a "meal." It\'s actually not bad.',
            effects: [
              { type: 'stat', target: 'happiness', value: 4, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'home_responsible',
        text: 'Follow the rules',
        outcomes: [
          {
            weight: 50,
            description: 'You do homework and clean your room. Your parents are suspicious.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'Every noise sounds like a burglar. They find you clutching a frying pan.',
            effects: [
              { type: 'stat', target: 'happiness', value: -4, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'home_kevin',
        text: 'Set up booby traps',
        outcomes: [
          {
            weight: 40,
            description: 'String, cans, marbles. Your dad trips on it and sprains his ankle.',
            effects: [
              { type: 'stat', target: 'smarts', value: 6, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'The cat triggers every trap. The house is a disaster zone.',
            effects: [
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.25,
    category: 'life',
    minAge: 10,
    maxAge: 12,
    oneTime: true,
  },

  {
    id: 'childhood_science_fair',
    title: 'Science Fair',
    description: 'Science fair is tomorrow and all you have is baking soda and vinegar.',
    conditions: [
      { type: 'minAge', value: 9 },
      { type: 'maxAge', value: 12 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'science_volcano',
        text: 'Build a baking soda volcano',
        outcomes: [
          {
            weight: 40,
            description: 'Too much vinegar. The judge\'s shirt is ruined. You place third.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'It barely fizzes. A kid with a potato battery gets more attention.',
            effects: [
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description: 'Your parent "helped" so much it\'s professional-grade. You win anyway.',
            effects: [
              { type: 'stat', target: 'smarts', value: -2, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'science_experiment',
        text: 'Try an original experiment',
        outcomes: [
          {
            weight: 30,
            description: 'Your mold experiment clears the gymnasium. Scientifically groundbreaking.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'stat', target: 'looks', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description: 'Wrong hypothesis. Garbage data. The judge says "that\'s how real science works."',
            effects: [
              { type: 'stat', target: 'smarts', value: 6, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'science_fake',
        text: 'Make up the results',
        outcomes: [
          {
            weight: 40,
            description: 'Your fake data wins first place. A career in consulting awaits.',
            effects: [
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'The judge asks you to replicate results. You panic and knock over the display.',
            effects: [
              { type: 'stat', target: 'happiness', value: -7, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -3, operation: 'add' },
              { type: 'stat', target: 'looks', value: -1, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'education',
    minAge: 9,
    maxAge: 12,
    oneTime: true,
  },

  {
    id: 'childhood_sleepover',
    title: 'Sleepover',
    description: 'First sleepover — unlimited candy, zero supervision.',
    conditions: [
      { type: 'minAge', value: 9 },
      { type: 'maxAge', value: 12 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'sleepover_truth_dare',
        text: 'Play truth or dare',
        outcomes: [
          {
            weight: 40,
            description: 'You eat a spoonful of hot sauce on a dare. You earn a cool nickname.',
            effects: [
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'stat', target: 'looks', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'You pick truth. By Monday, the entire school knows your crush.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'Someone ding-dong-ditches the neighbor at midnight. Sleepover over.',
            effects: [
              { type: 'stat', target: 'happiness', value: 4, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'sleepover_horror',
        text: 'Watch a forbidden horror movie',
        outcomes: [
          {
            weight: 50,
            description: 'You watch without flinching. You\'re lying. You don\'t sleep for three days.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
              { type: 'stat', target: 'looks', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'You scream so loud the dad comes down with a baseball bat. Movie off.',
            effects: [
              { type: 'stat', target: 'happiness', value: -6, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'sleepover_prank',
        text: 'Prank whoever sleeps first',
        outcomes: [
          {
            weight: 50,
            description: 'You draw a mustache on Kyle with permanent marker. He doesn\'t notice until Monday.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -1, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'YOU fall asleep first. You wake up with braided hair. Photos are online.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'looks', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'social',
    minAge: 9,
    maxAge: 12,
    oneTime: true,
  },

  {
    id: 'childhood_moving_schools',
    title: 'New Kid',
    description: 'New school, new town, you know nobody.',
    conditions: [
      { type: 'minAge', value: 9 },
      { type: 'maxAge', value: 12 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'new_school_cool',
        text: 'Reinvent yourself',
        outcomes: [
          {
            weight: 40,
            description: 'You claim you were popular before. It works for three weeks.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'looks', value: 4, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description: 'You lean against a locker. It opens and swallows you.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'new_school_quiet',
        text: 'Keep your head down',
        outcomes: [
          {
            weight: 60,
            description: 'You map the social hierarchy. Solid friend group by month two.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'You\'re so quiet a teacher marks you absent for a week. You were there.',
            effects: [
              { type: 'stat', target: 'happiness', value: -4, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'new_school_weird',
        text: 'Embrace your weirdness',
        outcomes: [
          {
            weight: 50,
            description: 'You find three kids who share your niche hobby. Small but ride-or-die.',
            effects: [
              { type: 'stat', target: 'happiness', value: 7, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'looks', value: -2, operation: 'add' },
              { type: 'add_relationship', target: 'friend', value: 'friend' },
            ],
          },
          {
            weight: 50,
            description: 'You\'re labeled "the weird kid." But the weird table has the best conversations.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.15,
    category: 'social',
    minAge: 9,
    maxAge: 12,
    oneTime: true,
  },

  {
    id: 'childhood_test_cheating',
    title: 'The Big Test',
    description: 'Huge test today and you did not study.',
    conditions: [
      { type: 'minAge', value: 9 },
      { type: 'maxAge', value: 12 },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'test_cheat',
        text: 'Peek at their paper',
        outcomes: [
          {
            weight: 30,
            description: 'Different test versions. You have right answers to wrong questions.',
            effects: [
              { type: 'stat', target: 'smarts', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -4, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description: 'The teacher catches you. Hallway test. 12%. Parents called.',
            effects: [
              { type: 'stat', target: 'smarts', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description: 'You get a B+. The guilt haunts you.',
            effects: [
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'test_wing_it',
        text: 'Wing it on vibes',
        outcomes: [
          {
            weight: 30,
            description: 'You pull a C- on lucky guesses alone.',
            effects: [
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description: 'You get an F. "See me" in red ink the size of a billboard.',
            effects: [
              { type: 'stat', target: 'smarts', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'test_confess',
        text: 'Ask the teacher for mercy',
        outcomes: [
          {
            weight: 50,
            description: 'They let you retake it tomorrow. You study. You get a B.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: '"That sounds like a you problem." You stare at question one for fifteen minutes.',
            effects: [
              { type: 'stat', target: 'happiness', value: -6, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'education',
    minAge: 9,
    maxAge: 12,
  },

  {
    id: 'childhood_summer_camp',
    title: 'Summer Camp',
    description: 'Two weeks at camp with a terrified 19-year-old counselor.',
    conditions: [
      { type: 'minAge', value: 8 },
      { type: 'maxAge', value: 12 },
      { type: 'season', value: 'summer' },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'camp_nature',
        text: 'Embrace the outdoors',
        outcomes: [
          {
            weight: 50,
            description: 'You learn fire-making, tree identification, and fishing. Wilderness mode unlocked.',
            effects: [
              { type: 'stat', target: 'health', value: 6, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'You fall in the lake, get poison ivy, and a raccoon steals your shoes.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'camp_social',
        text: 'Focus on making friends',
        outcomes: [
          {
            weight: 60,
            description: 'You meet someone from three states away. Inseparable for two weeks.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'looks', value: 2, operation: 'add' },
              { type: 'add_relationship', target: 'friend', value: 'friend' },
            ],
          },
          {
            weight: 40,
            description: 'Cabin rivalry escalates to full camp war. Capture the flag gets personal.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'camp_fake_sick',
        text: 'Fake sick for the infirmary',
        outcomes: [
          {
            weight: 50,
            description: 'Air conditioning, crackers, and comics. The nurse knows but doesn\'t care.',
            effects: [
              { type: 'stat', target: 'happiness', value: 4, operation: 'add' },
              { type: 'stat', target: 'health', value: 1, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description: 'You fake sick, then actually get sick from the camp food.',
            effects: [
              { type: 'stat', target: 'health', value: -6, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -4, operation: 'add' },
            ],
          },
        ],
      },
    ],
    probability: 0.2,
    category: 'life',
    minAge: 8,
    maxAge: 12,
    oneTime: true,
  },

];
