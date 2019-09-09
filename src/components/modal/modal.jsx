// Imports

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../button';
import Icon from '../icon';

import utils from '../../utils';

// Styles

import './index.css';

const { handleKeyEvent } = utils;

/**
 * Modal component, used for popup dialogs
 */
class Modal extends React.Component {
  /**
   * Create new Modal
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  /**
   * componentWillMount
   */
  componentDidMount() {
    // this.entranceAnimation = this.addAnimation(createAnim);
    window.addEventListener('keydown', this._handleKeyDown);
  }

  /**
   * componentDidUnmount
   */
  componentWillUnmount() {
    window.removeEventListener('keydown', this._handleKeyDown);
  }

  /**
   * Handle keyboard events
   * @param {Event} e - The key event object
   */
  _handleKeyDown(e) {
    handleKeyEvent(e.keyCode, { escape: this.props.onClose });
  }

  /**
   * Render the component
   * @return {ReactElement}
   */
  render() {
    const {
      buttonLabel,
      children,
      message,
      onClose,
      title,
      theme,
      visible,
      zIndex
    } = this.props;
    let content = null;

    if (children) {
      content = children;
    } else {
      content = (
        <div>
          <div className='kui-modal__description'>{message}</div>
          <Button onClick={onClose} theme={theme} size='small'>
            {buttonLabel}
          </Button>
        </div>
      );
    }

    /**
     * Handle key events from modal
     * @param  {event} e
     */
    const _handleKeyDown = e => {
      handleKeyEvent(e.keyCode, { escape: onClose });
    };

    return (
      <div
        aria-haspopup='true'
        className={
          classnames(
            `kedro kui-modal kui-theme--${theme}`,
            {
              'kui-modal--visible': visible
            }
          )
        }
        onKeyDown={_handleKeyDown}
        role='dialog'
        style={{ zIndex }}>
        <div
          onClick={onClose}
          className={
            classnames(
              'kui-modal__bg',
              {
                'kui-modal__bg--visible': visible
              }
            )
          }
        />
        <div className={
          classnames(
            'kui-modal__content',
            {
              'kui-modal__content--visible': visible
            }
          )
        }>
          <Icon
            onClick={onClose}
            type='close'
            size='medium'
            title=''
            theme={theme} />
          <div
            className='kui-modal__wrapper'>
            <div
              className='kui-modal__title'>
              {title}
            </div>
            { content }
          </div>
        </div>
      </div>
    );
  }
}

Modal.defaultProps = {
  buttonLabel: null,
  children: null,
  message: null,
  theme: 'dark',
  visible: false,
  zIndex: 9999
};

Modal.propTypes = {
  /**
   * Button label is used for the label on the button
   */
  buttonLabel: PropTypes.string,
  /**
   * Child elements for component, this can be of any type
   */
  children: PropTypes.node,
  /**
   * Message for static dialog version, e.g. are you sure you want to delete this?
   */
  message: PropTypes.string,
  /**
   * OnClose is called when the background is clicked or the optional confirm button
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Title of the modal
   */
  title: PropTypes.string.isRequired,
  /**
   * Theme of the component
   */
  theme: PropTypes.oneOf(['light', 'dark']),
  /**
   * Whether to show the modal
   */
  visible: PropTypes.bool,
  /**
   * zIndex - how far infront of the other content the modal will sit
   */
  zIndex: PropTypes.number
};

export default Modal;
