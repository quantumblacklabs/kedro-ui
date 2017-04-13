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
  let labelText = text;

  if (value && matches) {
    let counter = 1;
    labelText = text.split(valueRegex)
      .reduce((previous, current, i) => {
        if (i) {
          const key = matches[i - 1] + current + (counter += 1);
          previous.push(
            <b className='cbn-searchresults__highlight' key={key}>{ matches[i - 1] }</b>
          );
        }
        return previous.concat(current);
      }, []);
  }

  return (
    <div className='cbn-searchresults__label'>
      { labelText }
    </div>
  );
};

export {
  getValueRegex,
  highlightSearchTerm
};
