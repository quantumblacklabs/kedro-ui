import React from 'react';
import { shallow, configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import EventController from './event-controller';

configure({ adapter: new Adapter() });

test('Should be correct type', () => {
  expect(typeof EventController)
    .toBe('function');
}); 

test('Should not throw when creating new', () => {
  expect(() => {
    new EventController();
  }).not.toThrow();
});

test('Should have correct static methods', () => {
  const e = EventController;

  expect(typeof e.addBodyListener)
    .toBe('function');

  expect(typeof e.removeBodyListeners)
    .toBe('function');
});

test('Should create __bodyEventHandlers on window when adding first listener', () => {
  const cb = jest.fn();
  const map = {};

  document.body.addEventListener = jest.fn((event, cb) => {
    map[event] = cb;
  });
  
  EventController.addBodyListener(cb);
  
  expect(window.__bodyEventHandlers)
    .toBeTruthy();

  expect(map.click)
    .toBe(cb);
});

test('Should remove all listeners correctly', () => {
  const cb = jest.fn();
  const map = {};
  
  document.body.addEventListener = jest.fn((event, cb) => {
    map[event] = cb;
  });

  document.body.removeEventListener = jest.fn((event, cb) => {
    delete map[event];
  });
    
  EventController.addBodyListener(cb);
  EventController.removeBodyListeners();

  expect(window.__bodyEventHandlers.length)
    .toBeFalsy();

  expect(map.click)
    .toBeFalsy();
});
