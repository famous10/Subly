import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, spacing, typography } from '../styles/global';

interface AppInputProps extends TextInputProps {
  label?: string;
  error?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  secureText?: boolean;
}

export function AppInput({
  label,
  error,
  icon,
  secureText = false,
  ...rest
}: AppInputProps) {
  const [secure, setSecure] = useState(secureText);
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.wrapper}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <View
        style={[
          styles.inputRow,
          focused && styles.inputFocused,
          !!error && styles.inputError,
        ]}
      >
        {icon ? (
          <Ionicons
            name={icon}
            size={18}
            color={colors.gray}
            style={styles.iconLeft}
          />
        ) : null}

        <TextInput
          style={styles.input}
          secureTextEntry={secure}
          placeholderTextColor={colors.gray}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          autoCapitalize="none"
          accessibilityLabel={label}
          {...rest}
        />

        {secureText ? (
          <Pressable
            onPress={() => setSecure((s) => !s)}
            accessibilityRole="button"
            accessibilityLabel={secure ? 'Show password' : 'Hide password'}
            hitSlop={8}
          >
            <Ionicons
              name={secure ? 'eye-off-outline' : 'eye-outline'}
              size={18}
              color={colors.gray}
            />
          </Pressable>
        ) : null}
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.lg,
  },
  label: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
    color: colors.navy,
    marginBottom: spacing.xs,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.white,
    minHeight: 52,
  },
  inputFocused: {
    borderColor: colors.primary,
  },
  inputError: {
    borderColor: colors.errorRed,
  },
  iconLeft: {
    marginRight: spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: typography.sizes.sm,
    color: colors.navy,
    paddingVertical: spacing.md,
  },
  errorText: {
    fontSize: typography.sizes.xs,
    color: colors.errorRed,
    marginTop: spacing.xs,
  },
});
