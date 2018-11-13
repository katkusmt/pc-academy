const path = require('path');

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    root: [
      path.resolve(__dirname, 'node_modules', '.bin')
    ],
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'build')
  }
};