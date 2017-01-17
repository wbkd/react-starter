const Path = require('path');
const Autoprefixer = require('autoprefixer');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

module.exports = {
  devtool: 'cheap-eval-source-map',
  devServer:
  {
    contentBase: './build',
    hot: true,
    port: 3000,
    inline: true
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
    }),
    new HtmlWebpackPlugin({
      title: 'iframe testpage',
      inject: false,
      filename: 'index_iframe.html',
      template: Path.resolve(__dirname, '../src/index_iframe.html'),
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
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader']
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
