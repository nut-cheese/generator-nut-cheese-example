const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../src/index.jsx'),
    ],
    vender: [
      'react'
    ]
  },
  output: {
    filename: 'bundle.[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '../src'),
    ],
    alias: {
      Components: path.resolve(__dirname, '../src/components'),
      Util: path.resolve(__dirname, '../src/util/util'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react', ['es2015', { modules: false }], 'stage-0'],
          plugins: [
            'transform-runtime',
            'react-hot-loader/babel'
          ],
          babelrc: false,
        }
      }],
      exclude: /(node_modules|bower_components)/,
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            modules: true,
            sourceMap: true,
            localIdentName: '[name]-[local]-[hash:base64:5]',
          }
        },
        'postcss-loader',
        'sass-loader',
      ],
    }, {
      test: /\.css$/,
      use: [
        'style-loader?sourceMap',
        'css-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vender',
      filename: '[name].bundle.js'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../template/index.html'),
      hash: true,
    }),
  ],
  devServer: {
    hot: true,
    port: 7801,
    historyApiFallback: true,
    contentBase: path.join(__dirname, '../dist'),
  },
  devtool: 'cheap-module-eval-source-map',
};