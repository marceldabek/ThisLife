import React, { useCallback, useMemo, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text, Button, Card } from '../ui';
import { colors } from '../../theme/colors';
import { spacing, borderRadius } from '../../theme/spacing';
import { MiniGameResult, StatEffect } from '../../types/events';

// ============================================================
// ThisLife — Exam Mini-Game
// ============================================================

type Difficulty = 'easy' | 'medium' | 'hard';

interface ExamGameProps {
  difficulty: Difficulty;
  subject?: string;
  playerSmarts: number;
  onComplete: (result: MiniGameResult & { grade: string }) => void;
}

interface Question {
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
}

// ---- Question Banks -----------------------------------------------

const EASY_QUESTIONS: Question[] = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctIndex: 2,
  },
  {
    question: 'What is 7 x 8?',
    options: ['48', '54', '56', '64'],
    correctIndex: 2,
  },
  {
    question: 'How many planets are in the solar system?',
    options: ['7', '8', '9', '10'],
    correctIndex: 1,
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
    correctIndex: 3,
  },
  {
    question: 'What gas do plants absorb from the atmosphere?',
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Helium'],
    correctIndex: 2,
  },
  {
    question: 'How many continents are there?',
    options: ['5', '6', '7', '8'],
    correctIndex: 2,
  },
  {
    question: 'What is the boiling point of water in Celsius?',
    options: ['90', '100', '110', '120'],
    correctIndex: 1,
  },
  {
    question: 'Which planet is closest to the Sun?',
    options: ['Venus', 'Earth', 'Mercury', 'Mars'],
    correctIndex: 2,
  },
  {
    question: 'What is 12 x 12?',
    options: ['124', '132', '144', '148'],
    correctIndex: 2,
  },
  {
    question: 'What is the largest mammal on Earth?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    correctIndex: 1,
  },
  {
    question: 'How many days are in a leap year?',
    options: ['364', '365', '366', '367'],
    correctIndex: 2,
  },
  {
    question: 'What color do you get when you mix red and blue?',
    options: ['Green', 'Orange', 'Purple', 'Brown'],
    correctIndex: 2,
  },
  {
    question: 'Which organ pumps blood through the body?',
    options: ['Brain', 'Lungs', 'Liver', 'Heart'],
    correctIndex: 3,
  },
  {
    question: 'What is the chemical symbol for water?',
    options: ['O2', 'H2O', 'CO2', 'NaCl'],
    correctIndex: 1,
  },
  {
    question: 'What is 25% of 200?',
    options: ['25', '40', '50', '75'],
    correctIndex: 2,
  },
];

const MEDIUM_QUESTIONS: Question[] = [
  {
    question: 'What year did World War II end?',
    options: ['1943', '1944', '1945', '1946'],
    correctIndex: 2,
  },
  {
    question: 'What is the powerhouse of the cell?',
    options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi Apparatus'],
    correctIndex: 2,
  },
  {
    question: 'Solve for x: 2x + 5 = 15',
    options: ['3', '4', '5', '6'],
    correctIndex: 2,
  },
  {
    question: 'Who wrote Romeo and Juliet?',
    options: ['Dickens', 'Shakespeare', 'Chaucer', 'Austen'],
    correctIndex: 1,
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Go', 'Gd', 'Au', 'Ag'],
    correctIndex: 2,
  },
  {
    question: 'Which amendment abolished slavery in the US?',
    options: ['12th', '13th', '14th', '15th'],
    correctIndex: 1,
  },
  {
    question: 'What is the formula for the area of a circle?',
    options: ['2\u03C0r', '\u03C0r\u00B2', '\u03C0d', '2\u03C0r\u00B2'],
    correctIndex: 1,
  },
  {
    question: 'What element does "O" represent on the periodic table?',
    options: ['Osmium', 'Oganesson', 'Oxygen', 'Olivine'],
    correctIndex: 2,
  },
  {
    question: 'In which year did the Berlin Wall fall?',
    options: ['1987', '1988', '1989', '1991'],
    correctIndex: 2,
  },
  {
    question: 'What is the longest river in the world?',
    options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
    correctIndex: 1,
  },
  {
    question: 'What type of bond shares electrons between atoms?',
    options: ['Ionic', 'Covalent', 'Metallic', 'Hydrogen'],
    correctIndex: 1,
  },
  {
    question: 'Solve for x: 3x - 7 = 14',
    options: ['5', '6', '7', '8'],
    correctIndex: 2,
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Michelangelo', 'Raphael', 'Da Vinci', 'Donatello'],
    correctIndex: 2,
  },
  {
    question: 'What is the pH of pure water?',
    options: ['5', '6', '7', '8'],
    correctIndex: 2,
  },
  {
    question: 'What is the square root of 144?',
    options: ['10', '11', '12', '14'],
    correctIndex: 2,
  },
];

