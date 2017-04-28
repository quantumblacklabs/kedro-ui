import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Input from 'components/form-controls/input';

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
      minRange: this.props.value[0],
      maxRange: this.props.value[1]
    };

    this._handleTopChanged = this._handleTopChanged.bind(this);
    this._handleBottomChanged = this._handleBottomChanged.bind(this);
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
      this.props.onChange(undefined, this.state.minRange, this.state.maxRange);
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
   * _handleBottomChanged -
   * @param  {object} event
   */
  _handleBottomChanged(event) {
    const minValue = isNaN(parseFloat(event.target.value)) ? 0 : parseFloat(event.target.value);

    this.setState({
      minRange: minValue < this.state.maxRange ? minValue : this.state.maxRange
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event, minValue, this.state.maxRange);
    }
  }

  /**
   * _handleTopChanged -
   * @param  {object} event
   */
  _handleTopChanged(event) {
    const maxValue = isNaN(parseFloat(event.target.value)) ? 0 : parseFloat(event.target.value);

    this.setState({
      maxRange: this.state.minRange < maxValue ? maxValue : this.state.minRange
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event, this.state.minRange, maxValue);
    }
  }

  /**
   * _updatePercentage - injects the CSS variables into the child to correctly update the input
   */
  _updatePercentage() {
    this._lineFilled.style.setProperty('background', `
      linear-gradient(to right,
      ${this.props.backgroundColor} ${this._getPercentage(this.state.minRange)}%,
      ${this.props.fillColor} 0,
      ${this.props.fillColor} ${this._getPercentage(this.state.maxRange)}%,
      ${this.props.backgroundColor} 0)
    `);
  }

  /**
   * _getPercentage - calculate the percentage of the range
   */
  _getPercentage(value) {
    return value * ((this.props.max - this.props.min) / 100);
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
          'cbn-slider__wrapper',
          'cbn-slider__wrapper--multiple')}>
        <div
          className={classnames(
            'cbn-slider__label',
            'cbn-slider__label--multiple')}>
          {this.props.label}
        </div>
        <div className='cbn-slider__box-inputs'>
          <div
            className={classnames(
              'cbn-slider__number-input',
              'cbn-slider__number-input--min',
              'cbn-slider__number-input--multiple')}>
            <Input
              value={this.state.minRange.toString()}
              onChange={this._handleBottomChanged} />
          </div>
          <div className='cbn-slider__box'>
            <div className='cbn-slider__track-line'>
              <div
                ref={lineFilled => { this._lineFilled = lineFilled; }}
                className='cbn-slider__line' />
              {this.props.tickSymbols}
            </div>
            {this.props.tickNumbers}
            <input
              className={classnames(
                'cbn-slider__input',
                'cbn-slider__input--multiple',
                'cbn-slider__input--bottom'
              )}
              type='range'
              name={this.props.name}
              min={this.props.min}
              max={this.props.max}
              step={this.props.step}
              value={this.state.minRange}
              onChange={this._handleBottomChanged}
              multiple />
            <input
              className={classnames(
                'cbn-slider__input',
                'cbn-slider__input--multiple',
                'cbn-slider__input--top'
              )}
              type='range'
              list={this.props.listId}
              name={this.props.name}
              min={this.props.min}
              max={this.props.max}
              step={this.props.step}
              value={this.state.maxRange}
              onChange={this._handleTopChanged}
              multiple />
          </div>
          <div
            className={classnames(
              'cbn-slider__number-input',
              'cbn-slider__number-input--max',
              'cbn-slider__number-input--multiple')}>
            <Input
              value={this.state.maxRange.toString()}
              onChange={this._handleTopChanged} />
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
