import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Switch from './switch';

configure({ adapter: new Adapter() });

test('Switch should be a function', () => {
  expect(typeof Switch)
    .toBe('function');
});

test('Switch should create a valid React Component when called with required props', () => {
  const wrapper = shallow(
    <Switch
      id='1'
      name='test'
      type='checkbox'
      value={1} />
  );

  expect(wrapper.children().length === 1)
    .toBeTruthy();
  expect(wrapper.find('input'))
    .toHaveLength(1);
});

test('Switch should trigger onChange event when clicked', () => {
  const onChanged = sinon.spy();

  const wrapper = shallow(
    <Switch
      onChange={onChanged}
      id='1'
      name='test'
      type='radio'
      value={1} />
  );

  wrapper.find('.kui-switch__input')
    .simulate('change', { target: { checked: true } });

  expect(onChanged.callCount)
    .toBe(1);
});
