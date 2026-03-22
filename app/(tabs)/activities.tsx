import React from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { router } from 'expo-router';
import { Text, Card, Button } from '../../src/components/ui';
import { useGameStore } from '../../src/store/gameStore';
import { colors, spacing } from '../../src/theme';
import { getAvailableCrimes, CRIME_DEFINITIONS, attemptCrime } from '../../src/engine/crime';
import type { CrimeType } from '../../src/types/game';

interface ActivityItem {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  minAge: number;
  action: (store: ReturnType<typeof useGameStore.getState>) => void;
}

export default function ActivitiesScreen() {
  const character = useGameStore((s) => s.character);
  const modifyStat = useGameStore((s) => s.modifyStat);
  const modifyReputation = useGameStore((s) => s.modifyReputation);
  const addMoney = useGameStore((s) => s.addMoney);
  const removeMoney = useGameStore((s) => s.removeMoney);
  const addEventToLog = useGameStore((s) => s.addEventToLog);
  const goToPrison = useGameStore((s) => s.goToPrison);
  const addCriminalRecord = useGameStore((s) => s.addCriminalRecord);

  const doActivity = (title: string, description: string, effects: () => void) => {
    effects();
    addEventToLog({
      age: character.age,
      season: character.season,
      title,
      description,
    });
  };

  const handleGym = () => doActivity(
    'Hit the Gym',
    'You worked out and feel great.',
    () => { modifyStat('health', 5); modifyStat('looks', 2); modifyStat('happiness', 2); },
  );

  const handleLibrary = () => doActivity(
    'Studied at the Library',
    'You spent time reading and learning.',
    () => { modifyStat('smarts', 5); modifyStat('happiness', -1); },
  );

  const handleNightclub = () => {
    const cost = 50;
    if (character.money < cost) {
      addEventToLog({ age: character.age, season: character.season, title: 'Can\'t Afford It', description: 'You don\'t have enough money to go out.' });
      return;
    }
    removeMoney(cost);
    doActivity('Went to the Club', 'You partied the night away.', () => {
      modifyStat('happiness', 8);
      modifyStat('health', -2);
      modifyStat('looks', 1);
    });
  };

  const handleDating = () => doActivity(
    'Swiped on Dating App',
    'You browsed profiles and matched with someone interesting.',
    () => { modifyStat('happiness', 3); },
  );

  const handleShopping = () => {
    const cost = 200;
    if (character.money < cost) {
      addEventToLog({ age: character.age, season: character.season, title: 'Can\'t Afford It', description: 'Shopping requires money you don\'t have.' });
      return;
    }
    removeMoney(cost);
    doActivity('Went Shopping', 'You bought some new clothes.', () => {
      modifyStat('looks', 5);
      modifyStat('happiness', 5);
    });
  };

  const handleVolunteer = () => doActivity(
    'Volunteered',
    'You spent time helping others in the community.',
    () => { modifyStat('happiness', 5); modifyReputation(5); },
  );

  const handleCasino = () => {
    router.push('/minigame/blackjack');
  };

  const [showCrimes, setShowCrimes] = React.useState(false);
  const availableCrimes = getAvailableCrimes({ character } as any);

  const handleCrime = (crimeType: CrimeType) => {
    const result = attemptCrime(crimeType, { character } as any);
    if (result.reward > 0) addMoney(result.reward);
    addCriminalRecord({
      crime: CRIME_DEFINITIONS[crimeType].name,
      crimeType,
      caught: result.caught,
      sentenced: result.sentenceSeasons,
    });
    if (result.caught && result.sentenceSeasons) {
      goToPrison(result.sentenceSeasons);
    }
    modifyStat('happiness', result.success ? 5 : -5);
    modifyReputation(result.success ? -3 : -5);
    addEventToLog({
      age: character.age,
      season: character.season,
      title: result.caught ? 'Busted!' : (result.success ? 'Crime Succeeded' : 'Crime Failed'),
      description: result.message,
    });
    setShowCrimes(false);
  };

  const activities = [
    { id: 'gym', emoji: '\u{1F3CB}', title: 'Gym', subtitle: 'Work out (+Health, +Looks)', minAge: 5, onPress: handleGym },
    { id: 'library', emoji: '\u{1F4DA}', title: 'Library', subtitle: 'Study (+Smarts)', minAge: 5, onPress: handleLibrary },
    { id: 'nightclub', emoji: '\u{1F378}', title: 'Nightclub', subtitle: 'Party ($50)', minAge: 18, onPress: handleNightclub },
    { id: 'dating', emoji: '\u2764\uFE0F', title: 'Dating App', subtitle: 'Meet someone new', minAge: 16, onPress: handleDating },
    { id: 'shopping', emoji: '\u{1F6CD}\uFE0F', title: 'Shopping', subtitle: 'Buy clothes ($200, +Looks)', minAge: 10, onPress: handleShopping },
    { id: 'volunteer', emoji: '\u{1F91D}', title: 'Volunteer', subtitle: 'Help others (+Reputation)', minAge: 10, onPress: handleVolunteer },
    { id: 'gambling', emoji: '\u{1F3B0}', title: 'Casino', subtitle: 'Try your luck at blackjack', minAge: 18, onPress: handleCasino },
    { id: 'crime', emoji: '\u{1F5E1}\uFE0F', title: 'Crime', subtitle: 'Live on the edge...', minAge: 10, onPress: () => setShowCrimes(!showCrimes) },
  ];

  const visibleActivities = activities.filter((a) => character.age >= a.minAge);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {character.inPrison ? (
          <Card style={styles.prisonCard}>
            <Text variant="title2" align="center">
              {'\u{1F6D1}'} In Prison
            </Text>
            <Text variant="body" color={colors.secondaryText} align="center">
              {character.prisonSeasonsLeft} season{character.prisonSeasonsLeft !== 1 ? 's' : ''} remaining
            </Text>
          </Card>
        ) : (
          <>
            {visibleActivities.map((activity) => (
              <Pressable
                key={activity.id}
                onPress={activity.onPress}
              >
                <Card style={styles.activityCard}>
                  <View style={styles.activityRow}>
                    <Text variant="title2">{activity.emoji}</Text>
                    <View style={styles.activityInfo}>
                      <Text variant="headline">{activity.title}</Text>
                      <Text variant="footnote" color={colors.secondaryText}>
                        {activity.subtitle}
                      </Text>
                    </View>
                    <Text variant="body" color={colors.tertiaryText}>
                      {'\u203A'}
                    </Text>
                  </View>
                </Card>
              </Pressable>
            ))}

            {/* Crime submenu */}
            {showCrimes && (
              <Card style={styles.crimeMenu}>
                <Text variant="footnote" color={colors.danger}>
                  CHOOSE YOUR CRIME
                </Text>
                {availableCrimes.length === 0 ? (
                  <Text variant="body" color={colors.tertiaryText}>
                    No crimes available at your age.
                  </Text>
                ) : (
                  availableCrimes.map((crimeType) => {
                    const def = CRIME_DEFINITIONS[crimeType];
                    return (
                      <Pressable
                        key={crimeType}
                        onPress={() => handleCrime(crimeType)}
                        style={({ pressed }) => [
                          styles.crimeRow,
                          pressed && { opacity: 0.6 },
                        ]}
                      >
                        <Text variant="body">{def.emoji} {def.name}</Text>
                        <Text variant="caption1" color={colors.secondaryText}>
                          {def.description}
                        </Text>
                      </Pressable>
                    );
                  })
                )}
              </Card>
            )}
          </>
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
    gap: spacing.sm,
  },
  prisonCard: {
    gap: spacing.sm,
    marginTop: spacing.xl,
  },
  activityCard: {},
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  activityInfo: {
    flex: 1,
    gap: 2,
  },
  crimeMenu: {
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.danger,
  },
  crimeRow: {
    paddingVertical: spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.separator,
    gap: 2,
  },
});
