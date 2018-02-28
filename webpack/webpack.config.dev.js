const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const Path = require('path');
const Autoprefixer = require('autoprefixer');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: Path.resolve(__dirname, 'build'),
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: Path.resolve(__dirname, '../src/index.html')
    }),
    new HtmlWebpackPlugin({
      title: 'iframe testpage',
      inject: false,
      filename: 'index_iframe.html',
      template: Path.resolve(__dirname, '../src/index_iframe.html')
    }),
    new Webpack.NamedModulesPlugin(),
    new Webpack.HotModuleReplacementPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: Path.resolve(__dirname, '../src'),
        enforce: "pre",
        loader: 'eslint-loader'
      },
      {
        test: /\.styl$/i,
        enforce: 'pre',
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: (loader) => [
                Autoprefixer
              ]
            }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        include: Path.resolve(__dirname, '../src'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: (loader) => [
                Autoprefixer
              ]
            }
          },
          'stylus-loader'
        ]
      }
    ]
  }
});
