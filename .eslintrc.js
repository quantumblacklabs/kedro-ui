var baseConfig = require('@quantumblack/javascript-standards/config/react/eslint/.eslintrc-source');

baseConfig.settings = Object.assign(baseConfig.settings, {
  'import/core-modules': [
    'enzyme'
  ],
  'import/resolver': {
    'webpack': {
      'config': 'webpack.build.config.js'
    }
  }
});

baseConfig.rules = Object.assign(baseConfig.rules, {
  'import/no-extraneous-dependencies': 'off',
  'import/no-unresolved': 'off',
  'import/extensions': 'off',
  'react/prefer-es6-class': 'off'
});


module.exports = baseConfig;
