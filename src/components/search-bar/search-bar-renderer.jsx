// Imports
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Components
import Icon from 'components/icon';
import Input from 'components/input';

/**
 * SearchBarRenderer, used to output the actual DOM markup for the component
 */
const SearchBarRenderer = ({
  iconType,
  isFocused,
  placeholder,
  onBlur,
  onChange,
  onClear,
  onFocus,
  theme,
  showClearButton,
  value }) => {
  const style = { opacity: showClearButton ? 1 : 0 };

  return (
    <div
      className={classnames('cbn-searchbar', `cbn-theme--${theme}`, { 'cbn-searchbar--focused': isFocused })}>
      <div className='cbn-searchbar__iconwrapper'>
        <Icon type={iconType} size='medium' theme={theme} />
      </div>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        theme={theme} />
      <div className='cbn-searchbar__dynamicicon' style={style}>
        <Icon onClick={onClear} type='close' size='medium' theme={theme} />
      </div>
    </div>
  );
};

SearchBarRenderer.propTypes = {
  /**
   * Icon type e.g. cut, paste, undo etc. see Icon component for more
   */
  iconType: PropTypes.string.isRequired,
  /**
   * Indicating whether the search bar is focused or blurred
   */
  isFocused: PropTypes.bool.isRequired,
  /**
   * Place holder text for search input
   */
  placeholder: PropTypes.string.isRequired,
  /**
   * On blur method, triggered by clicking outside the input
   */
  onBlur: PropTypes.func.isRequired,
  /**
   * On change method called after wait time has passed
   */
  onChange: PropTypes.func.isRequired,
  /**
   * On close method, triggered by icon click
   */
  onClear: PropTypes.func.isRequired,
  /**
   * On focus method, triggered by clicking into the input
   */
  onFocus: PropTypes.func.isRequired,
  /**
   * Theme of the component
   */
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  /**
   * Show clear button on right
   */
  showClearButton: PropTypes.bool.isRequired,
  /**
   * Text value for the input
   */
  value: PropTypes.string.isRequired
};

export default SearchBarRenderer;
