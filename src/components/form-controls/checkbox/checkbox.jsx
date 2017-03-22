// Imports

import React, { PropTypes } from 'react';
import { uniqueId } from 'lodash';
import Switch from '../switch';
import Icon from '../../icon';

// Styles

import './checkbox.css';

/**
 * Radio button, when a user selects one, all other radio buttons with the same
 * name will become unchecked i.e. you can only select one
 */
const Checkbox = ({ disabled, label, name, onChange, theme, value }) => {
  const id = uniqueId('radiobutton');

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
        <div className='cbn-switch-checkbox__box' />
        <svg viewBox='0 0 20 20'>
          <defs>
            <clipPath id='clip-svg'>
              <polygon points='290.040 33.286, 118.861 204.427, 52.320 137.907, 0.000 190.226, 118.862 309.071, 342.357 85.606' />
            </clipPath>
          </defs>
        </svg>
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
