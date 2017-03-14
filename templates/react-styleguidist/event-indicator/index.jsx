import React, { PropTypes } from 'react';
import classnames from 'classnames';

import './styles.css';

/**
 * Event Indicator renders a component containing circle with number (count) inside and a name of the Event.
 */
const _SimpleEventIndicator = ({ color, count, name }) => {

  return (
    <div className='cbn-sg-playground__event'>
      <div className={classnames(
          'cbn-sg-playground__event-circle',
          `cbn-sg-playground__event-circle-${color}`)}>
        <div className={classnames(
            'cbn-sg-playground__event-circle-bg',
            'cbn-sg-playground__event-circle-bg--animate',
            `cbn-sg-playground__event-circle-${color}`)}></div>
        <div className='cbn-sg-playground__event-number'>
          { count }
        </div>
      </div>
      <div className='cbn-sg-playground__event-name'>
        { name }
      </div>
    </div>
  );
};

const EventIndicator = React.createClass({

  render() {
    return _SimpleEventIndicator({ ...this.props });
  }
});

_SimpleEventIndicator.propTypes = {
  color: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default EventIndicator;
