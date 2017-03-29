import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './checkbox';

test('Checkbox should be a function', t => {
  t.is(typeof Checkbox, 'function');
});

test('Checkbox should create a valid React Component when called with required props', t => {
  const wrapper = shallow(
    <Checkbox
      label='hello world'
      name='test'
      value={1} />
  );

  t.is(wrapper.children().length, 1);
  t.is(wrapper.find('label').length, 1);
});
