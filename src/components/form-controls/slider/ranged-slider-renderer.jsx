import React, { PropTypes } from 'react';
import classnames from 'classnames';

import './ranged-slider-renderer.css';

/**
 * Creates a ranged slider component.
 */
class RangedSliderRenderer extends React.Component {
  /**
   * constructor - create new component with given props.
   * @param  {object} props
   */
  constructor(props) {
    super(props);

    this.displayName = 'RangedSliderRenderer';

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
          'cbn-slider-multiple',
          `cbn-slider--${this.props.theme}`
        )}>
        <input
          type='range'
          name={this.props.name}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          value={this.props.value[0]}
          multiple />
        <input
          type='range'
          name={this.props.name}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          value={this.props.value[1]}
          multiple />
      </div>
    );
  }
}

RangedSliderRenderer.defaultProps = {
  max: 100,
  min: 0,
  name: 'slider',
  onChange: null,
  step: 1,
  theme: 'light',
  value: [0, 50]
};

RangedSliderRenderer.propTypes = {
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
   * Theme of the component, either 'dark' or 'light'.
   */
  theme: PropTypes.oneOf(['dark', 'light']),
  /**
   * Min and max values for the value.
   */
  value: PropTypes.array
};

export default RangedSliderRenderer;
