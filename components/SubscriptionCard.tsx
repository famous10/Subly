import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { ServiceAvatar } from './ServiceAvatar';
import { AppButton } from './AppButton';
import { colors, radius, spacing, typography, shadows } from '../styles/global';

interface SubscriptionCardProps {
  name: string;
  plan: string;
  amount: number;
  monthsActive: number;
  status: 'active' | 'expired' | 'cancelled';
  color: string;
  onPress?: () => void;
  onManage?: () => void;
  showManage?: boolean;
}

export function SubscriptionCard({
  name,
  plan,
  amount,
  monthsActive,
  status,
  color,
  onPress,
  onManage,
  showManage = true,
}: SubscriptionCardProps) {
  const formatted = `$${amount.toFixed(2)}`;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      accessibilityRole="button"
      accessibilityLabel={`${name} ${plan}, ${formatted} per month`}
    >
      <ServiceAvatar name={name} color={color} size={48} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.plan}>{plan}</Text>
        <View style={styles.durationBadge}>
          <Text style={styles.durationText}>{monthsActive} months</Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text style={styles.amount}>{formatted}</Text>
        <Text style={styles.cycle}>/mo</Text>
        {showManage && onManage ? (
          <Pressable
            onPress={onManage}
            style={styles.manageBtn}
            accessibilityRole="button"
            accessibilityLabel={`Manage ${name}`}
          >
            <Text style={styles.manageBtnText}>Manage</Text>
          </Pressable>
        ) : null}
      </View>
    </Pressable>
  );
}

// Compact row variant for Home screen
interface SubscriptionRowProps {
  name: string;
  plan: string;
  amount: number;
  status: 'active' | 'expired' | 'cancelled';
  color: string;
  onPress?: () => void;
}

export function SubscriptionRow({
  name,
  plan,
  amount,
  status,
  color,
  onPress,
}: SubscriptionRowProps) {
  const formatted = `$${amount.toFixed(2)}`;
  const isActive = status === 'active';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
      accessibilityRole="button"
      accessibilityLabel={`${name}, ${formatted}`}
    >
      <ServiceAvatar name={name} color={color} size={40} />
      <View style={styles.rowInfo}>
        <Text style={styles.rowName}>{name}</Text>
        <Text style={styles.rowPlan}>{plan}</Text>
      </View>
      <View style={styles.rowRight}>
        <Text style={styles.rowAmount}>{formatted}</Text>
        <View style={[styles.statusDot, { backgroundColor: isActive ? colors.teal : colors.errorRed }]} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  // Card (Subscriptions screen)
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  pressed: {
    opacity: 0.75,
  },
  info: {
    flex: 1,
    marginLeft: spacing.md,
  },
  name: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.semibold,
    color: colors.navy,
  },
  plan: {
    fontSize: typography.sizes.xs,
    color: colors.gray,
    marginTop: 2,
  },
  durationBadge: {
    marginTop: spacing.xs,
    alignSelf: 'flex-start',
    backgroundColor: colors.cardBg,
    borderRadius: radius.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
  },
  durationText: {
    fontSize: typography.sizes.xs,
    color: colors.gray,
    fontWeight: typography.weights.medium,
  },
  right: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.bold,
    color: colors.navy,
  },
  cycle: {
    fontSize: typography.sizes.xs,
    color: colors.gray,
  },
  manageBtn: {
    marginTop: spacing.sm,
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: 4,
  },
  manageBtnText: {
    fontSize: typography.sizes.xs,
    color: colors.primary,
    fontWeight: typography.weights.semibold,
  },

  // Row (Home screen)
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  rowInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },
  rowName: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.semibold,
    color: colors.navy,
  },
  rowPlan: {
    fontSize: typography.sizes.xs,
    color: colors.gray,
    marginTop: 2,
  },
  rowRight: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: spacing.sm,
  },
  rowAmount: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.semibold,
    color: colors.navy,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 4,
  },
});
