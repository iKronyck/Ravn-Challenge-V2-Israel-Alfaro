module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@router': './src/router',
          '@components': './src/components',
          '@graphql': './src/graphql',
          '@colors': './src/colors',
        },
      },
    ],
  ],
};
