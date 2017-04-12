import test from 'ava';
import { shallow } from 'enzyme';

import {
  // getValueRegex,
  highlightSearchTerm,
  truncateString
} from './search-results-utils';

test('SearchResults should highlight search terms', t => {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  const highlight = shallow(
    highlightSearchTerm(text, 'aMeT')
  );

  // Check successful matches
  t.is(highlight.find('b').length, 1);
  t.is(highlight.find('b').text(), 'amet');
  // Check failed match
  t.is(
    highlightSearchTerm(text, 'qwertyuiop'),
    text
  );
});

test('SearchResults should truncate over-long strings', t => {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed diam nonumy eirmod tempor.';
  const maxLabelLength = 30;
  /**
   * Pre-populate string truncation arguments
   * @param  {[string]} value - String to highlight
   * @return {[string]} Truncated text
   */
  const truncate = value => truncateString(text, maxLabelLength, value);

  t.is(truncate(''), 'Lorem ipsum dolor sit amet, co…');
  t.is(truncate('Lorem'), 'Lorem ipsum dolor sit amet, co…');
  t.is(truncate('Invalid match'), 'Lorem ipsum dolor sit amet, co…');
  t.is(truncate('consectetur'), '…olor sit amet, consectetur adipisicing elit…');
  t.is(truncate('diam'), '…sed diam nonumy eirmod tempor.');
});
