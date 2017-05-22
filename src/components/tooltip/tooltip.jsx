// Imports
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Styles
import './tooltip.css';

/**
 * Tooltip view, used to display contextual information about a control
 */
const Tooltip = ({
  children,
  show,
  theme,
  tooltipId,
  width,
  wrapText
}) => {
  const style = {
    whiteSpace: wrapText ? 'normal' : 'nowrap',
    width
  };

  return (
    <div
      aria-hidden={!show.toString()}
      className={classnames(
        'cbn-tooltip',
        `cbn-theme--${theme}`,
        { 'cbn-tooltip--hidden': !show }
      )}
      data-tooltip-id={tooltipId}
      hidden={!show}
      style={style}>
      { children }
    </div>
  );
};

Tooltip.defaultProps = {
  children: null,
  header: null,
  show: false,
  tooltipId: null,
  theme: 'light',
  width: 'auto',
  wrapText: true
};

Tooltip.propTypes = {
  /**
   * Child DOM supplied to component
   */
  children: PropTypes.node,
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
   * Width, you can specify the horizontal space this component consumes
   */
  width: PropTypes.string,
  /**
   * Wrap text, this will wrap based on the width supplied
   */
  wrapText: PropTypes.bool
};

export default Tooltip;
