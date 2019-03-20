import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './button.css';

/**
 * Button component with various styling options:
 * Change colour theme, style type, size and hover animation type using props.
 * Also handles onClick events, allows any children (including Icon components),
 * and can be disabled by passing disabled=true.
 * @return {object} JSX button element
 */
const Button = ({
  animation,
  children,
  disabled,
  onClick,
  size,
  theme,
  type
}) => (
  <span className='carbon cbn-button'>
    <button
      type='button'
      className={classnames(
        'cbn-button__btn',
        `cbn-button__btn--${animation}`,
        `cbn-button__btn--${size}`,
        `cbn-button__btn--${type}`,
        `cbn-theme--${theme}`
      )}
      disabled={disabled}
      onClick={onClick}>
      { children }
    </button>
  </span>
);

Button.defaultProps = {
  animation: 'fade',
  disabled: false,
  onClick: null,
  size: 'regular',
  theme: 'dark',
  type: 'primary'
};

Button.propTypes = {
  /**
   * The style of hover animation
   */
  animation: PropTypes.oneOf(['fade', 'wipe']),
  /**
   * The displayed button value
   */
  children: PropTypes.node.isRequired,
  /**
   * True if disabled
   */
  disabled: PropTypes.bool,
  /**
   * Handle click events
   */
  onClick: PropTypes.func,
  /**
   * Button size
   */
  size: PropTypes.oneOf(['regular', 'small']),
  /**
   * Theme of the button
   */
  theme: PropTypes.oneOf(['dark', 'light']),
  /**
   * Button style - either with a border or minimal with an underline on hover
   */
  type: PropTypes.oneOf(['primary', 'secondary'])
};

export default Button;
