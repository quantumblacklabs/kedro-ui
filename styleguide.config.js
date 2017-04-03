const path = require('path');
const pkg = require('./package.json');
const _ = require('lodash');
const glob = require('glob');
const stylelint = require('stylelint');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const dirs = [
  path.resolve(__dirname, 'src'),
  path.resolve(__dirname, 'templates')
];

/**
 * A function to search directories for components to render within the styleguide
 * @param  {string} pattern Glob pattern to match against path
 * @return {object}         Array of components
 */
const searchPath = pattern => _(glob.sync(path.resolve(__dirname, pattern)))
  .reject(c => /renderer\.jsx$/.test(c))
  .sortBy(c => _.last(c.split('/')))
  .value();

/**
 * Returns a function to search for components within the project
 * by patching a path by pattern
 * @param  {string} name    The type of component
 * @param  {string} pattern Glob pattern to match against path
 * @return {function}         The search function
 */
const getComponentsFunc = (name, pattern) => {
  return () => {
    const components = searchPath(pattern);
    console.log(`Found ${components.length} ${name} components from pattern ${pattern}`);
    return components;
  }
};

const config = {
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
      name: 'Form Controls',
      content: './templates/components/form-controls.md',
      components: getComponentsFunc('form', 'src/components/form-controls/**/*.jsx')
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

    return 'import { ' + name + ' } from \'carbon-ui\';';
  },
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.jsx?$/, '.examples.md');
  },
  defaultExample: false,
  showCode: false,
  serverPort: 3500,
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
                    require('postcss-cssnext'),
                    require('postcss-map')({
                      basePath: 'src/styles/themes',
                      maps: ['palette.yml']
                    })
                  ];
                }
              }
            }
          ],
          include: dirs
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
      extensions: ['.js', '.jsx', '.css'],
      alias: {
        'utils': path.resolve(__dirname, 'src/utils'),
        'styles': path.resolve(__dirname, 'src/styles'),
        'components': path.resolve(__dirname, 'src/components'),
        'rsg-components/ReactComponent/ReactComponentRenderer': path.resolve(__dirname + '/templates/react-styleguidist/react-component'),
        'rsg-components/Section/SectionRenderer': path.resolve(__dirname + '/templates/react-styleguidist/section'),
        'rsg-components/StyleGuide/StyleGuideRenderer': path.resolve(__dirname + '/templates/react-styleguidist/styleguide'),
        'rsg-components/Playground/PlaygroundRenderer': path.resolve(__dirname + '/templates/react-styleguidist/playground'),
        'rsg-components/Examples': path.resolve(__dirname + '/templates/react-styleguidist/examples'),
        'rsg-components/Preview': path.resolve(__dirname + '/templates/react-styleguidist/preview'),
        'rsg-components/Editor': path.resolve(__dirname + '/templates/react-styleguidist/editor')
      }
    },
    plugins: [
      new LodashModuleReplacementPlugin({
        'currying': true,
        'flattening': true
      })
    ]
  }
};

module.exports = config;
