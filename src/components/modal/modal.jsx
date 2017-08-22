// Imports

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import Icon from 'components/icon';
import { handleKeyEvent } from 'utils';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax } from 'gsap';

// Styles

import './index.css';

/**
 * Create animation
 * @type {object} target
 * @return {object} new timeline animation
 */
const createAnim = ({ target }) => {
  const bg = target.find({ name: 'bg' });
  const content = target.find({ name: 'content' });

  return new TimelineMax({ repeat: 0 })
    .to(bg, 1, { opacity: 1 })
    .to(content, 1, { opacity: 1, top: '50%' }, 0)
    .duration(0.5);
};

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

    this.state = {
      opacity: 0,
      top: '40%'
    };

    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  /**
   * componentWillMount
   */
  componentDidMount() {
    this.entranceAnimation = this.addAnimation(createAnim);
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
      title
    } = this.props;
    let content = null;

    if (children) {
      content = children;
    } else {
      content = (
        <div>
          <div
            className='modal__description'>
            {message}
          </div>
          <Button
            onClick={onClose}
            theme='dark'
            size='small'>{buttonLabel}</Button>
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
        className='modal'
        onKeyDown={_handleKeyDown}
        role='dialog'>
        <div
          onClick={onClose}
          name='bg'
          style={{ opacity: 0 }}
          className='modal__bg' />
        <div
          name='content'
          style={{ opacity: 0, top: '40%' }}
          className='modal__content'>
          <Icon
            onClick={onClose}
            type='close'
            size='medium'
            title=''
            theme='dark' />
          <div
            className='modal__wrapper'>
            <div
              className='modal__title'>{title}</div>
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
  message: null
};

Modal.propTypes = {
  /**
   * Button label is used for the label on the button
   */
  buttonLabel: PropTypes.string,
  /**
   * Child elements for component
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
  title: PropTypes.string.isRequired
};

export default GSAP()(Modal);
