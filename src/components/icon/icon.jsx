import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import pickBy from 'lodash/pickBy';
import IconAssets from './assets';

import './icon.css';

/**
 * An icon component.
 * This creates an SVG node containing the icon graphics.
 * Icons are generated via npm.
 *
 * *The graphics should render sharply at 16, 24, 48, if the designer adheres to the 24px grid.*
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
  const dataProps = pickBy(props, (val, key) => /^data-.*/.test(key));

  // ensure we have a corresponding icon SVG file for this type
  const iconType = type in IconAssets ? type : '';
  const iconType2 = type2 in IconAssets ? type2 : '';

  // load the icon for this type
  const SvgIcon = iconType ? IconAssets[iconType] : '';
  const SvgIcon2 = iconType2 ? IconAssets[iconType2] : '';

  const containerClassNames = classnames(
    'kedro',
    'kui-icon',
    `kui-icon--${size}`,
    `kui-icon--${iconType}`,
    `kui-icon--${theme}`,
    `kui-icon--index-${index}`,
    {
      'kui-icon--tappable': typeof onClick === 'function',
      'kui-icon--double': type2
    }
  );

  const svgClassNames = classnames(
    'kui-icon__graphics',
    `kui-icon__graphics--${theme}`,
    {
      'kui-icon__graphics--tappable': typeof onClick === 'function'
    }
  );

  const styleOverrides = typeof color === 'string' ? { style: { fill: color } } : null;

  return (
    <span className={containerClassNames} {...dataProps} onClick={onClick}>
      {SvgIcon && <SvgIcon title={title} className={svgClassNames} {...styleOverrides} />}
      {SvgIcon2 && <SvgIcon2 title={title} className={svgClassNames} {...styleOverrides} />}
    </span>
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
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
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
  theme: 'light',
  title: '',
  type2: null
};

export default Icon;
