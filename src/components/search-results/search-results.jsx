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
    const { hidden, results, row } = this.props;
    const rowCount = results.length;
    const boxHeight = (rowCount * row.height) + row.padding;
    return hidden ? null : boxHeight;
  }

  /**
   * Truncate a text label with an ellipsis, to fit the container
   * @param  {string} text - The text to parse
   * @param  {RegExp} valueRegex - The search keyword to highlight
   * @param  {number} valueLength - The length of the search keyword text
   * @return {string} A (truncated?) text string
   */
  truncateString(text, valueRegex, valueLength) {
    const { labelLength } = this.props.row;
    if (text.length < labelLength || !valueRegex) {
      return text;
    }
    const matchStart = text.search(valueRegex);
    const matchEnd = matchStart + valueLength;

    if (matchEnd < labelLength || valueLength >= labelLength) {
      return `${text.substr(0, labelLength)}…`;
    } else if (matchStart > text.length - labelLength) {
      return `…${text.substr(text.length - labelLength)}`;
    }
    const start = matchStart - (labelLength / 2);
    return `…${text.substr(start, start + labelLength)}…`;
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
      onClick,
      onMouseOver,
      results,
      row,
      theme
    } = this.props;

    row.maxHeight = results.length ? (row.maxRows * row.height) + row.padding : 0;

    return (
      <SearchResultsRenderer
        activeRow={activeRow}
        height={this.getBoxHeight()}
        hidden={hidden || !results.length}
        onClick={onClick}
        onMouseOver={onMouseOver}
        results={this.formatResults()}
        row={row}
        theme={theme} />
    );
  }
}

SearchResults.defaultProps = {
  activeRow: null,
  hidden: true,
  onClick: () => {},
  onMouseOver: () => {},
  results: [],
  row: {
    height: 40,
    maxRows: 5,
    labelLength: 30,
    padding: 8
  },
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
   * Magic constants for the dimensions of a row item and its container
   * row.height: The height of a row
   * row.labelLength: The maximum length of a text label
   * row.maxRows: The maximum number of visible rows before you must scroll
   * row.padding: The padding above and below the top/bottom rows
   */
  row: PropTypes.shape({
    height: PropTypes.number,
    labelLength: PropTypes.number,
    maxRows: PropTypes.number,
    padding: PropTypes.number
  }),
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
