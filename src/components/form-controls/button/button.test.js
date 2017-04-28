import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Button from './button';

test('Button should be a function', t => {
  t.is(typeof Button, 'function');
});

test('Button should include only one button field', t => {
  const wrapper = shallow(<Button />);

  t.true(wrapper.find('button').length === 1);
});

test('Button should correctly render its text value', t => {
  const text = 'I am a button!';
  const wrapper = shallow(<Button>{ text }</Button>);

  t.is(wrapper.find('button').text(), text);
});

test('Button should handle click events', t => {
  const spy = sinon.spy();
  const wrapper = mount(<Button onClick={spy} />);

  t.is(typeof wrapper.props().onClick, 'function');

  wrapper
    .find('button')
    .simulate('click');

  t.is(spy.callCount, 1);
});

test('Button should correctly be disabled', () => {
  const wrapper = shallow(<Button disabled />);

  wrapper
    .find('button')
    .html()
    .includes('disabled');
});

test('Button should correctly have light theme class', t => {
  const wrapper = shallow(<Button theme='light' />);

  t.is(wrapper.find('.cbn-theme--light').length, 1);
});

test('Button should correctly have dark theme class', t => {
  // dark theme is default, so it should be automatically assigned
  const wrapper = shallow(<Button theme='dark' />);

  t.is(wrapper.find('.cbn-theme--dark').length, 1);
});
