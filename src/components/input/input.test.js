import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Input from './input';

configure({ adapter: new Adapter() });

test('Input should be a function', () => {
  expect(typeof Input)
    .toBe('function');
});

test('Input should include only one input field', () => {
  const wrapper = shallow(<Input />);

  expect(wrapper.find('input').length === 1)
    .toBeTruthy();
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

test('Input should correctly have light theme class', () => {
  const wrapper = shallow(<Input theme='light' />);

  expect(wrapper.find('.cbn-theme--light').length === 1)
    .toBeTruthy();
});

test('Input should correctly have dark theme class', () => {
  // dark theme is default, so it should be automatically assigned
  const wrapper = shallow(<Input theme='dark' />);

  expect(wrapper.find('.cbn-theme--dark').length === 1)
    .toBeTruthy();
});

test('It should trigger onFocus correctly', () => {
  const cb = jest.fn();

  const wrapper = mount(<Input onFocus={cb} />);

  wrapper
    .find('input')
    .simulate('focus');

  expect(cb)
    .toHaveBeenCalled();

  expect(wrapper.state().focused)
    .toBeTruthy();
});

test('It should trigger onBlur correctly', () => {
  const cb = jest.fn();

  const wrapper = mount(<Input onBlur={cb} />);

  wrapper
    .find('input')
    .simulate('blur');

  expect(cb)
    .toHaveBeenCalled();

  expect(wrapper.state().focused)
    .toBeFalsy();
});

test('It should trigger onChange correctly', () => {
  const cb = jest.fn();

  const wrapper = mount(<Input onChange={cb} />);
  const event = {target: {name: 'TestName', value: 'new value'}};

  wrapper
    .find('input')
    .simulate('change', event);

  expect(cb)
    .toHaveBeenCalled();

  expect(wrapper.state().value)
    .toBe('new value');
});

it('Should kill the animation when unmounting', () => {
  const cb = jest.fn();
  
  const wrapper = mount(<Input />);
  wrapper.instance()._anim = {
    kill: cb
  };

  wrapper.unmount();

  expect(cb)
    .toHaveBeenCalled();
});
