import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RadioButton from './radio-button';

configure({ adapter: new Adapter() });

test('RadioButton should be a function', () => {
  expect(typeof RadioButton)
    .toBe('function');
});

test('RadioButton should create a valid React Component when called with required props', () => {
  const wrapper = shallow(
    <RadioButton
      label='hello world'
      name='test'
      value={1} />
  );

  expect(wrapper.children().length)
    .toBe(1);
  expect(wrapper.find('label').length)
    .toBe(1);
});
