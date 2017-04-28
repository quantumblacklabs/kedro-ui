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
        type={this.props.type}
        theme={this.props.theme}
        value={this.state.value} />
    );
  }
}

Toggle.defaultProps = {
  label: '',
  onChange: null,
  type: 'regular',
  theme: 'dark',
  value: 'on'
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
  value: PropTypes.oneOf(['on', 'off'])
};

export default Toggle;
