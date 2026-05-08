module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // NOTE: Do NOT add react-native-reanimated/plugin unless you are
    // actively using Reanimated animated values/hooks in your code.
    // The plugin rewrites module imports and breaks RN 0.81 export default interop.
  };
};
