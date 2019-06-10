import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Tooltip from './tooltip';

configure({ adapter: new Adapter() });

test('Tooltip should be a function', () => {
  expect(typeof Tooltip)
    .toBe('function');
});

test('Tooltip should render the correct structure', () => {
  const wrapped = shallow(
    <Tooltip>
      <span className='tt-test-text'>Hello</span>
    </Tooltip>
  );

  expect(wrapped.find('.kui-tooltip').length === 1)
    .toBeTruthy();
  expect(wrapped.find('.tt-test-text').length === 1)
    .toBeTruthy();
});
