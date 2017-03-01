import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Satellite from './satellite';

// test data to check if chaging the active and state attributes changes opacities as it should
// for each active and state state (:P) the circles must have the specified opacities
const testData = [{
  active: true,
  state: 'focused',
  circles: [{
    fillOpacity: 0.75
  }, {
    fillOpacity: undefined
  }]
}, {
  active: true,
  state: 'normal',
  circles: [{
    fillOpacity: 0.25
  }, {
    fillOpacity: undefined
  }]
}, {
  active: true,
  state: 'blurred',
  circles: [{
    fillOpacity: 0.25
  }, {
    fillOpacity: 0.25
  }]
}, {
  active: false,
  state: 'focused',
  circles: [{
    fillOpacity: 0.75
  }, {
    fillOpacity: undefined
  }]
}, {
  active: false,
  state: 'normal',
  circles: [{
    fillOpacity: 0.25
  }, {
    fillOpacity: undefined
  }]
}, {
  active: false,
  state: 'blurred',
  circles: [{
    fillOpacity: 0.25
  }, {
    fillOpacity: 0.25
  }]
}];

test('Satellite component basics', t => {
  const callback = sinon.spy();

  const data = { id: 'marketing' };

  const wrapper = shallow(<Satellite
    active
    state='focused'
    data={data}
    onTapped={callback}
    radius={30}
    color='rgb(38, 192, 33)'
    x={10}
    y={10} />);

  // check the html structure
  t.is(wrapper.find('g').length, 1);
  t.is(wrapper.find('circle').length, 2);
  // simulate a click event
  const node = wrapper.find('g');
  node.simulate('click');
  t.true(callback.calledOnce);
  t.deepEqual(callback.firstCall.args[0], data);
  // check the style
  t.is(wrapper.props().transform, 'translate(10, 10)');
  t.is(wrapper.find('circle')
    .at(0)
    .props().style.fill, 'rgb(38, 192, 33)');
  t.is(wrapper.find('circle')
    .at(0)
    .props().style.fillOpacity, 0.75);
  t.is(wrapper.find('circle')
    .at(0)
    .props().style.stroke, 'rgb(38, 192, 33)');
});

for (let i = 0, length = testData.length; i < length; i += 1) {
  test(`Satellite active and state test ${i + 1}`, t => {
    const wrapper = shallow(<Satellite
      active={testData[i].active}
      state={testData[i].state}
      radius={30}
      color='rgb(38, 192, 33)'
      x={10}
      y={10} />);

    t.is(
      wrapper.find('circle')
        .at(0)
        .props().style.fillOpacity,
      testData[i].circles[0].fillOpacity
    );
    t.is(
      wrapper.find('circle')
        .at(1)
        .props().style.fillOpacity,
      testData[i].circles[1].fillOpacity
    );
  });
}
