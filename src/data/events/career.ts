// ============================================================
// ThisLife — Career Events
// Office Space meets The Office. Workplace absurdity at its finest.
// ============================================================

import { GameEvent } from '../../types/events';

export const CAREER_EVENTS: GameEvent[] = [

  // ============================================================
  // SECTION A: GENERAL WORKPLACE EVENTS (any career)
  // ============================================================

  {
    id: 'career_overtime_request',
    title: 'Weekend Warriors',
    description:
      'Your boss slides up to your desk at 4:55 PM on a Friday with that look. You know the look. "Hey champ, got a sec?" They need you to work the entire weekend. Your weekend plans involve doing absolutely nothing, and you were really looking forward to it.',
    category: 'career',
    probability: 0.2,
    cooldown: 4,
    conditions: [{ type: 'hasCareerId', value: true }],
    choices: [
      {
        id: 'overtime_accept',
        text: 'Sacrifice your weekend like a good corporate soldier.',
        hint: 'Boss will remember this',
        outcomes: [
          {
            weight: 60,
            description:
              'You spend the weekend staring at spreadsheets while your friends post beach photos. Your boss sends a "thanks!" email Monday morning — misspelling your name. But hey, the overtime pay is nice.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'money', value: 500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You come in Saturday only to discover the "urgent project" was already handled by someone in the overseas office. You sat in an empty building for six hours. At least the vending machine was all yours.',
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
        text: '"Sorry, I have a... thing. A very important thing."',
        outcomes: [
          {
            weight: 50,
            description:
              'Your boss gives you a look that could curdle milk but says nothing. Come Monday, you notice your parking spot has been reassigned to "anyone but you." Worth it.',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Turns out the project was a disaster and everyone who worked the weekend is now being investigated for how badly they messed it up. Your absence looks like genius-level foresight.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'career_performance', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'overtime_negotiate',
        text: '"I\'ll do it... for double overtime pay."',
        hint: 'Bold move',
        outcomes: [
          {
            weight: 35,
            description:
              'Your boss is so desperate they agree. You make more in one weekend than you usually make in two weeks. This is what peak capitalism looks like.',
            effects: [
              { type: 'money', value: 1200, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 65,
            description:
              'Your boss laughs in your face. Actually laughs. Then walks away. You\'re now known as "the one who tried to negotiate" which is somehow worse than just saying no.',
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
    description:
      'Your carefully prepared lunch — the one you spent 45 minutes making last night while watching cooking shows — has vanished from the office fridge. In its place: a passive-aggressive sticky note that reads "Thanks :)" in handwriting you don\'t recognize. This is a declaration of war.',
    category: 'career',
    probability: 0.18,
    cooldown: 6,
    conditions: [{ type: 'hasCareerId', value: true }],
    choices: [
      {
        id: 'lunch_investigate',
        text: 'Launch a full-scale investigation. Check cameras, dust for prints.',
        outcomes: [
          {
            weight: 50,
            description:
              'After two hours of detective work that would make Sherlock proud, you discover it was Dave from accounting. It\'s always Dave from accounting. Dave offers to buy you lunch, which is technically an upgrade from your sad leftovers.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your investigation turns into a full office drama. Two coworkers are accused, one cries, and HR gets involved. They never find the real thief. Your lunch died for nothing.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'career_performance', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'lunch_revenge',
        text: 'Prepare a decoy lunch with ghost pepper hot sauce.',
        hint: 'Chaotic good... or chaotic evil?',
        outcomes: [
          {
            weight: 60,
            description:
              'The next day, you hear screaming from the break room. The thief — it WAS Dave from accounting — is chugging milk straight from the carton. He never steals food again. The office gives you a standing ovation.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Your boss eats it. YOUR BOSS. They\'re rushed to urgent care. You spend the rest of the week pretending you like spicy food that much. HR adds a new clause to the employee handbook because of you.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'career_performance', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'lunch_let_go',
        text: 'Let it go. Buy a sad vending machine sandwich.',
        outcomes: [
          {
            weight: 100,
            description:
              'You eat a $4 sandwich that tastes like regret and processed cheese. The lunch thief wins today, but you keep your dignity. Mostly.',
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
    description:
      'You walk into the break room and the conversation stops dead. Like, record-scratch stops. Three coworkers are staring at you with expressions that range from pity to fascination. Someone was definitely just talking about you. Karen from HR can\'t even make eye contact.',
    category: 'career',
    probability: 0.15,
    cooldown: 6,
    conditions: [{ type: 'hasCareerId', value: true }],
    choices: [
      {
        id: 'gossip_confront',
        text: '"Go ahead, say it to my face. I dare you."',
        outcomes: [
          {
            weight: 40,
            description:
              'They claim they were talking about someone else. The lie is so transparent it\'s almost art. But the gossip stops — nobody messes with the person who confronted them. Power move.',
            effects: [
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'Turns out the rumor is that you\'re getting promoted. By confronting them aggressively, you\'ve now started a NEW rumor that you\'re unhinged. Congrats on the self-sabotage.',
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
        text: 'Pretend you didn\'t notice and grab your coffee.',
        outcomes: [
          {
            weight: 60,
            description:
              'You maintain your composure like a zen master. The rumor dies in three days because the office has the collective attention span of a goldfish.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'The rumor morphs and grows. By Friday, the entire office thinks you\'re either a secret millionaire or in witness protection. Neither is true, but the mystery gives you unexpected clout.',
            effects: [
              { type: 'reputation', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'gossip_join',
        text: 'Start an even wilder rumor about yourself to control the narrative.',
        hint: 'Fight fire with fire',
        outcomes: [
          {
            weight: 50,
            description:
              'You casually mention you used to be a spy. It\'s so ridiculous that it replaces whatever the real gossip was. People now look at you with a mix of confusion and respect.',
            effects: [
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your fake rumor backfires spectacularly. Now HR wants to do a background check and your boss is asking uncomfortable questions. This was not the plan.',
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
    description:
      'It\'s annual review time. You\'re sitting in your boss\'s office while they flip through a manila folder that apparently contains the sum total of your professional worth. They\'re doing that thing where they read silently and nod. The silence is physically painful.',
    category: 'career',
    probability: 0.22,
    cooldown: 4,
    conditions: [{ type: 'hasCareerId', value: true }],
    choices: [
      {
        id: 'review_confident',
        text: 'Project confidence. You crushed it this year.',
        outcomes: [
          {
            weight: 45,
            description:
              '"Exceeds expectations." Two words that make up for a year of misery. You get a raise and your boss actually uses your correct name. Best day in months.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'career_satisfaction', value: 8, operation: 'add' },
              { type: 'money', value: 800, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              '"Meets expectations." The most soul-crushing two words in corporate America. You did fine. Just... fine. Adequate. Sufficient. Passable. You exist.',
            effects: [
              { type: 'career_performance', value: 2, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              '"Needs improvement." Your boss lists seventeen things you did wrong and one thing you did right (showing up). You\'re put on a Performance Improvement Plan, which is corporate for "start job hunting."',
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
        text: 'Be humble. Acknowledge areas for growth.',
        outcomes: [
          {
            weight: 55,
            description:
              'Your self-awareness impresses your boss. "Finally, someone who doesn\'t think they\'re God\'s gift to this company." You get a modest raise and genuine respect.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
              { type: 'money', value: 500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'Your boss takes your humility as confirmation that you know you\'re terrible. They agree with your self-criticism enthusiastically. "Yes! You DO need work in those areas!" This backfired.',
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
    description:
      'That coworker you\'ve been making eyes at across the office just lingered a little too long at your desk. Was that flirting? Was that a work question? Your brain is short-circuiting. The fluorescent lighting somehow makes them look radiant. You might be losing it.',
    category: 'career',
    probability: 0.12,
    cooldown: 8,
    conditions: [{ type: 'hasCareerId', value: true }],
    choices: [
      {
        id: 'romance_pursue',
        text: 'Ask them out. Life is short and so is lunch break.',
        hint: 'Don\'t dip your pen in company ink, they say...',
        outcomes: [
          {
            weight: 35,
            description:
              'They say yes! You go to lunch and discover you both hate the same coworkers. A bond forged in mutual disdain. The office romance begins, and everyone pretends not to notice the heart-eyes.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'They let you down gently: "I don\'t date coworkers." Fair. Reasonable. Mature. You spend the next three months avoiding the break room when they\'re there.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'They report you to HR. Not because you were creepy — you were perfectly normal — but because they just went through a "boundaries in the workplace" seminar and are overachieving. You have to sit through a one-on-one with HR about "appropriate workplace interactions."',
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
        text: 'Keep it professional. You\'re here to work.',
        outcomes: [
          {
            weight: 100,
            description:
              'You bury your feelings in spreadsheets and reply-all emails like a true professional. The tension fades. You\'re slightly dead inside, but your career trajectory is unscathed.',
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
    description:
      'You just... rested your eyes for a second. Just one second. But your desk is warm and the post-lunch food coma hit different today and now your boss is standing over you while a thin line of drool connects your face to a quarterly report. The printout is ruined. So might be your career.',
    category: 'career',
    probability: 0.12,
    cooldown: 8,
    conditions: [{ type: 'hasCareerId', value: true }],
    choices: [
      {
        id: 'sleep_excuse',
        text: '"I was meditating! It\'s a productivity technique!"',
        outcomes: [
          {
            weight: 30,
            description:
              'Your boss has actually read about workplace meditation in a LinkedIn article. They\'re intrigued. You accidentally start a company meditation program. You are a visionary liar.',
            effects: [
              { type: 'career_performance', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description:
              '"You were snoring." There\'s no coming back from that. You get a written warning and your desk is moved next to your boss\'s office. Nap time is officially over.',
            effects: [
              { type: 'career_performance', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'sleep_own_it',
        text: '"Yeah, I was sleeping. This job is exhausting."',
        hint: 'Radical honesty',
        outcomes: [
          {
            weight: 25,
            description:
              'Your boss respects the raw honesty and gives you the rest of the day off to "recharge." You go home and take the best nap of your life. Sometimes honesty really is the best policy.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 75,
            description:
              'Your boss does NOT respect the raw honesty. You\'re sent home for the day — unpaid. At least you can nap at home. Silver linings.',
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
    description:
      'The annual company holiday party is in full swing. The decorations look like a dollar store exploded, the DJ is playing exclusively 2008 club hits, and someone spiked the eggnog. Your boss is doing karaoke. Badly. The open bar is the only thing keeping morale above zero.',
    category: 'career',
    probability: 0.15,
    cooldown: 4,
    conditions: [{ type: 'hasCareerId', value: true }],
    choices: [
      {
        id: 'party_go_hard',
        text: 'Hit the open bar. This is your moment.',
        hint: 'YOLO has consequences',
        outcomes: [
          {
            weight: 30,
            description:
              'You become the life of the party. Your karaoke rendition of "Bohemian Rhapsody" brings actual tears. You wake up as a company legend. People will talk about this for years. Good talk.',
            effects: [
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You tell your boss what you REALLY think of them. In detail. With hand gestures. Monday is going to be rough. Very, very rough.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You photocopied something you shouldn\'t have. On the company copier. During the party. The security footage is making rounds. You don\'t remember any of this, which somehow makes it worse.',
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
        text: 'Stay sober and network with executives.',
        outcomes: [
          {
            weight: 70,
            description:
              'You have a great conversation with a VP who doesn\'t remember your name but remembers your "great energy." This will pay off at promotion time. Corporate schmoozing at its finest.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The VP you were networking with gets caught in a scandal at the party and is fired the next week. Being associated with them is... not great.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'party_skip',
        text: 'Skip it entirely. "Sorry, family thing."',
        outcomes: [
          {
            weight: 100,
            description:
              'You spend the evening at home in sweatpants watching movies while your coworkers send increasingly unhinged group texts. Best decision you\'ve made all year. You wake up with no regrets — a company party miracle.',
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
    description:
      'You\'ve been grinding for months. Your performance is solid. You\'ve perfected the art of looking busy. It\'s time to ask for a raise. You schedule a meeting with your boss, who looks mildly alarmed that you\'re requesting a "private conversation." They think you\'re quitting. Good — let them sweat.',
    category: 'career',
    probability: 0.18,
    cooldown: 4,
    conditions: [{ type: 'hasCareerId', value: true }],
    choices: [
      {
        id: 'raise_ask_big',
        text: 'Ask for a 25% raise. Shoot for the moon.',
        hint: 'Swing big or go home',
        outcomes: [
          {
            weight: 25,
            description:
              'Your boss is so stunned by your audacity they actually say yes. Turns out the budget was there all along. You just had to ask. All those LinkedIn "know your worth" posts were RIGHT.',
            effects: [
              { type: 'money', value: 2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'career_satisfaction', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your boss counter-offers with 5%. After a negotiation that felt like a hostage situation, you settle on 8%. It\'s not 25%, but it\'s not nothing. You call it a win on social media.',
            effects: [
              { type: 'money', value: 600, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_satisfaction', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'Your boss laughs so hard they have to take a sip of water. "Twenty-five percent? In THIS economy?" You slink back to your desk, 0% richer but 100% more humiliated.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'raise_ask_modest',
        text: 'Ask for a reasonable 10% raise with data to back it up.',
        outcomes: [
          {
            weight: 60,
            description:
              'Your boss is impressed by the research. You get the 10%. It feels good to be compensated fairly for once in your miserable corporate existence.',
            effects: [
              { type: 'money', value: 1000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'career_satisfaction', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              '"We don\'t have the budget right now, but let\'s revisit in six months." The corporate equivalent of "I\'ll call you." Six months later, they will absolutely not revisit this.',
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
    description:
      'You\'ve just had an accident at work. It ranges somewhere between "mildly embarrassing" and "definitely filing a claim." Your back hurts, your pride hurts worse, and someone definitely recorded it on their phone.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    conditions: [{ type: 'hasCareerId', value: true }],
    choices: [
      {
        id: 'injury_file_claim',
        text: 'File a workers\' comp claim. This could pay off.',
        outcomes: [
          {
            weight: 50,
            description:
              'Your claim is approved. You get two weeks paid leave and a surprisingly comfortable neck brace. Daytime TV isn\'t as bad as people say. Actually, it\'s worse. But the checks clear.',
            effects: [
              { type: 'money', value: 1500, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_performance', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The company fights the claim. Security camera footage shows you tripping over your own shoelace. Not exactly a safety hazard. Claim denied. Now everyone thinks you\'re a fraud AND clumsy.',
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
        text: 'Walk it off. Pain is temporary, employment is... also temporary.',
        outcomes: [
          {
            weight: 60,
            description:
              'You power through like a warrior. Your coworkers are impressed by your toughness. Your back is impressed by nothing and will remind you of this for years.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You make it worse by not treating it. Three days later you can\'t get out of bed. Congratulations, hero, now you need MORE time off than if you\'d just filed the claim.',
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
    description:
      'You have an email from HR with the subject line: "Meeting Request — Confidential." Those three words contain more dread than any horror movie. Apparently, someone filed a complaint about you. What did you do? What DIDN\'T you do? Your entire work history is flashing before your eyes.',
    category: 'career',
    probability: 0.12,
    cooldown: 8,
    conditions: [{ type: 'hasCareerId', value: true }],
    choices: [
      {
        id: 'hr_cooperate',
        text: 'Go in, cooperate fully, and be professional.',
        outcomes: [
          {
            weight: 50,
            description:
              'Turns out someone complained about your "aggressive typing." You type too loud. That\'s the complaint. The HR rep looks as embarrassed as you do. You get a keyboard pad and everyone moves on.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_performance', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'It\'s a legitimate complaint about something you said in a meeting. Turns out "that\'s the dumbest idea I\'ve ever heard" doesn\'t count as "constructive feedback." You get a formal warning.',
            effects: [
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'The complaint is about your microwave fish incident from three weeks ago. The entire floor had to be evacuated. You\'re now permanently banned from the break room microwave. Fair.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'hr_defensive',
        text: '"I want a lawyer present."',
        hint: 'This is... a workplace, not a courtroom',
        outcomes: [
          {
            weight: 30,
            description:
              'The HR rep is so startled by your response that they just drop the whole thing. Apparently the complaint was minor and not worth the hassle of dealing with someone who watches too many legal dramas.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description:
              'Demanding a lawyer for a workplace complaint about your lunch smells is wildly disproportionate. You\'re now known as "the lawyer person" and people actively avoid talking to you. Mission accomplished?',
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
    description:
      'Management has organized a mandatory "team building" day. The itinerary includes trust falls, an escape room, and something called "vulnerability circles." The email says "Attendance is mandatory and FUN!" The exclamation mark feels threatening.',
    category: 'career',
    probability: 0.15,
    cooldown: 4,
    conditions: [{ type: 'hasCareerId', value: true }],
    choices: [
      {
        id: 'team_enthusiastic',
        text: 'Fake enthusiasm. Become Team Building Champion.',
        outcomes: [
          {
            weight: 50,
            description:
              'Your Oscar-worthy performance as "enthusiastic employee" impresses management. You win the trust fall competition. Your team actually bonds over how annoying the exercises are. Accidental team building — the only kind that works.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Nobody catches you during the trust fall. You hit the ground while fourteen coworkers look down at you in horror. The "vulnerability circle" afterward is just you icing your back while everyone else shares feelings. Terrible day.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'team_sabotage',
        text: 'Participate with maximum sarcasm.',
        outcomes: [
          {
            weight: 40,
            description:
              'Your running commentary turns the terrible day into comedy gold. Even your boss is laughing. You become the unofficial voice of everyone who hates corporate team building. A hero to the people.',
            effects: [
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'The HR person organizing the event is NOT amused. They pull you aside and explain that your "attitude" is "not conducive to team synergy." You now have an enemy in HR. Never a good place to have enemies.',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'team_call_in_sick',
        text: '*cough cough* "I\'m so sick... *cough*"',
        outcomes: [
          {
            weight: 50,
            description:
              'Your fake sick call is flawless. You spend the day on the couch watching shows while everyone else does trust falls. They send photos — you made the right call.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'career_performance', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your boss sees your Instagram story at the beach. You forgot you follow each other. Monday is going to be uncomfortable.',
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
    description:
      'The rumor mill is churning: the company might be going bankrupt. Evidence? The CEO was seen carrying a box out of the building, the CFO updated their LinkedIn, and the free coffee in the break room was downgraded from Starbucks to Folgers. That last one is the most alarming sign.',
    category: 'career',
    probability: 0.1,
    cooldown: 8,
    conditions: [{ type: 'hasCareerId', value: true }],
    choices: [
      {
        id: 'bankruptcy_jump_ship',
        text: 'Start job hunting immediately. First rat off the ship.',
        outcomes: [
          {
            weight: 45,
            description:
              'Smart move. The company folds three months later. You already have a new job with better pay. Your former coworkers are sending desperate LinkedIn messages. You feel bad for exactly five seconds.',
            effects: [
              { type: 'money', value: 1000, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description:
              'The rumor was false. The company is fine. But your boss found your updated resume on the office printer. You left it in the tray. Amateur hour. Now you\'re on the "first to fire" list.',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'bankruptcy_stay_loyal',
        text: 'Stay the course. You believe in this company!',
        outcomes: [
          {
            weight: 40,
            description:
              'The company pulls through and your loyalty is rewarded with a promotion. The rats who fled look like fools. Loyalty pays — this time.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'money', value: 1500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'The company goes under. You rode that ship all the way to the bottom of the ocean. Your loyalty earned you a cardboard box, a dead plant from your desk, and two weeks\' severance. Congratulations on your principles.',
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
    description:
      'You have a coworker who is genuinely, certifiably terrible. They microwave fish, clip their nails at their desk, and narrate everything they do in third person. Today, they\'ve crossed the line: they CC\'d your boss on an email throwing you under the bus for a mistake THEY made. It\'s on.',
    category: 'career',
    probability: 0.15,
    cooldown: 6,
    conditions: [{ type: 'hasCareerId', value: true }],
    choices: [
      {
        id: 'toxic_retaliate',
        text: 'Gather receipts and expose them in a reply-all.',
        hint: 'Nuclear option',
        outcomes: [
          {
            weight: 40,
            description:
              'Your documented evidence is devastating. Screenshots, timestamps, witness testimonies. The toxic coworker is put on a PIP. The office treats you like a folk hero. Justice is served.',
            effects: [
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'The reply-all starts a war. Others join in. HR shuts down the entire email thread. Both of you get written warnings. The toxic coworker now has a genuine vendetta against you. You\'ve created a supervillain.',
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
        text: 'Report them to HR. Let the system work.',
        outcomes: [
          {
            weight: 50,
            description:
              'HR actually does something. The coworker is "transitioned to a different team," which is corporate for exile. Your quiet victory tastes sweet.',
            effects: [
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'HR investigates and concludes there\'s "no actionable issue." The toxic coworker finds out you reported them. Things get worse. Much worse. The fish microwaving doubles in frequency.',
            effects: [
              { type: 'career_satisfaction', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'toxic_befriend',
        text: 'Kill them with kindness. Befriend the monster.',
        outcomes: [
          {
            weight: 35,
            description:
              'Against all odds, the toxic coworker becomes your ally. Turns out they were just lonely and terrible at social cues. They still clip their nails at their desk, but now they do it facing away from you. Growth.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 65,
            description:
              'They interpret your kindness as weakness and start taking credit for even MORE of your work. You\'ve fed the beast. It is stronger now.',
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
    description:
      'You accidentally saw a coworker\'s pay stub on the printer. They do the SAME job as you. They make 30% more. THIRTY PERCENT. You\'ve been here longer. You work harder. They spend half their day watching YouTube. The injustice burns with the fire of a thousand suns.',
    category: 'career',
    probability: 0.12,
    cooldown: 8,
    conditions: [{ type: 'hasCareerId', value: true }],
    choices: [
      {
        id: 'salary_confront_boss',
        text: 'March into your boss\'s office and demand equal pay.',
        outcomes: [
          {
            weight: 40,
            description:
              'Your boss panics — they didn\'t know you knew. Within a week, you get a raise to match. Turns out the squeaky wheel gets the grease. And also slightly less respect from management.',
            effects: [
              { type: 'money', value: 1500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              '"That\'s confidential information. How did you..." Now YOU\'RE in trouble for seeing the pay stub. Classic corporate deflection. The gap remains, and you\'re on a watchlist.',
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
        text: 'Start doing exactly 30% less work. Math is math.',
        outcomes: [
          {
            weight: 50,
            description:
              'You achieve perfect work-life balance. Nobody notices you\'re doing less because, honestly, nobody was paying attention anyway. The system is broken and you\'re just living in it.',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your reduced output is immediately noticed because OF COURSE when you slack off it\'s noticed. You get a talking-to about "declining performance." The universe hates you specifically.',
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
    description:
      'Someone left a box of donuts in the break room with a note: "Help yourselves!" It\'s 9 AM. By 9:03, the office has descended on the break room like piranhas on a wounded zebra. There are two donuts left. One is chocolate glazed (the good one). The other is plain (the participation trophy of donuts).',
    category: 'career',
    probability: 0.2,
    cooldown: 3,
    conditions: [{ type: 'hasCareerId', value: true }],
    choices: [
      {
        id: 'food_grab_good',
        text: 'Grab the chocolate one. You deserve this.',
        outcomes: [
          {
            weight: 60,
            description:
              'You snag the chocolate donut with the precision of a surgeon. A coworker glares at you but says nothing. This is the best thing that\'s happened to you all week and it\'s only Monday.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You grab it at the exact same time as your boss. Your hands touch. You make eye contact. Time freezes. You let go because self-preservation trumps chocolate. The power dynamic in that donut was enormous.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'career_performance', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'food_take_plain',
        text: 'Take the plain one. Be the bigger person.',
        outcomes: [
          {
            weight: 100,
            description:
              'You eat the plain donut while staring at the empty box where the chocolate one was. It\'s fine. Everything is fine. The plain donut tastes like compromise and mild sadness. But at least nobody can accuse you of being selfish.',
            effects: [
              { type: 'stat', target: 'happiness', value: 2, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'food_take_both',
        text: 'Take both. Assert dominance.',
        hint: 'Some people just want to watch the world burn',
        outcomes: [
          {
            weight: 40,
            description:
              'You walk back to your desk with a donut in each hand like a conquering hero. Everyone sees. Nobody says anything. They fear you now. This is power.',
            effects: [
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'A coworker loudly says "WOW, really?" as you walk away with both donuts. The entire office judges you. It was worth it for approximately 45 seconds. Now you feel like a monster.',
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
    description:
      'You worked on that project for three weeks. Three sleepless, coffee-fueled, soul-crushing weeks. Your boss just presented it to the executive team as THEIR idea. They didn\'t even change your font choices. Your name isn\'t on a single slide. Your blood pressure has a blood pressure.',
    category: 'career',
    probability: 0.15,
    cooldown: 6,
    conditions: [{ type: 'hasCareerId', value: true }],
    choices: [
      {
        id: 'credit_speak_up',
        text: 'Speak up in the meeting. "Actually, I created that."',
        outcomes: [
          {
            weight: 30,
            description:
              'The executive team is impressed by your initiative. Your boss looks like they swallowed a lemon. You get credit AND your boss now fears you. Beautiful corporate jiu-jitsu.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description:
              'Your boss smoothly says "Yes, they helped with some of the details." HELPED. WITH DETAILS. You did ALL of it. But now you look petty for bringing it up. Your boss is a corporate ninja and you just got owned.',
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
        text: 'Say nothing now, but start documenting everything.',
        outcomes: [
          {
            weight: 60,
            description:
              'You build a paper trail that would make a forensic accountant weep. When it happens again — and it will — you\'ll be ready. For now, the long game begins.',
            effects: [
              { type: 'career_performance', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Documenting everything becomes an obsession. You have a folder called "Evidence" with 47 sub-folders. You haven\'t actually done any real work in a week. The evidence-gathering IS your full-time job now.',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'credit_let_go',
        text: 'Let it go. It\'s just a job. It\'s fine. EVERYTHING IS FINE.',
        outcomes: [
          {
            weight: 100,
            description:
              'You swallow your rage like a professional. It tastes like betrayal and break room coffee. Your therapist is going to hear about this. But you survive another day in the corporate machine.',
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
    description:
      'You step into the elevator and realize you\'re alone with the CEO. The person who runs the entire company. You\'ve never spoken to them. You don\'t even think they know your floor exists. It\'s a 30-floor ride. The silence is deafening. They\'re looking at their phone. Do you say something? This could be your big break or your biggest cringe.',
    category: 'career',
    probability: 0.1,
    cooldown: 8,
    conditions: [{ type: 'hasCareerId', value: true }],
    choices: [
      {
        id: 'elevator_pitch',
        text: 'Hit them with your elevator pitch. Literally.',
        hint: 'High risk, high reward',
        outcomes: [
          {
            weight: 25,
            description:
              'You deliver a smooth 30-second pitch about your brilliant idea. The CEO is genuinely interested. They ask you to email them directly. You have the CEO\'s email. This is the corporate equivalent of finding a golden ticket.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'You open your mouth and what comes out is a nervous word-salad about "synergizing the paradigm of the thing." The CEO nods politely and sprints out of the elevator. You wish the floor would swallow you.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You start talking and the elevator stops between floors. You\'re stuck. With the CEO. For 45 minutes. By the time you\'re rescued, you\'ve bonded over a shared hatred of the building\'s infrastructure. Accidental networking.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'elevator_silence',
        text: 'Stare at your phone and pray for the ride to end.',
        outcomes: [
          {
            weight: 100,
            description:
              'Thirty floors of weapons-grade awkward silence. You both stare at your phones like your lives depend on it. When the doors open, you power-walk in opposite directions. You had one shot and you spent it examining a blank lock screen.',
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
    description:
      'You just hit "Reply All" on a company-wide email. The message was meant for your work friend and it says, and I quote: "This meeting could have been an email. Also, is it just me or does the new VP look like a thumb?" 847 employees just received this. Your phone is exploding.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    oneTime: true,
    conditions: [{ type: 'hasCareerId', value: true }],
    choices: [
      {
        id: 'reply_all_apologize',
        text: 'Send an immediate, groveling apology. Also reply-all.',
        outcomes: [
          {
            weight: 40,
            description:
              'Your apology triggers a chain of reply-alls. The thread becomes a company-wide meme. IT eventually shuts down the entire email system. Somehow, you\'re not the worst thing that happened — the IT crash is bigger news.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'The VP sees the apology and knows it\'s about them. They DO look like a thumb, but they didn\'t need to be told via company email. You\'re called into a meeting that feels like a tribunal.',
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
        text: 'Own it. "I said what I said."',
        hint: 'Career suicide or legend status?',
        outcomes: [
          {
            weight: 30,
            description:
              'The office secretly agrees: the VP DOES look like a thumb, and that meeting SHOULD have been an email. You become a folk hero. People slip supportive notes under your door. The resistance has a leader.',
            effects: [
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'career_performance', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description:
              'Bold strategy. It does not pay off. You\'re put on a "Performance Improvement Plan" which everyone knows is code for "we\'re building a legal case to fire you." Start updating that resume.',
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
    description:
      'Someone parked in YOUR spot. The one you\'ve been parking in for two years. It\'s not technically assigned, but everyone KNOWS it\'s your spot. It\'s an unwritten rule. And some new hire in a BMW just broke it. You\'re now parked three rows back like a peasant. This will not stand.',
    category: 'career',
    probability: 0.15,
    cooldown: 6,
    conditions: [{ type: 'hasCareerId', value: true }],
    choices: [
      {
        id: 'parking_note',
        text: 'Leave a note on their windshield. Passive-aggressive, of course.',
        outcomes: [
          {
            weight: 50,
            description:
              'Your note reads: "Nice parking. Did you get your license from a cereal box?" The new hire moves their car and never parks there again. Victory. Passive aggression: 1, New Hire: 0.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The new hire is the CEO\'s nephew. Your note is shown to the entire management team. "Did you get your license from a cereal box" is now your catchphrase, and not in a good way.',
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
        text: 'Start arriving 30 minutes early to claim your spot.',
        outcomes: [
          {
            weight: 70,
            description:
              'You reclaim your spot through sheer punctuality. Your boss notices you\'re always early now and thinks you\'re a go-getter. The parking war accidentally improved your career. Sun Tzu would be proud.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The new hire starts arriving even earlier. It escalates. By the end of the week, you\'re both in the parking lot at 5 AM, glaring at each other. This has gone too far but neither of you will blink.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'parking_let_go',
        text: 'Find a new spot. There are bigger battles.',
        outcomes: [
          {
            weight: 100,
            description:
              'You park three rows back and walk the extra 30 feet. It\'s fine. Totally fine. You only think about it four times a day. The new spot actually has shade, which is objectively better. Not that you care. Because you\'ve moved on. Completely.',
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
    description:
      'The office thermostat has become a battleground. One faction wants it at 68 degrees (the freezing people huddled in blankets). The other wants it at 75 (the sweating people with desk fans). Someone keeps changing it when no one\'s looking. Today, you caught the perpetrator in the act. It\'s time to take a side.',
    category: 'career',
    probability: 0.18,
    cooldown: 4,
    conditions: [{ type: 'hasCareerId', value: true }],
    choices: [
      {
        id: 'thermostat_cold',
        text: 'Team Cold. Crank it down to 66.',
        outcomes: [
          {
            weight: 50,
            description:
              'Half the office loves you. The other half is wearing parkas indoors. Someone brings a space heater and blows a fuse. The building manager sends an all-staff email about "thermostat protocols." You started a constitutional crisis.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You find your desk covered in sticky notes: "SOME OF US HAVE CIRCULATION PROBLEMS." The thermostat war has gone guerrilla. Someone put a lock on the thermostat. Nobody knows who has the key.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
              { type: 'career_satisfaction', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'thermostat_hot',
        text: 'Team Warm. Push it up to 76.',
        outcomes: [
          {
            weight: 50,
            description:
              'The warm faction celebrates. The cold faction retaliates by opening every window in January. Now it\'s simultaneously 76 inside and 30 outside. Everyone is miserable in a new, creative way.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your boss is Team Cold. You did not know this. They know you changed it because the thermostat has a camera now. (When did THAT happen?) Your next performance review includes "thermostat incidents." Plural.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'thermostat_diplomatic',
        text: 'Propose a compromise: 72 degrees. Become the Office Diplomat.',
        outcomes: [
          {
            weight: 60,
            description:
              'Your diplomatic solution satisfies nobody, which means it satisfies everybody equally. This is peak compromise. You\'re elected unofficial "temperature czar." It\'s a meaningless title and you love it.',
            effects: [
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_performance', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Both sides see you as a traitor. You\'ve managed to unite the entire office — against you. At least they stopped fighting each other. You\'re a martyr for office climate control.',
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
    description:
      'The monitors are screaming. Your patient — a sweet 72-year-old named Harold who just showed you photos of his grandchildren — is crashing. The team is looking at you. Every second counts. Your hands are shaking but your training kicks in. This is the moment they warned you about in med school.',
    category: 'career',
    probability: 0.15,
    cooldown: 6,
    requiredCareerId: 'medicine',
    conditions: [{ type: 'hasCareerId', value: 'medicine' }],
    choices: [
      {
        id: 'code_blue_heroic',
        text: 'Throw everything you have at saving Harold.',
        outcomes: [
          {
            weight: 40,
            description:
              'Against all odds, Harold pulls through. He grabs your hand and whispers "Thank you." You hold it together until you get to the supply closet, where you ugly-cry for ten minutes. This is why you became a doctor.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'You did everything right. Textbook. But Harold is gone. Time of death: 3:47 PM. You have to tell his family. No amount of training prepares you for the way his wife says "Oh." Just "Oh." You drive home in silence.',
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
        text: 'Follow protocol exactly. No heroics.',
        outcomes: [
          {
            weight: 45,
            description:
              'Protocol works. Harold stabilizes. Your attending nods approvingly — the highest form of praise in medicine. "Good work." Two words that fill your entire soul.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description:
              'Protocol wasn\'t enough. Harold needed something unconventional. The attending says "You did everything right," but the words ring hollow. Right isn\'t the same as enough.',
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
    description:
      'Everyone said the patient was terminal. Every test, every scan, every specialist. But something in your gut said otherwise. You pushed for one more test — the one nobody thought was relevant. And there it is on the screen. It\'s treatable. It\'s actually treatable. The room goes quiet.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    requiredCareerId: 'medicine',
    conditions: [{ type: 'hasCareerId', value: 'medicine' }],
    choices: [
      {
        id: 'miracle_pursue',
        text: 'Push for the experimental treatment. Trust your instinct.',
        outcomes: [
          {
            weight: 55,
            description:
              'The treatment works. The patient walks out of the hospital three weeks later. The local news does a story. Your mother calls crying. Your attending buys you a coffee — in medicine, that\'s basically a medal of honor.',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
              { type: 'career_satisfaction', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'The treatment doesn\'t work. Your colleagues give you the "at least you tried" speech, which is medical code for "I told you so." The hospital board questions your judgment. You question everything.',
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
        text: 'Recommend palliative care. Don\'t give false hope.',
        outcomes: [
          {
            weight: 100,
            description:
              'You play it safe. The patient passes peacefully. Months later, a colleague at another hospital publishes a paper about the exact treatment you considered. It works. The "what if" haunts you at 3 AM for years.',
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
    description:
      'You\'ve been served. A malpractice lawsuit. The patient claims you misdiagnosed them, even though you followed standard protocol. Their lawyer looks like a shark in a suit. The hospital\'s legal team looks like goldfish. Your entire career might hinge on what happens next.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    requiredCareerId: 'medicine',
    conditions: [{ type: 'hasCareerId', value: 'medicine' }],
    choices: [
      {
        id: 'malpractice_fight',
        text: 'Fight the suit aggressively. Your record is clean.',
        outcomes: [
          {
            weight: 55,
            description:
              'Your documentation is airtight. Every note, every timestamp, every witness backs you up. The suit is dismissed. Your reputation is intact, though you now document bathroom breaks out of sheer paranoia.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'The case drags on for months. Even though you did nothing wrong, the stress is unbearable. You win, but at what cost? Your hair is grayer and your trust in humanity is significantly diminished.',
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
        text: 'Settle out of court. Make it go away.',
        outcomes: [
          {
            weight: 60,
            description:
              'The settlement costs money but saves your sanity. Nobody admits fault. The legal system at work: nobody\'s happy, which means it\'s "fair." Your insurance premiums go up. So does your whiskey consumption.',
            effects: [
              { type: 'money', value: -8000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Settling is seen as an admission of guilt. Colleagues whisper. Patients ask more questions. The internet never forgets. Your Yelp page gets review-bombed by people who weren\'t even your patients.',
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
    description:
      'Something weird is going around. Half the ER is presenting with the same symptoms and nobody can figure out what it is. The CDC might be getting a call. You\'re exhausted, under-caffeinated, and somehow you\'re the most senior person on the floor right now. The next few hours could define your career.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    requiredCareerId: 'medicine',
    conditions: [{ type: 'hasCareerId', value: 'medicine' }],
    choices: [
      {
        id: 'epidemic_lead',
        text: 'Take charge. Coordinate the response yourself.',
        outcomes: [
          {
            weight: 45,
            description:
              'Your leadership contains the outbreak. Turns out it was contaminated food from a new restaurant. You\'re quoted in the local news as the "hero doctor." Your mom prints the article and frames it.',
            effects: [
              { type: 'career_performance', value: 18, operation: 'add' },
              { type: 'reputation', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description:
              'The outbreak was bigger than anyone expected. You tried your best but the hospital is overwhelmed. You haven\'t slept in 36 hours and you\'re running on vending machine coffee and existential dread. You survive it, but barely.',
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
        text: 'Call the CDC immediately. This is above your pay grade.',
        outcomes: [
          {
            weight: 60,
            description:
              'Smart call. The CDC team arrives and handles it. You\'re commended for recognizing the situation and not trying to be a hero. Sometimes the bravest thing is knowing your limits.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'The CDC rolls in and it turns out it was just a really bad flu season. They\'re annoyed you called them for the sniffles. Your hospital gets a reputation for panicking. You do not live this down.',
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
    description:
      'A famous actor has been admitted to your hospital under a fake name: "John Smith." They\'re here for something embarrassing and the hospital administrator is hovering like a helicopter parent. The paparazzi are outside. Your coworkers are taking selfies. And you\'re the attending physician. No pressure.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    requiredCareerId: 'medicine',
    conditions: [{ type: 'hasCareerId', value: 'medicine' }],
    choices: [
      {
        id: 'celeb_patient_professional',
        text: 'Treat them like any other patient. Professionalism first.',
        outcomes: [
          {
            weight: 60,
            description:
              'The celebrity is so grateful for being treated normally that they send a six-figure donation to the hospital in your name. You also get a signed headshot, which your coworkers are insanely jealous about.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'money', value: 2000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You treat them normally, they recover, they leave. No thank you, no donation, nothing. Just another patient who happened to be in a Marvel movie. Medicine is thankless even when the patient is famous.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'celeb_patient_leak',
        text: 'Maybe let it "accidentally" slip to the press...',
        hint: 'HIPAA exists for a reason',
        outcomes: [
          {
            weight: 20,
            description:
              'A tabloid pays you $5,000 for the scoop. It feels great for about 24 hours until the hospital starts an investigation. HIPAA violations are no joke. The legal team would like a word.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'career_performance', value: -25, operation: 'add' },
              { type: 'reputation', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 80,
            description:
              'You get caught immediately. HIPAA violations carry fines up to $50,000 PER incident. Your medical license is under review. All for a celebrity\'s embarrassing rash. Was it worth it? (It was not.)',
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
    description:
      'A pharmaceutical rep corners you in the hallway. They\'re attractive, suspiciously well-dressed, and carrying a briefcase that probably costs more than your car. They want you to prescribe their new drug — it\'s "revolutionary." They\'re offering an all-expenses-paid "medical conference" in Hawaii. The air quotes around "conference" are audible.',
    category: 'career',
    probability: 0.15,
    cooldown: 8,
    requiredCareerId: 'medicine',
    conditions: [{ type: 'hasCareerId', value: 'medicine' }],
    choices: [
      {
        id: 'pharma_accept',
        text: 'Hawaii sounds nice. "Tell me more about this conference."',
        hint: 'Ethics are expensive',
        outcomes: [
          {
            weight: 40,
            description:
              'The "conference" is three days of beach, one hour of pharmaceutical propaganda, and an envelope of "consulting fees." You return tanned and morally compromised. The drug actually works though, so... gray area?',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'A journalist investigating pharmaceutical kickbacks discovers your Hawaii trip. It makes the evening news. Your face is on screen next to the words "doctors taking bribes." Your mother calls. She is not proud.',
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
        text: '"I\'ll prescribe what\'s best for my patients, thanks."',
        outcomes: [
          {
            weight: 70,
            description:
              'The rep\'s smile freezes. They leave. You feel morally superior for the rest of the day. Your bank account feels nothing. But your integrity is intact, and you sleep great at night.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The rep takes it personally and bad-mouths you to the hospital board. Apparently they golf together. Doing the right thing has never felt so punishing.',
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
    description:
      'You\'re on hour 32 of a 36-hour shift. You\'ve consumed enough coffee to kill a horse. The hallway is pulsing slightly. A nurse just asked if you\'re okay and you responded in a language you don\'t speak. There are four more hours to go. Your body is filing for divorce from your brain.',
    category: 'career',
    probability: 0.2,
    cooldown: 4,
    requiredCareerId: 'medicine',
    conditions: [{ type: 'hasCareerId', value: 'medicine' }],
    choices: [
      {
        id: 'shift_power_through',
        text: 'More coffee. You can do this. Sleep is for the weak.',
        outcomes: [
          {
            weight: 40,
            description:
              'You make it. Barely. Your final patient diagnosis is somehow your best work — your sleep-deprived brain connected dots your rested brain never would have. You collapse in the on-call room and sleep for 14 hours straight.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'health', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'You mix up two patient charts. Nobody is harmed, but the near-miss makes your blood run cold. The attending catches the error and gives you the most terrifying calm lecture of your life. You are sent home immediately.',
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
        text: 'Sneak a power nap in the supply closet.',
        outcomes: [
          {
            weight: 50,
            description:
              'Fifteen glorious minutes of sleep between the gauze and the bedpans. You emerge refreshed enough to function. Nobody noticed. The supply closet is now your favorite room in the hospital.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_performance', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'A code is called while you\'re asleep. They find you in the supply closet, drooling on a box of latex gloves. You sprint to the emergency looking like you lost a fight with a storage room. Professional.',
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
    description:
      'You\'ve been reviewing patient data obsessively for weeks. Something doesn\'t add up. You run the numbers again at 2 AM in your kitchen, surrounded by empty coffee cups and medical journals. Then you see it — a pattern nobody else noticed. If you\'re right, this could change how a disease is treated. If you\'re wrong, you wasted a month of sleep.',
    category: 'career',
    probability: 0.1,
    cooldown: 16,
    oneTime: true,
    requiredCareerId: 'medicine',
    conditions: [{ type: 'hasCareerId', value: 'medicine' }],
    choices: [
      {
        id: 'breakthrough_publish',
        text: 'Write the paper. Submit it to a top journal.',
        outcomes: [
          {
            weight: 40,
            description:
              'Published. Peer-reviewed. Cited. Your research paper changes treatment protocols nationwide. You get invited to speak at conferences. Your colleagues look at you differently now. This is your legacy.',
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
            description:
              'The paper is published but nobody reads it. Academic publishing is a black hole where good ideas go to be cited by three people and then forgotten. Your mom reads it though. She didn\'t understand any of it but she\'s very proud.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'The journal rejects it. A reviewer calls your methodology "interesting but flawed," which is academic for "this is garbage." You consider whether it\'s too late to go into real estate.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'breakthrough_sit_on_it',
        text: 'Need more data. Don\'t publish until you\'re 100% sure.',
        outcomes: [
          {
            weight: 100,
            description:
              'You spend six more months gathering data. By the time you\'re confident, a team at Johns Hopkins publishes the same finding. They beat you by two weeks. Two. Weeks. Perfectionism is the enemy of achievement, they say. They\'re right.',
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
    description:
      'You\'ve been working this case for months. Late nights, cold pizza, enough legal briefs to wallpaper your apartment. Today the jury came back. The foreman is not making eye contact with your client. That\'s never a good sign. The verdict is in, and it\'s not going your way.',
    category: 'career',
    probability: 0.18,
    cooldown: 6,
    requiredCareerId: 'law',
    conditions: [{ type: 'hasCareerId', value: 'law' }],
    choices: [
      {
        id: 'case_appeal',
        text: 'File an appeal. This isn\'t over.',
        outcomes: [
          {
            weight: 35,
            description:
              'The appeal succeeds on a technicality. The original judge made an error in their instructions. You didn\'t win on merit, but a W is a W. Your client hugs you like you\'re their firstborn.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'money', value: 3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 65,
            description:
              'The appeal is denied. You spent another three months and $10,000 on a losing battle. Your client now hates you AND is broke. You drink alone at the bar where all the other lawyers drink alone. It\'s very on brand.',
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
        text: 'Accept the loss. Learn from it. Move on.',
        outcomes: [
          {
            weight: 60,
            description:
              'You take the L with grace. Your colleagues respect how you handled it. In law, how you lose matters almost as much as how you win. You come back stronger on the next case.',
            effects: [
              { type: 'career_performance', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'The loss eats at you. Your next three cases suffer because you\'re second-guessing every decision. The confidence is shaken. Law is a mental game and your mental game is broken.',
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
    title: 'Justice Is Blind (And Apparently For Sale)',
    description:
      'Something is off about this judge. Their rulings make no legal sense. They sustain objections before the other side finishes speaking. And you just saw the opposing counsel hand the judge an envelope in the parking garage. The justice system is supposed to be above this. Supposed to be.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    requiredCareerId: 'law',
    conditions: [{ type: 'hasCareerId', value: 'law' }],
    choices: [
      {
        id: 'judge_report',
        text: 'Report it to the judicial ethics board. Burn it down.',
        outcomes: [
          {
            weight: 40,
            description:
              'The investigation confirms the corruption. The judge is removed from the bench. You\'re hailed as a champion of justice. The firm uses your story in their recruitment brochures. You\'re basically Atticus Finch.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'reputation', value: 20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'The investigation goes nowhere. "Insufficient evidence." The judge knows you reported them. Every case you have in their court from now on is going to be an uphill battle on a mountain of ice. You made a powerful enemy.',
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
        text: 'Look the other way. You have cases to win.',
        outcomes: [
          {
            weight: 50,
            description:
              'You keep your head down and your win rate up. The corrupt judge eventually gets caught by someone else. You feel relief mixed with guilt. Mostly relief.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The corruption spreads. More cases are affected. When it eventually blows up, people ask why nobody reported it sooner. You study your shoes very intently during that conversation.',
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
    description:
      'A celebrity\'s "people" have called. Their client — a household name — has gotten into "a situation" and needs representation yesterday. The retainer alone would pay off your student loans. The catch: the case is going to be a media circus, and the celebrity is... difficult.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    requiredCareerId: 'law',
    conditions: [{ type: 'hasCareerId', value: 'law' }],
    choices: [
      {
        id: 'celeb_client_accept',
        text: 'Take the case. Fame and fortune await.',
        outcomes: [
          {
            weight: 40,
            description:
              'You win the case. The celebrity thanks you on live TV. Your phone doesn\'t stop ringing with new clients. You\'re the go-to lawyer for rich people with poor judgment. Business is booming.',
            effects: [
              { type: 'money', value: 10000, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The celebrity fires you mid-trial for "not being aggressive enough" and hires a TV lawyer instead. You\'re replaced by someone who was on Dancing with the Stars. The retainer check clears though.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'The media destroys you. Paparazzi outside your office. Death threats from fans. Your personal life is dissected on Twitter. You win the case but lose your anonymity and a good chunk of your sanity.',
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
        text: '"I appreciate the offer, but I\'ll pass."',
        outcomes: [
          {
            weight: 100,
            description:
              'You watch the case unfold on TV from your quiet office. The lawyer who took it is having a visible breakdown on court steps. You sip your coffee and feel genuinely at peace with your decision.',
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
    description:
      'A single parent with no money needs legal representation against their landlord who\'s illegally evicting them. It\'s a clear-cut case — the landlord is absolutely in the wrong. But the firm wants billable hours, not charity cases. Your heart says take it. Your bank account says don\'t.',
    category: 'career',
    probability: 0.15,
    cooldown: 8,
    requiredCareerId: 'law',
    conditions: [{ type: 'hasCareerId', value: 'law' }],
    choices: [
      {
        id: 'pro_bono_take',
        text: 'Take the case pro bono. Be the lawyer you wanted to be.',
        outcomes: [
          {
            weight: 55,
            description:
              'You win the case easily. The family keeps their home. The parent cries and names their next pet after you. The firm grudgingly admits it\'s good PR. You remember why you went to law school in the first place.',
            effects: [
              { type: 'reputation', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'career_satisfaction', value: 15, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'The case is more complicated than expected and takes months. Your billable hours suffer. The partner gives you the "we admire your idealism, but..." speech. Idealism doesn\'t make partner.',
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
        text: 'Refer them to legal aid. You can\'t save everyone.',
        outcomes: [
          {
            weight: 100,
            description:
              'You give them the number for legal aid and go back to your corporate case involving two millionaires fighting over a boat. You bill 12 hours and feel absolutely nothing. This is what success looks like, apparently.',
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
    description:
      'While reviewing discovery documents, you find something that doesn\'t belong. The opposing counsel submitted evidence that you\'re 90% sure was fabricated. The timestamps don\'t match. The formatting is wrong. Someone manufactured this. If you\'re right, it could blow the case wide open. If you\'re wrong, you\'ll look paranoid.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    requiredCareerId: 'law',
    conditions: [{ type: 'hasCareerId', value: 'law' }],
    choices: [
      {
        id: 'evidence_challenge',
        text: 'Challenge the evidence in open court. Dramatic reveal.',
        hint: 'Perry Mason moment incoming',
        outcomes: [
          {
            weight: 45,
            description:
              'Your forensic analysis is devastating. The judge holds opposing counsel in contempt. The case is dismissed. You stand in that courtroom like a legal god. Someone in the gallery whispers "holy crap." Same.',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description:
              'The evidence was actually legitimate — it just had bad formatting. You accused a respected attorney of fraud in open court. The judge is not amused. Your client is not amused. The only thing more dead than your theory is your professional reputation in this courthouse.',
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
        text: 'Investigate quietly. Get the facts before going nuclear.',
        outcomes: [
          {
            weight: 60,
            description:
              'Your quiet investigation confirms the tampering. You present it to the judge in chambers with ironclad proof. The opposing counsel is disbarred. You\'re methodical, thorough, and terrifying. Exactly what a lawyer should be.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Your investigation takes too long. By the time you have proof, the verdict is already in. The tampered evidence influenced the outcome. Justice delayed is justice denied, and you feel responsible.',
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
    description:
      'You walk into the courtroom and see who\'s sitting at the opposing table. Your law school rival. The one who beat you for Law Review editor. The one who dated your ex. The one who has a BETTER SUIT than you. This case just became very, very personal.',
    category: 'career',
    probability: 0.15,
    cooldown: 8,
    requiredCareerId: 'law',
    conditions: [{ type: 'hasCareerId', value: 'law' }],
    choices: [
      {
        id: 'rival_destroy',
        text: 'Make this personal. Crush them with everything you have.',
        outcomes: [
          {
            weight: 45,
            description:
              'You litigate with the fury of a thousand scorned law students. Your closing argument makes the jury weep. You win. Your rival shakes your hand with a grip that could crush coal into diamonds. It feels incredible.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description:
              'Your emotions cloud your judgment. You overreach, the judge sustains the objections, and your rival picks your arguments apart with surgical precision. Losing is bad. Losing to your nemesis is existential.',
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
        text: 'Keep it professional. Win on the merits, not the grudge.',
        outcomes: [
          {
            weight: 55,
            description:
              'You keep your cool and deliver a case built on solid law, not petty rivalry. Win or lose, the judge commends both attorneys. Your rival buys you a drink afterward. You might not be friends, but you respect each other. Growth.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'Your rival does NOT keep it professional. They make snide comments, object to everything, and bring up law school in front of the jury. The judge calls them out. You win by default of being the adult in the room.',
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
    description:
      'Your client just did the one thing you told them not to do: they stood up in the middle of the trial and screamed at the opposing counsel. Specifically, they called them a word that made the court reporter gasp. The judge\'s gavel is about to become a weapon. You have approximately three seconds to contain this situation.',
    category: 'career',
    probability: 0.12,
    cooldown: 8,
    requiredCareerId: 'law',
    conditions: [{ type: 'hasCareerId', value: 'law' }],
    choices: [
      {
        id: 'outburst_control',
        text: 'Physically restrain your client and beg for mercy from the judge.',
        outcomes: [
          {
            weight: 50,
            description:
              'You tackle your client back into their seat with surprising agility for someone in a suit. The judge appreciates your efforts and only holds your client in contempt. You are not disbarred today. Small victories.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your client shoves you away and keeps screaming. The bailiff gets involved. It\'s a whole scene. The jury is staring in open-mouthed horror. This case is over. Your career might be too. At least it\'ll make a great story at the bar.',
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
        text: '"Your Honor, my client\'s passion demonstrates the depth of this injustice..."',
        hint: 'Spin it like a top',
        outcomes: [
          {
            weight: 30,
            description:
              'The jury... buys it? Your improvisational spin turns a disaster into a moment of raw authenticity. Several jurors are nodding. The judge looks skeptical but allows it. You are the greatest lawyer or the greatest con artist. Maybe both.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description:
              'The judge is not fooled. "Counsel, control your client or I\'ll hold you BOTH in contempt." You sit down quietly and wonder if it\'s too late to go to medical school.',
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
    description:
      'The partners are meeting this week to decide promotions. You\'re on the shortlist. So is the person you share an office with. There\'s only one spot. The politics are thick enough to cut with a letter opener. Someone left a book called "The Art of War" on your desk. You\'re not sure if it\'s a gift or a threat.',
    category: 'career',
    probability: 0.12,
    cooldown: 12,
    requiredCareerId: 'law',
    conditions: [{ type: 'hasCareerId', value: 'law' }],
    choices: [
      {
        id: 'partner_campaign',
        text: 'Campaign aggressively. Wine and dine every partner.',
        outcomes: [
          {
            weight: 40,
            description:
              'Your campaign works. You make partner. The champagne flows, your name goes on the letterhead, and your rival has to call you "partner" now. The taste of success is sweet and slightly petty.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'career_satisfaction', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'Your aggressive campaigning comes off as desperate. The partners choose your rival. Worse, they tell you to "be patient," which in law firm speak means "it\'s never happening." You have a lot of feelings about this.',
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
        text: 'Let your work speak for itself. Heads down, results up.',
        outcomes: [
          {
            weight: 50,
            description:
              'Your billable hours, win rate, and client satisfaction scores are impeccable. The numbers don\'t lie. You make partner on pure merit. It\'s less dramatic than a campaign, but the victory is cleaner.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'money', value: 4000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'career_satisfaction', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your work is excellent but your rival golfed with the senior partner every weekend. They make partner. Merit doesn\'t beat golf. Nobody tells you this in law school.',
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
    description:
      'You built a side project app on a weekend. A silly little thing — it tells you which potato you look like based on a selfie. Someone on TikTok posted about it. It has 500,000 downloads. Your servers are on fire (figuratively). Your boss at your actual job is calling (literally). The potato app might be worth more than your day job.',
    category: 'career',
    probability: 0.1,
    cooldown: 16,
    oneTime: true,
    requiredCareerId: 'tech',
    conditions: [{ type: 'hasCareerId', value: 'tech' }],
    choices: [
      {
        id: 'viral_quit_job',
        text: 'Quit your job and go full potato app.',
        hint: 'The startup dream is calling',
        outcomes: [
          {
            weight: 35,
            description:
              'The potato app becomes a legitimate business. You get VC funding, hire a team, and within a year you\'re valued at $10 million. All because people want to know if they\'re a Russet or a Yukon Gold. This timeline is insane.',
            effects: [
              { type: 'money', value: 20000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'career_satisfaction', value: 20, operation: 'add' },
            ],
          },
          {
            weight: 65,
            description:
              'The app peaks at 2 million downloads, then dies overnight when a competitor launches "Which Bread Are You?" You quit your job for a potato. A POTATO. You\'re now unemployed and your LinkedIn says "CEO of PotatoFace Inc." which is not the flex you thought it was.',
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
        text: 'Keep your day job. Run the app on the side.',
        outcomes: [
          {
            weight: 60,
            description:
              'Smart move. The app generates passive income for a year before fading. You made $15,000 from potatoes and kept your salary. The safe choice was the right choice. Boring, but financially sound.',
            effects: [
              { type: 'money', value: 8000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Maintaining both is killing you. You\'re deploying hotfixes at 2 AM and showing up to standup meetings like a zombie. Your day job performance tanks. Your boss asks if you\'re "committed to the team." You\'re committed to nothing but caffeine.',
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
    description:
      'Your phone is screaming. PagerDuty. Slack. Email. Text from your boss. Text from your boss\'s boss. The production servers are down. All of them. Users are rioting on Twitter. The status page says "All Systems Operational" because of course the status page is also broken. You open your laptop in bed, wearing nothing but boxers and existential dread.',
    category: 'career',
    probability: 0.18,
    cooldown: 4,
    requiredCareerId: 'tech',
    conditions: [{ type: 'hasCareerId', value: 'tech' }],
    choices: [
      {
        id: 'crash_hero_fix',
        text: 'Jump in and fix it yourself. You\'ve got this.',
        outcomes: [
          {
            weight: 45,
            description:
              'You find the bug in 20 minutes. A single misplaced semicolon brought down the entire platform. You deploy the fix, servers come back, and you\'re a hero. They\'ll name a conference room after you. Just kidding, you get a Slack emoji.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description:
              'You push a "fix" that makes it worse. The servers are now not just down — they\'re actively corrupting data. Your fix has a fix that needs a fix. It\'s 6 AM and you\'re still in your boxers. The incident report is going to be legendary.',
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
        text: 'Escalate to the on-call team. This is above your pay grade.',
        outcomes: [
          {
            weight: 50,
            description:
              'The senior engineer fixes it in five minutes. They\'re annoyed at being woken up but that\'s literally what on-call is for. You go back to sleep with the knowledge that someone else\'s problem was never your problem.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The on-call engineer doesn\'t answer. Their backup doesn\'t answer. THEIR backup is on vacation. Congratulations: by process of elimination, you ARE the on-call team. Time to put on pants.',
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
    description:
      'A FAANG company has made an offer to acquire your startup. The number has more zeros than your SAT score. The founders are ecstatic. The engineers are nervous. Your stock options might actually be worth something for the first time ever. The catch: everyone knows what happens to acquired startups. "Integration" is just corporate for "absorbed and destroyed."',
    category: 'career',
    probability: 0.1,
    cooldown: 16,
    requiredCareerId: 'tech',
    conditions: [{ type: 'hasCareerId', value: 'tech' }],
    choices: [
      {
        id: 'acquisition_support',
        text: 'Support the acquisition. Cash out those options.',
        outcomes: [
          {
            weight: 50,
            description:
              'The acquisition goes through. Your stock options vest into real money — more money than you\'ve ever seen. You now work at a company with free lunch, therapy dogs, and meetings about meetings. The startup dream is dead but the bank account is very much alive.',
            effects: [
              { type: 'money', value: 15000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The acquisition includes an "integration period" where your entire product is shut down and your team is dispersed across the company. Everything you built is deleted. You\'re rich but dead inside. Tech is great.',
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
        text: 'Fight the acquisition. Independence or death.',
        outcomes: [
          {
            weight: 40,
            description:
              'The startup stays independent and thrives. Two years later, it\'s worth 10x the acquisition offer. You were right all along. Your coworkers who wanted to sell are now very quiet.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'career_satisfaction', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'The startup runs out of money six months later. The acquisition offer was the lifeboat and you threw it overboard. Your stock options are worth exactly nothing. You could have been rich. Instead you have "principles."',
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
    description:
      'Management just demoed an AI tool that does 80% of what you do. The demo was impressive. Your coworkers clapped. You clapped too, but your hands were sweating. The VP of Engineering said "this will augment our team," which everyone knows is Silicon Valley for "start your severance countdown."',
    category: 'career',
    probability: 0.15,
    cooldown: 8,
    requiredCareerId: 'tech',
    conditions: [{ type: 'hasCareerId', value: 'tech' }],
    choices: [
      {
        id: 'ai_embrace',
        text: 'Become the AI expert. If you can\'t beat them, prompt them.',
        outcomes: [
          {
            weight: 55,
            description:
              'You become the team\'s AI specialist. You\'re now 3x more productive and management thinks you\'re irreplaceable. The AI does the boring stuff, you do the creative stuff. This is actually... great?',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 5, operation: 'add' },
              { type: 'career_satisfaction', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'You lean so hard into AI that when it makes mistakes, they\'re YOUR mistakes. A hallucinated API call takes down a client\'s system. "But the AI wrote it!" is not the defense you think it is.',
            effects: [
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'ai_resist',
        text: 'Refuse to use AI tools. Real programmers write real code.',
        outcomes: [
          {
            weight: 25,
            description:
              'Your hand-crafted code has fewer bugs than the AI-assisted stuff. Management notices. There\'s still a place for artisan, small-batch, organic, free-range code. For now.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 75,
            description:
              'Your output is 3x slower than everyone using AI. You\'re the only one typing actual code while everyone else is prompting at light speed. You\'re the blacksmith in the Industrial Revolution. Brave, principled, and unemployable.',
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
    description:
      'The company hackathon is this weekend. 48 hours of coding, energy drinks, and slowly descending into madness. The winning team gets $10,000 and bragging rights. The losing teams get pizza and regret. Your team of four has an idea that\'s either genius or insane. There is no in-between.',
    category: 'career',
    probability: 0.15,
    cooldown: 8,
    requiredCareerId: 'tech',
    conditions: [{ type: 'hasCareerId', value: 'tech' }],
    choices: [
      {
        id: 'hackathon_all_in',
        text: 'Go all in. Sleep is for people who don\'t want to win.',
        outcomes: [
          {
            weight: 40,
            description:
              'Your team wins. The demo is flawless. The judges are genuinely impressed. $10,000 split four ways plus the right to be insufferable about it. Your GitHub contribution graph is going to look insane.',
            effects: [
              { type: 'money', value: 2500, operation: 'add' },
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'Your project crashes during the demo. On stage. In front of everyone. The error message contains a swear word from a debug statement you forgot to remove. You don\'t win but you do get a meme named after you.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'reputation', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'You place second. The team that won built basically the same thing but with a nicer UI. Substance lost to style. Again. Welcome to tech.',
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
        text: 'Take it easy. Build something fun, not something stressful.',
        outcomes: [
          {
            weight: 100,
            description:
              'Your team builds a Slack bot that randomly compliments people. It doesn\'t win, but it gets deployed company-wide. Every day, someone in the office gets told they\'re "an absolute legend" by a robot. You\'ve improved morale more than any hackathon winner.',
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
    description:
      'You submitted a pull request and the code review comments are... extensive. 47 comments. Some are helpful. Some are nitpicks about variable naming. One just says "lol" with no further context. The senior engineer left a comment essay longer than your actual code. Your PR has become a public execution.',
    category: 'career',
    probability: 0.2,
    cooldown: 4,
    requiredCareerId: 'tech',
    conditions: [{ type: 'hasCareerId', value: 'tech' }],
    choices: [
      {
        id: 'review_fix_all',
        text: 'Address every single comment. Even the "lol" one.',
        outcomes: [
          {
            weight: 60,
            description:
              'You fix everything. Your revised PR is a masterpiece. The senior engineer approves with a single thumbs-up emoji — the highest honor in code review culture. You learned more in one PR than in a semester of school.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You fix everything and submit v2. 23 new comments. Some of the fixes introduced new issues. You\'re on v5 now. The PR has been open so long it has its own git history. You will never escape this review.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'review_push_back',
        text: 'Push back on the nitpicks. "This is a style preference, not a bug."',
        outcomes: [
          {
            weight: 40,
            description:
              'The senior engineer respects your pushback. A healthy debate ensues. You both learn something. This is how code review is supposed to work. Rare, but beautiful.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'The senior engineer takes it personally. Every future PR you submit gets 3x more comments. You\'ve started a code review cold war. Tabs vs. spaces has nothing on this rivalry.',
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
    description:
      'A critical bug in production is traced back to YOUR commit. From two months ago. It\'s been silently corrupting data this whole time. Nobody caught it in code review, QA, or staging. But somehow, it\'s still your fault. The Slack thread has 200 messages and counting. Your name is mentioned in most of them.',
    category: 'career',
    probability: 0.15,
    cooldown: 6,
    requiredCareerId: 'tech',
    conditions: [{ type: 'hasCareerId', value: 'tech' }],
    choices: [
      {
        id: 'bug_own_it',
        text: 'Own it publicly. "My bad. Here\'s the fix."',
        outcomes: [
          {
            weight: 55,
            description:
              'Your honesty and quick fix earn respect. The blameless post-mortem turns into a process improvement discussion. New tests are added. The codebase is better because of your mistake. A bug gave birth to best practices.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'You own it, fix it, and write the post-mortem. Despite your honesty, the executive team wants a "Root Cause Analysis" meeting, which is just a public blame session with PowerPoint. Your name is on every slide.',
            effects: [
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'bug_blame_process',
        text: '"This is a process failure. Where was QA? Code review?"',
        outcomes: [
          {
            weight: 40,
            description:
              'Your deflection actually raises valid points. Why DID nobody catch it? The process was broken. New testing requirements are implemented. You\'re somehow the hero of this disaster.',
            effects: [
              { type: 'career_performance', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'Nobody buys the deflection. The QA team, code reviewers, and your manager all simultaneously throw you under the bus. Turns out the one thing that unites people is a shared scapegoat. You\'re it.',
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
    description:
      'Your company just installed a beer fridge, ping pong table, and a "nap pod." The CEO announced unlimited PTO (that nobody actually takes) and renamed all the conference rooms after Marvel characters. They\'re calling it "culture." You\'re calling it a substitute for paying people fairly.',
    category: 'career',
    probability: 0.12,
    cooldown: 8,
    requiredCareerId: 'tech',
    conditions: [{ type: 'hasCareerId', value: 'tech' }],
    choices: [
      {
        id: 'bro_embrace',
        text: 'Embrace the culture. Start wearing company merch.',
        outcomes: [
          {
            weight: 50,
            description:
              'You drink the Kool-Aid (literally, it\'s kombucha on tap). The ping pong skills improve. You make friends. The culture is cringe but the people are genuine. You actually enjoy coming to work. Stockholm syndrome or genuine happiness? Hard to tell.',
            effects: [
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You become "that person" who spends more time at the ping pong table than their desk. Your performance slips. Turns out "unlimited PTO" still gets noticed when you take three weeks off. The beer fridge was a trap.',
            effects: [
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'bro_push_change',
        text: '"How about instead of a beer fridge, we get market-rate salaries?"',
        outcomes: [
          {
            weight: 35,
            description:
              'Your blunt feedback reaches the board. Salaries are adjusted. The beer fridge stays too, so everybody wins. You\'re the office hero who asked what everyone was thinking.',
            effects: [
              { type: 'money', value: 2000, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 65,
            description:
              'The CEO labels you "not a culture fit," which is tech speak for "you questioned the ping pong table and now you\'re on thin ice." The beer fridge remains. Your raise does not.',
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
    description:
      'A song you recorded in your bedroom six months ago just blew up on TikTok. People are making dance videos to it. Influencers are lip-syncing it. Your Spotify streams went from 47 to 4.7 million overnight. Your phone won\'t stop buzzing. You\'re famous for a song you almost deleted.',
    category: 'career',
    probability: 0.1,
    cooldown: 16,
    oneTime: true,
    requiredCareerId: 'music',
    conditions: [{ type: 'hasCareerId', value: 'music' }],
    choices: [
      {
        id: 'viral_capitalize',
        text: 'Strike while the iron is hot. Release everything you\'ve got.',
        outcomes: [
          {
            weight: 45,
            description:
              'You drop an EP that rides the wave perfectly. Streams keep climbing. Labels are calling. You\'re getting paid for music. MUSIC. The thing they told you would never pay the bills. Mom was wrong. (Don\'t tell her that.)',
            effects: [
              { type: 'money', value: 10000, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description:
              'You rush-release songs that aren\'t ready. The follow-up is mid. The internet is brutal: "They\'re a one-song artist." The wave crashes as fast as it rose. Those 15 minutes of fame were... short.',
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
        text: 'Stay cool. Don\'t rush. Make the next project perfect.',
        outcomes: [
          {
            weight: 50,
            description:
              'You take your time and release a polished album that silences doubters. Critics praise your "artistic patience." You\'re not just viral — you\'re respected. That\'s the real currency.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'career_satisfaction', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'By the time your album drops, the moment has passed. The internet moved on to a kid playing a kazoo. Your "artistic patience" was just missing the window. Timing is everything and yours was off.',
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
    description:
      'A record label wants to sign you. THE record label. The one your heroes were on. They\'re offering a deal: $50,000 advance, studio time, marketing support, tour backing. The catch? They own your masters, take 80% of royalties, and you can\'t release anything without their approval. The contract is 73 pages long. Your lawyer friend said "yikes."',
    category: 'career',
    probability: 0.1,
    cooldown: 16,
    requiredCareerId: 'music',
    conditions: [{ type: 'hasCareerId', value: 'music' }],
    choices: [
      {
        id: 'deal_sign',
        text: 'Sign the deal. This is your shot.',
        outcomes: [
          {
            weight: 40,
            description:
              'The label machine works. Your music is everywhere. Radio, playlists, commercials. You\'re making money (well, the label is making money, you\'re making some). But you\'re living the dream. The fine print will be future you\'s problem.',
            effects: [
              { type: 'money', value: 15000, operation: 'add' },
              { type: 'reputation', value: 12, operation: 'add' },
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'The label shelves your album because it doesn\'t "fit the brand." You can\'t release it yourself because you signed your rights away. You\'re contractually obligated to do nothing. You\'re getting Taylor Swift flashbacks and you don\'t even have Taylor Swift money.',
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
        text: '"Let me counter-offer. I keep my masters."',
        hint: 'Channel your inner Taylor Swift',
        outcomes: [
          {
            weight: 30,
            description:
              'They respect the hustle and agree to a 60/40 split with you keeping your masters. Your lawyer friend now says "nice." This is the deal artists dream about.',
            effects: [
              { type: 'money', value: 10000, operation: 'add' },
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'career_satisfaction', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description:
              'The label laughs and moves on to the next artist. There are a thousand musicians behind you who\'d sign without reading. You kept your principles and your masters. You also kept your day job.',
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
    description:
      'Your last show was electric. The crowd was amazing. And now backstage is... complicated. An extremely attractive fan has somehow gotten past security and is declaring their undying love for you. They have your lyrics tattooed on their arm. They know your birthday, your mother\'s name, and your childhood pet. This is flattering and terrifying in equal measure.',
    category: 'career',
    probability: 0.15,
    cooldown: 8,
    requiredCareerId: 'music',
    conditions: [{ type: 'hasCareerId', value: 'music' }],
    choices: [
      {
        id: 'groupie_entertain',
        text: 'Be flattered. Hang out with them.',
        hint: 'What could go wrong?',
        outcomes: [
          {
            weight: 30,
            description:
              'They\'re actually a really cool person who just happens to be an enthusiastic fan. You exchange numbers. They become a genuine friend. The music industry is lonely and real connections are rare.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 70,
            description:
              'They post everything on social media. Every conversation. Every photo. Comments you made off-hand are now quotes. You wake up to a fan fiction about yourself. It\'s well-written, which somehow makes it worse. Boundaries: learn them.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'groupie_security',
        text: 'Call security. Politely but firmly.',
        outcomes: [
          {
            weight: 60,
            description:
              'Security escorts them out. You feel bad for approximately ten seconds. Then your manager tells you that last year a musician let a fan backstage and ended up with a stalker for three years. You made the right call.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'The fan posts a tearful video about how you "rejected them." It goes viral. Your fanbase is divided: half understand, half think you\'re arrogant. You can\'t win in the court of public opinion.',
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
    description:
      'Your first song was a hit. Your second... wasn\'t. Neither was the third. Or the fourth. People keep requesting the hit at shows. Only the hit. Comments on your new music: "bring back the old sound." You\'re growing as an artist but the audience wants you to stay the same forever. The one-hit-wonder fear is real and it\'s eating you alive.',
    category: 'career',
    probability: 0.15,
    cooldown: 8,
    requiredCareerId: 'music',
    conditions: [{ type: 'hasCareerId', value: 'music' }],
    choices: [
      {
        id: 'wonder_reinvent',
        text: 'Completely reinvent your sound. Evolution or death.',
        outcomes: [
          {
            weight: 40,
            description:
              'The new sound is polarizing but ultimately wins people over. Critics call it "brave" and "mature." You shed the old fans and gain new ones. You\'re not a one-hit wonder — you\'re an artist with range.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'career_satisfaction', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'The reinvention alienates your existing fans and fails to attract new ones. You\'re now a no-hit wonder. At least when you were a one-hit wonder, you had the one hit. Should\'ve played it safe.',
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
        text: 'Give the people what they want. Make Hit 2.0.',
        outcomes: [
          {
            weight: 50,
            description:
              'Hit 2.0 works. It\'s similar enough to satisfy fans but different enough to not be a carbon copy. You\'re now a two-hit wonder, which is technically 100% improvement.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Critics call it "derivative" and "a transparent attempt to recapture lightning." They\'re right. You know they\'re right. But the streaming numbers are decent, so who\'s the real critic? (Them. They are.)',
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
    description:
      'A music blog is accusing you of plagiarizing your latest song. They posted a side-by-side comparison with a obscure 1970s track. It... does sound similar. Like, really similar. You\'ve never heard the original in your life (you think?), but music subconscious is a weird thing. The internet jury has already decided you\'re guilty.',
    category: 'career',
    probability: 0.12,
    cooldown: 12,
    requiredCareerId: 'music',
    conditions: [{ type: 'hasCareerId', value: 'music' }],
    choices: [
      {
        id: 'plagiarism_deny',
        text: 'Deny everything. "I\'ve never heard that song in my life."',
        outcomes: [
          {
            weight: 40,
            description:
              'Music experts analyze both songs and conclude it\'s coincidence. Turns out there are only so many note combinations. You\'re cleared. The blog issues a correction that nobody reads.',
            effects: [
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'Someone finds a photo of you wearing a t-shirt of the band you "never heard of." The internet detectives are relentless. The lawsuit costs more than the song ever earned.',
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
        text: 'Give writing credit to the original artist. Cover your bases.',
        outcomes: [
          {
            weight: 70,
            description:
              'The original artist is thrilled — they haven\'t gotten royalties since 1978. They share your song, their fans discover you, and the controversy becomes a collaboration. The internet wanted drama and got a feel-good story instead.',
            effects: [
              { type: 'money', value: -1000, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'Giving credit is seen as an admission of guilt. The original artist\'s estate demands more than credit — they want money. Lots of it. Your goodwill gesture opened a legal Pandora\'s box.',
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
    description:
      'You\'ve been booked at a major music festival. THE festival. The one with the flower crowns and $18 lemonade. You\'re on the second smallest stage, but you\'re ON A STAGE. At a FESTIVAL. Sound check was iffy, there\'s a weird buzz in the monitors, and you\'re performing at the same time as a headliner. But this is your moment.',
    category: 'career',
    probability: 0.12,
    cooldown: 8,
    requiredCareerId: 'music',
    conditions: [{ type: 'hasCareerId', value: 'music' }],
    choices: [
      {
        id: 'festival_give_everything',
        text: 'Give the performance of your life. Leave it all on stage.',
        outcomes: [
          {
            weight: 45,
            description:
              'You play like your life depends on it. By the third song, people from the headliner\'s crowd are drifting over. By the end, your stage is packed. A music journalist in the crowd tweets "just witnessed a star being born." Your phone dies from notifications.',
            effects: [
              { type: 'career_performance', value: 18, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
              { type: 'career_satisfaction', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'Great performance. Decent crowd. But the headliner absolutely killed it at the same time and nobody is talking about your set. You were a tree falling in a forest while everyone was watching a fireworks show.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'The weird buzz in the monitors turns into a full equipment failure. Your guitar cuts out mid-song. You finish the set acapella, which is either incredibly punk rock or incredibly sad depending on who you ask.',
            effects: [
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'festival_safe_set',
        text: 'Play it safe. Stick to the hits, don\'t take risks.',
        outcomes: [
          {
            weight: 100,
            description:
              'You play a solid set. Nobody is blown away, nobody is disappointed. The crowd politely claps. You sell some merch. It\'s fine. Just fine. You\'ll always wonder what would have happened if you went for it.',
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
    description:
      'You\'ve been staring at a blank page for three weeks. No lyrics. No melodies. Nothing. You\'ve tried every trick: writing in the shower, writing drunk, writing at 4 AM. You bought a new guitar thinking that would help. It didn\'t. The well is dry. The muse has left the building. You\'re starting to wonder if you ever actually had talent or if it was all luck.',
    category: 'career',
    probability: 0.2,
    cooldown: 6,
    requiredCareerId: 'music',
    conditions: [{ type: 'hasCareerId', value: 'music' }],
    choices: [
      {
        id: 'block_force',
        text: 'Force it. Write something, anything, even if it\'s terrible.',
        outcomes: [
          {
            weight: 40,
            description:
              'You write the worst song of your life. Then you rewrite it. Then again. By the fifth draft, there\'s something there. It\'s rough, but there\'s a spark. The block breaks. Turns out creativity is a muscle, not a miracle.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'Forcing it produces garbage. You know it\'s garbage. Your producer knows it\'s garbage. Even the studio cat is judging you. The block wins this round.',
            effects: [
              { type: 'career_satisfaction', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'block_break',
        text: 'Step away from music entirely. Go live life for a while.',
        outcomes: [
          {
            weight: 55,
            description:
              'You travel, read, talk to strangers, eat at weird restaurants. Two months later, you write the best song of your career in one sitting. Turns out you can\'t write about life if you\'re not living it.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'career_satisfaction', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'money', value: -1000, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'The break turns into six months. Then a year. You start to wonder if you\'re "taking a break" or "quitting." The line is thinner than you thought. Your instrument is dusty and so is your ambition.',
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
    title: 'Creative Differences (Code for "We Hate Each Other")',
    description:
      'The band meeting starts civil and ends with a guitarist throwing a shoe. "Creative differences" is the official story, but the truth is: the drummer wants to go jazz, the bassist is starting a solo project, and the guitarist just compared your vocals to "a cat in a blender." The band is fracturing and you\'re standing in the rubble.',
    category: 'career',
    probability: 0.12,
    cooldown: 12,
    requiredCareerId: 'music',
    conditions: [{ type: 'hasCareerId', value: 'music' }],
    choices: [
      {
        id: 'band_save',
        text: 'Try to hold the band together. You\'re nothing without each other.',
        outcomes: [
          {
            weight: 35,
            description:
              'A tearful group therapy session (paid for by your manager) brings everyone back together. The conflict fuels the best album you\'ve ever made. Art through suffering — the oldest trick in the book.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 65,
            description:
              'You can\'t fix what\'s broken. The band releases a "hiatus" announcement that everyone knows means "breakup." Fans cry. You cry. The drummer is already posting jazz content. It\'s really over.',
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
        text: 'Go solo. You were the talent anyway.',
        outcomes: [
          {
            weight: 40,
            description:
              'Solo career takes off. Turns out you were the star all along and the band was holding you back. Your former bandmates watch your success from their day jobs. Sweet, petty vindication.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'money', value: 3000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'Going solo reveals that you needed the band more than you thought. Your music sounds empty without them. Reviews are "disappointing." The guitarist was right — you can\'t do this alone. The cat-in-a-blender comment still hurts though.',
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
    description:
      'A health inspector just walked through the front door. They\'re carrying a clipboard and the expression of someone who has seen things. Your kitchen is... okay. Not great. That mysterious stain in the corner has been there since before you started. The walk-in fridge makes a noise that\'s either normal or a cry for help. Here we go.',
    category: 'career',
    probability: 0.18,
    cooldown: 6,
    requiredCareerId: 'food',
    conditions: [{ type: 'hasCareerId', value: 'food' }],
    choices: [
      {
        id: 'inspector_honest',
        text: 'Give them the full tour. Nothing to hide (except that stain).',
        outcomes: [
          {
            weight: 45,
            description:
              'You pass with flying colors. 96 out of 100. The inspector is impressed. They say your kitchen is "one of the cleanest they\'ve seen this month," which in food inspection language means you\'re basically a hospital. The grade gets posted proudly in the window.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'You pass, barely. 76 out of 100. The report mentions "minor violations" and "areas for improvement." The grade is technically passing but it\'s the food equivalent of a C-minus. You frame it anyway.',
            effects: [
              { type: 'career_performance', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 20,
            description:
              'The inspector finds things you didn\'t even know existed. An entire ecosystem was developing behind the ice machine. You get a temporary closure notice. The walk-in fridge was, in fact, crying for help.',
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
        text: '"Can I offer you a complimentary meal while you inspect?"',
        hint: 'This is either hospitality or bribery',
        outcomes: [
          {
            weight: 40,
            description:
              'The inspector accepts (they\'re human). Your food is so good that their inspection notes become noticeably more lenient after the appetizer. You pass with an 89. The power of a good risotto.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'money', value: -100, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'The inspector is NOT amused. "Are you trying to bribe a government official?" No! You were being hospitable! They inspect with extra scrutiny now. Every speck of dust is documented. Final score: 62. Ouch.',
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
    description:
      'A notorious food critic is sitting at table seven. You know because your server is trembling and the hostess googled them. This person destroyed three restaurants with a single review last year. Their blog has more followers than your entire customer base. They\'ve ordered the tasting menu. Every dish that goes out could make or break you.',
    category: 'career',
    probability: 0.12,
    cooldown: 8,
    requiredCareerId: 'food',
    conditions: [{ type: 'hasCareerId', value: 'food' }],
    choices: [
      {
        id: 'critic_best_work',
        text: 'Cook the meal of your life. Every plate must be perfect.',
        outcomes: [
          {
            weight: 40,
            description:
              'The review drops a week later: "A revelation. Every bite told a story." FOUR STARS. Reservations triple overnight. You print the review and tape it above your station. This is the greatest day of your career.',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The review is mixed: "Ambitious but inconsistent. The entree was sublime; the dessert was an afterthought." Two and a half stars. It\'s not bad but "not bad" from this critic is basically an insult.',
            effects: [
              { type: 'career_performance', value: 3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'The pressure gets to you. You oversalt the main course. The critic\'s face when they taste it is a masterclass in controlled disgust. The review is one word: "Unfortunate." Your kitchen staff won\'t make eye contact with you for a week.',
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
        text: 'Treat them like any other customer. Don\'t overthink it.',
        outcomes: [
          {
            weight: 60,
            description:
              'Your normal food IS your best food. The review praises the "unpretentious excellence" and "honest cooking." Three stars. You didn\'t try to be fancy and that\'s exactly what they wanted.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'money', value: 2000, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Your normal food is... normal. The review doesn\'t mention you at all. You\'re not even worth criticizing. Somehow, being ignored is worse than being roasted.',
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
    description:
      'Someone left a towel on the flat top. The towel is now on fire. The fire is now on the wall. The wall is now concerned. Your sous chef is screaming. The new line cook is frozen in place. The fire extinguisher is buried behind six months of delivery boxes. This escalated quickly.',
    category: 'career',
    probability: 0.12,
    cooldown: 12,
    requiredCareerId: 'food',
    conditions: [{ type: 'hasCareerId', value: 'food' }],
    choices: [
      {
        id: 'fire_handle_it',
        text: 'Grab the fire extinguisher. You\'ve trained for this. (Sort of.)',
        outcomes: [
          {
            weight: 55,
            description:
              'You put the fire out before the sprinklers activate. The kitchen is covered in extinguisher foam but intact. The dining room doesn\'t even know anything happened. You feel like an action hero in an apron.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'The sprinklers go off. Water cascading onto the grill, into the food, onto the guests. The dining room looks like a waterpark. Dinner service is cancelled. Insurance will cover it, but the Yelp reviews will be brutal.',
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
        text: 'Evacuate immediately. Safety first, kitchen second.',
        outcomes: [
          {
            weight: 70,
            description:
              'Smart call. The fire department arrives and handles it professionally. Nobody is hurt. The kitchen has minor damage. You get insurance money and a month of sympathy reservations from people who want to "support the local restaurant that had the fire."',
            effects: [
              { type: 'money', value: -1000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The fire was tiny. Like, really tiny. The fire department shows up to find a smoldering towel and a fully evacuated restaurant. The firefighters look at you like you called 911 for a candle. The diners want refunds.',
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
    description:
      'A legitimate A-list celebrity just walked into your restaurant. No reservation. With an entourage of eight. Your hostess is hyperventilating. The kitchen is not prepped for this kind of pressure. If you impress them, one Instagram post could change everything. If you don\'t... well, celebrities also post about bad experiences.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    requiredCareerId: 'food',
    conditions: [{ type: 'hasCareerId', value: 'food' }],
    choices: [
      {
        id: 'celeb_diner_special',
        text: 'Create a custom off-menu tasting experience for them.',
        outcomes: [
          {
            weight: 45,
            description:
              'The celebrity posts a photo of your food with the caption "BEST MEAL EVER" and a location tag. Your phone crashes from notifications. Reservations are booked out three months. One Instagram story just did more than five years of marketing.',
            effects: [
              { type: 'money', value: 8000, operation: 'add' },
              { type: 'reputation', value: 20, operation: 'add' },
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description:
              'The celebrity has seventeen allergies you weren\'t told about. The custom menu is a minefield. They eat three bites, say "it\'s fine," and leave. No post. No mention. "Fine" from a celebrity is a death sentence. Your hostess is still hyperventilating.',
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
        text: 'Serve them the regular menu. Your food speaks for itself.',
        outcomes: [
          {
            weight: 50,
            description:
              'They order like normal people and leave a 40% tip. No social media post, but their bodyguard quietly tells you "they said it was really good." High praise from someone who eats at Michelin stars nightly.',
            effects: [
              { type: 'money', value: 1000, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'They order the cheapest thing on the menu, split it nine ways, and tip 10%. Celebrities are not what movies promised you. The entourage asks for separate checks.',
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
    description:
      'It\'s Saturday night. The restaurant is packed. And your entire line crew just walked out. All of them. At once. Something about "wages" and "respect" and "not being screamed at." You\'re standing alone in a kitchen designed for six people with 40 orders on the board. The printer is still going. Ticket after ticket after ticket.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    requiredCareerId: 'food',
    conditions: [{ type: 'hasCareerId', value: 'food' }],
    choices: [
      {
        id: 'walkout_solo',
        text: 'Cook everything yourself. You are the kitchen now.',
        outcomes: [
          {
            weight: 35,
            description:
              'You cook like a possessed demon for four straight hours. Every dish goes out. Not perfect, but out. When the last table is served, you collapse on the floor. Your server finds you lying among fallen tickets like a fallen soldier. Legendary. Your staff begs to come back — they heard about your solo performance.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 65,
            description:
              'You try. God, you try. But one person can\'t run six stations. Wait times hit two hours. Tables walk out. Yelp reviews pour in: "worst service of my life." You\'re standing in a kitchen surrounded by burning pans and broken dreams.',
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
        text: 'Close the kitchen. Apologize to guests. Live to fight tomorrow.',
        outcomes: [
          {
            weight: 60,
            description:
              'You close the kitchen, comp everyone\'s drinks, and personally apologize to every table. Most people are understanding. You use the crisis to restructure pay and hire better. Sometimes you have to hit rock bottom to rebuild right.',
            effects: [
              { type: 'money', value: -2000, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Word gets out that your entire staff quit on a Saturday night. The local food scene treats it as a scandal. "What kind of kitchen do you run?" becomes the question everyone asks. Rebuilding reputation takes longer than rebuilding a team.',
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
    description:
      'A food trend is sweeping the internet: a ridiculous fusion dish that has no business existing. Think: sushi burritos, ramen burgers, or pickle pizza. Your customers are requesting it. Your chef instincts say "absolutely not." Your business instincts say "this could bring in a LOT of money." Your dignity is negotiable.',
    category: 'career',
    probability: 0.15,
    cooldown: 6,
    requiredCareerId: 'food',
    conditions: [{ type: 'hasCareerId', value: 'food' }],
    choices: [
      {
        id: 'trend_embrace',
        text: 'Add it to the menu. Give the people what they want.',
        outcomes: [
          {
            weight: 50,
            description:
              'It\'s a smash hit. People line up for it. Food bloggers post about it. It\'s ugly, it\'s weird, and it\'s the best-selling item on your menu. You die a little inside every time you make it, but the register sings.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The trend dies two weeks later. You\'re stuck with $2,000 of specialty ingredients nobody wants anymore. Your menu has a weird item that confuses new customers. Chasing trends is a fool\'s game.',
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
        text: '"This is a serious kitchen. We don\'t do gimmicks."',
        outcomes: [
          {
            weight: 50,
            description:
              'Your regulars respect the integrity. You become known as "the place that doesn\'t chase trends," which is somehow a flex. The food purists love you. You lose the TikTok crowd but gain the people who actually eat food, not photograph it.',
            effects: [
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The restaurant down the street makes it. They go viral. They\'re packed every night while you serve three tables. Integrity doesn\'t pay the electricity bill. Maybe gimmicks aren\'t so bad.',
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
    description:
      'A customer sends a dish back. Then another. Then a THIRD customer sends back the same dish. Your sous chef is looking at you nervously. You taste the sauce and... oh no. Someone used sugar instead of salt. An entire batch of sauce is ruined. There are 20 more orders on that dish. It\'s the Saturday special. There is no backup sauce.',
    category: 'career',
    probability: 0.18,
    cooldown: 6,
    requiredCareerId: 'food',
    conditions: [{ type: 'hasCareerId', value: 'food' }],
    choices: [
      {
        id: 'ramsay_fix_fast',
        text: 'Make a new sauce from scratch. Speed-run it.',
        outcomes: [
          {
            weight: 45,
            description:
              'You whip up a new batch in fifteen minutes that\'s somehow BETTER than the original. Pressure creates diamonds, and tonight you\'re a diamond covered in bechamel. Service recovers. You are that chef.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description:
              'The rushed sauce is... different. Not bad, but not the same. Regulars notice. "Did you change the recipe?" is a question that haunts you. The sugar-salt perpetrator is never identified. Trust nobody.',
            effects: [
              { type: 'career_performance', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'ramsay_86_it',
        text: '86 the dish. Pull it from the menu tonight.',
        outcomes: [
          {
            weight: 60,
            description:
              'You 86 the special and offer a replacement that you can actually stand behind. Most tables are fine with it. The servers handle the communication beautifully. Crisis managed, dignity intact.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'money', value: -500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'People came specifically for that dish. A table of eight walks out. Another demands a discount. Pulling your signature dish on a Saturday night is like a musician refusing to play their hit song. The crowd is not happy.',
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
    description:
      'Your former sous chef just opened a restaurant across town. Their signature dish? YOUR recipe. The one you spent two years developing. The one with the secret ingredient nobody is supposed to know about. They even kept the same NAME. The audacity is so extreme it\'s almost admirable. Almost.',
    category: 'career',
    probability: 0.1,
    cooldown: 12,
    requiredCareerId: 'food',
    conditions: [{ type: 'hasCareerId', value: 'food' }],
    choices: [
      {
        id: 'recipe_legal',
        text: 'Lawyer up. Sue them for everything.',
        outcomes: [
          {
            weight: 35,
            description:
              'Your lawyer proves the recipe theft with internal documents and timestamps. The former sous chef settles out of court and has to rebrand their entire menu. Justice is served. Literally.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 65,
            description:
              'Turns out you can\'t copyright a recipe. Your lawyer charges you $10,000 to tell you this. The former sous chef is thriving across town with YOUR dish and there\'s nothing you can do about it. The legal system and the culinary world have failed you simultaneously.',
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
        text: 'Create an even BETTER version. Innovate past the theft.',
        outcomes: [
          {
            weight: 55,
            description:
              'Fury fuels creativity. Your version 2.0 is so good it makes the stolen recipe taste like cafeteria food. Food bloggers do side-by-side comparisons and yours wins every time. Revenge is a dish best served elevated.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'You try to innovate but the anger clouds your creativity. Everything you make tastes like resentment. The stolen version is getting better reviews than your new version. The betrayal has broken something in you.',
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
