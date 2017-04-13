import test from 'ava';
import { shallow } from 'enzyme';

import { getValueRegex, highlightSearchTerm } from './search-results-utils';

test('getValueRegex should return a regular expression', t => {
  t.false(getValueRegex());
  t.false(getValueRegex(''));
  t.is(getValueRegex('foo'), new RegExp('foo', 'gi'));
});

test('highlightSearchTerm should highlight search terms', t => {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  /**
   * Highlight a search term and return a shallow enzyme copy
   * @param  {[string]} value - The keyword to highlight
   * @return {[object]} An enzyme shallow copy of a React node
   */
  const getHighlight = value => shallow(
    highlightSearchTerm(text, value)
  );

  const match1 = getHighlight('AmEt');
  const match2 = getHighlight('lor');
  const fail = getHighlight('qwertyuiop');

  // Check successful matches
  t.true(match1.hasClass('cbn-searchresults__label'));
  t.is(match1.find('b').length, 1);
  t.is(match2.find('b').length, 2);
  t.is(match1.find('b').text(), 'amet');
  // Check failed match
  t.is(fail.find('b').length, 0);
});
