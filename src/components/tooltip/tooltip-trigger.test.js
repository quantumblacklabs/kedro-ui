import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import TooltipTrigger from './tooltip-trigger';

test('TooltipTrigger should be a function', t => {
  t.is(typeof TooltipTrigger, 'function');
});

test('TooltipTrigger should render the correct structure', t => {
  /**
   * TestComponent
   */
  const TestComponent = () => <span className='test' {...this.props} />;

  const TTView = TooltipTrigger(TestComponent);

  const shallowTTView = shallow(
    <TTView displayDirection='left' id='2' />
  );

  t.true(shallowTTView.find('.cbn-tooltip-trigger').length === 1);
});
