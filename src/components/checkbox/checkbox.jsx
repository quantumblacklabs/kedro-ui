// Imports

import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import Switch from '../switch';

// Styles

import './checkbox.css';

/**
 * Checkbox is a simple input element which can be either checked or unchecked;
 * its state does not effect other checkboxes, therefore multiple checkboxes can be checked at the same time.
 */
const Checkbox = ({
  checked, defaultChecked, disabled, label, name, onChange, theme, value
}) => {
  const id = uniqueId('checkbox');

  return (
    <Switch
      defaultChecked={defaultChecked}
      checked={checked}
      id={id}
      disabled={disabled}
      name={name}
      onChange={onChange}
      type='checkbox'
      theme={theme}
      value={value}>
      <label className='kui-switch-checkbox__label' htmlFor={id}>
        <div className='kui-switch-checkbox__box'>
          <svg className='kui-switch-checkbox__inner' viewBox='0 0 24 24'>
            <g fill='none' fillRule='evenodd'>
              <path d='M0 0h24v24H0z' />
              <path
                className='kui-switch-checkbox__innerfill'
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
  defaultChecked: null,
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
   * Set the default selected / deselected state to switch component
   */
  defaultChecked: PropTypes.bool,
  /**
   * Set the checkbox to disabled
   */
  disabled: PropTypes.bool,
  /**
   * This is the label that will be displayed for the control
   */
  label: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.node,
    PropTypes.string
  ]),
  /**
   * This is the name of the group the element belongs to
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
   * The underlying value of the checkbox
   */
  value: PropTypes.any
};

export default Checkbox;
