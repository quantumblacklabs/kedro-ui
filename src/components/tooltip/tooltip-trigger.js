import React from 'react';

/**
 * Create a component with tooltip triggering abilities
 */
const TooltipTrigger = WrapperComponent => {
  const component = React.Component;

  return class extends component {
    /**
     * constructor - create new TooltipTrigger
     * @param  {type} props description
     * @return {type}       description
     */
    constructor(props) {
      super(props);

      this.showTooltip = false;
      this.offset = props.spacer || 10;

      this._handleEvent = this._handleEvent.bind(this);
      this._showTooltip = this._showTooltip.bind(this);
      this._getEventHandlers = this._getEventHandlers.bind(this);
    }

    /**
     * _showTooltip allows you to toggle a tooltip tip into view, based on the
     * tooltipId prop and display direction prop
     * @param  {Object} opts { show, position, tooltips }
     */
    _showTooltip(opts) {
      const tooltip = opts.tooltip;

      tooltip.style.opacity = +opts.show;

      Object.keys(opts.position)
            .forEach(key => {
              tooltip.style[key] = `${opts.position[key]}px`;
              tooltip.classList.add(`cbn-tooltip--${this.props.displayDirection}`);
            });
    }

    /**
     * _handleEvent - used to handle the provided action type e.g onClick
     * will display the tooltip with the same ID as provided in props
     */
    _handleEvent() {
      const tooltip = document.querySelector(`.cbn-tooltip[data-tooltip-id="${this.props.tooltipId}"]`);
      const box = this._wrapper.getBoundingClientRect();
      const tbox = tooltip.getBoundingClientRect();
      const position = {};

      // no tooltips found, bail out
      if (!tooltip) {
        return;
      }

      // position the tooltip, always centering
      switch (this.props.displayDirection) {
        case 'top':
          position.top = box.top - this.offset;
          position.left = box.left + ((box.width / 2) - (tbox.width / 2));
          break;
        case 'bottom':
          position.top = box.bottom + this.offset;
          position.left = box.left + ((box.width / 2) - (tbox.width / 2));
          break;
        case 'left':
          position.top = box.top + ((box.height / 2) - (tbox.height / 2));
          position.left = box.left - this.offset;
          break;
        case 'right':
          position.top = box.top + ((box.height / 2) - (tbox.height / 2));
          position.left = box.right + this.offset;
          break;
        default:
          throw new Error('Unknown display direction for tooltip');
      }

      this._showTooltip({
        show: this.showTooltip = !this.showTooltip,
        position,
        tooltip
      });
    }

    /**
     * _getEventHandlers returns an object of event handlers to control when
     * the tooltip is displayed / removed
     * @return {object} event handlers object
     */
    _getEventHandlers() {
      // support only mouse over / out events for now
      return {
        onMouseOver: this._handleEvent,
        onMouseOut: this._handleEvent
      };
    }

    /**
     * React lifecycle method
     * {@link https://facebook.github.io/react/docs/react-component.html#render}
     * @return {object} JSX for this component
     */
    render() {
      return (
        <div ref={c => { this._wrapper = c; }} className='cbn-tooltip-trigger' {...this._getEventHandlers()}>
          <WrapperComponent {...this.props} />
        </div>);
    }
  };
};

export default TooltipTrigger;