const HARD_QUESTIONS: Question[] = [
  {
    question: 'What economic principle explains opportunity cost?',
    options: [
      'Supply and Demand',
      'Scarcity',
      'Comparative Advantage',
      'Marginal Utility',
    ],
    correctIndex: 1,
  },
  {
    question: "Who wrote 'The Republic'?",
    options: ['Aristotle', 'Plato', 'Socrates', 'Homer'],
    correctIndex: 1,
  },
  {
    question: 'What is the derivative of x\u00B2?',
    options: ['x', '2x', 'x\u00B2', '2'],
    correctIndex: 1,
  },
  {
    question: 'What is Avogadro\'s number approximately equal to?',
    options: ['6.02 x 10\u00B2\u00B3', '3.14 x 10\u00B2\u00B3', '6.67 x 10\u207B\u00B9\u00B9', '1.38 x 10\u207B\u00B2\u00B3'],
    correctIndex: 0,
  },
  {
    question: 'In philosophy, what is the "categorical imperative" associated with?',
    options: ['Hume', 'Kant', 'Nietzsche', 'Locke'],
    correctIndex: 1,
  },
  {
    question: 'What does the Heisenberg Uncertainty Principle state?',
    options: [
      'Energy is always conserved',
      'Light behaves as both wave and particle',
      'Position and momentum cannot both be precisely known',
      'Entropy always increases',
    ],
    correctIndex: 2,
  },
  {
    question: 'What is the integral of 1/x?',
    options: ['x\u00B2', 'ln|x| + C', '1/x\u00B2', 'e\u02E3'],
    correctIndex: 1,
  },
  {
    question: "Which logical fallacy assumes the conclusion within the premise?",
    options: [
      'Straw Man',
      'Ad Hominem',
      'Begging the Question',
      'Red Herring',
    ],
    correctIndex: 2,
  },
  {
    question: 'What treaty ended World War I?',
    options: [
      'Treaty of Paris',
      'Treaty of Versailles',
      'Treaty of Ghent',
      'Treaty of Tordesillas',
    ],
    correctIndex: 1,
  },
  {
    question: 'In genetics, what does "epistasis" refer to?',
    options: [
      'Gene duplication',
      'One gene masking another',
      'Chromosome crossing over',
      'Spontaneous mutation',
    ],
    correctIndex: 1,
  },
  {
    question: 'Who developed the theory of general relativity?',
    options: ['Newton', 'Bohr', 'Einstein', 'Hawking'],
    correctIndex: 2,
  },
  {
    question: 'What is the time complexity of binary search?',
    options: ['O(n)', 'O(n\u00B2)', 'O(log n)', 'O(1)'],
    correctIndex: 2,
  },
  {
    question: 'What neurotransmitter is primarily associated with mood regulation?',
    options: ['Dopamine', 'Serotonin', 'Acetylcholine', 'GABA'],
    correctIndex: 1,
  },
  {
    question: "What is Godel's Incompleteness Theorem about?",
    options: [
      'Physics cannot explain consciousness',
      'No consistent formal system can prove all truths about arithmetic',
      'Mathematical proofs require infinite steps',
      'Computers cannot solve all problems',
    ],
    correctIndex: 1,
  },
  {
    question: 'What is the Nash Equilibrium?',
    options: [
      'Market price where supply equals demand',
      'A state where no player benefits from changing strategy alone',
      'The point of maximum entropy',
      'Optimal tax rate for economic growth',
    ],
    correctIndex: 1,
  },
];

