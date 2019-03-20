import React from 'react';
import { shallow, configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Button from './button';

configure({ adapter: new Adapter() });

test('Button should be a function', () => {
  expect(typeof Button).toBe('function');
});

test('Button should include only one button field', () => {
  const wrapper = shallow(<Button />);

  expect(wrapper.find('button').length === 1)
    .toBeTruthy();
});

test('Button should correctly render its text value', () => {
  const text = 'I am a button!';
  const wrapper = shallow(<Button>{ text }</Button>);

  expect(wrapper.find('button')
    .text())
    .toBe(text);
});

test('Button should handle click events', () => {
  const onClick = sinon.spy();
  const wrapper = shallow(<Button onClick={onClick} />);

  wrapper.find('button')
    .simulate('click');

  expect(onClick.callCount)
    .toBe(1);
});

test('Button should correctly be disabled', () => {
  const wrapper = shallow(<Button disabled />);

  wrapper
    .find('button')
    .html()
    .includes('disabled');
});

test('Button should correctly have light theme class', () => {
  const wrapper = shallow(<Button theme='light' />);

  expect(wrapper.find('.cbn-theme--light').length)
    .toBe(1);
});

test('Button should correctly have dark theme class', () => {
  // dark theme is default, so it should be automatically assigned
  const wrapper = shallow(<Button theme='dark' />);

  expect(wrapper.find('.cbn-theme--dark').length)
    .toBe(1);
});
