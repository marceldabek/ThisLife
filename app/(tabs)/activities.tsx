import React from 'react';
import { View, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, Card } from '../../src/components/ui';
import { useGameStore } from '../../src/store/gameStore';
import { useAppStore } from '../../src/store/settingsStore';
import { colors, spacing } from '../../src/theme';
import { getAvailableCrimes, CRIME_DEFINITIONS, attemptCrime } from '../../src/engine/crime';
import type { CrimeType } from '../../src/types/game';

const PLAY_OPTIONS = [
  { name: 'kicked a ball around', health: 3, happiness: 4, smarts: 0 },
  { name: 'played with building blocks', health: 0, happiness: 3, smarts: 3 },
  { name: 'drew pictures', health: 0, happiness: 5, smarts: 1 },
  { name: 'played make-believe', health: 1, happiness: 5, smarts: 1 },
  { name: 'splashed in puddles', health: 2, happiness: 4, smarts: 0 },
  { name: 'played with a chemistry set', health: 0, happiness: 2, smarts: 5 },
  { name: 'rode a bicycle', health: 4, happiness: 3, smarts: 0 },
  { name: 'played tag with friends', health: 4, happiness: 4, smarts: 0 },
  { name: 'read a picture book', health: 0, happiness: 2, smarts: 4 },
  { name: 'played video games', health: -1, happiness: 5, smarts: 1 },
];


