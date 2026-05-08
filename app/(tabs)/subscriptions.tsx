// app/(tabs)/subscriptions.tsx — Subscriptions Screen
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SubscriptionCard } from '../../components/SubscriptionCard';
import { AppButton } from '../../components/AppButton';
import { subscriptions, type Subscription } from '../../data/mock';
import { colors, spacing, radius, typography, shadows } from '../../styles/global';

export default function SubscriptionsScreen() {
  const [query, setQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = subscriptions.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>My Subscriptions</Text>
        <Ionicons name="options-outline" size={22} color={colors.navy} />
      </View>

      {/* Search */}
      <View style={styles.searchRow}>
        <Ionicons name="search-outline" size={18} color={colors.gray} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search subscriptions..."
          placeholderTextColor={colors.gray}
          value={query}
          onChangeText={setQuery}
          accessibilityLabel="Search subscriptions"
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.primary}
          />
        }
        renderItem={({ item }) => (
          <View>
            <SubscriptionCard
              name={item.name}
              plan={item.plan}
              amount={item.amount}
              monthsActive={item.monthsActive}
              status={item.status}
              color={item.color}
              onPress={() => setSelected(selected === item.id ? null : item.id)}
              onManage={() => {}}
            />
            {selected === item.id && (
              <AppButton
                label="Cancel subscription"
                variant="danger"
                onPress={() => setSelected(null)}
                style={styles.cancelBtn}
              />
            )}
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Ionicons name="layers-outline" size={48} color={colors.border} />
            <Text style={styles.emptyText}>No subscriptions found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.cream,
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
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: radius.sm,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.md,
    ...shadows.sm,
  },
  searchIcon: {
    marginRight: spacing.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: typography.sizes.sm,
    color: colors.navy,
    paddingVertical: spacing.md,
  },
  list: {
    paddingHorizontal: spacing.lg,
    paddingBottom: 32,
  },
  cancelBtn: {
    marginTop: -spacing.sm,
    marginBottom: spacing.md,
    borderRadius: radius.sm,
  },
  empty: {
    alignItems: 'center',
    marginTop: 80,
    gap: spacing.md,
  },
  emptyText: {
    fontSize: typography.sizes.sm,
    color: colors.gray,
  },
});
