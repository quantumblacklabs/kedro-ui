import React, { PropTypes } from 'react';
import classnames from 'classnames';

// Styles
import './menu-option.css';

// Components
import Icon from '../../icon/icon';

/**
 * A menu option, which sits within a dropdown component.
 * This is a stateless component which expects to be able to set the state of the parent component
 * with it's label and value properties.
 * The parent component will override the onSelected property of this component, so you don't need to implement it.
 */
const MenuOption = ({ icon, iconPosition, key, index, onSelected, primaryText, selected, value }) => {
  const wrapperClasses = classnames('cbn-menu-option', {
    'cbn-menu-option--selected': selected,
    'cbn-menu-option--has-icon': typeof icon === 'string',
    'cbn-menu-option--icon-left': iconPosition === 'left',
    'cbn-menu-option--icon-right': iconPosition === 'right'
  });

  const iconNode = icon
    && <Icon type={icon} theme='light' />;

  /**
   * Event handler executed when the option is selected
   * @param  {object} e The event object
   * @return {function}   The event handler
   */
  const _handleClicked = e => onSelected({ event: e, index, key, label: primaryText, value });

  return (
    <div className={wrapperClasses} onClick={_handleClicked}>
      <div className='cbn-menu-option__content' title={primaryText}>
        {iconPosition === 'left' && icon
          && iconNode}
        <span>{primaryText}</span>
        {iconPosition === 'right' && icon
          && iconNode}
      </div>
    </div>
  );
};

MenuOption.defaultProps = {
  icon: null,
  iconPosition: 'right',
  index: null,
  onSelected: null,
  selected: false,
  value: null
};

MenuOption.propTypes = {
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
  onSelected: PropTypes.func,
  /**
   * The main label displayed
   */
  primaryText: PropTypes.string.isRequired,
  /**
   * Whether the option is selected
   */
  selected: PropTypes.bool,
  /**
   * The value to send to the parent menu component when this item is selected
   */
  value: PropTypes.any
};

export default MenuOption;
