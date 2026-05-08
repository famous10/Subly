import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ServiceAvatar } from './ServiceAvatar';
import { colors, spacing, typography } from '../styles/global';

interface TransactionRowProps {
  name: string;
  amount: number;
  date: string;
  isPositive: boolean;
  color: string;
}

export function TransactionRow({ name, amount, date, isPositive, color }: TransactionRowProps) {
  const sign = isPositive ? '+' : '-';
  const amountColor = isPositive ? colors.teal : colors.errorRed;
  const formatted = `${sign}$${Math.abs(amount).toFixed(2)}`;

  return (
    <View style={styles.row} accessibilityLabel={`${name}, ${formatted}, ${date}`}>
      <ServiceAvatar name={name} color={color} size={40} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={[styles.amount, { color: amountColor }]}>{formatted}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  info: {
    flex: 1,
    marginLeft: spacing.md,
  },
  name: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.semibold,
    color: colors.navy,
  },
  date: {
    fontSize: typography.sizes.xs,
    color: colors.gray,
    marginTop: 2,
  },
  amount: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.bold,
  },
});
