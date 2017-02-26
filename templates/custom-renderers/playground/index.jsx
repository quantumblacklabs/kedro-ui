import React, { PropTypes } from 'react';
import Editor from 'rsg-components/Editor';
import Preview from 'rsg-components/Preview';
import classnames from 'classnames';

import './styles.css';

// todo
const PlaygroundRenderer = ({ code, showCode, evalInContext, onChange, onCodeToggle }) => (
	<div className='cbn-sg-playground'>
		<div className='cbn-sg-playground__preview'>
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
          <button className='cbn-sg-btn' type='button' onClick={() => console.log('not implemented yet')}>Grid</button>
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

PlaygroundRenderer.propTypes = {
	code: PropTypes.string.isRequired,
	showCode: PropTypes.bool.isRequired,
	evalInContext: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onCodeToggle: PropTypes.func.isRequired,
};

export default PlaygroundRenderer;
