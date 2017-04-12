import React, { PropTypes } from 'react';
import classnames from 'classnames';

import './slider-renderer.css';

import './slider.css';

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
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#render}
   * @return {object} JSX for this component
   */
  render() {
    return (
      <div
        className={classnames(
          'cbn-slider',
          'cbn-slider-single',
          `cbn-slider--${this.props.theme}`
        )}>
        <input
          className='cbn-slider__input'
          type='range'
          name={this.props.name}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          value={this.state.value}
          onChange={this._handleChanged} />
        <div
          className='cbn-slider__filled'
          style={{}} />
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
