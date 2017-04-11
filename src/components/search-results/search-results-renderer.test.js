import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import SearchResultsRenderer from './search-results-renderer';

// check the type of the component
test('SearchResultsRenderer should be a function', t => {
  t.is(typeof SearchResultsRenderer, 'function');
});

// check the type of the component
test('SearchResultsRenderer should render correct structure', t => {
  const wrapper = shallow(
    <SearchResultsRenderer
      results={[{
        formattedLabel: 'Lorem ipsum dolor sit amet',
        label: 'Lorem ipsum dolor sit amet'
      }]} />
  );

  t.is(wrapper.find('.cbn-searchresults__list').length, 1);
  t.is(wrapper.find('.cbn-searchresults__row').length, 1);
});

test('SearchResultsRenderer should have a light theme class', t => {
  const wrapper = shallow(
    <SearchResultsRenderer theme='light' />
  );

  t.true(wrapper.find('.cbn-theme--light').length === 1);
});

test('SearchResultsRenderer should have a dark theme class', t => {
  // dark theme is default, so it should be automatically assigned
  const wrapper = shallow(
    <SearchResultsRenderer theme='dark' />
  );

  t.true(wrapper.find('.cbn-theme--dark').length === 1);
});
