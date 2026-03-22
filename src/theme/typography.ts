import { TextStyle } from 'react-native';

// Apple HIG-inspired type scale
// Primary font: system default (San Francisco on iOS, Roboto on Android)

export const typography = {
  largeTitle: {
    fontSize: 34,
    fontWeight: '700',
    lineHeight: 41,
    letterSpacing: 0.37,
  } as TextStyle,

  title1: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 34,
    letterSpacing: 0.36,
  } as TextStyle,

  title2: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: 0.35,
  } as TextStyle,

  title3: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 25,
    letterSpacing: 0.38,
  } as TextStyle,

  headline: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: -0.41,
  } as TextStyle,

  body: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: -0.41,
  } as TextStyle,

  callout: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: -0.32,
  } as TextStyle,

  subhead: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.24,
  } as TextStyle,

  footnote: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: -0.08,
  } as TextStyle,

  caption1: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  } as TextStyle,

  caption2: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 13,
    letterSpacing: 0.07,
  } as TextStyle,

  // For money, stats, numbers — tabular alignment
  tabular: {
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 22,
    fontVariant: ['tabular-nums'],
  } as TextStyle,

  tabularLarge: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 34,
    fontVariant: ['tabular-nums'],
  } as TextStyle,
} as const;

export type TypographyVariant = keyof typeof typography;
