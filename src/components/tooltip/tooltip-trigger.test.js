import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import TooltipTrigger from './tooltip-trigger';

configure({ adapter: new Adapter() });

let TTView = null;
let el = null;

beforeEach(() => {
  el = document.createElement('div');
  el.classList.add('kui-tooltip');
  el.dataset.tooltipId = 'test';

  document.body.appendChild(el);

  /**
   * TestComponent
   */
  const TestComponent = () => <span className='test' />;
  TTView = TooltipTrigger(TestComponent);
});

afterEach(() => {
  document.body.removeChild(el);
  el = null;
  TTView = null;
});

test('TooltipTrigger should be a function', () => {
  expect(typeof TooltipTrigger)
    .toBe('function');
});

test('TooltipTrigger should render the correct structure', () => {
  const shallowTTView = shallow(
    <TTView displayDirection='left' tooltipId='test' />
  );

  expect(shallowTTView.find('.kui-tooltip-trigger').length === 1)
    .toBeTruthy();
});

test('It adds the correct class to the tooltip', () => {
  const mountTTView = mount(
    <TTView displayDirection='left' tooltipId='test' />
  );

  expect(el.classList.contains('kui-tooltip--fixed'))
    .toBeTruthy();
});

test('It should remove the tooltip when page is scrolled', () => {
  const mountTTView = mount(
    <TTView displayDirection='left' tooltipId='test' />
  );

  // Simulate scroll event to trigger internal hideTooltip
  window.dispatchEvent(new Event('scroll'));
  mountTTView.update();

  expect(el.classList.contains('kui-tooltip--hidden'))
    .toBeTruthy();
});

test('It should apply position class when calling handle event', () => {
  ['top', 'left', 'bottom', 'right', null].forEach(dir => {
    const mountTTView = mount(
      <TTView displayDirection={dir} tooltipId='test' />
    );
    
    /** Trigger handle event */
    const handleEvent = () => {
      mountTTView
        .instance()
        ._handleEvent();
    };

    if (!dir) {
      expect(handleEvent)
        .toThrow();

      return;
    }
     
    handleEvent();

    expect(el.classList.contains(`kui-tooltip--${dir}`))
      .toBeTruthy();
  });
});

it('Should add / remove global listeners correctly', () => {
  const map = {};
  
  window.addEventListener = jest.fn((event, cb) => {
    map[event] = cb;
  });

  window.removeEventListener = jest.fn((event, cb) => {
    delete map[event];
  });

  const mountTTView = mount(
    <TTView displayDirection='left' tooltipId='test' />
  );

  expect(map.scroll)
    .toBeTruthy();

  mountTTView.unmount();

  expect(map.scroll)
    .toBeFalsy();
});
