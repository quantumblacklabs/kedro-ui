import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './search';
import SearchBar from '../search-bar/search-bar';
import SearchResults from '../search-results/search-results';
import { getHighlightedText } from '../search-results/search-results-utils';

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

test('Search should be a function', () => {
  expect(typeof Search)
    .toBe('function');
});

test('Search should render correct structure', () => {
  const wrapper = shallow(
    <Search {...testProps} />
  );
  const searchBarRenderComponent = wrapper.find(SearchBar)
    .dive()
    .dive();
  const searchResultsRenderComponent = wrapper.find(SearchResults)
    .dive()
    .dive();

  expect(wrapper.find('.cbn-search'))
    .toHaveLength(1);
  expect(searchBarRenderComponent.find('.cbn-searchbar'))
    .toHaveLength(1);
  expect(searchResultsRenderComponent.find('.cbn-search-results'))
    .toHaveLength(1);
});

test('Search should have a light theme class', () => {
  const wrapper = shallow(
    <Search {...testProps} theme='light' />
  );
  const searchResultsRenderComponent = wrapper.find(SearchResults)
    .dive()
    .dive();

  expect(searchResultsRenderComponent.find('.cbn-theme--light'))
    .toHaveLength(1);
});

test('Search should have a dark theme class', () => {
  const wrapper = shallow(
    <Search {...testProps} theme='dark' />
  );
  const searchResultsRenderComponent = wrapper.find(SearchResults)
    .dive()
    .dive();

  expect(searchResultsRenderComponent.find('.cbn-theme--dark'))
    .toHaveLength(1);
});

test('SearchResults should highlight the active row', () => {
  const activeRow = 6;
  const wrapper = shallow(
    <Search {...testProps} activeRow={activeRow} />
  );
  const searchResultsRenderComponent = wrapper.find(SearchResults)
    .dive()
    .dive();

  expect(searchResultsRenderComponent.find('.cbn-search-results__row--active'))
    .toHaveLength(1);
  expect(
    searchResultsRenderComponent.find('.cbn-search-results__row--active')
      .prop('title')
  )
    .toBe(testProps.results[activeRow].label);
});

test('Should change active row correctly', () => {
  const activeRow = 6;
  const wrapper = shallow(
    <Search {...testProps} activeRow={activeRow} />
  );

  wrapper.instance()
    ._changeActiveRow(+1);

  expect(wrapper.state().activeRow)
    .toBe(7);

  wrapper.instance()
    ._changeActiveRow(-1);

  expect(wrapper.state().activeRow)
    .toBe(6);

  wrapper.instance()
    ._changeActiveRow(+100);

  expect(wrapper.state().activeRow)
    .toBe(null);

  wrapper.instance()
    ._changeActiveRow(+1);

  expect(wrapper.state().activeRow)
    .toBe(0);
});