// ---- Helpers ------------------------------------------------------

const QUESTION_BANKS: Record<Difficulty, Question[]> = {
  easy: EASY_QUESTIONS,
  medium: MEDIUM_QUESTIONS,
  hard: HARD_QUESTIONS,
};

const TOTAL_QUESTIONS = 8;
const MAX_HINTS = 2;

/** Fisher-Yates shuffle (returns a new array). */
function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickQuestions(difficulty: Difficulty): Question[] {
  const bank = QUESTION_BANKS[difficulty];
  return shuffle(bank).slice(0, TOTAL_QUESTIONS);
}

interface GradeInfo {
  letter: string;
  label: string;
  success: boolean;
  effects: StatEffect[];
}

function computeGrade(score: number): GradeInfo {
  if (score >= 7) {
    return {
      letter: 'A',
      label: 'Excellent',
      success: true,
      effects: [{ type: 'stat', target: 'smarts', value: 5, operation: 'add' }],
    };
  }
  if (score >= 5) {
    return {
      letter: 'B',
      label: 'Good',
      success: true,
      effects: [{ type: 'stat', target: 'smarts', value: 2, operation: 'add' }],
    };
  }
  if (score >= 3) {
    return {
      letter: 'C',
      label: 'Average',
      success: true,
      effects: [],
    };
  }
  if (score >= 1) {
    return {
      letter: 'D',
      label: 'Poor',
      success: false,
      effects: [{ type: 'stat', target: 'happiness', value: -5, operation: 'add' }],
    };
  }
  return {
    letter: 'F',
    label: 'Fail',
    success: false,
    effects: [{ type: 'stat', target: 'happiness', value: -10, operation: 'add' }],
  };
}

function difficultyLabel(d: Difficulty): string {
  switch (d) {
    case 'easy':
      return 'Elementary';
    case 'medium':
      return 'High School';
    case 'hard':
      return 'College';
  }
}

// ---- Feedback flash duration (ms) ---------------------------------

const FLASH_DURATION = 600;

// ---- Component ----------------------------------------------------

type Phase = 'question' | 'feedback' | 'result';

