import test from 'ava';
import React from 'react';
import { shallow, expect } from 'enzyme';

import Button from './button';

test('Button should be a function', t => {
  t.is(typeof Button, 'function');
});

test('Button should include only one button field', t => {
  const wrapper = shallow(<Button />);

  t.true(wrapper.find('button').length === 1);
});

test('Button should correctly render the value', () => {
  const valueText = 'Value of button!';
  const wrapper = shallow(<Button value={valueText} />);

  wrapper
    .find('button')
    .html()
    .includes(`value="${valueText}"`);
});

test('Button should correctly be disabled', () => {
  const wrapper = shallow(<Button disabled={true} />);

  wrapper
    .find('button')
    .html()
    .includes('disabled');
});

test('Button should correctly have light theme class', t => {
  const wrapper = shallow(<Button theme='light' />);

  t.true(wrapper.find('.cbn-theme--light').length === 1);
});

test('Button should correctly have dark theme class', t => {
  // dark theme is default, so it should be automatically assigned
  const wrapper = shallow(<Button theme='dark' />);

  t.true(wrapper.find('.cbn-theme--dark').length === 1);
});
