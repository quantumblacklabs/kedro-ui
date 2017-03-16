import React, { PropTypes } from 'react';

import './expandable-panel.css';

/**
 * ExpandablePanel component is used to house more information and
 * has the option to open or close it
 * (ANIMATED)
 */
const ExpandablePanel = ({
  bgColor,
  borderColor,
  children,
  isOpen
}) => {
  const wrapperStyle = {
    borderColor
  };

  const bgStyle = {
    backgroundColor: bgColor
  };

  return (
    <div
      style={wrapperStyle}
      className={`qb-expandable-panel qb-expandable-panel--${isOpen ? 'open' : 'closed'}`}>
      <div style={bgStyle} className='qb-expandable-panel__arrow' />
      <div style={bgStyle} className='qb-expandable-panel__container'>
        { children }
      </div>
    </div>
  );
};

ExpandablePanel.defaultProps = {
  bgColor: 'white',
  borderColor: '#e0e0e0',
  children: [],
  isOpen: true
};

ExpandablePanel.propTypes = {
  /**
   * Background color of control
   */
  bgColor: PropTypes.string,

  /**
   * Border color for the control
   */
  borderColor: PropTypes.string,

  /**
   * Children passed to control
   * Child elements can be of any type e.g. React Element, DIV, UL etc.
   */
  children: React.PropTypes.node,

  /**
   * Boolean for open state of control
   */
  isOpen: PropTypes.bool
};

export default ExpandablePanel;
