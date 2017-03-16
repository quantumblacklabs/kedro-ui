import React, { PropTypes } from 'react';
import classnames from 'classnames';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax } from 'gsap';

import './styles.css';

/**
 * Event Indicator renders a component containing circle with number (count) inside and a name of the Event.
 */
const SimpleEventIndicator = ({ color, count, name }) => (
  <div className='cbn-sg-playground__event'>
    <div
      className={classnames(
        'cbn-sg-playground__event-circle',
        `cbn-sg-playground__event-circle-${color}`)}>
      <div
        name={name}
        className={classnames(
          'cbn-sg-playground__event-circle-bg',
          `cbn-sg-playground__event-circle-bg--${name}`,
          `cbn-sg-playground__event-circle-${color}`)} />
      <div className='cbn-sg-playground__event-number'>
        { count }
      </div>
    </div>
    <div className='cbn-sg-playground__event-name'>
      { name }
    </div>
  </div>
);

/**
 * Event Indicator wrapper.
 */
const EventIndicatorRenderer = React.createClass({

  displayName: 'EventIndicatorRenderer',

  propTypes: {
    color: PropTypes.string.isRequired,
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

  /**
   * Animation wrapper made with GSAP.
   */
  _createAnimation({ target }) {
    const indicator = this._indicator.querySelector(`[name='${this.props.name}']`);

    return new TimelineMax()
      .to(indicator, 0.2, { scale: 1, opacity: 0.2 })
      .to(indicator, 0.3, { scale: 2, opacity: 1 })
      .to(indicator, 0.3, { scale: 2, opacity: 0 })
      .to(indicator, 0.2, { scale: 1, opacity: 0 });
  },

  render() {
    return (
      <div ref={indicator => { this._indicator = indicator; }}>
        <SimpleEventIndicator
          color={this.props.color}
          count={this.props.count}
          name={this.props.name} />
      </div>
    );
  }
});

SimpleEventIndicator.propTypes = {
  color: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default GSAP()(EventIndicatorRenderer);
