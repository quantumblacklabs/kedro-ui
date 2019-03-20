import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchResultsRenderer from './search-results-renderer';
import { getHighlightedText } from './search-results-utils';

configure({ adapter: new Adapter() });

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

test('SearchResultsRenderer should be a function', () => {
  expect(typeof SearchResultsRenderer)
    .toBe('function');
});

test('SearchResultsRenderer should render correct structure', () => {
  const wrapper = shallow(
    <SearchResultsRenderer {...testProps} />
  );
  expect(wrapper.find('.cbn-search-results__list'))
    .toHaveLength(1);
  expect(wrapper.find('.cbn-search-results__row'))
    .toHaveLength(testProps.results.length);
});

test('SearchResultsRenderer should have a light theme class', () => {
  const wrapper = shallow(
    <SearchResultsRenderer {...testProps} theme='light' />
  );
  expect(wrapper.find('.cbn-theme--light').length === 1)
    .toBeTruthy();
});

test('SearchResultsRenderer should have a dark theme class', () => {
  const wrapper = shallow(
    <SearchResultsRenderer {...testProps} theme='dark' />
  );
  expect(wrapper.find('.cbn-theme--dark').length === 1)
    .toBeTruthy();
});

test('SearchResults should highlight the active row', () => {
  const activeRow = 6;
  const wrapper = shallow(
    <SearchResultsRenderer {...testProps} activeRow={activeRow} />
  );

  expect(wrapper.find('.cbn-search-results__row--active'))
    .toHaveLength(1);
  expect(wrapper.find('.cbn-search-results__row--active')
    .prop('title'))
    .toBe(testProps.results[activeRow].label);
});
