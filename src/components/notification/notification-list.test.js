import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import NotificationList from './notification-list';

test('NotificationList should be a function', t => {
  t.is(typeof NotificationList, 'function');
});

test('NotificationList should contain correct children', t => {
  const wrapper = shallow(
    <NotificationList
      currentNotification={{
        header: 'Hello',
        icon: 'paste',
        label: 'World',
        type: 'inline'
      }} />
  );

  t.true(wrapper.find('.cbn-notification-list').length === 1);
  t.true(wrapper.find('Notification').length === 1);
});
