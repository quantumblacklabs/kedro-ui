import React, { PropTypes } from 'react';
import Editor from 'rsg-components/Editor';
import Preview from 'rsg-components/Preview';
import classnames from 'classnames';

import './styles.css';

const _PlaygroundRenderer = ({ code, grid, showCode, evalInContext, onChange, onCodeToggle, onGridToggled, onResetTapped }) => (
	<div ref='playground' className='cbn-sg-playground'>
		<div className={ classnames('cbn-sg-playground__preview', { 'cbn-sg-playground__preview--grid': grid }) }>
      <div className='cbn-sg-gutter'>
		    <Preview code={code} evalInContext={evalInContext} />
      </div>
      <div className='cbn-sg-gutter'>
        <div className='cbn-sg-controls'>
          {showCode ? (
            <button className='cbn-sg-btn' type='button' onClick={onCodeToggle}>Hide code</button>
          ) : (
            <button className='cbn-sg-btn' type='button' onClick={onCodeToggle}>Show code</button>
          )}
          <button className='cbn-sg-btn' type='button' onClick={onGridToggled}>Grid</button>
          <button className='cbn-sg-btn' type='button' onClick={onResetTapped}>Reset</button>
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

  _handleGridToggled() {
    this.setState({
      grid: !this.state.grid
    });
  },

  _handleResetTapped() {
    console.log('Implement reset');

  },

  render() {
    return _PlaygroundRenderer({
      ...this.props,
      grid: this.state.grid,
      onGridToggled: this._handleGridToggled,
      onResetTapped: this._handleResetTapped
    });
  }
});


PlaygroundRenderer.propTypes = {
	code: PropTypes.string.isRequired,
	showCode: PropTypes.bool.isRequired,
	evalInContext: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onCodeToggle: PropTypes.func.isRequired
};

export default PlaygroundRenderer;
