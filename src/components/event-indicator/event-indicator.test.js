import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import EventIndicator from './event-indicator';

const mockData = [
  {
    colorIndex: 1,
    count: 5,
    name: 'mock one',
    theme: 'light'
  },
  {
    colorIndex: 2,
    count: 10,
    name: 'mock two'
  }
];

mockData.forEach((data, i) => {
  test(`EventIndicator should be a function - Test ${i}`, t => {
    t.is(typeof EventIndicator, 'function');
  });

  test(`EventIndicator should create a valid React Component when called with required props - Test ${i}`, t => {
    const eventIndicatorJsx = (
      <EventIndicator
        colorIndex={data.colorIndex}
        count={data.count}
        name={data.name}
        theme={data.theme} />
    );

    const indicator = shallow(eventIndicatorJsx)
      .find('.cbn-sg-playground__event-wrapper');

    t.true(indicator.children().length === 1);
  });
});
