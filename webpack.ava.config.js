const path = require('path');

module.exports = {
  resolve: {
    modules: [
      __dirname,
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    alias: {
      'components': path.resolve(__dirname + '/src/components')
    },
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: ['babel-loader']
    }]
  }
};
