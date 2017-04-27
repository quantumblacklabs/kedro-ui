import React from 'react';
import PropTypes from 'prop-types';
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

    this._onSelectTrigger = this._onSelectTrigger.bind(this);
  }

  /**
   * Callback function for selection change
   * @param {number} newSelectedIndex The index of the newly selected tab
   */
  _onSelectTrigger(newSelectedIndex) {
    // call the user defined callback
    this.props.onSelect(newSelectedIndex);

    this.setState({
      selectedIndex: newSelectedIndex
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
        onSelect={this._onSelectTrigger}
        selectedIndex={this.state.selectedIndex}
        size={this.props.size}
        tabs={this.props.tabs}
        theme={this.props.theme} />
    );
  }
}

Tabs.defaultProps = {
  onSelect: () => {},
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
   * Callback when tab is selected
   */
  onSelect: PropTypes.func,
  /**
   * The tabs size
   */
  size: PropTypes.oneOf(['regular', 'small']),
  /**
   * Tabs to display
   */
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Theme name for component
   */
  theme: PropTypes.oneOf(['dark', 'light'])
};

export default Tabs;
