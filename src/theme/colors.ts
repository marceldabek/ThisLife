// ThisLife color palette — "If Apple made a life simulator"
// Near-monochrome with accent color for interactive elements

export const colors = {
  // Backgrounds
  background: '#FFFFFF',
  surface: '#F5F5F7',

  // Text
  primaryText: '#1D1D1F',
  secondaryText: '#86868B',
  tertiaryText: '#AEAEB2',

  // Interactive
  accent: '#007AFF',
  accentLight: '#E8F2FF',

  // Status
  success: '#34C759',
  successLight: '#E8F9ED',
  danger: '#FF3B30',
  dangerLight: '#FFECEB',
  warning: '#FF9500',
  warningLight: '#FFF4E5',

  // Structural
  separator: '#E5E5EA',
  cardBorder: '#F0F0F3',
  overlay: 'rgba(0, 0, 0, 0.4)',

  // Stat bar colors
  health: '#FF3B30',
  happiness: '#FFD60A',
  smarts: '#5856D6',
  looks: '#FF2D55',
  money: '#34C759',
} as const;

export type ColorKey = keyof typeof colors;
