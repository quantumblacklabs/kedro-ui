import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import ExpandablePanel from './expandable-panel';

const mockData = [
  {
    isOpen: false
  },
  {
    isOpen: true,
    bgColor: '#444'
  }
];

test('ExpandablePanel should be a function', t => {
  t.is(typeof ExpandablePanel, 'function');
});

test('ExpandablePanel should render correct class on props injection', t => {
  const closed = shallow(<ExpandablePanel isOpen={false} />);
  const open = shallow(<ExpandablePanel isOpen={true} />);

  t.is(closed.find('.qb-expandable-panel--closed').length, 1);
  t.is(open.find('.qb-expandable-panel--open').length, 1);
});

mockData.forEach(datum => {
  test('ExpandablePanel should create a valid React Component when called with required props', t => {
    const instance = React.createElement(ExpandablePanel, datum);

    t.is(instance.constructor.name, 'Object');

    // assert all props have been set
    Object.keys(datum)
      .forEach(key => {
        t.true(instance.props[key] === datum[key]);
      });
  });
});
