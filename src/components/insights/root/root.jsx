import React, { PropTypes } from 'react';
import { CustomPropTypes } from 'utils';

import './root.css';

/**
 * Root component used to display a number with a contextual label inside a circle
 */
const Root = ({
  colorMain,
  colorSecondary,
  label,
  radius,
  value,
  x,
  y
}) => {
  /**
   * Method to get the props for drawing a circle as an object
   * @param {Number} percentage width of prop supplied
   * @param {String} dash array options
   * @param {String} color of circle
   * @return {Object} properties of the circle including cx, cy, r, stroke, strokeWidth, fill and strokeDasharray parameters
   */
  const getCircleProps = (width, dashed = '', color = colorMain) => {
    return {
      cx: x,
      cy: y,
      r: radius,
      stroke: color,
      strokeWidth: `${ width }px`,
      fill: 'transparent',
      strokeDasharray: `${ dashed }`
    };
  };

  // calculate label positions based on radius
  const valueYPos = y - radius / 6;
  const contextLabelYPos = y + radius / 3;

  return (
    <g className='qb-root'>
      <text
        className='qb-root__valuelabel'
        fill='white'
        style={ { fontSize: `${ radius < 140 ? 72 : 86 }px` } }
        x={ x }
        y={ valueYPos }>
        <tspan className='qb-root__valuespan'>{ value }</tspan>
      </text>
      <text
        className='qb-root__contextlabel'
        fill='white'
        style={ { fontSize: `${ radius < 140 ? 24 : 34 }px` } }
        x={ x }
        y={ contextLabelYPos }>
        <tspan className='qb-root__valuespan'>{ label }</tspan>
      </text>
      <circle className='qb-root__main' { ...getCircleProps(10) } />
      <circle className='qb-root__dashed' { ...getCircleProps(1, '5, 5', colorSecondary) } />
    </g>
  );
};

Root.propTypes = {
  /**
   * Color of main circle
   */
  colorMain: PropTypes.string,
  /**
   * Color of secondary circle which is placed on top of the main circle and has the same radius
   */
  colorSecondary: PropTypes.string,
  /**
   * The label shown below the value
   */
  label: PropTypes.string.isRequired,
  /**
   * Radius of the main and secondary circle
   */
  radius: CustomPropTypes.numberBetween(1, 9999),
  /**
   * The number shown inside the root, above the label
   */
  value: CustomPropTypes.numberBetween(1, 99999).isRequired,
  /**
   * X position of the centre of the component - the main and secondary circles and labels
   */
  x: PropTypes.number,
  /**
   * Y position of the centre of the component - the main and secondary circles and labels
   */
  y: PropTypes.number
};

Root.defaultProps = {
  colorMain: 'rgb(0, 117, 185)',
  colorSecondary: 'rgb(0, 21, 33)',
  radius: 150,
  x: 150,
  y: 150
};

export default Root;
