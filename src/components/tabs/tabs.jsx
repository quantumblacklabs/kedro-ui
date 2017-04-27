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

    this._onSelectedTrigger = this._onSelectedTrigger.bind(this);
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#componentdidmount}
   * @return {object} JSX for this component
   */
  componentDidMount() {
    // trigger on selected when rendered
    this.props.onSelected(this.state.selectedIndex);
  }

  /**
   * Callback function for selection change
   * @param {number} newSelectedIndex The index of the newly selected tab
   */
  _onSelectedTrigger(newSelectedIndex) {
    // call the user defined callback
    this.props.onSelected(newSelectedIndex);

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
        selectedIndex={this.state.selectedIndex}
        onSelected={this._onSelectedTrigger}
        size={this.props.size}
        tabs={this.props.tabs}
        theme={this.props.theme} />
    );
  }
}

Tabs.defaultProps = {
  onSelected: () => {},
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
  onSelected: PropTypes.func,
  /**
   * The tabs size
   */
  size: PropTypes.oneOf(['regular', 'small']),
  /**
   * Tabs to display
   */
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Theme name for component, allowed [dark, light]
   */
  theme: PropTypes.oneOf(['dark', 'light'])
};

export default Tabs;
