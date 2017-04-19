import React, { PropTypes } from 'react';
import Link from 'rsg-components/Link';
import classnames from 'classnames';

import './styles.css';

const ReactComponentRenderer = ({
  classes,
	name,
	slug,
	pathLine,
	description,
	props,
	methods,
	examples,
	isolated = false
}) => {

  const str = description ? description.props.text : '';
  const isAnimated = /\(ANIMATED\)/.test(str);

  return (
    <div className={ classnames('cbn-sg__root', { 'is-animated': isAnimated }) } id={ slug }>
      <div className={ 'cbn-sg__meta' }>
        <header className={ 'cbn-sg__header' }>
          <section className={ 'cbn-sg__section cbn-sg-gutter' }>
            <span>Components /</span>
            <a className={ 'cbn-sg__anchor' } href={ '#' + name }>
              <h2 className={ 'cbn-sg__heading' }>{ name }</h2>
            </a>
          </section>
          <nav className='cbn-sg__component-nav'>
            <a href='#'>Definition</a>
            <a href='#'>Best Practice</a>
            <a href='#'>Implementation</a>
            <a href='#'>Variants</a>
          </nav>
        </header>
        <section className={ 'cbn-sg__section cbn-sg-gutter' }>
          <div className={ 'cbn-sg__description' }>
            <h2>Definition</h2>
            { description }
          </div>
          <section className={ 'cbn-sg__section cbn-sg-gutter' }>
            <div className={ 'cbn-sg__gallery' }></div>
          </section>
          <div className={ 'cbn-sg__best-practice' }>
            <h2>Best practice</h2>
            <div>
              <h4>Dos</h4>
              <ul>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
          </div>
          <div>
            <h4>Don'ts</h4>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
        </section>
        <section className={ 'cbn-sg__section cbn-sg-gutter' }>
          <div className={ 'cbn-sg__links' }>
            <h2>Implementation</h2>
          {isolated ? (
            <Link href='/'>← Back</Link>
          ) : (
            <Link href={'#!/' + slug}>Open isolated ⇢</Link>
          )}
          </div>
          <p className={ 'cbn-sg__pathLine' }>
            {pathLine}
          </p>
          <div className={ 'cbn-sg__props' }>
            { props }
          </div>
        </section>
      </div>

      {examples && (
        <div className={ 'cbn-sg__examples' }>
          <div className='cbn-sg-gutter'><h2>Variants</h2></div>
          { examples }
        </div>
        )}
      {methods && (
				<div className={ 'cbn-sg__methods' }>
					<div className='cbn-sg-gutter'><h3>Methods</h3></div>
					{methods}
				</div>
			)}
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
