
module.exports = {
  extends: [
    "standard",
    "plugin:react/recommended"
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/destructuring-assignment': 'off',
    'no-restricted-globals': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/role-has-required-aria-props': 'off',
    'space-before-function-paren': 'off',
    'semi': 'off',
    'operator-linebreak': 'off'
  },
  settings: {
    'import/core-modules': [
      'enzyme'
    ]
  },
  env: {
    es6: true
  },
  overrides: [
    {
      files: [
        "**/*.test.js"
      ],
      env: {
        jest: true // now **/*.test.js files' env has both es6 *and* jest
      },
      // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
      // "extends": ["plugin:jest/recommended"]
      plugins: ["jest"],
      rules: {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
        "max-len": "off"
      }
    }
  ]
};
