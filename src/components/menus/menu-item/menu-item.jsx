import React, { PropTypes } from 'react';

// Styles
import './menu-item.css';

/**
 * A menu item, which sits within a menu component
 */
const MenuItem = ({ onClick, primaryText }) => (
  <div className='cbn-menu-item' onClick={onClick}>
    <div className='cbn-menu-item__content' title={primaryText}>{primaryText}</div>
  </div>
);

MenuItem.defaultProps = {
  onClick: null
};

MenuItem.propTypes = {
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
