import React, { PropTypes } from 'react';
import classnames from 'classnames';

import './slider.css';

/**
 * Creates a slider component.
 */
class Slider extends React.Component {
  /**
   * constructor - create new component with given props.
   * @param  {object} props
   */
  constructor(props) {
    super(props);

    this.displayName = 'Slider';

    this.state = {
    };

    this._handleChanged = this._handleChanged.bind(this);
  }

  /**
   * _handleChanged - updates the state with the value from the slider and triggers the passed on change callback.
   * @param  {object} event
   */
  _handleChanged(event) {
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
    return (
      <div
        className={classnames(
          'cbn-slider',
          `cbn-slider--${this.props.theme}`
        )}>
        <input
          type='range'
          name={this.props.name}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step} />
      </div>
    );
  }
}

Slider.defaultProps = {
  max: 100,
  min: 0,
  name: 'slider',
  onChange: null,
  step: 1,
  theme: 'light'
};

Slider.propTypes = {
  /**
   * Minimal value of the slider.
   */
  min: PropTypes.number,
  /**
   * Maximum value of the slider.
   */
  max: PropTypes.number,
  /**
   * Name of the slider.
   * NOTE: SHOULD THE NAME BE INCLUDED? OR BE REMOVED?
   * FROM MDN: "The name of the control, which is submitted with the form data."
   */
  name: PropTypes.string,
  /**
   * Event listener which will be trigerred on change of the slider.
   */
  onChange: PropTypes.func,
  /**
   * Step of the slider.
   */
  step: PropTypes.number,
  /**
   * Theme of the component, either 'dark' or 'light'
   */
  theme: PropTypes.oneOf(['dark', 'light'])
};

export default Slider;
