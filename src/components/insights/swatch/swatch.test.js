import test from 'ava';
import React from 'react';
import Swatch from './swatch';
import { shallow } from 'enzyme';
import sinon from 'sinon';

const mockData = [
  {
    color: 'red',
    size: 24,
    margin: 0,
    title: ''
  },
  {
    color: 'rgba(0,0,0)'
  },
  {
    color: 'rgba(0,0,0)',
    label: 'test',
    labelPosition: 'top'
  },
  {
    color: 'rgba(0,0,0)',
    label: 'test',
    title: 'test'
  }
];

test('Swatch should be a function', t => {
  t.is(typeof Swatch, 'function');
});

// check all valid props work
for (let i in mockData) {
  test('Swatch should create a valid React Component when called with required props', t => {
    let instance = React.createElement(Swatch, mockData[i]);
    t.is(instance.constructor.name, 'Object');

    const wrapper = shallow(<Swatch { ...mockData[i] } />);

    if ('label' in mockData[i] && mockData[i].label.length) {
      // assert label in dom
      t.true(wrapper.find('.qb-swatch__label').length === 1);
      t.true(wrapper.find('.qb-swatch__label').text() === mockData[i].label);
    }

    if ('labelPosition' in mockData[i]) {
      // assert label class in dom
      t.true(wrapper.find('div').at(0).hasClass('qb-swatch--label-' + mockData[i].labelPosition));
    }

    // assert all props have been set
    for (let p in mockData[i]) {
      t.true(instance.props[p] === mockData[i][p]);
    }
  });
}

test('Swatch fires event handlers when tapped', t => {

  const callback = sinon.spy();

  const props = {
    color: 'red',
    data: { id: 123 },
    margin: 0,
    onTapped: callback,
    size: 24,
    title: ''
  }

  const wrapper = shallow(<Swatch { ...props } />);

  const tappableNode = wrapper.find('.qb-swatch');
  tappableNode.simulate('click');

  t.true(callback.calledOnce);
  t.deepEqual(callback.firstCall.args[0].data, props.data);

});
