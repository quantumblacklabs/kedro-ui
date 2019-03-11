import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import utils from 'utils';

const handleKeyEvent = utils.handleKeyEvent;

// Components
import Icon from 'components/icon';

// Styles
import './menu-option.css';

/**
 * A menu option, which sits within a dropdown component.
 * This is a stateless component which expects to be able to set the state of the parent component
 * with it's label and value properties.
 * The parent component will override the onSelected property of this component, so you don't need to implement it.
 */
const MenuOption = ({
  focused,
  icon,
  iconPosition,
  id,
  onSelected,
  primaryText,
  selected,
  theme,
  value
}) => {
  const wrapperClasses = classnames('carbon', 'cbn-menu-option', {
    'cbn-menu-option--focused': focused,
    'cbn-menu-option--selected': selected,
    'cbn-menu-option--has-icon': typeof icon === 'string',
    'cbn-menu-option--icon-left': iconPosition === 'left',
    'cbn-menu-option--icon-right': iconPosition === 'right'
  });

  const iconNode = icon
    && <Icon type={icon} theme={theme} />;

  /**
   * Event handler executed when the option is selected
   * @param  {object} e The event object
   * @return {function}   The event handler
   */
  const _handleClicked = e => onSelected({
    event: e,
    id,
    label: primaryText,
    value
  });

  /**
   * Event handler executed when key events are triggered on the focused option
   * @param {Object} e - The key event object
   */
  const _handleKeyDown = e => handleKeyEvent(e.keyCode)('enter, space', () => {
    _handleClicked(e);
    // Prevent the page from scrolling when selecting an item:
    e.preventDefault();
  });

  return (
    <div
      aria-selected={selected.toString()}
      className={wrapperClasses}
      onClick={_handleClicked}
      onKeyDown={_handleKeyDown}
      role='option'
      tabIndex='-1'>
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
  focused: false,
  icon: null,
  iconPosition: 'right',
  id: null,
  onSelected: null,
  selected: false,
  theme: 'light',
  value: null
};

MenuOption.propTypes = {
  /**
   * Whether the option is focused
   */
  focused: PropTypes.bool,
  /**
   * Icon glyph to use next to label
   */
  icon: PropTypes.string,
  /**
   * Icon position relative to label
   */
  iconPosition: PropTypes.oneOf(['left', 'right']),
  /**
   * A unique key for this element, which will be set by the parent menu component.
   * This is used by the parent menu component to determine which option is selected.
   */
  id: PropTypes.string,
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
  * The theme for the component
  */
  theme: PropTypes.oneOf(['light', 'dark']),
  /**
   * The value to send to the parent menu component when this item is selected
   */
  value: PropTypes.any
};

export default MenuOption;
