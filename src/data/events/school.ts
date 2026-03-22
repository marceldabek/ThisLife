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

  // 1. Caught cheating on a test
  {
    id: 'hs_caught_cheating',
    title: 'Academic Espionage',
    description:
      'Your teacher catches you with a cheat sheet so elaborate it has its own table of contents and bibliography. She holds it up and says, "This is the most effort you\'ve put into anything all year."',
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
        hint: 'Honesty might help... or not',
        outcomes: [
          {
            weight: 6,
            description:
              'Your teacher respects the honesty and gives you a zero instead of reporting you. She keeps the cheat sheet "for the faculty holiday party."',
            effects: [
              { type: 'stat', target: 'smarts', value: -5 },
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'reputation', value: -5 },
            ],
          },
          {
            weight: 4,
            description:
              'Your teacher is unmoved by your groveling and reports you to the principal. Your parents get a phone call that ruins dinner for the next three weeks.',
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
        text: 'Deny everything — "That\'s not mine"',
        hint: 'It has your name on it',
        outcomes: [
          {
            weight: 3,
            description:
              'Against all logic, the teacher buys it. Your classmate Tyler takes the fall. You feel nothing. This is who you are now.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'reputation', value: -10 },
              { type: 'add_trait', value: 'deceitful' },
            ],
          },
          {
            weight: 7,
            description:
              'The cheat sheet literally has your name, student ID, and a doodle of your face on it. You get suspended for three days, which your parents treat as a prison sentence.',
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
        text: 'Argue the cheat sheet is a work of art',
        hint: 'Bold strategy',
        outcomes: [
          {
            weight: 2,
            description:
              'The art teacher overhears and agrees it belongs in the spring showcase. You still fail the test, but you win Best Mixed Media at the art show.',
            effects: [
              { type: 'stat', target: 'smarts', value: -3 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 8,
            description:
              'Your teacher stares at you for so long you can hear the fluorescent lights buzzing. Double detention.',
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

  // 2. Prom invite
  {
    id: 'hs_prom_invite',
    title: 'Prom Night Approaches',
    description:
      'Prom is coming up and the pressure is suffocating. Someone asks you to go with them using a poster board sign in the cafeteria. The entire school is watching. You can feel 200 phones recording.',
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
        hint: 'The crowd demands it',
        outcomes: [
          {
            weight: 5,
            description:
              'You have a magical night. The DJ plays nothing but songs from 2009 and the punch tastes like regret, but you dance like nobody is watching (they are, and it goes viral).',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'money', value: -200 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 5,
            description:
              'Your date spends the entire night on their phone. You slow dance alone to a Kidz Bop cover. The limo driver feels bad and gives you life advice on the ride home.',
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
        hint: 'You will be remembered for this',
        outcomes: [
          {
            weight: 5,
            description:
              'The cafeteria goes silent. Someone drops a tray. The rejected party handles it with grace, but their friends do not. Your locker gets decorated with sad face stickers for a month.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'reputation', value: -20 },
            ],
          },
          {
            weight: 5,
            description:
              'You say no, but you do it so kindly that people actually respect you for it. The person later thanks you for being honest. Emotional maturity: unlocked.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'reputation', value: 5 },
            ],
          },
        ],
      },
      {
        id: 'go_alone',
        text: 'Skip the drama, go solo',
        hint: 'Main character energy',
        outcomes: [
          {
            weight: 7,
            description:
              'You show up alone, own the dance floor, and become a legend. Three people ask for your number. The yearbook captures you mid-splits.',
            effects: [
              { type: 'stat', target: 'happiness', value: 25 },
              { type: 'stat', target: 'looks', value: 5 },
              { type: 'money', value: -150 },
              { type: 'reputation', value: 15 },
            ],
          },
          {
            weight: 3,
            description:
              'Going alone sounded empowering in theory. In practice, you spend two hours at the snack table having an existential crisis next to the chocolate fountain.',
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
        hint: 'Save money, miss memories',
        outcomes: [
          {
            weight: 5,
            description:
              'You stay home and binge-watch a 14-season medical drama. You feel nothing. Until Monday, when everyone\'s stories make you feel everything.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
          {
            weight: 5,
            description:
              'You skip prom and have genuinely one of the best nights of your life eating pizza and playing video games. Prom was reportedly terrible anyway. The DJ had a meltdown.',
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

  // 3. School suspension incident
  {
    id: 'hs_suspension',
    title: 'The Incident',
    description:
      'You\'re called to the principal\'s office. Apparently, someone saw you doing something "unacceptable" in the hallway. The principal adjusts his glasses and says, "We need to talk about the ferret."',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'accept_punishment',
        text: 'Accept the suspension quietly',
        hint: 'Three days of freedom... sort of',
        outcomes: [
          {
            weight: 7,
            description:
              'You serve your three-day suspension like a political prisoner. Your parents make you do chores the entire time. You somehow end up more tired than if you\'d gone to school.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'smarts', value: -3 },
              { type: 'reputation', value: -10 },
            ],
          },
          {
            weight: 3,
            description:
              'Three days off. You sleep until noon, eat cereal for every meal, and discover a passion for documentary filmmaking. Not all bad.',
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
        hint: 'Technically true?',
        outcomes: [
          {
            weight: 4,
            description:
              'Your impassioned defense works. The ferret is traced back to the biology teacher\'s "experimental curriculum." You are free. The ferret is not.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 6,
            description:
              'The principal pulls up security footage of you literally carrying the ferret in your backpack. Suspension extended to five days.',
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
        text: 'Break down crying and call your parents',
        hint: 'The nuclear option',
        outcomes: [
          {
            weight: 5,
            description:
              'Your mom arrives and argues with the principal for forty-five minutes. You get off with a warning. Your mom lectures you for the next six months, which is arguably worse.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 5,
            description:
              'Your dad shows up, takes one look at the ferret situation, and says "I\'m not even surprised anymore." You\'re grounded for a month.',
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

  // 4. Part-time job offered
  {
    id: 'hs_parttime_job',
    title: 'Help Wanted (Desperately)',
    description:
      'A local business is hiring teens, presumably because they ran out of adults willing to work for minimum wage. You have options, each more soul-crushing than the last.',
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
        hint: 'Free fries (sometimes)',
        outcomes: [
          {
            weight: 6,
            description:
              'You spend your weekends asking people if they want to supersize. The grease never fully washes out of your pores, but you learn the value of a dollar. It\'s not much.',
            effects: [
              { type: 'money', value: 400 },
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'health', value: -5 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 4,
            description:
              'You accidentally become the best employee they\'ve ever had. Your manager, a 19-year-old with a neck tattoo of a pizza slice, promotes you to shift lead.',
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
        hint: 'Customer is always wrong',
        outcomes: [
          {
            weight: 5,
            description:
              'You fold the same shirt 847 times in one shift. A customer screams at you because a coupon from 2019 won\'t scan. You develop a permanent customer service smile that never reaches your eyes.',
            effects: [
              { type: 'money', value: 450 },
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'looks', value: 3 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 5,
            description:
              'The employee discount is fire. You become the best-dressed person in school on a budget. Your coworkers are actually cool and you form a trauma bond over holiday shifts.',
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
        hint: 'Those who can\'t do, teach',
        conditions: [
          { type: 'minStat', value: 60, stat: 'smarts' },
        ],
        outcomes: [
          {
            weight: 6,
            description:
              'You tutor kids who are somehow even less motivated than you are. But explaining things to others actually makes you understand them better. You accidentally become smart.',
            effects: [
              { type: 'money', value: 500 },
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 4,
            description:
              'Your student\'s parent accuses you of "not trying hard enough" when their kid fails. The kid was playing games on their phone the entire time. You vow to never teach again.',
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

  // 5. Peer pressure — drugs
  {
    id: 'hs_peer_pressure_drugs',
    title: 'The Cool Kids\' Table',
    description:
      'Behind the bleachers, the kids who peaked in middle school offer you something that is "totally chill" and "everyone\'s doing it." The DARE officer\'s voice echoes faintly in your skull.',
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
        hint: 'DARE failed you',
        outcomes: [
          {
            weight: 4,
            description:
              'You take a hit and immediately cough for seven minutes straight. Everyone laughs. You are now "cool" by the loosest possible definition. Your lungs file a formal complaint.',
            effects: [
              { type: 'stat', target: 'health', value: -10 },
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'reputation', value: 5 },
              { type: 'add_trait', value: 'risk-taker' },
            ],
          },
          {
            weight: 3,
            description:
              'You try it and absolutely nothing happens. You\'re not sure if the stuff was fake or if you\'re immune. Either way, you spent $20 to stand behind bleachers and feel nothing.',
            effects: [
              { type: 'money', value: -20 },
              { type: 'stat', target: 'happiness', value: -5 },
            ],
          },
          {
            weight: 3,
            description:
              'A teacher catches everyone mid-session. You get marched to the office while your "friends" scatter like roaches when the lights come on. None of them vouch for you.',
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
        hint: 'The hardest easy thing to say',
        outcomes: [
          {
            weight: 6,
            description:
              'They call you boring for about thirty seconds, then forget you exist. You walk away with your lungs and dignity intact. Your future self sends a thank-you card.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'health', value: 3 },
              { type: 'reputation', value: -5 },
            ],
          },
          {
            weight: 4,
            description:
              'To your surprise, two other people also say no and you end up hanging out together instead. You accidentally form a wholesome friend group over shared sobriety.',
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
        text: 'Report them to the school',
        hint: 'Snitches get... complicated social lives',
        outcomes: [
          {
            weight: 5,
            description:
              'The school thanks you. The cool kids do not. You spend the rest of the year being called a narc, but you get a "Good Citizenship" award that literally nobody respects.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'reputation', value: -20 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
          {
            weight: 5,
            description:
              'Your anonymous tip leads to a full investigation. Turns out the "cool kids" were selling oregano. Everyone involved is embarrassed. You keep your secret.',
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

  // 6. Failing a class
  {
    id: 'hs_failing_class',
    title: 'The Red Letter Grade',
    description:
      'Your report card arrives and there\'s a grade on it that your parents will need therapy to process. You\'re failing a class so badly that even the curve can\'t save you. The teacher wrote "see me" in red ink three times.',
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
        hint: 'Novel concept',
        outcomes: [
          {
            weight: 6,
            description:
              'You lock yourself in your room with a textbook and energy drinks. After a week of actual effort, you pull your grade up to a C-minus. Your teacher is so shocked she checks for a body double.',
            effects: [
              { type: 'stat', target: 'smarts', value: 10 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'health', value: -5 },
            ],
          },
          {
            weight: 4,
            description:
              'You study for 48 hours straight, learn nothing, and fall asleep during the makeup exam. You dream about quadratic equations. You still fail, but in a more educated way.',
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
        text: 'Accept your fate gracefully',
        hint: 'F stands for "free time"',
        outcomes: [
          {
            weight: 5,
            description:
              'You fail the class and have to take summer school, which is basically school but hotter and sadder. You meet other failures and form a support group.',
            effects: [
              { type: 'stat', target: 'smarts', value: -5 },
              { type: 'stat', target: 'happiness', value: -20 },
              { type: 'reputation', value: -10 },
            ],
          },
          {
            weight: 5,
            description:
              'You fail but your parents\' disappointment unlocks a rebellious energy in you. You channel it into something actually productive and start reading for fun. Plot twist.',
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
        text: 'Beg the teacher for extra credit',
        hint: 'Bring tissues',
        outcomes: [
          {
            weight: 5,
            description:
              'The teacher takes pity on you and assigns a 30-page essay on "personal responsibility." You write 31 pages. She gives you a D-minus. It feels like winning the lottery.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: 5 },
            ],
          },
          {
            weight: 5,
            description:
              'The teacher says "I don\'t do extra credit" with the dead eyes of someone who has crushed a thousand similar requests. You are not special.',
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

  // 7. Making the honor roll
  {
    id: 'hs_honor_roll',
    title: 'Nerd Alert',
    description:
      'Against all odds — including your own expectations — your name appears on the honor roll. Your parents are so proud they threaten to put a bumper sticker on the car.',
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
        text: 'Celebrate and ride the wave',
        hint: 'Let everyone know',
        outcomes: [
          {
            weight: 7,
            description:
              'You post about it on social media and get twelve likes (eleven are from relatives). But the validation is real and your confidence soars. You start answering questions in class without fear.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 3,
            description:
              'Your celebration is cut short when the school realizes there was a grading error. You were one point away. They let you keep the certificate out of pity.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'smarts', value: 2 },
            ],
          },
        ],
      },
      {
        id: 'stay_humble',
        text: 'Stay humble about it',
        hint: 'Quiet confidence',
        outcomes: [
          {
            weight: 8,
            description:
              'You play it cool and people respect you more for it. Teachers start treating you like a human being instead of a test score. This is what maturity feels like.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'reputation', value: 15 },
            ],
          },
          {
            weight: 2,
            description:
              'You\'re so humble about it that nobody even notices. Your mom finds out from the school newsletter and is offended you didn\'t tell her.',
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

  // 8. School sports tryouts
  {
    id: 'hs_sports_tryouts',
    title: 'Tryout Day',
    description:
      'The school is holding tryouts for the sports team. The coach is a former semi-pro athlete who treats high school sports like the Olympics. He has a whistle and he is not afraid to use it.',
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
        hint: 'Prepare to sweat',
        outcomes: [
          {
            weight: 4,
            description:
              'You make the team! The coach says you have "raw potential," which is coach-speak for "you\'re terrible but tall." You spend the season on the bench building character.',
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
            description:
              'You don\'t make the team. The coach lets you down easy by saying "maybe try chess club." You consider it. Chess club is apparently cutthroat.',
            effects: [
              { type: 'stat', target: 'health', value: 5 },
              { type: 'stat', target: 'happiness', value: -15 },
            ],
          },
          {
            weight: 2,
            description:
              'You make the team AND become a starter by the end of the season. The local paper writes an article about you. Your headline: "Local Teen Surprisingly Not Terrible."',
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
        text: 'Sports are not your thing',
        hint: 'Self-awareness is a skill too',
        outcomes: [
          {
            weight: 10,
            description:
              'You watch tryouts from the bleachers eating a bag of chips. You feel at peace with your choices. The team goes 2-10 that season. You made the right call.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
            ],
          },
        ],
      },
      {
        id: 'manager',
        text: 'Become the team manager instead',
        hint: 'All the vibes, none of the cardio',
        outcomes: [
          {
            weight: 7,
            description:
              'You become team manager, which means you carry equipment and fill water bottles. But you\'re technically "on the team" and you get a letterman jacket. The system has been gamed.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 3,
            description:
              'Being team manager is 90% picking up towels and 10% being yelled at by the coach. You develop excellent organizational skills and a hatred of whistles.',
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

  // 9. Drama club / band / debate team
  {
    id: 'hs_extracurricular',
    title: 'Join a Club (They\'re Desperate)',
    description:
      'The school\'s extracurricular fair is happening in the gym. Three clubs are aggressively recruiting. The drama kids are performing scenes at passersby. The band kids are honking. The debate team is arguing about whether this is effective recruitment.',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'drama',
        text: 'Join the drama club',
        hint: 'Life is a stage, apparently',
        outcomes: [
          {
            weight: 6,
            description:
              'You join drama and get cast as "Tree #3" in the spring musical. But your tree performance is so moving that the audience cries. You\'ve found your people (they\'re all weird).',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'stat', target: 'looks', value: 3 },
              { type: 'reputation', value: 5 },
              { type: 'add_trait', value: 'creative' },
            ],
          },
          {
            weight: 4,
            description:
              'Drama club is 80% drama about who gets the lead and 20% actual drama. You get caught in a love triangle between the director, the lead actress, and a prop sword.',
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
        hint: 'This one time, at band camp...',
        outcomes: [
          {
            weight: 5,
            description:
              'You pick up an instrument and discover you have actual talent. The band director weeps. You march in the homecoming parade and only hit two people with your trombone slide.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'reputation', value: 5 },
              { type: 'add_trait', value: 'musical' },
            ],
          },
          {
            weight: 5,
            description:
              'You are assigned the triangle. You spend every rehearsal waiting for your one note. When it finally comes, you miss it. The band director stares at you like you just ruined Beethoven.',
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
        text: 'Join the debate team',
        hint: 'Weaponize your opinions',
        outcomes: [
          {
            weight: 5,
            description:
              'Turns out you\'re a natural arguer (your parents could have told them that). You win your first tournament and develop the ability to make anyone question their own reality.',
            effects: [
              { type: 'stat', target: 'smarts', value: 10 },
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'reputation', value: 10 },
              { type: 'add_trait', value: 'persuasive' },
            ],
          },
          {
            weight: 5,
            description:
              'You lose your first debate to a kid who cries on command. You learn that logic is no match for tears. This lesson will serve you well in adult relationships.',
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

  // 10. Cafeteria food poisoning
  {
    id: 'hs_food_poisoning',
    title: 'Mystery Meat Strikes Back',
    description:
      'The cafeteria served something called "protein medley" today. It was gray. You ate it anyway because you forgot your lunch and you\'re a teenager with no survival instincts. Your stomach begins making sounds that aren\'t in any known language.',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'nurse',
        text: 'Go to the school nurse',
        hint: 'She has ice packs and vibes',
        outcomes: [
          {
            weight: 6,
            description:
              'The nurse gives you a sleeve of crackers and lets you lie down for an hour. You miss math class. Net positive.',
            effects: [
              { type: 'stat', target: 'health', value: -5 },
              { type: 'stat', target: 'happiness', value: 5 },
            ],
          },
          {
            weight: 4,
            description:
              'The nurse takes one look at you and calls your parents. You go home and spend 48 hours in the bathroom. You develop a lifelong suspicion of cafeteria food.',
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
        text: 'Power through it like a champion',
        hint: 'Your intestines disagree',
        outcomes: [
          {
            weight: 3,
            description:
              'Your iron stomach prevails. While classmates drop around you, you stand strong. The lunch lady gives you a knowing nod. You have earned her respect.',
            effects: [
              { type: 'stat', target: 'health', value: -3 },
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 7,
            description:
              'You do not, in fact, power through it. The incident occurs during English class. It becomes your nickname for the rest of high school. Let\'s not get into details.',
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

  // 11. Teacher catches you on your phone
  {
    id: 'hs_phone_caught',
    title: 'Busted: Phone Edition',
    description:
      'You\'re watching a video under your desk with the confidence of someone who has never been caught doing anything. Your teacher is standing directly behind you. She has been there for two minutes.',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'hand_over',
        text: 'Surrender the phone peacefully',
        hint: 'Geneva convention compliant',
        outcomes: [
          {
            weight: 7,
            description:
              'You hand over the phone with the dignity of a fallen warrior. You spend the rest of class staring at the wall discovering that you have no thoughts without a screen in front of you.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
          {
            weight: 3,
            description:
              'You hand it over but forgot to close your tabs. The teacher sees your search history. Nothing illegal, but your googling of "do fish have feelings" raises some questions.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'reputation', value: -5 },
            ],
          },
        ],
      },
      {
        id: 'hide_quick',
        text: 'Lightning-speed pocket maneuver',
        hint: 'Reflexes of a caffeinated cat',
        outcomes: [
          {
            weight: 3,
            description:
              'Your hand moves faster than the eye can follow. The phone vanishes. The teacher questions reality. You stare at her with the innocent eyes of someone who has never owned technology.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 7,
            description:
              'In your panic, you yeet the phone across the room. It hits the whiteboard. The screen cracks. The video is still playing. Everyone knows you watch cooking tutorials now.',
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
        text: '"I was using it for educational purposes"',
        hint: 'Has never worked in human history',
        outcomes: [
          {
            weight: 2,
            description:
              'The teacher pauses. You were actually on a Wikipedia rabbit hole about the Byzantine Empire. She\'s impressed. She lets you keep the phone. The system works sometimes.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: 10 },
            ],
          },
          {
            weight: 8,
            description:
              '"Educational?" she says, turning the phone around to reveal a compilation of cats falling off things. The class laughs. At least you have good taste.',
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

  // 12. Graduation day
  {
    id: 'hs_graduation',
    title: 'Caps and Gowns and Existential Dread',
    description:
      'You did it. You survived high school. The valedictorian gives a speech about "new beginnings" while you try to figure out how the tassel works. Your family is somewhere in the crowd holding embarrassing signs.',
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
        hint: 'It hits someone',
        outcomes: [
          {
            weight: 7,
            description:
              'You throw your cap so high it doesn\'t come back. You cry. Your parents cry. The kid next to you cries because your cap hit him in the eye. It\'s a beautiful moment.',
            effects: [
              { type: 'stat', target: 'happiness', value: 25 },
              { type: 'reputation', value: 10 },
              { type: 'education', value: 'highSchool' },
            ],
          },
          {
            weight: 3,
            description:
              'You walk across the stage and trip on your gown. The entire graduating class witnesses it. The photo goes viral. Your legacy is cemented forever in the worst way.',
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
        hint: 'Reflect on the journey',
        outcomes: [
          {
            weight: 8,
            description:
              'You sit quietly and reflect on four years of homework you didn\'t do, friends you made, and cafeteria food you survived. A single tear falls. You\'re proud of yourself. You should be.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'education', value: 'highSchool' },
            ],
          },
          {
            weight: 2,
            description:
              'You realize you peaked in high school. Everything from here is slightly downhill. But hey, at least you have a diploma and an above-average collection of participation trophies.',
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

  // 13. Senior prank
  {
    id: 'hs_senior_prank',
    title: 'Senior Prank Season',
    description:
      'It\'s senior year and the class is planning the annual prank. Last year they put a car on the roof (nobody knows how). This year, someone suggests "something with geese." You\'re invited to participate.',
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
        hint: 'This will be on your permanent record',
        outcomes: [
          {
            weight: 5,
            description:
              'You help release three geese labeled #1, #3, and #4 into the school. The administration spends the entire day looking for goose #2. There is no goose #2. Legendary.',
            effects: [
              { type: 'stat', target: 'happiness', value: 25 },
              { type: 'reputation', value: 15 },
              { type: 'add_trait', value: 'prankster' },
            ],
          },
          {
            weight: 3,
            description:
              'The geese go rogue. One chases the vice principal into the parking lot. Another nests in the computer lab. School is cancelled. You are a hero to students and a villain to faculty.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'reputation', value: -10 },
              { type: 'stat', target: 'smarts', value: -3 },
            ],
          },
          {
            weight: 2,
            description:
              'You get caught on camera. The principal threatens to withhold your diploma. Your parents are called. Your mom says, "I\'m not angry, I\'m disappointed," which is objectively worse.',
            effects: [
              { type: 'stat', target: 'happiness', value: -20 },
              { type: 'reputation', value: -20 },
            ],
          },
        ],
      },
      {
        id: 'mastermind',
        text: 'Plan your own, better prank',
        hint: 'Go big or go home',
        outcomes: [
          {
            weight: 4,
            description:
              'You organize a flash mob of 200 students who simultaneously open their textbooks in the hallway. The teachers don\'t know whether to be proud or terrified. Best prank in school history.',
            effects: [
              { type: 'stat', target: 'happiness', value: 30 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'reputation', value: 20 },
            ],
          },
          {
            weight: 6,
            description:
              'Your prank involves 500 rubber ducks in the swimming pool. It takes 3 days to remove them all. You\'re banned from the pool forever, but you can die knowing you committed to a bit.',
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
        hint: 'The smart play',
        outcomes: [
          {
            weight: 10,
            description:
              'You watch the chaos unfold from a safe distance. When the geese uprising begins, you are safely in the library. When the investigations start, nobody says your name. Intelligence: applied.',
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

  // 14. Locker room incident
  {
    id: 'hs_locker_room',
    title: 'Locker Room Chronicles',
    description:
      'Someone has stolen every left shoe from the locker room during gym class. Thirty kids are hopping around in one shoe each. The gym teacher is having a breakdown. Somehow, you are a suspect.',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'investigate',
        text: 'Play detective and solve the case',
        hint: 'Channel your inner Sherlock',
        outcomes: [
          {
            weight: 5,
            description:
              'You follow the trail of single shoes to the roof, where you find them arranged in a pentagram by the weird kid who reads Nietzsche at lunch. You become the school hero. He becomes the school legend.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 5,
            description:
              'Your investigation reveals the gym teacher\'s dog got into the locker room. The dog is not sorry. You are given a "Junior Detective" sticker that you pretend to hate but secretly treasure.',
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
        hint: 'Plead the fifth shoe',
        outcomes: [
          {
            weight: 7,
            description:
              'You stay out of it. The shoes are never found. Every year on the anniversary, someone leaves a single shoe in front of the gym. It becomes school folklore.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
            ],
          },
          {
            weight: 3,
            description:
              'Your indifference makes you look suspicious. The gym teacher eyes you for the rest of the semester. You\'ve made an enemy for no reason.',
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

  // 15. School dance drama
  {
    id: 'hs_school_dance',
    title: 'Dance Floor Disaster',
    description:
      'The school dance is in full swing. The gym is decorated with streamers from the dollar store and the DJ just played the same song twice. Tensions are high. Hormones are higher.',
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
        hint: 'Your moves are... unique',
        outcomes: [
          {
            weight: 4,
            description:
              'You dance with the confidence of someone who has never seen themselves dance. Somehow, this energy is contagious. A circle forms around you. You peak right here, right now.',
            effects: [
              { type: 'stat', target: 'happiness', value: 25 },
              { type: 'stat', target: 'looks', value: 3 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 6,
            description:
              'You attempt a move you saw online and pull a muscle in your back. You\'re 16 and already injured from dancing. The slow song plays while you ice your spine against the bleachers.',
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
        hint: 'Someone has to protect the chips',
        outcomes: [
          {
            weight: 6,
            description:
              'You spend the night eating mini pretzels and having surprisingly deep conversations with other snack table guardians. You make a friend who will last longer than any dance floor romance.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'health', value: -3 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 4,
            description:
              'You eat so many snacks that the chaperone asks if you\'re okay. You are not okay. You are, however, full.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'health', value: -5 },
            ],
          },
        ],
      },
      {
        id: 'drama_instigate',
        text: 'Request a song that will cause chaos',
        hint: 'Social warfare via DJ booth',
        outcomes: [
          {
            weight: 5,
            description:
              'You request your ex\'s least favorite song. It plays. They storm out. Their friends glare at you. The DJ gives you a thumbs up. You feel powerful and terrible simultaneously.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: -10 },
            ],
          },
          {
            weight: 5,
            description:
              'You request "Baby Shark" ironically. The DJ plays it unironically. The entire dance devolves. You have weaponized a children\'s song. The chaperones will never forgive you.',
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

  // 16. College application stress
  {
    id: 'hs_college_apps',
    title: 'The Application Industrial Complex',
    description:
      'College applications are due and you\'re staring at an essay prompt that says "Tell us about yourself in 500 words." You\'ve been staring for three hours. You\'ve written: "I am a person."',
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
        hint: 'Your heart has typos',
        outcomes: [
          {
            weight: 5,
            description:
              'You write a brutally honest essay about the time you cried in a Wendy\'s parking lot. The admissions officer is moved. You get accepted. Vulnerability: 1, Cynicism: 0.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 5,
            description:
              'Your heartfelt essay is good but not good enough. You get waitlisted at your dream school and accepted at your safety school, which you told everyone was "also your first choice."',
            effects: [
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'stat', target: 'happiness', value: -10 },
            ],
          },
        ],
      },
      {
        id: 'ai_help',
        text: 'Get "creative help" from the internet',
        hint: 'Plagiarism detectors exist now',
        outcomes: [
          {
            weight: 3,
            description:
              'You cobble together an essay that sounds suspiciously like a TED talk. Nobody notices. You get into a decent school. You feel guilty for exactly 48 hours.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'smarts', value: -3 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 7,
            description:
              'The admissions office flags your essay. It has the same opening paragraph as 847 other applicants. You are rejected with a form letter that feels especially cold.',
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
        hint: 'Zuckerberg dropped out (you are not Zuckerberg)',
        outcomes: [
          {
            weight: 5,
            description:
              'You announce you\'re not going to college. Your parents react like you announced you\'re joining a cult. But you feel free. Terrifyingly, existentially free.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: -10 },
              { type: 'add_trait', value: 'independent' },
            ],
          },
          {
            weight: 5,
            description:
              'You decide against college and immediately feel the weight of having no plan. You spend the next month googling "successful people who didn\'t go to college" at 3 AM.',
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

  // 17. Peer pressure — shoplifting
  {
    id: 'hs_peer_pressure_shoplifting',
    title: 'Five-Finger Discount Club',
    description:
      'Your friends dare you to shoplift something from the corner store. The item in question is a $2 candy bar. The risk-to-reward ratio is spectacularly bad. The store clerk looks like he was in the military.',
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
        hint: 'Over a candy bar',
        outcomes: [
          {
            weight: 3,
            description:
              'You pocket the candy bar with the stealth of a teenager who has never stolen anything. Somehow, you get away with it. The candy tastes like adrenaline and shame.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'reputation', value: -5 },
              { type: 'add_trait', value: 'risk-taker' },
            ],
          },
          {
            weight: 7,
            description:
              'The clerk grabs you before you even reach the door. He calls your parents. Your mom picks you up and doesn\'t say a single word the entire ride home. The silence is deafening.',
            effects: [
              { type: 'stat', target: 'happiness', value: -25 },
              { type: 'reputation', value: -20 },
            ],
          },
        ],
      },
      {
        id: 'refuse',
        text: 'No way, not over a candy bar',
        hint: 'Principles or cowardice — either way, same result',
        outcomes: [
          {
            weight: 8,
            description:
              'You refuse and buy the candy bar like a normal person. Your friends call you "boring" for about ten seconds, then eat half your candy. Friendship is theft.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'money', value: -2 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 2,
            description:
              'You refuse. Your friend tries it instead and gets caught. You watch from outside as his mom arrives. You feel guilty for feeling relieved. Complex emotions at 15.',
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

  // ============================================================
  // COLLEGE (ages 18-22)
  // ============================================================

  // 18. Choosing a major
  {
    id: 'college_choose_major',
    title: 'What Do You Want to Be When You Grow Up?',
    description:
      'It\'s time to declare your major. The academic advisor stares at you expectantly. You stare back. Neither of you blinks. Somewhere, your student loan balance ticks upward.',
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
        text: 'STEM — "Where the money is"',
        hint: 'Also where the crying is',
        outcomes: [
          {
            weight: 6,
            description:
              'You declare a STEM major and immediately lose all free time. Your social life dies but your future salary potential lives. You start dreaming in equations.',
            effects: [
              { type: 'stat', target: 'smarts', value: 15 },
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'health', value: -5 },
              { type: 'add_trait', value: 'analytical' },
            ],
          },
          {
            weight: 4,
            description:
              'STEM sounded great until Organic Chemistry. You survive, barely, with a GPA that can only be described as "alive." But you emerge battle-hardened.',
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
        text: 'Liberal Arts — "Follow your passion"',
        hint: 'Your parents called, they\'re concerned',
        outcomes: [
          {
            weight: 5,
            description:
              'You study philosophy and can now explain why nothing matters in twelve different frameworks. Your parents ask "but what will you DO with that?" at every holiday for the next decade.',
            effects: [
              { type: 'stat', target: 'smarts', value: 10 },
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'add_trait', value: 'creative' },
            ],
          },
          {
            weight: 5,
            description:
              'Your passion for 18th-century poetry is genuine and beautiful. Your job prospects are not. But you can analyze the symbolism in your rejection letters, so that\'s something.',
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
        text: 'Business — "I want to be rich"',
        hint: 'LinkedIn profile: activated',
        outcomes: [
          {
            weight: 6,
            description:
              'You major in business and start using words like "synergy" and "leverage" unironically. You join three networking groups and your LinkedIn photo is professionally lit. The transformation is complete.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'reputation', value: 10 },
              { type: 'add_trait', value: 'ambitious' },
            ],
          },
          {
            weight: 4,
            description:
              'Business school is just group projects where one person does all the work. You are that person. You learn more about managing incompetent teammates than actual business.',
            effects: [
              { type: 'stat', target: 'smarts', value: 10 },
              { type: 'stat', target: 'happiness', value: -5 },
            ],
          },
        ],
      },
      {
        id: 'undeclared',
        text: 'Undeclared — "I\'m exploring"',
        hint: 'Exploring your parents\' patience',
        outcomes: [
          {
            weight: 5,
            description:
              'You take classes in everything and find unexpected joy in a subject you never considered. Sometimes not knowing is the path to knowing. (Your parents do not agree with this philosophy.)',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: 15 },
            ],
          },
          {
            weight: 5,
            description:
              'Three semesters of "exploring" later, you have credits in 14 departments and a major in none. Your advisor gently suggests you "pick something before the money runs out."',
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

  // 19. Wild frat/sorority party
  {
    id: 'college_party',
    title: 'Rager at the Greek House',
    description:
      'Someone named Chad or Brittany (you\'re not sure which) invites you to a party at the Greek row. The bass is already shaking the windows from three blocks away. A girl in a toga is directing traffic.',
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
        hint: 'Tomorrow-you will handle the consequences',
        outcomes: [
          {
            weight: 4,
            description:
              'You have the night of your life. You make friends, dance on tables, and wake up with someone\'s phone number written on your arm in Sharpie. The hangover lasts two days but the memories last forever.',
            effects: [
              { type: 'stat', target: 'happiness', value: 25 },
              { type: 'stat', target: 'health', value: -15 },
              { type: 'stat', target: 'smarts', value: -5 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 4,
            description:
              'You black out and wake up on a lawn with one shoe and someone\'s goldfish in your pocket. The fish is alive. You name it Regret.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'health', value: -20 },
              { type: 'stat', target: 'smarts', value: -5 },
              { type: 'reputation', value: -10 },
            ],
          },
          {
            weight: 2,
            description:
              'Campus police show up. You escape through a window like a movie protagonist, but it\'s a first-floor window so it\'s less dramatic. You lose a shoe but keep your freedom.',
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
        hint: 'Designated sober friend energy',
        outcomes: [
          {
            weight: 7,
            description:
              'You nurse one drink all night and become everyone\'s therapist. Three strangers tell you their life stories. You help someone find their keys. You are the party\'s unsung hero.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'health', value: -3 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 3,
            description:
              'Staying sober at a party is like watching a nature documentary in real time. You witness things that cannot be unseen. You go home early with fascinating stories and your dignity intact.',
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
        hint: 'FOMO is temporary, GPA is forever',
        outcomes: [
          {
            weight: 5,
            description:
              'You stay home, study, and go to bed at a reasonable hour. You feel great the next morning while everyone else looks like zombies. Your smugness is palpable and annoying.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'health', value: 5 },
              { type: 'stat', target: 'happiness', value: -5 },
            ],
          },
          {
            weight: 5,
            description:
              'You stay home and try to study, but you spend the whole night watching everyone\'s stories from the party. You learn nothing and feel everything.',
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

  // 20. Professor drama
  {
    id: 'college_professor_drama',
    title: 'Tenure-Track Meltdown',
    description:
      'Your professor starts class by saying "I don\'t even know why I\'m here anymore" and then stares out the window for three minutes. He hasn\'t returned midterm grades. He might be going through something. He definitely smells like whiskey.',
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
        text: 'Report him to the department',
        hint: 'Bureaucracy will handle this (slowly)',
        outcomes: [
          {
            weight: 5,
            description:
              'The department "investigates" by sending a strongly worded email. The professor now knows someone complained. He gives everyone a B+ and retires mid-semester.',
            effects: [
              { type: 'stat', target: 'smarts', value: -3 },
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 5,
            description:
              'The department chair says "That\'s just how he is" and does nothing. The professor gets tenure. The system is broken and you have front-row seats.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
        ],
      },
      {
        id: 'befriend',
        text: 'Try to connect with him',
        hint: 'Office hours: enter at your own risk',
        outcomes: [
          {
            weight: 5,
            description:
              'You visit his office hours. He rants for 90 minutes about his ex-wife and the publishing industry. But then he writes you an incredible recommendation letter. Trauma bonds work in academia.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 5,
            description:
              'He interprets your kindness as "someone who wants extra credit." He assigns you a 50-page reading list. You now have a mentor you didn\'t ask for and homework you don\'t want.',
            effects: [
              { type: 'stat', target: 'smarts', value: 10 },
              { type: 'stat', target: 'happiness', value: -10 },
            ],
          },
        ],
      },
      {
        id: 'ride_it_out',
        text: 'Just ride out the semester',
        hint: 'Only 13 more weeks',
        outcomes: [
          {
            weight: 7,
            description:
              'The professor\'s crisis becomes class entertainment. He accidentally teaches you more about life than the syllabus ever could. Final exam is "write about what you learned this semester." You have so much material.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: 5 },
            ],
          },
          {
            weight: 3,
            description:
              'He doesn\'t show up for the last three weeks. The final is cancelled. You get a "Pass." Your tuition dollars at work.',
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

  // 21. All-nighter before finals
  {
    id: 'college_allnighter',
    title: 'The All-Nighter',
    description:
      'Finals start in 12 hours and you have studied for exactly zero of them. Your notes are a Jackson Pollock painting. Your energy drink collection could stock a gas station. This is your crucible.',
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
        text: 'Full cram session — sleep is for the weak',
        hint: 'Your body disagrees',
        outcomes: [
          {
            weight: 4,
            description:
              'You study for 11 hours straight and absorb a semester\'s worth of knowledge through osmosis and panic. You pass the exam with a B. You then sleep for 19 hours and miss your next exam.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'health', value: -15 },
              { type: 'stat', target: 'happiness', value: 5 },
            ],
          },
          {
            weight: 4,
            description:
              'At 4 AM, the words stop making sense. You hallucinate that your textbook is talking to you. It says "you should have started earlier." You pass out at your desk and wake up ten minutes before the exam.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'stat', target: 'health', value: -20 },
              { type: 'stat', target: 'happiness', value: -15 },
            ],
          },
          {
            weight: 2,
            description:
              'The cram session unlocks a flow state you didn\'t know you had. You ace the exam. Your professor asks if you\'ve been holding out all semester. You have.',
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
        text: 'Go to sleep and accept whatever happens',
        hint: 'Chaotic neutral energy',
        outcomes: [
          {
            weight: 5,
            description:
              'You get eight hours of sleep and show up fresh. Turns out a rested brain remembers more than you thought. You scrape by with a C+. Sleep: the underrated study technique.',
            effects: [
              { type: 'stat', target: 'health', value: 5 },
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
          {
            weight: 5,
            description:
              'You sleep peacefully while your roommate has a breakdown. You wake up refreshed and fail the exam refreshedly. At least you\'re well-rested for your retake.',
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
        text: 'Find a study group at the library',
        hint: 'Misery loves company',
        outcomes: [
          {
            weight: 6,
            description:
              'You join a group of equally desperate students. Together, you piece together enough knowledge to survive. One person has notes, another has practice exams, and you bring snacks. Teamwork.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'health', value: -8 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 4,
            description:
              'The "study group" spends four hours complaining about the professor and two hours actually studying. You learn nothing but feel validated in your suffering.',
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

  // 22. Roommate from hell
  {
    id: 'college_roommate_hell',
    title: 'The Roommate Situation',
    description:
      'Your college roommate has crossed a line. Actually, they crossed the line months ago — they\'ve been living beyond the line. Their side of the room looks like a crime scene. They play the same song on repeat at 3 AM. They "borrowed" your shampoo and returned it empty.',
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
        hint: 'Neither of you are adults yet',
        outcomes: [
          {
            weight: 4,
            description:
              'You sit them down and explain your feelings using "I" statements like the internet told you. They listen, apologize, and change their behavior. Just kidding. They put headphones on while you\'re talking.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
          {
            weight: 6,
            description:
              'Against all odds, the conversation works. You establish ground rules. They start cleaning. You develop a begrudging respect for each other. By senior year, they\'re in your wedding.',
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
        text: 'Wage a passive-aggressive war',
        hint: 'Post-it notes are weapons',
        outcomes: [
          {
            weight: 5,
            description:
              'You leave increasingly specific Post-it notes everywhere. "Please don\'t eat my clearly labeled food." "Your alarm has been going off for 2 hours." The Cold War of dorm life.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'reputation', value: -5 },
            ],
          },
          {
            weight: 5,
            description:
              'The passive-aggressive war escalates until you\'re both leaving notes on Post-it notes. The RA intervenes and makes you both attend a "conflict resolution seminar." It\'s humiliating and effective.',
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
        hint: 'The waitlist is... long',
        outcomes: [
          {
            weight: 4,
            description:
              'You get transferred to a new room. Your new roommate is an exchange student who is quiet, clean, and goes to bed at 10 PM. You have found paradise.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'stat', target: 'health', value: 5 },
            ],
          },
          {
            weight: 6,
            description:
              'The housing office says the waitlist is 200 people long. You are told to "work it out." You buy noise-canceling headphones and a mini-fridge with a lock. Adaptation complete.',
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

  // 23. Study abroad opportunity
  {
    id: 'college_study_abroad',
    title: 'Passport to Knowledge (and Partying)',
    description:
      'The study abroad office is offering a semester in Europe. The brochure shows students laughing in front of ancient buildings. The fine print shows the cost. Your wanderlust battles your wallet in mortal combat.',
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
        hint: 'YOLO but in Italian',
        outcomes: [
          {
            weight: 6,
            description:
              'You spend a semester abroad and it genuinely changes your life. You learn a language (poorly), eat incredible food, and develop a personality that is 60% "when I was in Europe."',
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
            description:
              'Study abroad is 10% studying and 90% abroad. You fail two classes but gain a European ex and an extensive knowledge of budget airlines. Your parents see the grades and cancel Christmas.',
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
        hint: 'Google Maps will have to do',
        outcomes: [
          {
            weight: 6,
            description:
              'You stay home and watch everyone\'s study abroad photos for four months. You save money and develop a rich inner world of jealousy. You promise yourself you\'ll travel later. You will.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
          {
            weight: 4,
            description:
              'You stay but use the time to take extra classes and get ahead. By the time your friends come back with their "transformative experiences," you\'re a semester closer to graduating.',
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

  // 24. Dropping out consideration
  {
    id: 'college_dropout',
    title: 'The Dropout Daydream',
    description:
      'You\'re sitting in a lecture hall at 8 AM on a Monday and the professor is explaining something about supply curves. You have $47 in your bank account, $40,000 in student loans, and a powerful urge to walk out and never come back.',
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
        text: 'Drop out and figure it out',
        hint: 'The loans remain',
        outcomes: [
          {
            weight: 4,
            description:
              'You drop out and feel immediate relief, like taking off a backpack full of bricks. You get a job, start actually living, and never look back. Not everyone needs a degree. You needed freedom.',
            effects: [
              { type: 'stat', target: 'happiness', value: 25 },
              { type: 'stat', target: 'smarts', value: -5 },
              { type: 'money', value: -500 },
              { type: 'add_trait', value: 'independent' },
            ],
          },
          {
            weight: 6,
            description:
              'You drop out and the relief lasts about two weeks. Then the reality of no degree, existing loans, and a job market that filters by "Bachelor\'s required" hits you like a freight train.',
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
        text: 'Push through — you\'re too far in to quit',
        hint: 'Sunk cost fallacy or wisdom?',
        outcomes: [
          {
            weight: 6,
            description:
              'You grit your teeth and stay. It\'s miserable for a while, but by next semester you find a class that actually excites you. The light at the end of the tunnel is dim but real.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'health', value: -5 },
            ],
          },
          {
            weight: 4,
            description:
              'You stay but your grades suffer. You\'re physically present and mentally checked out. Your GPA enters hospice care. But you will technically graduate, and sometimes "technically" is enough.',
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
        hint: 'A strategic retreat',
        outcomes: [
          {
            weight: 6,
            description:
              'You take a gap semester and work. The distance from academia gives you perspective. You come back refreshed and motivated. The break was exactly what you needed.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'stat', target: 'health', value: 10 },
              { type: 'money', value: 2000 },
            ],
          },
          {
            weight: 4,
            description:
              'You take a semester off and it extends to a year. Then two. Going back gets harder every month. The gap becomes a canyon. Your textbooks gather dust and judgment.',
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

  // 25. Student debt reality
  {
    id: 'college_student_debt',
    title: 'The Numbers Don\'t Lie (But You Wish They Did)',
    description:
      'You open your student loan statement for the first time. The number has more digits than your phone number. Interest has been accumulating like a silent predator. You do the math on monthly payments and quietly set the letter on fire (metaphorically).',
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
        text: 'Make a budget and face reality',
        hint: 'Adulthood starts now',
        outcomes: [
          {
            weight: 6,
            description:
              'You create a spreadsheet and feel briefly in control of your life. The numbers are terrifying but at least they\'re organized. You start making minimum payments and eating ramen strategically.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'money', value: -1000 },
              { type: 'add_trait', value: 'financially-aware' },
            ],
          },
          {
            weight: 4,
            description:
              'You budget aggressively and find a part-time job on campus. Between classes and work, you have no free time, but your future self will thank your present self. Probably.',
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
        text: 'Put the letter in a drawer and forget about it',
        hint: 'Future you\'s problem',
        outcomes: [
          {
            weight: 5,
            description:
              'Ignorance is bliss for approximately eight months. Then the calls start. Your credit score drops faster than your GPA in freshman year. The drawer is now full of unopened envelopes.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'money', value: -2000 },
              { type: 'reputation', value: -10 },
            ],
          },
          {
            weight: 5,
            description:
              'You ignore it so hard that you actually forget about it for a while. You live in blissful denial. The debt does not forget about you.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'money', value: -1500 },
            ],
          },
        ],
      },
      {
        id: 'scholarship_hunt',
        text: 'Desperately apply for scholarships',
        hint: 'Professional begging, but academic',
        outcomes: [
          {
            weight: 4,
            description:
              'You apply to 47 scholarships and win one for $3,000 from an obscure foundation for "left-handed students interested in maritime history." You don\'t question it. Money is money.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'money', value: 3000 },
            ],
          },
          {
            weight: 6,
            description:
              'You apply to dozens of scholarships and win exactly zero. Each rejection letter is a masterclass in polite devastation. At least you got really good at writing essays about overcoming adversity.',
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

  // 26. Campus protest / activism
  {
    id: 'college_protest',
    title: 'The Revolution Will Be Instagrammed',
    description:
      'Students are protesting on the quad about something important. Signs are waving. Chants are chanting. A guy with a megaphone keeps losing his voice. Someone brought a therapy dog. It\'s unclear if the dog is protesting too.',
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
        hint: 'Bring water and comfortable shoes',
        outcomes: [
          {
            weight: 5,
            description:
              'You march, chant, and hold a sign for six hours. Your feet hurt but your spirit soars. The protest actually leads to a policy change. You helped. It feels incredible.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'stat', target: 'health', value: -5 },
              { type: 'reputation', value: 15 },
              { type: 'add_trait', value: 'activist' },
            ],
          },
          {
            weight: 3,
            description:
              'You join the protest and it gets intense. Campus police arrive. Someone throws a water bottle. You end up in the background of a news report that your grandmother sees. She calls. Repeatedly.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'health', value: -10 },
              { type: 'reputation', value: -10 },
            ],
          },
          {
            weight: 2,
            description:
              'Your passionate speech goes viral. You become the face of the movement for exactly 72 hours before the internet moves on to something else. Brief fame tastes weird.',
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
        text: 'Watch from a safe distance',
        hint: 'Document, don\'t participate',
        outcomes: [
          {
            weight: 7,
            description:
              'You watch from the library window, forming nuanced opinions about everything while committing to nothing. Peak college experience.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: 5 },
            ],
          },
          {
            weight: 3,
            description:
              'You watch and feel guilty for not participating. You post a supportive message online to compensate. Three people like it. Activism: completed.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
        ],
      },
      {
        id: 'pet_dog',
        text: 'Skip the protest, pet the therapy dog',
        hint: 'Priorities',
        outcomes: [
          {
            weight: 10,
            description:
              'You pet the dog for forty-five minutes. The dog doesn\'t care about your political views. The dog loves you unconditionally. This is the most productive thing you\'ve done all semester.',
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

  // 27. Internship opportunity
  {
    id: 'college_internship',
    title: 'Unpaid Experience (Priceless, Literally)',
    description:
      'A company is offering internships to students. The posting says "competitive compensation" which means either minimum wage or "exposure." Your career counselor says this is a "great opportunity." Your landlord says rent is still due.',
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
        text: 'Apply and take the internship',
        hint: 'Resume padding: engaged',
        outcomes: [
          {
            weight: 5,
            description:
              'The internship is basically fetching coffee and making copies, but you network your way into a real project. Your supervisor writes a glowing reference. Your resume now has a shiny bullet point.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'money', value: 1500 },
              { type: 'reputation', value: 15 },
            ],
          },
          {
            weight: 3,
            description:
              'The internship is unpaid and the commute costs more than your food budget. You learn how to operate a fax machine and attend meetings that could have been emails. Welcome to corporate America.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'money', value: -500 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 2,
            description:
              'The internship leads to a full-time job offer before you even graduate. You\'re one of the few people who gets to say "the system worked for me." Your peers quietly seethe.',
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
        text: 'Skip it — your time is worth more',
        hint: 'Bold claim for someone with no experience',
        outcomes: [
          {
            weight: 5,
            description:
              'You use the summer to work a paying job instead. More money now, less resume later. A trade-off you\'ll either appreciate or regret, depending on how the next few years go.',
            effects: [
              { type: 'money', value: 3000 },
              { type: 'stat', target: 'happiness', value: 5 },
            ],
          },
          {
            weight: 5,
            description:
              'You skip the internship and spend the summer gaming and sleeping until 2 PM. It\'s glorious. When fall comes and everyone talks about their "incredible internship experiences," you talk about your K/D ratio.',
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

  // 28. Thesis/dissertation crisis
  {
    id: 'college_thesis_crisis',
    title: 'Thesis of Doom',
    description:
      'Your thesis is due in two weeks and you have a title page, a bibliography of sources you haven\'t read, and 47 browser tabs open. Your advisor sent an email asking "How\'s the thesis coming?" three days ago. You have not responded.',
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
        text: 'Lock in and write the whole thing',
        hint: '20 pages in 14 days',
        outcomes: [
          {
            weight: 5,
            description:
              'You become a writing machine fueled by panic and caffeine. The thesis is done with hours to spare. Your advisor says it\'s "surprisingly competent." You\'ve never felt so backhanded and proud.',
            effects: [
              { type: 'stat', target: 'smarts', value: 10 },
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'health', value: -15 },
            ],
          },
          {
            weight: 5,
            description:
              'You write 18 pages of increasingly unhinged arguments at 4 AM. Page 12 contains a paragraph that is just the word "however" repeated. Your advisor requests "significant revisions."',
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
        hint: 'Invent a family emergency (don\'t)',
        outcomes: [
          {
            weight: 6,
            description:
              'You send a very professional email explaining your situation. Your advisor, who has seen this a thousand times, grants two extra weeks with the exhausted compassion of someone who chose academia anyway.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'reputation', value: -5 },
            ],
          },
          {
            weight: 4,
            description:
              'Your advisor says "no extensions, this was in the syllabus since September." The syllabus. The ancient scroll you lost in week one. You now have 14 days and a grudge.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'health', value: -5 },
            ],
          },
        ],
      },
      {
        id: 'pivot_topic',
        text: 'Scrap everything and start over with a new topic',
        hint: 'Insanity or genius?',
        outcomes: [
          {
            weight: 3,
            description:
              'You pivot to a topic you actually care about and the words flow like water. You finish in a week. Your advisor is confused but impressed. Sometimes panic breeds brilliance.',
            effects: [
              { type: 'stat', target: 'smarts', value: 12 },
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'stat', target: 'health', value: -10 },
            ],
          },
          {
            weight: 7,
            description:
              'You start over and quickly realize why nobody writes about this topic — there are no sources. You now have two unfinished theses, one week left, and the hollow stare of a person who has made a terrible decision.',
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

  // 29. College graduation
  {
    id: 'college_graduation',
    title: 'The Expensive Piece of Paper',
    description:
      'You\'re wearing a cap and gown that cost $80 to rent. The commencement speaker is a billionaire telling you to "follow your dreams." Your student loans are $60,000. The irony is not lost on you. But you did it. You actually did it.',
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
        text: 'Celebrate like you earned it (you did)',
        hint: 'One last party before reality hits',
        outcomes: [
          {
            weight: 7,
            description:
              'You throw your cap, hug everyone you can reach, and ugly cry in the parking lot. Your family takes 400 photos. You feel accomplished, terrified, and free. A degree! In this economy! Well done.',
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
            description:
              'The celebration is great until your aunt asks "so what are you going to DO with that degree?" at dinner. You don\'t have an answer. The diploma suddenly feels very heavy.',
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
        text: 'Take it in quietly — you know what this cost',
        hint: 'Literally and figuratively',
        outcomes: [
          {
            weight: 8,
            description:
              'You sit quietly and think about every all-nighter, every terrible roommate, every ramen dinner, and every moment you almost quit. You didn\'t quit. That means something. Your parents are in the stands crying. So are you.',
            effects: [
              { type: 'stat', target: 'happiness', value: 25 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'reputation', value: 10 },
              { type: 'education', value: 'college' },
            ],
          },
          {
            weight: 2,
            description:
              'You\'re calm until they call your name. Then it hits you all at once. You walk across the stage with tears streaming down your face and trip on absolutely nothing. Classic you.',
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

  // 30. Peer pressure — alcohol
  {
    id: 'hs_peer_pressure_alcohol',
    title: 'House Party Initiation',
    description:
      'Someone\'s parents are out of town and a house party materializes as if summoned by ancient teen ritual. Red cups are everywhere. Someone hands you a drink that smells like gasoline mixed with fruit punch. "Just try it," they say.',
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
        hint: 'Your liver is not ready',
        outcomes: [
          {
            weight: 4,
            description:
              'You take one sip, make a face like you ate a lemon, and pretend to drink the rest while secretly pouring it into a plant. Social survival: mastered.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 3,
            description:
              'You drink it and the room starts spinning. You tell three people you love them, try to pet a cat that isn\'t there, and fall asleep in the bathtub. Your friends take photos. These will resurface at your wedding.',
            effects: [
              { type: 'stat', target: 'health', value: -15 },
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'reputation', value: -10 },
            ],
          },
          {
            weight: 3,
            description:
              'The cops show up. Underage drinking. Your parents are called. The car ride home is the longest 12 minutes of your life. You are grounded until college.',
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
        text: 'Pass on the mystery liquid',
        hint: 'Self-preservation instinct: active',
        outcomes: [
          {
            weight: 7,
            description:
              'You decline and nobody cares. Turns out peer pressure is mostly in your head. You hang out, have fun sober, and drive everyone home. You are the hero nobody thanks.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'health', value: 3 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 3,
            description:
              'You stay sober and witness the chaos with crystal clarity. Someone breaks a vase. Someone cries in the kitchen. You have enough blackmail material to last a lifetime.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'smarts', value: 3 },
            ],
          },
        ],
      },
      {
        id: 'leave',
        text: 'Just leave the party entirely',
        hint: 'Irish goodbye',
        outcomes: [
          {
            weight: 6,
            description:
              'You slip out the back door like a ghost. Nobody notices. You walk home in the cool night air and feel the rare peace of a teenager who made a good decision.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'health', value: 5 },
            ],
          },
          {
            weight: 4,
            description:
              'You leave and get FOMO for the next week as everyone recounts "the craziest night ever." It apparently involved a trampoline, a garden hose, and the neighbor\'s goat. You\'ll never know the full story.',
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

  // ============================================================
  // TRADE SCHOOL / NO COLLEGE (ages 18-22)
  // ============================================================

  // 31. Learning a trade
  {
    id: 'trade_learn_trade',
    title: 'Work With Your Hands (They Said)',
    description:
      'College isn\'t for everyone, and you\'re starting to think it\'s not for you. A local trade school is offering programs that lead to actual jobs with actual paychecks. No one at the trade school mentions "finding yourself." Refreshing.',
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
        hint: 'Shocking career choice',
        outcomes: [
          {
            weight: 7,
            description:
              'You enroll in the electrician program and discover a talent for not electrocuting yourself. The pay is good, the work is steady, and you can fix things that college graduates have to call someone for.',
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
            description:
              'You enroll and on day two, you shock yourself so badly your hair stands up for a week. But you push through and graduate. Every outlet you see now is a small victory.',
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
        hint: 'Someone\'s gotta do it (and they get paid well)',
        outcomes: [
          {
            weight: 7,
            description:
              'You become a plumber and make more money than most of your friends with bachelor\'s degrees. When someone asks what you do, you say "I solve problems everyone pretends don\'t exist." Deep.',
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
            description:
              'The training is harder than you expected. Pipes are confusing. Water goes where it shouldn\'t. But after six months, you can fix a toilet with your eyes closed. Power.',
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
        text: 'Not ready to commit to anything',
        hint: 'The universe doesn\'t have a waitlist',
        outcomes: [
          {
            weight: 5,
            description:
              'You decide to "figure it out later" and get a series of temporary jobs. Each one teaches you something. None of them feel permanent. You\'re searching for something and you\'re not sure what.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'money', value: 500 },
            ],
          },
          {
            weight: 5,
            description:
              'You float for a while and unexpectedly discover a passion for something you never considered. Sometimes the scenic route is the right route. Your parents have a different opinion.',
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

  // 32. Apprenticeship offer
  {
    id: 'trade_apprenticeship',
    title: 'Old-School Learning',
    description:
      'A local tradesperson needs an apprentice. The interview consists of a firm handshake, a question about whether you\'re afraid of heights, and a long look into your soul. "Can you show up on time?" they ask. The bar is on the floor but somehow people still trip over it.',
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
        hint: 'Learn by doing (and occasional bleeding)',
        outcomes: [
          {
            weight: 6,
            description:
              'Your mentor is gruff, speaks in grunts, and teaches you more in three months than four years of school could. You learn to measure twice, cut once, and never touch their tools without asking.',
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
            description:
              'The work is backbreaking and your mentor communicates primarily through sighs of disappointment. But slowly, painfully, you get good at something real. The first thing you build that doesn\'t collapse makes you tear up.',
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
        text: 'Not interested in the manual labor life',
        hint: 'Your back thanks you, your wallet doesn\'t',
        outcomes: [
          {
            weight: 5,
            description:
              'You politely decline. The tradesperson shrugs and says "you\'ll be back." Ominous but probably true. Plumbers make more than most managers and they know it.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
            ],
          },
          {
            weight: 5,
            description:
              'You decline and feel good about keeping your options open. Your options are currently: nothing. But they\'re OPEN and that\'s what matters.',
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

  // 33. Certificate program
  {
    id: 'trade_certificate',
    title: 'Certified Something-or-Other',
    description:
      'An online ad promises you can become a "certified professional" in just 12 weeks. The testimonials feature stock photos of suspiciously happy people. But the certificate is real and the skills are marketable. Sometimes the internet doesn\'t lie.',
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
        text: 'Enroll in the certificate program',
        hint: '12 weeks to a new you',
        outcomes: [
          {
            weight: 6,
            description:
              'You complete the program and actually learn useful skills. The certificate opens doors that a bare resume couldn\'t. Turns out 12 weeks of focused effort beats four years of unfocused anything.',
            effects: [
              { type: 'stat', target: 'smarts', value: 10 },
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'money', value: -1500 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 4,
            description:
              'The program is harder than the ad suggested. Week 8 is basically a war crime against your free time. But you finish and add "certified" to your resume, which is at least one more adjective than before.',
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
        text: 'Teach yourself for free online',
        hint: 'YouTube University',
        outcomes: [
          {
            weight: 4,
            description:
              'You spend three months watching tutorials and practicing. You learn 80% of what the certificate covers and pay nothing. Autodidact energy. Your LinkedIn profile says "self-taught" which either impresses or worries people.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'add_trait', value: 'self-taught' },
            ],
          },
          {
            weight: 6,
            description:
              'You start strong, watch three tutorials, then get distracted by a rabbit hole about conspiracy theories. Three months later, you know nothing about the skill but everything about birds not being real.',
            effects: [
              { type: 'stat', target: 'smarts', value: -3 },
              { type: 'stat', target: 'happiness', value: -5 },
            ],
          },
        ],
      },
      {
        id: 'scam_check',
        text: 'Research whether it\'s a scam first',
        hint: 'Trust issues are sometimes valid',
        outcomes: [
          {
            weight: 5,
            description:
              'You do your research and it\'s legit. But the research took so long that the enrollment period closed. You vow to be less thorough next time. Just kidding, you won\'t.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: -5 },
            ],
          },
          {
            weight: 5,
            description:
              'Your research uncovers that this particular program is excellent. You enroll with confidence and complete it with flying colors. Due diligence pays off.',
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

  // ============================================================
  // ADDITIONAL HIGH SCHOOL EVENTS
  // ============================================================

  // 34. School talent show
  {
    id: 'hs_talent_show',
    title: 'Brave or Foolish? (The Talent Show)',
    description:
      'The school talent show is next week and sign-ups are open. Previous acts include a kid who solved a Rubik\'s cube while beatboxing and a girl who taught her hamster to run an obstacle course. The bar is simultaneously very low and impossibly high.',
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
        hint: 'Stage fright is just excitement\'s evil twin',
        outcomes: [
          {
            weight: 4,
            description:
              'Your performance is transcendent. The audience gives a standing ovation. A teacher wipes away a tear. For three minutes and forty-five seconds, you are the most important person in the school.',
            effects: [
              { type: 'stat', target: 'happiness', value: 30 },
              { type: 'stat', target: 'looks', value: 5 },
              { type: 'reputation', value: 20 },
              { type: 'add_trait', value: 'confident' },
            ],
          },
          {
            weight: 4,
            description:
              'You forget your lines/lyrics/steps halfway through and stand in silence for what feels like seven years. Then you improvise and somehow it\'s better than the original. Chaotic talent.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 2,
            description:
              'Your act is so bad that it loops back around to amazing. People think it\'s intentionally ironic. You become a meme. You didn\'t plan this. You\'ll take it.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'reputation', value: 10 },
            ],
          },
        ],
      },
      {
        id: 'watch',
        text: 'Just watch from the audience',
        hint: 'Judging is also a talent',
        outcomes: [
          {
            weight: 10,
            description:
              'You watch from the safety of row 7 and provide commentary to your friends. The real talent show was the roasts you made along the way.',
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

  // 35. Group project nightmare
  {
    id: 'hs_group_project',
    title: 'Group Project: A Horror Story',
    description:
      'Your teacher announces a group project. The class collectively groans loud enough to register on the Richter scale. You\'re assigned to work with three people: one who does everything, one who does nothing, and one who does the wrong thing confidently.',
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
        hint: 'The eternal sacrifice of competent people',
        outcomes: [
          {
            weight: 6,
            description:
              'You do the entire project alone while your groupmates contribute "moral support" and one blurry photo. You get an A. They get an A. The injustice fuels you.',
            effects: [
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'health', value: -5 },
            ],
          },
          {
            weight: 4,
            description:
              'You do all the work and your group presents it. One member takes credit during the Q&A. Your eye twitches. You learn the hardest lesson school can teach: life isn\'t fair.',
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
        text: 'Try to be a leader and delegate tasks',
        hint: 'Herding cats would be easier',
        outcomes: [
          {
            weight: 4,
            description:
              'You create a group chat, assign roles, and set deadlines. Two people ghost, one submits their part in Comic Sans, but somehow the project comes together. Leadership: unlocked.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'reputation', value: 10 },
              { type: 'add_trait', value: 'leader' },
            ],
          },
          {
            weight: 6,
            description:
              'Nobody listens to you. The group chat becomes a meme-sharing channel. The project is due tomorrow. Nobody has started. You contemplate the nature of human cooperation.',
            effects: [
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'stat', target: 'happiness', value: -15 },
            ],
          },
        ],
      },
      {
        id: 'do_nothing',
        text: 'Be the one who contributes nothing',
        hint: 'Embrace the villain arc',
        outcomes: [
          {
            weight: 5,
            description:
              'You contribute nothing and feel nothing. The overachiever carries the team. You get an A. Your soul gets an F. But it\'s high school, and souls don\'t show up on transcripts.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'smarts', value: -5 },
              { type: 'reputation', value: -10 },
            ],
          },
          {
            weight: 5,
            description:
              'The overachiever finally snaps and tells the teacher you did nothing. The teacher assigns you a solo project due Monday. Karma is real and she does not take weekends off.',
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

  // 36. Bathroom pass economy
  {
    id: 'hs_bathroom_pass',
    title: 'The Bathroom Pass Underground',
    description:
      'Your strictest teacher only allows two bathroom passes per semester. It\'s October and you\'ve already used both. Your bladder does not care about institutional policy. The class still has 45 minutes left.',
    conditions: [
      { type: 'minAge', value: 13 },
      { type: 'maxAge', value: 17 },
      { type: 'isEnrolled', value: true },
      { type: 'notInPrison', value: true },
    ],
    choices: [
      {
        id: 'ask_anyway',
        text: 'Ask to go anyway and face the wrath',
        hint: 'Biology waits for no one',
        outcomes: [
          {
            weight: 5,
            description:
              'The teacher sighs with the weight of someone who has had this conversation 10,000 times and lets you go. Small victories are still victories.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'health', value: 3 },
            ],
          },
          {
            weight: 5,
            description:
              'The teacher says no and launches into a five-minute speech about "time management." You cross your legs and learn nothing except the human body\'s remarkable capacity for suffering.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'stat', target: 'health', value: -5 },
            ],
          },
        ],
      },
      {
        id: 'sneak_out',
        text: 'Wait for a distraction and slip out',
        hint: 'Stealth mission: activated',
        outcomes: [
          {
            weight: 4,
            description:
              'Someone drops their water bottle and you make your move. You\'re there and back in 90 seconds. The teacher never notices. You are a bathroom ninja.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'health', value: 3 },
            ],
          },
          {
            weight: 6,
            description:
              'You get halfway to the door before the teacher says your name in that tone. THE tone. You slink back to your seat. The class watches with pity.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'reputation', value: -5 },
            ],
          },
        ],
      },
      {
        id: 'hold_it',
        text: 'Suffer in silence like a warrior',
        hint: 'This builds character (and kidney stones)',
        outcomes: [
          {
            weight: 6,
            description:
              'You hold it for 45 minutes through sheer willpower. The bell rings and you sprint to the bathroom at a speed that would qualify you for the track team. Victory.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'stat', target: 'health', value: -3 },
            ],
          },
          {
            weight: 4,
            description:
              'You hold it and can\'t focus on anything the teacher says. You miss the entire lesson on something that turns out to be on the test. Your bladder won but your GPA lost.',
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

  // 37. College major change crisis
  {
    id: 'college_change_major',
    title: 'The Great Major Switcheroo',
    description:
      'You\'re three semesters into your major and you hate it. Every class feels like chewing glass. Your advisor says it\'s "normal" to question your path. Your bank account says each semester of "questioning" costs $15,000.',
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
        text: 'Switch majors and add a year',
        hint: 'Your parents will need a moment',
        outcomes: [
          {
            weight: 6,
            description:
              'You switch to something you actually enjoy and it changes everything. Classes are interesting. You do the readings willingly. Your GPA rises from the dead. It costs an extra year and $20,000 but your will to live returns.',
            effects: [
              { type: 'stat', target: 'happiness', value: 25 },
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'money', value: -5000 },
            ],
          },
          {
            weight: 4,
            description:
              'You switch majors and the new one is somehow worse. You\'ve now wasted a year and learned that the grass is not greener — it\'s just different grass that also wants to eat your tuition.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15 },
              { type: 'money', value: -5000 },
            ],
          },
        ],
      },
      {
        id: 'double_down',
        text: 'Stay the course and power through',
        hint: 'Suffering builds character (allegedly)',
        outcomes: [
          {
            weight: 5,
            description:
              'You grit your teeth and finish. It\'s not what you love, but the degree opens doors you couldn\'t open before. Sometimes "good enough" is... good enough.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'health', value: -5 },
            ],
          },
          {
            weight: 5,
            description:
              'You stay in the major and develop a permanent twitch during lectures. Your grades are mediocre, your passion is nonexistent, but you are technically making progress toward a degree you don\'t want.',
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
        text: 'Keep the major, add a minor you love',
        hint: 'Best of both worlds (kind of)',
        outcomes: [
          {
            weight: 7,
            description:
              'The minor gives you something to look forward to. Your major classes still feel like dental surgery, but three times a week you get to take a class that reminds you why learning can be fun.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'smarts', value: 8 },
              { type: 'money', value: -1000 },
            ],
          },
          {
            weight: 3,
            description:
              'Adding a minor means more classes, less sleep, and a schedule that looks like a jigsaw puzzle. But your resume now has TWO things on it, which is twice as many as before.',
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

  // 38. Substitute teacher day
  {
    id: 'hs_substitute_teacher',
    title: 'Sub Day',
    description:
      'Your regular teacher is out and a substitute walks in looking like they\'ve seen things. The class immediately senses weakness. Someone has already changed the seating chart. Another kid claims to be the teacher\'s aide. Pure anarchy looms.',
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
        hint: 'The sub will never know',
        outcomes: [
          {
            weight: 6,
            description:
              'You give the sub a fake name and spend the period doing absolutely nothing productive. The sub is too defeated to care. A free period in disguise.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'smarts', value: -3 },
            ],
          },
          {
            weight: 4,
            description:
              'You join the chaos and the sub turns out to be a retired Marine drill sergeant doing this "for fun." The class is whipped into shape in 30 seconds. You do more work than any regular class.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'smarts', value: 5 },
            ],
          },
        ],
      },
      {
        id: 'help_sub',
        text: 'Feel bad for the sub and help them',
        hint: 'Teacher\'s pet mode: engaged',
        outcomes: [
          {
            weight: 6,
            description:
              'You help the sub navigate the chaos. They are so grateful they give you extra credit that doesn\'t actually exist. Your regular teacher is confused by the note that says "this one is good."',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 4,
            description:
              'You try to help but the class turns on you for being a "narc." The sub doesn\'t even remember your name. You\'ve angered both sides. Neutrality was the move.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'reputation', value: -10 },
            ],
          },
        ],
      },
      {
        id: 'zone_out',
        text: 'Put in headphones and zone out',
        hint: 'Plausible deniability',
        outcomes: [
          {
            weight: 8,
            description:
              'You put in one earbud, pull up your hood, and enter a state of peaceful detachment. The chaos swirls around you like a hurricane around its eye. You are the eye. Zen.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
            ],
          },
          {
            weight: 2,
            description:
              'The sub spots your headphones and confiscates them. This sub has done this before. You spend the period in silent rage watching everyone else goof off.',
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

  // 39. Pop quiz ambush
  {
    id: 'hs_pop_quiz',
    title: 'Surprise! You Know Nothing!',
    description:
      'Your teacher walks in with that smirk. The one that means a pop quiz. The classroom mood shifts instantly. Someone whispers "no" like they just watched their favorite character die. Pencils are drawn like swords.',
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
        hint: 'Some questions look familiar... maybe',
        outcomes: [
          {
            weight: 4,
            description:
              'Turns out you accidentally absorbed knowledge through proximity to open textbooks. You pass with a solid B. Your subconscious is carrying your academic career.',
            effects: [
              { type: 'stat', target: 'smarts', value: 5 },
              { type: 'stat', target: 'happiness', value: 10 },
            ],
          },
          {
            weight: 6,
            description:
              'You stare at the paper and it stares back. You answer three questions with confidence and seven with the energy of a fortune cookie. Your grade reflects both strategies.',
            effects: [
              { type: 'stat', target: 'smarts', value: -3 },
              { type: 'stat', target: 'happiness', value: -10 },
            ],
          },
        ],
      },
      {
        id: 'creative_answers',
        text: 'Get creative with your answers',
        hint: 'Wrong, but entertaining',
        outcomes: [
          {
            weight: 4,
            description:
              'You answer every question with such creative confidence that the teacher gives you partial credit for "effort and entertainment value." This has never happened before and will never happen again.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15 },
              { type: 'stat', target: 'smarts', value: 3 },
              { type: 'reputation', value: 5 },
            ],
          },
          {
            weight: 6,
            description:
              'Your creative answers are not appreciated. The teacher writes "see me after class" in red ink so thick it bleeds through the paper. Comedy is subjective.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5 },
              { type: 'stat', target: 'smarts', value: -3 },
            ],
          },
        ],
      },
      {
        id: 'strategic_absence',
        text: 'Suddenly feel very sick and go to the nurse',
        hint: 'An Oscar-worthy performance',
        outcomes: [
          {
            weight: 4,
            description:
              'Your performance is convincing. You clutch your stomach, groan authentically, and are excused. The nurse gives you a cracker and you lie on a cot for an hour. Beats a quiz.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10 },
              { type: 'stat', target: 'smarts', value: -3 },
            ],
          },
          {
            weight: 6,
            description:
              'The teacher has heard this one before. "You can take the quiz when you get back from the nurse." Checkmate. You now have to take the quiz AND explain to the nurse why you\'re not actually sick.',
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

  // 40. Yearbook photo day
  {
    id: 'hs_yearbook_photo',
    title: 'Picture Day: The Annual Hostage Situation',
    description:
      'It\'s yearbook photo day. You have one shot to create an image that will represent you for eternity (or until the yearbook ends up at a garage sale in 20 years). The photographer has taken 3,000 photos today and has lost the ability to fake enthusiasm.',
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
        hint: 'Hair, outfit, practice smile',
        outcomes: [
          {
            weight: 5,
            description:
              'You prepare meticulously. Your hair is perfect. Your outfit is fire. Then the photographer catches you mid-blink. The retake option costs $15. This is extortion.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'looks', value: -3 },
              { type: 'money', value: -15 },
            ],
          },
          {
            weight: 5,
            description:
              'All your preparation pays off. The photo is genuinely great. You look approachable, confident, and like someone who has their life together. The illusion is complete.',
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
        text: 'Roll up looking exactly how you look',
        hint: 'Authenticity or laziness — you decide',
        outcomes: [
          {
            weight: 6,
            description:
              'You take the photo in whatever you slept in. It becomes the most authentic yearbook photo in school history. You look like a human being, not a catalog model. Some people prefer it.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5 },
            ],
          },
          {
            weight: 4,
            description:
              'You look terrible and you know it the moment the flash goes off. This photo will outlive you. In 30 years, someone will find it and say "wow, rough year."',
            effects: [
              { type: 'stat', target: 'happiness', value: -10 },
              { type: 'stat', target: 'looks', value: -3 },
            ],
          },
        ],
      },
      {
        id: 'funny_face',
        text: 'Make a ridiculous face on purpose',
        hint: 'A legacy choice',
        outcomes: [
          {
            weight: 5,
            description:
              'Your cross-eyed tongue-out photo makes it into the yearbook because the editor thinks it\'s "the funniest thing they\'ve ever seen." Your parents are less amused. Your friends can\'t stop laughing for a week.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20 },
              { type: 'reputation', value: 10 },
            ],
          },
          {
            weight: 5,
            description:
              'The photographer doesn\'t take another photo. That\'s your yearbook picture. You thought they\'d redo it. They did not. Your funny face is now your permanent high school legacy.',
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
];
