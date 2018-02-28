const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: [require.resolve('./polyfills'), Path.resolve(__dirname, '../src/index.js')]
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    // copy data folder to make it available in redux loadData action
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, '../public/data'), to: 'data' }
    ])
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      }
    ]
  }
};
