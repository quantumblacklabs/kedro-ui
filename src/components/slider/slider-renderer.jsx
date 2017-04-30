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
   * _handleChanged - updates the state with the value from the slider and triggers the passed on change callback
   * @param  {object} event
   */
  _handleChanged(event) {
    const value = isNaN(parseFloat(event.target.value)) ? 0 : parseFloat(event.target.value);

    this.setState({
      value
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event, { min: 0, max: value });
    }
  }

  /**
   * _updatePercentage - injects the CSS variables into the child to correctly update the input track
   */
  _updatePercentage() {
    this._lineFilled.style.setProperty('background', `
      linear-gradient(to right,
      ${this.props.backgroundColor} 0,
      ${this.props.fillColor} 0,
      ${this.props.fillColor} ${this._getPercentage()}%,
      ${this.props.backgroundColor} 0)
     `);
  }

  /**
   * _getPercentage - calculate the percentage of the range
   * @return {number} percentage of the value selected in the slider
   */
  _getPercentage() {
    return (this.state.value - this.props.min) * ((this.props.max - this.props.min) / 100);
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#render}
   * @return {object} JSX for this component
   */
  render() {
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
            onChange={this._handleChanged} />
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
