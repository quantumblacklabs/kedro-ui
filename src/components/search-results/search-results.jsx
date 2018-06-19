// Imports

import React from 'react';
import PropTypes from 'prop-types';
import SearchResultsRenderer from './search-results-renderer';
import { getHighlightedText } from './search-results-utils';

// Styles

import './search-results.css';

/**
 * SearchResults is usually used in a search setting alongside SearchBar
 * i.e. user types into search input, and SearchResults receives the
 * entered text and displays results
 */
class SearchResults extends React.Component {
  /**
   * Calculate height of scrollable results container,
   * so that it can vary by number of rows, to improve the animations
   * @return {number|object} The height of the results container, or null
   */
  _getBoxHeight() {
    const { hidden, results, row } = this.props;
    const boxHeight = (results.length * row.height) + row.padding;

    return hidden ? null : boxHeight;
  }

  /**
   * Add a new highlightedLabel field to each of the results
   * @return {object} The results array with a new field added
   */
  _getFormattedResults() {
    const { results, value } = this.props;

    return results.map(result => ({
      highlightedLabel: getHighlightedText(
        result.label,
        value
      ),
      ...result
    }));
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#render}
   * @return {object} JSX for this component
   */
  render() {
    const {
      activeRow,
      hidden,
      onClick,
      onMouseOver,
      results,
      row,
      RowItem,
      theme
    } = this.props;

    // Calculate max height for the container and add it to the row prop object
    row.maxHeight = results.length ? (row.maxRows * row.height) + row.padding : 0;

    return (
      <SearchResultsRenderer
        activeRow={activeRow}
        height={this._getBoxHeight()}
        hidden={hidden || !results.length}
        onClick={onClick}
        onMouseOver={onMouseOver}
        results={this._getFormattedResults()}
        row={row}
        RowItem={RowItem}
        theme={theme} />
    );
  }
}

SearchResults.defaultProps = {
  activeRow: null,
  hidden: true,
  onClick: null,
  onMouseOver: null,
  row: {
    height: 40,
    maxRows: 5,
    padding: 8
  },
  RowItem: null,
  theme: 'dark'
};

SearchResults.propTypes = {
  /**
   * The index for an active (keyboard-selected) row
   */
  activeRow: PropTypes.number,
  /**
   * Flag whether to show/hide the menu
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
   * and an optional 'icon' property (string) for the icon type
   */
  results: PropTypes.array.isRequired,
  /**
   * Constants for the dimensions of a row item and its container
   * row.height: The height of a row
   * row.maxRows: The maximum number of visible rows before you must scroll
   * row.padding: The padding above and below the top/bottom rows
   */
  row: PropTypes.shape({
    height: PropTypes.number,
    maxRows: PropTypes.number,
    padding: PropTypes.number
  }),
  /**
   * A React Component with a text prop, for rendering custom results
   */
  RowItem: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.func
  ]),
  /**
   * Theme of the component
   */
  theme: PropTypes.oneOf(['light', 'dark']),
  /**
   * User-input search string
   */
  value: PropTypes.string.isRequired
};

export default SearchResults;
