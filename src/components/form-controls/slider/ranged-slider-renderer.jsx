import React from 'react';
import PropTypes from 'prop-types';
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
    this.setState({
      minRange: event.target.value
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event);
    }
  }

  /**
   * _handleTopChanged -
   * @param  {object} event
   */
  _handleTopChanged(event) {
    this.setState({
      maxRange: event.target.value
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event);
    }
  }

  /**
   * _updatePercentage - injects the CSS variables into the child to correctly update the input
   */
  _updatePercentage() {
    const minRange = this._getPercentage(this.state.minRange);
    const maxRange = this._getPercentage(this.state.maxRange);

    this._lineFilled.style.setProperty('background', `
      linear-gradient(to right,
      ${this.props.backgroundColor} ${minRange}%,
      ${this.props.fillColor} 0,
      ${this.props.fillColor} ${maxRange}%,
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
      <div className='cbn-slider__box'>
        <div
          ref={lineFilled => { this._lineFilled = lineFilled; }}
          className='cbn-slider__line' />
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
    );
  }
}

RangedSliderRenderer.defaultProps = {
  backgroundColor: 'transparent',
  fillColor: 'transparent',
  listId: 'slider-multiple-list',
  max: 100,
  min: 0,
  name: 'slider',
  onChange: null,
  step: 1,
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
   * Min and max values for the value.
   */
  value: PropTypes.arrayOf(PropTypes.number)
};

export default RangedSliderRenderer;
