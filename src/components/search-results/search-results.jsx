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
  static highlightSearchValue(text, value) {
    const matches = text.match(value);

    if (!value || !matches) {
      return text;
    }

    return (<div className='cbn-searchresults__label'>
      { text.split(value)
        .reduce((prev, current, i) => {
          if (i) {
            prev.push(<b key={matches[i - 1] + current + i}>{ matches[i - 1] }</b>);
          }
          return prev.concat(current);
        }, [])
      }
    </div>);
  }

  /**
   * Create new SearchResults
   * @param {object} props - properties passed to component
   */
  constructor(props) {
    super(props);

    this.state = {
      activeRow: null,
      hidden: !props.value
    };
  }

  /**
   * Update state when the input value / results list change
   * @param {object} newProps - properties passed to component
   */
  componentWillReceiveProps({ results, value }) {
    if (value !== this.props.value) {
      this.setState({
        hidden: !value
      });
    }
  }

  /**
   * Perform an action when a row is selected
   * @param {object} e - native change event
   */
  onChange(value) {
    this.setState({
      hidden: true
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(value);
    }
  }

  /**
   * TODO
   */
  filterResults() {
    const { results, value } = this.props;
    const valueRegex = value ? new RegExp(value, 'gi') : '';
    const highlight = label => 
      SearchResults.highlightSearchValue(label, valueRegex);

    return results.filter(({ label }) => label.match(valueRegex))
      .map(result => ({
        formattedLabel: highlight(result.label),
        ...result
      }));
  }

  /**
   * Render the component
   * @return {ReactElement} markup
   */
  render() {
    const { theme } = this.props;
    const { hidden } = this.state;

    return (
      <SearchResultsRenderer
        hidden={hidden}
        onChange={d => this.onChange(d)}
        results={this.filterResults()}
        theme={theme} />
    );
  }
}

SearchResults.defaultProps = {
  onChange: null,
  results: [],
  theme: 'dark',
  value: 'foo'
};

SearchResults.propTypes = {
  /**
   * Subscribe to change events when a row is selected
   */
  onChange: PropTypes.func,
  /**
   * An unfiltered array of results
   */
  results: PropTypes.array.isRequired,
  /**
   * Theme of the component
   */
  theme: PropTypes.string.isRequired,
  /**
   * User-input search string
   */
  value: PropTypes.string.isRequired
};

export default SearchResults;
