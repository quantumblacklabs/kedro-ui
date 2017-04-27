import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * ToggleRenderer, used to output the actual DOM markup for the component
 */
const ToggleRenderer = ({
  label,
  onChange,
  type,
  theme,
  value
}) => {
  /**
   * Triggered when on/off is clicked
   * @param {HTMLElement} the element that triggered the event
   */
  const _onChange = e => {
    // the user can click the button, text or the underline, cover all cases
    onChange(e.target.dataset.value || e.target.parentElement.dataset.value);
  };

  return (
    <div className={classnames(`cbn-toggle cbn-toggle--${theme}`)}>
      {
        label && (
          <div className={classnames('cbn-toggle__label', { 'cbn-toggle--bold': type === 'bold' })}>{ label }</div>
        )
      }
      <div className='cbn-toggle__switch'>
        <div
          onClick={_onChange}
          data-value='on'
          className={classnames('cbn-toggle__button', { 'cbn-toggle--selected': value === 'on' })}>
          <div className='cbn-toggle__text'>ON</div>
          <div className='cbn-toggle__underline' />
        </div>
        <div
          className={classnames('cbn-toggle__separator', { 'cbn-toggle__separator--right': value === 'off' })}>
          /</div>
        <div
          onClick={_onChange}
          data-value='off'
          className={classnames('cbn-toggle__button', { 'cbn-toggle--selected': value === 'off' })}>
          <div className='cbn-toggle__text'>OFF</div>
          <div className='cbn-toggle__underline' />
        </div>
      </div>
    </div>
  );
};

ToggleRenderer.propTypes = {
  /**
   * Label for the toggle
   */
  label: PropTypes.string.isRequired,
  /**
   * Callback when the toggle changes value
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Theme name for component, allowed [dark, light]
   */
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  /**
   * Sets the label type
   */
  type: PropTypes.oneOf(['regular', 'bold']).isRequired,
  /**
   * Initial value
   */
  value: PropTypes.oneOf(['on', 'off']).isRequired
};

export default ToggleRenderer;
