import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { ServiceAvatar } from './ServiceAvatar';
import { colors, radius, spacing, typography, shadows } from '../styles/global';

interface UpcomingCardProps {
  name: string;
  amount: number;
  dueDate: string;
  status: 'upcoming' | 'expired';
  color: string;
  initial: string;
  onPress?: () => void;
}

export function UpcomingCard({
  name,
  amount,
  dueDate,
  status,
  color,
  initial,
  onPress,
}: UpcomingCardProps) {
  const isExpired = status === 'expired';
  const formatted = `$${amount.toFixed(2)}`;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      accessibilityRole="button"
      accessibilityLabel={`${name}, ${formatted}, due ${dueDate}`}
    >
      <ServiceAvatar name={name} color={color} size={40} />
      <Text style={styles.name} numberOfLines={1}>{name}</Text>
      <Text style={styles.amount}>{formatted}</Text>
      <View style={[styles.badge, isExpired ? styles.badgeExpired : styles.badgeUpcoming]}>
        <Text style={[styles.badgeText, isExpired ? styles.badgeTextExpired : styles.badgeTextUpcoming]}>
          {isExpired ? 'Expired' : dueDate}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.lg,
    marginRight: spacing.md,
    width: 130,
    alignItems: 'center',
    ...shadows.sm,
  },
  pressed: {
    opacity: 0.75,
  },
  name: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.semibold,
    color: colors.navy,
    marginTop: spacing.sm,
    textAlign: 'center',
  },
  amount: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.bold,
    color: colors.navy,
    marginTop: spacing.xs,
  },
  badge: {
    marginTop: spacing.sm,
    borderRadius: radius.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
  },
  badgeExpired: {
    backgroundColor: '#FFE8E8',
  },
  badgeUpcoming: {
    backgroundColor: '#E8F5E9',
  },
  badgeText: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.medium,
  },
  badgeTextExpired: {
    color: colors.errorRed,
  },
  badgeTextUpcoming: {
    color: colors.teal,
  },
});
