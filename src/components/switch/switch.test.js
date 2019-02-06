import test from 'ava';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Switch from './switch';

configure({ adapter: new Adapter() });

test('Switch should be a function', t => {
  t.is(typeof Switch, 'function');
});

test('Switch should create a valid React Component when called with required props', t => {
  const wrapper = shallow(
    <Switch
      id={1}
      name='test'
      type='checkbox'
      value={1} />
  );

  t.true(wrapper.children().length === 1);
  t.is(wrapper.find('input').length, 1);
});

test('Switch should trigger onChange event when clicked', t => {
  const onChanged = sinon.spy();

  const wrapper = shallow(
    <Switch
      onChange={onChanged}
      id={1}
      name='test'
      type='radio'
      value={1} />
  );

  wrapper.find('.cbn-switch__input')
         .simulate('change', { target: { checked: true } });

  t.is(onChanged.callCount, 1);
});
