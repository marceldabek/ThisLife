import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Text } from '../ui/Text';
import { Card } from '../ui/Card';
import { colors } from '../../theme/colors';
import { spacing, borderRadius } from '../../theme/spacing';

interface Choice {
  id: string;
  text: string;
  hint?: string;
}

interface EventCardProps {
  title: string;
  description: string;
  choices: Choice[];
  onChoose: (choiceId: string) => void;
}

export function EventCard({ title, description, choices, onChoose }: EventCardProps) {
  return (
    <Card style={styles.card}>
      <Text variant="title3" style={styles.title}>
        {title}
      </Text>

      <Text variant="body" color={colors.secondaryText} style={styles.description}>
        {description}
      </Text>

      <View style={styles.divider} />

      <View style={styles.choices}>
        {choices.map((choice) => (
          <Pressable
            key={choice.id}
            onPress={() => onChoose(choice.id)}
            style={({ pressed }) => [
              styles.choiceButton,
              pressed && styles.choicePressed,
            ]}
          >
            <Text variant="headline" color={colors.accent}>
              {choice.text}
            </Text>
            {choice.hint ? (
              <Text variant="caption1" color={colors.tertiaryText} style={styles.hint}>
                {choice.hint}
              </Text>
            ) : null}
          </Pressable>
        ))}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  title: {
    marginBottom: spacing.sm,
  },
  description: {
    marginBottom: spacing.lg,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.separator,
    marginBottom: spacing.md,
  },
  choices: {
    gap: spacing.sm,
  },
  choiceButton: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    backgroundColor: colors.accentLight,
  },
  choicePressed: {
    opacity: 0.7,
  },
  hint: {
    marginTop: spacing.xs,
  },
});
