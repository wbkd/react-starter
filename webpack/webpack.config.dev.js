const Path = require('path');
const Autoprefixer = require('autoprefixer');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  watch: true,
  stats: 'normal',
  devServer:
  {
    contentBase: Path.resolve(__dirname, 'build'),
    hot: true,
    compress: true,
    port: 3000,
    inline: true,
    open: false,
    publicPath: '/',
    watchOptions: {
      poll: true
    }
  },
  entry: [
    require.resolve('./polyfills'),
    Path.resolve(__dirname, '../src/index.js')
  ],
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/bundle.js'
  },
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src')
    }
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new Webpack.HotModuleReplacementPlugin(),
    // This Webpack plugin ensures npm install <library> forces a project rebuild.
    new WatchMissingNodeModulesPlugin(Path.resolve(__dirname, 'node_modules')),
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
    // copy data folder to make it available in redux loadData action
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, '../src/public/data'), to: 'data' }
    ])
  ],
  module: {
    rules: [
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
        use: ['babel-loader', {
          loader: 'eslint-loader',
          options: { emitWarning: true }
        }]
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
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/images/[name].[ext]'
          }
        }
      }
    ]
  }
};
