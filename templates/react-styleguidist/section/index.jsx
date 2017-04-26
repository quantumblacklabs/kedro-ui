import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export function SectionRenderer({ classes, name, slug, content, components, sections }) {
	return (
		<section className='cbn-sg-section'>
			<div className='cbn-sg-gutter'>{name && <h2>{name}</h2>}</div>
			{content}
			{components}
			{sections}
		</section>
	);
}

SectionRenderer.propTypes = {
	name: PropTypes.string,
	slug: PropTypes.string,
	content: PropTypes.node,
	components: PropTypes.node,
	sections: PropTypes.node,
};

export default SectionRenderer;
