import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from './Text';
import { colors } from '../../theme/colors';
import { spacing, borderRadius } from '../../theme/spacing';
import { StatKey } from '../../types/game';

const STAT_COLORS: Record<StatKey, string> = {
  health: colors.health,
  happiness: colors.happiness,
  smarts: colors.smarts,
  looks: colors.looks,
};

const STAT_LABELS: Record<StatKey, string> = {
  health: 'Health',
  happiness: 'Happiness',
  smarts: 'Smarts',
  looks: 'Looks',
};

interface StatBarProps {
  stat: StatKey;
  value: number;  // 0-100
  showLabel?: boolean;
  showValue?: boolean;
}

export function StatBar({
  stat,
  value,
  showLabel = true,
  showValue = true,
}: StatBarProps) {
  const clampedValue = Math.max(0, Math.min(100, value));
  const color = STAT_COLORS[stat];

  return (
    <View style={styles.container}>
      {showLabel && (
        <View style={styles.labelRow}>
          <Text variant="subhead" color={colors.secondaryText}>
            {STAT_LABELS[stat]}
          </Text>
          {showValue && (
            <Text variant="subhead" color={colors.secondaryText}>
              {Math.round(clampedValue)}
            </Text>
          )}
        </View>
      )}
      <View style={styles.track}>
        <View
          style={[
            styles.fill,
            {
              width: `${clampedValue}%`,
              backgroundColor: color,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  track: {
    height: 6,
    backgroundColor: colors.separator,
    borderRadius: borderRadius.full,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: borderRadius.full,
  },
});
