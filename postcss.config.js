module.exports = {
  plugins: [
    require('stylelint'),
    require('precss'),
    require('postcss-cssnext'),
    require('postcss-map')({
      basePath: 'src/styles/themes',
      maps: ['palette.yml']
    })
  ]
};
