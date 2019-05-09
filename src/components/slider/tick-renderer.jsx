import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { rangeStep } from 'lodash/fp';

import './slider-common.css';

/**
 * Creates a datalist component for a slider, depending on the given type,
 * its options are either made of graphical symbols or numbers.
 */
class TickRenderer extends React.Component {
  /**
   * _getTicks - creates the ticks from which the value, colour and step range is rendered
   * @param {number} min minimum value of the selected range
   * @param {number} max maximum value of the selected range
   * @return {array} tick values including the value, colour and step range
   */
  _getTicks(rangeMin, rangeMax) {
    const { min, max, step } = this.props;

    const tickStep = step || max;
    // create a range of values
    const tickValues = rangeStep(tickStep, min, max);
    // and add the max into the array
    tickValues.push(max);

    return tickValues.map(tickValue => (
      {
        range: rangeMin <= tickValue && tickValue <= rangeMax,
        value: tickValue
      }
    ));
  }

  /**
   * _getNumberShift - calculates the shift of a tick number from the left side of the slider
   * @param {number} value the value displayed as a tick
   * @param {number} index the index number of the given value
   * @param {number} lastValueIndex index of the tick
   * @return {number} shift in pixels from the left side of the slider
   */
  _getNumberShift(value) {
    const decimalValue = this.props.percentage(value, this.props.min, this.props.max) / 100;

    // shift the number by half of the box's width
    const numberBoxShift = this.props.numberWidth / 2;

    return (decimalValue * this.props.width) - numberBoxShift;
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#render}
   * @return {object} JSX for this component
   */
  render() {
    const { type } = this.props;

    const ticks = this._getTicks(this.props.minRange, this.props.maxRange);
    const tickClass = `${this.props.componentPrefix}__tick-${type}`;

    return (
      <datalist
        id={this.props.id}
        className={`${tickClass}-group`}>
        {ticks.map((tick, i) => (
          <option
            key={`tick-${type}-${tick.value}`}
            className={classnames(
              tickClass,
              { [`${tickClass}--min`]: i === 0 },
              { [`${tickClass}--max`]: i === (ticks.length - 1) },
              { [`${tickClass}--range`]: tick.range }
            )}
            value={tick.value}
            style={{
              transform:
              type === 'number'
                ? `translateX(${this._getNumberShift(tick.value)}px)`
                : '0'
            }}>
            { type === 'number' ? tick.value : undefined }
          </option>
        ))}
      </datalist>
    );
  }
}

TickRenderer.defaultProps = {
  id: null,
  min: 0,
  max: 100,
  minRange: 0,
  maxRange: 100,
  numberWidth: 25,
  percentage: null,
  step: 10,
  type: 'numbers'
};

TickRenderer.propTypes = {
  /**
   * Preix used for class names for ticks.
   */
  componentPrefix: PropTypes.string.isRequired,
  /**
   * Id of the datalist - should be the 'list' value used on an slider range input.
   */
  id: PropTypes.string,
  /**
   * Minimal value of the slider.
   */
  min: PropTypes.number,
  /**
   * Maximum value of the slider.
   */
  max: PropTypes.number,
  /**
   * Minimal range value of the slider.
   */
  minRange: PropTypes.number,
  /**
   * Maximum range value of the slider.
   */
  maxRange: PropTypes.number,
  /**
   * Width available for each number tick.
   */
  numberWidth: PropTypes.number,
  /**
   * Function that calculates the percentage value of slider's range for given number.
   */
  percentage: PropTypes.func,
  /**
   * Step between the ticks of the slider.
   */
  step: PropTypes.number,
  /**
   * Type of the slider - either single input slider or multiple input (ranged) slider
   */
  type: PropTypes.oneOf(['symbol', 'number']),
  /**
   * Width available for the ticks.
   */
  width: PropTypes.number.isRequired
};

export default TickRenderer;
