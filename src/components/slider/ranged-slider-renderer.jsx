import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Input from 'components/input';

import './ranged-slider-renderer.css';

/**
 * Creates a ranged slider component consisting of two thumbs and two number inputs.
 */
class RangedSliderRenderer extends React.Component {
  /**
   * constructor - create new component with given props
   * @param  {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      minRange: this.props.value[0],
      maxRange: this.props.value[1]
    };

    this._handleMaxChanged = this._handleMaxChanged.bind(this);
    this._handleMinChanged = this._handleMinChanged.bind(this);

    this._handleMaxBlured = this._handleMaxBlured.bind(this);
    this._handleMinBlured = this._handleMinBlured.bind(this);

    this._updateMinValue = this._updateMinValue.bind(this);
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#componentdidmount}
   * @return {object} JSX for this component
   */
  componentDidMount() {
    this._updatePercentage();

    // fire the onchange with the range values
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(undefined, { min: this.state.minRange, max: this.state.maxRange });
    }
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#componentdidupdate}
   * @return {object} JSX for this component
   */
  componentDidUpdate() {
    this._updatePercentage();
  }

  /**
   * _handleMinChanged - checks whether the passed minimum value is not greater than max and larger than min in props
   * @param  {number} value value taken from the slider or number input which needs to be checked before updating state
   * @return {number} updated value - new correct minimum value
   */
  _checkMinValue(value) {
    // check if the value is a number and parse it from the event
    let minRange = isNaN(parseFloat(value)) ? 0 : parseFloat(value);
    // if the value is out of range, set the min value as a new value
    minRange = minRange < this.props.min ? this.props.min : minRange;
    // the min value cannot overlap the max value
    minRange = minRange < this.state.maxRange ? minRange : this.state.maxRange;

    return minRange;
  }

  /**
   * _handleMinChanged - checks whether the passed maximum value is not smaller than min and smaller than max in props
   * @param  {number} value value taken from the slider or number input which needs to be checked before updating state
   * @return {number} updated value - new correct maximum value
   */
  _checkMaxValue(value) {
    // check if the value is a number and parse it from the event
    let maxRange = isNaN(parseFloat(value)) ? 0 : parseFloat(value);
    // if the value is out of range, set the max value as a new value
    maxRange = maxRange > this.props.max ? this.props.max : maxRange;
    // the max value cannot overlap the min value
    maxRange = this.state.minRange < maxRange ? maxRange : this.state.minRange;

    return maxRange;
  }

  /**
   * _updateMinValue - updates the state with new minimum value of minRange and maxRangeDisabled
   * @param  {number} value new minimum value
   */
  _updateMinValue(value) {
    this.setState({
      minRange: value,
      maxRangeDisabled: (value === this.state.maxRange) && (this.state.maxRange === this.props.max)
    });
  }

