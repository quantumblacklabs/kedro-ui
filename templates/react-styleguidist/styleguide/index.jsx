import React, { PropTypes } from 'react';
import cx from 'classnames';

import 'styles/app.css';
import 'styles/react-styleguidist.css';

import './styles.css';

const StyleGuideRenderer = ({
  classes,
	title,
	homepageUrl,
	children,
	toc,
	hasSidebar
}) =>  (
	<div className={cx('cbn-sg-root', hasSidebar && 'cbn-sg-root--sidebar-open')}>
    <header className='cbn-sg-header'>
      <div>
        <h3>QUANTUMBLACK</h3>
        <h1>Carbon UI Design System</h1>
      </div>
    </header>
		<main className='cbn-sg-content'>
			<div className='cbn-sg-components'>
				{children}
			</div>
		</main>
		{hasSidebar && false &&
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
	children: PropTypes.node.isRequired,
	toc: PropTypes.node.isRequired,
	hasSidebar: PropTypes.bool
};

export default StyleGuideRenderer;
