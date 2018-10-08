/**
 * Escape string for use in a regular expression
 * @param {string} str Search keyword string
 */
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * Create a regular expression to match certain keywords
 * Note: Uses String.prototype.replace() to prevent XSS attacks
 * @param  {string} value - The search keyword to highlight
 * @return {object|boolean} Regular expression or false
 */
const getValueRegex = value => {
  if (!value) {
    return false;
  }
  return new RegExp(`(${escapeRegExp(value).replace(/[<>]/g, '')})`, 'gi');
};

/**
 * Wrap a string with a <b> tag
 * @param  {string} str - The text to wrap
 * @return {string} The emboldened text
 */
const getWrappedMatch = str => `<b>${str}</b>`;

/**
 * Highlight relevant keywords within a block of text
 * @param  {string} text - The text to parse
 * @param  {string} value - The search keyword to highlight
 * @return {string} The original text but with <b> tags wrapped around matches
 */
const getHighlightedText = (text, value) => {
  const valueRegex = getValueRegex(value);
  const matches = text.match(valueRegex);

  return value && matches
    ? text.replace(valueRegex, getWrappedMatch('$1'))
    : text;
};

export {
  escapeRegExp,
  getValueRegex,
  getHighlightedText
};
