import WebFont from 'webfontloader';

/**
 * Load Google webfont. See https://github.com/typekit/webfontloader#events
 * for examples of callback options that can be passed to the loader.
 * @param {object} options Config to pass to webfont loader
 */
const LoadWebFont = (options) => {
  WebFont.load({
    google: {
      families: ['Titillium+Web:400,600']
    },
    ...options
  });
};

export default LoadWebFont;
