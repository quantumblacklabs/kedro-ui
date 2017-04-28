import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Tooltip from './tooltip';

test('Tooltip should be a function', t => {
  t.is(typeof Tooltip, 'function');
});

test('Tooltip should render the correct structure', t => {
  const wrapped = shallow(
    <Tooltip>
      <span className='tt-test-text'>Hello</span>
    </Tooltip>
  );

  t.true(wrapped.find('.cbn-tooltip').length === 1);
  t.true(wrapped.find('.tt-test-text').length === 1);
});
