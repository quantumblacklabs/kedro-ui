import React, { PropTypes } from 'react';
import { CustomPropTypes } from 'utils';

import './satellite.css';

/**
 * A simple Satellite component
 * The x, y are calculated from the Satellite centre.
 * (SVG)
 */
const Satellite = ({
  active,
  borderWidth,
  centreColor,
  centreRadius,
  color,
  data,
  inactiveColor,
  onHoverIn,
  onHoverOut,
  onTapped,
  radius,
  state,
  tappedPropName,
  x,
  y
}) => {
  const transform = `translate(${x}, ${y})`;

  const outerCircleStyles = {
    strokeWidth: borderWidth
  };

  const innerCircleStyles = {
    fill: centreColor
  };

  // calculate the circles styles based on if it's active
  if (active) {
    outerCircleStyles.fill = color;
    outerCircleStyles.stroke = color;
  } else {
    outerCircleStyles.fill = inactiveColor;
    outerCircleStyles.stroke = inactiveColor;
  }

  // calculate the circles styles based on state
  if (state === 'focused') {
    outerCircleStyles.fillOpacity = 0.75;
  } else if (state === 'normal') {
    outerCircleStyles.fillOpacity = 0.25;
  } else if (state === 'blurred') {
    outerCircleStyles.fillOpacity = 0.25;
    outerCircleStyles.strokeWidth = 0;
    innerCircleStyles.fillOpacity = 0.25;
  }

  const eventHandlerProps = {};

  /**
   * Tap function wrapper
   */
  const handleTapped = () => {
    onTapped(data);
  };

  if (onTapped && typeof onTapped === 'function') {
    eventHandlerProps[tappedPropName] = handleTapped;
  }

  if (onHoverIn && typeof onHoverIn === 'function') {
    eventHandlerProps.onMouseEnter = () => onHoverIn(data);
  }

  if (onHoverOut && typeof onHoverOut === 'function') {
    eventHandlerProps.onMouseLeave = () => onHoverOut(data);
  }

  return (
    <g
      className='qb-satellite'
      transform={transform}
      {...eventHandlerProps}>
      <circle
        style={outerCircleStyles}
        r={radius} />
      <circle
        style={innerCircleStyles}
        r={centreRadius} />
    </g>
  );
};

Satellite.propTypes = {
  /**
   * Defines if a Satellite is active False defaults to a white color
   */
  active: PropTypes.bool,
  /**
   * Define the Satellite outer border
   */
  borderWidth: CustomPropTypes.numberBetween(0, 999),
  /**
   * The color of the satellite centre circle
   */
  centreColor: PropTypes.string,
  /**
   * The radius of the satellite centre circle
   */
  centreRadius: CustomPropTypes.numberBetween(0, 999),
  /**
   * The satellite color.
   */
  color: PropTypes.string.isRequired,
  /**
   * Data to be passed to event handlers
   */
  data: PropTypes.object,
  /**
   * The color of the satellite when set as inactive
   */
  inactiveColor: PropTypes.string,
  /**
   * Event handler for when the component hovered
   */
  onHoverIn: PropTypes.func,
  /**
   * Event handler for when the mouse leaves the component
   */
  onHoverOut: PropTypes.func,
  /**
   * Event handler fired when the component is tapped.
   */
  onTapped: PropTypes.func,
  /**
   * The satellite radius.
   */
  radius: PropTypes.number.isRequired,
  /**
   * Defines the satellite state.
   */
  state: PropTypes.oneOf(['focused', 'normal', 'blurred']),
  /**
   * Event handler name, to trigger onTapped property.
   */
  tappedPropName: PropTypes.oneOf(['onMouseDown', 'onTouchStart', 'onTouchTap', 'onClick']),
  /**
   * The satellite position from left (the centre position).
   */
  x: PropTypes.number.isRequired,
  /**
   * The satellite position from top (the centre position).
   */
  y: PropTypes.number.isRequired
};

Satellite.defaultProps = {
  active: true,
  borderWidth: 3,
  centreColor: 'rgb(229, 229, 229)',
  centreRadius: 5,
  data: null,
  inactiveColor: 'rgb(229, 229, 229)',
  state: 'normal',
  tappedPropName: 'onClick',
  onHoverIn: () => {},
  onHoverOut: () => {},
  onTapped: () => {}
};

export default Satellite;
