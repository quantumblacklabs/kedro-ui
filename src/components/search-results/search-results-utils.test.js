import test from 'ava';

import { getValueRegex, getHighlightedText } from './search-results-utils';

test('getValueRegex should return a regular expression', t => {;
  t.is(getValueRegex(), false);
  t.is(getValueRegex(''), false);
  t.is(getValueRegex('foo').toString(), '/(foo)/gi');
  t.is(getValueRegex('<foo>').toString(), '/(foo)/gi');
});

test('getHighlightedText should highlight search terms', t => {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  const match1 = getHighlightedText(text, 'AmEt');
  const match2 = getHighlightedText(text, 'lor');
  const fail = getHighlightedText(text, 'qwertyuiop');

  // Check successful matches
  t.is(match1.match(/<b>/g).length, 1);
  t.is(match2.match(/<b>/g).length, 2);
  t.is(match1.match(/<b>(\w+)<\/b>/)[1], 'amet');
  // Check failed match
  t.is(fail.match(/<b>/g), null);
});
