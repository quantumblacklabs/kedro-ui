// Imports

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Styles

import './switch.css';

/**
 * Generic switch view, used to create controls such as radio buttons and toggle buttons.
 */
const Switch = ({
  checked,
  children,
  defaultChecked,
  disabled,
  id,
  name,
  onChange,
  theme,
  type,
  value
}) => {
  let _handleOnChange = null;

  // Add checked & defaultChecked props if set, to avoid warnings from having both supplied
  const extraProps = {};
  if (checked !== null) {
    extraProps.checked = checked;
  }
  if (defaultChecked !== null) {
    extraProps.defaultChecked = defaultChecked;
  }

  // if onChange function has been supplied, fire with event and payload - value and checked
  if (typeof onChange === 'function') {
    _handleOnChange = e =>
      onChange(e, {
        checked: e.target.checked,
        value
      });
  }

  // conditional classes based on props
  const extraClasses = {};
  extraClasses[`cbn-switch-${type}--disabled`] = disabled;

  const _containerClassNames = classnames('carbon', 'cbn-switch', `cbn-switch-${type}`, `cbn-theme--${theme}`, extraClasses);

  return (
    <div className={_containerClassNames}>
      <input
        {...extraProps}
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
  checked: null,
  children: null,
  defaultChecked: null,
  disabled: false,
  onChange: null,
  theme: 'dark'
};

Switch.propTypes = {
  /**
   * Set the selected / deselected state to switch component
   */
  checked: PropTypes.bool,
  /**
   * If needed, you can supply the switch with extra elements
   */
  children: PropTypes.node,
  /**
   * Set the default selected / deselected state to switch component
   */
  defaultChecked: PropTypes.bool,
  /**
   * Set the element to disabled
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
   * The underlying value of the element
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

// Exports

export default Switch;
