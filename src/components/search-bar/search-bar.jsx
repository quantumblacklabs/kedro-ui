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
      isFocused: false,
      showClearButton: this.props.value !== ''
    };

    this._handleBlurred = this._handleBlurred.bind(this);
    this._handleFocused = this._handleFocused.bind(this);
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
        value: newProps.value,
        showClearButton: newProps.value !== ''
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
   * onFocus - fired for onFocus events in input field
   * @param  {Event} e native change event
   */
  _handleFocused(e) {
    this.setState({
      isFocused: true
    });

    // trigger onFocus prop if available
    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus(e.target.value);
    }
  }

  /**
   * onBlurred - fired for onBlur events in input field
   * @param  {Event} e native change event
   */
  _handleBlurred(e) {
    this.setState({
      isFocused: false
    });

    // trigger onBlur prop if available
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(e.target.value);
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

    // trigger onClear prop if available
    if (typeof this.props.onClear === 'function') {
      this.props.onClear();
    }

    // trigger onChange prop if available
    if (typeof this.props.onChange === 'function') {
      this.props.onChange('');
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
        onBlur={this._handleBlurred}
        isFocused={this.state.isFocused}
        placeholder={this.props.placeholder}
        onChange={this._handleChanged}
        onClear={this._handleCleared}
        onFocus={this._handleFocused}
        onSubmit={this.props.onSubmit}
        showClearButton={this.state.showClearButton}
        value={this.state.value}
        theme={this.props.theme} />
    );
  }
}

SearchBar.defaultProps = {
  iconType: 'search',
  placeholder: 'Search Here...',
  onBlur: null,
  onChange: null,
  onClear: null,
  onFocus: null,
  onSubmit: null,
  theme: 'dark',
  value: ''
};

SearchBar.propTypes = {
  /**
   * Icon type e.g. cut, paste, undo etc. see Icon component for more
   */
  iconType: PropTypes.string,
  /**
   * On blur method, triggered by clicking outside the input
   */
  onBlur: PropTypes.func,
  /**
   * Subscribe to change events from input field
   */
  onChange: PropTypes.func,
  /**
   * On clear, triggered when clear button is pressed
   */
  onClear: PropTypes.func,
  /**
   * On focus method, triggered by clicking into the input
   */
  onFocus: PropTypes.func,
  /**
   * On submit method, triggered by hitting enter on the input
   */
  onSubmit: PropTypes.func,
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
