import React from 'react';
import PropTypes from 'prop-types';
import ToggleRenderer from './toggle-renderer';

import './toggle.css';

/**
 * Toggle (switch) control
 */
class Toggle extends React.Component {
  /**
   * constructor - create new Tabs
   * @param {Object} props properties passed to component
   */
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };

    this._handleChange = this._handleChange.bind(this);
  }

  /**
   * Callback function for selection change
   * @param {string} newValue The new value (on/off)
   */
  _handleChange(newValue) {
    // call the user defined callback
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(newValue);
    }

    this.setState({
      value: newValue
    });
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#render}
   * @return {object} JSX for this component
   */
  render() {
    return (
      <ToggleRenderer
        label={this.props.label}
        onChange={this._handleChange}
        texts={this.props.texts}
        theme={this.props.theme}
        type={this.props.type}
        value={this.state.value} />
    );
  }
}

Toggle.defaultProps = {
  label: '',
  onChange: null,
  texts: ['ON', 'OFF'],
  theme: 'dark',
  type: 'regular',
  value: true
};

Toggle.propTypes = {
  /**
   * Label for the toggle
   */
  label: PropTypes.string,
  /**
   * Callback when the toggle changes value
   */
  onChange: PropTypes.func,
  /**
   * Array of 2 strings to display in the toggle
   */
  texts: PropTypes.arrayOf(PropTypes.string),
  /**
   * Theme name for component
   */
  theme: PropTypes.oneOf(['dark', 'light']),
  /**
   * Sets the label type
   */
  type: PropTypes.oneOf(['regular', 'bold']),
  /**
   * Initial value
   */
  value: PropTypes.bool
};

export default Toggle;
