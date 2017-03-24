import React, { PropTypes } from 'react';
import { CustomPropTypes } from 'utils';
import _ from 'lodash';

/**
 * The SatelliteTrail component is a trail of evenly-spaced-out dots.
 * The dots may get smaller/larger, and can point in any direction.
 * (SVG)
 */
const SatelliteTrail = ({
  borderColor,
  borderWidth,
  color,
  data,
  dots,
  endPos,
  firstDotRadius,
  lastDotRadius,
  mask,
  onTrailItemHoverIn,
  onTrailItemHoverOut,
  onTrailItemTapped,
  startPos,
  tappedPropName
}) => {
  const dotStyles = {
    stroke: 'none',
    fill: color
  };

  if (borderColor && borderWidth) {
    dotStyles.strokeWidth = borderWidth;
    dotStyles.stroke = borderColor;
  }

  const radiusDiff = lastDotRadius - firstDotRadius;

  if (dots === 1) {
    // trail cannot be generated for length 1
    return <g />;
  }

  // change in position between each dot
  const stepDistance = {
    x: (endPos.x - startPos.x) / (dots - 1),
    y: (endPos.y - startPos.y) / (dots - 1)
  };

  let extraGroupStyles = {};

  if (mask) {
    extraGroupStyles = {
      mask: `url(#${mask})`
    };
  }

  return (
    <g
      className='qb-satellite-trail'
      transform={`translate(${startPos.x}, ${startPos.y})`}
      {...extraGroupStyles}>
      {
        _.times(dots)
          .map(i => {
            const eventHandlerProps = {};
            const eventData = { ...data, index: dots - i - 1 };

            if (onTrailItemTapped && typeof onTrailItemTapped === 'function') {
              eventHandlerProps[tappedPropName] = () => onTrailItemTapped(eventData);
            }

            if (onTrailItemHoverIn && typeof onTrailItemHoverIn === 'function') {
              eventHandlerProps.onMouseEnter = () => onTrailItemHoverIn(eventData);
            }

            if (onTrailItemHoverOut && typeof onTrailItemHoverOut === 'function') {
              eventHandlerProps.onMouseLeave = () => onTrailItemHoverOut(eventData);
            }

            // dot radius may get smaller / larger each time
            const dotRadius = firstDotRadius + (radiusDiff * (i / dots));

            return (
              <circle
                className='qb-satellite-trail__shape'
                key={i}
                style={dotStyles}
                r={dotRadius}
                cx={stepDistance.x * i}
                cy={stepDistance.y * i}
                {...eventHandlerProps} />
            );
          })
      }
    </g>
  );
};

SatelliteTrail.defaultProps = {
  borderWidth: 0,
  borderColor: 'black',
  firstDotRadius: 10,
  lastDotRadius: 2,
  data: null,
  dots: 4,
  endPos: { x: 100, y: 100 },
  mask: '',
  onTrailItemHoverIn: () => {},
  onTrailItemHoverOut: () => {},
  onTrailItemTapped: () => {},
  startPos: { x: 0, y: 0 },
  tappedPropName: 'onClick'
};

SatelliteTrail.propTypes = {
  /**
   * The border color
   */
  borderColor: PropTypes.string,
  /**
   * The border width
   */
  borderWidth: CustomPropTypes.numberBetween(0, 999),
  /**
   * The dot color
   */
  color: PropTypes.string.isRequired,
  /**
   * Data to be passed to event handlers
   */
  data: PropTypes.object,
  /**
   * The number of dots in the trail
   */
  dots: CustomPropTypes.numberBetween(1, 999),
  /**
   * The position of the end of the trail { x, y }
   */
  endPos: CustomPropTypes.position.isRequired,
  /**
   * The radius of the first dot
   */
  firstDotRadius: CustomPropTypes.numberBetween(0, 999).isRequired,
  /**
   * The radius of the last dot
   */
  lastDotRadius: CustomPropTypes.numberBetween(0, 999).isRequired,
  /**
   * An optional mask to reference. Used for reveal animations controlled at a higher level.
   */
  mask: PropTypes.string,
  /**
   * Event handler for when one of the trail circles are hovered
   */
  onTrailItemHoverIn: PropTypes.func,
  /**
   * Event handler for when the mouse leaves the trail item
   */
  onTrailItemHoverOut: PropTypes.func,
  /**
   * Event handler for when one of the trail circles are clicked
   */
  onTrailItemTapped: PropTypes.func,
  /**
   * The position of the start of the trail { x, y }
   */
  startPos: CustomPropTypes.position.isRequired,
  /**
   * Event handler name, to trigger onTapped property.
   */
  tappedPropName: PropTypes.oneOf(['onMouseDown', 'onTouchStart', 'onTouchTap', 'onClick'])
};

export default SatelliteTrail;
