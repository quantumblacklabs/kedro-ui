import React, { PropTypes } from 'react';
import classnames from 'classnames';

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
      value: this.props.value,
      colors: undefined
    };

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
   * _handleChanged - updates the state with the value from the slider and triggers the passed on change callback.
   * @param  {object} event
   */
  _handleChanged(event) {
    this.setState({
      value: event.target.value
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event);
    }
  }

  /**
   * _updatePercentage - injects the CSS variables into the child to correctly update the input
   */
  _updatePercentage() {
    const fill = this.state.colors ? this.state.colors.fill : 'transparent';
    const background = this.state.colors ? this.state.colors.background : 'transparent';

    this._lineFilled.style.setProperty('background', `
      linear-gradient(to right,
      ${background} 0,
      ${fill} 0,
      ${fill} ${this._getPercentage()}%,
      ${background} 0)
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
      <div
        className={classnames(
          'cbn-slider',
          'cbn-slider-single',
          `cbn-theme--${this.props.theme}`)}>
        <div className='cbn-slider__box'>
          <div
            ref={lineFilled => { this._lineFilled = lineFilled; }}
            className='cbn-slider__line' />
          <input
            className='cbn-slider__input'
            type='range'
            name={this.props.name}
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            value={this.state.value}
            onChange={this._handleChanged} />
        </div>
        {hiddenElements}
      </div>
    );
  }
}

SliderRenderer.defaultProps = {
  max: 100,
  min: 0,
  name: 'slider',
  onChange: undefined,
  step: 1,
  theme: 'light',
  value: 50
};

SliderRenderer.propTypes = {
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
   * Theme of the component, either 'dark' or 'light'.
   */
  theme: PropTypes.oneOf(['dark', 'light']),
  /**
   * The pre-selected value of the slider.
   */
  value: PropTypes.number
};

export default SliderRenderer;
