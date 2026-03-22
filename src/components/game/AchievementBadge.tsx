import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../ui/Text';
import { colors } from '../../theme/colors';
import { spacing, borderRadius } from '../../theme/spacing';
import { Achievement } from '../../types/game';

interface AchievementBadgeProps {
  achievement: Achievement;
  unlocked: boolean;
}

export function AchievementBadge({ achievement, unlocked }: AchievementBadgeProps) {
  if (!unlocked) {
    return (
      <View style={[styles.container, styles.locked]}>
        <Text style={styles.lockIcon}>?</Text>
        <Text variant="caption1" color={colors.tertiaryText}>
          {achievement.hidden ? 'Hidden' : achievement.title}
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, styles.unlocked]}>
      <Text style={styles.checkmark}>&#10003;</Text>
      <Text variant="subhead" style={styles.title}>
        {achievement.title}
      </Text>
      <Text variant="caption1" color={colors.secondaryText} numberOfLines={2}>
        {achievement.description}
      </Text>
      {achievement.unlockedAt ? (
        <Text variant="caption2" color={colors.tertiaryText} style={styles.unlockedMeta}>
          Age {achievement.unlockedAt.age}, {achievement.unlockedAt.season}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
    gap: spacing.xs,
  },
  locked: {
    backgroundColor: colors.separator,
  },
  unlocked: {
    backgroundColor: colors.successLight,
  },
  lockIcon: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.tertiaryText,
    lineHeight: 32,
  },
  checkmark: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.success,
    lineHeight: 28,
  },
  title: {
    fontWeight: '600',
    textAlign: 'center',
  },
  unlockedMeta: {
    marginTop: spacing.xs,
  },
});
