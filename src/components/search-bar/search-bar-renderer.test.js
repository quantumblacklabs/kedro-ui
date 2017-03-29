import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import SearchBarRenderer from './search-bar-renderer';

// check the type of the component
test('SearchBarRenderer should be a function', t => {
  t.is(typeof SearchBarRenderer, 'function');
});

// check the type of the component
test('SearchBarRenderer should render correct structure', t => {
  const wrapper = shallow(
    <SearchBarRenderer
      iconType='refresh'
      theme='dark'
      value='hello world' />
  );

  t.is(wrapper.find('input').length, 1);
  t.is(wrapper.find('Icon').length, 2);
});

// check the type of the component
test('SearchBarRenderer should trigger change handler correctly', t => {
  const onChange = sinon.spy();

  const wrapper = shallow(
    <SearchBarRenderer
      iconType='refresh'
      theme='dark'
      onChange={onChange}
      value='hello world' />
  );

  for (let i = 0; i < 5; i += 1) {
    wrapper.find('input')
           .simulate('change', { target: { value: i } });
  }

  t.is(onChange.callCount, 5);
});
