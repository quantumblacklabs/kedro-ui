import React, { PropTypes } from 'react';
import classnames from 'classnames';

import './button.css';

/**
 * Button component
 */
class Button extends React.Component {
  /**
   * Handle onClick events
   * @param  {object} e - onClick event object
   */
  _handleClick(e) {
    const { onClick } = this.props;

    if (typeof onClick === 'function') {
      onClick(e);
    }
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#render}
   * @return {object} JSX for this component
   */
  render() {
    const {
      animation,
      children,
      disabled,
      size,
      theme,
      type
    } = this.props;

    return (
      <button
        className={classnames(
          'cbn-button',
          `cbn-button--${animation}`,
          `cbn-button--${size}`,
          `cbn-button--${type}`,
          `cbn-theme--${theme}`
        )}
        disabled={disabled}
        onClick={e => this._handleClick(e)}>
        { children }
      </button>
    );
  }
}

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
