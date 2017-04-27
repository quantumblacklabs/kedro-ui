import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Toggle from './toggle';

test('Toggle should be a function', t => {
  t.is(typeof Toggle, 'function');
});

test('Toggle should create a valid React Component when called with required props', t => {
  const wrapper = shallow(<Toggle />);

  t.true(wrapper.length === 1);
});

test('Toggle should be created with the correct default props', t => {
  const wrapper = shallow(<Toggle />);

  t.is(typeof wrapper.props().onChange, 'function');
  t.is(wrapper.props().value, 'on');
  t.is(wrapper.props().type, 'regular');
  t.is(wrapper.props().theme, 'dark');
});

test('Toggle should be created with all the user defined props', t => {
  const spy = sinon.spy();
  const jsx = (
    <Toggle
      label='Wifi'
      onChange={spy}
      value='off'
      type='bold'
      theme='light' />
  );
  const wrapper = mount(jsx);

  t.is(wrapper.props().label, 'Wifi');
  t.is(wrapper.props().value, 'off');
  t.is(wrapper.props().type, 'bold');
  t.is(wrapper.props().theme, 'light');

  wrapper.find('.cbn-toggle__switch')
    .children()
    .last()
    .simulate('click', { target: { dataset: { value: 'off' } } });

  t.is(spy.callCount, 1);

  // also verify the structure
  t.is(wrapper.find('.cbn-toggle__label').length, 1);
  t.is(wrapper.find('.cbn-toggle__button').length, 2);
});
