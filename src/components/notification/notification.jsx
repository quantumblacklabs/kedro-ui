// Imports

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

// Styles

import './notification.css';

/**
 * Notification component, used to display information around application updates
 * or important information to the uyser
 */
const Notification = ({
  icon,
  onClose,
  headerLabel,
  label,
  theme,
  type
}) => {
  const contextIcon = !icon ? null : (
    <Icon
      size='medium'
      theme={theme}
      title=''
      type={icon} />
  );

  return (
    <div className={`cbn-notification cbn-notification--${type} cbn-theme--${theme}`}>
      {contextIcon}
      <div className='cbn-notification__content'>
        <span
          className='cbn-notification__header'>
          {headerLabel}
        </span>
        <span
          className='cbn-notification__label'>
          {label}
        </span>
      </div>
      <button className='cbn-notification__closebtn'>
        <Icon
          onClick={onClose}
          size='medium'
          theme={theme}
          title=''
          type='close' />
      </button>
    </div>
  );
};

Notification.defaultProps = {
  icon: null,
  onClose: null,
  type: 'multiline',
  theme: 'dark'
};

Notification.propTypes = {
  /**
   * Icon to be displayed on left of notification
   */
  icon: PropTypes.string,
  /**
   * Header label, used to display the header for the notification
   */
  headerLabel: PropTypes.string.isRequired,
  /**
   * Label content, define the informationto be displayed to the user
   */
  label: PropTypes.string.isRequired,
  /**
   * onClose method is triggered when clicking the [X] icon
   */
  onClose: PropTypes.func,
  /**
   * Theme of the component
   */
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  /**
   * Type of notification display i.e. multiline or one line
   */
  type: PropTypes.oneOf(['multiline', 'inline'])
};

export default Notification;
