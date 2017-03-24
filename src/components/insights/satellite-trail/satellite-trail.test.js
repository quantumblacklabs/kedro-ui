import test from 'ava';
import React from 'react';
import SatelliteTrail from './satellite-trail';
import { shallow } from 'enzyme';
import sinon from 'sinon';

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
for (let i in mockData) {
  test('SatelliteTrail should create a valid React Component when called with required props', t => {
    let instance = React.createElement(SatelliteTrail, mockData[i]);
    t.is(instance.constructor.name, 'Object');

    const wrapper = shallow(<SatelliteTrail { ...mockData[i] } />);

    // assert shape is present in dom
    t.true(wrapper.find('.qb-satellite-trail__shape').length === mockData[i].dots);

    // assert all props have been set
    for (let p in mockData[i]) {
      t.true(instance.props[p] === mockData[i][p]);
    }
  });
}


