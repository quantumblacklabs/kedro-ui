import React, { PropTypes } from 'react';
import cx from 'classnames';

import './styles.css';

const StyleGuideRenderer = ({
  classes,
  title,
  homepageUrl,
  components,
  toc,
  sidebar
}) =>  (
	<div className={cx('cbn-sg-root', sidebar && 'cbn-sg-root--sidebar-open')}>
    <header className='cbn-sg-header'>
      <div>
        <h3>QUANTUMBLACK</h3>
        <h1>Carbon UI Design System</h1>
      </div>
    </header>
		<main className='cbn-sg-content'>
			<div className='cbn-sg-components'>
				{components}
			</div>
		</main>
		{sidebar && false &&
			<div className='cbn-sg-sidebar'>
				<h1>{title}</h1>
				{toc}
			</div>
		}
	</div>
);

StyleGuideRenderer.propTypes = {
  classes: PropTypes.object,
	title: PropTypes.string.isRequired,
	homepageUrl: PropTypes.string.isRequired,
	components: PropTypes.node.isRequired,
	toc: PropTypes.node.isRequired,
	sidebar: PropTypes.bool
};

export default StyleGuideRenderer;
