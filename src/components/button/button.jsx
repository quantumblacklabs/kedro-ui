import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './button.css';

/**
 * An button component
 */
const Button = ({
  data,
  disabled,
  label,
  onHoverIn,
  onHoverOut,
  onTapped,
  size,
  tappedPropName,
  theme,
  type
}) => {
  let eventHandlerProps = {};

  // lets add some event handlers
  if (onTapped && typeof onTapped === 'function') {
    eventHandlerProps[tappedPropName] = e => onTapped({ e, data });
  }

  if (onHoverIn && typeof onHoverIn === 'function') {
    eventHandlerProps.onMouseOver = e => onHoverIn({ e, data });
  }

  if (onHoverOut && typeof onHoverOut === 'function') {
    eventHandlerProps.onMouseOut = e => onHoverOut({ e, data });
  }

  const classes = classNames(
    'qb-button',
    `qb-button--size-${ size }`,
    `qb-button--type-${ type }`,
    { [`qb-button--disabled`]: disabled },
    `qb-button--theme-${ theme }`
  );

  return (
    <button
      { ...eventHandlerProps }
      disabled={ disabled }
      type='button'
      className={ classes }>{ label }</button>
  );
};

Button.propTypes = {
  /**
   * Data to be passed to event handlers
   */
  data: PropTypes.object,
  /**
   * Make the button disabled
   */
  disabled: PropTypes.bool,
  /**
   * The button label
   */
  label: PropTypes.string.isRequired,
  /**
   * Event handler for when the component hovered. Called with { event, data }
   */
  onHoverIn: PropTypes.func,
  /**
   * Event handler for when the mouse leaves the component. Called with { event, data }
   */
  onHoverOut: PropTypes.func,
  /**
   * Event handler fired when the component is tapped. Called with { event, data }
   */
  onTapped: PropTypes.func,
  /**
   * Define the button size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Event handler name, to trigger onTapped property.
   */
  tappedPropName: PropTypes.oneOf(['onMouseDown', 'onTouchStart', 'onTouchTap', 'onClick']),
  /**
   * Theme name for component
   */
  theme: PropTypes.oneOf(['dark', 'light']),
  /**
   * Define the button type
   */
  type: PropTypes.oneOf(['primary', 'secondary', 'positive', 'negative']),
};

Button.defaultProps = {
  size: 'medium',
  tappedPropName: 'onClick',
  theme: 'dark',
  type: 'primary'
};

export default Button;
