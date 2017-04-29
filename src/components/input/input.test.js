import test from 'ava';
import React from 'react';
import { shallow, expect } from 'enzyme';

import Input from './input';

test('Input should be a function', t => {
  t.is(typeof Input, 'function');
});

test('Input should include only one input field', t => {
  const wrapper = shallow(<Input />);

  t.true(wrapper.find('input').length === 1);
});

test('Input should correctly render the value', () => {
  const valueText = 'Value of input!';
  const wrapper = shallow(<Input value={valueText} />);

  wrapper
    .find('input')
    .html()
    .includes(`value="${valueText}"`);
});

test('Input should correctly be disabled', () => {
  const wrapper = shallow(<Input disabled={true} />);

  wrapper
    .find('input')
    .html()
    .includes('disabled');
});

test('Input should correctly have light theme class', t => {
  const wrapper = shallow(<Input theme='light' />);

  t.true(wrapper.find('.cbn-theme--light').length === 1);
});

test('Input should correctly have dark theme class', t => {
  // dark theme is default, so it should be automatically assigned
  const wrapper = shallow(<Input theme='dark' />);

  t.true(wrapper.find('.cbn-theme--dark').length === 1);
});
