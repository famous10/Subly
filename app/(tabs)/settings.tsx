import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography } from '../../styles/global';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <Text style={styles.sub}>Coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.cream },
  text: { fontSize: typography.sizes.lg, fontWeight: typography.weights.bold, color: colors.navy },
  sub: { fontSize: typography.sizes.sm, color: colors.gray, marginTop: 8 },
});
