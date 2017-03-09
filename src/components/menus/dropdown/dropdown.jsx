import React, { PropTypes } from 'react';
import _ from 'lodash';

// Styles
import './dropdown.css';

// Renderer
import DropdownRenderer from './dropdown-renderer';

const Dropdown = React.createClass({
  displayName: 'Dropdown',
  /**
  * React component spec method
  * {@link https://facebook.github.io/react/docs/component-specs.html#proptypes}
  * @return {object} Default properties
  */
  propTypes: {
    /**
    * An array of child items
    */
    children: PropTypes.node.isRequired,
    /**
    * Default text to show in a closed unselected state
    */
    defaultText: PropTypes.string,
    /**
     * Callback function to be executed when a menu item is clicked, other than the one currently selected.
     */
    onChanged: PropTypes.func,
    /**
    * Callback to be executed after menu opens
    */
    onOpened: PropTypes.func,
    /**
    * Callback to be executed after menu closed
    */
    onClosed: PropTypes.func,
    /**
    * The width for the component. Both the label and options are the same width
    */
    width: PropTypes.number
  },
  /**
   * React component spec method
   * {@link https://facebook.github.io/react/docs/component-specs.html#getdefaultprops}
   * @return {object} Default properties
   */
  getDefaultProps() {
    return {
      children: null,
      defaultText: 'Please select...',
      onChanged: null,
      onClosed: null,
      onOpened: null,
      width: 160
    };
  },
  /**
  * React component spec method
  * {@link https://facebook.github.io/react/docs/component-specs.html#getinitialstate}
  * @return {object} An object to be used as the initial state
  */
  getInitialState() {
    // check children for a selected option
    // otherwise, default to first

    let selectedOption = {
      id: null,
      label: null,
      value: null
    };

    const selectedOptionElement = this._findSelectedOptionElement();

    if (selectedOptionElement) {
      const { id, primaryText, value } = selectedOptionElement.props;
      selectedOption = {
        id,
        label: primaryText,
        value
      };
    }

    return {
      selectedOption,
      open: false
    };
  },
  _findSelectedOptionElement() {
    // we may have an array of options
    // or an array of sections, containing options
    return (this.props.children[0].type === 'section')
      ? _(this.props.children)
        .map(section => section.props.children)
        .flatten()
        .value()
        .find(c => c.props.selected)
      : _.find(this.props.children, c => c.props.selected);
  },
  /**
   * Event handler which is fired when the label is clicked
   */
  _handleLabelClicked() {
    const { open } = this.state;
    const { onOpened, onClosed } = this.props;

    let callback = null;

    // set callbacks, if defined
    if (typeof onOpened === 'function' && !open) {
      callback = onOpened;
    } else if (typeof onClosed === 'function' && open) {
      callback = onClosed;
    }

    this.setState({ open: !open }, callback);
  },
  /**
   * Event handler which is fired when a child item is selected
   */
  _handleOptionSelected(obj) {
    const { label, index, value } = obj;
    const { onChanged, onClosed } = this.props;

    // detect if the selected item has changed
    const hasChanged = value !== this.state.selectedOption.value;
    if (hasChanged) {
      const selectedOption = { label, value, index };
      this.setState({ open: false, selectedOption }, () => {
        if (typeof onChanged === 'function') {
          onChanged(obj);
        }
        if (typeof onClosed === 'function') {
          onClosed();
        }
      });
    } else {
      this.setState({ open: false });
    }
  },
  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/component-specs.html#render}
   * @return {object} JSX for this component
   */
  render() {
    const { children, defaultText, width } = this.props;
    const { open, selectedOption } = this.state;

    const elm = document.querySelector('.cbn-sg-components');
    if (elm) {
      elm.style.background = 'hotpink';
    }

    return (
      <DropdownRenderer
        defaultText={defaultText}
        onLabelClicked={this._handleLabelClicked}
        onOptionSelected={this._handleOptionSelected}
        open={open}
        selectedOption={selectedOption}
        width={width}>
        {children}
      </DropdownRenderer>
    );
  }
});

export default Dropdown;
