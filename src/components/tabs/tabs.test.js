import test from 'ava';
import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import Tabs from './tabs';

configure({ adapter: new Adapter() });

const jsx = (
  <Tabs tabs={['Overview', 'Location (98)', 'Sensors', 'Log', 'Related']} />
);

test('Tabs should be a function', t => {
  t.is(typeof Tabs, 'function');
});

test('Tabs should create a valid React Component when called with required props', t => {
  const wrapper = shallow(jsx);
  t.true(wrapper.length === 1);
});

test('Tabs should be created with the correct default props', t => {
  const wrapper = shallow(jsx);
  t.is(typeof wrapper.props().onSelect, 'function');
  t.is(wrapper.props().selectedIndex, 0);
  t.is(wrapper.props().size, 'regular');
  t.is(wrapper.props().theme, 'dark');
});

test('Tabs should be created with all the user defined props', t => {
  const tabData = [
    { text: 'One' },
    { text: 'Two' },
    { text: 'Three' }
  ];
  const spy = sinon.spy();
  const wrapper = mount(
    <Tabs
      onSelect={spy}
      selectedIndex={1}
      size='small'
      tabs={tabData}
      theme='light' />
  );

  wrapper.find('button')
    .first()
    .simulate('click');

  t.is(spy.callCount, 1);

  // // also verify the structure
  t.is(wrapper.find('li').length, 3);
});
