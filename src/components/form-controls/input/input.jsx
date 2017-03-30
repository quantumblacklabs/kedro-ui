import React, { PropTypes } from 'react';
import classnames from 'classnames';

import './input.css';

/**
 * Text input component supporting placeholder, label, default value, disabled state,
 * error/success state and status description.
 * Even listener on change provided.
 */
const Input = ({
  disabled,
  label,
  onChange,
  placeholder,
  status,
  statusDescription,
  theme,
  value
}) => {
  // status indicating error or success; ignored when it is default
  const validatedStatus = status !== 'default' ? status : false;

  const labelWrapper = label && (
    <div className='cbn-input__label'>
      {label}
    </div>
  );

  // status description shown only if status is relevant and description is passed
  const description = status !== 'default' && statusDescription && (
    <div className='cbn-input__description'>
      {statusDescription}
    </div>
  );

  return (
    <div
      className={classnames(
        'cbn-input',
        `cbn-theme--${theme}`,
        { [`cbn-input--${validatedStatus}`]: !!validatedStatus },
        { 'cbn-input--labeled': !!labelWrapper },
        { 'cbn-input--disabled': disabled }
      )}>
      {labelWrapper}
      <input
        className={classnames('cbn-input__field')}
        type='text'
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange} />
      <div className='cbn-input__line' />
      {description}
    </div>
  );
};

Input.defaultProps = {
  disabled: false,
  label: '',
  onChange: null,
  placeholder: '',
  status: 'default',
  statusDescription: '',
  theme: 'dark',
  value: ''
};

Input.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  status: PropTypes.oneOf(['error', 'success', 'default']),
  statusDescription: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  value: PropTypes.string
};

export default Input;
