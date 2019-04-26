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
        new EventController()
    }).not.toThrow();
});

test('Should have correct static methods', () => {
    expect(() => {
        new EventController()
    }).not.toThrow();
});

test('Should have correct static methods', () => {
    const e = EventController;

    expect(typeof e.addBodyListener)
        .toBe('function');

    expect(typeof e.removeBodyListeners)
        .toBe('function');
});