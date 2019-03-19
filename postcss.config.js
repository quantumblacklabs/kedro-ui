module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'postcss-preset-env': {},
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-extend-rule': {},
    'postcss-advanced-variables': {},
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

