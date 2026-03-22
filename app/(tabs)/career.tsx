import React, { useMemo, useState } from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, Card, Button } from '../../src/components/ui';
import { CareerListingCard } from '../../src/components/game';
import { useGameStore } from '../../src/store/gameStore';
import { colors, spacing } from '../../src/theme';
import { borderRadius } from '../../src/theme/spacing';
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
import { generateCoworkers } from '../../src/engine/relationships';

export default function CareerScreen() {
  const insets = useSafeAreaInsets();
  const character = useGameStore((s) => s.character);
  const career = character.career;
  const modifyStat = useGameStore((s) => s.modifyStat);
  const addEventToLog = useGameStore((s) => s.addEventToLog);
  const [showListings, setShowListings] = useState(false);

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

      // Generate coworkers
      const coworkers = generateCoworkers(character.age);
      for (const coworker of coworkers) {
        useGameStore.getState().addRelationship(coworker);
      }

      addEventToLog({
        age: character.age,
        season: character.season,
        title: `Hired at ${position.companyName}`,
        description: `${result.message} Starting as ${position.title}.`,
        outcome: `Salary: ${formatSalary(position.salary)}/season`,
        emoji: '💼',
      });
      setShowListings(false);
    } else {
      addEventToLog({
        age: character.age,
        season: character.season,
        title: 'Application Rejected',
        description: result.message,
        emoji: '📋',
      });
    }
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
      description: `You put in extra effort at ${career.companyName}.`,
      emoji: '💪',
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
      emoji: '😴',
    });
  };

  const handleQuit = () => {
    const companyName = career?.companyName || 'your job';
    const title = career?.title || '';
    useGameStore.setState((s) => ({
      character: { ...s.character, career: null },
    }));
    addEventToLog({
      age: character.age,
      season: character.season,
      title: 'Quit Job',
      description: `You quit your position as ${title} at ${companyName}.`,
      emoji: '🚪',
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
        outcome: `New salary: ${formatSalary(promoted.salary)}/season`,
        emoji: '🎉',
      });
    } else {
      addEventToLog({
        age: character.age,
        season: character.season,
        title: 'Promotion Denied',
        description: check.message,
        emoji: '😞',
      });
      modifyStat('happiness', -3);
    }
  };

  // ---- EMPLOYED VIEW ----
  if (career && currentCareerDef) {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={[styles.content, { paddingTop: insets.top + spacing.md }]}
          showsVerticalScrollIndicator={false}
        >
          {/* Current Job Card */}
          <Card style={styles.currentJob}>
            <Text variant="caption1" color={colors.secondaryText}>
              CURRENT POSITION
            </Text>
            <View style={styles.jobTitle}>
              <Text variant="title2">
                {currentCareerDef.emoji} {career.title}
              </Text>
              <Text variant="subhead" color={colors.secondaryText}>
                {career.companyName}
              </Text>
            </View>
            <Text variant="tabular" color={colors.money}>
              {formatSalary(career.salary)}/season
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
                <Text variant="caption1" color={colors.secondaryText}>Tenure</Text>
                <Text variant="headline">{career.seasonsInRole}s</Text>
              </View>
            </View>
          </Card>

          {/* Work Actions */}
          <View style={styles.actionsGrid}>
            <Pressable
              onPress={handleWorkHard}
              style={({ pressed }) => [styles.actionCard, pressed && styles.actionPressed]}
            >
              <Text style={styles.actionEmoji}>💪</Text>
              <Text variant="headline">Work Hard</Text>
              <Text variant="caption1" color={colors.secondaryText}>+Performance, -Happiness</Text>
            </Pressable>
            <Pressable
              onPress={handleSlackOff}
              style={({ pressed }) => [styles.actionCard, pressed && styles.actionPressed]}
            >
              <Text style={styles.actionEmoji}>😴</Text>
              <Text variant="headline">Slack Off</Text>
              <Text variant="caption1" color={colors.secondaryText}>-Performance, +Happiness</Text>
            </Pressable>
          </View>

          <View style={styles.actionsGrid}>
            <Pressable
              onPress={handleRequestPromotion}
              style={({ pressed }) => [styles.actionCard, styles.actionWide, pressed && styles.actionPressed]}
            >
              <Text style={styles.actionEmoji}>📈</Text>
              <Text variant="headline">Ask for Promotion</Text>
              <Text variant="caption1" color={colors.secondaryText}>
                Requires high performance + tenure
              </Text>
            </Pressable>
          </View>

          {/* Bottom actions */}
          <View style={styles.bottomActions}>
            <Button
              title={showListings ? 'Hide Job Listings' : 'Explore Other Jobs'}
              onPress={() => setShowListings(!showListings)}
              variant="secondary"
            />
            <Button title="Quit Job" onPress={handleQuit} variant="danger" />
          </View>

          {/* Collapsible Job Listings */}
          {showListings && (
            <View style={styles.listingsSection}>
              <Text variant="headline" style={styles.sectionTitle}>
                Job Listings
              </Text>
              {renderJobListings(availableJobs, career, character, handleApply)}
            </View>
          )}
        </ScrollView>
      </View>
    );
  }

  // ---- UNEMPLOYED VIEW ----
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[styles.content, { paddingTop: insets.top + spacing.md }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.unemployedHeader}>
          <Text variant="title2" align="center">Job Listings</Text>
          {character.education.isEnrolled ? (
            <Text variant="body" color={colors.secondaryText} align="center">
              Currently studying at {character.education.school || 'school'}
            </Text>
          ) : (
            <Text variant="body" color={colors.secondaryText} align="center">
              Find your next opportunity
            </Text>
          )}
        </View>

        {renderJobListings(availableJobs, null, character, handleApply)}
      </ScrollView>
    </View>
  );
}

// Shared job listings renderer
function renderJobListings(
  availableJobs: typeof CAREERS,
  currentCareer: any,
  character: any,
  handleApply: (careerDef: typeof CAREERS[0]) => void,
) {
  if (character.age < 14) {
    return (
      <Text variant="body" color={colors.tertiaryText} align="center">
        You're too young to work. Enjoy childhood!
      </Text>
    );
  }

  if (availableJobs.length === 0) {
    return (
      <Text variant="body" color={colors.tertiaryText} align="center">
        No jobs match your current qualifications. Try improving your education or stats.
      </Text>
    );
  }

  return (
    <>
      {availableJobs
        .filter((j) => !currentCareer || j.id !== currentCareer.careerId)
        .map((careerDef) => (
          <CareerListingCard
            key={careerDef.id}
            career={careerDef}
            canApply={!currentCareer}
            onApply={() => handleApply(careerDef)}
          />
        ))}
    </>
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
    paddingBottom: spacing.xxl,
  },
  currentJob: {
    gap: spacing.sm,
  },
  jobTitle: {
    gap: 2,
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
  actionsGrid: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  actionCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: 'center',
    gap: spacing.xs,
  },
  actionWide: {
    flex: 1,
  },
  actionPressed: {
    opacity: 0.7,
  },
  actionEmoji: {
    fontSize: 28,
    lineHeight: 36,
  },
  bottomActions: {
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  listingsSection: {
    gap: spacing.md,
  },
  sectionTitle: {
    marginTop: spacing.xs,
  },
  unemployedHeader: {
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },
});
