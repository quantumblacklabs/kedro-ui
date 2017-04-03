import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import SearchResults from './search-results';

// check the type of the component
test('SearchResults should be a function', t => {
  t.is(typeof SearchResults, 'function');
});

// should render correctly
test('SearchResults should render correctly', t => {
  const wrapper = shallow(
    <SearchResults />
  );

  t.is(wrapper.props().iconType, 'refresh');
  t.is(typeof wrapper.props().onChange, 'function');
  t.is(typeof wrapper.props().onClear, 'function');
});
