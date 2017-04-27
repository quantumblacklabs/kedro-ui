import React, { PropTypes } from 'react';
import classnames from 'classnames';

import './button.css';

/**
 * Button component
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
  <button
    className={classnames(
      'cbn-button',
      `cbn-button--${animation}`,
      `cbn-button--${size}`,
      `cbn-button--${type}`,
      `cbn-theme--${theme}`
    )}
    disabled={disabled}
    onClick={onClick}>
    { children }
  </button>
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
   * Button size - either 'regular' or 'small'.
   */
  size: PropTypes.oneOf(['regular', 'small']),
  /**
   * Theme of the button - either 'dark' or 'light'.
   */
  theme: PropTypes.oneOf(['dark', 'light']),
  /**
   * Button style - either 'primary' or 'secondary'.
   */
  type: PropTypes.oneOf(['primary', 'secondary'])
};

export default Button;
