// Imports

import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from 'components/search-bar';
import SearchResults from 'components/search-results';
import utils from 'utils';

// Styles

import './search.css';

const { escapeRegExp, handleKeyEvent } = utils;

/**
 * Execute user-supplied prop-based event actions alongside component actions
 * @param {Array} actions Functions to execute when the event fires
 * @param {Array} eventArgs Arguments passed from the event handler
 */
const handleEvents = (...actions) => 
  (...eventArgs) => 
    actions.map(func => 
      (typeof func === 'function' ? func(...eventArgs) : null));

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
    const { value, activeRow } = props;

    this.state = {
      activeRow,
      hideResults: true,
      results: this._filterResults(value),
      value
    };

    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._selectResult = this._selectResult.bind(this);
    this._handleMouseOver = this._handleMouseOver.bind(this);
    this._showResults = this._showResults.bind(this);
    this._hideResults = this._hideResults.bind(this);
    this._clearResults = this._clearResults.bind(this);
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops}
   * @param {Object} New component props
   */
  componentWillReceiveProps(nextProps) {
    const newActiveRow = typeof nextProps.activeRow === 'number'
      && nextProps.activeRow !== this.state.activeRow;

    if (newActiveRow) {
      this.setState({
        activeRow: nextProps.activeRow
      });
    }
  }

  /**
   * Update the state with the new value
   * @param  {object} event
   */
  _handleChange(value) {
    this.setState({
      hideResults: !value,
      results: this._filterResults(value),
      value: value || ''
    });
  }

  /**
   * Update the state when selecting a result
   * @param {object} data
   */
  _selectResult({ data }) {
    this._focusSearchInput();
    this.setState({
      hideResults: true,
      value: data
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
  _handleKeyDown(event) {
    handleKeyEvent(event.keyCode, {
      enter: this._handleEnter.bind(this, event),
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
    const valueRegex = value ? new RegExp(escapeRegExp(value), 'gi') : '';

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
      hideResults: activeRow === null,
      activeRow
    });
  }

  /**
   * Either select the active result or else submit the form
   */
  _handleEnter(e) {
    const {
      activeRow, hideResults, results, value
    } = this.state;
    if (hideResults) {
      this.props.onSubmit({
        e,
        data: value
      });
    } else if (!hideResults && results[activeRow]) {
      this._selectResult({
        data: results[activeRow].label
      });
      e.preventDefault();
    }
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
      results: this.props.results,
      value: ''
    });
  }

  /**
   * Move focus back to the input after clicking on a row
   */
  _focusSearchInput() {
    this._search
      .querySelector('input')
      .focus();
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#render}
   * @return {object} JSX for this component
   */
  render() {
    const {
      activeRow, hideResults, results, value
    } = this.state;
    const {
      height, row, RowItem, searchBarProps, searchResultsProps, showResults, theme
    } = this.props;

    return (
      <div
        className='cbn-search'
        ref={el => {
          this._search = el;
        }}
        onKeyDown={this._handleKeyDown}>
        <SearchBar
          {...searchBarProps}
          onClear={handleEvents(this._handleChange, searchBarProps.onClear)}
          onChange={handleEvents(this._handleChange, searchBarProps.onClear)}
          onFocus={handleEvents(this._showResults, searchBarProps.onFocus)}
          onBlur={handleEvents(this._hideResults, searchBarProps.onBlur)}
          onSubmit={this.props.onSubmit}
          placeholder='Search'
          theme={theme}
          value={value}>
          <SearchResults
            {...searchResultsProps}
            activeRow={activeRow}
            height={height}
            hidden={showResults !== null ? !showResults : hideResults}
            onClick={handleEvents(
              this._selectResult,
              searchResultsProps.onClick,
              this.props.onSubmit
            )}
            onMouseOver={handleEvents(
              this._handleMouseOver,
              searchResultsProps.onMouseOver
            )}
            results={results}
            row={row}
            RowItem={RowItem}
            theme={theme}
            value={value} />
        </SearchBar>
      </div>
    );
  }
}

Search.defaultProps = {
  activeRow: null,
  height: null,
  onSubmit: () => {},
  results: [],
  row: {
    height: 40,
    maxRows: 5,
    padding: 8
  },
  RowItem: null,
  searchBarProps: {},
  searchResultsProps: {},
  showResults: null,
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
   * On submit method, triggered by hitting enter on the input
   */
  onSubmit: PropTypes.func,
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
  RowItem: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.func
  ]),
  /**
   * Props to pass on to the SearchBar child component
   */
  searchBarProps: PropTypes.object,
  /**
   * Props to pass on to the SearchResults child component
   */
  searchResultsProps: PropTypes.object,
  /**
   * Flag whether to keep the results dropdown open by default
   */
  showResults: PropTypes.bool,
  /**
   * Theme of the component
   */
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  /**
   * Passing activeRow will highlight the index of the row supplied
   */
  activeRow: PropTypes.number
};

export default Search;