  /**
   * _handleMinChanged - gets the minimum range value and updates the state and calls the onchange passed from props
   * @param  {object} event
   */
  _handleMinBlured(event, { value }) {
    const { min, step } = this.props;
    const minRange = this._checkMinValue(value);

    // if the slider is set to be stepped, find the correct nearest step value
    const normalisedValue = (step !== 1 && event.target.value !== '')
      ? (min % step) + (Math.round(minRange / step) * step)
      : minRange;

    this._updateMinValue(normalisedValue);

    // NOTE: should this be triggered?? from the slider's point of view, the value changed
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event, { min: normalisedValue, max: this.state.maxRange });
    }
  }

  /**
   * _handleMinChanged - updates the minimum range in the state and calls the onchange passed from props
   * @param  {object} event
   */
  _handleMinChanged(event) {
    const minRange = this._checkMinValue(event.target.value);

    this._updateMinValue(minRange);

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event, { min: minRange, max: this.state.maxRange });
    }
  }

  /**
   * _handleMaxBlured - gets the maximum range value in the state and calls the onchange passed from props
   * @param  {object} event
   */
  _handleMaxBlured(event) {
    const { min, step } = this.props;
    const maxRange = this._checkMaxValue(event.target.value);

    // if the slider is set to be stepped, find the correct nearest step value
    const normalisedValue = (step !== 1 && event.target.value !== '')
      ? (min % step) + (Math.round(maxRange / step) * step)
      : maxRange;

    this.setState({
      maxRange: normalisedValue
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event, { min: this.state.minRange, max: normalisedValue });
    }
  }

  /**
   * _handleMaxChanged - updates the maximum range in the state and calls the onchange passed from props
   * @param  {object} event
   */
  _handleMaxChanged(event) {
    const maxRange = this._checkMaxValue(event.target.value);

    this.setState({
      maxRange
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event, { min: this.state.minRange, max: maxRange });
    }
  }

  /**
   * _updatePercentage - injects the CSS variables into the child to correctly update the input
   */
  _updatePercentage() {
    const min = this.props.min;
    const max = this.props.max;

    this._lineFilled.style.setProperty('background', `
      linear-gradient(to right,
      ${this.props.backgroundColor} ${this.props.percentage(this.state.minRange, min, max)}%,
      ${this.props.fillColor} 0,
      ${this.props.fillColor} ${this.props.percentage(this.state.maxRange, min, max)}%,
      ${this.props.backgroundColor} 0)
    `);
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#render}
   * @return {object} JSX for this component
   */
  render() {
    const sliderLabel = this.props.label && (
      <div
        className={classnames(
          'cbn-slider__label',
          'cbn-slider__label--multiple')}>
        {this.props.label}
      </div>
    );

    return (
      <div
        className={classnames(
          'cbn-slider__wrapper',
          'cbn-slider__wrapper--multiple')}>
        {sliderLabel}
        <div className='cbn-slider__box-inputs'>
          <div
            className={classnames(
              'cbn-slider__number-input',
              'cbn-slider__number-input--min',
              'cbn-slider__number-input--multiple')}>
            <Input
              value={this.state.minRange.toString()}
              onBlur={this._handleMinBlured} />
          </div>
          <div className='cbn-slider__box'>
            <div className='cbn-slider__ticks'>
              {this.props.tickNumbers}
              {this.props.tickSymbols}
            </div>
            <div
              ref={lineFilled => { this._lineFilled = lineFilled; }}
              className='cbn-slider__line' />
            <input
              className={classnames(
                'cbn-slider__input',
                'cbn-slider__input--multiple',
                'cbn-slider__input--min'
              )}
              type='range'
              name={this.props.name}
              min={this.props.min}
              max={this.props.max}
              step={this.props.step}
              value={this.state.minRange}
              onChange={this._handleMinChanged}
              multiple />
            <input
              className={classnames(
                'cbn-slider__input',
                'cbn-slider__input--multiple',
                'cbn-slider__input--max',
                { 'cbn-slider__input--max-disabled': this.state.maxRangeDisabled }
              )}
              type='range'
              list={this.props.listId}
              name={this.props.name}
              min={this.props.min}
              max={this.props.max}
              step={this.props.step}
              value={this.state.maxRange}
              onChange={this._handleMaxChanged}
              multiple />
          </div>
          <div
            className={classnames(
              'cbn-slider__number-input',
              'cbn-slider__number-input--max',
              'cbn-slider__number-input--multiple')}>
            <Input
              value={this.state.maxRange.toString()}
              onBlur={this._handleMaxBlured} />
          </div>
        </div>
      </div>
    );
  }
}

RangedSliderRenderer.defaultProps = {
  backgroundColor: 'transparent',
  fillColor: 'transparent',
  label: '',
  listId: 'slider-multiple-list',
  max: 100,
  min: 0,
  name: 'slider',
  onChange: null,
  percentage: undefined,
  step: 1,
  tickNumbers: undefined,
  tickSymbols: undefined,
  value: [0, 50]
};

RangedSliderRenderer.propTypes = {
  /**
   * Color used for the background of the range.
   */
  backgroundColor: PropTypes.string,
  /**
   * Color used for highlighting the selected range.
   */
  fillColor: PropTypes.string,
  /**
   * Label to be shown for the slider.
   */
  label: PropTypes.string,
  /**
   * The ID used for list attribute - ticks.
   */
  listId: PropTypes.string,
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
   * Function that calculates the percentage value of slider's range for given number.
   */
  percentage: PropTypes.func,
  /**
   * Step of the slider.
   */
  step: PropTypes.number,
  /**
   * Numbers indicating the ticks of the slider.
   */
  tickNumbers: PropTypes.element,
  /**
   * Symbols indicating the ticks of the slider, positioned in the middle of the slider.
   */
  tickSymbols: PropTypes.element,
  /**
   * Min and max values for the value.
   */
  value: PropTypes.arrayOf(PropTypes.number)
};

export default RangedSliderRenderer;
