import React, { useMemo } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, Card, Button } from '../../src/components/ui';
import { CareerListingCard } from '../../src/components/game';
import { useGameStore } from '../../src/store/gameStore';
import { colors, spacing } from '../../src/theme';
import { formatSalary } from '../../src/utils/format';
import { CAREERS, getCareerById } from '../../src/data/careers';
import {
  getAvailableJobs,
  attemptApplication,
  createPosition,
  checkPromotion,
  promote,
  workHardEffect,
  slackOffEffect,
} from '../../src/engine/careers';

export default function CareerScreen() {
  const insets = useSafeAreaInsets();
  const character = useGameStore((s) => s.character);
  const career = character.career;
  const modifyStat = useGameStore((s) => s.modifyStat);
  const addMoney = useGameStore((s) => s.addMoney);
  const addEventToLog = useGameStore((s) => s.addEventToLog);

  // Get available jobs based on player's qualifications
  const availableJobs = useMemo(
    () => getAvailableJobs(CAREERS, { character } as any),
    [character.education, character.stats, character.age],
  );

  // Current career definition
  const currentCareerDef = career ? getCareerById(career.careerId) : null;

  const handleApply = (careerDef: typeof CAREERS[0]) => {
    const result = attemptApplication(careerDef, { character } as any);
    if (result.hired) {
      const position = createPosition(careerDef);
      useGameStore.setState((s) => ({
        character: { ...s.character, career: position },
      }));
      addEventToLog({
        age: character.age,
        season: character.season,
        title: `Hired as ${position.title}`,
        description: result.message,
        outcome: `Starting salary: ${formatSalary(position.salary)}`,
      });
    } else {
      addEventToLog({
        age: character.age,
        season: character.season,
        title: `Application Rejected`,
        description: result.message,
      });
    }
    // Force re-render
    modifyStat('happiness', result.hired ? 5 : -3);
  };

  const handleWorkHard = () => {
    if (!career) return;
    const updates = workHardEffect(career);
    useGameStore.setState((s) => ({
      character: {
        ...s.character,
        career: s.character.career ? { ...s.character.career, ...updates } : null,
      },
    }));
    modifyStat('happiness', -2);
    addEventToLog({
      age: character.age,
      season: character.season,
      title: 'Worked Hard',
      description: 'You put in extra effort at work.',
    });
  };

  const handleSlackOff = () => {
    if (!career) return;
    const updates = slackOffEffect(career);
    useGameStore.setState((s) => ({
      character: {
        ...s.character,
        career: s.character.career ? { ...s.character.career, ...updates } : null,
      },
    }));
    modifyStat('happiness', 3);
    addEventToLog({
      age: character.age,
      season: character.season,
      title: 'Slacked Off',
      description: 'You took it easy at work today.',
    });
  };

  const handleQuit = () => {
    useGameStore.setState((s) => ({
      character: { ...s.character, career: null },
    }));
    addEventToLog({
      age: character.age,
      season: character.season,
      title: 'Quit Job',
      description: career ? `You quit your job as ${career.title}.` : 'You quit your job.',
    });
  };

  const handleRequestPromotion = () => {
    if (!career || !currentCareerDef) return;
    const check = checkPromotion(career, currentCareerDef);
    if (check.eligible) {
      const promoted = promote(career, currentCareerDef);
      useGameStore.setState((s) => ({
        character: { ...s.character, career: promoted },
      }));
      modifyStat('happiness', 10);
      addEventToLog({
        age: character.age,
        season: character.season,
        title: `Promoted to ${promoted.title}!`,
        description: check.message,
        outcome: `New salary: ${formatSalary(promoted.salary)}`,
      });
    } else {
      addEventToLog({
        age: character.age,
        season: character.season,
        title: 'Promotion Denied',
        description: check.message,
      });
      modifyStat('happiness', -3);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[styles.content, { paddingTop: insets.top + spacing.md }]}
        showsVerticalScrollIndicator={false}
      >
        {career && currentCareerDef ? (
          <>
            <Card style={styles.currentJob}>
              <Text variant="footnote" color={colors.secondaryText}>
                CURRENT POSITION
              </Text>
              <Text variant="title2">
                {currentCareerDef.emoji} {career.title}
              </Text>
              <Text variant="tabular" color={colors.success}>
                {formatSalary(career.salary)}
              </Text>
              <View style={styles.jobStats}>
                <View style={styles.jobStat}>
                  <Text variant="caption1" color={colors.secondaryText}>Performance</Text>
                  <Text variant="headline">{Math.round(career.performance)}%</Text>
                </View>
                <View style={styles.jobStat}>
                  <Text variant="caption1" color={colors.secondaryText}>Satisfaction</Text>
                  <Text variant="headline">{Math.round(career.satisfaction)}%</Text>
                </View>
                <View style={styles.jobStat}>
                  <Text variant="caption1" color={colors.secondaryText}>Seasons</Text>
                  <Text variant="headline">{career.seasonsInRole}</Text>
                </View>
              </View>
            </Card>

            <View style={styles.actions}>
              <Button title="Work Hard" onPress={handleWorkHard} variant="secondary" />
              <Button title="Ask for Promotion" onPress={handleRequestPromotion} variant="primary" />
              <Button title="Slack Off" onPress={handleSlackOff} variant="ghost" />
              <Button title="Quit Job" onPress={handleQuit} variant="danger" />
            </View>
          </>
        ) : (
          <>
            <Text variant="title2" align="center" style={styles.noJob}>
              Unemployed
            </Text>
            <Text variant="body" color={colors.secondaryText} align="center">
              Browse job listings below
            </Text>
          </>
        )}

        {/* Job Listings */}
        <Text variant="headline" style={styles.sectionTitle}>
          Job Listings
        </Text>
        {character.age < 14 ? (
          <Text variant="body" color={colors.tertiaryText} align="center">
            You're too young to work. Enjoy childhood!
          </Text>
        ) : availableJobs.length === 0 ? (
          <Text variant="body" color={colors.tertiaryText} align="center">
            No jobs match your current qualifications. Try improving your education or stats.
          </Text>
        ) : (
          availableJobs
            .filter((j) => !career || j.id !== career.careerId)
            .map((careerDef) => (
              <CareerListingCard
                key={careerDef.id}
                career={careerDef}
                canApply={!career}
                onApply={() => handleApply(careerDef)}
              />
            ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
    gap: spacing.md,
  },
  currentJob: {
    gap: spacing.sm,
  },
  jobStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: spacing.sm,
  },
  jobStat: {
    alignItems: 'center',
    gap: spacing.xs,
  },
  actions: {
    gap: spacing.sm,
  },
  noJob: {
    marginTop: spacing.xl,
  },
  sectionTitle: {
    marginTop: spacing.lg,
  },
});
