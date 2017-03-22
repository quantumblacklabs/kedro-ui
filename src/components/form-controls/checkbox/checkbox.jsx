// Imports

import React, { PropTypes } from 'react';
import { uniqueId } from 'lodash';
import Switch from '../switch';

// Styles

import './checkbox.css';

/**
 * Checkbox, in a group you may select 1 or more
 */
const Checkbox = ({ disabled, label, name, onChange, theme, value }) => {
  const id = uniqueId('checkbox');

  return (
    <Switch
      id={id}
      disabled={disabled}
      name={name}
      onChange={onChange}
      type='checkbox'
      theme={theme}
      value={value}>
      <label className='cbn-switch-checkbox__label' htmlFor={id}>
        <span className='cbn-switch-checkbox__box' />
        {label}
      </label>
    </Switch>
  );
};

// Props

Checkbox.defaultProps = {
  disabled: false,
  onChange: null,
  theme: 'dark'
};

Checkbox.propTypes = {
  /**
   * Set the radio button to disabled
   */
  disabled: PropTypes.bool,
  /**
   * This is the label that will be displayed for the control
   */
  label: PropTypes.string.isRequired,
  /**
   * This is the name of the group the button belongs to (required for unselecting)
   */
  name: PropTypes.string.isRequired,
  /**
   * Theme name for component, allowed [dark, light]
   */
  theme: PropTypes.oneOf(['dark', 'light']),
  /**
   * On changed method, this is called with the selected item that was pressed
   */
  onChange: PropTypes.func,
  /**
   * The underlying value of the radiobutton
   */
  value: PropTypes.number.isRequired
};

export default Checkbox;
