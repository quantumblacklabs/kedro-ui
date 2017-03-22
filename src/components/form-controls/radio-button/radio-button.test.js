import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import RadioButton from './radio-button';

test('RadioButton should be a function', t => {
  t.is(typeof RadioButton, 'function');
});

test('RadioButton should create a valid React Component when called with required props', t => {
  const wrapper = shallow(
    <RadioButton
      label='hello world'
      name='test'
      value={1} />
  );

  t.true(wrapper.children().length === 2);
});

test('RadioButton should contain the correct elements', t => {
  const wrapper = shallow(
    <RadioButton
      label='hello world'
      name='test'
      value={1} />
  );

  t.is(wrapper.find('label').length, 1);
  t.is(wrapper.find('input').length, 1);
  t.is(wrapper.find('span').length, 1);
});

test('RadioButton should trigger onChange event when clicked', t => {
  const onChanged = sinon.spy();

  const wrapper = shallow(
    <RadioButton
      onChange={onChanged}
      label='hello world'
      name='test'
      value={1} />
  );

  wrapper.find('input')
         .simulate('change', { target: { checked: true } });

  t.is(onChanged.callCount, 1);
});
