import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../ui/Text';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { colors } from '../../theme/colors';
import { spacing, borderRadius } from '../../theme/spacing';
import { CareerDefinition, EducationLevel } from '../../types/game';
import { pickRandomCompany, adjustSalaryForCompany } from '../../data/companies';

const EDUCATION_LABELS: Record<EducationLevel, string> = {
  none: 'No degree required',
  elementary: 'Elementary',
  middleSchool: 'Middle School',
  highSchool: 'High School Diploma',
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

  // Pick a random company for this listing (memoized per career)
  const company = useMemo(() => pickRandomCompany(career.id), [career.id]);
  const adjustedSalary = adjustSalaryForCompany(entryLevel.salary, company.prestige);

  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.emoji}>{career.emoji}</Text>
        <View style={styles.headerText}>
          <Text variant="headline">{company.name}</Text>
          <Text variant="subhead" color={colors.secondaryText}>
            {entryLevel.title} — {career.name}
          </Text>
        </View>
      </View>

      {/* Salary */}
      <Text variant="tabular" color={colors.money} style={styles.salary}>
        {formatSalary(adjustedSalary)}/season
      </Text>

      <Text variant="footnote" color={colors.secondaryText} style={styles.description}>
        {career.description}
      </Text>

      {/* Requirements — like a real job posting */}
      <View style={styles.requirements}>
        {career.requiredEducation !== 'none' && (
          <View style={styles.reqChip}>
            <Text variant="caption1" color={colors.secondaryText}>
              📄 {EDUCATION_LABELS[career.requiredEducation]}
            </Text>
          </View>
        )}
        <View style={styles.reqChip}>
          <Text variant="caption1" color={colors.secondaryText}>
            🎂 Age {career.minAge}+
          </Text>
        </View>
      </View>

      <Button
        title={canApply ? 'Apply' : 'Already Employed'}
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
    gap: spacing.sm,
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
  salary: {
    marginLeft: 36 + spacing.md,
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
    backgroundColor: colors.surface,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.full,
  },
  applyButton: {
    marginTop: spacing.xs,
  },
});
