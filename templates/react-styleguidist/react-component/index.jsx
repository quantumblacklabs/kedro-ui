import React, { PropTypes } from 'react';
import Link from 'rsg-components/Link';

import './styles.css';

const scrollTo = e => {
  const targetId = e.target.getAttribute('data-target');
  const targetDOM = document.getElementById(targetId);
  if (targetDOM) {
    const top = targetDOM.getBoundingClientRect().top;
    const scrollY = window.scrollY;
    window.scrollTo(0, top + scrollY - 80);
  }
};

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

  return (
    <div className={ 'cbn-sg__root' } id={ slug }>
      <div className={ 'cbn-sg__meta' }>
        <header className={ 'cbn-sg__header' }>
          <section className={ 'cbn-sg__section cbn-sg-gutter' }>
            { isolated
              ? <Link href={'#' + slug}>&larr;</Link>
              : <Link href={'#!/' + name}>&rarr;</Link>
            }
            <span>Components /</span>
            <h2 className={ 'cbn-sg__heading' }>{ name }</h2>
          </section>
            <nav className='cbn-sg__component-nav'>
              <a onClick={ scrollTo } data-target={ `${slug}-definition` }>Definition</a>
              <a onClick={ scrollTo } data-target={ `${slug}-implementation` }>Implementation</a>
              <a onClick={ scrollTo } data-target={ `${slug}-variants` }>Demos</a>
            </nav>
        </header>
        <section className={ 'cbn-sg__section cbn-sg-gutter' }>
          <div className={ 'cbn-sg__description' } id={ `${slug}-definition` }>
            <h4 className={ 'cbn-sg-heading-underlined' }>Definition</h4>
            { description }
          </div>
        </section>
        <section style={{ display: 'none' }} className={ 'cbn-sg__section cbn-sg-gutter' } id={ `${slug}-practice` }>
          <h4 className={ 'cbn-sg-heading-underlined' }>Best practice</h4>
          <div className={ 'cbn-sg__best-practice' }>
            <div>
              <h4>Dos</h4>
              <ul className={ 'cbn-sg__dos' }>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div>
              <h4>Don'ts</h4>
              <ul className={ 'cbn-sg__donts' }>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
          </div>
        </section>
        <section className={ 'cbn-sg__section cbn-sg-gutter' } id={ `${slug}-implementation` }>
          <h4 className={ 'cbn-sg-heading-underlined' }>Implementation</h4>
          <p className={ 'cbn-sg__pathLine' }>
            {pathLine}
          </p>
          <div className={ 'cbn-sg__props' }>
            { props }
          </div>
        </section>
      </div>

      {examples && (
        <div className={ 'cbn-sg__examples' } id={ `${slug}-variants` }>
          <div className='cbn-sg-gutter'><h4 className={ 'cbn-sg-heading-underlined' }>Demos</h4></div>
          { examples }
        </div>
        )}
      {methods && (
				<div className={ 'cbn-sg__methods' }>
					<div className='cbn-sg-gutter'><h4>Methods</h4></div>
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
