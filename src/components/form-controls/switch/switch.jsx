// Imports

import React, { PropTypes } from 'react';
import classnames from 'classnames';

// Styles

import './switch.css';

/**
 * Generic switch view, used to create controls such as radio buttons and
 * toggle buttons
 */
const Switch = ({ children,
                  disabled,
                  id,
                  name,
                  onChange,
                  theme,
                  type,
                  value }) => {
  let _handleOnChange = null;

  // if onChange function has been supplied
  // fire with event and radio value
  if (typeof onChange === 'function') {
    _handleOnChange = e => onChange({
      e,
      value
    });
  }

  // conditional classes based on props
  const extraClasses = {};
  extraClasses[`cbn-switch-${type}--disabled`] = disabled;

  const _containerClassNames = classnames(
    'cbn-switch',
    `cbn-switch-${type}`,
    `cbn-switch-${type}--${theme}`,
    extraClasses
  );

  return (
    <div className={_containerClassNames}>
      <input
        className='cbn-switch__input'
        disabled={disabled}
        id={id}
        onChange={_handleOnChange}
        name={name}
        type={type}
        value={value} />
      {children}
    </div>
  );
};

// Props

Switch.defaultProps = {
  children: null,
  disabled: false,
  onChange: null,
  theme: 'dark'
};

Switch.propTypes = {
  /**
   * If needed, you can supply the switch with extra elements
   */
  children: React.PropTypes.node,
  /**
   * Set the radio button to disabled
   */
  disabled: PropTypes.bool,
  /**
   * Unique ID for the control, used to identify this switch
   */
  id: PropTypes.string.isRequired,
  /**
   * This is the name of the group the button belongs to (required for unselecting)
   */
  name: PropTypes.string.isRequired,
  /**
   * Theme name for component, allowed [dark, light]
   */
  theme: PropTypes.oneOf(['dark', 'light']),
  /**
   * Input type i.e. radio, checkbox etc
   */
  type: PropTypes.string.isRequired,
  /**
   * On changed method, this is called with the selected item that was pressed
   */
  onChange: PropTypes.func,
  /**
   * The underlying value of the radiobutton
   */
  value: PropTypes.number.isRequired
};

// Exports

export default Switch;
