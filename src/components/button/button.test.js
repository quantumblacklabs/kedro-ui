import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Button from './button';

configure({ adapter: new Adapter() });

test('Button should be a function', () => {
  expect(typeof Button)
    .toBe('function');
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

test('Button in form should handle submit events', () => {
  const onSubmit = sinon.spy();
  const wrapper = mount(
    <form onSubmit={onSubmit}>
      <Button type='submit' />
    </form>
  );

  wrapper.find('button')
    .simulate('submit');

  expect(onSubmit.callCount)
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

  expect(wrapper.find('.cbn-theme--light'))
    .toHaveLength(1);
});

test('Button should correctly have dark theme class', () => {
  // dark theme is default, so it should be automatically assigned
  const wrapper = shallow(<Button theme='dark' />);

  expect(wrapper.find('.cbn-theme--dark'))
    .toHaveLength(1);
});
