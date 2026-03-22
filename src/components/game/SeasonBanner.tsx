import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../ui/Text';
import { colors } from '../../theme/colors';
import { spacing, borderRadius } from '../../theme/spacing';
import { Season } from '../../types/game';

const SEASON_CONFIG: Record<Season, { label: string; tint: string; tintBg: string }> = {
  spring: { label: 'Spring', tint: '#34C759', tintBg: 'rgba(52, 199, 89, 0.08)' },
  summer: { label: 'Summer', tint: '#FFD60A', tintBg: 'rgba(255, 214, 10, 0.10)' },
  fall:   { label: 'Fall',   tint: '#FF9500', tintBg: 'rgba(255, 149, 0, 0.08)' },
  winter: { label: 'Winter', tint: '#007AFF', tintBg: 'rgba(0, 122, 255, 0.08)' },
};

interface SeasonBannerProps {
  season: Season;
  age: number;
  year: number;
}

export function SeasonBanner({ season, age, year }: SeasonBannerProps) {
  const config = SEASON_CONFIG[season];

  return (
    <View style={[styles.container, { backgroundColor: config.tintBg }]}>
      <View style={styles.yearSeasonRow}>
        <Text variant="caption1" color={colors.primaryText} style={styles.yearLabel}>
          {year}
        </Text>
        <Text variant="caption1" color={config.tint} style={styles.seasonLabel}>
          {config.label.toUpperCase()}
        </Text>
      </View>
      <Text variant="tabularLarge" color={colors.primaryText}>
        {age}
      </Text>
      <Text variant="caption1" color={colors.tertiaryText}>
        years old
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.lg,
    gap: spacing.xs,
  },
  yearSeasonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  yearLabel: {
    fontWeight: '700',
  },
  seasonLabel: {
    fontWeight: '700',
    letterSpacing: 1.5,
  },
});
