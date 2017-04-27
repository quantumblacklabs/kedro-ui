import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Tabs from './tabs';

const mockData = [
  {
    tabs: ['Overview', 'Location (98)', 'Sensors', 'Log', 'Related'],
    onSelected: sinon.spy(() => {})
  }
];

mockData.forEach((dataSet, i) => {
  const jsx = (
    <Tabs {...dataSet} />
  );

  test(`Tabs should be a function - Test ${i}`, t => {
    t.is(typeof Tabs, 'function');
  });

  test(`Tabs should create a valid React Component when called with required props - Test ${i}`, t => {
    const wrapper = shallow(jsx);
    t.true(wrapper.length === 1);
  });

  test(`Tabs should be created with the correct default props - Test ${i}`, t => {
    const wrapper = shallow(jsx);
    t.is(typeof wrapper.props().onSelect, 'function');
    t.is(wrapper.props().selectedIndex, 0);
    t.is(wrapper.props().size, 'regular');
    t.is(wrapper.props().theme, 'dark');
  });
});

const spy = sinon.spy();

const jsx = (
  <Tabs
    onSelect={spy}
    selectedIndex={1}
    size='small'
    tabs={['One', 'Two', 'Three']}
    theme='light' />
);

test('Tabs should be created with all the user defined props', t => {
  const wrapper = mount(jsx);
  t.is(wrapper.props().selectedIndex, 1);
  t.is(wrapper.props().size, 'small');
  t.deepEqual(wrapper.props().tabs, ['One', 'Two', 'Three']);
  t.is(wrapper.props().theme, 'light');

  // also verify the structure
  t.is(wrapper.find('li').length, 3);
});
