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
      children,
      disabled,
      theme,
      type,
      size
    } = this.props;

    return (
      <button
        className={classnames(
          'cbn-button',
          `cbn-button--${type}`,
          `cbn-button--${size}`,
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
  disabled: false,
  onClick: null,
  theme: 'dark',
  type: 'primary',
  size: 'regular'
};

Button.propTypes = {
  /**
   * The displayed button value
   */
  children: PropTypes.node.isRequired,
  /**
   * Handle click events
   */
  onClick: PropTypes.func,
  /**
   * True if disabled
   */
  disabled: PropTypes.bool,
  /**
   * Theme of the button - either 'dark' or 'light'.
   */
  theme: PropTypes.oneOf(['dark', 'light']),
  /**
   * Button style - either 'primary' or 'secondary'.
   */
  type: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Button size - either 'regular' or 'small'.
   */
  size: PropTypes.oneOf(['regular', 'small'])
};

export default Button;
