import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Input from 'components/input';

/**
 * Creates a single slider component consisting of single thumb and number input.
 */
class SliderRenderer extends React.Component {
  /**
   * constructor - create new component with given props
   * @param  {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value
    };

    this._handleChanged = this._handleChanged.bind(this);
    this._handleBlured = this._handleBlured.bind(this);
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
      this.props.onChange(undefined, { min: 0, max: this.state.value });
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
   * _updateValue - updates the state and calls the on change callback
   * @param {object} event
   * @param {number} value the value of the new range
   */
  _updateValue(event, value) {
    this.setState({
      value
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event, { min: 0, max: value });
    }
  }

  /**
   * _handleChanged - updates the state with the new value from the slider
   * @param  {object} event
   */
  _handleChanged(event) {
    // check if the value is a number and parse it from the event
    const value = isNaN(parseFloat(event.target.value)) ? 0 : parseFloat(event.target.value);

    this._updateValue(event, value);
  }

  /**
   * _handleFocused - updates the state with the new value from the input field;
   * If slider is stepped, it changes the value to the correct one and then calls the update
   * @param  {object} event
   */
  _handleBlured(event, { value }) {
    const { max, min, step } = this.props;
    // check if the value is a number and parse it from the event
    let inputValue = isNaN(parseFloat(value)) ? 0 : parseFloat(value);
    // if the value is out of range, set the max or min value as the new value
    if (inputValue > max) {
      inputValue = max;
    } else if (inputValue < min) {
      inputValue = min;
    }

    // if the slider is set to be stepped, find the correct nearest step value
    const normalisedValue = (step !== 1 && event.target.value !== '')
      ? (min % step) + (Math.round(inputValue / step) * step)
      : inputValue;

    this._updateValue(event, normalisedValue);
  }

  /**
   * _updatePercentage - injects the CSS variables into the child to correctly update the input track
   */
  _updatePercentage() {
    this._lineFilled.style.setProperty('background', `
      linear-gradient(to right,
      ${this.props.backgroundColor} 0,
      ${this.props.fillColor} 0,
      ${this.props.fillColor} ${this.props.percentage(this.state.value, this.props.min, this.props.max)}%,
      ${this.props.backgroundColor} 0)
     `);
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#render}
   * @return {object} JSX for this component
   */
  render() {
    console.log('inputted value - ', this.state.value);

    return (
      <div className='cbn-slider__wrapper'>
        <div
          className={classnames(
            'cbn-slider__label',
            'cbn-slider__label--single')}>
          {this.props.label}
        </div>
        <div className='cbn-slider__box'>
          <div className='cbn-slider__ticks'>
            {this.props.tickSymbols}
            {this.props.tickNumbers}
          </div>
          <div
            ref={lineFilled => { this._lineFilled = lineFilled; }}
            className='cbn-slider__line' />
          <input
            className='cbn-slider__input'
            type='range'
            list={this.props.listId}
            name={this.props.name}
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            value={this.state.value}
            onChange={this._handleChanged} />
        </div>
        <div
          className={classnames(
            'cbn-slider__number-input',
            'cbn-slider__number-input--single')}>
          <Input
            value={this.state.value.toString()}
            onBlur={this._handleBlured} />
        </div>
      </div>
    );
  }
}

SliderRenderer.defaultProps = {
  backgroundColor: 'transparent',
  fillColor: 'transparent',
  label: '',
  listId: 'slider-simple-list',
  max: 100,
  min: 0,
  name: 'slider',
  onChange: undefined,
  percentage: undefined,
  step: 1,
  tickNumbers: undefined,
  tickSymbols: undefined,
  value: 50
};

SliderRenderer.propTypes = {
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
   * The pre-selected value of the slider.
   */
  value: PropTypes.number
};

export default SliderRenderer;
