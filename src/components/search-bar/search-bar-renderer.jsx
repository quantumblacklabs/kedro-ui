// Imports

import React, { PropTypes } from 'react';
import Icon from '../icon';
import { Input } from '../form-controls';

console.log(Input);

// Styles

/**
 * SearchBarRenderer, used to output the actual DOM makeup for the component
 */
const SearchBarRenderer = ({ iconType,
                             onChange,
                             onClear,
                             theme,
                             showClearButton,
                             value }) =>
  (
    <div className={`cbn-searchbar cbn-theme--${theme}`}>
      <Icon type={iconType} size='medium' theme={theme}/>
      <Input
          name='Something 2'
          placeholder='Search'
          label='hello'
          onChange={onChange}
          value={value}
          theme='light'/>
      {
        showClearButton &&
          <Icon onClick={onClear} type='cut' size='medium' theme={theme} />
      }
    </div>
  );

SearchBarRenderer.propTypes = {
  /**
   * Icon type e.g. cut, paste, undo etc. see Icon component for more
   */
  iconType: PropTypes.string.isRequired,
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
  theme: PropTypes.string.isRequired,
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
