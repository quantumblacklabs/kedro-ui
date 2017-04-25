import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import SearchResultsRenderer from './search-results-renderer';
import { getHighlightedText } from './search-results-utils';

const dummyProps = {
  value: '',
  results: [
    { icon: 'copy', label: 'Lorem ipsum dolor sit amet' },
    { icon: 'paste', label: 'Consetetur sadipscing elitr' },
    { icon: 'undo', label: 'Sed diam nonumy eirmod tempor' },
    { icon: 'cut', label: 'Invidunt ut labore et dolore magna aliquyam erat' },
    { icon: 'refresh', label: 'Sed diam voluptua' },
    { label: 'At vero eos et accusam et justo duo dolores et ea rebum' },
    { label: 'Vel, facere officia consectetur labore' },
    { label: 'Quaerat quo reprehenderit' },
    { label: 'Nisi ipsam totam optio illo' },
    { label: 'Delectus hic aspernatur corporis culpa' },
    { label: 'Placeat eveniet quod, illum' },
    { label: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque' }
  ].map(result => ({
    formattedLabel: getHighlightedText(result.label),
    ...result
  }))
};

test('SearchResultsRenderer should be a function', t => {
  t.is(typeof SearchResultsRenderer, 'function');
});

test('SearchResultsRenderer should render correct structure', t => {
  const wrapper = shallow(
    <SearchResultsRenderer {...dummyProps} />
  );
  t.is(wrapper.find('.cbn-searchresults__list').length, 1);
  t.is(wrapper.find('.cbn-searchresults__row').length, dummyProps.results.length);
});

test('SearchResultsRenderer should have a light theme class', t => {
  const wrapper = shallow(
    <SearchResultsRenderer theme='light' {...dummyProps} />
  );
  t.true(wrapper.find('.cbn-theme--light').length === 1);
});

test('SearchResultsRenderer should have a dark theme class', t => {
  const wrapper = shallow(
    <SearchResultsRenderer theme='dark' {...dummyProps} />
  );
  t.true(wrapper.find('.cbn-theme--dark').length === 1);
});

test('SearchResults should highlight the active row', t => {
  const activeRow = 6;
  const wrapper = shallow(
    <SearchResultsRenderer activeRow={activeRow} {...dummyProps} />
  );

  t.is(wrapper.find('.cbn-searchresults__row--active').length, 1);
  t.is(
    wrapper.find('.cbn-searchresults__row--active')
      .find('.cbn-searchresults__label')
      .text(),
    dummyProps.results[activeRow].label
  );
});
