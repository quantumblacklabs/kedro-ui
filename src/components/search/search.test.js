import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Search from './search';
import { getHighlightedText } from '../search-results/search-results-utils';

const testProps = {
  activeRow: null,
  height: null,
  hidden: false,
  onClick: null,
  onMouseOver: null,
  row: {
    height: 40,
    maxRows: 5,
    padding: 8
  },
  theme: 'dark',
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
    highlightedLabel: getHighlightedText(result.label),
    ...result
  })),
  value: ''
};

test('Search should be a function', t => {
  t.is(typeof Search, 'function');
});

test('Search should render correct structure', t => {
  const wrapper = shallow(
    <Search {...testProps} />
  );
  t.is(wrapper.find('.cbn-search').length, 1);
  t.is(wrapper.find('.cbn-searchbar').length, 1);
  t.is(wrapper.find('.cbn-search-results').length, 1);
});

test('Search should have a light theme class', t => {
  const wrapper = shallow(
    <Search {...testProps} theme='light' />
  );
  t.true(wrapper.find('.cbn-theme--light').length === 2);
});

test('Search should have a dark theme class', t => {
  const wrapper = shallow(
    <Search {...testProps} theme='dark' />
  );
  t.true(wrapper.find('.cbn-theme--dark').length === 2);
});

test('SearchResults should highlight the active row', t => {
  const activeRow = 6;
  const wrapper = shallow(
    <Search {...testProps} activeRow={activeRow} />
  );

  t.is(wrapper.find('.cbn-search-results__row--active').length, 1);
  t.is(
    wrapper.find('.cbn-search-results__row--active')
      .prop('title'),
    testProps.results[activeRow].label
  );
});
