// Imports

import React, { PropTypes } from 'react';
import SearchResultsRenderer from './search-results-renderer';

// Styles

import './search-results.css';

/**
 * SearchResults is usually used in a search setting alongside SearchBar
 * i.e. user types into search input, and SearchResults receives the
 * entered text and displays results
 */
class SearchResults extends React.Component {
  /**
   * Find and highlight relevant keywords within a block of text
   * @param  {string} text - The text to parse
   * @param  {RegExp} valueRegex - The search keyword to highlight
   * @return {object} A JSX object containing an array of alternating strings and JSX
   */
  static highlightSearchTerm(text, valueRegex) {
    const matches = text.match(valueRegex);

    if (!valueRegex || !matches) {
      return text;
    }
    let counter = 1;
    return (<div className='cbn-searchresults__label'>
      { text.split(valueRegex)
        .reduce((prev, current, i) => {
          if (i) {
            const key = matches[i - 1] + current + (counter += 1);
            prev.push(<b key={key}>{ matches[i - 1] }</b>);
          }
          return prev.concat(current);
        }, [])
      }
    </div>);
  }

  /**
   * Calculate height of scrollable results container
   */
  getBoxHeight() {
    const { hidden, results } = this.props;
    const rowCount = results.length;
    const rowHeight = 40;
    const rowPadding = 8;
    const boxHeight = (rowCount * rowHeight) + rowPadding;
    return hidden ? null : `${boxHeight}px`;
  }

  /**
   * Truncate a text label with an ellipsis, to fit the container
   * @param  {string} text - The text to parse
   * @param  {RegExp} valueRegex - The search keyword to highlight
   * @param  {number} valueLength - The length of the search keyword text
   * @return {string} A (truncated?) text string
   */
  truncateString(text, valueRegex, valueLength) {
    const { maxLabelLength } = this.props;
    if (text.length < maxLabelLength || !valueRegex) {
      return text;
    }
    const matchStart = text.search(valueRegex);
    const matchEnd = matchStart + valueLength;

    if (matchEnd < maxLabelLength) {
      return `${text.substr(0, maxLabelLength)}…`;
    } else if (matchStart > text.length - maxLabelLength) {
      return `…${text.substr(text.length - maxLabelLength)}`;
    }
    const start = matchStart - (maxLabelLength / 2);
    return `…${text.substr(start, start + maxLabelLength)}…`;
  }

  /**
   * Add a new formattedLabel field to each of the results
   * @return {object} The results array with a new field added
   */
  formatResults() {
    const { results, value } = this.props;
    const valueRegex = value ? new RegExp(value, 'gi') : '';

    return results.map(result => ({
      formattedLabel: SearchResults.highlightSearchTerm(
        this.truncateString(result.label, valueRegex, value.length),
        valueRegex
      ),
      ...result
    }));
  }

  /**
   * Render the component
   * @return {ReactElement} markup
   */
  render() {
    const {
      activeRow,
      hidden,
      maxLabelLength,
      onClick,
      onMouseOver,
      results,
      theme
    } = this.props;

    return (
      <SearchResultsRenderer
        activeRow={activeRow}
        height={this.getBoxHeight()}
        hidden={hidden || !results.length}
        maxLabelLength={maxLabelLength}
        onClick={onClick}
        onMouseOver={onMouseOver}
        results={this.formatResults()}
        theme={theme} />
    );
  }
}

SearchResults.defaultProps = {
  activeRow: null,
  hidden: true,
  maxLabelLength: 32,
  onClick: () => {},
  onMouseOver: () => {},
  results: [],
  theme: 'dark',
  value: ''
};

SearchResults.propTypes = {
  /**
   * The index for an active (keyboard-selected) row
   */
  activeRow: PropTypes.number,
  /**
   * Show/hide the menu
   */
  hidden: PropTypes.bool,
  /**
   * The maximum length of a text label
   */
  maxLabelLength: PropTypes.number,
  /**
   * Handle click events, e.g. when selecting a row
   */
  onClick: PropTypes.func,
  /**
   * Handle mouseover events, e.g. for deselecting the active row
   */
  onMouseOver: PropTypes.func,
  /**
   * A pre-filtered array of results to show.
   * Each row should contain a required 'label' text property (string),
   * and an optional 'type' property (string) for the icon
   */
  results: PropTypes.array.isRequired,
  /**
   * Theme of the component
   */
  theme: PropTypes.string,
  /**
   * User-input search string
   */
  value: PropTypes.string.isRequired
};

export default SearchResults;
