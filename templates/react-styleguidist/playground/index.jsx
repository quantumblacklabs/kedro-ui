import React, { PropTypes } from 'react';
import Editor from 'rsg-components/Editor';
import Preview from 'rsg-components/Preview';
import classnames from 'classnames';
import _ from 'lodash';

import './styles.css';

const _PlaygroundRenderer = ({
  activeThemeIndex,
  callbackMeta,
  code,
  grid,
  showCode,
  evalInContext,
  onChange,
  onCallbackFired,
  onCodeToggle,
  onGridToggled,
  onResetTapped,
  onThemeChanged,
  themes
}) => {

  const themeable = true;
  const themedCodeBlocks = themeable ? _.map(themes, t => code.replace(/theme='light'/g, `theme='${t}'`)) : [];

  return (
    <div ref='playground' className='cbn-sg-playground'>
      <div
        className={classnames(
          'cbn-sg-playground__preview',
          `cbn-theme--${themes[activeThemeIndex]}`,
          { 'cbn-sg-playground__preview--grid': grid })}>
        {themeable
          ? _.map(themedCodeBlocks, (c, i) => (
            <section
              key={i}
              className={classnames(
                'cbn-sg-playground__preview-section',
                `cbn-theme--${themes[i]}`,
                { 'cbn-sg-playground__preview-section--show': activeThemeIndex === i })}>
              <div className='cbn-sg-gutter'>
                <Preview code={c} evalInContext={evalInContext} onCallbackFired={onCallbackFired} />
              </div>
            </section>
          ))
          : (
            <div className='cbn-sg-gutter'>
              <Preview code={code} evalInContext={evalInContext} onCallbackFired={onCallbackFired} />
            </div>
          )
        }

        <div className='cbn-sg-gutter'>
          <div className='cbn-sg-controls'>
            {showCode ? (
              <button className='cbn-sg-btn' type='button' onClick={onCodeToggle}>Hide code</button>
            ) : (
              <button className='cbn-sg-btn' type='button' onClick={onCodeToggle}>Show code</button>
            )}
            <button className='cbn-sg-btn' type='button' onClick={onGridToggled}>Baseline Grid</button>
            <button className='cbn-sg-btn' type='button' onClick={onResetTapped}>Reset</button>
            {themeable && (
              <Dropdown onChanged={onThemeChanged} theme={themes[activeThemeIndex]}>
                {_.map(themes, (t, i) => (
                  <MenuOption key={i} primaryText={t} value={i} selected={i === activeThemeIndex} />
                ))}
              </Dropdown>
            )}
          </div>
        </div>
      </div>
      <div className={classnames('cbn-sg-playground__events', { 'cbn-sg-playground__events--open': true })}>
        <div className='cbn-sg-gutter'>
          {_.map(callbackMeta, (callbackObj, propName) => (
            <div key={propName}>
              <div className='cbn-sg-playground__event'>
                <div className='cbn-sg-playground__event-circle'>
                  <div className={classnames(
                      'cbn-sg-playground__event-circle-bg',
                      { 'cbn-sg-playground__event-circle-bg--animate': callbackObj.active })}></div>
                  <div className='cbn-sg-playground__event-number'>
                    { callbackObj.count }
                  </div>
                </div>
                <div className='cbn-sg-playground__event-name'>
                  { propName }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={classnames('cbn-sg-playground__code', { 'cbn-sg-playground__code--open': showCode })}>
        <div className='cbn-sg-gutter'>
          <Editor code={code} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

const PlaygroundRenderer = React.createClass({

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
    return _PlaygroundRenderer({
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

_PlaygroundRenderer.propTypes = {
  code: PropTypes.string.isRequired,
  showCode: PropTypes.bool.isRequired,
  evalInContext: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onCodeToggle: PropTypes.func.isRequired
};

export default PlaygroundRenderer;
