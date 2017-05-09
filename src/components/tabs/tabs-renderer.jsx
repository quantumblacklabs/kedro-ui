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
  const _handleSelect = (e, i) => {
    onSelect(e, { selectedIndex: i });
    e.preventDefault();
  };

  /**
   * Remove special characters from a string and convert spaces to dashes
   * @param  {string} str A text string
   * @return {string}     The same string, but sanitised for IDs
   */
  const stringToID = str => str.toLowerCase()
    .replace(' ', '-')
    .replace(/[^a-zA-Z0-9]/g, '');

  /**
   * [description]
   * @param  {[type]} tab      [description]
   * @param  {[type]} i        [description]
   * @param  {[type]} children [description]
   * @return {[type]}          [description]
   */
  const tabButton = (tab, i) => {
    const props = {
      'aria-selected': `${selectedIndex === i}`,
      className: 'cbn-tabs__button',
      id: `cbn-tab-${stringToID(tab.text)}`,
      onClick: e => _handleSelect(e, i)
    };
    return tab.href ? (
      <a href={tab.href} {...props}>{ tab.text }</a>
    ) : (
      <button {...props}>{ tab.text }</button>
    );
  };

  return (
    <div
      className={classnames(
        'cbn-tabs',
        `cbn-theme--${theme}`,
        { 'cbn-tabs--small': size === 'small' }
      )}>
      <ul className='cbn-tabs__list'>
        {
          tabs.map((tab, i) => (
            <li
              key={tab.text}
              className={classnames('cbn-tabs__tab', { 'cbn-tabs__tab--selected': selectedIndex === i })}
              data-tabindex={i}>
              { tabButton(tab, i) }
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
   * Tabs to display, and their (optional) URLs
   */
  tabs: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string
  })).isRequired,
  /**
   * Theme name for component
   */
  theme: PropTypes.oneOf(['dark', 'light']).isRequired
};

export default TabsRenderer;
