import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import { Text } from '../ui';
import { colors } from '../../theme/colors';
import { spacing, borderRadius } from '../../theme/spacing';
import { MiniGameResult, StatEffect } from '../../types/events';

// ============================================================
// Types
// ============================================================

interface InterviewQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  funnyWrongText?: string;
}

interface InterviewGameProps {
  difficulty: number; // 1-10
  careerName: string;
  onComplete: (result: MiniGameResult) => void;
}

// ============================================================
// Question Bank (30+ questions)
// ============================================================

const QUESTION_BANK: InterviewQuestion[] = [
  {
    question: "What's your greatest strength?",
    options: [
      'I work well under pressure and adapt quickly',
      "I'm literally perfect at everything",
      'I once ate 47 hot dogs in a row',
      '...I forgot the question',
    ],
    correctIndex: 0,
    funnyWrongText: 'The interviewer is reconsidering their career choices.',
  },
  {
    question: 'Where do you see yourself in 5 years?',
    options: [
      'Growing within this company in a leadership role',
      'Sitting in YOUR chair',
      "Hopefully not still in this interview",
      'Living off-grid raising alpacas',
    ],
    correctIndex: 0,
    funnyWrongText: 'The interviewer nervously glances at their chair.',
  },
  {
    question: 'Why did you leave your last job?',
    options: [
      'I was seeking new challenges and growth opportunities',
      'They found out about... the incident',
      "My horoscope told me it was time",
      'I never actually left, I just stopped showing up',
    ],
    correctIndex: 0,
    funnyWrongText: "Security has been discreetly notified.",
  },
  {
    question: 'Tell me about a time you failed.',
    options: [
      'I missed a deadline but learned to plan ahead',
      "I've literally never failed at anything ever",
      'Well, there was that time with the fire...',
      '*starts crying*',
    ],
    correctIndex: 0,
    funnyWrongText: 'The interviewer slides a tissue box across the desk.',
  },
  {
    question: 'What salary do you expect?',
    options: [
      "I'm flexible and open to fair market compensation",
      'One... billion... dollars',
      "Whatever you think I'm worth (immediately regrets this)",
      "I'll work for snacks. Good snacks though.",
    ],
    correctIndex: 0,
    funnyWrongText: "The HR department's budget spreadsheet just caught fire.",
  },
  {
    question: 'Why should we hire you?',
    options: [
      'My skills and experience are a great match for this role',
      'Because I showed up, and honestly, that should count',
      'My mom says I\'m very special',
      'I have a very particular set of skills...',
    ],
    correctIndex: 0,
    funnyWrongText: 'The interviewer is now slightly concerned.',
  },
  {
    question: "What's your biggest weakness?",
    options: [
      "I sometimes take on too much but I'm working on delegating",
      'Kryptonite',
      "I'm too honest. Also I steal office supplies.",
      'Weakness? Never heard of her.',
    ],
    correctIndex: 0,
    funnyWrongText: 'The interviewer hides the stapler.',
  },
  {
    question: 'How do you handle conflict at work?',
    options: [
      'I address issues directly and seek compromise',
      'Trial by combat',
      'I write strongly worded emails in ALL CAPS',
      'I simply pretend it doesn\'t exist, like my student loans',
    ],
    correctIndex: 0,
    funnyWrongText: 'HR has been placed on standby.',
  },
  {
    question: 'Describe your ideal work environment.',
    options: [
      'Collaborative, with clear communication and mutual respect',
      'One where nobody talks to me. Ever.',
      "A beach. Specifically, one in Tahiti.",
      'Anywhere with unlimited snacks and nap pods',
    ],
    correctIndex: 0,
  },
  {
    question: 'What motivates you?',
    options: [
      'Making meaningful contributions and seeing results',
      'Pure, unrelenting panic',
      'The alarm clock. Barely.',
      'Money. Next question.',
    ],
    correctIndex: 0,
    funnyWrongText: 'At least they appreciated the honesty.',
  },
  {
    question: 'How do you prioritize your work?',
    options: [
      'I assess urgency and impact, then create a structured plan',
      'Whatever my boss yells about loudest',
      'I use a complex system of coin flips',
      'Prioritize? I just do everything at the last minute.',
    ],
    correctIndex: 0,
  },
  {
    question: 'Tell me about yourself.',
    options: [
      'I have X years of relevant experience and a passion for this field',
      "I was born at a very young age...",
      "I'm a Sagittarius, I like long walks and conspiracy theories",
      '*pulls out 45-minute PowerPoint presentation*',
    ],
    correctIndex: 0,
    funnyWrongText: 'The interviewer is now trapped in slide 3 of 87.',
  },
  {
    question: "What do you know about our company?",
    options: [
      "I've researched your mission, values, and recent achievements",
      "You're the ones who called me, right?",
      'I know where the vending machines are. That counts.',
      'I read your Glassdoor reviews. All of them. We need to talk.',
    ],
    correctIndex: 0,
    funnyWrongText: 'The interviewer suddenly regrets that 1-star review.',
  },
  {
    question: 'How do you handle criticism?',
    options: [
      'I view it as an opportunity to improve',
      'I cry in the bathroom like a professional',
      'Criticism? In this economy?',
      'I keep a detailed list of everyone who has wronged me',
    ],
    correctIndex: 0,
    funnyWrongText: 'The interviewer is now on The List.',
  },
  {
    question: 'Do you work better alone or in a team?',
    options: [
      'I thrive in both settings depending on the task',
      'Alone. People are... complicated.',
      'In a team, so I have someone to blame',
      "I work best when someone's watching. Wait, that sounds wrong.",
    ],
    correctIndex: 0,
  },
  {
    question: "What's your management style?",
    options: [
      "I believe in empowering my team with clear goals and support",
      "Benevolent dictatorship",
      "I manage by vibes and good intentions",
      "I send motivational quotes at 6 AM. Everyone loves it. (They don't.)",
    ],
    correctIndex: 0,
    funnyWrongText: 'Your future team is already updating their resumes.',
  },
  {
    question: 'How do you stay organized?',
    options: [
      'I use a combination of digital tools and time-blocking',
      'I have 47 unread emails and a dream',
      'Organized chaos is still organized, right?',
      'I write things on my hand. Important things on both hands.',
    ],
    correctIndex: 0,
  },
  {
    question: 'What are your long-term career goals?',
    options: [
      'To develop expertise and take on increasing responsibility',
      'World domination, but like, in a corporate way',
      'Retirement. Starting yesterday.',
      'I try not to think past lunch.',
    ],
    correctIndex: 0,
  },
  {
    question: 'How do you handle tight deadlines?',
    options: [
      'I break the work into milestones and communicate proactively',
      'Energy drinks and existential dread',
      "I simply don't believe in deadlines. Time is a construct.",
      'I work best under pressure! *eye twitches*',
    ],
    correctIndex: 0,
    funnyWrongText: 'The interviewer subtly removes the coffee mug from your reach.',
  },
  {
    question: 'Why are you interested in this role?',
    options: [
      'It aligns with my skills and career aspirations',
      'The job listing said "competitive salary" and I love competing',
      'I applied everywhere. You responded first.',
      'I heard you have free parking.',
    ],
    correctIndex: 0,
  },
  {
    question: 'How do you deal with a difficult coworker?',
    options: [
      'I try to understand their perspective and find common ground',
      'Passive-aggressive Post-it notes',
      'I microwave fish in the break room until they transfer',
      'I add them to my LinkedIn. Power move.',
    ],
    correctIndex: 0,
    funnyWrongText: 'The break room will never be the same.',
  },
  {
    question: 'What questions do you have for us?',
    options: [
      "What does a typical day look like? What are the team's goals?",
      'Is it cool if I bring my parrot to work?',
      'What\'s the wifi password? ...for when I\'m "working."',
      'When can I start not working here?',
    ],
    correctIndex: 0,
  },
  {
    question: 'Describe a project you are proud of.',
    options: [
      'I led a project that increased efficiency by 30%',
      "I once built an entire pillow fort in the office. It had rooms.",
      'I survived a group project in college. All of us did. Barely.',
      "I'd rather not. The NDA is still active.",
    ],
    correctIndex: 0,
    funnyWrongText: 'The interviewer really wants to know about the pillow fort.',
  },
  {
    question: 'How do you approach learning new skills?',
    options: [
      'I set structured goals and practice consistently',
      'YouTube tutorials at 2x speed at 2 AM',
      "I just click things until something works",
      'I say "I\'ll learn that later" and never do',
    ],
    correctIndex: 0,
  },
  {
    question: 'What makes you unique?',
    options: [
      'My unique blend of analytical and creative problem-solving',
      "I can touch my nose with my tongue. Want to see?",
      "I'm the only person here who actually read the job description",
      'I have an uncanny ability to find four-leaf clovers',
    ],
    correctIndex: 0,
  },
  {
    question: 'How do you maintain work-life balance?',
    options: [
      'I set boundaries and make time for hobbies and rest',
      "Bold of you to assume I have a life outside work",
      "I don't check email after 5. Or before 5. Or at 5.",
      'What is this "life" you speak of?',
    ],
    correctIndex: 0,
  },
  {
    question: 'Tell me about a time you showed leadership.',
    options: [
      'I stepped up to lead a struggling project to success',
      'I once led a conga line at the office party. Very inspiring.',
      'I chose the restaurant for team lunch. Twice.',
      'I watched every season of The Office. I basically have an MBA.',
    ],
    correctIndex: 0,
  },
  {
    question: 'How do you handle ambiguity at work?',
    options: [
      'I clarify expectations and make informed decisions with limited info',
      'I panic quietly, then Google it',
      'Ambiguity is my middle name. Literally. My parents were confused.',
      'I just agree confidently and figure it out later',
    ],
    correctIndex: 0,
  },
  {
    question: 'What would you do in your first 30 days here?',
    options: [
      'Learn the team dynamics, processes, and identify quick wins',
      'Find the best bathroom. Critical first step.',
      'Redecorate my desk. Priorities.',
      "Assert dominance by solving a problem nobody asked me to solve",
    ],
    correctIndex: 0,
  },
  {
    question: 'How do you handle multiple projects at once?',
    options: [
      'I use prioritization frameworks and regular check-ins',
      'Poorly, but with enthusiasm',
      'I juggle. Literally. It helps me think.',
      'I open all the tabs and let chaos take the wheel',
    ],
    correctIndex: 0,
    funnyWrongText: 'Your browser currently has 200+ tabs open and you know it.',
  },
  {
    question: 'What do you do when you disagree with your boss?',
    options: [
      'I share my perspective respectfully with supporting evidence',
      'I write a strongly worded journal entry about it',
      'I agree publicly and complain to my cat privately',
      "Disagree? With the person who controls my paycheck? Never.",
    ],
    correctIndex: 0,
  },
  {
    question: 'Are you willing to relocate?',
    options: [
      "I'm open to it for the right opportunity",
      'Only if it involves a tropical island',
      'I just got my couch positioned perfectly, so... no.',
      'Does the metaverse count?',
    ],
    correctIndex: 0,
  },
];

