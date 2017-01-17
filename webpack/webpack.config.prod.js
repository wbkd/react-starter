const Path = require('path');
const Autoprefixer = require('autoprefixer');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractCSS = new ExtractTextPlugin({filename: 'styles/bundle.css' });

module.exports = {
  devtool: 'source-map',
  entry: [
    require.resolve('./polyfills'),
    Path.resolve(__dirname, '../src/index.js')
  ],
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/bundle.js'
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new Webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compressor: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new CopyWebpackPlugin([
      { from:  Path.resolve(__dirname, '../src/public/data'), to: 'data' },
    ]),
    new Webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          Autoprefixer
        ]
      }
    }),
    ExtractCSS
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      },
      {
        test: /\.styl$/i,
        loaders: ExtractCSS.extract(['css-loader', 'postcss-loader', 'stylus-loader'])
      },
      {
        test: /\.css$/,
        use: ExtractCSS.extract(['css-loader'])
      },
    ]
  }
};
