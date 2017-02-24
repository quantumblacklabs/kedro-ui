import React, { PropTypes } from 'react';
import Editor from 'rsg-components/Editor';
import Preview from 'rsg-components/Preview';

import './styles.css';

// todo
const PlaygroundRenderer = ({ code, showCode, evalInContext, onChange, onCodeToggle }) => (
	<div className='cbn-sg-playground'>
		<div className='cbn-sg-playground__preview'>
      <div className='cbn-sg-gutter'>
		     <Preview code={code} evalInContext={evalInContext} />
         {showCode ? (
           <button type='button' onClick={onCodeToggle}>Hide code</button>
         ) : (
           <button type='button' onClick={onCodeToggle}>Show code</button>
         )}
      </div>
		</div>
		{showCode && (
			<div className='cbn-sg-playground__code'>
        <div className='cbn-sg-gutter'>
  				<Editor code={code} onChange={onChange} />
        </div>
			</div>
		)}
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
