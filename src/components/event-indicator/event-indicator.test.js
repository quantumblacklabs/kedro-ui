import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import EventIndicator from './event-indicator';

configure({ adapter: new Adapter() });

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
  test(`EventIndicator should be a function - Test ${i}`, () => {
    expect(typeof EventIndicator)
      .toBe('function');
  });

  test(`EventIndicator should create a valid React Component when called with required props - Test ${i}`, () => {
    const eventIndicatorJsx = (
      <EventIndicator
        colorIndex={data.colorIndex}
        count={data.count}
        name={data.name}
        theme={data.theme} />
    );

    const indicator = shallow(eventIndicatorJsx)
      .find('.cbn-sg-playground__event-wrapper');

    expect(indicator.children().length === 1)
      .toBeTruthy();
  });
});
