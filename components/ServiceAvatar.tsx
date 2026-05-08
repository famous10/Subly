import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors, radius, typography } from '../styles/global';

interface ServiceAvatarProps {
  name: string;
  color: string;
  logoUrl?: string;
  size?: number;
}

export function ServiceAvatar({ name, color, logoUrl, size = 44 }: ServiceAvatarProps) {
  const initial = name.charAt(0).toUpperCase();
  const borderRadius = size * 0.25;

  if (logoUrl) {
    return (
      <Image
        source={{ uri: logoUrl }}
        style={[styles.avatar, { width: size, height: size, borderRadius }]}
        accessibilityLabel={`${name} logo`}
      />
    );
  }

  return (
    <View
      style={[
        styles.avatar,
        { width: size, height: size, borderRadius, backgroundColor: color },
      ]}
      accessibilityLabel={`${name} logo`}
    >
      <Text style={[styles.initial, { fontSize: size * 0.4 }]}>{initial}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  initial: {
    color: colors.white,
    fontWeight: typography.weights.bold,
  },
});
