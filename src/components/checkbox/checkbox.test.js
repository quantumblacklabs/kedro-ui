import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Checkbox from './checkbox';

configure({ adapter: new Adapter() });

test('Checkbox should be a function', () => {
  expect(typeof Checkbox)
    .toBe('function');
});

test('Checkbox should create a valid React Component when called with required props', () => {
  const wrapper = shallow(
    <Checkbox
      label='hello world'
      name='test'
      value={1} />
  );

  expect(wrapper.children())
    .toHaveLength(1);
  expect(wrapper.find('label'))
    .toHaveLength(1);
});
