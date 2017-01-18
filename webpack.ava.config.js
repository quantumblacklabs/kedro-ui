require('babel-register')({
  // This will override `node_modules` ignoring - you can alternatively pass
  // an array of strings to be explicitly matched or a regex / glob
  ignore: false
});

var config = require('@quantumblack/javascript-standards/config/ava/webpack.ava.config.js');

module.exports = config;
