import React, { PropTypes } from 'react';
import Playground from 'rsg-components/Playground';
import Markdown from 'rsg-components/Markdown';

const Examples = ({ examples }) => {
	return (
		<div>
			{examples.map((example, index) => {
				switch (example.type) {
					case 'code':
						return (
							<Playground
								code={example.content}
								evalInContext={example.evalInContext}
								key={index}
							/>
						);
					case 'markdown':
						return (
              <div className='cbn-sg-gutter'>
  							<Markdown
  								text={example.content}
  								key={index}
  							/>
              </div>
						);
					default:
						return null;
				}
			})}
		</div>
	);
};

Examples.propTypes = {
	examples: PropTypes.array.isRequired,
};

export default Examples;
