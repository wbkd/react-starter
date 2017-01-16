const Path = require('path');
const Autoprefixer = require('autoprefixer');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

module.exports = {
  devtool: 'cheap-eval-source-map',
  devServer:
  {
    contentBase: './build',
    hot: true,
    port: 3000,
    inline: true,
    progress: true
  },
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
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new Webpack.HotModuleReplacementPlugin(),
    new WatchMissingNodeModulesPlugin(Path.resolve(__dirname, 'node_modules')),
    new HtmlWebpackPlugin({
      inject: true,
      template: Path.resolve(__dirname, '../src/index.html'),
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.(js)$/,
        loader: 'eslint',
        exclude: /node_modules/,
        include: Path.resolve(__dirname, '../src')
      }
    ],
    loaders: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          cacheDirectory: true
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?importLoaders=1', 'postcss']
      },
      {
        test: /\.styl$/i,
        loaders: ['style', 'css', 'stylus']
      }
    ]
  },
  postcss: function() {
    return [
      Autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9'
        ]
      }),
    ];
  }
};
