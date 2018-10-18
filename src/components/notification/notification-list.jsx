// Imports

import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import { uniqueId } from 'lodash/fp';

// Components

import Notification from './notification';

// Styles

import './notification-list.css';

/**
 * Notification list, used for displaying a stacked notification section for
 * application level information
 */
class NotificationList extends React.Component {
  /**
   * constructor - create new NotificationList
   * @param  {Object} props properties passed to component
   */
  constructor(props) {
    super(props);

    this.timer = null;

    this.state = {
      notifications: [this.props.currentNotification]
    };

    this._removeNotification = this._removeNotification.bind(this);
    this._handleClose = this._handleClose.bind(this);
  }

  /**
   * React lifecycle method
   * Update the value in state if props chage
   * {@link https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops}
   * @return {object} JSX for this component
   */
  componentWillReceiveProps(newProps) {
    // clone props, no mutations
    const newNotifications = this.state.notifications.slice();
    const newCurrent = JSON.parse(JSON.stringify(newProps.currentNotification));

    // create unique key identifier and unshift the new content onto the queue
    newCurrent.key = uniqueId('notification');
    newNotifications.unshift(newCurrent);

    this.setState({
      notifications: newNotifications
    });

    // lazy create timer
    if (this.props.removeAfter && this.timer === null) {
      // this periodically removes notifications after a given time
      this.timer = setInterval(() => {
        if (this.state.notifications.length !== 0) {
          this._removeNotification(this.state.notifications.length - 1);
        } else {
          clearInterval(this.timer);
        }
      }, this.props.removeAfter);
    }
  }

  /**
   * Remove a given notification from the list
   * @param  {number} index of notification in list
   */
  _removeNotification(index) {
    const newItems = this.state.notifications.slice();
    newItems.splice(index, 1);

    this.setState({
      notifications: newItems
    });
  }

  /**
   * Close click handler for notifications
   * @param  {number} index of notification to remove
   */
  _handleClose(index) {
    this._removeNotification(index);
  }

  /**
   * render - render the component
   * @return {ReactElement} markup
   */
  render() {
    const items = this.state.notifications.map((item, i) => {
      if (!item) {
        return null;
      }

      const { icon, type, header, label } = item;

      return (
        <div key={item.key}>
          <Notification
            icon={icon}
            theme={this.props.theme}
            headerLabel={header}
            label={label}
            type={type}
            onClose={() => this._handleClose(i)} />
        </div>);
    });

    return (
      <div
        style={{ width: this.props.width }}
        className='carbon cbn-notification-list'>
        <CSSTransitionGroup
          transitionName='cbn-notification-animation'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {items}
        </CSSTransitionGroup>
      </div>
    );
  }
}

NotificationList.defaultProps = {
  currentNotification: null,
  removeAfter: null,
  theme: 'dark',
  width: '500px'
};

NotificationList.propTypes = {
  /**
   * Current notification to display, will shift the list and display at the top
   */
  currentNotification: PropTypes.shape({
    header: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.oneOf(['inline', 'multiline'])
  }),
  /**
   * Remove the notifications after a given time (ms), will remove oldest first
   */
  removeAfter: PropTypes.number,
  /**
   * [theme description]
   * @type {[type]}
   */
  theme: PropTypes.string,
  /**
   * Width of list, will stretch all notifications to this size
   */
  width: PropTypes.string
};

export default NotificationList;
