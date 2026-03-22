import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { Text } from './Text';
import { colors } from '../../theme/colors';
import { spacing, borderRadius } from '../../theme/spacing';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  style?: ViewStyle;
}

export function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  style,
}: ButtonProps) {
  const bgColor = disabled
    ? colors.separator
    : variant === 'primary'
      ? colors.accent
      : variant === 'danger'
        ? colors.danger
        : variant === 'secondary'
          ? colors.surface
          : 'transparent';

  const textColor = disabled
    ? colors.tertiaryText
    : variant === 'primary' || variant === 'danger'
      ? '#FFFFFF'
      : colors.accent;

  const paddingV = size === 'small' ? spacing.sm : size === 'large' ? spacing.md : spacing.sm + 2;
  const paddingH = size === 'small' ? spacing.md : size === 'large' ? spacing.xl : spacing.lg;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        {
          backgroundColor: bgColor,
          paddingVertical: paddingV,
          paddingHorizontal: paddingH,
          opacity: pressed ? 0.7 : 1,
        },
        style,
      ]}
    >
      <Text
        variant={size === 'small' ? 'subhead' : 'headline'}
        color={textColor}
        align="center"
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
