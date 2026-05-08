// app/index.tsx — Splash Screen
import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { colors, spacing, radius, typography } from '../styles/global';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/login');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      {/* Geometric SVG background shapes */}
      <Svg
        width={width}
        height={height}
        style={StyleSheet.absoluteFillObject}
        pointerEvents="none"
      >
        {/* Large teal circle — bottom left */}
        <Circle cx={-20} cy={height * 0.72} r={130} fill={colors.teal} opacity={0.9} />
        {/* Light blue half-circle — top right */}
        <Path
          d={`M ${width} 0 A 140 140 0 0 0 ${width - 140} 140 L ${width} 140 Z`}
          fill={colors.primaryLight}
          opacity={0.95}
        />
        {/* Yellow circle — mid right */}
        <Circle cx={width * 0.85} cy={height * 0.38} r={70} fill={colors.yellow} opacity={0.9} />
        {/* White circle — center */}
        <Circle cx={width * 0.45} cy={height * 0.42} r={90} fill={colors.white} opacity={0.07} />
        {/* Small dark circle — bottom right */}
        <Circle cx={width * 0.78} cy={height * 0.78} r={50} fill={colors.primaryDark} opacity={0.7} />
        {/* Small teal circle — top left */}
        <Circle cx={60} cy={180} r={40} fill={colors.teal} opacity={0.5} />
        {/* White rect — decorative */}
        <Rect
          x={width * 0.1}
          y={height * 0.55}
          width={60}
          height={60}
          rx={12}
          fill={colors.white}
          opacity={0.1}
        />
      </Svg>

      {/* Logo */}
      <View style={styles.logoRow}>
        <View style={styles.logoBox}>
          <Text style={styles.logoLetter}>R</Text>
        </View>
        <Text style={styles.logoWordmark}>Subly</Text>
      </View>

      {/* Bottom content */}
      <View style={styles.bottomContent}>
        <Text style={styles.headline}>Gain Financial{'\n'}Clarity</Text>
        <Text style={styles.subtext}>
          Track, analyze and control your subscriptions with ease
        </Text>

        <Pressable
          onPress={handleGetStarted}
          style={({ pressed }) => [styles.ctaButton, pressed && styles.ctaPressed]}
          accessibilityRole="button"
          accessibilityLabel="Get Started"
        >
          <Text style={styles.ctaText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 64,
    marginLeft: spacing.xxl,
  },
  logoBox: {
    width: 36,
    height: 36,
    borderRadius: radius.sm,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  logoLetter: {
    color: colors.white,
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
  },
  logoWordmark: {
    color: colors.white,
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
  },
  bottomContent: {
    position: 'absolute',
    bottom: 60,
    left: spacing.xxl,
    right: spacing.xxl,
  },
  headline: {
    fontSize: typography.sizes.xxl,
    fontWeight: typography.weights.bold,
    color: colors.white,
    lineHeight: 40,
    marginBottom: spacing.md,
  },
  subtext: {
    fontSize: typography.sizes.sm,
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 22,
    marginBottom: spacing.x3l,
  },
  ctaButton: {
    backgroundColor: colors.white,
    borderRadius: radius.full,
    paddingVertical: spacing.lg,
    alignItems: 'center',
  },
  ctaPressed: {
    opacity: 0.85,
  },
  ctaText: {
    color: colors.primary,
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.bold,
  },
});
