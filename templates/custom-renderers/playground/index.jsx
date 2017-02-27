import React, { PropTypes } from 'react';
import Editor from 'rsg-components/Editor';
import Preview from 'rsg-components/Preview';
import classnames from 'classnames';

import './styles.css';

const _PlaygroundRenderer = ({ code, grid, showCode, evalInContext, onChange, onCodeToggle, onGridToggle }) => (
	<div className='cbn-sg-playground'>
		<div className={ classnames('cbn-sg-playground__preview', { 'cbn-sg-playground__preview--grid': grid }) }>
      <div className='cbn-sg-gutter'>
          <h1>grid: { grid }</h1>
		     <Preview code={code} evalInContext={evalInContext} />
      </div>
      <div className='cbn-sg-gutter'>
        <div className='cbn-sg-controls'>
          {showCode ? (
            <button className='cbn-sg-btn' type='button' onClick={onCodeToggle}>Hide code</button>
          ) : (
            <button className='cbn-sg-btn' type='button' onClick={onCodeToggle}>Show code</button>
          )}
          <button className='cbn-sg-btn' type='button' onClick={onGridToggle}>Grid</button>
          <button className='cbn-sg-btn' type='button' onClick={() => console.log('not implemented yet')}>Reset</button>
        </div>
      </div>
		</div>
		<div className={ classnames('cbn-sg-playground__code', { 'cbn-sg-playground__code--open': showCode }) }>
      <div className='cbn-sg-gutter'>
				<Editor code={code} onChange={onChange} />
      </div>
		</div>
	</div>
);

const PlaygroundRenderer = React.createClass({

  getInitialState() {
    return { grid: false };
  },

  _handleGridToggle() {
    this.setState({
      grid: !this.state.grid
    });
  },

  render() {
    return _PlaygroundRenderer({
      ...this.props,
      grid: this.state.grid,
      onGridToggle: this._handleGridToggle
    });
  }
});


PlaygroundRenderer.propTypes = {
	code: PropTypes.string.isRequired,
	showCode: PropTypes.bool.isRequired,
	evalInContext: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onCodeToggle: PropTypes.func.isRequired,
};

export default PlaygroundRenderer;
