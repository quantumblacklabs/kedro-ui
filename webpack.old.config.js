'use strict';

const webpack = require('webpack');
const pkg = require('./package.json');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.min.js',
    publicPath: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
    library: 'flames'
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    }
  },
  resolve: {
    alias: {
      'styles': path.resolve(__dirname, 'src/styles'),
      'components': path.resolve(__dirname, 'src/components'),
      'utils': path.resolve(__dirname, 'src/utils')
    },
    modules: [
      __dirname,
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    new LodashModuleReplacementPlugin({
      'currying': true,
      'flattening': true
    }),
    new ExtractTextPlugin('carbon-ui.min.css'),
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
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('precss'),
                    require('postcss-cssnext'),
                    require('postcss-map')({
                      basePath: 'src/styles/themes',
                      maps: ['palette.yml']
                    })
                  ];
                }
              }
            }
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
