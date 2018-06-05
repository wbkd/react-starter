const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const Webpack = require('webpack');

module.exports = {
  entry: {
    app: [require.resolve('./polyfills'), Path.resolve(__dirname, '../src/index.js')],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename:  'js/[name].js'
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    // copy data folder to make it available in redux loadData action
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, '../public/data'), to: 'data' }
    ]),
    new Webpack.ProvidePlugin({
      config: '~/../config.json'
    })
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
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      }
    ]
  }
};
