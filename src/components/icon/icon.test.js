import React from 'react';
import test from 'ava';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Icon from './icon';

configure({ adapter: new Adapter() });

const mockData = [
  {
    type: 'undo'
  },
  {
    type: 'undo',
    size: 'small'
  },
  {
    type: 'undo',
    type2: 'close',
    size: 'small'
  }
];

// check the type of the component
test('Icon should be a function', t => {
  t.is(typeof Icon, 'function');
});

// check the properties after constructing the component
mockData.forEach((dataSet, i) => {
  const wrapper = shallow(<Icon {...dataSet} />);

  test(`Icon should have correct classes and labels - Test ${i}`, t => {
    // correct modieier classes generated
    t.true(wrapper.hasClass(`cbn-icon--${dataSet.type}`));

    if (dataSet.size) {
      t.true(wrapper.hasClass(`cbn-icon--${dataSet.size}`));
    }

    if ('type2' in dataSet) {
      t.true(wrapper.hasClass('cbn-icon--double'));
      t.true(wrapper.hasClass('cbn-icon--index-0'));
    }
  });
});
