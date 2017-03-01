var baseConfig = require('@quantumblack/javascript-standards/config/react/eslint/.eslintrc-source');

baseConfig.settings = Object.assign(baseConfig.settings, {
  'import/core-modules': [
    'enzyme'
  ]
});

baseConfig.rules = Object.assign(baseConfig.rules, {
  'jsx-a11y/no-static-element-interactions': 'off',
  'jsx-quotes': ['error', 'prefer-single'],
  'no-underscore-dangle': 'off',
  'react/prefer-es6-class': [2, 'never']
});

module.exports = baseConfig;
