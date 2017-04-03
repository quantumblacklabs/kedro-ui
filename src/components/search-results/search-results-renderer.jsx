// Imports

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Icon from '../icon';

// Styles

/**
 * SearchResultsRenderer, used to output the actual DOM makeup for the component
 */
const SearchResultsRenderer = ({
  hidden,
  onChange,
  results,
  theme
}) => (
  <ul
    className={classnames(
      'cbn-searchresults',
      { 'cbn-searchresults--hidden': hidden },
      `cbn-theme--${theme}`
    )}>
    {
      results.map(result =>
        <li
          key={result.label}
          className='cbn-searchresults__row'
          onClick={() => onChange(result.label)}
          role='option'
          aria-selected='false'
          tabIndex='-1'>
          { result.type && <Icon type={result.type} size='medium' theme={theme} /> }
          { result.formattedLabel }
        </li>
      )
    }
  </ul>
);

SearchResultsRenderer.defaultProps = {
  hidden: false,
  onChange: () => {},
  results: [],
  theme: 'dark'
};

SearchResultsRenderer.propTypes = {
  /**
   * Subscribe to change events when a row is selected
   */
  hidden: PropTypes.bool,
  /**
   * Subscribe to change events when a row is selected
   */
  onChange: PropTypes.func,
  /**
   * A filtered array of results
   */
  results: PropTypes.array.isRequired,
  /**
   * Theme of the component
   */
  theme: PropTypes.string.isRequired
};

export default SearchResultsRenderer;
