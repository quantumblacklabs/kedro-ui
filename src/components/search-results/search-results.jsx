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
   * @param  {string} value - The search keyword to highlight
   * @return {object} A JSX object containing an array of alternating strings and JSX
   */
  static highlightSearchTerm(text, value) {
    const matches = text.match(value);

    if (!value || !matches) {
      return text;
    }
    let counter = 1;
    return (<div className='cbn-searchresults__label'>
      { text.split(value)
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
   * …
   */
  static truncateString(text, value) {
    const maxLength = 30;
    if (text.length < maxLength || !value) {
      return text;
    }
    if (text.search(value) > maxLength) {
      const start = Math.min(
        text.length - maxLength,
        text.search(value),
      );
      return `…${text.substr(start, maxLength)}`;
    }
    return `${text.substr(0, maxLength)}…`;
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
   * Add a new formattedLabel field to each of the results
   * @return {object} The results array with a new field added
   */
  formatResults() {
    const { highlightSearchTerm, truncateString } = SearchResults;
    const { results, value } = this.props;
    const valueRegex = value ? new RegExp(value, 'gi') : '';

    return results.map(result => ({
      formattedLabel: highlightSearchTerm(
        truncateString(result.label, valueRegex),
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
      theme
    } = this.props;

    return (
      <SearchResultsRenderer
        activeRow={activeRow}
        height={this.getBoxHeight()}
        hidden={hidden || !results.length}
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
