const Webpack = require('webpack');
const Path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  stats: 'errors-only',
  bail: true,
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new MiniCssExtractPlugin({ filename: 'bundle.css' }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [postcssPresetEnv],
              },
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        include: [
          Path.resolve(__dirname, '../src'),
          /**
           * add ES6 modules that should be transpiled here. For example:
           * Path.resolve(__dirname, '../node_modules/query-string'),
           */
        ],
        loader: 'babel-loader',
      },
    ],
  },
});
