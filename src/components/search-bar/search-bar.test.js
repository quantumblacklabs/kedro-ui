import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from './search-bar';

// check the type of the component
test('SearchBar should be a function', t => {
  t.is(typeof SearchBar, 'function');
});

// should render correctly
test('SearchBar should render correctly', t => {
  const wrapper = shallow(
    <SearchBar />
  );

  t.is(wrapper.props().iconType, 'refresh');
  t.is(typeof wrapper.props().onChange, 'function');
  t.is(typeof wrapper.props().onClear, 'function');
});
