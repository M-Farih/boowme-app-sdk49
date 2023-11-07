const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});
defaultConfig.resolver.sourceExts.push('cjs');

module.exports = defaultConfig;