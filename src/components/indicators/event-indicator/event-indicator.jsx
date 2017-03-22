import React, { PropTypes } from 'react';
import GSAP from 'react-gsap-enhancer';
import { TimelineLite, SlowMo } from 'gsap';

import './styles.css';

/**
 * Event Indicator renders a component containing circle with number (count) inside and a name of the Event.
 */
const SimpleEventIndicator = ({ color, count, name }) => (
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
        fill={color}
        name={`${name}-circle`} />
      <text
        x='50%'
        y='51%'
        fontSize='12px'
        textAnchor='middle'
        alignmentBaseline='middle'
        fill='white'>
        { count }
      </text>
      <text
        x='50%'
        y='85%'
        fontSize='13px'
        textAnchor='middle'
        alignmentBaseline='middle'
        className='cbn-sg-playground__event-name'>
        { name }
      </text>
    </svg>
  </div>
);

/**
 * Event Indicator wrapper.
 */
const EventIndicatorRenderer = React.createClass({

  displayName: 'EventIndicatorRenderer',

  propTypes: {
    colorIndex: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  },

  componentDidMount() {
    this._anim = this.addAnimation(this._createAnimation);
  },

  componentDidUpdate(nextProps) {
    if (nextProps.count !== this.props.count && this._anim) {
      this._anim.restart();
    }
  },

  _color(colorIndex) {
    return [
      'rgb(24, 117, 240)',
      'rgb(34, 153, 153)',
      'rgb(255, 173, 19)',
      'rgb(68, 136, 17)',
      'rgb(153, 34, 136)'
    ][colorIndex];
  },

  /**
   * Animation wrapper made with GSAP.
   */
  _createAnimation() {
    const circle = this._indicator.querySelector(`[name='${this.props.name}-circle']`);
    // animation timeline for the circle - animations will be sequenced after the previous one
    const circleTimeline = new TimelineLite();
    circleTimeline
      // start position of the circle
      .to(circle, 0.1, { scale: 1, opacity: 1, transformOrigin: '50% 50%' })
      // scale the circle
      .to(circle, 0.2, { scale: 1.5, opacity: 1, transformOrigin: '50% 50%' })
      // reset the circle to the start position
      .to(circle, 0.1, { scale: 1, opacity: 1, transformOrigin: '50% 50%' });

    const border = this._indicator.querySelector(`[name='${this.props.name}-border']`);
    // animation timeline for the border - animations will be sequenced after the previous one
    const borderTimeline = new TimelineLite();
    borderTimeline
      // start position of the border
      .to(border, 0.1, { scale: 1, opacity: 1, transformOrigin: '50% 50%' })
      // slow motion scale of the border
      .to(border, 0.7, { scale: 5, opacity: 0, ease: SlowMo.ease.config(0.5, 0.4, false), transformOrigin: '50% 50%' })
      // reset the border to the start position
      .to(border, 0.1, { scale: 1, opacity: 0, transformOrigin: '50% 50%' });

    // add the two animations into one animation timeline and let them both start at the start (0 seconds)
    const animationTimeline = new TimelineLite();
    animationTimeline.add(circleTimeline, 0);
    animationTimeline.add(borderTimeline, 0);

    return animationTimeline;
  },

  render() {
    return (
      <div
        className='cbn-sg-playground__event-wrapper'
        ref={indicator => { this._indicator = indicator; }}>
        <SimpleEventIndicator
          color={this._color(this.props.colorIndex)}
          count={this.props.count}
          name={this.props.name} />
      </div>
    );
  }
});

SimpleEventIndicator.defaultProps = {
  color: 'rgb(24, 117, 240)',
  count: 1,
  name: '--'
};

SimpleEventIndicator.propTypes = {
  color: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default GSAP()(EventIndicatorRenderer);
