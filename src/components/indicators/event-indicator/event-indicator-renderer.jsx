import React, { PropTypes } from 'react';

/**
 * Event Indicator renders a component containing circle with number (count) inside and a name of the Event.
 */
const EventIndicatorRenderer = ({ color, count, name, theme }) => (
  <div className='cbn-sg-playground__event'>
    <svg width='80' height='80'>
      <circle
        cx='50%'
        cy='50%'
        r='5'
        stroke={color}
        strokeWidth='1'
        fill='rgba(255, 255, 255, 0)'
        name={`${name}-border`} />
      <circle
        cx='50%'
        cy='50%'
        r='10'
        fill='transparent'
        stroke={theme === 'dark' ? 'white' : 'lightgrey'}
        strokeWidth='1'
        name={`${name}-circle`} />
      <text
        className='cbn-sg-playground__event-count'
        x='50%'
        y='51%'
        fontSize='12px'
        textAnchor='middle'
        alignmentBaseline='middle'
        fill={theme === 'dark' ? 'white' : 'grey'}>
        { count }
      </text>
      <text
        className='cbn-sg-playground__event-name'
        x='50%'
        y='85%'
        fontSize='10px'
        fill={theme === 'dark' ? 'white' : 'grey'}
        textAnchor='middle'
        alignmentBaseline='middle'>
        { name }
      </text>
    </svg>
  </div>
);

EventIndicatorRenderer.defaultProps = {
  theme: 'dark'
};

EventIndicatorRenderer.propTypes = {
  /**
   * Color of the animated ring of the indicator.
   */
  color: PropTypes.string.isRequired,
  /**
   * The number which should be displayed inside the indicator, usually the number of callbacks.
   */
  count: PropTypes.number.isRequired,
  /**
   * The name which should be displayed below the indicator, usually the name of the callback function.
   */
  name: PropTypes.string.isRequired,
  /**
   * The color theme for indicator's circles and text.
   */
  theme: PropTypes.oneOf(['dark', 'light'])
};

export default EventIndicatorRenderer;
