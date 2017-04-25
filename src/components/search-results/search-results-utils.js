/**
 * Create a regular expression to match certain keywords
 * @param  {[string]} value - The search keyword to highlight
 * @return {[object|boolean]} Regular expression or false
 */
const getValueRegex = value => value && new RegExp(value, 'gi');

/**
 * Highlight relevant keywords within a block of text
 * @param  {string} text - The text to parse
 * @param  {string} value - The search keyword to highlight
 * @return {object|string} Either an array containing alternating strings & objects, or just the text
 */
const getHighlightedText = (text, value) => {
  const valueRegex = getValueRegex(value);
  const matches = text.match(valueRegex);

  if (value && matches) {
    let counter = 1;

    return text.split(valueRegex)
      .reduce((previous, current, i) => {
        if (i) {
          previous.push({
            key: matches[i - 1] + current + (counter += 1),
            value: matches[i - 1]
          });
        }
        return previous.concat(current);
      }, []);
  }

  return text;
};

export {
  getValueRegex,
  getHighlightedText
};
