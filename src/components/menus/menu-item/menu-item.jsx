import React, { PropTypes } from 'react';
import classnames from 'classnames';

// Styles
import './menu-item.css';

// Components
import Icon from '../../icon/icon';

/**
 * A menu item, which sits within a menu component
 */
const MenuItem = ({ icon, iconPosition, onClick, primaryText }) => {

  const wrapperClasses = classnames('cbn-menu-item', {
    'cbn-menu-item--has-icon': typeof icon === 'string',
    'cbn-menu-item--icon-left': iconPosition === 'left',
    'cbn-menu-item--icon-right': iconPosition === 'right'
  });

  // const iconNode = <Icon type={icon} theme='light' />;
  // console.log(iconNode);

  console.log('icon', icon);
  const iconNode = icon && <Icon type={ icon } theme='light' />;

  return (
    <div className={wrapperClasses} onClick={onClick}>
      <div className='cbn-menu-item__content' title={primaryText}>
        {iconPosition === 'left' && icon
          && iconNode}
        {primaryText}
        {iconPosition === 'right' && icon
          && iconNode}
      </div>
    </div>
  );
};

MenuItem.defaultProps = {
  icon: null,
  iconPosition: 'right',
  onClick: null
};

MenuItem.propTypes = {
  /**
   * Icon glyph to use next to label
   */
  icon: PropTypes.string,
  /**
   * Icon position relative to label
   */
  iconPosition: PropTypes.oneOf(['left', 'right']),
  /**
   * Event handler for when the item is clicked
   */
  onClick: PropTypes.func,
  /**
   * The main label displayed
   */
  primaryText: PropTypes.string.isRequired
};

export default MenuItem;
