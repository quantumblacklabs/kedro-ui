import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Notification from './notification';

configure({ adapter: new Adapter() });

test('Notification should be a function', () => {
  expect(typeof Notification)
    .toBe('function');
});

test('Notification should contain correct children', () => {
  const wrapper = shallow(<Notification label='Hello' headerLabel='World' />);

  const wrapperWithIcon = shallow(<Notification icon='paste' label='Hello' headerLabel='World' />);

  expect(wrapper.find('.kui-notification').length)
    .toBeTruthy();
  expect(wrapper.find('.kui-notification__content').length)
    .toBeTruthy();
  expect(wrapper.find('.kui-notification__header').length)
    .toBeTruthy();
  expect(wrapper.find('.kui-notification__label').length)
    .toBeTruthy();
  expect(wrapper.find('Icon').length)
    .toBeTruthy();
  expect(wrapperWithIcon.find('Icon').length === 2)
    .toBeTruthy();
});
