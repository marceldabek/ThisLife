// ============================================================
// ThisLife — Career Events Part 2
// Crime, Sports, Business, Politics, Social Media
// Funny, absurd, sometimes dark. Each career feels distinct.
// ============================================================

import { GameEvent } from '../../types/events';

export const CAREER_EVENTS_PART2: GameEvent[] = [

  // ============================================================
  // CRIMINAL CAREER (requiredCareerId: 'criminalCareer')
  // ============================================================

  {
    id: 'career_criminal_undercover_cop',
    title: 'New Guy Seems... Off',
    description:
      'The crew\'s newest member keeps asking weirdly specific questions like "So where exactly do you store the stolen goods?" and "Could you repeat that into my chest area?" He also keeps excusing himself to "call his mom." His mom must be very needy.',
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
        text: 'Confront him directly. Ask to see his badge.',
        hint: 'Bold move, could backfire spectacularly',
        outcomes: [
          {
            weight: 40,
            description:
              'He stammers, turns beet red, and literally sprints out the door. His wire falls out of his shirt on the way. The crew gives you a standing ovation. You\'re basically Sherlock Holmes but for crime.',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'Turns out he\'s not a cop. He\'s just genuinely that awkward. Now the crew thinks you\'re paranoid and he won\'t stop giving you hurt puppy eyes during heists.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'reputation', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'He IS a cop, and your confrontation triggers a premature raid. Flashbangs, helicopters, the whole production. You escape through a sewer grate like a rat, which is fitting.',
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
        text: 'Feed him hilariously wrong information.',
        hint: 'If he\'s a cop, waste their resources',
        outcomes: [
          {
            weight: 55,
            description:
              'You tell him the big heist is at a Chuck E. Cheese on Thursday. If he IS a cop, there\'s about to be a very confused SWAT team surrounding a children\'s pizza restaurant.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'He writes everything down in a little notebook. A LITTLE NOTEBOOK. Even your crew is starting to notice. "Does... does that guy have a notebook?" Morale is shaken.',
            effects: [
              { type: 'career_satisfaction', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'criminal_undercover_ignore',
        text: 'Not your problem. Keep your head down.',
        hint: 'Safe, but the crew might suffer',
        outcomes: [
          {
            weight: 60,
            description:
              'He disappears after two weeks. Either he was a cop who got reassigned, or he was just a weird dude. The mystery will haunt you forever. You lie awake at night wondering.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'A month later, half the crew gets arrested. You dodged it because you never said anything incriminating near notebook boy. Sometimes cowardice IS the winning strategy.',
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
    description:
      'You accidentally wandered into rival gang territory while looking for a good taco truck. The tacos ARE amazing here, but three very large gentlemen with matching tattoos are now walking toward you with the energy of disappointed parents.',
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
        text: 'Stand your ground. You\'re here for tacos, not trouble.',
        hint: 'Respect is everything on the streets',
        outcomes: [
          {
            weight: 35,
            description:
              'Against all odds, your fearless taco commitment earns their respect. They even recommend the al pastor. You leave with a full stomach and an unlikely ceasefire.',
            effects: [
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'They politely but firmly explain that this block is theirs and you should leave. They let you take your tacos to go, which is honestly more courtesy than expected.',
            effects: [
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'money', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'Turns out "standing your ground" near a taco truck was the wrong move. You get jumped. They take your wallet AND your tacos. The tacos hurt more.',
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
        text: 'Tactical retreat. The tacos aren\'t worth dying for.',
        hint: 'Live to eat tacos another day',
        outcomes: [
          {
            weight: 70,
            description:
              'You speed-walk away with the casual urgency of someone who definitely isn\'t fleeing for their life. Your crew never finds out. Your dignity is the only casualty.',
            effects: [
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'Someone from your crew sees you sprinting away from a taco truck. The nickname "Taco Runner" follows you for months. Your reputation takes a hit, but your kneecaps are intact.',
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
    description:
      'Word on the street is someone in the crew has been talking to the police. Suspicion falls on three people: the guy who keeps "accidentally" leaving his phone on record, the one whose cousin is a detective, and you. Wait, you?',
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
        text: 'Launch your own investigation. Channel your inner detective.',
        hint: 'Find the rat before they find you',
        outcomes: [
          {
            weight: 45,
            description:
              'Through brilliant deduction (you checked his phone), you find the snitch. It was detective-cousin guy. The crew is grateful. You get promoted to "head of internal affairs," which is a wild title for a criminal organization.',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'Your investigation is inconclusive. You just made everyone paranoid. Three crew members quit, one moved to Costa Rica, and the actual snitch is still here, snitching away.',
            effects: [
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'While investigating, you accidentally discover the boss is skimming money. Now you know too much. The snitch problem is the least of your worries.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'career_satisfaction', value: -12, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'criminal_snitch_deflect',
        text: 'Point fingers at someone else before they point at you.',
        hint: 'Classic misdirection, morally bankrupt',
        outcomes: [
          {
            weight: 50,
            description:
              'You successfully blame the quiet guy who nobody likes. He gets "dealt with" (banned from the group chat). Was he the snitch? Probably not. Do you feel guilty? Also probably not.',
            effects: [
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The person you accused has a rock-solid alibi. He was literally in jail during the alleged snitching. Now everyone\'s looking at you again. Smooth move.',
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
    description:
      'A contact slides you intel on a job so big it could set you up for life. A cash-heavy business, minimal security, owners on vacation. The plan is almost too perfect, which in your experience means something will go catastrophically wrong.',
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
        text: 'All in. This is what you\'ve been training for.',
        hint: 'Life-changing money or life-changing prison time',
        outcomes: [
          {
            weight: 30,
            description:
              'It goes flawlessly. Like a movie, except you\'re not attractive enough to be the lead. You walk away with more money than you\'ve ever seen. You celebrate by buying a really nice sandwich.',
            effects: [
              { type: 'money', value: 50000, operation: 'add' },
              { type: 'career_performance', value: 25, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
              { type: 'reputation', value: 20, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The job goes mostly right but the getaway car won\'t start. You end up escaping on a stolen bicycle. You got the money, but pedaling away from a crime scene in a ski mask is not the vibe you were going for.',
            effects: [
              { type: 'money', value: 20000, operation: 'add' },
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The "cash-heavy business" was a front for an even scarier criminal organization. You tried to rob the mob. They\'re not angry, they\'re impressed. They\'re also definitely going to find you.',
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
        hint: 'Wisdom or cowardice? You decide.',
        outcomes: [
          {
            weight: 50,
            description:
              'The crew does the job without you. It was a setup. Everyone gets arrested. You watch the news from your couch eating cereal, feeling like the smartest person alive.',
            effects: [
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'career_performance', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The crew does the job without you. It goes perfectly. They\'re rich now. They bought matching Rolexes. You were not included in the Rolex purchase. Regret tastes like off-brand cereal.',
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
    description:
      'A guy who calls himself "The Accountant" (his real name is Gerald) approaches you with a money laundering scheme involving a chain of laundromats. He thinks the irony is hilarious. Nobody else does.',
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
        text: 'Invest in Gerald\'s laundromat empire.',
        hint: 'Steady income if it works, federal charges if it doesn\'t',
        outcomes: [
          {
            weight: 40,
            description:
              'Gerald is actually a financial genius. The laundromats are thriving, the money is clean, and you\'re making passive income. Gerald sends you quarterly reports in a leather binder. He\'s disturbingly professional for a criminal.',
            effects: [
              { type: 'money', value: 8000, operation: 'add' },
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The IRS starts sniffing around. Gerald panics and flees to Belize, taking a significant chunk of your investment with him. He sends you a postcard that says "Sorry, lol." You frame it out of spite.',
            effects: [
              { type: 'money', value: -5000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'career_performance', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'Plot twist: the laundromats become legitimately successful. You\'re now a semi-legal small business owner. Your mom would be so proud if she knew. She must never know.',
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
        text: 'Pass. You don\'t trust a criminal named Gerald.',
        outcomes: [
          {
            weight: 100,
            description:
              'Gerald is heartbroken. He made a whole PowerPoint presentation and everything. Slide 7 had clip art. You feel a twinge of guilt but ultimately decide that "laundering money through laundromats" is too on-the-nose.',
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
    description:
      'An old associate who\'s currently serving 10-15 reaches out from prison. He needs a "small favor" on the outside. The favor involves a storage locker, a very specific burner phone, and "absolutely no questions." Nothing suspicious about that.',
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
        text: 'Do the favor. Loyalty means something in this business.',
        hint: 'He\'ll owe you big when he gets out',
        outcomes: [
          {
            weight: 40,
            description:
              'The storage locker contained his grandmother\'s antique collection. He just wanted someone to move it to climate-controlled storage. You feel silly for expecting something sinister. His grandma makes you cookies.',
            effects: [
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The storage locker definitely did not contain antiques. You don\'t know what was in those vacuum-sealed bags and you don\'t want to know. But your associate now owes you a life debt, and in this business, that\'s currency.',
            effects: [
              { type: 'money', value: 3000, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'career_performance', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'Cops were watching the storage locker. You lead them on a car chase through a residential neighborhood at 12 mph because you\'re driving a Honda Civic and panicking. You escape, barely, through a Wendy\'s drive-through.',
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
        text: 'Sorry, you don\'t do favors for people in cages.',
        hint: 'Safe but you\'ll burn a bridge',
        outcomes: [
          {
            weight: 60,
            description:
              'He takes it surprisingly well. "No worries, I get it." The emotional maturity of a man serving 10-15 for armed robbery is honestly inspiring.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'He does NOT take it well. From prison, he somehow manages to ruin your Yelp rating on a business you don\'t even own. The pettiness is almost admirable.',
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
    description:
      'The crew wants you to prove your loyalty with an initiation ritual. Based on the ominous preparations, it involves either a dangerous mission, a painful tattoo, or karaoke. Honestly, you\'re most scared of the karaoke.',
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
        text: 'Whatever it takes. You\'re committed.',
        hint: 'Full commitment, full consequences',
        outcomes: [
          {
            weight: 40,
            description:
              'It was karaoke. You butchered "Bohemian Rhapsody" in front of hardened criminals. They loved it. You\'re in. The face tattoo was apparently a joke. Thank God.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'It was NOT karaoke. You had to rob a gas station with a water gun. It worked, somehow. You\'re in, but you now have a criminal record over $47 in register cash. The crew gave you a certificate. It\'s laminated.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'money', value: 47, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'It was the tattoo. On your neck. Of a dolphin. A dolphin with a knife. You\'re in, but at what cost? Every job interview for the rest of your life will require a turtleneck.',
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
        text: 'Refuse. You\'re not singing karaoke for anyone.',
        hint: 'Might cost you your position',
        outcomes: [
          {
            weight: 50,
            description:
              'They respect your boundaries. Just kidding, you\'re out. They take your crew jacket and everything. It was a nice jacket, too. Leather, with your name embroidered on it.',
            effects: [
              { type: 'career_performance', value: -20, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The boss admires your spine. "This one\'s got backbone." You skip initiation and get in on reputation alone. Everyone else is furious. They all had to do the dolphin tattoo.',
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
    description:
      'Things have been escalating with a rival crew for months. Someone keyed someone\'s car, someone stole someone\'s parking spot, someone put a horse head in someone\'s bed (a toy horse, but still). Now both sides are mobilizing for a full-scale turf war.',
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
        text: 'Ride or die. Time to defend your turf.',
        hint: 'Glory or the hospital',
        outcomes: [
          {
            weight: 35,
            description:
              'Your crew wins decisively. The rival gang retreats to the next neighborhood. You got punched twice but landed a legendary haymaker that everyone\'s talking about. They call it "The Fist Heard Round the Block."',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 18, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'It\'s a draw. Both sides trash-talk each other from opposite sides of the street for two hours until someone calls the cops and everyone scatters. The neighborhood HOA sends both gangs a strongly-worded letter.',
            effects: [
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You get absolutely rocked. Hospital visit, stitches, the whole package. The nurse asks what happened and you say "I fell." She doesn\'t believe you. Nobody has ever believed that excuse.',
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
        text: 'Propose a sit-down. You watch too much Godfather for this.',
        hint: 'Diplomacy in the underworld is rare but possible',
        outcomes: [
          {
            weight: 45,
            description:
              'Both bosses agree to split the territory. You brokered peace like a criminal Henry Kissinger. The treaty is written on a napkin from Denny\'s. It\'s the most important napkin in organized crime history.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description:
              'The sit-down devolves into a food fight at Denny\'s. You got hit with a Grand Slam breakfast. Both crews are now banned from Denny\'s. The turf war continues, now fueled by syrup-based grudges.',
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
    description:
      'During practice, your knee makes a sound like someone stepping on a bag of Doritos. The entire gym goes silent. Your coach winces. The team doctor drops his clipboard. You\'re afraid to look down.',
    category: 'career',
    probability: 0.22,
    requiredCareerId: 'sports',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'sports' },
    ],
    choices: [
      {
        id: 'sports_injury_push_through',
        text: 'Walk it off. It\'s just a knee, you have two.',
        hint: 'Tough, but potentially catastrophic',
        outcomes: [
          {
            weight: 30,
            description:
              'It was just a loud crack with zero actual damage. Your knee is fine. The team doctor is baffled. You\'re basically Wolverine. Your teammates look at you with a mix of respect and concern.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You play through it for two weeks before collapsing mid-sprint. The MRI reveals you\'ve been running on what the doctor describes as "a knee held together by vibes and denial." Surgery time.',
            effects: [
              { type: 'stat', target: 'health', value: -25, operation: 'add' },
              { type: 'career_performance', value: -25, operation: 'add' },
              { type: 'money', value: -8000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You limp through practice, fooling nobody. The coach benches you "for your own good" but the look in his eyes says "for MY own good because I can\'t watch this anymore."',
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
        text: 'Get it checked immediately. You heard that crunch.',
        hint: 'Smart but might mean time off',
        outcomes: [
          {
            weight: 55,
            description:
              'Minor strain. Two weeks rest, good as new. The doctor says your bones are "surprisingly resilient for someone who treats their body like a demolition derby." You take it as a compliment.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'health', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'Torn ligament. But because you caught it early, recovery is 3 months instead of 12. The doctor says you\'re "the first athlete who\'s actually listened to me in 20 years." He looks like he might cry.',
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
    description:
      'A shady guy in the locker room offers you a "vitamin supplement" that he promises will "totally boost your performance, bro." The bottle has no label, the liquid is neon green, and it smells like revenge. Seems legit.',
    category: 'career',
    probability: 0.18,
    requiredCareerId: 'sports',
    cooldown: 10,
    conditions: [
      { type: 'hasCareerId', value: 'sports' },
    ],
    choices: [
      {
        id: 'sports_doping_take',
        text: 'Bottoms up. YOLO (Your Organs Literally Overwork).',
        hint: 'Performance boost now, consequences later',
        outcomes: [
          {
            weight: 35,
            description:
              'Whatever that was, it works. You\'re faster, stronger, and you can suddenly smell colors. You dominate for three months before a random drug test that you pass because apparently this stuff isn\'t on the banned list yet. Score.',
            effects: [
              { type: 'career_performance', value: 25, operation: 'add' },
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'You fail a drug test so spectacularly that the lab calls back to confirm you\'re not actually a horse. Two-month suspension. The neon green was a red flag in hindsight.',
            effects: [
              { type: 'career_performance', value: -25, operation: 'add' },
              { type: 'reputation', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'money', value: -10000, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'Nothing happens. No performance boost, no side effects. The "supplement" was Mountain Dew mixed with food coloring. You paid $500 for a gas station drink. The shady guy is probably laughing somewhere.',
            effects: [
              { type: 'money', value: -500, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'sports_doping_refuse',
        text: 'Hard pass. Your body is a temple. A mediocre temple, but still.',
        hint: 'Integrity intact, mediocrity also intact',
        outcomes: [
          {
            weight: 60,
            description:
              'You decline with dignity. Two weeks later, the guy who took it grows a third nipple and gets banned from the sport. You sleep soundly with your normal amount of nipples.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'The guy who took it breaks every record in the league and never gets caught. He\'s on magazine covers. You\'re on the bench. Integrity is great and all but it doesn\'t come with endorsement deals.',
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
    description:
      'It\'s championship day. The stadium is packed. The cameras are rolling. Your mom is in the stands wearing a shirt with your face on it that she made at a kiosk. The pressure is immense. Your breakfast is threatening a comeback.',
    category: 'career',
    probability: 0.15,
    requiredCareerId: 'sports',
    cooldown: 12,
    conditions: [
      { type: 'hasCareerId', value: 'sports' },
    ],
    choices: [
      {
        id: 'sports_championship_give_all',
        text: 'Leave everything on the field. This is your moment.',
        hint: 'Peak performance or peak embarrassment',
        outcomes: [
          {
            weight: 35,
            description:
              'You play the game of your life. The winning play. The crowd erupts. Your mom is ugly-crying in the stands. The shirt with your face on it is now a collector\'s item. This is the peak. Everything after this is downhill.',
            effects: [
              { type: 'career_performance', value: 30, operation: 'add' },
              { type: 'reputation', value: 25, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 30, operation: 'add' },
              { type: 'money', value: 15000, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'Solid performance. Your team wins but you weren\'t the hero. The camera cut to you picking your nose during the celebration. That image will haunt you on social media for years.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'money', value: 5000, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You choke. Missed the easy shot. Dropped the ball. Tripped over your own feet. The stadium groans in unison. Your mom still loves you but she took off the shirt. The ride home is very quiet.',
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
        text: 'Play it safe. Don\'t be the hero, don\'t be the goat.',
        hint: 'Won\'t win MVP, won\'t go viral for failing',
        outcomes: [
          {
            weight: 60,
            description:
              'Your team wins. You contributed adequately. The MVP award goes to someone else. The post-game interview focuses on literally anyone but you. Your mom still says you were the real MVP. Moms are good like that.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'money', value: 3000, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'Your team loses by one point. A point you could have scored if you\'d gone for it instead of passing. The coach\'s post-game speech is about "players who want it" and he keeps accidentally making eye contact with you.',
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
    description:
      'A fan has been camping outside your training facility for three days. They have a shrine made of your used sports tape (HOW did they get that?), a tattoo of your face on their calf, and a 47-page letter declaring you their "athletic soulmate."',
    category: 'career',
    probability: 0.20,
    requiredCareerId: 'sports',
    cooldown: 6,
    conditions: [
      { type: 'hasCareerId', value: 'sports' },
    ],
    choices: [
      {
        id: 'sports_fan_engage',
        text: 'Sign their stuff and take a selfie. Feed the beast.',
        hint: 'Good PR, potentially encouraging behavior',
        outcomes: [
          {
            weight: 45,
            description:
              'They cry tears of joy, post the selfie everywhere, and become your biggest online defender. Every hater gets a 2,000-word essay from this person. Annoying? Yes. Effective? Also yes.',
            effects: [
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The selfie goes viral but not for the reason you wanted. The fan\'s shrine is visible in the background. Now everyone thinks you endorse being stalked. Your agent is having a meltdown.',
            effects: [
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'Your kindness emboldens them. They now show up at your house, your dentist, your mom\'s book club. They know your dry cleaner\'s schedule. You might need a restraining order. Or a disguise. Or both.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'sports_fan_security',
        text: 'Have security escort them away. Boundaries matter.',
        hint: 'Might look bad, but your safety comes first',
        outcomes: [
          {
            weight: 50,
            description:
              'Security removes them gently. They understand. They even apologize for the tape shrine. "I know it\'s a lot." Self-aware stalkers are the most disturbing kind of stalkers.',
            effects: [
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'They film the entire security interaction and post it with the caption "MY HERO BETRAYED ME." It goes viral. You\'re trending, but in the "cancelled" way. Sports media has a field day.',
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
    description:
      'Your contract is up for renegotiation. Your agent says you deserve "top dollar." The team says you deserve "competitive compensation." These are not the same thing. Your agent keeps using the word "leverage" while eating shrimp cocktail.',
    category: 'career',
    probability: 0.18,
    requiredCareerId: 'sports',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'sports' },
    ],
    choices: [
      {
        id: 'sports_contract_demand',
        text: 'Demand max money. You know your worth.',
        hint: 'Big payday or you walk',
        outcomes: [
          {
            weight: 35,
            description:
              'The team caves. Massive contract. You buy your mom a house and yourself a car that\'s objectively too much car for any human being. Your agent takes 15% and somehow that\'s still more than your old salary.',
            effects: [
              { type: 'money', value: 30000, operation: 'add' },
              { type: 'career_satisfaction', value: 20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'Negotiations stall. You hold out. The team holds out. Three weeks pass. You\'re technically a free agent eating ramen in your apartment questioning all your life choices. Eventually, you settle for slightly above average. Anticlimactic.',
            effects: [
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'They let you walk. Another team picks you up for less money in a city you\'ve never heard of. Your new teammates can\'t pronounce your name. Your new apartment has a view of a parking lot. Money isn\'t everything, apparently.',
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
        text: 'Take the team-friendly deal. Loyalty has value.',
        hint: 'Less money, more security and goodwill',
        outcomes: [
          {
            weight: 55,
            description:
              'The fans love you for it. "Hometown hero takes less to stay!" Your jersey sales spike. The owners send you a fruit basket. Not exactly a sports car, but the thought counts.',
            effects: [
              { type: 'money', value: 8000, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'Six months later, a less talented teammate signs for triple your salary. Your agent sends you a text that just says "..." followed by the shrimp emoji. You\'re not sure what it means but you\'re upset.',
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
    description:
      'A major brand wants you to be the face of their new product line. The catch? It\'s a line of adult diapers for athletes. "For when the game gets intense." The money is incredible. Your dignity is negotiable.',
    category: 'career',
    probability: 0.20,
    requiredCareerId: 'sports',
    cooldown: 6,
    conditions: [
      { type: 'hasCareerId', value: 'sports' },
    ],
    choices: [
      {
        id: 'sports_endorsement_accept',
        text: 'Take the deal. Money is money.',
        hint: 'Rich but roasted',
        outcomes: [
          {
            weight: 45,
            description:
              'The commercial goes viral. You\'re a meme now. But you\'re a RICH meme. Every interview starts with a diaper joke but your bank account has never looked better. Your mom says she\'s proud, unconvincingly.',
            effects: [
              { type: 'money', value: 20000, operation: 'add' },
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_satisfaction', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The brand takes off and somehow your image rehabilitates. You\'re now seen as "authentic" and "brave" for endorsing diapers. A think piece in the Atlantic calls you "the athlete who dared to be absorbent." We live in a strange timeline.',
            effects: [
              { type: 'money', value: 25000, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'Your teammates tape printouts of the ad to your locker. Every game, the opposing fans throw diapers onto the field when you play. The chant "DIAPER BOY" follows you for the rest of your career.',
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
        text: 'Decline. Some things are worth more than money.',
        hint: 'Dignity preserved, wallet thinner',
        outcomes: [
          {
            weight: 50,
            description:
              'A rival athlete takes the deal and becomes a millionaire meme. You retained your dignity but your agent keeps sighing and looking at yacht catalogs he can no longer afford.',
            effects: [
              { type: 'career_satisfaction', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'A premium brand sees your integrity and offers you a real endorsement deal. Shoes. Actual shoes. Not diapers. The universe rewards patience. Your agent weeps with joy.',
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
    description:
      'A teammate accuses you of stealing his lucky socks. You did not steal his lucky socks. But you ARE wearing socks that look suspiciously similar. Tensions are high. The locker room smells like testosterone and Gold Bond.',
    category: 'career',
    probability: 0.19,
    requiredCareerId: 'sports',
    cooldown: 6,
    conditions: [
      { type: 'hasCareerId', value: 'sports' },
    ],
    choices: [
      {
        id: 'sports_fight_throw_hands',
        text: 'Square up. Nobody accuses you of sock theft.',
        hint: 'Satisfying but professionally risky',
        outcomes: [
          {
            weight: 30,
            description:
              'You land one good punch before three coaches pull you apart. Both of you get fined. The local news runs the headline "SPORTS STAR IN SOCK-RELATED ALTERCATION." Journalism is dead.',
            effects: [
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'money', value: -5000, operation: 'add' },
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'He\'s bigger than you remembered. Much bigger. You take a hit that rearranges your concept of pain. The team trainer ices your face while gently asking "was this about socks?" Yes. Yes it was.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'money', value: -3000, operation: 'add' },
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The fight somehow bonds you. After throwing punches, you both sit down, laugh about it, and become best friends. He apologizes about the socks. You admit yours do look similar. Bromance achieved through violence.',
            effects: [
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'sports_fight_defuse',
        text: 'Show him the label. These are YOUR socks from Target.',
        hint: 'De-escalation via receipt',
        outcomes: [
          {
            weight: 70,
            description:
              'The Target label proves your innocence. He finds his socks in the back of his own locker. He mumbles an apology while the entire team watches. You are vindicated. The socks are avenged.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
              { type: 'reputation', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'He doesn\'t care about the label. "TARGET SELLS THOSE TOO!" This man is unhinged about socks. The tension persists for the entire season. Every game, he checks your feet before tip-off.',
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
    description:
      'Your body takes three days to recover from practice now. You grunt when you sit down. You pulled a muscle sneezing. A rookie called you "sir" in the hallway. The writing is on the wall, and the writing says "maybe it\'s time."',
    category: 'career',
    probability: 0.18,
    requiredCareerId: 'sports',
    minAge: 30,
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'sports' },
      { type: 'minAge', value: 30 },
    ],
    choices: [
      {
        id: 'sports_retirement_one_more',
        text: 'One more season. You\'re not done yet.',
        hint: 'Legacy season or embarrassing farewell tour',
        outcomes: [
          {
            weight: 35,
            description:
              'You play one of your best seasons ever. Veteran wisdom meets dad-level determination. The sports media calls it "The Renaissance." You retire on top. Perfect ending. Hollywood couldn\'t write it better.',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'money', value: 10000, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You\'re mediocre. Not terrible, just... there. Like human wallpaper. Fans politely clap when you sub in. The farewell tour is more of a farewell whisper. You retire to mild applause.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
              { type: 'money', value: 5000, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'You get injured in the first game. Of the season. During warmups. Stretching. You pulled your hamstring stretching. The retirement announcement writes itself. Your body literally chose for you.',
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
        text: 'Retire gracefully. Go out with class.',
        hint: 'Control the narrative while you still can',
        outcomes: [
          {
            weight: 65,
            description:
              'Beautiful press conference. You cry. The reporters cry. Your coach cries. They retire your number. You transition to commentating, where you\'re immediately terrible but everyone loves you for it.',
            effects: [
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'career_satisfaction', value: 15, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The retirement press conference gets bumped from the news by a celebrity scandal. Four people attend. One is your mom. One is a janitor who was just passing through. It\'s a quiet ending to a loud career.',
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
    description:
      'A rival company is attempting a hostile takeover. Their CEO sent a fruit basket with a card that reads "Looking forward to owning you. XOXO." The board is panicking. Someone from accounting is stress-eating the fruit basket.',
    category: 'career',
    probability: 0.18,
    requiredCareerId: 'business',
    cooldown: 10,
    conditions: [
      { type: 'hasCareerId', value: 'business' },
    ],
    choices: [
      {
        id: 'business_takeover_fight',
        text: 'Fight the takeover. Rally the shareholders.',
        hint: 'Expensive legal battle, but you keep your throne',
        outcomes: [
          {
            weight: 40,
            description:
              'You mount a brilliant defense. The shareholders rally behind you. The rival CEO\'s fruit basket gambit backfires spectacularly. You send them back an edible arrangement shaped like a middle finger.',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'money', value: -10000, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The fight drains company resources. You win, technically, but the legal fees cost more than the company is worth. You saved the ship by sinking it. Congratulations?',
            effects: [
              { type: 'money', value: -25000, operation: 'add' },
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'The shareholders side with the rival. Traitors. You\'re out. The new CEO sends you a fruit basket. The cycle of corporate cruelty continues.',
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
        text: 'Negotiate a golden parachute and walk away rich.',
        hint: 'Lose the company, keep your bank account',
        outcomes: [
          {
            weight: 60,
            description:
              'You negotiate an exit package so generous it makes the rival CEO physically ill. Private jets, stock options, a consulting fee for "doing nothing." You lose the title but win the game.',
            effects: [
              { type: 'money', value: 50000, operation: 'add' },
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'They lowball you. The "golden parachute" is more of a bronze hang glider. You leave with some money and a lot of resentment. At least you don\'t have to answer emails anymore.',
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
    description:
      'You overhear a conversation in the elevator about a massive merger that hasn\'t been announced yet. The stock is going to triple. You could buy now and make a fortune. The SEC would need to prove you were in the elevator, and elevators don\'t have cameras. Right? RIGHT?',
    category: 'career',
    probability: 0.17,
    requiredCareerId: 'business',
    cooldown: 12,
    conditions: [
      { type: 'hasCareerId', value: 'business' },
    ],
    choices: [
      {
        id: 'business_insider_trade',
        text: 'Buy the stock. The elevator is a vault of secrets.',
        hint: 'Massive profit or federal prison',
        outcomes: [
          {
            weight: 35,
            description:
              'The stock triples. You\'re rich. You\'re also sweating every time you see anyone in a suit. Was that an SEC agent or just a guy going to a wedding? You may never relax again.',
            effects: [
              { type: 'money', value: 40000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_performance', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The merger falls through. The stock tanks. You lose everything you invested. The people in the elevator were apparently just speculating. You made a felony-adjacent decision based on office gossip.',
            effects: [
              { type: 'money', value: -20000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The SEC comes knocking. Turns out the elevator DID have a camera. It was behind that little panel. You are now a case study in business ethics textbooks. Your mugshot is on chapter 7.',
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
        text: 'Pretend you heard nothing. Hum loudly. Exit elevator.',
        hint: 'Legal and boring, like a compliance seminar',
        outcomes: [
          {
            weight: 60,
            description:
              'The stock does triple. Your coworker who "definitely didn\'t" buy stock drives a new Porsche to work. You drive your Honda Civic and the moral high ground. The moral high ground gets terrible gas mileage.',
            effects: [
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'The merger was illegal and everyone involved gets arrested. Your coworker\'s Porsche gets seized. You watched from the office window eating a sandwich. Best lunch break ever.',
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
    description:
      'You discover the company has been dumping toxic waste into a local river. The internal memo is titled "Operation Definitely Not Polluting." The legal team\'s confidence is concerning. The fish in the river now glow in the dark.',
    category: 'career',
    probability: 0.16,
    requiredCareerId: 'business',
    cooldown: 12,
    oneTime: true,
    conditions: [
      { type: 'hasCareerId', value: 'business' },
    ],
    choices: [
      {
        id: 'business_whistleblow',
        text: 'Blow the whistle. Contact the EPA.',
        hint: 'Do the right thing, nuke your career',
        outcomes: [
          {
            weight: 40,
            description:
              'You become a national hero. Book deal, documentary, the works. Sure, you\'re blacklisted from corporate America, but your Netflix special pays more than your salary ever did. The river fish stop glowing.',
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
            description:
              'The company gets fined. You get fired. The whistleblower protection laws protect you on paper but not in practice. You spend two years in legal battles. Justice is served, slowly, painfully, and expensively.',
            effects: [
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'career_performance', value: -25, operation: 'add' },
              { type: 'money', value: -15000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'The company\'s lawyers are better than the EPA\'s lawyers. The complaint goes nowhere. The fish continue to glow. You\'re labeled a "disgruntled employee." Nobody listens to disgruntled employees, even the correct ones.',
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
        text: 'Look the other way. Those fish were probably already glowing.',
        hint: 'Keep your job, lose your soul',
        outcomes: [
          {
            weight: 50,
            description:
              'You sleep with the guilt. Or rather, you don\'t sleep. Your therapist is making a fortune. Every time you see a river you feel phantom shame. But your 401k is doing great.',
            effects: [
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'money', value: 5000, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Someone else blows the whistle six months later. The company collapses. You\'re out of a job anyway AND you don\'t get the hero credit. Worst of both worlds. The glowing fish mock you.',
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
    description:
      'Your company is merging with a rival. Day one of integration: both companies have a "Steve" in accounting and neither is willing to go by "Steven." The IT systems are incompatible. The coffee machines are different brands. This might be a war.',
    category: 'career',
    probability: 0.20,
    requiredCareerId: 'business',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'business' },
    ],
    choices: [
      {
        id: 'business_merger_embrace',
        text: 'Embrace the chaos. Become the bridge between companies.',
        hint: 'Exhausting but could make you indispensable',
        outcomes: [
          {
            weight: 45,
            description:
              'You become the only person both sides trust. They call you "The Diplomat." You resolve the Steve situation (one is now "Accounting Steve," the other "Steve Classic"). You get a promotion for your trouble.',
            effects: [
              { type: 'career_performance', value: 18, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'money', value: 8000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You work 80-hour weeks mediating conflicts between people arguing about stapler brands. Your eye develops a twitch. Both Steves hate you now. You are the bridge that burns from both ends.',
            effects: [
              { type: 'stat', target: 'health', value: -10, operation: 'add' },
              { type: 'career_satisfaction', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'During integration, they discover your position exists in both companies. You get "restructured." That\'s corporate for "we found someone cheaper in the merger." The irony is physically painful.',
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
        text: 'Keep your head down and wait for the dust to settle.',
        hint: 'Survivor strategy — don\'t be noticed, don\'t be cut',
        outcomes: [
          {
            weight: 55,
            description:
              'You survive every round of layoffs by being aggressively average. Nobody knows what you do, including you, but your desk remains occupied. Stealth employment at its finest.',
            effects: [
              { type: 'career_performance', value: -3, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'Your strategy works too well. They forget you exist entirely. Your email gets deactivated. Your keycard stops working. You sit in the lobby for three hours before anyone notices. You have become a corporate ghost.',
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
    description:
      'Your biggest client is a nightmare. They call at 3 AM. They change requirements every four hours. Their emails are written entirely in caps lock. Their last message: "I NEED THIS BY YESTERDAY AND ALSO IT SHOULD BE DIFFERENT THAN WHAT I ASKED FOR." They represent 40% of revenue.',
    category: 'career',
    probability: 0.22,
    requiredCareerId: 'business',
    cooldown: 6,
    conditions: [
      { type: 'hasCareerId', value: 'business' },
    ],
    choices: [
      {
        id: 'business_client_appease',
        text: 'The customer is always right. Even when they\'re unhinged.',
        hint: 'Money stays, sanity goes',
        outcomes: [
          {
            weight: 40,
            description:
              'You fulfill every insane demand. They\'re thrilled. They send more business. You have Stockholm syndrome but excellent quarterly numbers. Your therapist suggests boundaries. You suggest your therapist meet this client.',
            effects: [
              { type: 'money', value: 15000, operation: 'add' },
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'No matter what you do, they\'re never satisfied. The goalposts don\'t just move, they teleport to another dimension. After six months of all-caps abuse, you develop a Pavlovian stress response to email notifications.',
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
        text: 'Fire the client. Life is too short for caps lock abuse.',
        hint: 'Revenue hit, but your hair might stop falling out',
        outcomes: [
          {
            weight: 45,
            description:
              'You professionally terminate the relationship. Your team throws a party. Someone bakes a cake that says "NO MORE 3 AM CALLS." Productivity doubles because everyone isn\'t crying at their desks anymore.',
            effects: [
              { type: 'money', value: -10000, operation: 'add' },
              { type: 'career_satisfaction', value: 20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'stat', target: 'health', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description:
              'The revenue hit is brutal. Layoffs happen. The CFO gives you a look that could curdle milk. You were right to fire them, morally. Financially, your spreadsheets are weeping.',
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
    description:
      'The company is $3 million short and nobody can figure out where it went. The CFO has a new boat. The CFO has always wanted a boat. The CFO named the boat "Definitely Not Embezzlement." Nobody in accounting sees the irony.',
    category: 'career',
    probability: 0.16,
    requiredCareerId: 'business',
    cooldown: 12,
    conditions: [
      { type: 'hasCareerId', value: 'business' },
    ],
    choices: [
      {
        id: 'business_embezzle_investigate',
        text: 'Investigate the CFO. Follow the money to the boat.',
        hint: 'Could expose corruption or make a powerful enemy',
        outcomes: [
          {
            weight: 40,
            description:
              'Your investigation reveals the CFO embezzled $3.2 million. The extra $200k went to the boat\'s custom sound system. He\'s arrested. The board promotes you. Justice, with a side of career advancement.',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'money', value: 10000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The CFO finds out you\'re investigating. He has friends on the board. Suddenly your expense reports are being "audited" and your parking spot moved to a different zip code. Corporate retaliation is subtle until it isn\'t.',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'Plot twist: the money isn\'t missing. Accounting made a typo. The CFO just really likes boats and paid for it with family money. You accused a man of embezzlement because he has a hobby. He is not forgiving you for this.',
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
        text: 'Not your department. You didn\'t see the boat.',
        hint: 'Plausible deniability is a beautiful thing',
        outcomes: [
          {
            weight: 50,
            description:
              'The fraud is eventually discovered by auditors. The CFO goes down. You are not implicated. Your strategy of "strategic ignorance" pays dividends. Not literal dividends, those went to the boat.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Investigators find that several people "must have known." You\'re one of them. Your name is in a report. Not criminally liable, but professionally tainted. You are now the person who "didn\'t see the boat."',
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
    description:
      'You\'re pitching a revolutionary product to venture capitalists. The product: AI-powered socks that tell you when they\'re dirty. The VCs are stone-faced. One is literally checking his phone. Another appears to be asleep. This is your moment.',
    category: 'career',
    probability: 0.19,
    requiredCareerId: 'business',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'business' },
    ],
    choices: [
      {
        id: 'business_pitch_passion',
        text: 'Go all in. Sell the VISION, not the socks.',
        hint: 'If you believe hard enough, maybe they will too',
        outcomes: [
          {
            weight: 35,
            description:
              'Your passion is infectious. The sleeping VC wakes up and writes a check. $2 million for AI socks. The market is irrational and so are venture capitalists. You are now a sock entrepreneur backed by serious money.',
            effects: [
              { type: 'money', value: 30000, operation: 'add' },
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'The VCs pass but compliment your energy. "We loved the pitch, hated the product." One gives you his card "for next time." The card has a different person\'s name on it. You\'re pretty sure he just found it on the floor.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'You trip on the way to the podium, spill coffee on a VC, and your presentation has a typo on the first slide ("SMART SICKS"). They laugh you out. The video somehow ends up on LinkedIn with 50K views.',
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
        text: 'Lead with data. Numbers don\'t trip on stages.',
        hint: 'Less exciting but more credible',
        outcomes: [
          {
            weight: 50,
            description:
              'Your 47-slide deck puts two VCs to sleep but the one who stayed awake controls $500 million. She gives you seed funding. "The data is compelling. The socks are ridiculous. I\'m in." Spoken like a true VC.',
            effects: [
              { type: 'money', value: 15000, operation: 'add' },
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Death by PowerPoint. By slide 12, the room is comatose. One VC\'s snore echoes off the walls. Your data is flawless. Your delivery is a sedative. Back to the drawing board.',
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
    description:
      'The board offers you a buyout package to "step aside." Translation: they want you gone but they\'re willing to pay handsomely for it. The package includes a year\'s salary, stock options, and a letter of recommendation written by someone who definitely doesn\'t like you.',
    category: 'career',
    probability: 0.17,
    requiredCareerId: 'business',
    cooldown: 12,
    conditions: [
      { type: 'hasCareerId', value: 'business' },
      { type: 'minAge', value: 30 },
    ],
    choices: [
      {
        id: 'business_parachute_take',
        text: 'Take the money and run. Literally, before they change their mind.',
        hint: 'Financial security, career reset',
        outcomes: [
          {
            weight: 55,
            description:
              'You cash out, take a six-month vacation, and come back refreshed. You start a consulting firm that charges your old company $500/hour for advice they used to get from you for free. Revenge capitalism.',
            effects: [
              { type: 'money', value: 40000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'The money runs out faster than expected. Turns out "a year\'s salary" is only a year. Who knew? You\'re back on the job market, overqualified for everything, explaining why you "chose to leave" your last position.',
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
        text: 'Refuse. They\'ll have to drag you out of this corner office.',
        hint: 'Bold, possibly foolish, definitely dramatic',
        outcomes: [
          {
            weight: 40,
            description:
              'Your defiance inspires the team. Productivity spikes. The board backs down. You emerge stronger, untouchable, with an enemies-list that would make Nixon jealous. The corner office remains yours.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'They make your life miserable. Your office is "temporarily" relocated to a supply closet. Your budget is cut. Your assistant is reassigned to the new guy. You\'re technically employed but effectively decorative.',
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
    description:
      'A tabloid is about to run a story about you. According to their "sources," you once double-dipped a chip at a fundraiser. In politics, this is somehow equivalent to treason. Your communications director is having a panic attack.',
    category: 'career',
    probability: 0.20,
    requiredCareerId: 'politics',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'politics' },
    ],
    choices: [
      {
        id: 'politics_scandal_deny',
        text: 'Deny everything. You have never even seen a chip.',
        hint: 'Classic political move — deny, deny, deny',
        outcomes: [
          {
            weight: 35,
            description:
              'Nobody believes you, but in politics that doesn\'t matter. The news cycle moves on in 48 hours when a different politician gets caught doing something actually illegal. Saved by someone else\'s crimes.',
            effects: [
              { type: 'reputation', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'A video surfaces of you double-dipping. In HD. With audio. You clearly say "nobody will notice." 10 million views. #DipGate trends for a week. Your approval rating drops 8 points over a corn chip.',
            effects: [
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'career_performance', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'Your denial is so confident that people start defending you. A conspiracy theory emerges that the video was deepfaked. Your base rallies behind you. The truth doesn\'t matter. It never did. Welcome to politics.',
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
        text: 'Own it. "Yes, I double-dipped, and I\'d do it again."',
        hint: 'Radical honesty — refreshing or suicidal',
        outcomes: [
          {
            weight: 50,
            description:
              'The public loves your honesty. "Finally, a politician who tells the truth!" Your approval rating actually goes UP. You become the "Dip Candidate." Campaign merch features a chip. You live in the stupidest timeline.',
            effects: [
              { type: 'reputation', value: 12, operation: 'add' },
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Your opponents weaponize it. "Can you trust someone who double-dips? What else are they hiding?" Attack ads feature slow-motion dipping footage. Your opponent wins the "hygiene vote." That\'s apparently a thing.',
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
    description:
      'A wealthy donor offers your campaign a massive contribution. The catch: they want you to support a bill that would make it legal to hunt pigeons with crossbows in city parks. They\'re very passionate about this. Their eyes light up when they say "crossbow."',
    category: 'career',
    probability: 0.19,
    requiredCareerId: 'politics',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'politics' },
    ],
    choices: [
      {
        id: 'politics_contribution_take',
        text: 'Take the money. Pigeons are basically sky rats anyway.',
        hint: 'Funded campaign, questionable morals',
        outcomes: [
          {
            weight: 40,
            description:
              'The money floods in. Your campaign buys TV ads, yard signs, and a billboard. Nobody connects you to the pigeon crossbow thing because it sounds too absurd to be true. Which, in politics, makes it untouchable.',
            effects: [
              { type: 'money', value: 20000, operation: 'add' },
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'An investigative reporter traces the money. The headline: "CANDIDATE FUNDED BY BIG CROSSBOW." The pigeon rights activists (yes, they exist) organize protests outside your office. With pigeons. Trained pigeons.',
            effects: [
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
              { type: 'money', value: 10000, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'You take the money, support the bill, and somehow it passes. Crossbow pigeon hunting is now legal. You did not expect this outcome. Nobody expected this outcome. The crossbow donor sends you a fruit basket.',
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
        text: 'Decline. You will not be known as the pigeon crossbow candidate.',
        hint: 'Integrity at the cost of funding',
        outcomes: [
          {
            weight: 55,
            description:
              'You decline gracefully. The donor gives the money to your opponent, who enthusiastically supports crossbow pigeon hunting. Your opponent wins the "weird single-issue voter" demographic. You sleep well at night.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'Your refusal goes viral as an example of "principled politics." Small donors flood your campaign. Turns out a lot of people like pigeons. You raise more than the crossbow money through grassroots support.',
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
    description:
      'During a live debate, you\'re asked about your position on education. Your brain fully disconnects from your mouth. You hear yourself say the words "children are just short adults" and you can\'t stop. The moderator is blinking rapidly.',
    category: 'career',
    probability: 0.18,
    requiredCareerId: 'politics',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'politics' },
    ],
    choices: [
      {
        id: 'politics_gaffe_recover',
        text: 'Power through. Double down. "What I MEANT was..."',
        hint: 'Might save it, might dig deeper',
        outcomes: [
          {
            weight: 35,
            description:
              'You pivot so hard you practically break the space-time continuum. "What I meant is we should treat children with the same RESPECT as adults." Standing ovation. Your speechwriter collapses with relief in the green room.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'The "recovery" makes it worse. You somehow end up saying "kids these days are too tall" before your campaign manager physically tackles you off-stage. It becomes the most-clipped debate moment of the year.',
            effects: [
              { type: 'reputation', value: -18, operation: 'add' },
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'You freeze. Ten seconds of dead air on national television. A tumbleweed could have rolled across that stage. Your opponent fills the silence by also saying something stupid. Mutually assured embarrassment.',
            effects: [
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'politics_gaffe_joke',
        text: 'Make a self-deprecating joke. Acknowledge the trainwreck.',
        hint: 'Humor might disarm the audience',
        outcomes: [
          {
            weight: 55,
            description:
              '"Well, that came out wrong. But at least I proved I don\'t use a teleprompter." The audience laughs. The moderator smirks. Your opponent looks annoyed that you got a laugh out of your own gaffe. Charisma: activated.',
            effects: [
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'career_performance', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'The joke doesn\'t land. The audience stares at you like you just told a knock-knock joke at a funeral. Your opponent uses the remaining debate time to repeatedly quote "children are short adults" at you. It\'s a long night.',
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
    description:
      'It\'s election day. The polls have you in a dead heat with your opponent — a person whose entire platform is "I\'m not THEM" while pointing at you. Your campaign has spent every dollar. Your volunteers are running on coffee and spite. Democracy is beautiful.',
    category: 'career',
    probability: 0.15,
    requiredCareerId: 'politics',
    cooldown: 16,
    conditions: [
      { type: 'hasCareerId', value: 'politics' },
    ],
    choices: [
      {
        id: 'politics_election_campaign_hard',
        text: 'One final push. Shake every hand, kiss every baby.',
        hint: 'Maximum effort for maximum results',
        outcomes: [
          {
            weight: 35,
            description:
              'You win by 200 votes. TWO HUNDRED. Out of half a million. Your victory speech is 90% crying. You kissed so many babies that one of them bit you. You have a hickey from a toddler but you WON.',
            effects: [
              { type: 'career_performance', value: 25, operation: 'add' },
              { type: 'reputation', value: 20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 25, operation: 'add' },
              { type: 'money', value: 10000, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'You lose by 47 votes. FORTY-SEVEN. Your concession speech is graceful but internally you\'re calculating how many more hands you could have shaken. 47 hands. You needed 47 more hands.',
            effects: [
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -20, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'You win by a comfortable margin. The final push worked. Your opponent\'s concession speech compliments your "relentless energy" through gritted teeth. Victory never tasted so good. It tastes like stale coffee and vindication.',
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
        text: 'You\'ve done enough. Let the voters decide. Take a nap.',
        hint: 'Zen approach — what will be, will be',
        outcomes: [
          {
            weight: 50,
            description:
              'You wake up from your nap to 200 missed calls. You won. Apparently napping on election day is "relatable content." A photo of you asleep went viral. America loves a well-rested leader.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'stat', target: 'health', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You lose by a margin that one more day of campaigning could have covered. Your campaign manager will not forgive the nap. Your concession speech mentions being "well-rested for new challenges." Nobody laughs.',
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
    description:
      'A lobbyist invites you to the nicest restaurant in town. The kind where the menu doesn\'t have prices because "if you have to ask, you can\'t afford it." Over wagyu beef, they casually mention a bill they\'d like you to support. The bill would deregulate cheese.',
    category: 'career',
    probability: 0.21,
    requiredCareerId: 'politics',
    cooldown: 6,
    conditions: [
      { type: 'hasCareerId', value: 'politics' },
    ],
    choices: [
      {
        id: 'politics_lobbyist_play_along',
        text: 'Nod along, eat the wagyu, commit to nothing.',
        hint: 'Free expensive meal, political tight-rope walk',
        outcomes: [
          {
            weight: 45,
            description:
              'You enjoy a $400 meal, say a lot of words that mean nothing, and leave without promising anything. The lobbyist thinks you\'re on board. You\'re not. You are, however, full of wagyu. Politics is just acting with better catering.',
            effects: [
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
              { type: 'career_performance', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'Photos of the lunch leak. "POLITICIAN DINES WITH BIG CHEESE LOBBYIST" is the headline. You try to explain it was just wagyu but nobody cares about nuance when cheese is involved. Your opponent has a field day.',
            effects: [
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'The lobbyist is smarter than you thought. They recorded you saying "I love cheese" and are using it as evidence of support. Out of context, it\'s devastating. In context, you were talking about the appetizer.',
            effects: [
              { type: 'reputation', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'politics_lobbyist_refuse',
        text: 'Decline the lunch. You can\'t be bought. (For cheese.)',
        hint: 'Principled stand, empty stomach',
        outcomes: [
          {
            weight: 55,
            description:
              'You eat a sad sandwich at your desk instead. But your integrity is intact. Your opponent gets photographed at the same restaurant with the same lobbyist. You release a statement that just says "I had a sandwich." It trends.',
            effects: [
              { type: 'reputation', value: 12, operation: 'add' },
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'The lobbyist funds your opponent instead. Cheese money is powerful. Your campaign is outspent 3-to-1 in the next cycle. Turns out principles don\'t buy TV ads. Who knew?',
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
    description:
      'Your private emails have been leaked. Most are boring. One, however, is you calling your opponent "a sentient necktie." Another is you admitting you don\'t actually read the bills you vote on. A third is just the shrimp emoji sent to the wrong person at 2 AM.',
    category: 'career',
    probability: 0.17,
    requiredCareerId: 'politics',
    cooldown: 10,
    conditions: [
      { type: 'hasCareerId', value: 'politics' },
    ],
    choices: [
      {
        id: 'politics_emails_damage_control',
        text: 'Full damage control. Press conference, apologies, the works.',
        hint: 'Damage control works if you commit fully',
        outcomes: [
          {
            weight: 40,
            description:
              'Your apology is sincere and thorough. The public forgives the "sentient necktie" comment because, honestly, everyone was thinking it. The 2 AM shrimp emoji becomes your unofficial campaign symbol.',
            effects: [
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The press conference goes poorly. A reporter asks about the shrimp emoji and you have no explanation. "I just... like shrimp?" is not the soundbite your team wanted. The memes are immediate and merciless.',
            effects: [
              { type: 'reputation', value: -12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'During the press conference, you accidentally reveal another embarrassing email while trying to scroll to the "good ones" on your phone. It says "politics is just high school with worse food." The reporters are delighted.',
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
        text: 'Lean into it. "My emails are the most honest thing in politics."',
        hint: 'Authenticity play — risky but memorable',
        outcomes: [
          {
            weight: 50,
            description:
              'It works. Your "I say what I think" brand resonates. The "sentient necktie" merch outsells your opponent\'s actual campaign merch. American politics is a parody of itself and you\'re winning.',
            effects: [
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
              { type: 'money', value: 5000, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The "not reading bills" part sticks. Your opponent runs ads with the quote on loop. Voters suddenly care about legislators reading legislation. This is the one time authenticity backfires.',
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
    description:
      'Your campaign team dug up devastating dirt on your opponent. Turns out they failed out of clown college. CLOWN COLLEGE. They didn\'t just not graduate — they were expelled for "insufficient balloon animal skills." This is political gold.',
    category: 'career',
    probability: 0.19,
    requiredCareerId: 'politics',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'politics' },
    ],
    choices: [
      {
        id: 'politics_oppo_use_it',
        text: 'Leak it to the press. The voters deserve to know about the balloons.',
        hint: 'Effective but makes you look petty',
        outcomes: [
          {
            weight: 40,
            description:
              'The story dominates the news cycle. Late-night hosts have a field day. Your opponent tries to spin it as "I pursued diverse educational opportunities" but it\'s too late. The balloon animal jokes write themselves.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'reputation', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'It backfires. The public feels bad for your opponent. "Who cares about clown college? At least they TRIED." Sympathy donations pour in. Your attack ad budget created a GoFundMe for your enemy.',
            effects: [
              { type: 'reputation', value: -12, operation: 'add' },
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'Your opponent retaliates with their own opposition research. Turns out you were once in a Boy Scout troop that got lost in a mall. The political discourse is now just two adults embarrassing each other. Democracy thrives.',
            effects: [
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'politics_oppo_take_high_road',
        text: 'Take the high road. Win on policy, not balloon animal failures.',
        hint: 'Honorable but you\'re sitting on comedy gold',
        outcomes: [
          {
            weight: 50,
            description:
              'You campaign on issues. Voters respect it. You win by a margin that would have been wider if you\'d used the clown college thing, but you can sleep at night. The file stays in your desk drawer. Just in case.',
            effects: [
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'career_satisfaction', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'You lose the election. Your team is devastated. "We had CLOWN COLLEGE and you wouldn\'t use it!" your campaign manager screams. They\'re not wrong. The high road has terrible poll numbers.',
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
    description:
      'You\'re giving a rally speech when the sound system starts playing "Baby Shark" at full volume. The tech guy is panicking. The crowd is confused. Some children in the audience are thrilled. You\'re mid-sentence about fiscal policy.',
    category: 'career',
    probability: 0.20,
    requiredCareerId: 'politics',
    cooldown: 6,
    conditions: [
      { type: 'hasCareerId', value: 'politics' },
    ],
    choices: [
      {
        id: 'politics_rally_dance',
        text: 'Roll with it. Do the Baby Shark dance. Full commitment.',
        hint: 'Viral moment incoming, direction unclear',
        outcomes: [
          {
            weight: 45,
            description:
              'You do the full Baby Shark dance, hand motions and all, in front of 5,000 supporters. The video gets 30 million views. Political pundits call it "undignified." Your approval among parents with young children skyrockets 40%.',
            effects: [
              { type: 'reputation', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'career_performance', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'Your dance moves are objectively terrible. The crowd politely watches. One supporter yells "DON\'T QUIT YOUR DAY JOB." You are a politician. This IS your day job. The irony is lost on everyone.',
            effects: [
              { type: 'reputation', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'The opposition deepfakes the video to make it look like you\'re doing the Baby Shark dance during a national crisis. Context is dead. You spent 6 months in public office and your legacy is a children\'s song.',
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
        text: 'SHOUT OVER IT. Fiscal policy WILL be heard.',
        hint: 'Professional but potentially hilarious',
        outcomes: [
          {
            weight: 40,
            description:
              'You scream about tax reform while "Baby Shark" blasts behind you. The sheer absurdity is inspiring. Your supporters chant louder. It\'s the most passionate anyone has ever been about capital gains tax. A weird but beautiful moment.',
            effects: [
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'Nobody can hear a word you\'re saying. You\'re just a person screaming and gesturing aggressively while a children\'s song plays. Without audio context, the video looks like a villain monologue. Your voice is gone for a week.',
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
    description:
      'You posted a video of your cat falling off a shelf and it has 50 million views. FIFTY MILLION. You spent three weeks editing a documentary-style piece about climate change and it got 12 views. Your cat is now more famous than you. The cat does not care.',
    category: 'career',
    probability: 0.18,
    requiredCareerId: 'socialMedia',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'socialMedia' },
    ],
    choices: [
      {
        id: 'social_viral_milk_it',
        text: 'Pivot to cat content. The people have spoken.',
        hint: 'Follow the views, abandon your artistic vision',
        outcomes: [
          {
            weight: 45,
            description:
              'You become a cat content creator. Your cat has an agent now. AN AGENT. You are technically employed by your cat. Followers double every month. Your documentary dreams die, but your bank account thrives.',
            effects: [
              { type: 'money', value: 15000, operation: 'add' },
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_satisfaction', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'The cat content works... until your cat gets bored of being filmed and starts attacking the camera. Your last video is just a paw coming at the lens and then darkness. The audience loves it. Your face does not.',
            effects: [
              { type: 'money', value: 8000, operation: 'add' },
              { type: 'career_performance', value: 10, operation: 'add' },
              { type: 'stat', target: 'health', value: -3, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'Another creator\'s dog goes viral and steals your thunder. The internet moves fast. Your cat\'s 15 minutes of fame are over. You\'re back to 12 views per video. The cat doesn\'t seem to mind.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -10, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'social_viral_stay_course',
        text: 'Stay true to your content. You\'re an ARTIST, not a cat videographer.',
        hint: 'Integrity over views',
        outcomes: [
          {
            weight: 40,
            description:
              'You return to your regular content. The viral viewers leave. But the ones who stay are genuine fans. Quality over quantity. Your engagement rate is elite. Your bank account is modest.',
            effects: [
              { type: 'career_satisfaction', value: 15, operation: 'add' },
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 60,
            description:
              'People only comment "where\'s the cat?" on every video. EVERY video. You post a thoughtful essay about society and the top comment is "we want the shelf cat." The cat has eclipsed you in your own audience.',
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
    description:
      'You\'re trending. Not the good kind. A tweet you made in 2014 about pineapple on pizza has resurfaced and apparently this is now a hate crime. Screenshots are circulating. Think pieces are being written. Your follower count is dropping in real time like a stock market crash.',
    category: 'career',
    probability: 0.19,
    requiredCareerId: 'socialMedia',
    cooldown: 10,
    conditions: [
      { type: 'hasCareerId', value: 'socialMedia' },
    ],
    choices: [
      {
        id: 'social_cancelled_apologize',
        text: 'Post the notes app apology. Classic damage control.',
        hint: 'The script exists for a reason',
        outcomes: [
          {
            weight: 35,
            description:
              'Your apology is accepted by most. The font choice in your notes app screenshot becomes a minor controversy in itself, but the main storm passes. You survive with 70% of your audience intact. The pineapple pizza community still won\'t forgive you.',
            effects: [
              { type: 'reputation', value: -8, operation: 'add' },
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'People analyze your apology word by word. "They said \'sorry IF\' instead of \'sorry THAT.\'" A linguistics professor tweets a thread about your apology grammar. You are now being cancelled for your apology about being cancelled. Cancellation inception.',
            effects: [
              { type: 'reputation', value: -15, operation: 'add' },
              { type: 'career_performance', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -18, operation: 'add' },
            ],
          },
          {
            weight: 30,
            description:
              'A bigger celebrity gets cancelled the same day for something worse. Your controversy is immediately forgotten. You dodge a bullet because someone else ate the bullet. The internet\'s attention span saves you.',
            effects: [
              { type: 'stat', target: 'happiness', value: 5, operation: 'add' },
              { type: 'career_performance', value: -3, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'social_cancelled_double_down',
        text: '"Pineapple on pizza IS wrong and I stand by it."',
        hint: 'Fearless or foolish — history will decide',
        outcomes: [
          {
            weight: 45,
            description:
              'Against all odds, your defiance resonates. Anti-pineapple pizza people rally behind you. You become a folk hero for the "traditional pizza" movement. Your merch says "NO FRUIT ON FLATBREAD." It sells out.',
            effects: [
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'money', value: 8000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 55,
            description:
              'The internet does not appreciate your defiance. Brands pull out. Sponsorships vanish. Hawaiian Pizza Hut files a cease and desist (not real, but it feels real). Your follower count enters free fall. You die on this hill. It\'s a stupid hill.',
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
    description:
      'A energy drink company wants you to promote their new flavor: "Extreme Mango Chaos." The can is neon orange. The marketing team has face tattoos. The drink tastes like someone liquidized a highlighter. But the check has six figures on it.',
    category: 'career',
    probability: 0.21,
    requiredCareerId: 'socialMedia',
    cooldown: 6,
    conditions: [
      { type: 'hasCareerId', value: 'socialMedia' },
    ],
    choices: [
      {
        id: 'social_brand_accept',
        text: 'Take the deal. Your artistic integrity has a price and this exceeds it.',
        hint: 'Paid but possibly cringe',
        outcomes: [
          {
            weight: 40,
            description:
              'The sponsored post performs incredibly. Turns out your audience loves watching you drink something that glows. The brand extends the contract. You are now the unofficial face of Extreme Mango Chaos. Your dentist is concerned.',
            effects: [
              { type: 'money', value: 20000, operation: 'add' },
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'Your audience sees through the sponsorship immediately. "SELL OUT" comments flood in. Your engagement drops. The brand is happy because they got clicks, but your community is fractured. Mango Chaos indeed.',
            effects: [
              { type: 'money', value: 15000, operation: 'add' },
              { type: 'reputation', value: -12, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
              { type: 'career_performance', value: -8, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'The energy drink gets recalled for "undisclosed stimulants." You promoted a drink that\'s now illegal in three states. The FTC sends a letter. Your lawyer sends a bill. Extreme Mango Chaos was aptly named.',
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
        text: 'Decline. You\'d rather eat glass than drink Extreme Mango Chaos.',
        hint: 'Credibility preserved, bank account weeps',
        outcomes: [
          {
            weight: 50,
            description:
              'You decline and post about it. "I turned down six figures to keep it real with you guys." Your audience respects it immensely. A premium brand reaches out with a deal that doesn\'t require you to drink radioactive mango.',
            effects: [
              { type: 'reputation', value: 12, operation: 'add' },
              { type: 'career_satisfaction', value: 10, operation: 'add' },
              { type: 'money', value: 8000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'A rival creator takes the deal and uses the money to upgrade their entire production setup. Their content quality leaps ahead of yours. Integrity doesn\'t buy 4K cameras. You watch their glow-up from your increasingly outdated setup.',
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
    description:
      'A creator with 10x your following is blatantly copying your content style. Same editing, same music, same jokes, even the same camera angles. Their latest video is basically your video from last week with a different face. The audacity is almost impressive.',
    category: 'career',
    probability: 0.20,
    requiredCareerId: 'socialMedia',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'socialMedia' },
    ],
    choices: [
      {
        id: 'social_copycat_call_out',
        text: 'Call them out publicly. Put the receipts side by side.',
        hint: 'Drama drives engagement but burns bridges',
        outcomes: [
          {
            weight: 40,
            description:
              'Your side-by-side comparison video goes mega-viral. The evidence is undeniable. The internet rallies behind you. The copycat loses followers. You gain 500K. Justice is served with a side of clout.',
            effects: [
              { type: 'career_performance', value: 20, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 15, operation: 'add' },
              { type: 'money', value: 5000, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The copycat\'s fans attack you. "They were INSPIRED by you, not copying." Apparently when you\'re bigger, theft becomes flattery. You lose followers from the drama. The internet has chosen a side and it\'s not yours.',
            effects: [
              { type: 'reputation', value: -10, operation: 'add' },
              { type: 'career_performance', value: -8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'Both audiences get bored of the drama and unfollow both of you. Mutually assured unfollowing. You lost followers, they lost followers, and a commentary channel made $10K covering the beef. The real winner is some guy named "DramAlert."',
            effects: [
              { type: 'career_performance', value: -10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -8, operation: 'add' },
            ],
          },
        ],
      },
      {
        id: 'social_copycat_innovate',
        text: 'Ignore them and evolve your content. Stay ahead of the copier.',
        hint: 'Hard to copy someone who keeps changing',
        outcomes: [
          {
            weight: 55,
            description:
              'You pivot your style so dramatically that the copycat can\'t keep up. Your new content is fresh, innovative, and uniquely yours. They\'re stuck copying your old stuff while you\'re three trends ahead. Living well is the best revenge.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'career_satisfaction', value: 12, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'You change your style and your audience hates it. "We liked the old you!" They want the content that\'s being copied. You\'re essentially competing with a copy of yourself and LOSING. This is an existential crisis with WiFi.',
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
    description:
      'The platform changed its algorithm overnight. Your reach dropped 90%. Videos that used to get 500K views now get 800. Eight hundred. Your comment section is just your mom and a bot selling sunglasses. The algorithm giveth and the algorithm taketh away.',
    category: 'career',
    probability: 0.22,
    requiredCareerId: 'socialMedia',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'socialMedia' },
    ],
    choices: [
      {
        id: 'social_algorithm_adapt',
        text: 'Study the new algorithm. Become its servant. Resistance is futile.',
        hint: 'Sell your soul to the machine learning gods',
        outcomes: [
          {
            weight: 40,
            description:
              'After two weeks of obsessive testing, you crack the code. The algorithm now loves you again. Your videos are getting pushed to millions. The secret? Three-second hooks and posting at 4:17 AM. Your sleep schedule is destroyed but your metrics are immaculate.',
            effects: [
              { type: 'career_performance', value: 18, operation: 'add' },
              { type: 'stat', target: 'health', value: -8, operation: 'add' },
              { type: 'money', value: 5000, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'You optimize everything for the algorithm and it still doesn\'t work. Your content is now soulless, your editing is formulaic, and you\'re posting at 4 AM for an audience of bots. You\'ve become everything you swore you\'d never be.',
            effects: [
              { type: 'career_performance', value: -5, operation: 'add' },
              { type: 'career_satisfaction', value: -15, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -12, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'You crack the algorithm, but it changes again the next month. You\'re on a hamster wheel of optimization. Every month, new rules, new format, new posting times. You are not a creator anymore. You are a content hamster.',
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
        text: 'Diversify to other platforms. Don\'t put all eggs in one algorithm.',
        hint: 'More work but less platform-dependent',
        outcomes: [
          {
            weight: 50,
            description:
              'You expand to three platforms. Your audience follows. You\'re now doing triple the work but you\'re algorithm-proof. When one platform tanks, the others carry you. You are the diversified portfolio of content creation.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'career_satisfaction', value: 8, operation: 'add' },
              { type: 'money', value: 3000, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'Each platform has its own algorithm and you can\'t crack any of them. You\'re now mediocre on three platforms instead of one. Triple the failure, triple the analytics dashboards to cry over. Diversification of sadness.',
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
    description:
      'A creator with 5 million subscribers wants to collab. They\'re huge. You have 50K followers. The catch: they want to film at YOUR apartment, which currently looks like a tornado hit a thrift store. You have 48 hours to make it look like a real adult lives there.',
    category: 'career',
    probability: 0.19,
    requiredCareerId: 'socialMedia',
    cooldown: 8,
    conditions: [
      { type: 'hasCareerId', value: 'socialMedia' },
    ],
    choices: [
      {
        id: 'social_collab_go_for_it',
        text: 'Accept and panic-clean. Buy fake plants. Hide the mess.',
        hint: 'Career-changing opportunity if you don\'t blow it',
        outcomes: [
          {
            weight: 40,
            description:
              'The collab is incredible. Your chemistry is perfect. Their audience loves you. You gain 200K followers overnight. The fake plants fooled everyone. Nobody noticed the closet door you had to hold shut during filming.',
            effects: [
              { type: 'career_performance', value: 25, operation: 'add' },
              { type: 'reputation', value: 15, operation: 'add' },
              { type: 'money', value: 8000, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 20, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The video is fine. Not great, not terrible. You gain 10K followers. The big creator\'s audience is polite but unimpressed. One comment says "who is this person and why are they in this video?" You screenshot it for motivation.',
            effects: [
              { type: 'career_performance', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 3, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'Mid-filming, the closet door you were holding shut bursts open and an avalanche of laundry falls on the big creator. They laugh it off but their audience roasts you. "This person lives in a laundry tornado." Not entirely inaccurate.',
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
        text: '"Actually, your studio looks amazing. Let\'s film there."',
        hint: 'Less embarrassing, less authentic',
        outcomes: [
          {
            weight: 55,
            description:
              'They agree. Their studio is gorgeous. The collab looks professional. Your content has never looked this good. Nobody needs to know your apartment looks like a college dorm after finals week.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 45,
            description:
              'They insist on your place for "authenticity." You panic. You hire a cleaning service and buy furniture from IKEA at midnight. You spend more on staging your apartment than you\'ve made in a month of content. The collab better be worth it.',
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
    description:
      'Your latest video has 2,000 comments. 1,800 of them are hateful. Someone wrote a 500-word essay about why your voice is "objectively wrong." Another person made a PowerPoint presentation about your worst takes. A third commenter is just the vomit emoji repeated 47 times.',
    category: 'career',
    probability: 0.22,
    requiredCareerId: 'socialMedia',
    cooldown: 6,
    conditions: [
      { type: 'hasCareerId', value: 'socialMedia' },
    ],
    choices: [
      {
        id: 'social_hate_clap_back',
        text: 'Clap back. Reply to the haters with devastating wit.',
        hint: 'Satisfying but feeds the trolls',
        outcomes: [
          {
            weight: 40,
            description:
              'Your replies are fire. Screenshots go viral. "Content creator DESTROYS haters" becomes a trending topic. You gain followers from people who love the drama. The comment section becomes entertainment. You are the main character today.',
            effects: [
              { type: 'career_performance', value: 12, operation: 'add' },
              { type: 'reputation', value: 8, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The trolls are better at this than you. They came prepared. Your clap-backs get clapped back. You\'re now in a war of words with anonymous accounts that have nothing to lose and infinite time. You\'ve activated the hive mind.',
            effects: [
              { type: 'stat', target: 'happiness', value: -15, operation: 'add' },
              { type: 'career_satisfaction', value: -10, operation: 'add' },
              { type: 'stat', target: 'health', value: -5, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'One of your clap-backs is taken out of context and used against you. "Creator BULLIES fan in comment section." The hater is now the victim. You are the villain. The internet has performed its favorite trick: reversing the narrative.',
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
        text: 'Close the app. Touch grass. They can\'t hurt you offline.',
        hint: 'Mentally healthy but the comments persist',
        outcomes: [
          {
            weight: 60,
            description:
              'You go outside. The sun hits your face. A bird chirps. You realize these are all strangers behind screens who will forget about you in a week. You return refreshed, post a happy video, and the audience resets. Mental health: saved.',
            effects: [
              { type: 'stat', target: 'happiness', value: 10, operation: 'add' },
              { type: 'stat', target: 'health', value: 5, operation: 'add' },
              { type: 'career_satisfaction', value: 5, operation: 'add' },
            ],
          },
          {
            weight: 40,
            description:
              'You go outside, but you\'re checking your phone the entire time. You read every comment while sitting in a park. A duck watches you doom-scroll. The duck seems concerned. Even the duck knows this isn\'t healthy.',
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
    description:
      'You wake up to a notification: "Your account has been flagged for review." Your latest video — a cooking tutorial — was apparently flagged for "dangerous content." You made pasta. PASTA. The automated system decided that boiling water is a threat to public safety.',
    category: 'career',
    probability: 0.18,
    requiredCareerId: 'socialMedia',
    cooldown: 10,
    conditions: [
      { type: 'hasCareerId', value: 'socialMedia' },
    ],
    choices: [
      {
        id: 'social_ban_appeal',
        text: 'File an appeal. Your pasta is NOT dangerous content.',
        hint: 'Proper channels, long wait times',
        outcomes: [
          {
            weight: 40,
            description:
              'After 3 weeks, your appeal is reviewed by an actual human who says "I\'m sorry, this was clearly an error. Also, your carbonara looks amazing." Your account is restored. You celebrate with more pasta. The algorithm remains a mystery.',
            effects: [
              { type: 'career_performance', value: 5, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 8, operation: 'add' },
            ],
          },
          {
            weight: 35,
            description:
              'The appeal is denied by another bot. "Content depicting heated liquid projectiles falls under our weapons policy." You are being told that boiling water is a weapon. Your pasta video is classified as arms dealing.',
            effects: [
              { type: 'career_performance', value: -20, operation: 'add' },
              { type: 'stat', target: 'happiness', value: -18, operation: 'add' },
              { type: 'money', value: -5000, operation: 'add' },
            ],
          },
          {
            weight: 25,
            description:
              'During the review period, your account is in limbo. You can\'t post for a month. When you return, the algorithm has forgotten you exist. It\'s like starting over, except with the trauma of knowing how fragile your career is.',
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
        text: 'Post about it on every OTHER platform. Make it a whole thing.',
        hint: 'Public pressure sometimes works, sometimes backfires',
        outcomes: [
          {
            weight: 50,
            description:
              'Your "I got banned for pasta" story goes viral on other platforms. The original platform restores your account within hours after the PR nightmare. You gain followers across all platforms. The pasta that saved your career.',
            effects: [
              { type: 'career_performance', value: 15, operation: 'add' },
              { type: 'reputation', value: 10, operation: 'add' },
              { type: 'stat', target: 'happiness', value: 12, operation: 'add' },
            ],
          },
          {
            weight: 50,
            description:
              'The platform doubles down. "We stand by our automated content moderation." Your account is permanently restricted. You become a cautionary tale about platform dependence. Other creators pour one out for your carbonara.',
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
