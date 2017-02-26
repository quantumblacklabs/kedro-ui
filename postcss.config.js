module.exports = {
  plugins: [
    require('stylelint')({}),
    require('precss')({}),
    require('postcss-cssnext')({})
  ]
};
