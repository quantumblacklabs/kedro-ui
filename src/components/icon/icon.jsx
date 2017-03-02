import React, { PropTypes } from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import Icons from './assets';

import './icon.css';

/**
 * An icon component.
 * This creates an SVG node containing the icon graphics.
 * Icons are generated via npm.
 * The graphics should render sharply at 16, 24, 48, if the designer adheres to the 24px grid.
 */
const Icon = props => {
  const {
    color,
    index,
    onClick,
    size,
    theme,
    title,
    type,
    type2
  } = props;

  // filter props for data attributes to attach to the node
  const dataProps = _.pickBy(props, (val, key) => /^data-.*/.test(key));

  // ensure we have a corresponding icon SVG file for this type
  const iconType = type in Icons ? type : 'missing';
  const iconType2 = type2 in Icons ? type2 : '';

  // load the icon for this type
  const SvgIcon = Icons[iconType];
  const SvgIcon2 = iconType2 ? Icons[iconType2] : '';

  const containerClassNames = classnames(
    'cbn-icon',
    `cbn-icon--${size}`,
    `cbn-icon--${iconType}`,
    `cbn-icon--${theme}`,
    `cbn-icon--index-${index}`,
    {
      'cbn-icon--tappable': typeof onClick === 'function',
      'cbn-icon--double': type2
    }
  );

  const svgClassNames = classnames(
    'cbn-icon__graphics',
    `cbn-icon__graphics--${theme}`,
    {
      'cbn-icon__graphics--tappable': typeof onClick === 'function'
    }
  );

  const styleOverrides = typeof color === 'string' ? { style: { fill: color } } : null;

  return (
    <div className={containerClassNames} {...dataProps} onClick={onClick}>
      <SvgIcon title={title} className={svgClassNames} {...styleOverrides} />
      {SvgIcon2 && <SvgIcon2 title={title} className={svgClassNames} {...styleOverrides} />}
    </div>
  );
};

Icon.propTypes = {
  /**
   * The fill color of the icon. This will override the theme's fill.
   */
  color: PropTypes.string,
  /**
   * The index of the icon to display. For double transitioning icons, this can be 0 or 1.
   */
  index: PropTypes.oneOf([0, 1]),
  /**
   * Callback from when an icon is tapped
   */
  onClick: PropTypes.func,
  /**
   * The size of the whole icon.
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /**
   * Theme name for component, allowed [dark, light]
   */
  theme: PropTypes.oneOf(['dark', 'light']),
  /**
   * The title, for native tooltip display
   */
  title: PropTypes.string,
  /**
   * The icon type, which should map to one of the original SVG icon file names eg. menu
   */
  type: PropTypes.string.isRequired,
  /**
   * The second icon type, which can be transitioned to by changing the index prop to 1.
   * This should map to one of the original SVG icon file names eg. menu
   */
  type2: PropTypes.string
};

Icon.defaultProps = {
  color: null,
  index: 0,
  onClick: null,
  size: 'medium',
  theme: 'dark',
  title: '',
  type2: null
};

export default Icon;
