import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import SearchResultsRenderer from './search-results-renderer';

const props = {
  value: '',
  results: [{
    formattedLabel: 'Lorem ipsum dolor sit amet',
    icon: 'copy',
    label: 'Lorem ipsum dolor sit amet'
  }]
};

test('SearchResultsRenderer should be a function', t => {
  t.is(typeof SearchResultsRenderer, 'function');
});

test('SearchResultsRenderer should render correct structure', t => {
  const wrapper = shallow(
    <SearchResultsRenderer {...props} />
  );
  t.is(wrapper.find('.cbn-searchresults__list').length, 1);
  t.is(wrapper.find('.cbn-searchresults__row').length, 1);
});

test('SearchResultsRenderer should have a light theme class', t => {
  const wrapper = shallow(
    <SearchResultsRenderer theme='light' {...props} />
  );
  t.true(wrapper.find('.cbn-theme--light').length === 1);
});

test('SearchResultsRenderer should have a dark theme class', t => {
  const wrapper = shallow(
    <SearchResultsRenderer theme='dark' {...props} />
  );
  t.true(wrapper.find('.cbn-theme--dark').length === 1);
});
