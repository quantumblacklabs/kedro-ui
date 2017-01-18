var baseConfig = require('@quantumblack/javascript-standards/config/react/babel/.babelrc');

baseConfig.env = {
  "AVA": {
    "plugins": [
      ["babel-plugin-webpack-loaders", {
        "config": "${CONFIG}",
        "verbose": false
      }]
    ]
  }
};
