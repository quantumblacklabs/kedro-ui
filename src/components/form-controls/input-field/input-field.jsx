import React, { PropTypes } from 'react';
import classnames from 'classnames';

import './input-field.css';

const InputField = ({ name, placeholder, theme }) => {
  return (
    <div
      className={classnames(
        'cbn-input-field',
        `cbn-input-field--${theme}`)}>
      <input
        className='cbn-input-field__text'
        type='text' />
    </div>
  );
};

InputField.defaultProps = {
  name: '',
  placeholder: '',
  theme: 'dark'
};

InputField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light'])
};

export default InputField;
