import React, { PropTypes } from 'react';
import { CustomPropTypes } from 'utils';
import classnames from 'classnames';

import Satellite from 'components/insights/satellite/satellite';

import './swatch.css';

/**
 * The Swatch component is a simple shape to show the status of something, via color
 */
const Swatch = ({
  borderWidth,
  color,
  data,
  label,
  labelPosition,
  margin,
  onTapped,
  size,
  tappedPropName,
  title
}) => {
  /**
   * Excecute onTap event
   */
  const handleTapped = e => {
    onTapped({ e, data });
  };

  const eventHandlerProps = {};

  if (onTapped && typeof onTapped === 'function') {
    eventHandlerProps[tappedPropName] = handleTapped;
  }

  const satelliteStyle = {
    margin: `${margin}px`,
    cursor: typeof onTapped === 'function' ? 'pointer' : 'inherit'
  };

  const classNames = classnames('qb-swatch', `qb-swatch--label-${labelPosition}`);

  return (
    <div
      className={classNames}
      {...eventHandlerProps}>
      <svg
        className='qb-swatch__shape'
        width={size + (2 * borderWidth)}
        height={size + (2 * borderWidth)}
        style={satelliteStyle}>
        <g>
          { title ? <title>{ title }</title> : ''}
          <Satellite
            active={true}
            state='normal'
            x={(size / 2) + borderWidth}
            y={(size / 2) + borderWidth}
            radius={size / 2}
            borderWidth={borderWidth}
            color={color}
            centreColor={color}
            centreRadius={1.5} />
        </g>
      </svg>
      { label ? <span className='qb-swatch__label'>{ label }</span> : '' }
    </div>
  );
};

Swatch.defaultProps = {
  borderWidth: 1,
  data: null,
  label: '',
  labelPosition: 'bottom',
  margin: 6,
  onTapped: null,
  size: 20,
  tappedPropName: 'onClick',
  title: ''
};

Swatch.propTypes = {
  /**
   * The width of the satellite border.
   */
  borderWidth: PropTypes.number,
  /**
   * The swatch's color.
   */
  color: PropTypes.string.isRequired,
  /**
   * Data to be passed to event handlers
   */
  data: PropTypes.object,
  /**
   * An optional label.
   */
  label: PropTypes.string,
  /**
   * The label position.
   */
  labelPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /**
   * The swatch's left and right margin (px).
   */
  margin: CustomPropTypes.numberBetween(0, 1000),
  /**
   * Event handler fired when the swatch is tapped.
   */
  onTapped: PropTypes.func,
  /**
   * The length of the swatch shape (px). This will form both the width and height.
   */
  size: CustomPropTypes.numberBetween(6, 1000),
  /**
   * Event handler name, to trigger onTapped property.
   */
  tappedPropName: PropTypes.oneOf(['onMouseDown', 'onTouchStart', 'onTouchTap', 'onClick']),
  /**
   * The swatch's tooltip title.
   */
  title: PropTypes.string
};

export default Swatch;
