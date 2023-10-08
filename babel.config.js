module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    //if you already have other plugin just paste this lines below

    [
      'module-resolver',
      {
        alias: {
          '@SharedComponents': './src/SharedComponents',
          '@Components': './src/Components',
          '@Screens': './src/Screens',
          '@Utiles': './src/Utiles',
          '@assets': './src/assets',
          '@Store': './src/Store',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
