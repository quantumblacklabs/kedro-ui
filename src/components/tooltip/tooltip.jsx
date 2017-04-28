// Imports

import React from 'react';
import PropTypes from 'prop-types';

// Styles

import './tooltip.css';

/**
 * Tooltip view, used to display contextual information about a control
 */
const Tooltip = ({
  header,
  show,
  theme,
  tooltipId,
  value,
  width
}) => {
  const style = {
    opacity: show ? 1 : 0,
    whiteSpace: header ? 'normal' : 'nowrap',
    width
  };

  return (
    <div data-tooltip-id={tooltipId} style={style} className={`cbn-tooltip cbn-theme--${theme}`}>
      {
        header && <span className='cbn-tooltip__header'>{header}</span>
      }
      <span className='cbn-tooltip__text'>{value}</span>
    </div>
  );
};

Tooltip.defaultProps = {
  header: null,
  show: false,
  tooltipId: null,
  theme: 'light',
  width: 'auto'
};

Tooltip.propTypes = {
  /**
   * Optional tooltip header to breakup the content
   */
  header: PropTypes.string,
  /**
   * Show the tooltip, sets the opacity to 0 / 1
   */
  show: PropTypes.bool,
  /**
   * Theme of the component
   */
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  /**
   * Optional ID, used in conjunction with tooltip trigger
   */
  tooltipId: PropTypes.string,
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
