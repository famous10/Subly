import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Pressable, StyleSheet } from 'react-native';
import { colors, radius, spacing, typography } from '../styles/global';

interface InsightBarProps {
  month: string;
  value: number;
  maxValue: number;
  isSelected: boolean;
  onPress: () => void;
  maxHeight?: number;
}

export function InsightBar({
  month,
  value,
  maxValue,
  isSelected,
  onPress,
  maxHeight = 120,
}: InsightBarProps) {
  const animHeight = useRef(new Animated.Value(0)).current;
  const barHeight = maxValue > 0 ? (value / maxValue) * maxHeight : 0;

  useEffect(() => {
    Animated.spring(animHeight, {
      toValue: barHeight,
      useNativeDriver: false,
      tension: 60,
      friction: 8,
    }).start();
  }, [barHeight]);

  return (
    <Pressable
      onPress={onPress}
      style={styles.wrapper}
      accessibilityRole="button"
      accessibilityLabel={`${month}, $${value.toFixed(0)}`}
    >
      <View style={[styles.barContainer, { height: maxHeight }]}>
        <Animated.View
          style={[
            styles.bar,
            {
              height: animHeight,
              backgroundColor: isSelected ? colors.primary : colors.yellow,
            },
          ]}
        />
      </View>
      <Text style={[styles.label, isSelected && styles.labelSelected]}>
        {month}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: spacing.xs,
  },
  barContainer: {
    justifyContent: 'flex-end',
    width: '100%',
  },
  bar: {
    borderRadius: radius.sm,
    width: '100%',
    minHeight: 4,
  },
  label: {
    fontSize: typography.sizes.xs,
    color: colors.gray,
    marginTop: spacing.xs,
    fontWeight: typography.weights.medium,
  },
  labelSelected: {
    color: colors.primary,
    fontWeight: typography.weights.bold,
  },
});
