import React, { useCallback, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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
  const insets = useSafeAreaInsets();

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
        // Event fired — reset pity counter and navigate to event modal
        useGameStore.setState({ seasonsSinceLastEvent: 0 });
        setCurrentEvent(result.event.id);
        router.push(`/event/${result.event.id}`);
      } else {
        // No event — increment pity counter
        useGameStore.setState({ seasonsSinceLastEvent: state.seasonsSinceLastEvent + 1 });
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
        contentContainerStyle={[styles.scrollContent, { paddingTop: insets.top + spacing.md }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Cards Row */}
        <View style={styles.topCardsRow}>
          {/* Left Column: Season + Character Avatar */}
          <View style={styles.leftColumn}>
            <SeasonBanner season={character.season} age={character.age} year={character.birthYear + character.age} />
            <Card style={styles.avatarCard}>
              <Text style={styles.avatarEmoji}>{character.emoji}</Text>
            </Card>
          </View>

          {/* Stats Card */}
          <Card style={styles.statsCard}>
            <View style={styles.nameRow}>
              <Text variant="headline" numberOfLines={1} style={styles.nameText}>
                {character.firstName} {character.lastName}
              </Text>
            </View>
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
        </View>

        {/* Quick Status */}
        {(character.career || character.inPrison || character.education.isEnrolled) && (
          <View style={styles.statusCards}>
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
          </View>
        )}

        {/* Event Log */}
        <View>
          <Text variant="headline" style={styles.sectionTitle}>
            Recent Events
          </Text>
          {eventLog.length === 0 ? (
            <Text variant="body" color={colors.tertiaryText} align="center" style={{ marginTop: spacing.sm }}>
              Tap "Next Season" to begin your life...
            </Text>
          ) : (
            <View style={styles.eventLog}>
              {eventLog.slice(0, 30).map((entry, index) => (
                <View key={entry.id} style={[styles.eventRow, index > 0 && styles.eventRowBorder]}>
                  <View style={styles.eventRowHeader}>
                    <Text variant="subhead" numberOfLines={1} style={{ flex: 1 }}>
                      {entry.emoji ? `${entry.emoji} ` : ''}{entry.title}
                    </Text>
                    <Text variant="caption1" color={colors.tertiaryText}>
                      {entry.age}
                    </Text>
                  </View>
                  {entry.choiceMade ? (
                    <Text variant="footnote" color={colors.accent} numberOfLines={1}>
                      {entry.choiceMade}{entry.outcome && entry.outcome !== entry.description ? ` — ${entry.outcome}` : ''}
                    </Text>
                  ) : entry.description ? (
                    <Text variant="footnote" color={colors.secondaryText} numberOfLines={1}>
                      {entry.description}
                    </Text>
                  ) : null}
                </View>
              ))}
            </View>
          )}
        </View>

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
            title="Next Season"
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
    paddingHorizontal: spacing.md,
    paddingBottom: 100,
    gap: spacing.lg,
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
  topCardsRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  leftColumn: {
    flex: 2,
    gap: spacing.sm,
  },
  avatarCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: {
    fontSize: 64,
    lineHeight: 80,
  },
  statsCard: {
    flex: 3,
    gap: spacing.sm,
  },
  nameRow: {
    marginBottom: spacing.xs,
  },
  nameText: {
    flexShrink: 1,
  },
  moneyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.xs,
  },
  statusCards: {
    gap: spacing.xs,
  },
  sectionTitle: {
    marginTop: spacing.xs,
  },
  eventLog: {
    marginTop: spacing.sm,
  },
  eventRow: {
    paddingVertical: spacing.sm,
  },
  eventRowBorder: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.separator,
  },
  eventRowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing.sm,
  },
  buttonContainer: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
    backgroundColor: colors.background,
  },
  gameOverContainer: {
    gap: spacing.md,
  },
  ageUpButton: {
    width: '100%',
  },
});
