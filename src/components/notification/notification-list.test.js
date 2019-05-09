import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotificationList from './notification-list';

configure({ adapter: new Adapter() });

test('NotificationList should be a function', () => {
  expect(typeof NotificationList)
    .toBe('function');
});

test('NotificationList should contain correct children', () => {
  const wrapper = shallow(
    <NotificationList
      currentNotification={{
        header: 'Hello',
        icon: 'paste',
        label: 'World',
        type: 'inline'
      }} />
  );

  expect(wrapper.find('.cbn-notification-list').length === 1)
    .toBeTruthy();
  expect(wrapper.find('Notification').length === 1)
    .toBeTruthy();
});
