import test from 'ava';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import MenuOption from '../menu-option/menu-option';

configure({ adapter: new Adapter() });

const mockData = [
  {
    primaryText: 'Test 123',
    onSelected: sinon.spy(() => {})
  },
  {
    primaryText: 'Test 456',
    onSelected: sinon.spy(() => {})
  }
];

mockData.forEach((dataSet, i) => {
  const jsx = <MenuOption {...dataSet} />;

  test(`MenuOption should be a function - Test ${i}`, t => {
    t.is(typeof MenuOption, 'function');
  });

  test(`MenuOption should contain text - Test ${i}`, t => {
    const wrapper = shallow(jsx);
    t.true(wrapper.find('.cbn-menu-option__content')
      .text()
      === dataSet.primaryText);

    t.true(wrapper.find(`.cbn-menu-option__content[title="${dataSet.primaryText}"]`).length
      === 1);
  });

  if (typeof dataSet.onSelected === 'function') {
    test(`MenuOption should fire onSelected event handler when clicked - Test ${i}`, t => {
      const wrapper = shallow(jsx);
      wrapper.simulate('click');
      t.true(dataSet.onSelected.called);
    });
  }
});
