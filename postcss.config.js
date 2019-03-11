module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-extend-rule': {},
    'postcss-advanced-variables': {},
    'postcss-preset-env': {},
    'postcss-atroot': {},
    'postcss-property-lookup': {},
    'postcss-nested': {},
    'postcss-cssnext': {},
    'postcss-map': {
      basePath: 'src/styles/themes',
      maps: ['palette.yml']
    },
    cssnano: {}
  }
};

