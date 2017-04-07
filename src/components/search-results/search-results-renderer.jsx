// Imports

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Icon from '../icon';

// Styles

/**
 * SearchResultsRenderer, used to output the actual DOM makeup for the component
 */
class SearchResultsRenderer extends React.Component {
  /**
   * Render the component
   * @return {ReactElement} markup
   */
  render() {
    const {
      activeRow,
      height,
      hidden,
      onClick,
      onMouseOver,
      results,
      row,
      theme
    } = this.props;

    return (
      <div className='cbn-searchresults' onMouseOver={onMouseOver}>
        <div
          className={classnames(
            'cbn-searchresults__wrapper',
            { 'cbn-searchresults__wrapper--hidden': hidden },
            `cbn-theme--${theme}`
          )}
          style={{ height }}>
          <ul className={`cbn-searchresults__list cbn-theme--${theme}`}>
            { results.map((result, i) =>
              <li
                aria-selected={activeRow === i ? 'true' : 'false'}
                className={classnames(
                  'cbn-searchresults__row',
                  { 'cbn-searchresults__row--active': activeRow === i }
                )}
                key={result.label}
                onClick={() => onClick(result.label)}
                role='option'
                tabIndex='-1'
                title={result.label.length > row.labelLength ? result.label : null}>
                { result.type && <Icon type={result.type} size='medium' theme={theme} /> }
                { result.formattedLabel }
              </li>
            ) }
          </ul>
        </div>
      </div>
    );
  }
}

SearchResultsRenderer.defaultProps = {
  activeRow: null,
  height: null,
  hidden: false,
  onClick: () => {},
  onMouseOver: () => {},
  results: [],
  theme: 'dark'
};

SearchResultsRenderer.propTypes = {
  /**
   * Index of the actively-selected row
   */
  activeRow: PropTypes.number,
  /**
   * Height for the results box, to prevent it expanding before close animation
   */
  height: PropTypes.string,
  /**
   * Subscribe to change events when a row is selected
   */
  hidden: PropTypes.bool,
  /**
   * Magic constants for the height, width and padding for a row item
   * row.height: The height of a row
   * row.labelLength: The maximum length of a text label
   * row.padding: The padding above and below the top/bottom rows
   */
  row: PropTypes.object.isRequired,
  /**
   * Subscribe to change events when a row is selected
   */
  onClick: PropTypes.func,
  /**
   * Function to call when mousing over the container, to deselect the active row
   */
  onMouseOver: PropTypes.func,
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
