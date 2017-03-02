var path = require('path');
var pkg = require('./package.json');
var _ = require('lodash');
var glob = require('glob');
var stylelint = require('stylelint');

var dirs = [
  path.resolve(__dirname, 'src'),
  path.resolve(__dirname, 'templates')
];

var config = {
  title: pkg.name + ' v' + pkg.version,
  template: './templates/index.html',
  sections: [
    {
      name: 'Icons',
      content: './templates/components/icons.md',
      components: function() {
        const components = _.sortBy(glob.sync(path.resolve(__dirname, 'src/components/icon/*.jsx')), c => _.last(c.split('/')));
        console.log(`Found ${ components.length } icon components in ${ path.resolve(__dirname, 'src/components/icon/*.jsx') }`);
        return components;
      }
    },
    {
      name: 'Menus',
      content: './templates/components/menus.md',
      components: function() {
        const components = _.sortBy(glob.sync(path.resolve(__dirname, 'src/components/menus/**/*.jsx')), c => _.last(c.split('/')));
        console.log(`Found ${ components.length } menus in ${ path.resolve(__dirname, 'src/components/menus/**/*.jsx') }`);
        return components;
      }
    },
    {
      name: 'Project: Insights',
      content: './templates/projects/insights.md',
      components: function() {
        const components = _.sortBy(glob.sync(path.resolve(__dirname, 'src/components/insights/**/*.jsx')), c => _.last(c.split('/')));
        console.log(`Found ${ components.length } components in ${ path.resolve(__dirname, 'src/components/insights/**/*.jsx') }`);
        return components;
      }
    },
    {
      name: 'Modules',
      content: './templates/modules/index.md',
      components: function() {
        const modules = _.sortBy(glob.sync(path.resolve(__dirname, 'src/modules/**/*.jsx')), c => _.last(c.split('/')));
        console.log(`Found ${ modules.length } components in ${ path.resolve(__dirname, 'src/modules/**/*.jsx') }`);
        return modules;
      }
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
        'rsg-components/ReactComponent/ReactComponentRenderer': path.resolve(__dirname + '/templates/custom-renderers/react-component'),
        'rsg-components/Section/SectionRenderer': path.resolve(__dirname + '/templates/custom-renderers/section'),
        'rsg-components/StyleGuide/StyleGuideRenderer': path.resolve(__dirname + '/templates/custom-renderers/styleguide'),
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
