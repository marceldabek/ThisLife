import React, { ReactNode } from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';
import { colors } from '../../theme/colors';
import { typography, TypographyVariant } from '../../theme/typography';

interface ThemedTextProps extends TextProps {
  children?: ReactNode;
  variant?: TypographyVariant;
  color?: string;
  align?: TextStyle['textAlign'];
}

export function Text({
  variant = 'body',
  color = colors.primaryText,
  align,
  style,
  ...props
}: ThemedTextProps) {
  return (
    <RNText
      style={[
        typography[variant],
        { color },
        align ? { textAlign: align } : undefined,
        style,
      ]}
      {...props}
    />
  );
}
