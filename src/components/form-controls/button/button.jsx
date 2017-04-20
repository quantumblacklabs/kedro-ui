import React, { PropTypes } from 'react';

import './button.css';

/**
 * Button component
 */
class Button extends React.Component {
  /**
   * constructor - create new component with given props.
   * @param  {object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * React lifecycle method
   * {@link https://facebook.github.io/react/docs/react-component.html#render}
   * @return {object} JSX for this component
   */
  render() {
    return (
      <button className='cbn-button'>
        Hello world!
      </button>
    );
  }
}

Button.defaultProps = {
};

Button.propTypes = {
};

export default Button;
