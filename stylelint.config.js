module.exports = {
  'extends': 'stylelint-config-standard',
  'rules': {
    'at-rule-no-unknown': null,
    'declaration-empty-line-before': null,
    'selector-max-specificity': ['0,5,0', {
      ignoreSelectors: ['.kui-theme--light &:$(state)']
    }]
  },
  'ignoreFiles': 'src/styles/mixins/themes.css'
};
