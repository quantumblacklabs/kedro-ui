import test from 'ava';
import React from 'react';
import { shallow, configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

import Dropdown from './dropdown';
import MenuOption from '../menu-option/menu-option';

configure({ adapter: new Adapter() });

const mockData = [
  {
    defaultText: 'Test 123',
    onOpened: sinon.spy(() => {}),
    onClosed: sinon.spy(() => {}),
    onChanged: sinon.spy(() => {})
  },
  {
    defaultText: 'Test 456',
    onOpened: sinon.spy(() => {}),
    onClosed: sinon.spy(() => {}),
    onChanged: sinon.spy(() => {})
  }
];

mockData.forEach((dataSet, i) => {
  const jsx = (
    <Dropdown {...dataSet}>
      <MenuOption key={1} primaryText='Menu Item One' value={1} />
      <MenuOption key={2} primaryText='Menu Item Two' value={2} />
      <MenuOption key={3} primaryText='Menu Item Three' value={3} />
    </Dropdown>
  );

  test(`Dropdown should be a function - Test ${i}`, t => {
    t.is(typeof Dropdown, 'function');
  });

  test(`Dropdown should create a valid React Component when called with required props - Test ${i}`, t => {
    const wrapper = shallow(jsx);
    t.true(wrapper.children().length === 3);
  });
});
