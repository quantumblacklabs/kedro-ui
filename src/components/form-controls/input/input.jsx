import React, { PropTypes } from 'react';
import classnames from 'classnames';

import './input.css';

/**
 * Text input component supporting placeholder, label, default value, disabled state,
 * error/success state and status description.
 * Even listener on change provided.
 */
class Input extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      value: undefined
    }
  }

  _handleFocused() {
    this.setState({
      focused: true
    });
  }

  _handleBlured() {
    this.setState({
      focused: false
    });
  }

  _handleChanged(event) {
    this.setState({
      value: event.target.value
    });

    this.props.onChange;
  }

  /**
   * render - description
   * @return {type}  description
   */
  render() {
    // status indicating error or success; ignored when it is default
    const validatedStatus = this.props.status !== 'default' ? this.props.status : false;

    const labelWrapper = this.props.label && (
      <div className='cbn-input__label'>
        {this.props.label}
      </div>
    );

    // status description shown only if status is relevant and description is passed
    const description = this.props.status !== 'default' && this.props.statusDescription && (
      <div className='cbn-input__description'>
        {this.props.statusDescription}
      </div>
    );

    return (
      <div className='cbn-input-wrapper'>
        <div
          className={classnames(
            'cbn-input',
            `cbn-theme--${this.props.theme}`,
            { [`cbn-input--${validatedStatus}`]: !!validatedStatus },
            { 'cbn-input--disabled': this.props.disabled },
            { 'cbn-input--focused': this.state.focused }
          )}
          onFocus={this._handleFocused.bind(this)}
          onBlur={this._handleBlured.bind(this)}>
          {labelWrapper}
          <input
            className='cbn-input__field'
            type='text'
            placeholder={this.props.placeholder}
            disabled={this.props.disabled}
            value={this.props.value}
            onChange={this._handleChanged.bind(this)} />
          <div className='cbn-input__line'>
            <div className='cbn-input__line--filled'>
              {this.state.value}
            </div>
          </div>
        </div>
        {description}
      </div>
    );
  }
}

Input.defaultProps = {
  disabled: false,
  label: '',
  onChange: null,
  placeholder: '',
  status: 'default',
  statusDescription: '',
  theme: 'dark',
  value: undefined
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
