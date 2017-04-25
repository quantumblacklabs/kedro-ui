import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Tooltip component, usually used to give contextual information within another
 * component e.g. scatterplot point hover
 */
const Tooltip = ({ className, content, coordinate, offset, payload }) => {
  const outerStyle = {
    color: 'white',
    position: 'absolute',
    top: `${coordinate.y}px`,
    left: `${coordinate.x + offset}px`
  };

  return (
    <div
      className={classNames('qb-tooltip-wrapper', className)}
      style={outerStyle}>
      { (typeof content === 'function') ? <span>{ content(payload) }</span> : content }
    </div>
  );
};

Tooltip.defaultProps = {
  className: '',
  content: null,
  coordinate: { x: 0, y: 0 },
  offset: 10,
  payload: null
};

Tooltip.propTypes = {
  /**
   * css class
   */
  className: PropTypes.string,
  /**
   * The content of the tooltip, it can be a function which returns a value based on the payload
   * or a React component that will be used as render
   */
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /**
   * Offset between the tooltip and the item selected
   */
  offset: PropTypes.number,
  /**
   * Coordinates of the tooltip
   */
  coordinate: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  /**
   * Entry from the data related to item selected
   */
  payload: PropTypes.object
};

export default Tooltip;
