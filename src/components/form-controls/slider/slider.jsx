import React, { PropTypes } from 'react';
import SliderRenderer from './slider-renderer';
import RangedSliderRenderer from './ranged-slider-renderer';

import './slider-common.css';

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

    this.state = {
      colors: undefined
    };

    this.displayName = 'Slider';
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#componentdidmount}
   * @return {object} JSX for this component
   */
  componentDidMount() {
    // store the correct colors
    if (!this.state.colors) {
      this._setColors();
    }
  }

  /**
   * _setColors - store the colors in the state for usage in gradient
   */
  _setColors() {
    const fill = window.getComputedStyle(this._hiddenFill).backgroundColor;
    const background = window.getComputedStyle(this._hiddenBackground).backgroundColor;

    this.setState({
      colors: {
        fill,
        background
      }
    });
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#render}
   * @return {object} JSX for this component
   */
  render() {
    // determine the type of correct renderer
    const RendererType = this.props.type === 'single' ? SliderRenderer : RangedSliderRenderer;

    const hiddenElements = !this.state.colors && (
      <div className='cbn-slider__hidden'>
        <div
          ref={hiddenFill => { this._hiddenFill = hiddenFill; }}
          className='cbn-slider__hidden--fill' />
        <div
          ref={hiddenBackground => { this._hiddenBackground = hiddenBackground; }}
          className='cbn-slider__hidden--background' />
      </div>
    );

    return (
      <div className='cbn-slider-wraper'>
        <RendererType
          min={this.props.min}
          max={this.props.max}
          name={this.props.name}
          onChange={this.props.onChange}
          step={this.props.step}
          theme={this.props.theme}
          value={this.props.value}
          fillColor={this.state.colors ? this.state.colors.fill : 'transparent'}
          backgroundColor={this.state.colors ? this.state.colors.background : 'transparent'} />
        {hiddenElements}
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
  theme: 'light',
  type: 'single',
  value: undefined
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
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.number])
};

export default Slider;
