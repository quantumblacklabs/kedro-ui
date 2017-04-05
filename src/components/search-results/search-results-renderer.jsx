// Imports

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Icon from '../icon';

// Styles

/**
 * SearchResultsRenderer, used to output the actual DOM makeup for the component
 */
const SearchResultsRenderer = ({
  activeRow,
  height,
  hidden,
  onClick,
  onMouseOver,
  results,
  theme
}) => (
  <div className='cbn-searchresults' onMouseOver={onMouseOver}>
    <div
      className={classnames(
        'cbn-searchresults__wrapper',
        { 'cbn-searchresults__wrapper--hidden': hidden },
        `cbn-theme--${theme}`
      )}
      style={{height}}>
      <ul className={`cbn-searchresults__list cbn-theme--${theme}`}>
        { results.map((result, i) =>
          <li
            key={result.label}
            className={classnames(
              'cbn-searchresults__row',
              { 'cbn-searchresults__row--active': activeRow === i }
            )}
            onClick={() => onClick(result.label)}
            role='option'
            aria-selected={activeRow === i ? 'true' : 'false'}
            tabIndex='-1'>
            { result.type && <Icon type={result.type} size='medium' theme={theme} /> }
            { result.formattedLabel }
          </li>
        ) }
      </ul>
    </div>
  </div>
);

SearchResultsRenderer.defaultProps = {
  height: null,
  hidden: false,
  onClick: () => {},
  results: [],
  theme: 'dark'
};

SearchResultsRenderer.propTypes = {
  /**
   * Height for the results box, to prevent it expanding before close animation
   */
  height: PropTypes.string,
  /**
   * Subscribe to change events when a row is selected
   */
  hidden: PropTypes.bool,
  /**
   * Subscribe to change events when a row is selected
   */
  onClick: PropTypes.func,
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
