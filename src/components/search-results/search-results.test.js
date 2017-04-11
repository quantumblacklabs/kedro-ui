import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import SearchResults from './search-results';

test('SearchResults should be a function', t => {
  t.is(typeof SearchResults, 'function');
});

test('SearchResults should render correctly', t => {
  const wrapper = shallow(
    <SearchResults />
  );

  t.is(typeof wrapper.props().onClick, 'function');
  t.is(typeof wrapper.props().onMouseOver, 'function');
});

/**
 * Create a regular expression for highlighting a keyword
 */
const valueRegex = value => new RegExp(value, 'gi');

test('SearchResults should highlight search terms', t => {
  const { highlightSearchTerm } = SearchResults;
  const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  const highlight = shallow(
    highlightSearchTerm(text, valueRegex('aMeT'))
  );

  // Check successful matches
  t.true(highlight.hasClass('cbn-searchresults__label'));
  t.is(highlight.find('b').length, 1);
  t.is(highlight.find('b').text(), 'amet');
  // Check failed match
  t.is(
    highlightSearchTerm(text, valueRegex('qwertyuiop')),
    text
  );
});

test('SearchResults should truncate over-long strings', t => {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed diam nonumy eirmod tempor.';
  const wrapper = shallow(
    <SearchResults />
  );

  /**
   * Truncate a string using the SearchResults truncateString method
   */
  const truncate = value => wrapper.instance()
    .truncateString(text, valueRegex(value), value.length);

  t.is(truncate(''), 'Lorem ipsum dolor sit amet, co…');
  t.is(truncate('Lorem'), 'Lorem ipsum dolor sit amet, co…');
  t.is(truncate('consectetur'), '…olor sit amet, consectetur adipisicing elit…');
  t.is(truncate('diam'), '…sed diam nonumy eirmod tempor.');
});
