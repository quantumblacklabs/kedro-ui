import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
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

  t.is(wrapper.children().length, 1);
});
