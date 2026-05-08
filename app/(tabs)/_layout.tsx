// app/(tabs)/_layout.tsx — Bottom Tab Navigator
import React from 'react';
import { Tabs } from 'expo-router';
import { View, Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { colors, radius, spacing, shadows } from '../../styles/global';

type TabName = 'index' | 'subscriptions' | 'add' | 'notifications' | 'settings';

const TAB_ICONS: Record<string, { active: keyof typeof Ionicons.glyphMap; inactive: keyof typeof Ionicons.glyphMap }> = {
  index:         { active: 'home',          inactive: 'home-outline' },
  subscriptions: { active: 'layers',        inactive: 'layers-outline' },
  add:           { active: 'add-circle',    inactive: 'add-circle-outline' },
  notifications: { active: 'notifications', inactive: 'notifications-outline' },
  settings:      { active: 'settings',      inactive: 'settings-outline' },
};

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const icons = TAB_ICONS[route.name] ?? TAB_ICONS['index'];
        const iconName = isFocused ? icons.active : icons.inactive;
        const isAdd = route.name === 'add';

        const onPress = () => {
          const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            style={[styles.tabItem, isAdd && styles.addTabItem]}
            accessibilityRole="tab"
            accessibilityLabel={options.title ?? route.name}
            accessibilityState={{ selected: isFocused }}
          >
            {isAdd ? (
              <View style={styles.addButton}>
                <Ionicons name="add" size={28} color={colors.white} />
              </View>
            ) : (
              <Ionicons
                name={iconName}
                size={24}
                color={isFocused ? colors.primary : colors.gray}
              />
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index"         options={{ title: 'Home' }} />
      <Tabs.Screen name="subscriptions" options={{ title: 'Subscriptions' }} />
      <Tabs.Screen name="add"           options={{ title: 'Add' }} />
      <Tabs.Screen name="notifications" options={{ title: 'Notifications' }} />
      <Tabs.Screen name="settings"      options={{ title: 'Settings' }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingBottom: 24,
    paddingTop: spacing.md,
    paddingHorizontal: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    ...shadows.md,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addTabItem: {
    marginTop: -20,
  },
  addButton: {
    width: 52,
    height: 52,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.md,
  },
});
