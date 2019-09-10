import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './input.css';
import './input-status-v1.css';
import './input-status-v2.css';

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

    this.displayName = 'Input';

    this.state = {
      focused: false,
      value: this.props.value
    };

    this._handleFocused = this._handleFocused.bind(this);
    this._handleBlured = this._handleBlured.bind(this);
    this._handleChanged = this._handleChanged.bind(this);
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#componentDidUpdate}
   * @return {object} JSX for this component
   */
  componentDidUpdate(prevProps) {
    if (this.props.value !== null && this.props.value !== prevProps.value) {
      this.setState({
        value: this.props.value
      });
    }
  }

  /**
   * _handleFocused - changes the focus to enabled state.
   */
  _handleFocused(event) {
    // if (this.props.status === 'default') {
    //   this._anim.restart();
    // }

    this.setState({
      focused: true
    });

    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus(event, { focused: true });
    }
  }

  /**
   * _handleBlured - changes the focus to disabled state.
   */
  _handleBlured(event) {
    this.setState({
      focused: false
    });

    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(event, { focused: false, value: event.target.value });
    }
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
      this.props.onChange(event, { value: event.target.value });
    }
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#render}
   * @return {object} JSX for this component
   */
  render() {
    const {
      disabled,
      label,
      placeholder,
      status,
      statusDescription,
      theme,
      variant
    } = this.props;
    const { focused, value } = this.state;

    // status indicating error or success; ignored when it is default
    const validatedStatus = status !== 'default' ? status : false;
    const hasDescription = status !== 'default' && statusDescription;

    const labelWrapper = label && (
      <div className='kui-input__label'>
        {label}
      </div>
    );

    // description's div has to be always rendered, even if its content is empty
    // to enable the animation to run when the component receives a description; otherwise the animation is ignored
    const description = (
      <div className={classnames('kui-input__description', {
        'kui-input__description--has-content': hasDescription
      })}>
        {
          statusDescription && (
            <div className='kui-input__description-content'>
              { statusDescription }
            </div>
          )
        }
      </div>
    );

    return (
      <div className='kedro kui-input-wrapper'>
        <div
          className={classnames(
            'kui-input',
            `kui-theme--${theme}`,
            { [`kui-input--${validatedStatus}`]: !!validatedStatus },
            { 'kui-input--disabled': disabled },
            { 'kui-input--focused': focused },
            { 'kui-input--variant-one': variant === 1 },
            { 'kui-input--variant-two': variant === 2 }
          )}
          onFocus={this._handleFocused}
          onBlur={this._handleBlured}>
          {labelWrapper}
          <input
            className='kui-input__field'
            type='text'
            placeholder={placeholder || ''}
            disabled={disabled}
            value={value || ''}
            onChange={this._handleChanged}
            onFocus={this._handleFocused}
            onBlur={this._handleBlured} />
          <div
            aria-hidden='true'
            className='kui-input__line'>
            <div className='kui-input__line--filled'>
              {value || ''}
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
  label: null,
  onBlur: null,
  onFocus: null,
  onChange: null,
  placeholder: null,
  status: 'default',
  statusDescription: null,
  theme: 'light',
  value: null,
  variant: 0
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
   * Event listener which will be triggered on losing focus of the input (in other words, on blur).
   */
  onBlur: PropTypes.func,
  /**
   * Event listener which will be triggered when input will gain focus,
   */
  onFocus: PropTypes.func,
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
   * Can be only a string of arbitrary length, but not HTML or other formats.
   */
  statusDescription: PropTypes.string,
  /**
   * Theme of the input - either 'dark' or 'light'.
   */
  theme: PropTypes.oneOf(['dark', 'light']),
  /**
   * Value to be displayed inside the input field, it is editable and can change if not disabled.
   */
  value: PropTypes.string,
  /**
   * Style variant for displaying status.
   */
  variant: PropTypes.oneOf([0, 1, 2])
};

export default Input;
// export default GSAP()(Input);
