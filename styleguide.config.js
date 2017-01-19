var path = require('path');
var pkg = require('./package.json')
var _ = require('lodash');
var glob = require('glob');

var config = require('@quantumblack/javascript-standards/config/react-styleguidist/base.config.js');

config.title = pkg.name + ' v' + pkg.version;
config.sections[0].name = pkg.name;

config.sections = [
  {
    name: 'Title not set', content: './templates/intro.md',
  },
  {
    name: 'Installation', content: './templates/installation.md'
  },
  {
    name: 'Components',
    content: './templates/components.md',
    components: function() {
      const components = _.sortBy(glob.sync(path.resolve(__dirname, 'src/components/**/*.jsx')), c => _.last(c.split('/')));
      console.log(`Found ${ components.length } components in ${ path.resolve(__dirname, 'src/components/**/*.jsx') }`);
      return components;
    }
  },
  {
    name: 'Modules',
    content: './templates/modules.md',
    components: function() {
      const modules = _.sortBy(glob.sync(path.resolve(__dirname, 'src/modules/**/*.jsx')), c => _.last(c.split('/')));
      console.log(`Found ${ modules.length } components in ${ path.resolve(__dirname, 'src/modules/**/*.jsx') }`);
      return modules;
    }
  }
];

module.exports = config;
