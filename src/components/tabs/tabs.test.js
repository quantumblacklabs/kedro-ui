import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import Tabs from './tabs';

configure({ adapter: new Adapter() });

const jsx = (
  <Tabs tabs={['Overview', 'Location (98)', 'Sensors', 'Log', 'Related']} />
);

test('Tabs should be a function', () => {
  expect(typeof Tabs)
    .toBe('function');
});

test('Tabs should create a valid React Component when called with required props', () => {
  const wrapper = shallow(jsx);
  expect(wrapper.length === 1)
    .toBeTruthy();
});

test('Tabs should be created with the correct default props', () => {
  const wrapper = shallow(jsx);
  expect(typeof wrapper.props().onSelect)
    .toBe('function');
  expect(wrapper.props().selectedIndex)
    .toBe(0);
  expect(wrapper.props().size)
    .toBe('regular');
  expect(wrapper.props().theme)
    .toBe('dark');
});

test('Tabs should be created with all the user defined props', () => {
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

  expect(spy.callCount)
    .toBe(1);

  // also verify the structure
  expect(wrapper.find('li').length)
    .toBe(3);
});
