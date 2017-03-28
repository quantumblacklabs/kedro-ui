// Imports

import React, { PropTypes } from 'react';
import Icon from '../icon';

// Styles

/**
 * SearchBarRenderer, used to output the actual DOM makeup for the component
 */
const SearchBarRenderer = ({ iconType, onChange, onClose, theme, value }) => {
  return (
    <div className={`cbn-searchbar cbn-theme--${theme}`}>
      <Icon type={iconType} size='medium' />
      <input value={value} onChange={onChange} />
      <Icon onClick={onClose} type='cut' size='medium' />
    </div>
  );
};

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
  onClose: PropTypes.func.isRequired,
  /**
   * Theme of the component
   */
  theme: PropTypes.string.isRequired,
  /**
   * Text value for the input
   */
  value: PropTypes.string.isRequired
};

export default SearchBarRenderer;
