const path = require('path');

module.exports = {
  title: 'Documentation',
  components: './src/components/**/*.jsx',
  ignore: ['./src/components/**/*-renderer.jsx', './src/components/**/*-list.jsx'],
  serverHost: '0.0.0.0',
  serverPort: 3030,
  styleguideDir: path.join(__dirname, 'styleguide'),
  contextDependencies: [path.join(__dirname, 'src')],
  styles: {
    StyleGuide: {
      '@global html': {
        fontSize: '10px'
      }
    }
  },
  require: [
    path.join(__dirname, 'src/styles/app.css')
  ],
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath);
    const dir = path.dirname(componentPath);
    return `${dir}/${name}`;
  }
};

