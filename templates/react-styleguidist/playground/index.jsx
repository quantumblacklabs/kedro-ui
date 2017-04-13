import React from 'react';
import PlaygroundRenderer from './playground-renderer';
import debounce from 'lodash/debounce';

import './styles.css';

class Playground extends React.Component {
  constructor(props) {
    super(props);

    // store initial code for resetting later
    this.initialCode = this.props.code;

    // don't trigger the change on every change, wait to apply
    this._handleCodeChange = debounce(this._handleCodeChange.bind(this), 500);
    this._handleEventCallbackFired = this._handleEventCallbackFired.bind(this);
    this._incCallbackCounts = this._incCallbackCounts.bind(this);
    this._handleGridToggled = this._handleGridToggled.bind(this);
    this._handleResetTapped = this._handleResetTapped.bind(this);
    this._handleThemeChanged = this._handleThemeChanged.bind(this);
    this._handleCodeChange = this._handleCodeChange.bind(this);

    this.state = {
      activeThemeIndex: 1,
      grid: false,
      themes: ['light', 'dark'],
      callbackMeta: {},
      code: this.props.code
    };
  }

  _handleEventCallbackFired({ name }) {
    this._incCallbackCounts(name);
  }

  _incCallbackCounts(name) {
    const { callbackMeta } = this.state;
    const newObj = {};

    if (name in callbackMeta) {
      newObj[name] = {
        count: callbackMeta[name].count + 1,
        active: true
      };

      this.setState({
        callbackMeta: Object.assign(callbackMeta, newObj)
      });
    } else {
      newObj[name] = {
        count: 1,
        active: true
      };

      this.setState({
        callbackMeta: Object.assign(callbackMeta, newObj)
      });
    }
  }

  _handleGridToggled() {
    this.setState({
      grid: !this.state.grid
    });
  }

  _handleResetTapped() {
    this.setState({
      code: this.initialCode
    });
  }

  _handleThemeChanged(e) {
    this.setState({
      activeThemeIndex: e.value
    });
  }

  _handleCodeChange(code) {
    this.setState({
      code
    });
  }

  render() {
    return PlaygroundRenderer({
      ...this.props,
      code: this.state.code,
      activeThemeIndex: this.state.activeThemeIndex,
      callbackMeta: this.state.callbackMeta,
      grid: this.state.grid,
      onCallbackFired: this._handleEventCallbackFired,
      onChange: this._handleCodeChange,
      onGridToggled: this._handleGridToggled,
      onResetTapped: this._handleResetTapped,
      onThemeChanged: this._handleThemeChanged,
      themes: this.state.themes
    });
  }
}

export default Playground;
