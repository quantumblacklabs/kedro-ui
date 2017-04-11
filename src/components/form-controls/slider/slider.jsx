import React, { PropTypes } from 'react';
import SliderRenderer from './slider-renderer';
import RangedSliderRenderer from './ranged-slider-renderer';

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
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#render}
   * @return {object} JSX for this component
   */
  render() {
    const RendererType = this.props.type === 'single' ? SliderRenderer : RangedSliderRenderer;

    return (
      <RendererType
        min={this.props.min}
        max={this.props.max}
        name={this.props.name}
        onChange={this.props.onChange}
        step={this.props.step}
        theme={this.props.theme} />
    );
  }
}

Slider.defaultProps = {
  max: 100,
  min: 0,
  name: 'slider',
  onChange: null,
  step: 1,
  theme: 'light',
  type: 'single',
  value: 50
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
  theme: PropTypes.oneOf(['dark', 'light']),
  /**
   * Type of the slider - either single input slider or multiple input (ranged) slider
   */
  type: PropTypes.oneOf(['single', 'multi']),
  /**
   * The value of the slider - either array for ranged slider or a single number for simple slider.
   */
  value: PropTypes.oneOf([PropTypes.array, PropTypes.number])
};

export default Slider;
