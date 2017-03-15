'use strict';

const webpack = require('webpack');
const pkg = require('./package.json');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: './dist',
    filename: 'index.js',
    publicPath: './dist',
    libraryTarget: 'commonjs2',
    library: 'flames'
  },
  externals: {
    'react': 'react',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  resolve: {
    alias: {
      'components': path.resolve(__dirname + '/src/components'),
      'styles': path.resolve(__dirname + '/src/styles')
    },
    modules: [
      __dirname,
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    new ExtractTextPlugin('carbon-ui.css'),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.svg$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'svg-react-loader' },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeUnusedNS: true },
                { removeAttrs: { attrs: ['fill', 'fill-rule'] } },
                { removeDesc: true },
                { removeTitle: true },
                { removeXMLNS: true },
                { removeUnknownsAndDefaults: true },
                { removeEditorsNSData: true }
              ]
            }
          }
        ]
      }
    ]
  }
};
