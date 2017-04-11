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

  t.is(typeof wrapper.props().onClick, 'function');
  t.is(typeof wrapper.props().onMouseOver, 'function');
});
