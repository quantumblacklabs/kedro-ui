import React from 'react';

/**
 * Create a regular expression to match certain keywords
 * @param  {[string]} value - The search keyword to highlight
 * @return {[object|boolean]} Regular expression or false
 */
const getValueRegex = value => value && new RegExp(value, 'gi');

/**
 * Find and highlight relevant keywords within a block of text
 * @param  {string} text - The text to parse
 * @param  {string} value - The search keyword to highlight
 * @return {object|string} Either a JSX object containing alternating strings & JSX, or just the text
 */
const highlightSearchTerm = (text, value) => {
  const valueRegex = getValueRegex(value);
  const matches = text.match(valueRegex);

  if (!value || !matches) {
    return text;
  }
  let counter = 1;

  return (
    <div>
      { text.split(valueRegex)
        .reduce((previous, current, i) => {
          if (i) {
            const key = matches[i - 1] + current + (counter += 1);
            previous.push(
              <b className='cbn-searchresults__highlight' key={key}>{ matches[i - 1] }</b>
            );
          }
          return previous.concat(current);
        }, [])
      }
    </div>
  );
};

/**
 * Truncate a text label with an ellipsis, to fit the container
 * @param  {string} text - The text to parse
 * @param  {number} maxLabelLength - Max character length before truncation occurs
 * @param  {string} value - An optional highlighted keyword that ought not be truncated
 * @return {string} A (truncated?) text string
 */
const truncateString = (text, maxLabelLength, value = '') => {
  // If the text length is shorter than the max then it doesn't need to be truncated
  if (text.length < maxLabelLength) {
    return text;
  }

  // Get the index for the start and end point of the value match
  const matchStart = text.search(getValueRegex(value));
  const matchEnd = matchStart + value.length;

  // If the match is in the first section, or there's no match, or the match is really long
  if (matchEnd < maxLabelLength || !value || value.length >= maxLabelLength) {
    // Truncate the end
    return `${text.substr(0, maxLabelLength)}…`;
  // If the match is in the last section
  } else if (matchStart > text.length - maxLabelLength) {
    // Truncate the start
    return `…${text.substr(text.length - maxLabelLength)}`;
  }
  // Truncate both ends
  const start = matchStart - (maxLabelLength / 2);

  return `…${text.substr(start, start + maxLabelLength)}…`;
};

export {
  getValueRegex,
  highlightSearchTerm,
  truncateString
};
