import React, { useState, useMemo } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Dimensions,
  Alert,
} from 'react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, Card, Button } from '../src/components/ui';
import { useGameStore } from '../src/store/gameStore';
import { colors, spacing } from '../src/theme';
import { borderRadius } from '../src/theme/spacing';
import {
  UNIVERSITIES,
  MAJORS,
  attemptUniversityApplication,
  type University,
  type Major,
} from '../src/data/universities';

const SCREEN_HEIGHT = Dimensions.get('window').height;

type Step = 'universities' | 'major' | 'result';

export default function UniversitySelectionScreen() {
  const insets = useSafeAreaInsets();
  const character = useGameStore((s) => s.character);
  const addEventToLog = useGameStore((s) => s.addEventToLog);

  const [step, setStep] = useState<Step>('universities');
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [selectedMajor, setSelectedMajor] = useState<Major | null>(null);
  const [resultMessage, setResultMessage] = useState('');
  const [accepted, setAccepted] = useState(false);

  const smarts = character.stats.smarts;

  // Sorted: eligible first, then by prestige descending
  const sortedUniversities = useMemo(() => {
    return [...UNIVERSITIES].sort((a, b) => {
      const aEligible = smarts >= a.minSmarts ? 1 : 0;
      const bEligible = smarts >= b.minSmarts ? 1 : 0;
      if (aEligible !== bEligible) return bEligible - aEligible;
      return b.prestige - a.prestige;
    });
  }, [smarts]);

  const handleSelectUniversity = (uni: University) => {
    setSelectedUniversity(uni);
    setStep('major');
  };

  const handleSelectMajor = (major: Major) => {
    setSelectedMajor(major);

    if (!selectedUniversity) return;

    // Attempt application
    const result = attemptUniversityApplication(selectedUniversity, smarts);
    setAccepted(result.accepted);
    setResultMessage(result.message);

    if (result.accepted) {
      // Enroll in university
      useGameStore.setState((s) => ({
        character: {
          ...s.character,
          education: {
            ...s.character.education,
            level: 'college',
            school: selectedUniversity.name,
            major: major.name,
            majorId: major.id,
            universityPrestige: selectedUniversity.prestige,
            yearsCompleted: 0,
            isEnrolled: true,
          },
        },
        pendingUniversityChoice: false,
      }));

      addEventToLog({
        age: character.age,
        season: character.season,
        title: `Accepted to ${selectedUniversity.name}!`,
        description: `${result.message} Majoring in ${major.name}.`,
        emoji: '🎓',
      });
    } else {
      addEventToLog({
        age: character.age,
        season: character.season,
        title: 'University Application',
        description: result.message,
        emoji: '📋',
      });
    }

    setStep('result');
  };

  const handleSkipCollege = () => {
    useGameStore.setState({ pendingUniversityChoice: false });
    addEventToLog({
      age: character.age,
      season: character.season,
      title: 'Skipped College',
      description: 'You decided not to pursue higher education and enter the workforce directly.',
      emoji: '💼',
    });
    router.back();
  };

  const handleDone = () => {
    if (!accepted) {
      // Go back to university list to try again
      setStep('universities');
      setSelectedUniversity(null);
      setSelectedMajor(null);
      setResultMessage('');
    } else {
      router.back();
    }
  };

  const prestigeStars = (prestige: number) => '★'.repeat(prestige) + '☆'.repeat(5 - prestige);

  return (
    <View style={styles.overlay}>
      <View style={[styles.sheet, { paddingBottom: insets.bottom + spacing.lg }]}>
        {/* Drag handle */}
        <View style={styles.handle} />

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {step === 'universities' && (
            <>
              <Text variant="title2" align="center">
                🎓 College Applications
              </Text>
              <Text variant="body" color={colors.secondaryText} align="center" style={styles.subtitle}>
                You graduated high school! Choose a university to apply to, or skip college entirely.
              </Text>

              {sortedUniversities.map((uni) => {
                const eligible = smarts >= uni.minSmarts;
                return (
                  <Pressable
                    key={uni.id}
                    onPress={() => eligible && handleSelectUniversity(uni)}
                    style={({ pressed }) => [
                      styles.uniCard,
                      !eligible && styles.uniCardDisabled,
                      pressed && eligible && { opacity: 0.7 },
                    ]}
                  >
                    <View style={styles.uniHeader}>
                      <Text style={styles.uniEmoji}>{uni.emoji}</Text>
                      <View style={styles.uniInfo}>
                        <Text variant="headline">{uni.name}</Text>
                        <Text variant="caption1" color={colors.warning}>
                          {prestigeStars(uni.prestige)}
                        </Text>
                      </View>
                      <Text variant="tabular" color={eligible ? colors.success : colors.danger}>
                        ${(uni.tuitionPerSeason * 4).toLocaleString()}/yr
                      </Text>
                    </View>
                    <Text variant="footnote" color={colors.secondaryText}>
                      {uni.description}
                    </Text>
                    {!eligible && (
                      <Text variant="caption1" color={colors.danger} style={styles.reqText}>
                        Requires higher grades (Smarts {uni.minSmarts}+)
                      </Text>
                    )}
                  </Pressable>
                );
              })}

              <Button
                title="Skip College"
                onPress={handleSkipCollege}
                variant="ghost"
                style={styles.skipButton}
              />
            </>
          )}

          {step === 'major' && selectedUniversity && (
            <>
              <Text variant="title2" align="center">
                📖 Choose Your Major
              </Text>
              <Text variant="body" color={colors.secondaryText} align="center" style={styles.subtitle}>
                Applying to {selectedUniversity.name}. Pick a field of study.
              </Text>

              {MAJORS.map((major) => (
                <Pressable
                  key={major.id}
                  onPress={() => handleSelectMajor(major)}
                  style={({ pressed }) => [
                    styles.majorCard,
                    pressed && { opacity: 0.7 },
                  ]}
                >
                  <View style={styles.majorHeader}>
                    <Text style={styles.majorEmoji}>{major.emoji}</Text>
                    <View style={styles.majorInfo}>
                      <Text variant="headline">{major.name}</Text>
                      <Text variant="footnote" color={colors.secondaryText}>
                        {major.description}
                      </Text>
                    </View>
                  </View>
                  {major.careerBonus.length > 0 && (
                    <Text variant="caption1" color={colors.accent} style={styles.bonusText}>
                      Career boost: {major.careerBonus.join(', ')}
                    </Text>
                  )}
                </Pressable>
              ))}

              <Button
                title="Back"
                onPress={() => setStep('universities')}
                variant="ghost"
                style={styles.skipButton}
              />
            </>
          )}

          {step === 'result' && (
            <>
              <Text variant="title2" align="center">
                {accepted ? '🎉 Accepted!' : '😔 Rejected'}
              </Text>
              <Card style={styles.resultCard}>
                <Text variant="body" align="center">
                  {resultMessage}
                </Text>
                {accepted && selectedUniversity && selectedMajor && (
                  <View style={styles.resultDetails}>
                    <Text variant="footnote" color={colors.secondaryText}>
                      {selectedUniversity.name} — {selectedMajor.name}
                    </Text>
                    <Text variant="footnote" color={colors.secondaryText}>
                      Tuition: ${(selectedUniversity.tuitionPerSeason * 4).toLocaleString()}/year
                    </Text>
                  </View>
                )}
              </Card>
              <Button
                title={accepted ? 'Start College' : 'Try Another School'}
                onPress={handleDone}
                variant="primary"
              />
              {!accepted && (
                <Button
                  title="Skip College"
                  onPress={handleSkipCollege}
                  variant="ghost"
                  style={styles.skipButton}
                />
              )}
            </>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: colors.background,
    borderTopLeftRadius: borderRadius.xl,
    borderTopRightRadius: borderRadius.xl,
    maxHeight: SCREEN_HEIGHT * 0.92,
    minHeight: SCREEN_HEIGHT * 0.5,
  },
  handle: {
    width: 36,
    height: 5,
    borderRadius: borderRadius.full,
    backgroundColor: colors.separator,
    alignSelf: 'center',
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  content: {
    padding: spacing.lg,
    gap: spacing.md,
    paddingBottom: spacing.xxl,
  },
  subtitle: {
    marginBottom: spacing.sm,
  },
  uniCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    gap: spacing.sm,
  },
  uniCardDisabled: {
    opacity: 0.5,
  },
  uniHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  uniEmoji: {
    fontSize: 32,
    lineHeight: 40,
  },
  uniInfo: {
    flex: 1,
    gap: 2,
  },
  reqText: {
    marginTop: spacing.xs,
  },
  majorCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    gap: spacing.sm,
  },
  majorHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
  },
  majorEmoji: {
    fontSize: 28,
    lineHeight: 36,
  },
  majorInfo: {
    flex: 1,
    gap: 2,
  },
  bonusText: {
    marginLeft: 36 + spacing.sm,
  },
  resultCard: {
    gap: spacing.sm,
    alignItems: 'center',
  },
  resultDetails: {
    gap: spacing.xs,
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  skipButton: {
    marginTop: spacing.sm,
  },
});
