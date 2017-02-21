var baseConfig = require('@quantumblack/javascript-standards/config/react/eslint/.eslintrc-source');

baseConfig.settings = Object.assign(baseConfig.settings, {
  'import/core-modules': [
    'enzyme'
  ]
});

module.exports = baseConfig;
