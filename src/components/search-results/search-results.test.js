import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import SearchResults from './search-results';

test('SearchResults should be a function', t => {
  t.is(typeof SearchResults, 'function');
});

test('SearchResults should render correctly', t => {
  const wrapper = shallow(
    <SearchResults
      value=''
      results={[]} />
  );

  t.is(typeof wrapper.props().onClick, 'function');
  t.is(typeof wrapper.props().onMouseOver, 'function');
});
