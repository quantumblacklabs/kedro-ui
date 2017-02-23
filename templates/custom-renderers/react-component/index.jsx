import React, { PropTypes } from 'react';
import classnames from 'classnames';

import './styles.css';

const ReactComponentRenderer = ({ name, pathLine, description, props, examples, sidebar }) => {

  const str = description ? description.props.text : '';
  const isAnimated = /\(ANIMATED\)/.test(str);

  return (
    <div className={ classnames('cbn-sg__root', { 'is-animated': isAnimated }) } id={ name }>
      <div className={ 'cbn-sg__meta' }>
        <header className={ 'cbn-sg__header' }>
          <a className={ 'cbn-sg__anchor' } href={ '#' + name }>
            <h2 className={ 'cbn-sg__heading' }>{ name }</h2>
          </a>
          <div className={ 'cbn-sg__description' }>
            { description }
          </div>
          <p className={ 'cbn-sg__pathLine' }>
            {sidebar ? (
              <a className={ 'cbn-sg__isolatedLink' } href={'#!/' + name} title="Open isolated">⇢</a>
            ) : (
              <a className={ 'cbn-sg__isolatedLink' } href="/" title="Back">←</a>
            )}
            {pathLine}
          </p>
        </header>
        <div className={ 'cbn-sg__props' }>
          { props }
        </div>
      </div>
      { examples && (
        <div className={ 'cbn-sg__examples' }>
          { examples }
        </div>
        )
      }
    </div>
  );
};

ReactComponentRenderer.propTypes = {
  name: PropTypes.string.isRequired,
  pathLine: PropTypes.string.isRequired,
  description: PropTypes.node,
  props: PropTypes.node,
  examples: PropTypes.node,
  sidebar: PropTypes.bool,
};

export default ReactComponentRenderer;
