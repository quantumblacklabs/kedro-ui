import React, { PropTypes } from 'react';
import classnames from 'classnames';

// Components
import Icon from '../../icon/icon';

/**
 * Renderer for the Dropdown component
 */
const DropdownRenderer = ({ children, defaultText, onLabelClicked, onOptionSelected, open, selectedOption, width }) => {
  const wrapperClasses = classnames('cbn-dropdown', { 'cbn-dropdown--open': open });

  return (
    <div className={wrapperClasses} style={{ width: `${width}px` }}>
      <div className='cbn-dropdown__label' onClick={onLabelClicked}>
        <span>{selectedOption.label || defaultText}</span> <Icon type='chevronUp' theme='light' />
      </div>
      <div className='cbn-dropdown__options'>
        {React.Children.map(children, (child, i) => {
          const extraProps = {
            index: i,
            onSelected: onOptionSelected,
            selected: selectedOption.index === i
          };
          return React.cloneElement(child, extraProps);
        })}
      </div>
    </div>
  );
};

DropdownRenderer.defaultProps = {
  children: null,
  defaultText: 'Please select...',
  onChanged: null,
  onLabelClicked: null,
  onOptionSelected: null,
  open: false,
  selectedOption: null,
  width: 160
};

DropdownRenderer.propTypes = {
  /**
  * An array of child items
  */
  children: PropTypes.node.isRequired,
  /**
  * Default text to show in a closed unselected state
  */
  defaultText: PropTypes.string,
  /**
  * Callback to be executed when the main label is clicked
  */
  onLabelClicked: PropTypes.func,
  /**
  * Callback to be executed when an option is selected
  */
  onOptionSelected: PropTypes.func,
  /**
  * Whether the dropdown is in an open state
  */
  open: PropTypes.bool,
  /**
  * An object containing selected option details
  */
  selectedOption: PropTypes.object,
  /**
  * The width for the component. Both the label and options are the same width
  */
  width: PropTypes.number
};

export default DropdownRenderer;