export default function ActivitiesScreen() {
  const insets = useSafeAreaInsets();
  const character = useGameStore((s) => s.character);
  const modifyStat = useGameStore((s) => s.modifyStat);
  const modifyReputation = useGameStore((s) => s.modifyReputation);
  const addMoney = useGameStore((s) => s.addMoney);
  const removeMoney = useGameStore((s) => s.removeMoney);
  const addEventToLog = useGameStore((s) => s.addEventToLog);
  const goToPrison = useGameStore((s) => s.goToPrison);
  const addCriminalRecord = useGameStore((s) => s.addCriminalRecord);
  const activitiesUsedThisSeason = useGameStore((s) => s.activitiesUsedThisSeason);
  const useActivity = useGameStore((s) => s.useActivity);

  const doActivity = (activityId: string, title: string, description: string, statChanges: string, effects: () => void) => {
    effects();
    addEventToLog({
      age: character.age,
      season: character.season,
      title,
      description,
    });
    Alert.alert(title, statChanges);
    useActivity(activityId);
  };

  const handlePlay = () => {
    const option = PLAY_OPTIONS[Math.floor(Math.random() * PLAY_OPTIONS.length)];
    const changes: string[] = [];
    if (option.health) changes.push(`${option.health > 0 ? '+' : ''}${option.health} Health`);
    if (option.happiness) changes.push(`${option.happiness > 0 ? '+' : ''}${option.happiness} Happiness`);
    if (option.smarts) changes.push(`${option.smarts > 0 ? '+' : ''}${option.smarts} Smarts`);
    doActivity('play', 'Playtime', `You ${option.name}.`, changes.join(', '), () => {
      if (option.health) modifyStat('health', option.health);
      if (option.happiness) modifyStat('happiness', option.happiness);
      if (option.smarts) modifyStat('smarts', option.smarts);
    });
  };

  const handleGym = () => doActivity(
    'gym',
    'Hit the Gym',
    'You worked out and feel great.',
    '+5 Health, +2 Looks, +2 Happiness',
    () => { modifyStat('health', 5); modifyStat('looks', 2); modifyStat('happiness', 2); },
  );

  const handleLibrary = () => doActivity(
    'library',
    'Studied at the Library',
    'You spent time reading and learning.',
    '+5 Smarts, -1 Happiness',
    () => { modifyStat('smarts', 5); modifyStat('happiness', -1); },
  );

  const handleNightclub = () => {
    const cost = 50;
    if (character.money < cost) {
      addEventToLog({ age: character.age, season: character.season, title: 'Can\'t Afford It', description: 'You don\'t have enough money to go out.' });
      return;
    }
    removeMoney(cost);
    doActivity('nightclub', 'Went to the Club', 'You partied the night away.', '+8 Happiness, -2 Health, +1 Looks', () => {
      modifyStat('happiness', 8);
      modifyStat('health', -2);
      modifyStat('looks', 1);
    });
  };

  const handleDating = () => doActivity(
    'dating',
    'Swiped on Dating App',
    'You browsed profiles and matched with someone interesting.',
    '+3 Happiness',
    () => { modifyStat('happiness', 3); },
  );

  const handleShopping = () => {
    const cost = 200;
    if (character.money < cost) {
      addEventToLog({ age: character.age, season: character.season, title: 'Can\'t Afford It', description: 'Shopping requires money you don\'t have.' });
      return;
    }
    removeMoney(cost);
    doActivity('shopping', 'Went Shopping', 'You bought some new clothes.', '+5 Looks, +5 Happiness', () => {
      modifyStat('looks', 5);
      modifyStat('happiness', 5);
    });
  };

  const handleVolunteer = () => doActivity(
    'volunteer',
    'Volunteered',
    'You spent time helping others in the community.',
    '+5 Happiness, +5 Reputation',
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
    { id: 'play', emoji: '\u{1F3A8}', title: 'Play', subtitle: 'Have fun (+Health, +Happy)', minAge: 1, maxAge: 12, onPress: handlePlay },
    { id: 'gym', emoji: '\u{1F3CB}', title: 'Gym', subtitle: 'Work out (+Health, +Looks)', minAge: 5, onPress: handleGym },
    { id: 'library', emoji: '\u{1F4DA}', title: 'Library', subtitle: 'Study (+Smarts)', minAge: 5, onPress: handleLibrary },
    { id: 'nightclub', emoji: '\u{1F378}', title: 'Nightclub', subtitle: 'Party ($50)', minAge: 18, onPress: handleNightclub },
    { id: 'dating', emoji: '\u2764\uFE0F', title: 'Dating App', subtitle: 'Meet someone new', minAge: 16, onPress: handleDating },
    { id: 'shopping', emoji: '\u{1F6CD}\uFE0F', title: 'Shopping', subtitle: 'Buy clothes ($200, +Looks)', minAge: 10, onPress: handleShopping },
    { id: 'volunteer', emoji: '\u{1F91D}', title: 'Volunteer', subtitle: 'Help others (+Reputation)', minAge: 10, onPress: handleVolunteer },
    { id: 'gambling', emoji: '\u{1F3B0}', title: 'Casino', subtitle: 'Try your luck at blackjack', minAge: 18, onPress: handleCasino },
    { id: 'crime', emoji: '\u{1F5E1}\uFE0F', title: 'Crime', subtitle: 'Live on the edge...', minAge: 10, onPress: () => setShowCrimes(!showCrimes) },
  ];

  const visibleActivities = activities.filter((a) => character.age >= a.minAge && (!a.maxAge || character.age <= a.maxAge));

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[styles.content, { paddingTop: insets.top + spacing.md }]}
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
            {visibleActivities.map((activity) => {
              const used = activitiesUsedThisSeason.includes(activity.id);
              return (
                <Pressable
                  key={activity.id}
                  onPress={used ? undefined : activity.onPress}
                  disabled={used}
                >
                  <Card style={[styles.activityCard, used && { opacity: 0.4 }]}>
                    <View style={styles.activityRow}>
                      <Text variant="title2">{activity.emoji}</Text>
                      <View style={styles.activityInfo}>
                        <Text variant="headline">{activity.title}</Text>
                        <Text variant="footnote" color={colors.secondaryText}>
                          {used ? 'Done' : activity.subtitle}
                        </Text>
                      </View>
                      <Text variant="body" color={colors.tertiaryText}>
                        {used ? '\u2713' : '\u203A'}
                      </Text>
                    </View>
                  </Card>
                </Pressable>
              );
            })}

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

        {/* New Life */}
        <Pressable
          onPress={() => {
            useGameStore.getState().resetGame();
            useAppStore.getState().setHasStartedGame(false);
            router.push('/character-creation');
          }}
        >
          <Card style={styles.newLifeCard}>
            <View style={styles.activityRow}>
              <Text variant="title2">{'\u{1F331}'}</Text>
              <View style={styles.activityInfo}>
                <Text variant="headline">New Life</Text>
                <Text variant="footnote" color={colors.secondaryText}>
                  Start over with a new character
                </Text>
              </View>
              <Text variant="body" color={colors.tertiaryText}>{'\u203A'}</Text>
            </View>
          </Card>
        </Pressable>
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
  newLifeCard: {
    marginTop: spacing.sm,
  },
});
