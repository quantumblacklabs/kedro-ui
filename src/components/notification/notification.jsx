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
      type='paste' />
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
      <Icon
        onClick={onClose}
        size='medium'
        theme={theme}
        title=''
        type='close' />
    </div>
  );
};

Notification.defaultProps = {
  icon: null,
  onClose: null,
  type: 'multiline'
};

Notification.propTypes = {
  icon: PropTypes.string,
  onClose: PropTypes.func,
  headerLabel: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  type: PropTypes.string
};

export default Notification;
