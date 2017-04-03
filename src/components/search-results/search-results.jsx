// Imports

import React, { PropTypes } from 'react';
import SearchResultsRenderer from './search-results-renderer';

// Styles

import './search-results.css';

const dummyData = [
  {
    type: 'cut',
    label: 'Misc Foo utilities foot'
  },
  {
    type: 'paste',
    label: 'Personfoo McNamerson fOO'
  },
  {
    label: 'FOOOSome generic FOO item'
  }
];


/**
 * Find and highlight relevant keywords within a block of text
 * @param  {string} text - The text to parse
 * @return {object} A JSX object containing an array of alternating strings and JSX
 */
const highlightSearchValue = (text, value) => {
  const matches = text.match(value);

  if (!value || !matches) {
    return text;
  }

  return (<div className='cbn-searchresults__label'>
    { text.split(value)
      .reduce((prev, current, i) => {
        if (!i) {
          return [
            <span key={current}>{ current }</span>
          ];
        }
        return prev.concat(
          <b key={matches[i - 1] + current}>{ matches[i - 1] }</b>,
          <span key={current}>{ current }</span>
        );
      }, [])
    }
  </div>);
};

/**
 * SearchResults is usually used in a search setting alongside SearchBar
 * i.e. user types into search input, and SearchResults receives the
 * entered text and displays results
 */
class SearchResults extends React.Component {
  /**
   * Create new SearchResults
   * @param  {type} props - properties passed to component
   */
  constructor(props) {
    super(props);

    this.state = {
      hidden: false
    };
  }

  /**
   * Perform an action when a row is select
   * @param  {Event} e - native change event
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
   * Render the component
   * @return {ReactElement} markup
   */
  render() {
    const { results, theme, value } = this.props;
    const valueRegex = new RegExp(value, 'gi');

    const filteredResults = results.filter(({ label }) => label.match(valueRegex))
      .map(result => ({
        formattedLabel: highlightSearchValue(result.label, valueRegex),
        ...result
      }));

    return (
      <SearchResultsRenderer
        hidden={this.state.hidden}
        onChange={d => this.onChange(d)}
        results={filteredResults}
        theme={theme} />
    );
  }
}

SearchResults.defaultProps = {
  onChange: null,
  results: dummyData || [],
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
