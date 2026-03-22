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
    description:
      'Your parents are hovering over your crib with a camera. They look desperate. ' +
      'You feel a strange rumbling in your tiny throat. This is it. ' +
      'The moment that will be retold at every family gathering until you die.',
    conditions: [
      { type: 'minAge', value: 1 },
      { type: 'maxAge', value: 2 },
    ],
    choices: [
      {
        id: 'say_mama',
        text: 'Say "Mama"',
        hint: 'Classic. Safe. Mom will cry.',
        outcomes: [
          {
            weight: 70,
            description: 'Your mother bursts into tears of joy. Your father pretends he is fine.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You say "Mama" but you are looking directly at the dog. An awkward silence follows.',
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
        hint: 'Your father has been coaching you for months.',
        outcomes: [
          {
            weight: 70,
            description: 'Your father fist-pumps so hard he knocks the camera off the tripod.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'Your mother writes a passive-aggressive Facebook post about it. The comments section becomes a warzone.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'say_something_weird',
        text: 'Say something... unsettling',
        hint: 'Channel your inner demon.',
        outcomes: [
          {
            weight: 50,
            description:
              'You whisper "darkness" in a voice that shouldn\'t come from a toddler. ' +
              'Your parents laugh nervously and never speak of it again.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You scream a surprisingly accurate profanity you overheard from Dad\'s poker night. ' +
              'Grandma is visiting. It does not go well.',
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
    description:
      'You have discovered that your body has a locomotion feature. ' +
      'The entire house is now an open-world RPG and you are speedrunning it. ' +
      'Your parents have not baby-proofed anything.',
    conditions: [
      { type: 'minAge', value: 0 },
      { type: 'maxAge', value: 2 },
    ],
    choices: [
      {
        id: 'crawl_kitchen',
        text: 'Make a break for the kitchen',
        hint: 'The forbidden zone. So many shiny things.',
        outcomes: [
          {
            weight: 50,
            description:
              'You find and eat a cheerio that has been under the fridge since the Clinton administration. ' +
              'Your immune system is now stronger than titanium.',
            effects: [
              { type: 'stat', target: 'health', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You pull a pot off the counter. It misses you by an inch. Your parents age five years in three seconds.',
            effects: [
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'You open every cabinet and remove every item with surgical precision. ' +
              'By the time they find you, you are sitting in a fortress of tupperware.',
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
        hint: 'The Everest of baby challenges.',
        outcomes: [
          {
            weight: 40,
            description:
              'You make it up three steps before your parent snatches you like a football. ' +
              'You scream. Not because you are hurt, but because you were so close.',
            effects: [
              { type: 'stat', target: 'health', value: 1, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'You summit the entire staircase. You sit at the top like a tiny, drooling conqueror. ' +
              'A baby gate is installed within the hour.',
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
        hint: 'It looks fluffy. You must grab it.',
        outcomes: [
          {
            weight: 50,
            description:
              'The cat allows you to touch it for exactly 0.4 seconds before vanishing like a ninja. ' +
              'You have learned about rejection.',
            effects: [
              { type: 'stat', target: 'happiness', value: -1, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The dog thinks this is the best game ever and licks your entire face. ' +
              'You taste dog food for the first time. It is not terrible.',
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
    description:
      'You are in a grocery store. Your parent said "no" to the candy bar. ' +
      'Something inside you snaps. A rage older than civilization itself ' +
      'rises from your tiny body. Every shopper in a three-aisle radius braces for impact.',
    conditions: [
      { type: 'minAge', value: 2 },
      { type: 'maxAge', value: 4 },
    ],
    choices: [
      {
        id: 'tantrum_full_send',
        text: 'Go absolutely nuclear',
        hint: 'Scream. Flail. Become one with the floor.',
        outcomes: [
          {
            weight: 60,
            description:
              'Your screaming registers on a nearby university\'s seismograph. ' +
              'Your parent caves and buys the candy. You learn a terrible lesson about power.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Your parent carries you out like a surfboard while you kick and scream. ' +
              'An elderly woman shakes her head. You have been judged.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'tantrum_silent_rage',
        text: 'Deploy the silent death stare',
        hint: 'No screaming. Just pure, unblinking fury.',
        outcomes: [
          {
            weight: 50,
            description:
              'You stare at your parent without blinking for forty-five seconds. ' +
              'They feel genuine fear. You get the candy AND a toy.',
            effects: [
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your parent stares back. You blink first. Defeat has never tasted so bitter.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'tantrum_accept',
        text: 'Accept the "no" with grace',
        hint: 'You are better than this.',
        outcomes: [
          {
            weight: 80,
            description:
              'You nod solemnly, shocking everyone within earshot. An old man whispers "that\'s the most mature toddler I\'ve ever seen." ' +
              'Your parent buys you two candy bars out of sheer guilt.',
            effects: [
              { type: 'stat', target: 'happiness', value: 4, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'You hold it together in the store. You unleash the tantrum in the parking lot instead. Strategic.',
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
    description:
      'You have been presented with a new food. It is green. ' +
      'It smells like the earth. Your parents call it "broccoli" and claim it is "yummy." ' +
      'You have serious doubts.',
    conditions: [
      { type: 'minAge', value: 1 },
      { type: 'maxAge', value: 4 },
    ],
    choices: [
      {
        id: 'eat_throw',
        text: 'Launch it across the room',
        hint: 'Test the aerodynamics.',
        outcomes: [
          {
            weight: 60,
            description:
              'Direct hit on the family dog. It eats the broccoli happily. ' +
              'You have outsourced your vegetables. Genius.',
            effects: [
              { type: 'stat', target: 'happiness', value: 4, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'It lands in your father\'s coffee. He stares at it. Then at you. ' +
              'Then he drinks it anyway because he is too tired to care.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'eat_try_it',
        text: 'Actually eat it',
        hint: 'Maybe the parents are onto something.',
        outcomes: [
          {
            weight: 40,
            description:
              'You... actually like it? Your parents high-five each other like they just landed on the moon. ' +
              'They will not have this luck again for years.',
            effects: [
              { type: 'stat', target: 'health', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'You gag so dramatically that your mother starts recording for TikTok. ' +
              'The video gets 2 million views. You are internet famous at age 2.',
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
        hint: 'Nobody will ever look there. Probably.',
        outcomes: [
          {
            weight: 100,
            description:
              'Your parents discover a partially mashed broccoli floret during the next diaper change. ' +
              'They question every life decision that led them to this moment.',
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
    description:
      'Your parents bring home a small, screaming creature and tell you it is your new sibling. ' +
      'It does nothing but cry, eat, and receive all the attention that was rightfully yours. ' +
      'This is an act of war.',
    conditions: [
      { type: 'minAge', value: 2 },
      { type: 'maxAge', value: 5 },
    ],
    choices: [
      {
        id: 'sibling_love',
        text: 'Welcome the baby with love',
        hint: 'Share your toys. Share your parents. Share your soul.',
        outcomes: [
          {
            weight: 60,
            description:
              'You gently pat the baby\'s head and say "my baby." Everyone cries. ' +
              'This photo will be your mother\'s profile picture for the next decade.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'add_relationship', target: 'sibling', value: 'sibling' },
            ],
          },
          {
            weight: 40,
            description:
              'You try to "share" your juice box by pouring it directly onto the baby. ' +
              'Your intentions were pure. The execution was not.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'add_relationship', target: 'sibling', value: 'sibling' },
            ],
          },
        ],
      },
      {
        id: 'sibling_jealous',
        text: 'Demand to return the baby',
        hint: 'You kept the receipt, right?',
        outcomes: [
          {
            weight: 50,
            description:
              'You ask if the baby can be returned to the hospital for a refund. ' +
              'Your father laughs so hard he pulls a muscle.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
              { type: 'add_relationship', target: 'sibling', value: 'sibling' },
            ],
          },
          {
            weight: 50,
            description:
              'You pack the baby\'s things in a grocery bag and leave it by the front door. ' +
              'Your parents are horrified. The baby sleeps through all of it.',
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
    description:
      'You spot an animal in the wild — or at least, in your neighbor\'s yard. ' +
      'It is approximately your size and seems to be staring into your soul. ' +
      'Your tiny brain fires on all cylinders trying to classify this creature.',
    conditions: [
      { type: 'minAge', value: 2 },
      { type: 'maxAge', value: 5 },
    ],
    choices: [
      {
        id: 'pet_hug',
        text: 'Try to hug it',
        hint: 'It looks soft. You MUST touch it.',
        outcomes: [
          {
            weight: 50,
            description:
              'It\'s a golden retriever and it loves you immediately. You are now best friends. ' +
              'You tell your parents you want to marry this dog.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'health', value: 1, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'It\'s a cat. It tolerates your hug for exactly one second before scratching your arm ' +
              'and vanishing over a fence like a parkour athlete.',
            effects: [
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'It\'s a raccoon. It hisses. You hiss back. ' +
              'Your parent sprints toward you at Olympic speed.',
            effects: [
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'pet_observe',
        text: 'Observe from a safe distance',
        hint: 'Study the creature. Learn its ways.',
        outcomes: [
          {
            weight: 70,
            description:
              'You watch the squirrel for twenty minutes without moving. Your parents wonder ' +
              'if you are a future scientist or just broken.',
            effects: [
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The animal loses interest and leaves. You cry for an hour. ' +
              'Your first experience with abandonment.',
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

  // ================================================================
  //  CHILD (5–8)
  // ================================================================

  {
    id: 'childhood_first_day_school',
    title: 'First Day of School',
    description:
      'Your parent drops you off at a building full of strangers your own size. ' +
      'They say "have fun!" and drive away. This feels like a betrayal. ' +
      'A kid next to you is already eating glue.',
    conditions: [
      { type: 'minAge', value: 5 },
      { type: 'maxAge', value: 6 },
    ],
    choices: [
      {
        id: 'school_brave',
        text: 'Walk in like you own the place',
        hint: 'Confidence is key. Even if it is fake.',
        outcomes: [
          {
            weight: 60,
            description:
              'You strut in and immediately make two friends by sharing your fruit snacks. ' +
              'This is the first and last time networking will be this easy.',
            effects: [
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You walk in confidently, trip over a backpack, and face-plant in front of everyone. ' +
              'A kid laughs. That kid will become your best friend.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
              { type: 'stat', target: 'looks', value: -2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'school_cry',
        text: 'Cling to your parent\'s leg and scream',
        hint: 'The nuclear option.',
        outcomes: [
          {
            weight: 50,
            description:
              'Your parent peels you off like velcro and sprints to the car. The teacher pats your head. ' +
              'By lunch, you have forgotten why you were crying.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your crying triggers a chain reaction. Soon every kid is crying. ' +
              'The teacher questions her career choices.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'school_glue_kid',
        text: 'Sit next to the glue-eating kid',
        hint: 'He seems interesting.',
        outcomes: [
          {
            weight: 60,
            description:
              'His name is Kyle and he is the most fascinating person you have ever met. ' +
              'He shows you how to make a catapult out of a ruler. Best day ever.',
            effects: [
              { type: 'stat', target: 'happiness', value: 7, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -1, operation: 'add' },
              { type: 'add_relationship', target: 'friend', value: 'friend' },
            ],
          },
          {
            weight: 40,
            description:
              'He offers you glue. You try it. It tastes like regret and chemicals. ' +
              'You are now bonded for life. Literally and figuratively.',
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
    description:
      'A kid twice your size has decided that your lunch money is now his lunch money. ' +
      'He smells like Doritos and broken dreams. ' +
      'A crowd of children gathers. The teachers are mysteriously absent.',
    conditions: [
      { type: 'minAge', value: 6 },
      { type: 'maxAge', value: 9 },
    ],
    choices: [
      {
        id: 'bully_fight',
        text: 'Stand your ground',
        hint: 'Violence is never the answer. Unless it works.',
        outcomes: [
          {
            weight: 40,
            description:
              'You throw a punch that connects with his shoulder. He is so shocked a small kid fought back ' +
              'that he leaves you alone forever. You are a legend.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'He pushes you down. You eat dirt. But you got back up, and somehow ' +
              'that matters more. Two kids come check on you. You have allies now.',
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
        hint: 'Brains over brawn. In theory.',
        outcomes: [
          {
            weight: 50,
            description:
              'You tell him the principal is right behind him. He spins around. You grab your stuff and bolt. ' +
              'The greatest military tactician of the playground.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You try to negotiate. He is not interested in diplomacy. ' +
              'You lose your lunch money AND your dignity.',
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
        hint: 'The system exists for a reason. Right?',
        outcomes: [
          {
            weight: 40,
            description:
              'The teacher makes the bully apologize. He says "sorry" while making direct eye contact ' +
              'in a way that promises future retribution. Great. Just great.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'The teacher actually takes it seriously. The bully gets detention. ' +
              'You learn that institutions sometimes work. This optimism will not last.',
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
    description:
      'Your first tooth is dangling by a thread, performing acrobatics every time you breathe. ' +
      'The Tooth Fairy allegedly pays cash for these things. ' +
      'Time to decide how to handle this biological transaction.',
    conditions: [
      { type: 'minAge', value: 5 },
      { type: 'maxAge', value: 8 },
    ],
    choices: [
      {
        id: 'tooth_yank',
        text: 'Tie it to a doorknob',
        hint: 'The classic extraction method.',
        outcomes: [
          {
            weight: 50,
            description:
              'The door slams. The tooth flies. It lands in your cereal bowl. ' +
              'Your parent gags. You put it under your pillow and find $5 in the morning.',
            effects: [
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'money', target: 'money', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The door slams but the tooth holds. Your head jerks forward. ' +
              'You rethink everything. The tooth falls out during dinner instead.',
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
        text: 'Write a letter to the Tooth Fairy demanding more money',
        hint: 'Inflation affects everyone.',
        outcomes: [
          {
            weight: 40,
            description:
              'You write a three-page letter citing rising costs of candy. ' +
              'Your parents are so impressed they leave $20 under the pillow. ' +
              'Your future in contract law begins.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'money', target: 'money', value: 20, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'The Tooth Fairy leaves a note saying "nice try." ' +
              'You find a single dollar coin and a coupon for broccoli. ' +
              'You learn that life is not fair.',
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
        hint: 'Things happen.',
        outcomes: [
          {
            weight: 100,
            description:
              'You swallow the tooth during lunch. You panic. Your friend says you\'ll grow a tooth tree in your stomach. ' +
              'You believe this for an embarrassingly long time. No Tooth Fairy money tonight.',
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
    description:
      'While your parents are busy, you discover a drawer in their bedroom that you have never ' +
      'seen opened before. It practically radiates forbidden energy. ' +
      'Your curiosity is physically painful.',
    conditions: [
      { type: 'minAge', value: 6 },
      { type: 'maxAge', value: 9 },
    ],
    choices: [
      {
        id: 'drawer_open',
        text: 'Open it',
        hint: 'Knowledge is power. Or trauma. Either way.',
        outcomes: [
          {
            weight: 40,
            description:
              'It\'s full of old Halloween candy your parents confiscated and have been secretly eating. ' +
              'The betrayal cuts deep. Trust is shattered. You eat what\'s left.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'stat', target: 'health', value: -1, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You find a stack of report cards from when your parent was a kid. ' +
              'They got a D in math. You now have leverage that will last a lifetime.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'It\'s tax documents. Just piles and piles of tax documents. ' +
              'You have never been so disappointed. Adulthood looks terrible.',
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
        hint: 'Some things are better left unknown.',
        outcomes: [
          {
            weight: 60,
            description:
              'You walk away but think about that drawer every single night for the next three years.',
            effects: [
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You develop an iron willpower that will serve you well. Or terribly. It\'s hard to say.',
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
    title: 'Birthday Party Pandemonium',
    description:
      'It\'s your birthday party and your parents have made the catastrophic decision to invite your entire class. ' +
      'Twenty-three children hopped up on sugar are now loose in your house. ' +
      'The bounce house is leaning dangerously. This will not end well.',
    conditions: [
      { type: 'minAge', value: 5 },
      { type: 'maxAge', value: 9 },
    ],
    choices: [
      {
        id: 'party_enjoy',
        text: 'Embrace the chaos',
        hint: 'This is YOUR day.',
        outcomes: [
          {
            weight: 60,
            description:
              'Best. Party. Ever. Someone breaks a lamp, the cake falls on the floor, ' +
              'and the clown your parents hired starts crying. You have never been happier.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Your best friend and your other best friend discover they hate each other. ' +
              'A fight breaks out near the piñata. Your dad separates them while holding a juice box.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'party_cake',
        text: 'Guard the cake with your life',
        hint: 'You saw someone eyeing your corner piece.',
        outcomes: [
          {
            weight: 50,
            description:
              'You position yourself next to the cake like a Secret Service agent. ' +
              'Nobody touches it until you get the first and biggest piece.',
            effects: [
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'While guarding the cake, you accidentally elbow it off the table. ' +
              'The dog eats it before anyone can react. Happy birthday to the dog, apparently.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'looks', value: -1, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'party_presents',
        text: 'Speed-run opening presents',
        hint: 'The real reason for the party.',
        outcomes: [
          {
            weight: 50,
            description:
              'You rip through presents like a tornado. You get three of the same Lego set. ' +
              'Your mother forces a smile while writing return receipts in her head.',
            effects: [
              { type: 'stat', target: 'happiness', value: 7, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your weird uncle got you an encyclopedia. In 2026. You fake a smile so convincingly ' +
              'that your parents sign you up for drama club.',
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
    description:
      'There is a kid in your class and looking at them makes your stomach feel weird. ' +
      'Not like the cafeteria meatloaf weird. A different weird. ' +
      'Your friend says you are "in love." You want to die.',
    conditions: [
      { type: 'minAge', value: 6 },
      { type: 'maxAge', value: 9 },
    ],
    choices: [
      {
        id: 'crush_note',
        text: 'Write them a note',
        hint: 'Do you like me? Check yes or no.',
        outcomes: [
          {
            weight: 30,
            description:
              'They check "yes." Your heart explodes. You hold hands at recess for two days ' +
              'before mutually agreeing that relationships are too complicated.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'looks', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'They check "no" and add a frowny face. You stare at the ceiling for three days. ' +
              'Your first heartbreak builds character. And trauma.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'They show the note to the entire class. ' +
              'You learn the meaning of the word "mortified" through direct experience.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'crush_ignore',
        text: 'Aggressively pretend they don\'t exist',
        hint: 'If you ignore the feelings, they\'ll go away. Definitely.',
        outcomes: [
          {
            weight: 60,
            description:
              'You avoid eye contact so intensely that they think you hate them. ' +
              'They start being extra nice to you to win you over. Wait, is this working?',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You bottle up every feeling so effectively that you develop an immunity to crushes ' +
              'for the next three years. Efficiency.',
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
    title: 'The Circle of (Aquatic) Life',
    description:
      'Your goldfish, Mr. Bubbles, is floating at the top of the tank. ' +
      'Not in a fun way. Your parent is standing behind you with a look of absolute dread, ' +
      'trying to figure out how to explain death to a child.',
    conditions: [
      { type: 'minAge', value: 5 },
      { type: 'maxAge', value: 8 },
    ],
    choices: [
      {
        id: 'fish_funeral',
        text: 'Hold a full funeral service',
        hint: 'Mr. Bubbles deserves a proper send-off.',
        outcomes: [
          {
            weight: 60,
            description:
              'You deliver a eulogy that makes your father cry. The toilet flush is a 21-gun salute. ' +
              'You process death better than most adults.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You insist on burying Mr. Bubbles in the backyard with a headstone made from a popsicle stick. ' +
              'The neighborhood cats keep digging it up. Death is relentless.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'fish_replace',
        text: 'Demand a replacement fish immediately',
        hint: 'Grief? What grief? New fish, who dis.',
        outcomes: [
          {
            weight: 70,
            description:
              'Your parent takes you to the pet store. You pick a fish that looks nothing like Mr. Bubbles. ' +
              'You name him Mr. Bubbles II. The dynasty continues.',
            effects: [
              { type: 'stat', target: 'happiness', value: 4, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'Mr. Bubbles II dies within a week. You begin to suspect you might be cursed.',
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
    description:
      'You thought you were being so sneaky. You really did. ' +
      'But your parent is standing in the doorway with crossed arms and THE LOOK. ' +
      'You are halfway through eating an entire sleeve of Oreos at 2 AM.',
    conditions: [
      { type: 'minAge', value: 5 },
      { type: 'maxAge', value: 9 },
    ],
    choices: [
      {
        id: 'naughty_deny',
        text: 'Deny everything',
        hint: 'What Oreos? These aren\'t Oreos. I\'m sleepwalking.',
        outcomes: [
          {
            weight: 30,
            description:
              'You claim you were sleepwalking and have no memory of eating Oreos ' +
              'despite your face being 80% chocolate. Against all odds, they buy it.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 4, operation: 'add' },
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description:
              'Your parent points at the crumb trail leading from the kitchen to your bed. ' +
              'The evidence is overwhelming. You are sentenced to no dessert for a week.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'naughty_confess',
        text: 'Confess and offer to share',
        hint: 'Turn your enemy into an accomplice.',
        outcomes: [
          {
            weight: 60,
            description:
              'Your parent sits down, takes an Oreo, and says "we never speak of this." ' +
              'A secret alliance is formed. This is how crime families start.',
            effects: [
              { type: 'stat', target: 'happiness', value: 7, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'They appreciate the honesty but still ground you. Justice is blind ' +
              'but it can definitely smell chocolate.',
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
        hint: 'The oldest trick in the book.',
        outcomes: [
          {
            weight: 50,
            description:
              'You cry so convincingly that your parent feels guilty for catching you. ' +
              'They tuck you in and pretend it never happened. Masterclass in manipulation.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
              { type: 'stat', target: 'looks', value: 1, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your parent has seen this trick before. They wait patiently for you to stop. ' +
              'You run out of tears after seven minutes. Grounded.',
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
    description:
      'The teacher is explaining fractions and you feel a joke forming in your brain like a thunderstorm. ' +
      'It\'s really good. Like, REALLY good. ' +
      'But the teacher already has it out for you after the pencil incident.',
    conditions: [
      { type: 'minAge', value: 6 },
      { type: 'maxAge', value: 10 },
    ],
    choices: [
      {
        id: 'clown_tell_joke',
        text: 'Tell the joke',
        hint: 'The people need this.',
        outcomes: [
          {
            weight: 50,
            description:
              'The entire class erupts in laughter. Even the teacher cracks a smile before catching herself. ' +
              'You are the hero of Room 204.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -3, operation: 'add' },
              { type: 'stat', target: 'looks', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'Nobody laughs. Complete silence. A kid coughs. ' +
              'You have to sit with this failure for the remaining forty-five minutes of class.',
            effects: [
              { type: 'stat', target: 'happiness', value: -7, operation: 'add' },
              { type: 'stat', target: 'looks', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'The joke lands so hard that a kid shoots milk out of his nose. ' +
              'The teacher sends you to the principal. Worth it.',
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
        text: 'Hold it in and focus on fractions',
        hint: 'Be responsible. Learn math. Die inside.',
        outcomes: [
          {
            weight: 60,
            description:
              'You successfully learn that 3/4 is bigger than 2/3. The joke dies in your brain. ' +
              'A small part of your soul goes with it.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You hold the joke in but it leaks out as a snort during a quiet moment. ' +
              'Everyone looks at you. The joke\'s moment has passed. You explain nothing.',
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
    description:
      'Your class takes a field trip to the library. Most kids beeline for the graphic novels. ' +
      'But you notice a dusty section in the back that nobody else seems to see. ' +
      'The librarian watches you with knowing eyes.',
    conditions: [
      { type: 'minAge', value: 6 },
      { type: 'maxAge', value: 10 },
    ],
    choices: [
      {
        id: 'library_explore',
        text: 'Explore the mysterious section',
        hint: 'Knowledge awaits. Or spiders. Possibly both.',
        outcomes: [
          {
            weight: 50,
            description:
              'You find a book on dinosaurs so detailed it changes your entire worldview. ' +
              'You read it cover to cover and annoy everyone with dinosaur facts for months.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'looks', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You find an old book with hand-drawn illustrations. Some of them are...not for children. ' +
              'You develop a lifelong interest in art history. Sure. "Art history."',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'You find a $20 bill used as a bookmark in a book that hasn\'t been checked out since 1987. ' +
              'The librarian lets you keep it. Crime pays when it\'s accidental.',
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
        text: 'Read graphic novels with everyone else',
        hint: 'Pictures are worth a thousand words. Literally.',
        outcomes: [
          {
            weight: 70,
            description:
              'You discover manga and your life is never the same. ' +
              'You attempt to run like Naruto at recess. It does not increase your speed.',
            effects: [
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You bond with three other kids over comic books. ' +
              'You form a friend group that will last until someone discovers sports.',
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

  // ================================================================
  //  PRETEEN (9–12)
  // ================================================================

  {
    id: 'childhood_talent_show',
    title: 'The Talent Show',
    description:
      'The school talent show is next week and your friend dared you to sign up. ' +
      'The problem is that your only talent is being able to burp the alphabet. ' +
      'The sign-up sheet stares at you. Your hand trembles.',
    conditions: [
      { type: 'minAge', value: 9 },
      { type: 'maxAge', value: 12 },
    ],
    choices: [
      {
        id: 'talent_burp',
        text: 'Perform the burp alphabet',
        hint: 'Art is subjective.',
        outcomes: [
          {
            weight: 40,
            description:
              'You make it to Q before losing steam. The audience is split between disgust and admiration. ' +
              'You don\'t win but you trend on the school\'s TikTok for a week.',
            effects: [
              { type: 'stat', target: 'happiness', value: 7, operation: 'add' },
              { type: 'stat', target: 'looks', value: -4, operation: 'add' },
              { type: 'stat', target: 'health', value: -1, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You complete the entire alphabet and receive a standing ovation from the boys. ' +
              'The principal is not amused. Your parents pretend they don\'t know you.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You throw up on stage. On the bright side, you don\'t have to finish the alphabet.',
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
        text: 'Do a lip sync performance instead',
        hint: 'Safer. More dignified. Still terrifying.',
        outcomes: [
          {
            weight: 50,
            description:
              'You lip sync so passionately that people forget you aren\'t actually singing. ' +
              'You take a bow. Your parent is filming with tears in their eyes.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'looks', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The audio cuts out mid-performance. You are now just silently moving your mouth ' +
              'on stage in front of two hundred people. Time slows down.',
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
        text: 'Chicken out at the last minute',
        hint: 'Discretion is the better part of valor.',
        outcomes: [
          {
            weight: 60,
            description:
              'You watch from the audience as someone else wins with a mediocre magic trick. ' +
              'You KNOW the burp alphabet would have destroyed. Regret consumes you.',
            effects: [
              { type: 'stat', target: 'happiness', value: -4, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'A kid does a karate demonstration and kicks a judge\'s water bottle into the front row. ' +
              'You are grateful you didn\'t participate. The talent show is cancelled permanently.',
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
    description:
      'Someone said something about your mom. Or your shoes. Or the way you eat. ' +
      'It doesn\'t matter what they said. What matters is that a circle has formed, ' +
      'phones are out, and someone is chanting "FIGHT FIGHT FIGHT."',
    conditions: [
      { type: 'minAge', value: 9 },
      { type: 'maxAge', value: 12 },
    ],
    choices: [
      {
        id: 'fight_swing',
        text: 'Throw hands',
        hint: 'Your form is terrible but your spirit is willing.',
        outcomes: [
          {
            weight: 35,
            description:
              'You land one clean hit and the other kid decides this isn\'t worth it. ' +
              'You are carried off the playground on shoulders. The video gets 500 views.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'You both swing wildly and miss repeatedly. It looks like two windmills having a disagreement. ' +
              'A teacher breaks it up. Both suspended for three days.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'You get absolutely rocked. The video is not flattering. ' +
              'Your parent picks you up with a bag of frozen peas and a disappointed sigh.',
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
        text: 'Destroy them with words instead',
        hint: 'The pen is mightier. So is a devastating comeback.',
        outcomes: [
          {
            weight: 50,
            description:
              'You deliver a roast so devastating that the crowd goes "OOOOOH" and the kid walks away. ' +
              'No punches thrown. Maximum damage dealt. Flawless victory.',
            effects: [
              { type: 'stat', target: 'smarts', value: 6, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your comeback is weak. Someone says "that\'s the best you got?" ' +
              'You think of the perfect response at 3 AM. Too late.',
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
        hint: 'Takes more guts than fighting, honestly.',
        outcomes: [
          {
            weight: 40,
            description:
              'You walk away calmly. A few kids call you chicken. But the quiet kid in the back ' +
              'nods at you with respect. That nod means more than any fight.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'You walk away and immediately get hit in the back of the head with a juice box. ' +
              'Walking away was the right choice but it didn\'t feel like it.',
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
    description:
      'Your parents finally let you use the computer unsupervised. ' +
      'The entire internet stretches before you like an infinite void of possibility and danger. ' +
      'The parental controls are... not great.',
    conditions: [
      { type: 'minAge', value: 9 },
      { type: 'maxAge', value: 12 },
    ],
    choices: [
      {
        id: 'internet_youtube',
        text: 'Fall down a YouTube rabbit hole',
        hint: 'It starts with cat videos. It always starts with cat videos.',
        outcomes: [
          {
            weight: 50,
            description:
              'You start with cat videos and end up watching a documentary about deep sea creatures ' +
              'at 3 AM. You now know more about anglerfish than your science teacher.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You discover a conspiracy theory channel and become briefly convinced ' +
              'that birds aren\'t real. It takes your teacher two weeks to un-convince you.',
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
        hint: 'Nothing is free. You will learn this the hard way.',
        outcomes: [
          {
            weight: 40,
            description:
              'The game is actually great and you become obsessed. Your grades drop, ' +
              'but your reaction time is now inhuman. Tradeoffs.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -5, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'You install seventeen toolbars and a virus that makes the computer play ' +
              'circus music every time you open Internet Explorer. Your parent is... not happy.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'internet_learn',
        text: 'Try to learn something useful',
        hint: 'The internet was made for education. Right? RIGHT?',
        outcomes: [
          {
            weight: 50,
            description:
              'You learn to code from a free tutorial. Your first program prints "butts" a thousand times. ' +
              'But hey, you\'re programming. Bill Gates started somewhere too.',
            effects: [
              { type: 'stat', target: 'smarts', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You try to learn Spanish from the internet and accidentally learn very specific ' +
              'phrases that will get you in trouble on your next family vacation.',
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
    description:
      'Your parent has arrived at your school. They are wearing THAT outfit. ' +
      'They are waving at you. They are shouting your childhood nickname. ' +
      'In front of everyone. Your soul begins to leave your body.',
    conditions: [
      { type: 'minAge', value: 9 },
      { type: 'maxAge', value: 12 },
    ],
    choices: [
      {
        id: 'parent_pretend',
        text: 'Pretend you don\'t know them',
        hint: 'Who is that person? Never seen them before.',
        outcomes: [
          {
            weight: 50,
            description:
              'You look the other way so hard you walk into a door frame. ' +
              'Your parent follows you. They have no concept of personal space or dignity.',
            effects: [
              { type: 'stat', target: 'happiness', value: -6, operation: 'add' },
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You successfully avoid them until they yell your full name — first, middle, and last — ' +
              'across the cafeteria. Your classmates now know your middle name is Bartholomew.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'stat', target: 'looks', value: -2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'parent_own_it',
        text: 'Own it and introduce them',
        hint: 'Lean into the cringe. Become immune to shame.',
        outcomes: [
          {
            weight: 60,
            description:
              'Your parent tells your friends embarrassing baby stories. Everyone is laughing. ' +
              'WITH you, not at you. Mostly. You develop an immunity to embarrassment.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'looks', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Your parent shows your friends a photo of you in the bathtub as a baby. ' +
              'From their phone. That they have as their wallpaper. You develop a thousand-yard stare.',
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
    description:
      'For the first time ever, your parents have left you home alone. ' +
      'They said they\'d be back in two hours. They left a list of rules on the fridge. ' +
      'The house is silent. You have never felt more powerful or more terrified.',
    conditions: [
      { type: 'minAge', value: 10 },
      { type: 'maxAge', value: 12 },
    ],
    choices: [
      {
        id: 'home_junk_food',
        text: 'Eat everything forbidden in the pantry',
        hint: 'No rules. No witnesses. Just vibes and sugar.',
        outcomes: [
          {
            weight: 60,
            description:
              'You eat an entire bag of chips, half a cake, and drink soda straight from the bottle. ' +
              'You feel like a god for forty minutes. Then the stomach cramps begin.',
            effects: [
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You try to make a "gourmet meal" by combining every condiment in the fridge. ' +
              'The resulting creation looks like a war crime. You eat it anyway. It\'s not bad, actually.',
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
        text: 'Follow the rules and be responsible',
        hint: 'Make them proud. Earn more alone time.',
        outcomes: [
          {
            weight: 50,
            description:
              'You do your homework, clean your room, and set the table before they get back. ' +
              'Your parents look at each other suspiciously. What are you hiding?',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You sit on the couch and don\'t move for two hours because every noise sounds like a burglar. ' +
              'Your parents return to find you clutching a frying pan in the dark.',
            effects: [
              { type: 'stat', target: 'happiness', value: -4, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'home_kevin',
        text: 'Set up elaborate booby traps',
        hint: 'Just in case. You\'ve seen the documentary (Home Alone).',
        outcomes: [
          {
            weight: 40,
            description:
              'You create an impressive security system out of string, cans, and marbles. ' +
              'Your dad trips on it when he comes home and sprains his ankle.',
            effects: [
              { type: 'stat', target: 'smarts', value: 6, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'The cat triggers every single trap. By the time your parents return, ' +
              'the house looks like a disaster zone and the cat is judging you from the top of the fridge.',
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
    title: 'Science Fair Showdown',
    description:
      'The science fair is tomorrow and you have done absolutely nothing. ' +
      'Your classmate apparently built a working cold fusion reactor. ' +
      'You have baking soda and vinegar. And panic. Lots of panic.',
    conditions: [
      { type: 'minAge', value: 9 },
      { type: 'maxAge', value: 12 },
    ],
    choices: [
      {
        id: 'science_volcano',
        text: 'Build the classic baking soda volcano',
        hint: 'It\'s been done a million times but it still goes hard.',
        outcomes: [
          {
            weight: 40,
            description:
              'You add way too much vinegar. The eruption goes everywhere. The judge\'s shirt is ruined. ' +
              'But they give you points for "enthusiasm" and you place third.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'The volcano barely fizzes. A kid with a potato battery gets more attention. ' +
              'A POTATO. You question the meaning of effort.',
            effects: [
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'Your parent "helped" so much that the project is basically professional-grade. ' +
              'The judges know. You know. Everyone knows. You win anyway.',
            effects: [
              { type: 'stat', target: 'smarts', value: -2, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'science_experiment',
        text: 'Attempt a genuinely original experiment',
        hint: 'Go big or go home.',
        outcomes: [
          {
            weight: 30,
            description:
              'Your experiment on "which surface grows mold fastest" features month-old leftovers ' +
              'from your fridge. The smell clears the gymnasium. But scientifically? Groundbreaking.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'stat', target: 'looks', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description:
              'Your hypothesis was wrong. Your data is garbage. Your poster board is crooked. ' +
              'But the judge says "well, that\'s how real science works" and you learn more from failure ' +
              'than you would have from winning.',
            effects: [
              { type: 'stat', target: 'smarts', value: 6, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'science_fake',
        text: 'Make up the results entirely',
        hint: 'Scientific fraud at age 10. A prodigy.',
        outcomes: [
          {
            weight: 40,
            description:
              'You fabricate data so convincingly that you win first place. ' +
              'A career in corporate consulting awaits.',
            effects: [
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'The judge asks you to replicate your results. You panic. You knock over the display. ' +
              'You claim it was an earthquake. There was no earthquake.',
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
    title: 'Sleepover Saga',
    description:
      'You are at your first sleepover. There are seven kids, three sleeping bags, unlimited candy, ' +
      'and zero adult supervision because your friend\'s parents went to bed at 9 PM. ' +
      'The night is young and full of terrible decisions.',
    conditions: [
      { type: 'minAge', value: 9 },
      { type: 'maxAge', value: 12 },
    ],
    choices: [
      {
        id: 'sleepover_truth_dare',
        text: 'Play truth or dare',
        hint: 'What could possibly go wrong?',
        outcomes: [
          {
            weight: 40,
            description:
              'You pick dare. They dare you to eat a spoonful of hot sauce. Your mouth burns ' +
              'for forty minutes but you earn undying respect and a cool nickname.',
            effects: [
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'stat', target: 'looks', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You pick truth. They ask who you like. You name someone. ' +
              'By Monday morning, the entire school knows. Sleepovers are intelligence operations.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The dares escalate until someone rings the neighbor\'s doorbell at midnight and runs. ' +
              'The neighbor calls your friend\'s parents. The sleepover is officially over.',
            effects: [
              { type: 'stat', target: 'happiness', value: 4, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'sleepover_horror',
        text: 'Watch a horror movie you\'re not allowed to see',
        hint: 'You\'ll be fine. Probably.',
        outcomes: [
          {
            weight: 50,
            description:
              'You watch the whole thing without flinching. You are lying. You are terrified. ' +
              'You don\'t sleep for three days. But nobody needs to know that.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'stat', target: 'health', value: -2, operation: 'add' },
              { type: 'stat', target: 'looks', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You scream so loud during the scary part that your friend\'s dad comes downstairs ' +
              'with a baseball bat thinking someone broke in. The movie is turned off. Everyone blames you.',
            effects: [
              { type: 'stat', target: 'happiness', value: -6, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'sleepover_prank',
        text: 'Prank whoever falls asleep first',
        hint: 'Ancient sleepover tradition.',
        outcomes: [
          {
            weight: 50,
            description:
              'You draw a mustache on Kyle\'s face with permanent marker. ' +
              'He doesn\'t notice until school on Monday. ' +
              'Your friendship survives, barely.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -1, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Plot twist: YOU fall asleep first. You wake up with whipped cream in your hand ' +
              'and someone has braided your hair. The photos are already online.',
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
    description:
      'Your family is moving and you have to start at a brand new school where you know literally ' +
      'nobody. You stand at the entrance like a video game character entering a new level. ' +
      'Except you have no power-ups and everyone is staring at you.',
    conditions: [
      { type: 'minAge', value: 9 },
      { type: 'maxAge', value: 12 },
    ],
    choices: [
      {
        id: 'new_school_cool',
        text: 'Reinvent yourself as the cool kid',
        hint: 'Nobody knows the old you. Time for New You.',
        outcomes: [
          {
            weight: 40,
            description:
              'You tell everyone you used to be popular at your old school. It works! ' +
              'For three weeks, until your mom sends in baby photos for a school project.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'looks', value: 4, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'You try to lean casually against a locker and it opens, swallowing you whole. ' +
              'A janitor has to rescue you. Day one and you\'re already a legend, just not the right kind.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'new_school_quiet',
        text: 'Keep your head down and observe',
        hint: 'Learn the social landscape. Identify the factions.',
        outcomes: [
          {
            weight: 60,
            description:
              'You spend a week mapping the social hierarchy like a tiny anthropologist. ' +
              'You pick your allies wisely and find a solid friend group by month two.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You are so quiet that a teacher forgets you exist and marks you absent for a week. ' +
              'Your parents get a call. You were there the whole time.',
            effects: [
              { type: 'stat', target: 'happiness', value: -4, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'new_school_weird',
        text: 'Embrace your weirdness immediately',
        hint: 'Be so strange they can\'t ignore you.',
        outcomes: [
          {
            weight: 50,
            description:
              'You open with your most obscure hobby on day one. You find the exact three kids who share it. ' +
              'Your friend group is small but ride-or-die. Quality over quantity.',
            effects: [
              { type: 'stat', target: 'happiness', value: 7, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'looks', value: -2, operation: 'add' },
              { type: 'add_relationship', target: 'friend', value: 'friend' },
            ],
          },
          {
            weight: 50,
            description:
              'You are immediately labeled "the weird kid." It sticks for the rest of the year. ' +
              'But honestly? The weird kids\' table at lunch has the best conversations.',
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
    id: 'childhood_lemonade_stand',
    title: 'The Lemonade Empire',
    description:
      'You set up a lemonade stand on the sidewalk. The lemonade is 90% water and 10% optimism. ' +
      'You wrote "$1" on a piece of cardboard. A car slows down. ' +
      'This is your first taste of capitalism.',
    conditions: [
      { type: 'minAge', value: 7 },
      { type: 'maxAge', value: 11 },
    ],
    choices: [
      {
        id: 'lemonade_honest',
        text: 'Sell honest, mediocre lemonade',
        hint: 'A fair product at a fair price.',
        outcomes: [
          {
            weight: 50,
            description:
              'You sell twelve cups. You make $12. You spend $15 on supplies. ' +
              'You have just learned about profit margins the hard way. Welcome to business.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'money', target: 'money', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'A neighbor gives you $20 for one cup and says "keep the change." ' +
              'You learn that pity is a viable business model.',
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
        text: 'Price gouge and upsell',
        hint: '$5 a cup. "Premium artisanal lemonade."',
        outcomes: [
          {
            weight: 40,
            description:
              'You rebrand it as "artisanal hand-squeezed organic lemonade" and charge $5. ' +
              'Three adults actually pay it. You understand gentrification now.',
            effects: [
              { type: 'stat', target: 'smarts', value: 6, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'money', target: 'money', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'A kid from down the street sets up a competing stand with better lemonade at lower prices. ' +
              'Your monopoly crumbles. You learn about market competition.',
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
    id: 'childhood_imaginary_friend',
    title: 'Imaginary Friend',
    description:
      'You have made a new friend. Their name is Gerald. Gerald is invisible. ' +
      'Gerald has strong opinions about everything and requires his own seat at the dinner table. ' +
      'Your parents are... concerned.',
    conditions: [
      { type: 'minAge', value: 3 },
      { type: 'maxAge', value: 7 },
    ],
    choices: [
      {
        id: 'imaginary_keep',
        text: 'Keep hanging out with Gerald',
        hint: 'Gerald gets you. Unlike everyone else.',
        outcomes: [
          {
            weight: 50,
            description:
              'Gerald and you have incredible adventures in the backyard. He helps you process emotions ' +
              'better than any therapist could. Gerald is a real one.',
            effects: [
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Gerald starts telling you to do things. Like hide your sister\'s shoes. ' +
              'Your parents schedule a pediatrician visit. Gerald was fun while he lasted.',
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
        hint: 'You\'ve outgrown him. It\'s time.',
        outcomes: [
          {
            weight: 60,
            description:
              'You tell Gerald it\'s over during recess. He takes it well — he vanishes and never comes back. ' +
              'Sometimes, on quiet nights, you swear you hear him whisper your name.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Gerald gets replaced by a new imaginary friend named Doctor Chaos. ' +
              'Your parents thought Gerald was bad. They were not ready for Doctor Chaos.',
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

  {
    id: 'childhood_report_card',
    title: 'Report Card Day',
    description:
      'Report cards are out. The envelope is sealed. Your parent is holding it ' +
      'with the gravity of someone defusing a bomb. ' +
      'You know exactly what\'s in there. The question is: do THEY know?',
    conditions: [
      { type: 'minAge', value: 7 },
      { type: 'maxAge', value: 12 },
    ],
    choices: [
      {
        id: 'report_hide',
        text: 'Try to intercept it before they see',
        hint: 'If they never see it, did it really happen?',
        outcomes: [
          {
            weight: 30,
            description:
              'You successfully swap the envelope with a fake one you made at school. ' +
              'They praise your "excellent" grades. The guilt will eat you alive, but not today.',
            effects: [
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description:
              'They find it in your backpack before you can hide it. The D in math stares up from the paper. ' +
              'The silence is deafening. You are now enrolled in tutoring.',
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
        hint: 'Rip the band-aid off.',
        outcomes: [
          {
            weight: 50,
            description:
              'It\'s... actually not bad? Your parent seems pleasantly surprised and takes you ' +
              'out for ice cream. Apparently expectations were low. Thanks?',
            effects: [
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The teacher\'s comments section reads: "A pleasure to have in class but needs to stop ' +
              'making sound effects during reading time." Fair enough.',
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
    description:
      'You were climbing something you absolutely should not have been climbing. ' +
      'Physics has entered the chat. Gravity has won. Your arm is at an angle that arms ' +
      'should not be at. On the bright side, everyone is going to sign your cast.',
    conditions: [
      { type: 'minAge', value: 6 },
      { type: 'maxAge', value: 12 },
    ],
    choices: [
      {
        id: 'bone_tough',
        text: 'Be tough about it',
        hint: '\'Tis but a scratch.',
        outcomes: [
          {
            weight: 50,
            description:
              'You walk to the nurse\'s office holding your own broken arm like a handbag. ' +
              'The nurse calls you the bravest kid she\'s ever seen. You pass out immediately after.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'stat', target: 'looks', value: 3, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You try to say "I\'m fine" but what comes out is a noise that frightens nearby birds. ' +
              'Turns out there\'s a limit to being tough. This was it.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'bone_milk_it',
        text: 'Milk it for all it\'s worth',
        hint: 'This cast is a golden ticket.',
        outcomes: [
          {
            weight: 60,
            description:
              'You get out of chores for six weeks. Every kid wants to sign your cast. ' +
              'Your mom makes your favorite dinner every night. Broken bones are peak childhood.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'looks', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You overdo the sympathy act. Your parent catches you using the "broken" arm to play ' +
              'video games. The special treatment ends abruptly.',
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
    description:
      'You wake up and the world is white. School is cancelled. ' +
      'This is the closest thing to a religious experience you have ever had. ' +
      'Your parent is less thrilled because they still have to work from home with you here.',
    conditions: [
      { type: 'minAge', value: 5 },
      { type: 'maxAge', value: 12 },
      { type: 'season', value: 'winter' },
    ],
    choices: [
      {
        id: 'snow_outside',
        text: 'Spend the entire day outside',
        hint: 'Build. Throw. Sled. Repeat.',
        outcomes: [
          {
            weight: 60,
            description:
              'You build a snowman so magnificent that a neighbor takes a photo of it. ' +
              'You come inside eight hours later, frozen solid but radiating pure joy.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You start a snowball fight with the neighbor kid. It escalates to snowball WAR. ' +
              'Someone builds a snow fort. Another kid brings out their older sibling. You lose spectacularly.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'snow_inside',
        text: 'Stay inside with hot chocolate and video games',
        hint: 'Maximum coziness achieved.',
        outcomes: [
          {
            weight: 70,
            description:
              'The perfect day. Hot chocolate, pajamas until 4 PM, and you beat that level ' +
              'you\'ve been stuck on for weeks. This is what heaven looks like.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'health', value: 1, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -1, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The power goes out. No games. No TV. No internet. You stare at the wall. ' +
              'You read a book out of desperation. It\'s actually amazing. Disgusting.',
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
    description:
      'There\'s a kid at school who eats sand, talks to birds, and insists their real name is "Shadow Wolf." ' +
      'They sit alone at lunch every day. They just made eye contact with you. ' +
      'They are walking over. Oh no. Oh no.',
    conditions: [
      { type: 'minAge', value: 6 },
      { type: 'maxAge', value: 10 },
    ],
    choices: [
      {
        id: 'weird_befriend',
        text: 'Be their friend',
        hint: 'Everyone deserves a friend. Even sand-eaters.',
        outcomes: [
          {
            weight: 60,
            description:
              'Shadow Wolf is actually incredibly cool once you get past the sand thing. ' +
              'They know every constellation and can make a whistle out of a blade of grass. ' +
              'This is the most interesting person you have ever met.',
            effects: [
              { type: 'stat', target: 'happiness', value: 7, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'looks', value: -3, operation: 'add' },
              { type: 'add_relationship', target: 'friend', value: 'friend' },
            ],
          },
          {
            weight: 40,
            description:
              'They immediately tell everyone you are their best friend. They follow you everywhere. ' +
              'They made you a friendship bracelet out of what appears to be human hair. Whose hair is this?',
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
        hint: 'You can\'t save everyone.',
        outcomes: [
          {
            weight: 50,
            description:
              'You dodge them successfully. Ten years later, they become a famous YouTuber. ' +
              'You could have been in those videos. You think about this a lot.',
            effects: [
              { type: 'stat', target: 'happiness', value: -2, operation: 'add' },
              { type: 'stat', target: 'looks', value: 1, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'They take it well and find another friend. You feel a small, irrational pang of jealousy ' +
              'watching them laugh together at the swings. What is wrong with you?',
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
    id: 'childhood_summer_camp',
    title: 'Camp Chaos',
    description:
      'Your parents have shipped you off to summer camp for two weeks. ' +
      'The counselor is nineteen and visibly terrified. The lake looks questionable. ' +
      'A kid in your cabin has already claimed the top bunk by growling at anyone who approaches.',
    conditions: [
      { type: 'minAge', value: 8 },
      { type: 'maxAge', value: 12 },
      { type: 'season', value: 'summer' },
    ],
    choices: [
      {
        id: 'camp_nature',
        text: 'Embrace the outdoor experience',
        hint: 'Become one with nature. Or at least tolerate it.',
        outcomes: [
          {
            weight: 50,
            description:
              'You learn to make a fire, identify three types of trees, and catch a fish. ' +
              'You return home a wilderness expert who refuses to sleep indoors for a week.',
            effects: [
              { type: 'stat', target: 'health', value: 6, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You fall in the lake, get poison ivy, and a raccoon steals your shoes. ' +
              'Nature is not for everyone. You are a city person now.',
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
        text: 'Focus on making camp friends',
        hint: 'Two weeks to build lifelong bonds. Or enemies.',
        outcomes: [
          {
            weight: 60,
            description:
              'You meet someone from three states away and become inseparable. ' +
              'You exchange numbers and promise to stay in touch forever. (You will text twice.)',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'looks', value: 2, operation: 'add' },
              { type: 'add_relationship', target: 'friend', value: 'friend' },
            ],
          },
          {
            weight: 40,
            description:
              'You start a cabin rivalry that escalates to a full camp war. ' +
              'Capture the flag has never been this personal. Three friendships end. Two new ones form.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'camp_fake_sick',
        text: 'Fake sick to stay in the cabin',
        hint: 'The infirmary has air conditioning.',
        outcomes: [
          {
            weight: 50,
            description:
              'You spend two days in the air-conditioned infirmary eating crackers and reading comics. ' +
              'The nurse knows you are faking. She doesn\'t care. She also hates the outdoors.',
            effects: [
              { type: 'stat', target: 'happiness', value: 4, operation: 'add' },
              { type: 'stat', target: 'health', value: 1, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You fake sick, then actually get sick from the camp food. ' +
              'The universe has a sense of humor and it is aimed directly at you.',
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

  {
    id: 'childhood_allowance',
    title: 'First Paycheck',
    description:
      'Your parents have started giving you a weekly allowance in exchange for chores. ' +
      'The amount is insulting — $5 for an entire week of manual labor. ' +
      'But it\'s YOUR $5, and the power is intoxicating.',
    conditions: [
      { type: 'minAge', value: 7 },
      { type: 'maxAge', value: 11 },
    ],
    choices: [
      {
        id: 'allowance_save',
        text: 'Save every penny',
        hint: 'Delayed gratification. The boring choice.',
        outcomes: [
          {
            weight: 60,
            description:
              'After three months you have $60 and the self-control of a Buddhist monk. ' +
              'You buy something big. The waiting made it taste so much sweeter.',
            effects: [
              { type: 'stat', target: 'smarts', value: 6, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'money', target: 'money', value: 60, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You save for weeks, then blow it all on a toy that breaks in two days. ' +
              'The lesson about consumer products is learned early and painfully.',
            effects: [
              { type: 'stat', target: 'smarts', value: 4, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -4, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'allowance_spend',
        text: 'Spend it immediately on candy',
        hint: 'Life is short. You could get hit by a bus.',
        outcomes: [
          {
            weight: 60,
            description:
              'You walk to the corner store and buy so much candy that the cashier asks if it\'s a party. ' +
              'It\'s not a party. This is between you and the sour gummy worms.',
            effects: [
              { type: 'stat', target: 'happiness', value: 7, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: -2, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You eat it all in one sitting and learn what a "sugar crash" is. ' +
              'You lie on the floor questioning the nature of happiness.',
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
        hint: 'Know your worth.',
        outcomes: [
          {
            weight: 40,
            description:
              'You present a PowerPoint (three slides, clip art) arguing for $10/week. ' +
              'Your parents are so impressed they agree. Future CEO energy.',
            effects: [
              { type: 'stat', target: 'smarts', value: 7, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 6, operation: 'add' },
              { type: 'money', target: 'money', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'Your parent counter-offers with more chores for the same pay. ' +
              'You have negotiated yourself into doing the dishes. This is how unions form.',
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
    id: 'childhood_test_cheating',
    title: 'The Big Test',
    description:
      'There\'s a huge test today and you did not study. At all. Not even a little. ' +
      'You spent last night watching videos of people falling off things instead. ' +
      'The smart kid next to you has very readable handwriting. Very readable indeed.',
    conditions: [
      { type: 'minAge', value: 9 },
      { type: 'maxAge', value: 12 },
    ],
    choices: [
      {
        id: 'test_cheat',
        text: 'Peek at the smart kid\'s paper',
        hint: 'They won\'t notice. Probably.',
        outcomes: [
          {
            weight: 30,
            description:
              'You copy three answers before you realize the smart kid has different questions. ' +
              'Your test has a mix of right answers to wrong questions. The teacher is confused.',
            effects: [
              { type: 'stat', target: 'smarts', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -4, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'The teacher catches you. Makes you take the test alone in the hallway. ' +
              'You get a 12%. Your parent is called. Worth it? Absolutely not.',
            effects: [
              { type: 'stat', target: 'smarts', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You get away with it and pass with a B+. The guilt haunts you. ' +
              'You become obsessed with ethics. Philosophy major origin story.',
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
        text: 'Wing it with pure vibes',
        hint: 'Maybe the knowledge is inside you. Deep, deep inside.',
        outcomes: [
          {
            weight: 30,
            description:
              'You somehow pull a C-. The power of lucky guessing and vague memories of ' +
              'the teacher talking while you doodled carries you through.',
            effects: [
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description:
              'You get an F so bad that the teacher writes "see me" in red ink the size of a billboard. ' +
              'You learn that vibes are not a study strategy.',
            effects: [
              { type: 'stat', target: 'smarts', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'test_confess',
        text: 'Tell the teacher you didn\'t study and ask for mercy',
        hint: 'Honesty is the best policy. Sometimes.',
        outcomes: [
          {
            weight: 50,
            description:
              'The teacher respects your honesty and lets you retake it tomorrow. ' +
              'You actually study this time. You get a B. Character development.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'reputation', target: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The teacher says "that sounds like a you problem" and hands you the test. ' +
              'You stare at question one for fifteen minutes. It might as well be in Sanskrit.',
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
    id: 'childhood_scary_basement',
    title: 'The Basement',
    description:
      'Your ball rolled down the basement stairs. The light switch doesn\'t work. ' +
      'From above, you can hear a strange dripping noise echoing from below. ' +
      'Your parent is on a phone call. You are on your own.',
    conditions: [
      { type: 'minAge', value: 5 },
      { type: 'maxAge', value: 10 },
    ],
    choices: [
      {
        id: 'basement_brave',
        text: 'Descend into the darkness',
        hint: 'You are not afraid. You are DEFINITELY not afraid.',
        outcomes: [
          {
            weight: 50,
            description:
              'You grab a flashlight and march down. It\'s just a leaky pipe and your ball is right there. ' +
              'You grab it and run back upstairs like something is chasing you anyway.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You make it three steps before something brushes your face. It\'s a cobweb. ' +
              'You scream at a frequency only dogs can hear and teleport back upstairs.',
            effects: [
              { type: 'stat', target: 'happiness', value: -4, operation: 'add' },
              { type: 'stat', target: 'health', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'You find the ball AND a box of old toys your parents forgot about. ' +
              'Vintage action figures. Christmas came early.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'basement_abandon',
        text: 'Sacrifice the ball to the basement gods',
        hint: 'It\'s just a ball. There will be other balls. You have your whole life ahead of you.',
        outcomes: [
          {
            weight: 60,
            description:
              'You walk away, but every night you think about that ball, alone in the dark, cold basement. ' +
              'You develop a very specific brand of guilt.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 1, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Your parent retrieves it later and asks why you didn\'t just go get it. ' +
              'You claim the basement is haunted. They do not argue.',
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

];
