import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

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

  t.is(wrapper.find('GSAPEnhancer').length, 1);
  t.is(wrapper.find('Icon').length, 2);
});
