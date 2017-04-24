// Imports

import React, { PropTypes } from 'react';
import Icon from '../icon';
import { Input } from '../form-controls';

// Styles

/**
 * SearchBarRenderer, used to output the actual DOM makeup for the component
 */
const SearchBarRenderer = ({
  iconType,
  placeholder,
  onChange,
  onClear,
  theme,
  showClearButton,
  value }) => {
  const style = { opacity: showClearButton ? 1 : 0 };

  return (
    <div className={`cbn-searchbar cbn-theme--${theme}`}>
      <div className='cbn-searchbar__dynamicicon'>
        <Icon type={iconType} size='medium' theme={theme} />
      </div>
      <Input
        name='Something 2'
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        theme={theme} />
      <div className='cbn-searchbar__iconwrapper' style={style}>
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
   * Place holder text for search input
   */
  placeholder: PropTypes.string.isRequired,
  /**
   * On change method called after wait time has passed
   */
  onChange: PropTypes.func.isRequired,
  /**
   * On close method, triggered by icon click
   */
  onClear: PropTypes.func.isRequired,
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
