import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Switch from './switch';

test('Switch should be a function', t => {
  t.is(typeof RadioButton, 'function');
});

test('Switch should create a valid React Component when called with required props', t => {
  const wrapper = shallow(
    <Switch
      id={1}
      name='test'
      type='checkbox'
      value={1} />
  );

  t.true(wrapper.children().length === 2);
});

test('Switch should trigger onChange event when clicked', t => {
  const onChanged = sinon.spy();

  const wrapper = shallow(
    <Switch
      id={1}
      name='test'
      type='checkbox'
      value={1} />
  );

  wrapper.find('input')
         .simulate('change', { target: { checked: true } });

  t.is(onChanged.callCount, 1);
});
