import React, { PropTypes } from 'react';
import { CustomPropTypes } from 'utils';

// Components
import SatelliteTrail from 'components/insights/satellite-trail/satellite-trail';
import Satellite from 'components/insights/satellite/satellite';

/**
 * A simple Progress component that displays the current progress status -
 * the number of completed stages out of all stages that have to be completed.
 * The last completed stage has a satelitte indicator.
 */
const Progress = ({
  activeColor,
  activeRadius,
  activeStage,
  activeTrailColor,
  color,
  height,
  radius,
  radiusBorderWidth,
  stages,
  trailColor,
  width
}) => {
  // if the active stage exceeds the logical boundaries (min: 1, max: stages - 1),
  // the boundary which it exceeds is taken instead
  let lastActiveStage;
  if (activeStage < 0) {
    lastActiveStage = 0;
  } else if (activeStage > (stages - 1)) {
    lastActiveStage = stages - 1;
  } else {
    lastActiveStage = activeStage;
  }

  // define viewbox
  const viewBoxWidth = 100;
  const viewBoxHeight = 10;
  // all elements start at 0 in X posiiton and at half of the height in Y position
  const viewBox = `0 ${-viewBoxHeight / 2} ${viewBoxWidth} ${viewBoxHeight}`;

  // there is one stage added, so a margin on right and left is created
  const step = viewBoxWidth / (stages + 1);

  // trail radius is adjusted to the viewbox
  const trailRadius = (radius / width) * (viewBoxWidth / 2);

  // dasharray for lines between stages
  const dashSpace = (trailRadius * 2) + 1;
  const dashLine = step - (dashSpace * 2);
  const dash = `0, ${dashSpace}, ${dashLine}, ${dashSpace}`;

  // satellite radius is calculated from step value
  const satelliteRadius = (activeRadius / width) * viewBoxWidth;

  // positions for active elements including Satellite
  const activeStartPos = { x: step, y: 0 };
  const activeEndPos = { x: step * (lastActiveStage + 1), y: 0 };

  // positions for inactive elements
  const inactiveStartPos = activeEndPos;
  const inactiveEndPos = { x: step * stages, y: 0 };

  const randomNumber = (Math.random() * 99999).toString();
  const maskId = `mask-satellite-${randomNumber}`;

  const lineStyle = {
    strokeWidth: trailRadius * 0.75,
    strokeDasharray: dash
  };

  const activeLineStyle = { ...lineStyle, stroke: activeTrailColor };
  const inactiveLineStyle = { ...lineStyle, stroke: trailColor };

  const activeSatelliteTrail = (lastActiveStage > 0)
    ? (
      <SatelliteTrail
        borderWidth={radiusBorderWidth}
        borderColor={activeColor}
        color={activeColor}
        dots={lastActiveStage + 1}
        endPos={activeEndPos}
        firstDotRadius={trailRadius}
        lastDotRadius={trailRadius}
        startPos={activeStartPos} />
    ) : '';

  const activeLine = (lastActiveStage > 0)
   ? (
     <line
       x1={activeStartPos.x}
       y1={activeStartPos.y}
       x2={activeEndPos.x}
       y2={activeEndPos.y}
       style={activeLineStyle} />
    ) : '';

  const inactiveSatteliteTrail = (lastActiveStage < (stages - 1))
   ? (
     <SatelliteTrail
       borderWidth={radiusBorderWidth}
       borderColor={color}
       color={'rgba(0,0,0,0)'}
       dots={stages - lastActiveStage}
       endPos={inactiveEndPos}
       firstDotRadius={trailRadius}
       lastDotRadius={trailRadius}
       startPos={inactiveStartPos} />
   ) : '';

  const inactiveLine = (lastActiveStage < (stages - 1))
    ? (
      <line
        x1={inactiveStartPos.x}
        y1={inactiveStartPos.y}
        x2={inactiveEndPos.x}
        y2={inactiveEndPos.y}
        style={inactiveLineStyle} />
    ) : '';

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}>
      <g className='qb-progress-inactive' style={{ mask: `url(#${maskId})` }}>
        { inactiveSatteliteTrail }
        { inactiveLine }
      </g>
      <g className='qb-progress-active' style={{ mask: `url(#${maskId})` }}>
        { activeSatelliteTrail }
        { activeLine }
      </g>
      <g className='qb-satellite'>
        <Satellite
          borderWidth={radiusBorderWidth}
          radius={satelliteRadius}
          centreColor={activeColor}
          centreRadius={trailRadius + (radiusBorderWidth / 2)}
          color={activeColor}
          x={activeEndPos.x}
          y={activeEndPos.y} />
      </g>
      <defs>
        <mask
          id={maskId}
          x={-10}
          y={-10}
          width={viewBoxWidth + 10}
          height={viewBoxHeight + 10}>
          <rect
            x={0}
            y={-viewBoxHeight}
            width={viewBoxWidth}
            height={viewBoxHeight * 2}
            fill={'white'} />
          <circle
            cx={activeEndPos.x}
            cy={activeEndPos.y}
            r={satelliteRadius}
            fill={'black'} />
        </mask>
      </defs>
    </svg>
  );
};

Progress.propTypes = {
  /**
   * The color of the completed stages and the satellite color.
   */
  activeColor: PropTypes.string,
  /**
   * The radius of the last completed stage.
   */
  activeRadius: CustomPropTypes.numberBetween(1, 999),
  /**
   * The color of the trail for completed stages.
   */
  activeTrailColor: PropTypes.string,
  /**
   * The number of the last stage which has been completed.
   * It has to be within the range [ 0, stages ], if it's not,
   * then the activeStage is changed to the min or max of the range.
   */
  activeStage: CustomPropTypes.numberBetween(0, 100).isRequired,
  /**
   * The color for the incomplete stages.
   */
  color: PropTypes.string,
  /**
   * The height of the whole progress panel.
   */
  height: CustomPropTypes.numberBetween(1, 9999),
  /**
   * The radius of stage circles.
   */
  radius: CustomPropTypes.numberBetween(1, 999),
  /**
   * Border width of the circles in the incomplete stages.
   */
  radiusBorderWidth: CustomPropTypes.numberBetween(0, 999),
  /**
   * The number of stages in the progress panel.
   */
  stages: CustomPropTypes.numberBetween(1, 100).isRequired,
  /**
   * The color of the trail for incomplete stages.
   */
  trailColor: PropTypes.string,
  /**
   * The width of the whole progress panel.
   */
  width: CustomPropTypes.numberBetween(1, 9999).isRequired
};

Progress.defaultProps = {
  activeColor: 'rgb(38, 192, 34)',
  activeRadius: 30,
  activeTrailColor: 'rgb(38, 192, 34)',
  color: 'rgb(0, 157, 249)',
  height: 40,
  radius: 5,
  radiusBorderWidth: 0.5,
  trailColor: 'rgb(0, 157, 249)'
};

export default Progress;
