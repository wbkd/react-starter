const Path = require('path');
const Autoprefixer = require('autoprefixer');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractSASS = new ExtractTextPlugin('styles/bundle.css');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

module.exports = (options) => {
  let webpackConfig = {
    devtool: options.devtool,
    entry: [
      Path.resolve(__dirname, '../src/index.js')
    ],
    output: {
      path: Path.join(__dirname, '../build'),
      filename: 'js/bundle.js'
    },
    plugins: [
      new Webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(options.isProduction ? 'production' : 'development')
        }
      })
    ],
    module: {
      loaders: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['es2015'],
            cacheDirectory: true
          }
        }
      ]
    },
    // We use PostCSS for autoprefixing only.
    postcss: function() {
      return [
        Autoprefixer({
          browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9', // React doesn't support IE8 anyway
          ]
        }),
      ];
    }
  };

  if (options.isProduction) {
    webpackConfig.plugins.push(
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
      new Webpack.optimize.OccurrenceOrderPlugin(),
      new Webpack.optimize.DedupePlugin(),
      new Webpack.optimize.UglifyJsPlugin({
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
      ExtractSASS
    );

    webpackConfig.module.loaders.push({
      test: /\.scss$/i,
      loader: ExtractSASS.extract(['css', 'sass'])
    });

  } else {
    webpackConfig.plugins.push(
      new Webpack.HotModuleReplacementPlugin(),
      new WatchMissingNodeModulesPlugin(Path.resolve(__dirname, 'node_modules')),
      new HtmlWebpackPlugin({
        inject: true,
        template: Path.resolve(__dirname, '../src/index.html'),
      })
    );
    webpackConfig.module.preLoaders = [{
      test: /\.(js)$/,
      loader: 'eslint',
      exclude: /node_modules/,
      include: Path.resolve(__dirname, '../src')
    }]

    webpackConfig.module.loaders.push({
      test: /\.css$/,
      loaders: ['style', 'css?importLoaders=1','postcss']
    }, {
      test: /\.scss$/i,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.json$/,
      loader: 'json'
    });

    webpackConfig.devServer = {
      contentBase: './build',
      hot: true,
      port: options.port,
      inline: true,
      progress: true
    };
  }

  return webpackConfig;

}
