import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TooltipTrigger from './tooltip-trigger';

configure({ adapter: new Adapter() });

test('TooltipTrigger should be a function', () => {
  expect(typeof TooltipTrigger)
    .toBe('function');
});

test('TooltipTrigger should render the correct structure', () => {
  /**
   * TestComponent
   */
  const TestComponent = () => <span className='test' />;

  const TTView = TooltipTrigger(TestComponent);

  const shallowTTView = shallow(
    <TTView displayDirection='left' tooltipId='2' />
  );

  expect(shallowTTView.find('.cbn-tooltip-trigger').length === 1)
    .toBeTruthy();
});
