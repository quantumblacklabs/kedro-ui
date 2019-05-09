/**
 * React property mappings
 * Where to find what we're validating on a React component
 */
const ReactPropTypeLocationNames = {
  prop: 'prop',
  context: 'context',
  childContext: 'child context'
};

/**
 * Creates a chained validator, so we can apply isRequired and our custom validator to a property
 * for example: `CustomPropTypes.position.isRequired` will apply
 * @see  {@link http://www.ian-thomas.net/custom-proptype-validation-with-react/}
 * @param  {function} validate The validation function to apply after other normal validators are run
 * @return {function}          The chained validator
 */
const createChainableTypeChecker = validate => {
  /**
   * TODO Add jsdoc description
   */
  const checkType = (isRequired, props, propName, componentName = 'ANONYMOUS', location) => {
    if (props[propName] == null) {
      const locationName = ReactPropTypeLocationNames[location];
      if (isRequired) {
        return new Error(
          `Required ${locationName} ${propName} was not specified in ${componentName}.`
        );
      }
      return null;
    }
    // use our custom validator
    return validate(props, propName, componentName, location);
  };

  const chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
};

/**
 * Constructor for a custom validator function
 * which can validate a property is a number within a custom range
 * @param  {number} min The minimum the value can be
 * @param  {number} max The maximum the value can be
 * @return {object}     null if valid, Error object if not
 */
const checkNumberBetween = (min, max) => (props, propName, componentName) => {
  const propVal = props[propName];

  // throw an error if prop val exists and either isn't a number or is out of range
  if ((propVal && (propVal < min || propVal > max)) || isNaN(propVal)) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName} (${propVal}). Prop must be in the range ${min} - ${max}`
    );
  }

  return null;
};

/**
 * A custom validator for a React component, which checks a property is an object
 * and contains an x and y key with a numeric value
 * @param  {object} props         All component props
 * @param  {string} propName      The prop name to validate
 * @param  {string} componentName The component name
 * @return {object}               null if valid, Error object if not
 */
const checkPosition = (props, propName, componentName) => {
  const propVal = props[propName];

  if (!('x' in propVal && 'y' in propVal)
    || (Object.keys(propVal).length !== 2)
    || isNaN(propVal.x)
    || isNaN(propVal.y)) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName} (${JSON.stringify(propVal)}). `
      + 'Prop must be an object with x and y properties'
    );
  }

  return null;
};

/**
 * The map of custom prop validators available to components
 */
const CustomPropTypes = {
  numberBetween: (min, max) => createChainableTypeChecker(checkNumberBetween(min, max)),
  position: createChainableTypeChecker(checkPosition)
};

export default CustomPropTypes;
