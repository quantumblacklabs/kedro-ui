// Imports

import React from 'react';
import PropTypes from 'prop-types';
import SearchBarRenderer from './search-bar-renderer';

// Styles

import './search-bar.css';

/**
 * Searchbar is usually used in a search setting i.e. user types and updates
 * some other component with the entered text
 */
class SearchBar extends React.Component {
  // Life cycle

  /**
   * constructor - create new SearchBar
   * @param  {type} props properties passed to component
   */
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
      showClearButton: false
    };

    this._handleChanged = this._handleChanged.bind(this);
    this._handleCleared = this._handleCleared.bind(this);
  }

  /**
   * React lifecycle method
   * Update the value in state if props chage
   * {@link https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops}
   * @return {object} JSX for this component
   */
  componentWillReceiveProps(newProps) {
    if (newProps.value !== this.state.value) {
      this.setState({
        value: newProps.value
      });
    }
  }

  // Events

  /**
   * onChange - fired for onChange events in input field
   * @param  {Event} e native change event
   */
  _handleChanged(e) {
    this.setState({
      value: e.target.value,
      showClearButton: e.target.value !== ''
    });

    // trigger onChange prop if available
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(e.target.value);
    }
  }

  /**
   * onClose - clear the text in the input
   * @param  {type} e description
   * @return {type}   description
   */
  _handleCleared() {
    this.setState({
      value: '',
      showClearButton: false
    });

    // trigger onClose prop if available
    if (typeof this.props.onClear === 'function') {
      this.props.onClear();
    }
  }

  // Rendering

  /**
   * render - render the component
   * @return {ReactElement} markup
   */
  render() {
    return (
      <SearchBarRenderer
        iconType={this.props.iconType}
        placeholder={this.props.placeholder}
        onChange={this._handleChanged}
        onClear={this._handleCleared}
        showClearButton={this.state.showClearButton}
        value={this.state.value}
        theme={this.props.theme} />
    );
  }
}

SearchBar.defaultProps = {
  iconType: 'search',
  placeholder: 'Search Here...',
  onChange: null,
  onClear: null,
  theme: 'dark',
  value: 'Hello'
};

SearchBar.propTypes = {
  /**
   * Icon type e.g. cut, paste, undo etc. see Icon component for more
   */
  iconType: PropTypes.string,
  /**
   * Subscribe to change events from input field
   */
  onChange: PropTypes.func,
  /**
   * On clear, triggered when clear button is pressed
   */
  onClear: PropTypes.func,
  /**
   * Place holder text for search input
   */
  placeholder: PropTypes.string,
  /**
   * Theme of the component
   */
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  /**
   * Value of the inner input bar
   */
  value: PropTypes.string
};

export default SearchBar;
