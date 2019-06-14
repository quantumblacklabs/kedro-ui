const path = require('path');

module.exports = {
  title: 'Kedro UI',
  components: './src/components/**/*.jsx',
  ignore: ['./src/components/**/*-renderer.jsx', './src/components/**/*-list.jsx'],
  serverHost: '0.0.0.0',
  serverPort: 3030,
  styleguideDir: path.join(__dirname, 'styleguide'),
  contextDependencies: [path.join(__dirname, 'src')],
  styles: {
    Logo: {
      logo: {
        fontSize: '1.6rem'
      }
    },
    TableOfContents: {
      input: {
        border: '1px #d5d5d5 solid',
        borderRadius: 0
      }
    },
    ComponentsList: {
      item: {
        fontSize: 17,
        margin: '10px 0'
      }
    },
    Playground: {
      preview: {
        background: '#f7f7f7',
        padding: 40
      }
    }
  },
  theme: {
    fontFamily: {
      base: '"Titillium Web", sans-serif;'
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
