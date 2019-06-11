import React from 'react';
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
test('Icon should be a function', () => {
  expect(typeof Icon)
    .toBe('function');
});

// check the properties after constructing the component
mockData.forEach((dataSet, i) => {
  const wrapper = shallow(<Icon {...dataSet} />);

  test(`Icon should have correct classes and labels - Test ${i}`, () => {
    // correct modieier classes generated
    expect(wrapper.hasClass(`kui-icon--${dataSet.type}`))
      .toBeTruthy();

    if (dataSet.size) {
      expect(wrapper.hasClass(`kui-icon--${dataSet.size}`))
        .toBeTruthy();
    }

    if ('type2' in dataSet) {
      expect(wrapper.hasClass('kui-icon--double'))
        .toBeTruthy();
      expect(wrapper.hasClass('kui-icon--index-0'))
        .toBeTruthy();
    }
  });
});
