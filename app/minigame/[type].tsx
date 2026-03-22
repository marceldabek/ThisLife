import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Text, Button } from '../../src/components/ui';
import { colors, spacing } from '../../src/theme';
import { useGameStore } from '../../src/store/gameStore';
import InterviewGame from '../../src/components/minigames/InterviewGame';
import { BlackjackGame } from '../../src/components/minigames/BlackjackGame';
import { ExamGame } from '../../src/components/minigames/ExamGame';
import type { MiniGameResult } from '../../src/types/events';

export default function MiniGameScreen() {
  const { type } = useLocalSearchParams<{ type: string }>();
  const money = useGameStore((s) => s.character.money);
  const smarts = useGameStore((s) => s.character.stats.smarts);
  const career = useGameStore((s) => s.character.career);
  const applyEffects = useGameStore((s) => s.applyEffects);
  const addEventToLog = useGameStore((s) => s.addEventToLog);
  const character = useGameStore((s) => s.character);

  const handleComplete = useCallback(
    (result: MiniGameResult & { moneyChange?: number; grade?: string }) => {
      // Apply stat effects from the mini-game
      if (result.effects && result.effects.length > 0) {
        applyEffects(result.effects);
      }

      // Log the result
      addEventToLog({
        age: character.age,
        season: character.season,
        title: `${type?.charAt(0).toUpperCase()}${type?.slice(1)} ${result.success ? 'Success' : 'Failed'}`,
        description: result.grade
          ? `Grade: ${result.grade} (Score: ${result.score})`
          : result.success
            ? 'You did well!'
            : 'Better luck next time.',
        outcome: result.success ? 'Passed' : 'Failed',
      });

      router.back();
    },
    [type, applyEffects, addEventToLog, character],
  );

  // Route to the correct mini-game component
  switch (type) {
    case 'interview':
      return (
        <InterviewGame
          difficulty={Math.min(10, Math.max(1, Math.floor((character.career?.level ?? 0) + 3)))}
          careerName={character.career?.careerId ?? 'General'}
          onComplete={handleComplete}
        />
      );

    case 'blackjack':
      return (
        <BlackjackGame
          playerMoney={money}
          onComplete={handleComplete}
        />
      );

    case 'exam':
      return (
        <ExamGame
          difficulty={
            character.education.level === 'college' || character.education.level === 'gradSchool'
              ? 'hard'
              : character.education.level === 'highSchool'
                ? 'medium'
                : 'easy'
          }
          playerSmarts={character.stats.smarts}
          onComplete={handleComplete}
        />
      );

    default:
      return (
        <View style={styles.container}>
          <Text variant="title1" align="center">
            {type?.charAt(0).toUpperCase()}{type?.slice(1)}
          </Text>
          <Text variant="body" color={colors.secondaryText} align="center">
            This mini-game is coming soon!
          </Text>
          <Button
            title="Back"
            onPress={() => router.back()}
            variant="secondary"
          />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
    gap: spacing.lg,
  },
});
