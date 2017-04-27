// Imports

import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import Switch from '../switch';

// Styles

import './checkbox.css';

/**
 * Radio button, when a user selects one, all other radio buttons with the same
 * name will become unchecked i.e. you can only select one
 */
const Checkbox = ({ checked, disabled, label, name, onChange, theme, value }) => {
  const id = uniqueId('radiobutton');

  return (
    <Switch
      checked={checked}
      id={id}
      disabled={disabled}
      name={name}
      onChange={onChange}
      type='checkbox'
      theme={theme}
      value={value}>
      <label className='cbn-switch-checkbox__label' htmlFor={id}>
        <div className='cbn-switch-checkbox__box'>
          <svg className='cbn-switch-checkbox__inner' viewBox='0 0 24 24'>
            <g fill='none' fillRule='evenodd'>
              <path d='M0 0h24v24H0z' />
              <path
                className='cbn-switch-checkbox__innerfill'
                d='M2 2h20v20H2V2zm7.923 12.362l-2.538-2.418L6
                   13.263 9.923 17 18 9.32 16.615 8l-6.692 6.362z' />
            </g>
          </svg>
        </div>
        {label}
      </label>
    </Switch>
  );
};

// Props

Checkbox.defaultProps = {
  checked: null,
  disabled: false,
  onChange: null,
  theme: 'dark'
};

Checkbox.propTypes = {
  /**
   * Set the selected / deselected state to switch component
   */
  checked: PropTypes.bool,
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
