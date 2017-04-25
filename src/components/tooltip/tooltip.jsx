// Imports

import React, { PropTypes } from 'react';

// Styles

import './tooltip.css';

/**
 * Tooltip view, used to display contextual information about a control
 */
const Tooltip = ({
  header,
  theme,
  value,
  width
}) => {
  const style = {
    whiteSpace: header ? 'normal' : 'nowrap',
    width
  };

  let headerContent = null;

  if (header) {
    headerContent = <span className='cbn-tooltip__header'>{header}</span>;
  }

  return (
    <div style={style} className={`cbn-tooltip cbn-theme--${theme}`}>
      {headerContent}
      <span className='cbn-tooltip__text'>{value}</span>
    </div>
  );
};

Tooltip.defaultProps = {
  header: null,
  theme: 'light',
  width: 'auto'
};

Tooltip.propTypes = {
  /**
   * Display Type
   */
  header: PropTypes.string,
  /**
   * Theme of the component
   */
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  /**
   * Value, text the tooltip will display
   */
  value: PropTypes.string.isRequired,
  /**
   * Width, you can specify the horizontal space this component consumes
   */
  width: PropTypes.string
};

export default Tooltip;
