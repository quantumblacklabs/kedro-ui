import React from 'react';

/**
 * To create a component with tooltip triggering abilities
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
      this._handleEvent = this._handleEvent.bind(this);
      this._showTooltip = this._showTooltip.bind(this);
    }

    _showTooltip(value) {
      const tooltip = document.querySelector(`.cbn-tooltip[data-tooltip-id="${this.props.tooltipId}"]`);

      if (tooltip) {
        tooltip.style.opacity = value ? 1 : 0;
        console.log(tooltip);
      }
    }

    /**
     * _handleEvent - used to handle the provided action type e.g onClick
     * will display the tooltip with the same ID as provided in props
     * @param  {type} e Native event
     */
    _handleEvent(e) {
      e.preventDefault();

      this._showTooltip(this.showTooltip = !this.showTooltip);
    }

    /**
     * React lifecycle method
     * {@link https://facebook.github.io/react/docs/react-component.html#render}
     * @return {object} JSX for this component
     */
    render() {
      const eventHandler = {};
      eventHandler[this.props.eventType] = this._handleEvent;

      return (
        <div {...eventHandler}>
          <WrapperComponent {...this.props} />
        </div>);
    }
  };
};

export default TooltipTrigger;
