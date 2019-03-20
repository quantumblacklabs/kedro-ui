// Imports

import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import Switch from '../switch';

// Styles

import './radio-button.css';

/**
 * Radio button, when a user selects one, all other radio buttons with the same
 * name will become unchecked i.e. you can only select one
 */
const RadioButton = ({
  checked, defaultChecked, disabled, label, name, onChange, theme, value
}) => {
  const id = uniqueId('radiobutton');

  return (
    <Switch
      checked={checked}
      id={id}
      defaultChecked={defaultChecked}
      disabled={disabled}
      name={name}
      onChange={onChange}
      type='radio'
      theme={theme}
      value={value}>
      <label className='cbn-switch-radio__label' htmlFor={id}>
        <span className='cbn-switch-radio__box' />
        {label}
      </label>
    </Switch>
  );
};

// Props

RadioButton.defaultProps = {
  checked: null,
  defaultChecked: null,
  disabled: false,
  onChange: null,
  theme: 'dark'
};

RadioButton.propTypes = {
  /**
   * Set the selected / deselected state to switch component
   */
  checked: PropTypes.bool,
  /**
   * Set the default selected / deselected state to switch component
   */
  defaultChecked: PropTypes.bool,
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

export default RadioButton;
