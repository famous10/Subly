// app/(tabs)/insights.tsx — Monthly Insights Screen
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { InsightBar } from '../../components/InsightBar';
import { TransactionRow } from '../../components/TransactionRow';
import { UpcomingCard } from '../../components/UpcomingCard';
import { monthlyInsights, transactions, upcomingPayments } from '../../data/mock';
import { colors, spacing, radius, typography, shadows } from '../../styles/global';

export default function InsightsScreen() {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(3); // April

  const currentMonth = monthlyInsights[selectedMonthIndex];
  const maxValue = Math.max(...monthlyInsights.map((m) => m.total));

  const goBack = () => {
    if (selectedMonthIndex > 0) setSelectedMonthIndex((i) => i - 1);
  };
  const goForward = () => {
    if (selectedMonthIndex < monthlyInsights.length - 1) setSelectedMonthIndex((i) => i + 1);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Monthly Insights</Text>
          <View style={styles.monthSelector}>
            <Pressable
              onPress={goBack}
              disabled={selectedMonthIndex === 0}
              accessibilityRole="button"
              accessibilityLabel="Previous month"
              hitSlop={8}
            >
              <Ionicons
                name="chevron-back"
                size={20}
                color={selectedMonthIndex === 0 ? colors.border : colors.navy}
              />
            </Pressable>
            <Text style={styles.monthLabel}>{currentMonth.month}</Text>
            <Pressable
              onPress={goForward}
              disabled={selectedMonthIndex === monthlyInsights.length - 1}
              accessibilityRole="button"
              accessibilityLabel="Next month"
              hitSlop={8}
            >
              <Ionicons
                name="chevron-forward"
                size={20}
                color={selectedMonthIndex === monthlyInsights.length - 1 ? colors.border : colors.navy}
              />
            </Pressable>
          </View>
        </View>

        {/* Upcoming payments */}
        <Text style={styles.sectionTitle}>Upcoming</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
          style={styles.horizontalScroll}
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

        {/* Bar Chart */}
        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>Spending Overview</Text>
          <View style={styles.chart}>
            {monthlyInsights.map((item, index) => (
              <InsightBar
                key={item.month}
                month={item.shortMonth}
                value={item.total}
                maxValue={maxValue}
                isSelected={index === selectedMonthIndex}
                onPress={() => setSelectedMonthIndex(index)}
                maxHeight={100}
              />
            ))}
          </View>
        </View>

        {/* Expenses Summary */}
        <View style={styles.expenseCard}>
          <View>
            <Text style={styles.expenseLabel}>Expenses</Text>
            <Text style={styles.expensePeriod}>{currentMonth.month}</Text>
          </View>
          <Text style={styles.expenseAmount}>
            -${currentMonth.total.toFixed(2)}
          </Text>
        </View>

        {/* History */}
        <Text style={[styles.sectionTitle, { marginTop: spacing.xxl }]}>History</Text>
        <View style={styles.historyCard}>
          {transactions.map((tx) => (
            <TransactionRow
              key={tx.id}
              name={tx.name}
              amount={tx.amount}
              date={tx.date}
              isPositive={tx.isPositive}
              color={tx.color}
            />
          ))}
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
  content: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },
  title: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    color: colors.navy,
  },
  monthSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  monthLabel: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.semibold,
    color: colors.navy,
    minWidth: 100,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.navy,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },
  horizontalScroll: {
    marginBottom: spacing.xxl,
  },
  horizontalList: {
    paddingHorizontal: spacing.lg,
    paddingRight: spacing.xxl,
  },
  chartCard: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    marginHorizontal: spacing.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.sm,
  },
  chartTitle: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.semibold,
    color: colors.navy,
    marginBottom: spacing.lg,
  },
  chart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 130,
    gap: spacing.xs,
  },
  expenseCard: {
    backgroundColor: colors.primaryDark,
    borderRadius: radius.md,
    marginHorizontal: spacing.lg,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shadows.md,
  },
  expenseLabel: {
    fontSize: typography.sizes.sm,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: typography.weights.medium,
  },
  expensePeriod: {
    fontSize: typography.sizes.xs,
    color: 'rgba(255,255,255,0.5)',
    marginTop: 2,
  },
  expenseAmount: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
    color: colors.errorRed,
  },
  historyCard: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    marginHorizontal: spacing.lg,
    paddingHorizontal: spacing.lg,
    ...shadows.sm,
  },
});
