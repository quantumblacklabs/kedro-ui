var baseConfig = require('@quantumblack/javascript-standards/config/react/eslint/.eslintrc-source');

baseConfig.rules = Object.assign(baseConfig.rules, {
  'react/jsx-filename-extension': [ 1, { 'extensions': ['.js', '.jsx'] } ],
  'react/jsx-boolean-value': ['off']
});

baseConfig.settings = Object.assign(baseConfig.settings, {
  'import/core-modules': [
    'enzyme'
  ]
});

module.exports = baseConfig;
