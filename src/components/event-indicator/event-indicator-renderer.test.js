import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import EventIndicatorRenderer from './event-indicator-renderer';

configure({ adapter: new Adapter() });

const mockData = [
  {
    color: 'blue',
    count: 1,
    name: 'mock one',
    theme: 'light'
  },
  {
    color: 'white',
    count: 22,
    name: 'mock two'
  }
];

mockData.forEach((data, i) => {
  test(`EventIndicatorRenderer should be a function - Test ${i}`, () => {
    expect(typeof EventIndicatorRenderer)
      .toBe('function');
  });

  test(`EventIndicatorRenderer should create a valid React Component when called with required props - Test ${i}`,
    () => {
      const eventIndicatorRendererJsx = (
        <EventIndicatorRenderer
          color={data.color}
          count={data.count}
          name={data.name}
          theme={data.theme} />
      );

      const wrapper = mount(eventIndicatorRendererJsx);

      // should have two circles
      const indicatorCircles = wrapper.find('circle');
      expect(indicatorCircles.getElements().length === 2)
        .toBeTruthy();

      // should have two text elements
      const indicatorTexts = wrapper.find('text');
      expect(indicatorTexts.getElements().length === 2)
        .toBeTruthy();

      // one text element should contain the name
      const name = wrapper.find('.cbn-sg-playground__event-name');
      expect(name.text())
        .toBe(data.name);

      // one text element should contain the count value
      const count = wrapper.find('.cbn-sg-playground__event-count');
      expect(count.text())
        .toBe(data.count.toString());
    });
});
