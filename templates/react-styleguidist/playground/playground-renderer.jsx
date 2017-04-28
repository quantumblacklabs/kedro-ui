import React from 'react';
import PropTypes from 'prop-types';
import Editor from 'rsg-components/Editor';
import Preview from 'rsg-components/Preview';
import EventIndicator from 'components/indicators/event-indicator';
import Dropdown from 'components/menus/dropdown';
import MenuOption from 'components/menus/menu-option';

import classnames from 'classnames';
import _ from 'lodash';

/**
 * Creates the Playground for live code editing.
 */
const PlaygroundRenderer = ({
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

  const indicators = (!_.isEmpty(callbackMeta))
    && (
      <div className={classnames('cbn-sg-playground__events', { 'cbn-sg-playground__events--open': true })}>
        {
          Object.keys(callbackMeta)
            .map((name, i) => (
              <EventIndicator
                key={name}
                colorIndex={i}
                colorsCount={Object.keys(callbackMeta).length}
                count={callbackMeta[name].count}
                name={name}
                theme={themes[activeThemeIndex]} />
            )
          )
        }
      </div>
    );

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
        { indicators }
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
      <div className={classnames('cbn-sg-playground__code', { 'cbn-sg-playground__code--open': showCode })}>
        <div className='cbn-sg-gutter'>
          <Editor code={code} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

PlaygroundRenderer.propTypes = {
  activeThemeIndex: PropTypes.number.isRequired,
  callbackMeta: PropTypes.object.isRequired,
  code: PropTypes.string.isRequired,
  grid: PropTypes.bool.isRequired,
  showCode: PropTypes.bool.isRequired,
  evalInContext: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onCallbackFired: PropTypes.func.isRequired,
  onCodeToggle: PropTypes.func.isRequired,
  onGridToggled: PropTypes.func.isRequired,
  onResetTapped: PropTypes.func.isRequired,
  onThemeChanged: PropTypes.func.isRequired,
  themes: PropTypes.array.isRequired
};

export default PlaygroundRenderer;
