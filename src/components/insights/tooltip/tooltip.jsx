import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Tooltip = React.createClass({

  displayName: 'Tooltip',

  propTypes: {
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
      y: PropTypes.number,
    }),

    label: PropTypes.any,
    /**
     * Entry from the data related to item selected
     */
    payload: PropTypes.object
  },

  getDefaultProps() {
    return {
      offset: 10,
      coordinate: { x: 0, y: 0 },
    };
  },

  render() {

    const { className, content, coordinate, offset, payload } = this.props;

    const outerStyle = {
      color: 'white',
      position: 'absolute',
      top: coordinate.y + 'px',
      left: (coordinate.x + offset) + 'px',
    };

    return (
        <div className={ classNames('qb-tooltip-wrapper', className) }
          style={outerStyle}>
            { (typeof content === 'function') ? <span>{ content(payload) }</span> : content }
        </div>
    );
  }
});

export default Tooltip;
