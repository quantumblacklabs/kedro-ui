import React from 'react';
import PropTypes from 'prop-types';
import 'what-input';
import TabsRenderer from './tabs-renderer';

import './tabs.css';

/**
 * Tabs control
 */
class Tabs extends React.Component {
  /**
   * constructor - create new Tabs
   * @param {Object} props properties passed to component
   */
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: props.selectedIndex
    };

    this._handleSelect = this._handleSelect.bind(this);
  }

  /**
   * Callback function for selection change
   * @param {object} e     The event object
   * @param {number} datum Properties associated with the selected tab
   */
  _handleSelect(e, datum) {
    // call the user defined callback
    if (typeof this.props.onSelect === 'function') {
      this.props.onSelect(e, datum);
    }

    this.setState({
      selectedIndex: datum.selectedIndex
    });
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#render}
   * @return {object} JSX for this component
   */
  render() {
    return (
      <TabsRenderer
        onSelect={this._handleSelect}
        selectedIndex={this.state.selectedIndex}
        size={this.props.size}
        tabs={this.props.tabs}
        theme={this.props.theme} />
    );
  }
}

Tabs.defaultProps = {
  onSelect: null,
  selectedIndex: 0,
  size: 'regular',
  theme: 'dark'
};

Tabs.propTypes = {
  /**
   * Sets the initially selected tab
   */
  selectedIndex: PropTypes.number,
  /**
   * Callback when tab is selected (params: event, payload: { selectedIndex })
   */
  onSelect: PropTypes.func,
  /**
   * The tabs size
   */
  size: PropTypes.oneOf(['regular', 'small']),
  /**
   * Tabs to display, and their (optional) URLs
   */
  tabs: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string
      })
    ])
  ).isRequired,
  /**
   * Theme name for component
   */
  theme: PropTypes.oneOf(['dark', 'light'])
};

export default Tabs;
