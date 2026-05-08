/// <reference types="nativewind/types" />

// Fallback type augmentation when nativewind is not yet installed.
// Once `npm install nativewind` is run, the line above takes over.
import 'react-native';

declare module 'react-native' {
  interface ViewProps {
    className?: string;
  }
  interface TextProps {
    className?: string;
  }
  interface ImageProps {
    className?: string;
  }
  interface TextInputProps {
    className?: string;
  }
  interface TouchableOpacityProps {
    className?: string;
  }
  interface ScrollViewProps {
    className?: string;
  }
  interface FlatListProps<ItemT> {
    className?: string;
  }
  interface SectionListProps<ItemT> {
    className?: string;
  }
  interface PressableProps {
    className?: string;
  }
}
