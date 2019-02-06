import test from 'ava';
import React from 'react';
import { shallow, configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Button from './button';

configure({ adapter: new Adapter() });

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

  t.is(
    wrapper.find('button')
           .text(),
    text
  );
});

test('Button should handle click events', t => {
  const onClick = sinon.spy();
  const wrapper = shallow(<Button onClick={onClick} />);

  wrapper.find('button')
    .simulate('click');

  t.is(onClick.callCount, 1);
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
