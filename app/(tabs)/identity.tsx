import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, Card, StatBar } from '../../src/components/ui';
import { useGameStore } from '../../src/store/gameStore';
import { colors, spacing } from '../../src/theme';
import { formatMoney, formatMoneyCompact, formatLifeStage } from '../../src/utils/format';

export default function IdentityScreen() {
  const insets = useSafeAreaInsets();
  const character = useGameStore((s) => s.character);
  const assets = useGameStore((s) => s.assets);
  const lifetimeEarnings = useGameStore((s) => s.lifetimeEarnings);

  const netWorth =
    character.money + assets.reduce((sum, a) => sum + a.value, 0);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[styles.content, { paddingTop: insets.top + spacing.md }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile */}
        <View style={styles.profile}>
          <Text variant="largeTitle">{character.emoji}</Text>
          <Text variant="title1">
            {character.firstName} {character.lastName}
          </Text>
          <Text variant="body" color={colors.secondaryText}>
            {formatLifeStage(character.age)} · {character.gender === 'male' ? 'Male' : 'Female'}
          </Text>
        </View>

        {/* Stats */}
        <Card style={styles.statsCard}>
          <Text variant="footnote" color={colors.secondaryText}>
            STATS
          </Text>
          <StatBar stat="health" value={character.stats.health} />
          <StatBar stat="happiness" value={character.stats.happiness} />
          <StatBar stat="smarts" value={character.stats.smarts} />
          <StatBar stat="looks" value={character.stats.looks} />
        </Card>

        {/* Finances */}
        <Card style={styles.finCard}>
          <Text variant="footnote" color={colors.secondaryText}>
            FINANCES
          </Text>
          <View style={styles.finRow}>
            <Text variant="body">Cash</Text>
            <Text variant="tabular" color={colors.success}>{formatMoney(character.money)}</Text>
          </View>
          <View style={styles.finRow}>
            <Text variant="body">Net Worth</Text>
            <Text variant="tabular">{formatMoney(netWorth)}</Text>
          </View>
          <View style={styles.finRow}>
            <Text variant="body">Lifetime Earnings</Text>
            <Text variant="tabular" color={colors.secondaryText}>
              {formatMoneyCompact(lifetimeEarnings)}
            </Text>
          </View>
        </Card>

        {/* Education */}
        <Card style={styles.infoCard}>
          <Text variant="footnote" color={colors.secondaryText}>
            EDUCATION
          </Text>
          <Text variant="body">
            {character.education.level === 'none'
              ? 'No formal education'
              : `${character.education.level}${character.education.school ? ` — ${character.education.school}` : ''}`}
          </Text>
        </Card>

        {/* Traits */}
        {character.traits.length > 0 && (
          <Card style={styles.infoCard}>
            <Text variant="footnote" color={colors.secondaryText}>
              TRAITS
            </Text>
            <View style={styles.traitRow}>
              {character.traits.map((trait) => (
                <View key={trait} style={styles.traitBadge}>
                  <Text variant="footnote" color={colors.accent}>
                    {trait}
                  </Text>
                </View>
              ))}
            </View>
          </Card>
        )}

        {/* Criminal Record */}
        {character.criminalRecord.length > 0 && (
          <Card style={styles.infoCard}>
            <Text variant="footnote" color={colors.danger}>
              CRIMINAL RECORD
            </Text>
            {character.criminalRecord.map((record, i) => (
              <Text key={i} variant="body" color={colors.secondaryText}>
                {record.crime} (Age {record.age}) — {record.caught ? 'Caught' : 'Got away'}
              </Text>
            ))}
          </Card>
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
  profile: {
    alignItems: 'center',
    gap: spacing.xs,
    paddingVertical: spacing.md,
  },
  statsCard: {
    gap: spacing.sm,
  },
  finCard: {
    gap: spacing.sm,
  },
  finRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoCard: {
    gap: spacing.sm,
  },
  traitRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  traitBadge: {
    backgroundColor: colors.accentLight,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 8,
  },
});
