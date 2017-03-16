import React, { PropTypes } from 'react';
import classnames from 'classnames';

// Styles
import './data-summary.css';

/**
 * Data Summary is a simple table-style overview of data properties - can be used as a legend.
 * Each row consists of an icon indicator (can be any component - depends on the icon function)
 * accompanied by a title which are positioned on the left and a number indicator which is positioned on the right.
 */
const DataSummary = ({
  data,
  heading,
  icon,
  onTapped,
  tappedPropName
}) => {
  const eventHandlerProps = {};

  /**
   * Get the ID of a tapped row and pass it to the onTapped function
   */
  const handleTapped = e => {
    const index = parseInt(e.target.getAttribute('data-index'), 10);
    if (!isNaN(index)) {
      onTapped({ index });
    }
  };

  if (onTapped && typeof onTapped === 'function') {
    eventHandlerProps[tappedPropName] = handleTapped;
  }

  const rows = data.map((row, i) => {
    const rowClass = classnames('qb-data-summary-item', {
      'qb-data-summary-item--selected': row.selected,
      'qb-data-summary-item--deselected': !row.selected && data.find(row2 => row2.selected)
    });

    return (
      <div
        className={rowClass}
        data-index={i}
        // Use label as fallback if ID is not supplied:
        key={row.id || row.label}
        {...eventHandlerProps}>
        <div>
          <svg
            width={row.iconProps.width}
            height={row.iconProps.height}>
            { icon && typeof icon === 'function' && icon(row.iconProps) }
          </svg>
          <span className='qb-data-summary-item__title'>
            { row.label }
          </span>
        </div>
        <div>
          { typeof row.value !== 'undefined' && <span className='qb-data-summary-item__value'>{ row.value }</span> }
        </div>
      </div>
    );
  });

  // interactive modifier class will style components on hover and selected state
  return (
    <div className={classnames('qb-data-summary', { 'qb-data-summary--interactive': typeof onTapped === 'function' })}>
      <h3 className='qb-data-summary__heading'>{ heading }</h3>
      { rows }
    </div>
  );
};

DataSummary.propTypes = {
  /**
   * Data which will be rendered into the summary table - label, value, iconProps and selected parameters.
   * If selected is true, the row is highlighted and other rows are dimmed.
   */
  data: PropTypes.array.isRequired,
  /**
   * Heading for the whole data summary table included on the top.
   */
  heading: PropTypes.string,
  /**
   * Function generating an icon when given iconProps from data.
   */
  icon: PropTypes.func,
  /**
   * Function triggered when title or number is tapped.
   */
  onTapped: PropTypes.func,
  /**
   * Event handler name, to trigger onTapped property.
   */
  tappedPropName: PropTypes.oneOf(['onMouseDown', 'onTouchStart', 'onTouchTap', 'onClick'])
};

DataSummary.defaultProps = {
  heading: '',
  icon: () => {},
  onTapped: () => {},
  tappedPropName: 'onClick'
};

export default DataSummary;
