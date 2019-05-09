import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import Toggle from './toggle';

configure({ adapter: new Adapter() });

test('Toggle should be a function', () => {
  expect(typeof Toggle)
    .toBe('function');
});

test('Toggle should create a valid React Component when called with required props', () => {
  const wrapper = shallow(<Toggle />);

  expect(wrapper.length === 1)
    .toBeTruthy();
});

test('Toggle should be created with the correct default props', () => {
  const wrapper = shallow(<Toggle />);

  expect(typeof wrapper.props().onChange)
    .toBe('function');
  expect(wrapper.props().value)
    .toBe(true);
  expect(wrapper.props().type)
    .toBe('regular');
  expect(wrapper.props().theme)
    .toBe('dark');
});

test('Toggle should be created with all the user defined props', () => {
  const spy = sinon.spy();
  const jsx = (
    <Toggle
      label='Wifi'
      onChange={spy}
      value={false}
      texts={['UP', 'DOWN']}
      type='bold'
      theme='light' />
  );
  const wrapper = mount(jsx);

  expect(wrapper.props().label)
    .toBe('Wifi');
  expect(wrapper.props().value)
    .toBe(false);
  expect(wrapper.props().type)
    .toBe('bold');
  expect(wrapper.props().theme)
    .toBe('light');

  wrapper.find('input')
    .simulate('change');

  expect(spy.callCount)
    .toBe(1);

  // also verify the structure
  expect(wrapper.find('.cbn-toggle__label'))
    .toHaveLength(1);
  expect(wrapper.find('.cbn-toggle__button'))
    .toHaveLength(2);
});

test('Toggle should throw an error when only 1 text is provided', () => {
  // t.throws(() => { shallow(<Toggle texts={['UP']} />); }, Error);
});
