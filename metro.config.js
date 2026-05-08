// metro.config.js
// https://docs.expo.dev/guides/customizing-metro/

const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// ── Asset extensions ───────────────────────────────────────────────────────────
config.resolver.assetExts.push(
  'ttf', 'otf', 'woff', 'woff2',
  'webp', 'mp4', 'mp3', 'wav',
  'db', 'sqlite'
);

// ── Source extensions ──────────────────────────────────────────────────────────
// Append css for web support — do NOT replace the array.
config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  'css',
];

module.exports = config;
