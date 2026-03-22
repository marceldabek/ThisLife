import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../ui/Text';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { colors } from '../../theme/colors';
import { spacing, borderRadius } from '../../theme/spacing';
import { CareerDefinition, EducationLevel } from '../../types/game';

const EDUCATION_LABELS: Record<EducationLevel, string> = {
  none: 'None',
  elementary: 'Elementary',
  middleSchool: 'Middle School',
  highSchool: 'High School',
  college: 'College Degree',
  gradSchool: 'Graduate Degree',
};

function formatSalary(amount: number): string {
  if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(amount % 1000 === 0 ? 0 : 1)}k`;
  }
  return `$${amount}`;
}

interface CareerListingCardProps {
  career: CareerDefinition;
  canApply: boolean;
  onApply: () => void;
}

export function CareerListingCard({ career, canApply, onApply }: CareerListingCardProps) {
  const entryLevel = career.levels[0];
  const hasRequirements =
    career.requiredEducation !== 'none' ||
    career.requiredSmarts != null ||
    career.requiredLooks != null;

  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.emoji}>{career.emoji}</Text>
        <View style={styles.headerText}>
          <Text variant="headline">{career.name}</Text>
          {entryLevel ? (
            <Text variant="subhead" color={colors.secondaryText}>
              {entryLevel.title}
            </Text>
          ) : null}
        </View>
        {entryLevel ? (
          <Text variant="tabular" color={colors.money}>
            {formatSalary(entryLevel.salary)}/season
          </Text>
        ) : null}
      </View>

      <Text variant="footnote" color={colors.secondaryText} style={styles.description}>
        {career.description}
      </Text>

      {hasRequirements ? (
        <View style={styles.requirements}>
          {career.requiredEducation !== 'none' ? (
            <View style={styles.reqChip}>
              <Text variant="caption1" color={colors.secondaryText}>
                {EDUCATION_LABELS[career.requiredEducation]}
              </Text>
            </View>
          ) : null}
          {career.requiredSmarts != null ? (
            <View style={styles.reqChip}>
              <Text variant="caption1" color={colors.smarts}>
                Smarts {career.requiredSmarts}+
              </Text>
            </View>
          ) : null}
          {career.requiredLooks != null ? (
            <View style={styles.reqChip}>
              <Text variant="caption1" color={colors.looks}>
                Looks {career.requiredLooks}+
              </Text>
            </View>
          ) : null}
          <View style={styles.reqChip}>
            <Text variant="caption1" color={colors.secondaryText}>
              Age {career.minAge}+
            </Text>
          </View>
        </View>
      ) : null}

      <Button
        title={canApply ? 'Apply' : 'Not Qualified'}
        onPress={onApply}
        variant={canApply ? 'primary' : 'secondary'}
        disabled={!canApply}
        size="medium"
        style={styles.applyButton}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  emoji: {
    fontSize: 36,
    lineHeight: 44,
  },
  headerText: {
    flex: 1,
    gap: 2,
  },
  description: {
    lineHeight: 18,
  },
  requirements: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  reqChip: {
    backgroundColor: colors.background,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.full,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.separator,
  },
  applyButton: {
    marginTop: spacing.xs,
  },
});
