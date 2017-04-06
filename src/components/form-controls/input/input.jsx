import React, { PropTypes } from 'react';
import classnames from 'classnames';
import GSAP from 'react-gsap-enhancer';
import { TimelineLite, Elastic } from 'gsap';

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

    this.displayName = 'Input';

    this.state = {
      focused: false,
      value: this.props.value
    };

    this._handleFocused = this._handleFocused.bind(this);
    this._handleBlured = this._handleBlured.bind(this);
    this._handleChanged = this._handleChanged.bind(this);

    this._createAnimation = this._createAnimation.bind(this);
  }

  /**
   * React lifecycle method
   * Adds the animation via GSAP-enhancer to the component.
   * {@link https://facebook.github.io/react/docs/react-component.html#componentDidMount}
   * @return {object} JSX for this component
   */
  componentDidMount() {
    this._anim = this.addAnimation(this._createAnimation);
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#componentDidUpdate}
   * @return {object} JSX for this component
   */
  componentDidUpdate(nextProps) {
    if (!this.state.focused || this.props.status !== nextProps.status) {
      this._anim.restart();
    }
  }

  /**
   * React lifecycle method
   * Removes the animation created with GSAP-enhancer from the component.
   * {@link https://facebook.github.io/react/docs/react-component.html#componentWillUnmount}
   * @return {object} JSX for this component
   */
  componentWillUnmount() {
    this._anim.kill();
  }

  /**
   * Animation wrapper made with GSAP.
   * @return {GSAP}
   */
  _createAnimation() {
    const line = this._line;
    const lineTimeline = new TimelineLite();
    lineTimeline
      .to(line, 0, { width: 0 })
      .to(line, 1.1, { width: '100%', ease: Elastic.easeOut.config(0.6, 1) });

    const desc = this._description;
    const descTimeline = new TimelineLite();
    if (desc) {
      // descTimeline
      //   .to(desc, 0, { y: '-50px', opacity: 0 })
      //   .to(desc, 1, { y: 0, opacity: 1 });
      // descTimeline
      //   .to(desc, 0, { x: '-10px', opacity: 0 })
      //   .to(desc, 1, { x: 0, opacity: 1 });
      descTimeline
        .to(desc, 0, { opacity: 0 })
        .to(desc, 1, { opacity: 1 });
    }

    const animationTimeline = new TimelineLite();
    animationTimeline.add(lineTimeline, 0);
    if (desc) {
      animationTimeline.add(descTimeline, 0);
    }

    return animationTimeline;
  }

  /**
   * _handleFocused - changes the focus to enabled state.
   */
  _handleFocused() {
    if (this.props.status === 'default') {
      this._anim.restart();
    }

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
      <div className='cbn-input__description' ref={desc => { this._description = desc; }}>
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
          <div className='cbn-input__line' ref={line => { this._line = line; }}>
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
  value: PropTypes.string
};

export default GSAP()(Input);
