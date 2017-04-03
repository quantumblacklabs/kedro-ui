import test from 'ava';
import React from 'react';
import Progress from './progress';
import { shallow } from 'enzyme';
import sinon from 'sinon';

const mockData = [
  // maximum possible properties
  {
    activeStage: 1,
    activeColor: 'rgb(200, 190, 30)',
    activeTrailColor: 'rgb(200, 190, 30)',
    activeRadius: 60,
    color: 'rgb(100, 100, 200)',
    height: 200,
    radius: 20,
    radiusBorderWidth: 10,
    stages: 5,
    trailColor: 'rgb(100, 100, 200)',
    width: 400
  },
  // minimum possible properties
  {
    activeStage: 0,
    stages: 8,
    width: 200,
  },
  // first stage completed
  {
    activeStage: 1,
    stages: 5,
    width: 200
  },
  // all stages completed
  {
    activeStage: 9,
    stages: 10,
    width: 200
  },
  // incorrect number of active stage - too high
  {
    activeStage: 20,
    stages: 10,
    width: 200
  },
  // incorrect number of active stage - too low
  {
    activeStage: -10,
    stages: 10,
    width: 200
  }
];

// check the type of the component
test('Progress should be a function', t => {
  t.is(typeof Progress, 'function');
});

// check the properties after constructing the component
for (let i in mockData) {

  test(`Progress component was created with the correct propertie - ${ i }`, t => {
    let instance = React.createElement(Progress, mockData[i]);
    t.is(instance.constructor.name, 'Object');
  });

  const wrapper = shallow(<Progress {...mockData[i]} />);

  test(`Correct number of children element created in the active group - ${ i }`, t => {
    const activeGroupChildren = wrapper.find('.qb-progress-active').children();

    if (mockData[i].activeStage <= 0) {
      t.true( activeGroupChildren.length === 0);
    } else {
      t.true( activeGroupChildren.length === 2);
    }

  });

  test(`Correct number of children element created in the inactive group - ${ i }`, t => {
    const inactiveGroupChildren = wrapper.find('.qb-progress-inactive').children();

    if (mockData[i].activeStage >= (mockData[i].stages - 1)) {
      t.true( inactiveGroupChildren.length === 0);
    } else {
      t.true( inactiveGroupChildren.length === 2);
    }
  });

  test(`One Satellite in the whole panel created - ${ i }`, t => {
    t.true(wrapper.find('.qb-satellite').length === 1);
  });

}
