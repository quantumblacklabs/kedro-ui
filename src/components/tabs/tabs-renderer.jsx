import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * TabsRenderer, used to output the actual DOM markup for the component
 */
const TabsRenderer = ({
  onSelect,
  selectedIndex,
  size,
  tabs,
  theme
}) => {
  /**
   * Triggered when a tab is clicked
   * @param {HTMLElement} e The element that triggered the event
   */
  const _handleSelect = e => {
    onSelect(e, { selectedIndex: parseInt(e.target.dataset.tabindex, 10) });
  };

  return (
    <div className={classnames(`cbn-tabs cbn-tabs--${theme}`, { 'cbn-tabs--small': size === 'small' })}>
      <ul className='cbn-tabs__list'>
        {
          tabs.map((tab, index) => (
            <li
              onClick={_handleSelect}
              data-tabindex={index}
              key={tab}
              className={classnames('cbn-tabs__tab', { 'cbn-tabs__tab--selected': selectedIndex === index })}>
              <div className='cbn-tabs__text' data-tabindex={index}>{ tab }</div>
              <div className='cbn-tabs__underline' />
            </li>
            )
          )
        }
      </ul>
    </div>
  );
};

TabsRenderer.propTypes = {
  /**
   * Callback when tab is selected
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Sets the initially selected tab
   */
  selectedIndex: PropTypes.number.isRequired,
  /**
   * The tabs size, allowed [regular, small]
   */
  size: PropTypes.oneOf(['regular', 'small']).isRequired,
  /**
   * Tabs to display
   */
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Theme name for component
   */
  theme: PropTypes.oneOf(['dark', 'light']).isRequired
};

export default TabsRenderer;