// ============================================================
// Helpers
// ============================================================

const TOTAL_QUESTIONS = 5;

function getTimerSeconds(difficulty: number): number {
  if (difficulty >= 7) return 8;
  if (difficulty <= 3) return 12;
  return 10;
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickQuestions(difficulty: number): InterviewQuestion[] {
  const shuffled = shuffleArray(QUESTION_BANK);
  return shuffled.slice(0, TOTAL_QUESTIONS);
}

function buildResult(score: number): MiniGameResult {
  let success: boolean;
  if (score >= 4) {
    success = true;
  } else if (score >= 2) {
    success = Math.random() < 0.5;
  } else {
    success = false;
  }

  const effects: StatEffect[] = [];

  if (success) {
    effects.push(
      { type: 'stat', target: 'happiness', value: 10 + score * 5, operation: 'add' },
      { type: 'stat', target: 'smarts', value: 2, operation: 'add' },
    );
  } else {
    effects.push(
      { type: 'stat', target: 'happiness', value: -(10 - score * 2), operation: 'add' },
    );
  }

  return {
    type: 'interview',
    success,
    score,
    effects,
  };
}

// ============================================================
// Component
// ============================================================

type Phase = 'intro' | 'question' | 'feedback' | 'result';

export default function InterviewGame({
  difficulty,
  careerName,
  onComplete,
}: InterviewGameProps) {
  // ------ state ------
  const [phase, setPhase] = useState<Phase>('intro');
  const [questions] = useState(() => pickQuestions(difficulty));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [timeExpired, setTimeExpired] = useState(false);

  const timerSeconds = getTimerSeconds(difficulty);

  // animated timer bar width (1 -> 0)
  const timerAnim = useRef(new Animated.Value(1)).current;
  const timerRef = useRef<Animated.CompositeAnimation | null>(null);

  // ------ timer management ------
  const startTimer = useCallback(() => {
    timerAnim.setValue(1);
    setTimeExpired(false);
    const animation = Animated.timing(timerAnim, {
      toValue: 0,
      duration: timerSeconds * 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    });
    timerRef.current = animation;
    animation.start(({ finished }) => {
      if (finished) {
        setTimeExpired(true);
        setSelectedOption(-1); // sentinel: time ran out
      }
    });
  }, [timerAnim, timerSeconds]);

  const stopTimer = useCallback(() => {
    timerRef.current?.stop();
  }, []);

  // start timer when a new question appears
  useEffect(() => {
    if (phase === 'question') {
      startTimer();
    }
    return () => stopTimer();
  }, [phase, currentIndex, startTimer, stopTimer]);

  // ------ handlers ------
  const handleStart = () => {
    setPhase('question');
  };

  const handleSelectOption = (index: number) => {
    if (selectedOption !== null) return; // already answered
    stopTimer();
    setSelectedOption(index);

    const isCorrect = index === questions[currentIndex].correctIndex;
    if (isCorrect) {
      setScore((s) => s + 1);
    }

    // brief feedback pause then advance
    setTimeout(() => {
      if (currentIndex + 1 >= TOTAL_QUESTIONS) {
        setPhase('result');
      } else {
        setSelectedOption(null);
        setTimeExpired(false);
        setCurrentIndex((i) => i + 1);
        // phase stays 'question', but currentIndex change restarts timer via effect
      }
    }, 1200);
  };

  // when time expires, auto-advance
  useEffect(() => {
    if (timeExpired && selectedOption === -1) {
      setTimeout(() => {
        if (currentIndex + 1 >= TOTAL_QUESTIONS) {
          setPhase('result');
        } else {
          setSelectedOption(null);
          setTimeExpired(false);
          setCurrentIndex((i) => i + 1);
        }
      }, 1200);
    }
  }, [timeExpired, selectedOption, currentIndex]);

  const handleFinish = () => {
    onComplete(buildResult(score));
  };

  // ------ derived ------
  const currentQ = questions[currentIndex] as InterviewQuestion | undefined;
  const answered = selectedOption !== null;

  // timer bar interpolated color: accent -> warning -> danger
  const timerBarColor = timerAnim.interpolate({
    inputRange: [0, 0.3, 0.6, 1],
    outputRange: [colors.danger, colors.danger, colors.warning, colors.accent],
  });

  // ------ renders ------

  // --- Intro ---
  if (phase === 'intro') {
    return (
      <View style={styles.container}>
        <View style={styles.centeredContent}>
          <Text variant="title2" align="center">
            Job Interview
          </Text>
          <Text
            variant="subhead"
            color={colors.secondaryText}
            align="center"
            style={{ marginTop: spacing.sm }}
          >
            {careerName}
          </Text>

          <View style={styles.infoCard}>
            <Text variant="footnote" color={colors.secondaryText} align="center">
              Answer {TOTAL_QUESTIONS} questions to land the job.
            </Text>
            <Text
              variant="footnote"
              color={colors.secondaryText}
              align="center"
              style={{ marginTop: spacing.xs }}
            >
              You have {timerSeconds}s per question.
            </Text>
          </View>

          <Pressable
            onPress={handleStart}
            style={({ pressed }) => [
              styles.primaryButton,
              { opacity: pressed ? 0.7 : 1 },
            ]}
          >
            <Text variant="headline" color="#FFFFFF" align="center">
              Begin Interview
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }

  // --- Result ---
  if (phase === 'result') {
    const result = buildResult(score);
    const label = score >= 4
      ? 'You nailed it!'
      : score >= 2
        ? "It could go either way..."
        : 'That was rough.';
    const sublabel = result.success
      ? `Congratulations! You got the ${careerName} job!`
      : `Unfortunately, you didn't get the ${careerName} position.`;

    return (
      <View style={styles.container}>
        <View style={styles.centeredContent}>
          <Text variant="title2" align="center">
            Interview Complete
          </Text>

          {/* score pips */}
          <View style={styles.scoreRow}>
            {Array.from({ length: TOTAL_QUESTIONS }).map((_, i) => (
              <View
                key={i}
                style={[
                  styles.scorePip,
                  {
                    backgroundColor: i < score ? colors.success : colors.separator,
                  },
                ]}
              />
            ))}
          </View>

          <Text
            variant="tabularLarge"
            align="center"
            style={{ marginTop: spacing.md }}
          >
            {score}/{TOTAL_QUESTIONS}
          </Text>

          <Text
            variant="headline"
            align="center"
            style={{ marginTop: spacing.sm }}
          >
            {label}
          </Text>
          <Text
            variant="subhead"
            color={result.success ? colors.success : colors.danger}
            align="center"
            style={{ marginTop: spacing.xs }}
          >
            {sublabel}
          </Text>

          <Pressable
            onPress={handleFinish}
            style={({ pressed }) => [
              styles.primaryButton,
              { opacity: pressed ? 0.7 : 1, marginTop: spacing.xl },
            ]}
          >
            <Text variant="headline" color="#FFFFFF" align="center">
              Continue
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }

  // --- Question phase ---
  if (!currentQ) return null;

  return (
    <View style={styles.container}>
      {/* Header: progress + score */}
      <View style={styles.header}>
        <Text variant="footnote" color={colors.secondaryText}>
          Question {currentIndex + 1}/{TOTAL_QUESTIONS}
        </Text>
        <View style={styles.scoreRow}>
          {Array.from({ length: TOTAL_QUESTIONS }).map((_, i) => (
            <View
              key={i}
              style={[
                styles.scorePipSmall,
                {
                  backgroundColor:
                    i < score
                      ? colors.success
                      : i === currentIndex && answered
                        ? selectedOption === currentQ.correctIndex
                          ? colors.success
                          : colors.danger
                        : colors.separator,
                },
              ]}
            />
          ))}
        </View>
      </View>

      {/* Timer bar */}
      <View style={styles.timerTrack}>
        <Animated.View
          style={[
            styles.timerFill,
            {
              width: timerAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
              backgroundColor: timerBarColor,
            },
          ]}
        />
      </View>

      {/* Question */}
      <View style={styles.questionArea}>
        <Text variant="title3" align="center">
          {currentQ.question}
        </Text>
      </View>

      {/* Options */}
      <View style={styles.optionsArea}>
        {currentQ.options.map((option, idx) => {
          let cardBg = colors.surface;
          let cardBorder = colors.cardBorder;
          let textColor = colors.primaryText;

          if (answered) {
            if (idx === currentQ.correctIndex) {
              cardBg = colors.successLight;
              cardBorder = colors.success;
              textColor = colors.primaryText;
            } else if (idx === selectedOption) {
              cardBg = colors.dangerLight;
              cardBorder = colors.danger;
              textColor = colors.primaryText;
            } else {
              cardBg = colors.surface;
              textColor = colors.tertiaryText;
            }
          }

          return (
            <Pressable
              key={idx}
              onPress={() => handleSelectOption(idx)}
              disabled={answered}
              style={({ pressed }) => [
                styles.optionCard,
                {
                  backgroundColor: cardBg,
                  borderColor: cardBorder,
                  opacity: pressed && !answered ? 0.7 : 1,
                },
              ]}
            >
              <Text variant="subhead" color={textColor}>
                {option}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Funny wrong text */}
      {answered && selectedOption !== currentQ.correctIndex && currentQ.funnyWrongText && (
        <View style={styles.funnyText}>
          <Text variant="caption1" color={colors.secondaryText} align="center">
            {timeExpired ? "Time's up!" : currentQ.funnyWrongText}
          </Text>
        </View>
      )}

      {/* Time expired message */}
      {answered && selectedOption === -1 && (
        <View style={styles.funnyText}>
          <Text variant="caption1" color={colors.danger} align="center">
            Time's up! The interviewer stares at you expectantly...
          </Text>
        </View>
      )}
    </View>
  );
}

// ============================================================
// Styles
// ============================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginTop: spacing.xl,
    width: '100%',
  },
  primaryButton: {
    backgroundColor: colors.accent,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.xl,
    marginTop: spacing.lg,
    alignSelf: 'center',
  },

  // --- Header ---
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scoreRow: {
    flexDirection: 'row',
    gap: spacing.xs,
    justifyContent: 'center',
    marginTop: spacing.sm,
  },
  scorePip: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  scorePipSmall: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  // --- Timer ---
  timerTrack: {
    height: 4,
    backgroundColor: colors.separator,
    borderRadius: 2,
    marginTop: spacing.md,
    overflow: 'hidden',
  },
  timerFill: {
    height: '100%',
    borderRadius: 2,
  },

  // --- Question ---
  questionArea: {
    marginTop: spacing.xl,
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.sm,
  },

  // --- Options ---
  optionsArea: {
    gap: spacing.sm,
  },
  optionCard: {
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: borderRadius.md,
    padding: spacing.md,
  },

  // --- Misc ---
  funnyText: {
    marginTop: spacing.md,
    paddingHorizontal: spacing.md,
  },
});
