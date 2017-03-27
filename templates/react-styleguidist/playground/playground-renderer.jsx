import React, { PropTypes } from 'react';
import Editor from 'rsg-components/Editor';
import Preview from 'rsg-components/Preview';
import EventIndicatorRenderer from 'components/indicators/event-indicator/event-indicator';
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
              <EventIndicatorRenderer
                key={name}
                colorIndex={i}
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
        { indicators }
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
  grid: PropTypes.string.isRequired,
  showCode: PropTypes.bool.isRequired,
  evalInContext: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onCodeToggle: PropTypes.func.isRequired
};

export default PlaygroundRenderer;
