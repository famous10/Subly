import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, radius, spacing, typography, shadows } from '../styles/global';

interface BalanceCardProps {
  balance: number;
  date: string;
}

export function BalanceCard({ balance, date }: BalanceCardProps) {
  const formatted = balance.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <View style={styles.card} accessibilityLabel={`Balance ${formatted}, date ${date}`}>
      <View style={styles.topRow}>
        <Text style={styles.label}>Balance</Text>
        <View style={styles.dateBadge}>
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
      <Text style={styles.amount}>{formatted}</Text>

      {/* Decorative circles */}
      <View style={styles.circleL} />
      <View style={styles.circleR} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primaryDark,
    borderRadius: radius.lg,
    padding: spacing.xxl,
    marginHorizontal: spacing.lg,
    overflow: 'hidden',
    ...shadows.lg,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  label: {
    fontSize: typography.sizes.sm,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: typography.weights.medium,
  },
  dateBadge: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  dateText: {
    fontSize: typography.sizes.xs,
    color: colors.white,
    fontWeight: typography.weights.medium,
  },
  amount: {
    fontSize: typography.sizes.xxl,
    fontWeight: typography.weights.bold,
    color: colors.white,
    marginTop: spacing.xs,
  },
  circleL: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.05)',
    bottom: -30,
    left: -20,
  },
  circleR: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.05)',
    top: -20,
    right: 20,
  },
});
