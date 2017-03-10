import React, { PropTypes } from 'react';
import classnames from 'classnames';

// Components
import Icon from '../../icon/icon';

/**
 * Renderer for the Dropdown component
 */
const DropdownRenderer = ({ children, defaultText, onLabelClicked, onOptionSelected, open, selectedOption, theme, width }) => {
  const wrapperClasses = classnames('cbn-dropdown', `cbn-theme--${theme}`, { 'cbn-dropdown--open': open });

  /**
   * Clone a React element and extend with extra props tieing it to a new scope
   * @type {object}
   */
  const _extendMenuOption = (element, id) => {
    const extraProps = {
      id,
      onSelected: onOptionSelected,
      selected: selectedOption.id === id
    };
    return React.cloneElement(element, extraProps);
  };

  return (
    <div className={wrapperClasses} style={{ width: `${width}px` }}>
      <div className='cbn-dropdown__label' onClick={onLabelClicked}>
        <span>{selectedOption.label || defaultText}</span> <Icon type='chevronUp' theme='light' />
      </div>
      <div className='cbn-dropdown__options'>
        {React.Children.map(children, (child, i) => {
          switch (child.type) {
            case 'section':
              // one level of sections to iterate before we get to the Menu Options
              return (
                <section key={`menu-section-${i}`}>
                  {React.Children.map(child.props.children, (sectionChild, j) => {
                    switch (sectionChild.type) {
                      case 'span':
                        // Heading
                        return sectionChild;
                      default:
                        return _extendMenuOption(sectionChild, `menu-option-${i}.${j}`);
                    }
                  })}
                </section>
              );
            case 'span':
              // Heading
              return child;
            default:
              return _extendMenuOption(child, `menu-option-${i}`);
          }
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
  theme: 'light',
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
  * The theme for the component
  */
  theme: PropTypes.oneOf(['light', 'dark']),
  /**
  * The width for the component. Both the label and options are the same width
  */
  width: PropTypes.number
};

export default DropdownRenderer;
