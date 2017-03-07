var path = require('path');
var pkg = require('./package.json');
var _ = require('lodash');
var glob = require('glob');
var stylelint = require('stylelint');

var dirs = [
  path.resolve(__dirname, 'src'),
  path.resolve(__dirname, 'templates')
];

const searchPath = pattern => {
  console.log('pattern', pattern);
  return _(glob.sync(path.resolve(__dirname, pattern)))
    .reject(c => /renderer\.jsx$/.test(pattern))
    .sortBy(c => _.last(c.split('/')))
    .value();
};

const searchPath2 = pattern => _.sortBy(glob.sync(path.resolve(__dirname, pattern)), c => _.last(c.split('/')));

const getComponentsFunc = (name, pattern) => {
  return () => {
    const components = searchPath(pattern);
    console.log(`Found ${components.length} ${name} components`);
    return components;
  }
};

console.log('resolve-----', path.resolve(__dirname + '/templates/custom-renderers/styleguide'));

var config = {
  title: pkg.name + ' v' + pkg.version,
  template: './templates/index.html',
  sections: [
    {
      name: 'Icons',
      content: './templates/components/icons.md',
      components: getComponentsFunc('icon', 'src/components/icon/**/*.jsx')
    },
    {
      name: 'Menus',
      content: './templates/components/menus.md',
      components: getComponentsFunc('menu', 'src/components/menus/**/*.jsx')
    },
    {
      name: 'Project: Insights',
      content: './templates/projects/insights.md',
      components: getComponentsFunc('menu', 'src/components/insights/**/*.jsx')
    },
    {
      name: 'Modules',
      content: './templates/modules/index.md',
      components: getComponentsFunc('module', 'src/components/modules/**/*.jsx')
    }
  ],
  getComponentPathLine: function(componentPath) {
    var originalName = path.basename(componentPath, '.jsx');

    // remove dashes and capitalize letter after dash
    var name = originalName.replace(/((?:-))([a-z])/g, function(array, group1, group2) {
      return group2.toUpperCase();
    });

    // capitalize first letter
    name = name.charAt(0).toUpperCase() + name.slice(1);

    return 'import { ' + name + ' } from \'qb-components\';';
  },
  defaultExample: true,
  showCode: false,
  serverPort: process.env.PORT || 3500,
  highlightTheme: 'material',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(jsx|js)?$/,
          loaders: ['babel-loader'],
          include: dirs
        },
        {
          test: /\.css$/,
          loaders: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('stylelint'),
                    require('precss'),
                    require('postcss-cssnext')
                  ];
                }
              }
            }
          ],
          include: dirs,
        },
        {
          test: /\.json$/,
          loaders: ['json-loader'],
          include: dirs
        },
        {
          test: /\.(png|jpg|woff|eot|ttf)$/,
          loader: 'file-loader',
          include: dirs
        },
        {
          test: /\.svg$/,
          use: [
            { loader: 'babel-loader' },
            { loader: 'svg-react-loader' },
            {
              loader: 'svgo-loader',
              options: {
                plugins: [
                  { removeUnusedNS: true },
                  { removeAttrs: { attrs: ['fill', 'fill-rule'] } },
                  { removeDesc: true },
                  { removeTitle: true },
                  { removeXMLNS: true },
                  { removeUnknownsAndDefaults: true },
                  { removeEditorsNSData: true }
                ]
              }
            }
          ],
          include: dirs
        }
      ]
    },
    resolve: {
      alias: {
        'styles': path.resolve(__dirname + '/src/styles'),
        'rsg-components/ReactComponent/ReactComponentRenderer': path.resolve(__dirname + '/templates/custom-renderers/react-component'),
        'rsg-components/Section/SectionRenderer': path.resolve(__dirname + '/templates/custom-renderers/section'),
        'rsg-components/StyleGuide/StyleGuideRenderer': path.resolve(__dirname + '/templates/custom-renderers/styleguide/index.jsx'),
        'rsg-components/Playground/PlaygroundRenderer': path.resolve(__dirname + '/templates/custom-renderers/playground'),
        'rsg-components/Examples': path.resolve(__dirname + '/templates/custom-renderers/examples')
        // 'rsg-components/Editor/Editor': path.resolve(__dirname + '/templates/custom-renderers/editor'),
        // 'rsg-components/Editor/EditorLoader': path.resolve(__dirname + '/templates/custom-renderers/editor/editor-loader')
      }
    }
  }
};

console.log(path.resolve(__dirname + '/templates/custom-renderers/ReactComponent'));

module.exports = config;