export function ExamGame({
  difficulty,
  subject,
  playerSmarts,
  onComplete,
}: ExamGameProps) {
  const questions = useMemo(() => pickQuestions(difficulty), [difficulty]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<Phase>('question');
  const [lastCorrect, setLastCorrect] = useState(false);
  const [hintsRemaining, setHintsRemaining] = useState(MAX_HINTS);
  const [eliminatedIndices, setEliminatedIndices] = useState<number[]>([]);

  const canHint = playerSmarts > 70 && hintsRemaining > 0;

  // -- Actions ------------------------------------------------------

  const advanceOrFinish = useCallback(
    (newScore: number, nextIndex: number) => {
      if (nextIndex >= TOTAL_QUESTIONS) {
        setPhase('result');
      } else {
        setCurrentIndex(nextIndex);
        setEliminatedIndices([]);
        setPhase('question');
      }
    },
    [],
  );

  const handleAnswer = useCallback(
    (selectedIndex: number) => {
      if (phase !== 'question') return;

      const correct = selectedIndex === questions[currentIndex].correctIndex;
      const newScore = correct ? score + 1 : score;
      setScore(newScore);
      setLastCorrect(correct);
      setPhase('feedback');

      setTimeout(() => {
        advanceOrFinish(newScore, currentIndex + 1);
      }, FLASH_DURATION);
    },
    [phase, questions, currentIndex, score, advanceOrFinish],
  );

  const handleSkip = useCallback(() => {
    if (phase !== 'question') return;
    setLastCorrect(false);
    setPhase('feedback');

    setTimeout(() => {
      advanceOrFinish(score, currentIndex + 1);
    }, FLASH_DURATION);
  }, [phase, score, currentIndex, advanceOrFinish]);

  const handleHint = useCallback(() => {
    if (!canHint || phase !== 'question') return;

    const q = questions[currentIndex];
    const wrongIndices = [0, 1, 2, 3].filter(
      (i) => i !== q.correctIndex && !eliminatedIndices.includes(i),
    );
    const toEliminate = shuffle(wrongIndices).slice(0, 2);
    setEliminatedIndices((prev) => [...prev, ...toEliminate]);
    setHintsRemaining((h) => h - 1);
  }, [canHint, phase, questions, currentIndex, eliminatedIndices]);

  const handleFinish = useCallback(() => {
    const grade = computeGrade(score);
    onComplete({
      type: 'exam',
      success: grade.success,
      score,
      effects: grade.effects,
      grade: grade.letter,
    });
  }, [score, onComplete]);

  // -- Derived ------------------------------------------------------

  const question: Question | undefined = questions[currentIndex];
  const progress = Math.min(currentIndex + 1, TOTAL_QUESTIONS);
  const progressRatio = progress / TOTAL_QUESTIONS;

  // -- Render helpers -----------------------------------------------

  const renderProgressBar = () => (
    <View style={styles.progressSection}>
      <View style={styles.progressRow}>
        <Text variant="footnote" color={colors.secondaryText}>
          Question {progress} of {TOTAL_QUESTIONS}
        </Text>
        {canHint && phase === 'question' && (
          <Pressable
            onPress={handleHint}
            style={({ pressed }) => [
              styles.hintButton,
              pressed && { opacity: 0.6 },
            ]}
          >
            <Text variant="footnote" color={colors.accent}>
              Hint ({hintsRemaining})
            </Text>
          </Pressable>
        )}
      </View>
      <View style={styles.progressTrack}>
        <View
          style={[styles.progressFill, { width: `${progressRatio * 100}%` }]}
        />
      </View>
    </View>
  );

  const renderQuestion = () => {
    if (!question) return null;

    const feedbackBg =
      phase === 'feedback'
        ? lastCorrect
          ? colors.successLight
          : colors.dangerLight
        : colors.background;

    return (
      <View style={[styles.questionArea, { backgroundColor: feedbackBg }]}>
        {subject && (
          <Text
            variant="caption1"
            color={colors.secondaryText}
            style={styles.subjectLabel}
          >
            {subject.toUpperCase()}
          </Text>
        )}
        <Text variant="title2" align="center" style={styles.questionText}>
          {question.question}
        </Text>

        <View style={styles.optionsContainer}>
          {question.options.map((option, idx) => {
            const eliminated = eliminatedIndices.includes(idx);

            if (eliminated) {
              return (
                <View key={idx} style={[styles.optionCard, styles.optionEliminated]}>
                  <Text variant="body" color={colors.tertiaryText} style={styles.strikethrough}>
                    {option}
                  </Text>
                </View>
              );
            }

            const disabled = phase !== 'question';

            let cardStyle = styles.optionCard;
            if (phase === 'feedback') {
              if (idx === question.correctIndex) {
                cardStyle = StyleSheet.flatten([
                  styles.optionCard,
                  styles.optionCorrect,
                ]) as typeof styles.optionCard;
              }
            }

            return (
              <Pressable
                key={idx}
                disabled={disabled}
                onPress={() => handleAnswer(idx)}
                style={({ pressed }) => [
                  cardStyle,
                  pressed && !disabled && { opacity: 0.7, transform: [{ scale: 0.98 }] },
                ]}
              >
                <View style={styles.optionInner}>
                  <View style={styles.optionLetter}>
                    <Text variant="footnote" color={colors.secondaryText}>
                      {String.fromCharCode(65 + idx)}
                    </Text>
                  </View>
                  <Text variant="body" style={styles.optionText}>
                    {option}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>

        {phase === 'question' && (
          <Pressable
            onPress={handleSkip}
            style={({ pressed }) => [
              styles.skipButton,
              pressed && { opacity: 0.5 },
            ]}
          >
            <Text variant="subhead" color={colors.secondaryText}>
              Skip
            </Text>
          </Pressable>
        )}

        {phase === 'feedback' && (
          <Text
            variant="headline"
            color={lastCorrect ? colors.success : colors.danger}
            align="center"
            style={styles.feedbackText}
          >
            {lastCorrect ? 'Correct' : 'Incorrect'}
          </Text>
        )}
      </View>
    );
  };

  const renderResult = () => {
    const grade = computeGrade(score);
    const gradeColor = grade.success ? colors.success : colors.danger;

    return (
      <View style={styles.resultContainer}>
        <Text variant="footnote" color={colors.secondaryText} align="center">
          {difficultyLabel(difficulty)} Exam{subject ? ` — ${subject}` : ''}
        </Text>

        <View style={[styles.gradeBadge, { borderColor: gradeColor }]}>
          <Text
            variant="largeTitle"
            color={gradeColor}
            align="center"
            style={styles.gradeLetter}
          >
            {grade.letter}
          </Text>
        </View>

        <Text variant="title3" align="center">
          {grade.label}
        </Text>

        <Text
          variant="tabular"
          color={colors.secondaryText}
          align="center"
          style={styles.scoreText}
        >
          {score} / {TOTAL_QUESTIONS}
        </Text>

        <Card style={styles.summaryCard}>
          <Text variant="subhead" color={colors.secondaryText} align="center">
            {grade.success
              ? score >= 7
                ? 'Outstanding work. Your intellect is growing.'
                : score >= 5
                  ? 'Solid performance. You passed.'
                  : 'You scraped by. Room for improvement.'
              : score >= 1
                ? 'You need to study harder.'
                : 'Complete failure. Hit the books.'}
          </Text>
        </Card>

        <Button
          title={grade.success ? 'Continue' : 'Accept Results'}
          variant={grade.success ? 'primary' : 'secondary'}
          size="large"
          onPress={handleFinish}
          style={styles.finishButton}
        />
      </View>
    );
  };

  // -- Main render --------------------------------------------------

  return (
    <View style={styles.container}>
      {phase !== 'result' && renderProgressBar()}
      {phase !== 'result' ? renderQuestion() : renderResult()}
    </View>
  );
}

// ---- Styles -------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },

  // Progress
  progressSection: {
    marginBottom: spacing.xl,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  progressTrack: {
    height: 4,
    backgroundColor: colors.separator,
    borderRadius: borderRadius.full,
    overflow: 'hidden',
  },
  progressFill: {
    height: 4,
    backgroundColor: colors.accent,
    borderRadius: borderRadius.full,
  },

  // Hint
  hintButton: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.accentLight,
    borderRadius: borderRadius.full,
  },

  // Question
  questionArea: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.lg,
  },
  subjectLabel: {
    marginBottom: spacing.sm,
    textAlign: 'center',
    letterSpacing: 1.2,
  },
  questionText: {
    marginBottom: spacing.xl,
    paddingHorizontal: spacing.sm,
  },

  // Options
  optionsContainer: {
    gap: spacing.sm,
  },
  optionCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
  },
  optionEliminated: {
    opacity: 0.35,
    backgroundColor: colors.surface,
  },
  optionCorrect: {
    borderColor: colors.success,
    backgroundColor: colors.successLight,
  },
  optionInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionLetter: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
    borderWidth: 1,
    borderColor: colors.separator,
  },
  optionText: {
    flex: 1,
  },
  strikethrough: {
    textDecorationLine: 'line-through',
  },

  // Skip & Feedback
  skipButton: {
    alignSelf: 'center',
    marginTop: spacing.lg,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  feedbackText: {
    marginTop: spacing.md,
  },

  // Result
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
  },
  gradeBadge: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.lg,
    marginBottom: spacing.md,
  },
  gradeLetter: {
    fontSize: 56,
    lineHeight: 64,
  },
  scoreText: {
    marginTop: spacing.xs,
    marginBottom: spacing.xl,
  },
  summaryCard: {
    width: '100%',
    marginBottom: spacing.xl,
  },
  finishButton: {
    width: '100%',
  },
});
