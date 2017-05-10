import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from 'lodash/fp';

import SliderRenderer from './slider-renderer';
import RangedSliderRenderer from './ranged-slider-renderer';

import './slider-common.css';

/**
 * getPercentage - calculate the percentage of the given value
 * @param {number} value the value to be calculated the percentage for
 * @param {number} min minimum value of the range
 * @param {number} max maximum value of the range
 * @return {number} percentage of the value given
 */
const getPercentage = (value, min, max) => (Math.abs(value - min) / Math.abs(max - min)) * 100;

/**
 * Creates a slider component, depending on the given type, it is either a single or multiple slider.
 */
class Slider extends React.Component {
  /**
   * constructor - create new component with given props
   * @param  {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      values: undefined
    };

    this._id = uniqueId(`cbn-slider--${this.props.type}-`);

    this._handleChanged = this._handleChanged.bind(this);
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#componentdidmount}
   * @return {object} JSX for this component
   */
  componentDidMount() {
    // store the correct values
    if (!this.state.values) {
      this._setValuesFromHidden();
    }
  }

  /**
   * _setValuesFromHidden - store the values in the state for usage in gradient and ticks rendering
   */
  _setValuesFromHidden() {
    const fill = window.getComputedStyle(this._hiddenFill).backgroundColor;
    const background = window.getComputedStyle(this._hiddenBackground).backgroundColor;
    const tickNumberWidth = window.getComputedStyle(this._hiddenTickNumber).width;
    const sliderLineWidth = window.getComputedStyle(this._hiddenLine).width;

    this.setState({
      values: {
        fill,
        background,
        tickNumberWidth: parseFloat(tickNumberWidth.replace('px', '')),
        sliderLineWidth: parseFloat(sliderLineWidth.replace('px', ''))
      }
    });
  }

  /**
   * _handleChanged - updates the ticks and calls the change passed in props
   * @param  {object} event
   * @param  {object} payload min and max values selected in the slider
   */
  _handleChanged(e, { min, max }) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(e, { min, max });
    }
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#render}
   * @return {object} JSX for this component
   */
  render() {
    const { theme, type, step } = this.props;
    const { values } = this.state;

    const hiddenElements = !values && (
      <div className='cbn-slider__hidden'>
        <div
          ref={hiddenFill => { this._hiddenFill = hiddenFill; }}
          className={classnames('cbn-slider__hidden--fill', `cbn-theme--${theme}`)} />
        <div
          ref={hiddenBackground => { this._hiddenBackground = hiddenBackground; }}
          className={classnames('cbn-slider__hidden--background', `cbn-theme--${theme}`)} />
        <div
          ref={hiddenLine => { this._hiddenLine = hiddenLine; }}
          className='cbn-slider__hidden--slider-line' />
        <div
          ref={hiddenTickNumber => { this._hiddenTickNumber = hiddenTickNumber; }}
          className='cbn-slider__hidden--tick-number' />
      </div>
    );

    // determine the type of correct renderer
    const RendererType = type === 'single' ? SliderRenderer : RangedSliderRenderer;

    return (
      <div
        className={classnames(
          'cbn-slider',
          `cbn-slider--${type}`,
          `cbn-theme--${theme}`,
          { 'cbn-slider--stepped': step !== 1 })}>
        <RendererType
          backgroundColor={values ? values.background : 'transparent'}
          fillColor={values ? values.fill : 'transparent'}
          listId={this._id}
          label={this.props.label}
          min={this.props.min}
          max={this.props.max}
          name={this.props.name}
          onChange={this._handleChanged}
          percentage={getPercentage}
          sliderWidth={values ? values.sliderLineWidth : 0}
          step={step}
          tickNumberWidth={values ? values.tickNumberWidth : 0}
          tickStep={this.props.tickStep}
          theme={theme}
          value={this.props.value} />
        {hiddenElements}
      </div>
    );
  }
}

Slider.defaultProps = {
  label: '',
  max: 100,
  min: 0,
  name: 'slider',
  onChange: null,
  step: 1,
  tickStep: 0,
  theme: 'light',
  type: 'single',
  value: undefined
};

Slider.propTypes = {
  /**
   * Label to be shown for the slider.
   */
  label: PropTypes.string,
  /**
   * Minimal value of the slider.
   */
  min: PropTypes.number,
  /**
   * Maximum value of the slider.
   */
  max: PropTypes.number,
  /**
   * Name of the slider, which is submitted with form data.
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
