import test from 'ava';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Notification from './notification';

configure({ adapter: new Adapter() });

test('Notification should be a function', t => {
  t.is(typeof Notification, 'function');
});

test('Notification should contain correct children', t => {
  const wrapper = shallow(<Notification label='Hello' headerLabel='World' />);

  const wrapperWithIcon = shallow(<Notification icon='paste' label='Hello' headerLabel='World' />);

  t.true(wrapper.find('.cbn-notification').length === 1);
  t.true(wrapper.find('.cbn-notification__content').length === 1);
  t.true(wrapper.find('.cbn-notification__header').length === 1);
  t.true(wrapper.find('.cbn-notification__label').length === 1);
  t.true(wrapper.find('Icon').length === 1);
  t.true(wrapperWithIcon.find('Icon').length === 2);
});
