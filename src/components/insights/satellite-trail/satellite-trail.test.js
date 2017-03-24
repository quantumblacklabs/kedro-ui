import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import SatelliteTrail from './satellite-trail';

const mockData = [
  {
    color: 'powderblue',
    dots: 10,
    endPos: { x: 80, y: 40 },
    firstDotRadius: 1,
    lastDotRadius: 0.2,
    startPos: { x: 0, y: 20 }
  },
  {
    color: 'red',
    dots: 2,
    endPos: { x: 0, y: 0 },
    firstDotRadius: 100,
    lastDotRadius: 200,
    startPos: { x: 100, y: 2000 }
  },
  {
    borderColor: 'black',
    borderWidth: 10,
    color: 'red',
    dots: 2,
    endPos: { x: 0, y: 0 },
    firstDotRadius: 100,
    lastDotRadius: 200,
    startPos: { x: 100, y: 2000 }
  }
];

test('SatelliteTrail should be a function', t => {
  t.is(typeof SatelliteTrail, 'function');
});

// check all valid props work
// for (let i in mockData) {
mockData.forEach(datum => {
  test('SatelliteTrail should create a valid React Component when called with required props', t => {
    const instance = React.createElement(SatelliteTrail, datum);
    t.is(instance.constructor.name, 'Object');

    const wrapper = shallow(<SatelliteTrail {...datum} />);

    // assert shape is present in dom
    t.true(wrapper.find('.qb-satellite-trail__shape').length === datum.dots);

    // assert all props have been set
    Object.keys(datum)
      .forEach(key => {
        t.true(instance.props[key] === datum[key]);
      });
  });
});
