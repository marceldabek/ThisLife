import React, { useCallback, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Text, Card, StatBar, Button } from '../../src/components/ui';
import { SeasonBanner } from '../../src/components/game';
import { useGameStore } from '../../src/store/gameStore';
import { useAppStore } from '../../src/store/settingsStore';
import { colors, spacing } from '../../src/theme';
import { formatMoney } from '../../src/utils/format';
import { getAllEvents, getEventById, initializeEventRegistry } from '../../src/data/events';
import { processSeasonEvents } from '../../src/engine/events';
import { registerEvents } from '../event/[id]';
import { generateFamily } from '../../src/engine/relationships';

export default function LifeScreen() {
  const character = useGameStore((s) => s.character);
  const eventLog = useGameStore((s) => s.eventLog);
  const ageUp = useGameStore((s) => s.ageUp);
  const gameOver = useGameStore((s) => s.gameOver);
  const relationships = useGameStore((s) => s.relationships);
  const setCurrentEvent = useGameStore((s) => s.setCurrentEvent);
  const hasStartedGame = useAppStore((s) => s.hasStartedGame);

  // Initialize event registry on mount
  useEffect(() => {
    initializeEventRegistry();
    // Also register all events in the event screen's registry
    const allEvents = getAllEvents();
    if (allEvents.length > 0) {
      registerEvents(allEvents);
    }
  }, []);

  // Generate family on first game start if no relationships exist
  useEffect(() => {
    if (hasStartedGame && relationships.length === 0 && character.age === 0) {
      const family = generateFamily(character.gender);
      for (const member of family) {
        useGameStore.getState().addRelationship(member);
      }
      useGameStore.getState().addEventToLog({
        age: 0,
        season: 'spring',
        title: 'Born!',
        description: `${character.firstName} ${character.lastName} was born into the world.`,
      });
    }
  }, [hasStartedGame]);

  // Handle age up + event triggering
  const handleAgeUp = useCallback(() => {
    if (gameOver || !character.isAlive) return;

    // First, advance the season (runs ageUp engine)
    ageUp();

    // Then check for random events
    const state = useGameStore.getState();
    const allEvents = getAllEvents();

    if (allEvents.length > 0) {
      const result = processSeasonEvents(allEvents, state);
      if (result) {
        // Set the current event and navigate to event modal
        setCurrentEvent(result.event.id);
        router.push(`/event/${result.event.id}`);
      }
    }
  }, [gameOver, character.isAlive, ageUp, setCurrentEvent]);

  // If no game started, show start screen
  if (!hasStartedGame) {
    return (
      <View style={styles.container}>
        <View style={styles.startScreen}>
          <Text variant="largeTitle" align="center">
            ThisLife
          </Text>
          <Text variant="body" color={colors.secondaryText} align="center">
            Every choice writes your story
          </Text>
          <View style={styles.startButtons}>
            <Button
              title="New Life"
              onPress={() => router.push('/character-creation')}
              size="large"
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Season Banner */}
        <SeasonBanner season={character.season} age={character.age} />

        {/* Character Name */}
        <Text variant="title2" align="center">
          {character.emoji} {character.firstName} {character.lastName}
        </Text>

        {/* Stats */}
        <Card style={styles.statsCard}>
          <StatBar stat="health" value={character.stats.health} />
          <StatBar stat="happiness" value={character.stats.happiness} />
          <StatBar stat="smarts" value={character.stats.smarts} />
          <StatBar stat="looks" value={character.stats.looks} />
          <View style={styles.moneyRow}>
            <Text variant="subhead" color={colors.secondaryText}>
              Money
            </Text>
            <Text variant="tabular" color={colors.money}>
              {formatMoney(character.money)}
            </Text>
          </View>
        </Card>

        {/* Quick Status */}
        {character.career && (
          <Card>
            <Text variant="footnote" color={colors.secondaryText}>JOB</Text>
            <Text variant="headline">{character.career.title}</Text>
          </Card>
        )}
        {character.inPrison && (
          <Card>
            <Text variant="headline" color={colors.danger}>
              {'\u{1F6D1}'} In Prison — {character.prisonSeasonsLeft} seasons left
            </Text>
          </Card>
        )}
        {character.education.isEnrolled && (
          <Card>
            <Text variant="footnote" color={colors.secondaryText}>EDUCATION</Text>
            <Text variant="headline">{character.education.school || character.education.level}</Text>
          </Card>
        )}

        {/* Event Log */}
        <Text variant="headline" style={styles.sectionTitle}>
          Recent Events
        </Text>
        {eventLog.length === 0 ? (
          <Text variant="body" color={colors.tertiaryText} align="center">
            Tap "Next Season" to begin your life...
          </Text>
        ) : (
          eventLog.slice(0, 30).map((entry) => (
            <Card key={entry.id} style={styles.eventCard}>
              <View style={styles.eventHeader}>
                <Text variant="headline">{entry.title}</Text>
                <Text variant="caption1" color={colors.tertiaryText}>
                  Age {entry.age}
                </Text>
              </View>
              <Text variant="body" color={colors.secondaryText}>
                {entry.description}
              </Text>
              {entry.choiceMade && (
                <Text variant="footnote" color={colors.accent}>
                  You chose: {entry.choiceMade}
                </Text>
              )}
              {entry.outcome && entry.outcome !== entry.description && (
                <Text variant="footnote" color={colors.secondaryText}>
                  {entry.outcome}
                </Text>
              )}
            </Card>
          ))
        )}
      </ScrollView>

      {/* Age Up Button */}
      <View style={styles.buttonContainer}>
        {gameOver ? (
          <View style={styles.gameOverContainer}>
            <Text variant="title2" align="center" color={colors.danger}>
              Game Over
            </Text>
            <Text variant="body" align="center" color={colors.secondaryText}>
              {character.causeOfDeath || 'Your life has ended.'}
            </Text>
            <Button
              title="New Life"
              onPress={() => {
                useGameStore.getState().resetGame();
                useAppStore.getState().setHasStartedGame(false);
                router.push('/character-creation');
              }}
              size="large"
            />
          </View>
        ) : (
          <Button
            title="Next Season \u2192"
            onPress={handleAgeUp}
            size="large"
            style={styles.ageUpButton}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.lg,
    paddingBottom: 120,
    gap: spacing.md,
  },
  startScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
    gap: spacing.lg,
  },
  startButtons: {
    marginTop: spacing.xl,
    width: '100%',
  },
  statsCard: {
    gap: spacing.sm,
  },
  moneyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.xs,
  },
  sectionTitle: {
    marginTop: spacing.md,
  },
  eventCard: {
    gap: spacing.xs,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: spacing.lg,
    paddingBottom: spacing.xl,
    backgroundColor: colors.background,
  },
  gameOverContainer: {
    gap: spacing.md,
  },
  ageUpButton: {
    width: '100%',
  },
});
