import React from 'react';
import { View, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, Card, Button } from '../../src/components/ui';
import { useGameStore } from '../../src/store/gameStore';
import { colors, spacing, borderRadius } from '../../src/theme';
import { getAvailableInteractions, interactionEffect } from '../../src/engine/relationships';

const INTERACTION_INFO: Record<string, { label: string; emoji: string; subtitle: string }> = {
  spend_time:  { label: 'Spend Time',    emoji: '\u{1F91D}', subtitle: 'Hang out together' },
  gift:        { label: 'Give a Gift',   emoji: '\u{1F381}', subtitle: 'Buy them something nice' },
  compliment:  { label: 'Compliment',    emoji: '\u{1F60A}', subtitle: 'Say something kind' },
  insult:      { label: 'Insult',        emoji: '\u{1F621}', subtitle: 'Say something mean' },
  argue:       { label: 'Argue',         emoji: '\u{1F4A2}', subtitle: 'Pick a fight' },
  fight:       { label: 'Fight',         emoji: '\u{1F44A}', subtitle: 'Get physical' },
  flirt:       { label: 'Flirt',         emoji: '\u{1F609}', subtitle: 'Show romantic interest' },
  date:        { label: 'Go on a Date',  emoji: '\u{1F495}', subtitle: 'Spend a romantic evening' },
  propose:     { label: 'Propose',       emoji: '\u{1F48D}', subtitle: 'Pop the question' },
  cheat:       { label: 'Cheat',         emoji: '\u{1F525}', subtitle: 'Be unfaithful' },
  ask_money:   { label: 'Ask for Money', emoji: '\u{1F4B0}', subtitle: 'Request financial help' },
};

export default function RelationshipDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();
  const relationships = useGameStore((s) => s.relationships);
  const modifyCloseness = useGameStore((s) => s.modifyCloseness);
  const addEventToLog = useGameStore((s) => s.addEventToLog);
  const character = useGameStore((s) => s.character);

  const rel = relationships.find((r) => r.id === id);

  if (!rel) {
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <Text variant="body" color={colors.tertiaryText} align="center" style={{ marginTop: spacing.xxl }}>
          Person not found.
        </Text>
        <Button title="Back" onPress={() => router.back()} variant="ghost" />
      </View>
    );
  }

  const actions = getAvailableInteractions(rel);

  const handleInteraction = (action: string) => {
    const result = interactionEffect(action, rel);
    modifyCloseness(rel.id, result.closenessChange);
    addEventToLog({
      age: character.age,
      season: character.season,
      title: INTERACTION_INFO[action]?.label ?? action,
      description: result.message,
    });
    Alert.alert(
      INTERACTION_INFO[action]?.label ?? action,
      `${result.message}\n\nCloseness: ${result.closenessChange >= 0 ? '+' : ''}${result.closenessChange}`,
      [{ text: 'OK' }],
    );
  };

  const closenessColor = rel.closeness >= 70 ? colors.success : rel.closeness >= 40 ? colors.accent : colors.danger;

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[styles.content, { paddingTop: insets.top + spacing.md }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Back button */}
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text variant="body" color={colors.accent}>{'\u2039'} Back</Text>
        </Pressable>

        {/* Person Card */}
        <Card style={styles.personCard}>
          <Text style={styles.personEmoji}>{rel.emoji}</Text>
          <Text variant="title2" align="center">{rel.name}</Text>
          <Text variant="subhead" color={colors.secondaryText} align="center">
            {rel.type.charAt(0).toUpperCase() + rel.type.slice(1)} · Age {Math.floor(rel.age)}
          </Text>
          <View style={styles.closenessRow}>
            <View style={styles.closenessBarBg}>
              <View style={[styles.closenessBarFill, { width: `${rel.closeness}%`, backgroundColor: closenessColor }]} />
            </View>
            <Text variant="tabular" color={closenessColor}>{rel.closeness}%</Text>
          </View>
        </Card>

        {/* Interaction Options */}
        <Text variant="footnote" color={colors.secondaryText} style={styles.sectionLabel}>
          INTERACTIONS
        </Text>
        {actions.map((action) => {
          const info = INTERACTION_INFO[action] ?? { label: action, emoji: '', subtitle: '' };
          return (
            <Pressable
              key={action}
              onPress={() => handleInteraction(action)}
              style={({ pressed }) => pressed ? { opacity: 0.7 } : undefined}
            >
              <Card style={styles.actionCard}>
                <View style={styles.actionRow}>
                  <Text variant="title2">{info.emoji}</Text>
                  <View style={styles.actionInfo}>
                    <Text variant="headline">{info.label}</Text>
                    <Text variant="footnote" color={colors.secondaryText}>{info.subtitle}</Text>
                  </View>
                  <Text variant="body" color={colors.tertiaryText}>{'\u203A'}</Text>
                </View>
              </Card>
            </Pressable>
          );
        })}
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
    padding: spacing.md,
    gap: spacing.sm,
  },
  backButton: {
    paddingVertical: spacing.xs,
  },
  personCard: {
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.lg,
  },
  personEmoji: {
    fontSize: 64,
    lineHeight: 80,
  },
  closenessRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    width: '100%',
    marginTop: spacing.xs,
  },
  closenessBarBg: {
    flex: 1,
    height: 6,
    backgroundColor: colors.separator,
    borderRadius: 3,
    overflow: 'hidden',
  },
  closenessBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  sectionLabel: {
    marginTop: spacing.sm,
    paddingHorizontal: spacing.xs,
  },
  actionCard: {},
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  actionInfo: {
    flex: 1,
    gap: 2,
  },
});
