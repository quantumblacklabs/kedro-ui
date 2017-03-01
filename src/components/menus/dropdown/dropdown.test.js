import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Dropdown from './dropdown';
import MenuItem from '../menu-item/menu-item';

const mockData = [
  {
    defaultText: 'Test 123',
    onOpened: sinon.spy(() => {})
  },
  {
    defaultText: 'Test 456',
    onOpened: sinon.spy(() => {})
  }
];

mockData.forEach((dataSet, i) => {
  const jsx = (
    <Dropdown {...dataSet}>
      <MenuItem primaryText='Test' />
      <MenuItem primaryText='Test' />
    </Dropdown>
  );

  test(`Dropdown should be a function - Test ${i}`, t => {
    t.is(typeof Dropdown, 'function');
  });

  test(`Dropdown should create a valid React Component when called with required props - Test ${i}`, t => {
    const wrapper = shallow(jsx);
    t.true(wrapper.find('.cbn-dropdown__options')
      .children()
      .length
      === 2);
  });

  test(`Dropdown should toggle open modifier class when label clicked - Test ${i}`, t => {
    const wrapper = shallow(jsx);
    t.false(wrapper.hasClass('cbn-dropdown--open'));
    wrapper.find('.cbn-dropdown__label')
      .simulate('click');
    t.true(wrapper.hasClass('cbn-dropdown--open'));
    t.true(dataSet.onOpened.called);
  });
});
