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
   * Update state when the input value / results list change
   * @param {object} newProps - Properties passed to component
   */
  componentWillReceiveProps(newProps) {
    const newActiveRow = typeof newProps.activeRow === 'number'
      && newProps.activeRow !== this.props.activeRow;

    if (newActiveRow) {
      this.scrollToActiveRow(newProps.activeRow);
    }
  }

  /**
   * If a selected row is not visible (because it's off the top/bottom of
   * the scrollable area), then auto-scroll to it, to make it visible
   * @param {number} activeRow - The index of the active row
   */
  scrollToActiveRow(activeRow) {
    const { row } = this.props;
    const { scrollTop } = this.list;
    const scrollTooLow = activeRow * row.height < scrollTop;
    const scrollTooHigh = ((activeRow + 1) * row.height) - scrollTop > row.maxHeight;

    if (scrollTooLow || scrollTooHigh) {
      this.list.scrollTop = (activeRow * row.height) - (row.maxHeight / 2);
    }
  }

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
            { 'cbn-searchresults__wrapper--hidden': hidden }
          )}
          style={{ height, maxHeight: row.maxHeight }}>
          <ul
            ref={el => { this.list = el; }}
            className={`cbn-searchresults__list cbn-theme--${theme}`}>
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
  row: {
    height: 40,
    maxRows: 5,
    labelLength: 32,
    padding: 8
  },
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
  height: PropTypes.number,
  /**
   * Subscribe to change events when a row is selected
   */
  hidden: PropTypes.bool,
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
  }).isRequired,
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
