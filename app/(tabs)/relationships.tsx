import React from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, Card } from '../../src/components/ui';
import { useGameStore } from '../../src/store/gameStore';
import { colors, spacing } from '../../src/theme';
import { RelationshipType } from '../../src/types/game';

const TYPE_LABELS: Record<RelationshipType, string> = {
  parent: 'Family',
  sibling: 'Family',
  child: 'Family',
  friend: 'Friends',
  romantic: 'Romantic',
  spouse: 'Romantic',
  exSpouse: 'Romantic',
  coworker: 'Work',
  boss: 'Work',
};

export default function RelationshipsScreen() {
  const relationships = useGameStore((s) => s.relationships);

  const grouped = relationships.reduce(
    (acc, rel) => {
      const group = TYPE_LABELS[rel.type] || 'Other';
      if (!acc[group]) acc[group] = [];
      acc[group].push(rel);
      return acc;
    },
    {} as Record<string, typeof relationships>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {relationships.length === 0 ? (
          <Text
            variant="body"
            color={colors.tertiaryText}
            align="center"
            style={styles.empty}
          >
            No relationships yet. Start your life to meet people.
          </Text>
        ) : (
          Object.entries(grouped).map(([groupName, rels]) => (
            <View key={groupName}>
              <Text variant="footnote" color={colors.secondaryText} style={styles.groupLabel}>
                {groupName.toUpperCase()}
              </Text>
              {rels.map((rel) => (
                <Pressable key={rel.id}>
                  <Card style={styles.relCard}>
                    <View style={styles.relRow}>
                      <Text variant="title3">{rel.emoji}</Text>
                      <View style={styles.relInfo}>
                        <Text variant="headline">{rel.name}</Text>
                        <Text variant="footnote" color={colors.secondaryText}>
                          {rel.type} · Age {rel.age}
                        </Text>
                      </View>
                      <View style={styles.closenessContainer}>
                        <Text variant="tabular" color={colors.accent}>
                          {rel.closeness}%
                        </Text>
                      </View>
                    </View>
                  </Card>
                </Pressable>
              ))}
            </View>
          ))
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
  empty: {
    marginTop: spacing.xxl,
  },
  groupLabel: {
    marginTop: spacing.md,
    marginBottom: spacing.xs,
    paddingHorizontal: spacing.xs,
  },
  relCard: {
    marginBottom: spacing.xs,
  },
  relRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  relInfo: {
    flex: 1,
    gap: 2,
  },
  closenessContainer: {
    alignItems: 'flex-end',
  },
});
