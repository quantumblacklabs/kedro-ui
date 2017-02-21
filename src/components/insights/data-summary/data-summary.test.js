import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import DataSummary from './data-summary';
import Satellite from '../satellite/satellite';

/**
 * Create a custom icon to test
 */
const createCustomIcon = opt => (
  <Satellite
    centreColor={opt.centreColor}
    centreRadius={opt.centreRadius}
    color={opt.color}
    radius={opt.radius}
    state={opt.state}
    x={opt.width / 2}
    y={opt.height / 2} />
);

const mockData = {
  data: [
    {
      id: 0,
      label: '1 First label',
      value: 1,
      iconProps: {
        width: 17,
        height: 17,
        centreColor: 'rgb(0, 157, 249)',
        color: 'rgb(34, 49, 69)',
        centreRadius: 7,
        radius: 7,
        state: 'focused'
      }
    },
    {
      id: 1,
      label: '2 Second label',
      value: 2,
      iconProps: {
        width: 17,
        height: 17,
        centreColor: 'rgb(0, 157, 249)',
        color: 'rgb(34, 49, 69)',
        centreRadius: 6,
        radius: 7,
        state: 'focused'
      }
    },
    {
      id: 2,
      label: '3 Third label',
      value: 3,
      iconProps: {
        width: 17,
        height: 17,
        centreColor: 'rgb(0, 157, 249)',
        color: 'rgb(34, 49, 69)',
        centreRadius: 5,
        radius: 7,
        state: 'focused'
      }
    }
  ],
  heading: 'Testing heading',
  icon: createCustomIcon
};

const wrapper = shallow(<DataSummary {...mockData} />);

test('DataSummary should be a function', t => {
  t.is(typeof DataSummary, 'function');
});

test('DataSummary includes correct heading', t => {
  t.true(
    wrapper.find('.qb-data-summary__heading')
      .children()
      .node === mockData.heading
  );
});

test('DataSummary includes correct number and content of rows', t => {
  // check the number of generated rows
  t.true(wrapper.find('.qb-data-summary-item').nodes.length === mockData.data.length);

  // check the generated titles for each row
  const titlesRendered = wrapper.find('.qb-data-summary-item__title')
    .children()
    .nodes;
  // check the generated values for each row
  const valuesRendered = wrapper.find('.qb-data-summary-item__value')
    .children()
    .nodes;

  mockData.data.forEach((item, i) => {
    t.true(titlesRendered[i] === item.label);
    t.true(valuesRendered[i] === item.value);
  });
});
