import React, { PropTypes } from 'react';
import classnames from 'classnames';

// Styles
import './menu-item.css';

// Components
import Icon from '../../icon/icon';

/**
 * A menu item, which sits within a menu component
 */
const MenuItem = ({ icon, iconPosition, index, key, onSelected, primaryText, value }) => {
  const wrapperClasses = classnames('cbn-menu-item', {
    'cbn-menu-item--has-icon': typeof icon === 'string',
    'cbn-menu-item--icon-left': iconPosition === 'left',
    'cbn-menu-item--icon-right': iconPosition === 'right'
  });

  const iconNode = icon && <Icon type={icon} theme='light' />;

/**
 * Event handler executed when the menu item is clicked
 * @param  {object} e the event object
 * @return {function}   the event handler
 */
  const _handleClicked = e => onSelected({ event: e, index, key, value });

  return (
    <div className={wrapperClasses} onClick={_handleClicked}>
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
  index: null,
  value: null
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
   * An optional index to be send back in callbacks
   */
  index: PropTypes.number,
  /**
   * A unique key for this element
   */
  key: PropTypes.string.isRequired,
  /**
   * A callback which is automatically implemented by a parent menu component
   */
  onSelected: PropTypes.func.isRequired,
  /**
   * The main label displayed
   */
  primaryText: PropTypes.string.isRequired,
  /**
   * The value to send to the parent menu component when this item is selected
   */
  value: PropTypes.any
};

export default MenuItem;
