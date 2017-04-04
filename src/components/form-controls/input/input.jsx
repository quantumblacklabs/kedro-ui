import React, { PropTypes } from 'react';
import classnames from 'classnames';

import './input.css';
// import './input-status-v2.css';
// import './input-status-v3.css';

/**
 * Controlled input component for one line of text; supporting placeholder, label, default value, disabled state,
 * error/success state and status description.
 * Even listener on change provided.
 */
class Input extends React.Component {
  /**
   * constructor - create new component with given props.
   * @param  {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      value: this.props.value
    };

    this._handleFocused = this._handleFocused.bind(this);
    this._handleBlured = this._handleBlured.bind(this);
    this._handleChanged = this._handleChanged.bind(this);
  }

  /**
   * _handleFocused - changes the focus to enabled state.
   */
  _handleFocused() {
    this.setState({
      focused: true
    });
  }

  /**
   * _handleBlured - changes the focus to disabled state.
   */
  _handleBlured() {
    this.setState({
      focused: false
    });
  }

  /**
   * _handleChanged - updates the state with the value from the input and triggers the passed on change callback.
   * @param  {object} event
   */
  _handleChanged(event) {
    this.setState({
      value: event.target.value
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event);
    }
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#render}
   * @return {object} JSX for this component
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
          onFocus={this._handleFocused}
          onBlur={this._handleBlured}>
          {labelWrapper}
          <input
            className='cbn-input__field'
            type='text'
            placeholder={this.props.placeholder}
            disabled={this.props.disabled}
            value={this.state.value}
            onChange={this._handleChanged} />
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
  value: ''
};

Input.propTypes = {
  /**
   * Whether the input should be editable or not.
   */
  disabled: PropTypes.bool,
  /**
   * Label indicating what should be written in the input.
   */
  label: PropTypes.string,
  /**
   * Event listener which will be trigerred on change of the input.
   */
  onChange: PropTypes.func,
  /**
   * Placeholder hint text which is displayed inside the input field and dissapers when something is written inside.
   */
  placeholder: PropTypes.string,
  /**
   * Status of the input - either 'default', 'success' or 'error'.
   * Will trigger change in colouring of the component.
   */
  status: PropTypes.oneOf(['error', 'success', 'default']),
  /**
   * Description of the status - either message on success or an error.
   * Will be displayed only if the status is different than 'default'.
   */
  statusDescription: PropTypes.string,
  /**
   * Theme of the input - either 'dark' or 'light'.
   */
  theme: PropTypes.oneOf(['dark', 'light']),
  /**
   * Value to be displayed inside the input field, it is editable and can change if not disabled.
   */
  value: PropTypes.string
};

export default Input;
