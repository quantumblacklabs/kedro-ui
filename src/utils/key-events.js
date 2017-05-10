// Keyboard character codes
const KEYS = {
  13: 'enter',
  27: 'escape',
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
};

/**
 * Convenience function for handling keyCodes and creating actions
 * @param  {number} keyCode - A keyboard character
 * @param  {Object} [keyActions] - An optional object-literal list of key names and actions
 * @return {Function|undefined} Either a function for a given key char, or nothing
 */
const handleKeyEvent = (keyCode, keyActions) => {
  /**
   * A function to execute a callback when a given key name matches the key code received
   * @param {string}   keyName  - A key name string (e.g. 'left')
   * @param {Function} callback - A function to execute if the key name matches the key code
   */
  const handleSingleKey = (keyName, callback) => {
    if (keyCode in KEYS && KEYS[keyCode] === keyName.toLowerCase()) {
      callback();
    }
  };

  if (keyActions) {
    return Object.keys(keyActions)
      .forEach(key => handleSingleKey(key, keyActions[key]));
  }

  return handleSingleKey;
};

export default handleKeyEvent;
