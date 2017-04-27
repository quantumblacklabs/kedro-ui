import React from 'react';
import PropTypes from 'prop-types';

/**
 * Creates a single slider component.
 */
class SliderRenderer extends React.Component {
  /**
   * constructor - create new component with given props.
   * @param  {object} props
   */
  constructor(props) {
    super(props);

    this.displayName = 'SliderRenderer';

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
      this.props.onChange(undefined, 0, this.state.value);
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
   * _handleChanged - updates the state with the value from the slider and triggers the passed on change callback.
   * @param  {object} event
   */
  _handleChanged(event) {
    const value = parseFloat(event.target.value);

    this.setState({
      value
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event, 0, value);
    }
  }

  /**
   * _updatePercentage - injects the CSS variables into the child to correctly update the input
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
   */
  _getPercentage() {
    return this.state.value * ((this.props.max - this.props.min) / 100);
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#render}
   * @return {object} JSX for this component
   */
  render() {
    return (
      <div className='cbn-slider__box'>
        <div className='cbn-slider__track-line'>
          <div
            ref={lineFilled => { this._lineFilled = lineFilled; }}
            className='cbn-slider__line' />
          {this.props.tickSymbols}
        </div>
        {this.props.tickNumbers}
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
    );
  }
}

SliderRenderer.defaultProps = {
  backgroundColor: 'transparent',
  fillColor: 'transparent',
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
   * The pre-selected value of the slider.
   */
  value: PropTypes.number
};

export default SliderRenderer;
