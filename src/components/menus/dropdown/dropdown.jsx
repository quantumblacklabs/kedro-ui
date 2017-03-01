import React, { PropTypes } from 'react';
import _ from 'lodash';
import classnames from 'classnames';

// Styles
import './dropdown.css';

// components
import MenuItem from '../menu-item/menu-item';

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
    children: PropTypes.array.isRequired,
    /**
    * Default text to show in a closed unselected state
    */
    defaultText: PropTypes.string,
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
      width: 160
    };
  },
  /**
  * React component spec method
  * {@link https://facebook.github.io/react/docs/component-specs.html#getinitialstate}
  * @return {object} An object to be used as the initial state
  */
  getInitialState() {
    return {
      open: false
    };
  },
  _handleLabelClicked() {
    const { open } = this.state;
    const { onOpened, onClosed } = this.props;

    let callback = null;

    // set callbacks, if defined
    if (onOpened && !open) {
      callback = onOpened;
    } else if (onClosed && open) {
      callback = onClosed;
    }

    this.setState({ open: !open}, callback);
  },
  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/component-specs.html#render}
   * @return {object} JSX for this component
   */
  render() {
    const { children, defaultText, width } = this.props;
    const { open } = this.state;

    const wrapperClasses = classnames('cbn-dropdown', {'cbn-dropdown--open': open});
    return (
      <div className={ wrapperClasses } style={ { width: `${width}px` } }>
        <div className='cbn-dropdown__label' onClick={ this._handleLabelClicked }>{ defaultText }</div>
        <div className='cbn-dropdown__options'>
          { children }
        </div>
      </div>
    );
  }
});

export default Dropdown;
