import test from 'ava';
import React from 'react';
import Root from './root';
import { shallow } from 'enzyme';

test('Root should be a function', t => {
  t.is(typeof Root, 'function');
});

test('Root structure should be correct', t => {
  const wrapper = shallow(<Root />);

  t.is(wrapper.find('.qb-root').length, 1);
  t.is(wrapper.find('.qb-root__valuelabel').length, 1);
  t.is(wrapper.find('.qb-root__contextlabel').length, 1);
  t.is(wrapper.find('.qb-root__main').length, 1);
  t.is(wrapper.find('.qb-root__dashed').length, 1);
});

const mockData = [
  {
    colorMain: 'red',
    colorSecondary: 'blue',
    label: 'Test',
    radius: 150,
    value: 0,
    x: 150,
    y: 150
  },
  {
    colorMain: 'red',
    colorSecondary: 'blue',
    label: 'Testing',
    value: 50
  },
  {
    colorMain: 'red',
    colorSecondary: 'blue',
    label: 'Label',
    radius: 0,
    value: 999
  }
];

for (let i in mockData) {
  test('ExpandablePanel should create a valid React Component when called with required props', t => {
    let instance = React.createElement(Root, mockData[i]);

    t.is(instance.constructor.name, 'Object');

    // assert all props have been set
    for (let p in mockData[i]) {
      t.true(instance.props[p] === mockData[i][p]);
    }
  });
}
