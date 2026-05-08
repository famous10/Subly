/**
 * styles/global.ts — Subly Design Tokens
 */
import { StyleSheet, Platform } from 'react-native';

// ── Colors ─────────────────────────────────────────────────────────────────────
export const colors = {
  primary:     '#1A3C6E',  // dark blue — CTAs, active tab, splash bg
  primaryDark: '#122B52',  // deeper blue — pressed states, balance card
  primaryLight:'#2A5298',  // lighter blue — accents, badges
  navy:        '#0D1B2A',  // near-black navy — headings, dark text
  yellow:      '#F5C842',  // warm yellow — accent, chart bars
  teal:        '#3DBFA8',  // teal/green — success states
  cream:       '#F0F4FA',  // light blue-tinted cream — screen backgrounds
  white:       '#FFFFFF',  // card backgrounds
  gray:        '#8A8A8A',  // muted — secondary text, inactive tabs
  errorRed:    '#E84242',  // negative amounts, errors
  border:      '#DDE4F0',  // blue-tinted borders
  cardBg:      '#EEF2FA',  // subtle card background
  black:       '#000000',
  transparent: 'transparent',

  // Service brand colors (for avatars)
  dropbox:     '#0061FF',
  spotify:     '#1DB954',
  github:      '#24292E',
  adobe:       '#FF0000',
  figma:       '#F24E1E',
  openai:      '#10A37F',
  notion:      '#000000',
  medium:      '#000000',
  claude:      '#D97757',
  canva:       '#00C4CC',
} as const;

// ── Spacing ────────────────────────────────────────────────────────────────────
export const spacing = {
  xs:  4,
  sm:  8,
  md:  12,
  lg:  16,
  xl:  20,
  xxl: 24,
  x3l: 32,
  x4l: 48,
} as const;

// ── Border Radius ──────────────────────────────────────────────────────────────
export const radius = {
  sm:   8,
  md:   12,
  lg:   16,
  xl:   24,
  full: 9999,
} as const;

// ── Typography ─────────────────────────────────────────────────────────────────
export const typography = {
  fontFamily: Platform.select({
    ios:     'System',
    android: 'Roboto',
    default: 'System',
  }),
  sizes: {
    xs:   12,  // caption
    sm:   14,  // body
    md:   16,  // body large / button
    lg:   18,  // section title
    xl:   24,  // heading L
    xxl:  32,  // heading XL
  },
  weights: {
    regular:  '400' as const,
    medium:   '500' as const,
    semibold: '600' as const,
    bold:     '700' as const,
  },
} as const;

// ── Shadows ────────────────────────────────────────────────────────────────────
export const shadows = {
  sm: Platform.select({
    ios: {
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.08,
      shadowRadius: 2,
    },
    android: { elevation: 2 },
    default: {},
  }),
  md: Platform.select({
    ios: {
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
    },
    android: { elevation: 4 },
    default: {},
  }),
  lg: Platform.select({
    ios: {
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
    },
    android: { elevation: 8 },
    default: {},
  }),
} as const;

// ── Global StyleSheet ──────────────────────────────────────────────────────────
export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.cream,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.lg,
    ...shadows.md,
  },
  // Typography
  headingXL: {
    fontSize: typography.sizes.xxl,
    fontWeight: typography.weights.bold,
    color: colors.white,
  },
  headingL: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
    color: colors.navy,
  },
  headingM: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.navy,
  },
  body: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.regular,
    color: colors.navy,
  },
  caption: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.regular,
    color: colors.gray,
  },
  // Divider
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.sm,
  },
});
