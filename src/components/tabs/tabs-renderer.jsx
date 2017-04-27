import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * TabsRenderer, used to output the actual DOM makeup for the component
 */
const TabsRenderer = ({
  selectedIndex,
  onSelected,
  size,
  tabs,
  theme
}) => {
  /**
   * Triggered when a tab is clicked
   * @param {HTMLElement} the element that triggered the event
   */
  const _onSelectTab = e => {
    // trigger on selected when rendered
    onSelected(parseInt(e.target.dataset.tabindex, 10));
  };

  return (
    <div className={classnames(`cbn-tabs cbn-tabs--${theme}`, { 'cbn-tabs--small': size === 'small' })}>
      <ul className='cbn-tabs__list'>
        {
          tabs.map((tab, index) => (
            <li
              onClick={_onSelectTab}
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
   * Sets the initially selected tab
   */
  selectedIndex: PropTypes.number.isRequired,
  /**
   * Callback when tab is selected
   */
  onSelected: PropTypes.func.isRequired,
  /**
   * The tabs size, allowed [regular, small]
   */
  size: PropTypes.oneOf(['regular', 'small']).isRequired,
  /**
   * Tabs to display
   */
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Theme name for component, allowed [dark, light]
   */
  theme: PropTypes.oneOf(['dark', 'light']).isRequired
};

export default TabsRenderer;
