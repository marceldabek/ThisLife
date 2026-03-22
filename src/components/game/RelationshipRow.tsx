import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Text } from '../ui/Text';
import { colors } from '../../theme/colors';
import { spacing, borderRadius } from '../../theme/spacing';
import { Relationship } from '../../types/game';

const TYPE_LABELS: Record<string, string> = {
  parent: 'Parent',
  sibling: 'Sibling',
  child: 'Child',
  friend: 'Friend',
  romantic: 'Partner',
  spouse: 'Spouse',
  exSpouse: 'Ex',
  coworker: 'Coworker',
  boss: 'Boss',
};

interface RelationshipRowProps {
  relationship: Relationship;
  onPress: () => void;
}

export function RelationshipRow({ relationship, onPress }: RelationshipRowProps) {
  const closeness = Math.max(0, Math.min(100, relationship.closeness));

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.emoji}>{relationship.emoji}</Text>

      <View style={styles.info}>
        <Text variant="headline" numberOfLines={1}>
          {relationship.name}
        </Text>
        <View style={styles.metaRow}>
          <View style={styles.badge}>
            <Text variant="caption2" color={colors.accent}>
              {TYPE_LABELS[relationship.type] ?? relationship.type}
            </Text>
          </View>
          <Text variant="caption1" color={colors.tertiaryText}>
            Age {relationship.age}
          </Text>
        </View>
      </View>

      <View style={styles.closenessContainer}>
        <Text variant="caption2" color={colors.secondaryText} align="right">
          {Math.round(closeness)}
        </Text>
        <View style={styles.closenessTrack}>
          <View
            style={[
              styles.closenessFill,
              { width: `${closeness}%` },
            ]}
          />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    gap: spacing.md,
  },
  pressed: {
    opacity: 0.7,
  },
  emoji: {
    fontSize: 32,
    lineHeight: 40,
  },
  info: {
    flex: 1,
    gap: spacing.xs,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  badge: {
    backgroundColor: colors.accentLight,
    paddingVertical: 2,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.full,
  },
  closenessContainer: {
    width: 56,
    alignItems: 'flex-end',
    gap: spacing.xs,
  },
  closenessTrack: {
    width: '100%',
    height: 4,
    backgroundColor: colors.separator,
    borderRadius: borderRadius.full,
    overflow: 'hidden',
  },
  closenessFill: {
    height: '100%',
    backgroundColor: colors.accent,
    borderRadius: borderRadius.full,
  },
});
