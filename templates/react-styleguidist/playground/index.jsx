import React from 'react';
import PlaygroundRenderer from './playground-renderer';

import './styles.css';

const Playground = React.createClass({

  getInitialState() {
    return {
      activeThemeIndex: 0,
      grid: false,
      themes: ['light', 'dark'],
      callbackMeta: {}
    };
  },

  _handleEventCallbackFired({ name }) {
    this._incCallbackCounts(name);
  },

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
  },

  _handleGridToggled() {
    this.setState({
      grid: !this.state.grid
    });
  },

  _handleResetTapped() {
    console.log('Implement reset');
  },

  _handleThemeChanged(e) {
    this.setState({
      activeThemeIndex: e.value
    });
  },

  render() {
    return PlaygroundRenderer({
      ...this.props,
      activeThemeIndex: this.state.activeThemeIndex,
      callbackMeta: this.state.callbackMeta,
      grid: this.state.grid,
      onCallbackFired: this._handleEventCallbackFired,
      onGridToggled: this._handleGridToggled,
      onResetTapped: this._handleResetTapped,
      onThemeChanged: this._handleThemeChanged,
      themes: this.state.themes
    });
  }
});

export default Playground;
