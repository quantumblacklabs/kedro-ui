import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { rangeStep, uniqueId } from 'lodash/fp';

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

    this._id = uniqueId(`cbn-slider--${this.props.type}-`);

    this.displayName = 'Slider';

    this._handleChanged = this._handleChanged.bind(this);
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
   * _handleChanged -
   */
  _handleChanged(e) {
    console.log(e.target.value);

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(e);
    }
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#render}
   * @return {object} JSX for this component
   */
  render() {
    // const hiddenElements = !this.state.colors && (
    const hiddenElements = (
      <div className='cbn-slider__hidden'>
        <div
          ref={hiddenFill => { this._hiddenFill = hiddenFill; }}
          className='cbn-slider__hidden--fill' />
        <div
          ref={hiddenBackground => { this._hiddenBackground = hiddenBackground; }}
          className='cbn-slider__hidden--background' />
      </div>
    );

    const tickStep = this.props.tickStep ? this.props.tickStep : this.props.max;
    // create a range of values
    const tickValues = rangeStep(tickStep, this.props.min, this.props.max);
    // and add the max into the array
    tickValues.push(this.props.max);

    const tickNumbers = this.props.showTicks && (
      <datalist
        id={this._id}
        className='cbn-slider__tick-numbers'>
        {tickValues.map((tickValue, i) => (
          <option
            key={`tick-number-${tickValues[i]}`}
            className={classnames(
              'cbn-slider__tick-number',
              { 'cbn-slider__tick-number--min': i === 0 },
              { 'cbn-slider__tick-number--max': i === (tickValues.length - 1) })}
            value={tickValue}
            style={{ transform: (
              (i === 0 || i === (tickValues.length - 1))
              ? false
              : 'translateX(50%)'
            ) }}>
            {tickValue}
          </option>
          )
        )}
      </datalist>
    );

    const tickSymbols = this.props.showTicks && (
      <datalist
        id={this._id}
        className='cbn-slider__tick-symbols'>
        {tickValues.map((tickValue, i) => (
          <option
            key={`tick-symbol-${tickValues[i]}`}
            className={classnames(
              'cbn-slider__tick-symbol',
              { 'cbn-slider__tick-symbol--min': i === 0 },
              { 'cbn-slider__tick-symbol--max': i === (tickValues.length - 1) }
            )}
            value={tickValue} />
          )
        )}
      </datalist>
    );

    // determine the type of correct renderer
    const RendererType = this.props.type === 'single' ? SliderRenderer : RangedSliderRenderer;

    /**
     * TODO:
     *  <SliderRenderer ...>
     *    {typeRenderer}
     *  </SliderRenderer>
     */
    return (
      <div
        className={classnames(
          'cbn-slider',
          `cbn-slider--${this.props.type}`,
          `cbn-theme--${this.props.theme}`)}>
        <RendererType
          min={this.props.min}
          max={this.props.max}
          name={this.props.name}
          onChange={this._handleChanged}
          step={this.props.step}
          theme={this.props.theme}
          value={this.props.value}
          fillColor={this.state.colors ? this.state.colors.fill : 'transparent'}
          backgroundColor={this.state.colors ? this.state.colors.background : 'transparent'}
          listId={this._id} />
        {tickSymbols}
        {tickNumbers}
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
  showTicks: true,
  step: 1,
  tickStep: 0,
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
   * Whether the ticks indicating values of the slider should be shown.
   * By default only the min and max is shown, changing the tickStep value modifies the number of ticks.
   */
  showTicks: PropTypes.bool,
  /**
   * Step of the slider.
   */
  step: PropTypes.number,
  /**
   * Step of the ticks shown below the slider.
   * By default only the min and max is shown.
   */
  tickStep: PropTypes.number,
  /**
   * Theme of the component, either 'dark' or 'light'
   */
  theme: PropTypes.oneOf(['dark', 'light']),
  /**
   * Type of the slider - either single input slider or multiple input (ranged) slider
   */
  type: PropTypes.oneOf(['single', 'multiple']),
  /**
   * The value of the slider - either array for ranged slider or a single number for simple slider.
   */
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.number])
};

export default Slider;
