var baseConfig = require('@quantumblack/javascript-standards/config/react/eslint/.eslintrc-source');

baseConfig.settings = Object.assign(baseConfig.settings, {
  'import/core-modules': [
    'enzyme'
  ]
});

baseConfig.rules = Object.assign(baseConfig.rules, {
  'import/no-extraneous-dependencies': 'off',
  'import/no-unresolved': 'off',
  'import/extensions': 'off'
});


module.exports = baseConfig;
