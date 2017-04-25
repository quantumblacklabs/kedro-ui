import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Tooltip from './tooltip';

test('Tooltip should be a function', t => {
  t.is(typeof Tooltip, 'function');
});

test('Tooltip should render the correct structure', t => {
  const wrapperWithoutHeader = shallow(
    <Tooltip value='Hello World' />
  );

  const wrapperWithHeader = shallow(
    <Tooltip
      header='Hello Header'
      value='Hello World' />
  );

  t.true(wrapperWithoutHeader.find('.cbn-tooltip').length === 1);
  t.true(wrapperWithoutHeader.find('.cbn-tooltip__text').length === 1);
  t.true(wrapperWithoutHeader.find('.cbn-tooltip__header').length === 0);

  t.true(wrapperWithHeader.find('.cbn-tooltip').length === 1);
  t.true(wrapperWithHeader.find('.cbn-tooltip__text').length === 1);
  t.true(wrapperWithHeader.find('.cbn-tooltip__header').length === 1);
});
