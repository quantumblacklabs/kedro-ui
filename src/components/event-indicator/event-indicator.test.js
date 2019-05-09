import React from 'react';
import { shallow, configure, mount } from 'enzyme';
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

let eventIndicatorJsx = null;

mockData.forEach((data, i) => {
  beforeAll(() => {
    eventIndicatorJsx = (
      <EventIndicator
        colorIndex={data.colorIndex}
        count={data.count}
        name={data.name}
        theme={data.theme} />
    );
  });

  test(`EventIndicator should be a function - Test ${i}`, () => {
    expect(typeof EventIndicator)
      .toBe('function');
  });

  test(`EventIndicator should create a valid React Component when called with required props - Test ${i}`, () => {
    const indicator = shallow(eventIndicatorJsx)
      .find('.cbn-sg-playground__event-wrapper');

    expect(indicator.children().length === 1)
      .toBeTruthy();
  });

  it(`Should reset the animation when updated - Test ${i}`, () => {
    const indicator = mount(eventIndicatorJsx);
    const cb = jest.fn();

    indicator.instance()._anim = {
      restart: cb
    };

    indicator.setProps({
      count: 100
    });

    indicator.update();

    expect(cb)
      .toHaveBeenCalled();
  });

  it(`Should kill any animation when unmounting - Test ${i}`, () => {
    const indicator = mount(eventIndicatorJsx);
    const cb = jest.fn();

    indicator.instance()._anim = {
      kill: cb
    };

    indicator.unmount();

    expect(cb)
      .toHaveBeenCalled();
  });
});
