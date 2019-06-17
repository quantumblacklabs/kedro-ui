// Imports
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Components
import Icon from '../icon';
import Input from '../input';

/**
 * SearchBarRenderer, used to output the actual DOM markup for the component
 */
const SearchBarRenderer = props => {
  const {
    children,
    iconType,
    isFocused,
    placeholder,
    onBlur,
    onChange,
    onClear,
    onFocus,
    onSubmit,
    theme,
    showClearButton,
    value
  } = props;
  const style = { opacity: showClearButton ? 1 : 0 };

  return (
    <form
      className={classnames('kedro', 'kui-searchbar', `kui-theme--${theme}`, { 'kui-searchbar--focused': isFocused })}
      onSubmit={onSubmit}
      role={children ? 'combobox' : 'search'}>
      <label className='kui-searchbar__label' htmlFor='kui-searchbar'>Search</label>
      <div className='kui-searchbar__iconwrapper'>
        <Icon type={iconType} size='medium' theme={theme} />
      </div>
      <Input
        id='kui-searchbar'
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        theme={theme}
        type='search' />
      <div className='kui-searchbar__dynamicicon' style={style}>
        <Icon onClick={onClear} type='close' size='medium' theme={theme} />
      </div>
      { children }
    </form>
  );
};

SearchBarRenderer.defaultProps = {
  children: null,
  onSubmit: null
};

SearchBarRenderer.propTypes = {
  /**
   * Child component, usually search-bar-results
   */
  children: PropTypes.node,
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
   * On submit method, triggered by hitting enter on the input
   */
  onSubmit: PropTypes.func,
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
