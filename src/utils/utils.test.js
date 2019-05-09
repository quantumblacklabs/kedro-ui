import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import utils from './index.js';
import sinon from 'sinon';

const { CustomPropTypes, handleKeyEvent } = utils;

configure({ adapter: new Adapter() });

// CustomPropTypes tests

test('CustomPropTypes should be an object', () => {
  expect(typeof CustomPropTypes)
    .toBe('object');
});

test('CustomPropTypes should have only functions as values', () => {
  const values = Object.values(CustomPropTypes);

  values.forEach(v => {
    expect(typeof v)
      .toBe('function');
  });
});

test('CustomPropTypes.numberBetween should throw if invalid number', () => {
  const min = 1;
  const max = 2;

  const check = CustomPropTypes.numberBetween(min, max);

  const props = {
    value: -1
  };

  const propName = 'value';
  const componentName = 'TestComponent';
  const error = check(props, propName, componentName, null);

  expect(error.message)
    .toBeTruthy();

  expect(error.message)
    .toBe(`Invalid prop ${propName} supplied to ${componentName} (${props.value}). Prop must be in the range ${min} - ${max}`);
});

test('CustomPropTypes.numberBetween should throw if invalid character', () => {
  const min = 1;
  const max = 2;

  const check = CustomPropTypes.numberBetween(min, max);

  const props = {
    value: 'hello world'
  };

  const propName = 'value';
  const componentName = 'TestComponent';
  const error = check(props, propName, componentName, null);

  expect(error.message)
    .toBeTruthy();

  expect(error.message)
    .toBe(`Invalid prop ${propName} supplied to ${componentName} (${props.value}). Prop must be in the range ${min} - ${max}`);
});

test('CustomPropTypes.numberBetween should not throw if valid', () => {
  const min = 1;
  const max = 10;

  const check = CustomPropTypes.numberBetween(min, max);

  const props = {
    value: 2
  };

  const propName = 'value';
  const componentName = 'TestComponent';
  const error = check(props, propName, componentName, null);

  expect(error)
    .toBeFalsy();
});

test('CustomPropTypes.checkPosition should not throw if valid', () => {
  const check = CustomPropTypes.position;

  const props = {
    position: {
      x: 1,
      y: 2
    }
  };

  const propName = 'position';
  const componentName = 'TestComponent';
  const error = check(props, propName, componentName, null);

  expect(error)
    .toBeFalsy();
});

test('CustomPropTypes.checkPosition should throw if invalid position', () => {
  const check = CustomPropTypes.position;

  const props = {
    position: {
      x: 'hello',
      y: 2
    }
  };

  const propName = 'position';
  const componentName = 'TestComponent';
  const error = check(props, propName, componentName, null);

  expect(error.message)
    .toBeTruthy();

  expect(error.message)
    .toBe(`Invalid prop ${propName} supplied to ${componentName} (${JSON.stringify(props.position)}). `
    + 'Prop must be an object with x and y properties');
});

// handleKeyEvent tests

test('handleKeyEvent is a function', () => {
  expect(typeof handleKeyEvent)
    .toBe('function');
});

test('Invokes the correct actions when supplied a keycode', () => {
  const toCall = sinon.spy();
  const notToCall = sinon.spy();

  // 27 is keycode for escape
  handleKeyEvent(27, {
    escape: toCall,
    enter: notToCall
  });

  expect(toCall.callCount)
    .toBe(1);

  expect(notToCall.callCount)
    .toBe(0);
});

test('Should return function if no actions are supplied', () => {
  expect(typeof handleKeyEvent(27))
    .toBe('function');
});

test('Should invoke correctly when single key is supplied', () => {
  const hke = handleKeyEvent(27);
  const spy = sinon.spy();

  hke('escape', spy);

  expect(spy.callCount)
    .toBe(1);
});

test('Should invoke correctly when multiple keys are supplied', () => {
  const spy = sinon.spy();

  /** Test key code */
  const t = keyCode => {
    handleKeyEvent(keyCode)('escape,enter', spy);
  };

  [27, 13].forEach(v => {
    t(v);
  });

  expect(spy.callCount)
    .toBe(2);
});

test('Should throw if invalid values supplied', () => {
  /** Test null params */
  const t1 = () => {
    handleKeyEvent(null, null)();
  };

  /** Test empty params */
  const t2 = () => {
    handleKeyEvent()();
  };

  /** Test invalid params */
  const t3 = () => {
    handleKeyEvent(123, 'hello')();
  };

  expect(t1)
    .toThrow();

  expect(t2)
    .toThrow();

  expect(t3)
    .toThrow();
});
