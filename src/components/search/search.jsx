// Imports

import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from 'components/search-bar';
import SearchResults from 'components/search-results';
import { handleKeyEvent } from '../../utils';

// Styles

import './search.css';

/**
 * Search, used to output the actual DOM markup for the component
 */
class Search extends React.Component {
  /**
   * Create a new Search component
   * @param  {Object} props
   */
  constructor(props) {
    super(props);
    const { value } = props;

    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._selectResult = this._selectResult.bind(this);
    this._handleMouseOver = this._handleMouseOver.bind(this);
    this._showResults = this._showResults.bind(this);
    this._hideResults = this._hideResults.bind(this);

    this.state = {
      activeRow: null,
      hideResults: true,
      results: this._filterResults(value),
      value
    };
  }

  /**
   * Update the state with the new value
   * @param  {object} event
   */
  _handleChange(value) {
    this.setState({
      hidden: !value,
      results: this._filterResults(value),
      value: value || ''
    });
  }

  /**
   * Update the state when selecting a result
   * @param {object} data
   */
  _selectResult({ data }) {
    this.setState({
      hideResults: true,
      value: data.result.label
    });
  }

  /**
   * Update the state with activeRow value on mouseover
   */
  _handleMouseOver() {
    this.setState({
      activeRow: null
    });
  }

  /**
   * Listen for keyboard events, and trigger relevant actions
   * @param {number} keyCode The key event keycode
   */
  _handleKeyDown({ keyCode }) {
    handleKeyEvent(keyCode, {
      enter: this._hideResults,
      escape: this._clearResults,
      up: this._changeActiveRow.bind(this, -1),
      down: this._changeActiveRow.bind(this, 1)
    });
  }

  /**
   * Return only the results that match the search text
   * @param {string} value
   */
  _filterResults(value) {
    const { results } = this.props;
    const valueRegex = value ? new RegExp(value, 'gi') : '';

    return results.filter(({ label }) => label.match(valueRegex));
  }

  /**
   * Update the active row to the next/prev row, on keydown
   * @param {Boolean} direction - Up (-1) or down (+1)
   */
  _changeActiveRow(direction) {
    let { activeRow } = this.state;
    const { results } = this.state;

    if (activeRow === null) {
      activeRow = direction > 0 ? 0 : results.length - 1;
    } else {
      activeRow += direction;
    }
    if (activeRow >= results.length || activeRow < 0) {
      activeRow = null;
    }

    this.setState({
      activeRow,
      value: results[activeRow] ? results[activeRow].label : this.state.value
    });
  }

  /**
   * Show the dropdown
   */
  _showResults() {
    this.setState({
      hideResults: false
    });
  }

  /**
   * Hide the results dropdown
   */
  _hideResults() {
    this.setState({
      hideResults: true
    });
  }

  /**
   * Clear the search input and reset the results
   */
  _clearResults() {
    this.setState({
      hideResults: true,
      value: ''
    });
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#render}
   * @return {object} JSX for this component
   */
  render() {
    const { activeRow, hideResults, results, value } = this.state;
    const { height, row, RowItem, showResults, theme } = this.props;

    return (
      <div className='cbn-search' role='search' onKeyDown={this._handleKeyDown}>
        <SearchBar
          aria-expanded={!hideResults}
          aria-activedescendant={hideResults ? null : 'cbn-search-results-selected'}
          onClick={this._handleBarClick}
          onClear={this._handleChange}
          onChange={this._handleChange}
          onFocus={this._showResults}
          onBlur={this._hideResults}
          placeholder='Search'
          theme={theme}
          value={value} />

        <SearchResults
          activeRow={activeRow}
          height={height}
          hidden={showResults ? false : hideResults}
          onClick={this._selectResult}
          onMouseOver={this._handleMouseOver}
          results={results}
          row={row}
          RowItem={RowItem}
          theme={theme}
          value={value} />
      </div>
    );
  }
}

Search.defaultProps = {
  activeRow: null,
  height: null,
  showResults: null,
  results: [],
  row: {
    height: 40,
    maxRows: 5,
    padding: 8
  },
  RowItem: null,
  theme: 'dark',
  value: ''
};

Search.propTypes = {
  /**
   * Current value in the search bar
   */
  value: PropTypes.string,
  /**
   * Height for the results box, to prevent it expanding before close animation
   */
  height: PropTypes.number,
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
   * A filtered array of results
   * Each row should contain a required 'label' text property (string),
   * and a 'formattedLabel' property (JSX/string),
   * and an optional 'type' property (string) for the icon
   */
  results: PropTypes.array.isRequired,
  /**
   * A React Component with a text prop, for rendering custom results
   */
  RowItem: PropTypes.node,
  /**
   * Flag whether to keep the results dropdown open by default
   */
  showResults: PropTypes.bool,
  /**
   * Theme of the component
   */
  theme: PropTypes.oneOf(['light', 'dark']).isRequired
};

export default Search;
