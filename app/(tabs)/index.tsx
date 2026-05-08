// app/(tabs)/index.tsx — Home Screen
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BalanceCard } from '../../components/BalanceCard';
import { UpcomingCard } from '../../components/UpcomingCard';
import { SubscriptionRow } from '../../components/SubscriptionCard';
import { SectionHeader } from '../../components/SectionHeader';
import { ServiceAvatar } from '../../components/ServiceAvatar';
import { currentUser, upcomingPayments, subscriptions } from '../../data/mock';
import { colors, spacing, typography } from '../../styles/global';

export default function HomeScreen() {
  const homeSubscriptions = subscriptions.slice(0, 3);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{currentUser.avatarInitial}</Text>
            </View>
            <View>
              <Text style={styles.greeting}>Good morning 👋</Text>
              <Text style={styles.userName}>{currentUser.name}</Text>
            </View>
          </View>
          <Pressable
            style={styles.addBtn}
            accessibilityRole="button"
            accessibilityLabel="Add subscription"
          >
            <Ionicons name="add" size={22} color={colors.white} />
          </Pressable>
        </View>

        {/* Balance Card */}
        <BalanceCard balance={currentUser.balance} date={currentUser.balanceDate} />

        {/* Upcoming */}
        <View style={styles.section}>
          <SectionHeader
            title="Upcoming"
            actionLabel="View all"
            onAction={() => {}}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          >
            {upcomingPayments.map((item) => (
              <UpcomingCard
                key={item.id}
                name={item.name}
                amount={item.amount}
                dueDate={item.dueDate}
                status={item.status}
                color={item.color}
                initial={item.initial}
              />
            ))}
          </ScrollView>
        </View>

        {/* All Subscriptions */}
        <View style={styles.section}>
          <SectionHeader
            title="All Subscriptions"
            actionLabel="View all"
            onAction={() => {}}
          />
          <View style={styles.subList}>
            {homeSubscriptions.map((sub) => (
              <SubscriptionRow
                key={sub.id}
                name={sub.name}
                plan={sub.plan}
                amount={sub.amount}
                status={sub.status}
                color={sub.color}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.white,
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.bold,
  },
  greeting: {
    fontSize: typography.sizes.xs,
    color: colors.gray,
  },
  userName: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.semibold,
    color: colors.navy,
  },
  addBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xxl,
  },
  horizontalList: {
    paddingRight: spacing.lg,
  },
  subList: {
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: spacing.lg,
  },
});
