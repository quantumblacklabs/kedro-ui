import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import MenuItem from '../menu-item/menu-item';

const mockData = [
  {
    primaryText: 'Test 123',
    onClick: sinon.spy(() => {})
  },
  {
    primaryText: 'Test 456',
    onClick: sinon.spy(() => {})
  }
];

mockData.forEach((dataSet, i) => {
  const jsx = <MenuItem {...dataSet} />;

  test(`MenuItem should be a function - Test ${i}`, t => {
    t.is(typeof MenuItem, 'function');
  });

  test(`MenuItem should contain text - Test ${i}`, t => {
    const wrapper = shallow(jsx);
    t.true(wrapper.find('.cbn-menu-item__content')
      .text()
      === dataSet.primaryText);

    t.true(wrapper.find(`.cbn-menu-item__content[title="${dataSet.primaryText}"]`).length
      === 1);
  });

  if (typeof dataSet.onClick === 'function') {
    test(`MenuItem should fire onClick event handler when clicked - Test ${i}`, t => {
      const wrapper = shallow(jsx);
      wrapper.simulate('click');
      t.true(dataSet.onClick.called);
    });
  }
});
