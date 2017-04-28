/* eslint-disable react/no-danger */

// Imports

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'components/icon';

// Styles

/**
 * SearchResultsRenderer, used to output the actual DOM makeup for the component
 */
class SearchResultsRenderer extends React.Component {
  /**
   * React lifecycle method
   * Update state when the input value / results list change
   * {@link https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops}
   * @param {object} newProps - Properties passed to component
   */
  componentWillReceiveProps(newProps) {
    const newActiveRow = typeof newProps.activeRow === 'number'
      && newProps.activeRow !== this.props.activeRow;

    if (newActiveRow) {
      this._scrollToActiveRow(newProps.activeRow);
    }
  }

  /**
   * If a selected row is not visible (because it's off the top/bottom of
   * the scrollable area), then auto-scroll to it, to make it visible
   * @param {number} activeRow - The index of the active row
   */
  _scrollToActiveRow(activeRow) {
    const { row } = this.props;
    const { scrollTop } = this._list;
    const scrollTooLow = activeRow * row.height < scrollTop;
    const scrollTooHigh = ((activeRow + 1) * row.height) - scrollTop > row.maxHeight;

    if (scrollTooLow || scrollTooHigh) {
      this._list.scrollTop = (activeRow * row.height) - (row.maxHeight / 2);
    }
  }

  /**
   * Handle selection click events on the rows
   * @param  {[object]} e      - Native onClick event
   * @param  {[object]} result - The data for the selected label
   */
  _handleRowClicked(e, result) {
    const { onClick } = this.props;

    if (onClick) {
      onClick({
        e,
        data: { result }
      });
    }
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#render}
   * @return {object} JSX for this component
   */
  render() {
    const {
      activeRow,
      height,
      hidden,
      onMouseOver,
      results,
      row,
      theme
    } = this.props;

    return (
      <div className='cbn-search-results' onMouseOver={onMouseOver}>
        <div
          aria-hidden={hidden}
          className={classnames(
            'cbn-search-results__wrapper',
            { 'cbn-search-results__wrapper--hidden': hidden },
            `cbn-theme--${theme}`
          )}
          style={{ height, maxHeight: row.maxHeight }}>
          <ul
            className='cbn-search-results__list'
            ref={el => { this._list = el; }}
            role='listbox'>
            { results.map((result, i) =>
              <li
                id={activeRow === i ? 'cbn-search-results-selected' : null}
                aria-selected={activeRow === i}
                className={classnames(
                  'cbn-search-results__row',
                  { 'cbn-search-results__row--active': activeRow === i }
                )}
                key={result.label}
                onClick={e => this._handleRowClicked(e, result)}
                role='option'
                tabIndex='-1'
                title={result.label}>
                { result.icon && <Icon type={result.icon} size='medium' theme={theme} /> }
                <div
                  className='cbn-search-results__label'
                  dangerouslySetInnerHTML={{ __html: result.highlightedLabel }} />
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
  onClick: null,
  onMouseOver: null,
  row: {
    height: 40,
    maxRows: 5,
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
   * Flag whether to show/hide the menu
   */
  hidden: PropTypes.bool,
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
   * Method that is fired when an option is clicked
   */
  onClick: PropTypes.func,
  /**
   * Function to call when mousing over the container, to deselect the active row
   */
  onMouseOver: PropTypes.func,
  /**
   * A filtered array of results
   * Each row should contain a required 'label' text property (string),
   * and a 'formattedLabel' property (JSX/string),
   * and an optional 'type' property (string) for the icon
   */
  results: PropTypes.array.isRequired,
  /**
   * Theme of the component
   */
  theme: PropTypes.oneOf(['light', 'dark'])
};

export default SearchResultsRenderer;
