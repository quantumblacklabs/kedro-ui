import test from 'ava';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBarRenderer from './search-bar-renderer';

configure({ adapter: new Adapter() });

test('SearchBarRenderer should be a function', t => {
  t.is(typeof SearchBarRenderer, 'function');
});

test('SearchBarRenderer should render correct structure', t => {
  const wrapper = shallow(
    <SearchBarRenderer
      iconType='refresh'
      theme='dark'
      value='hello world' />
  );

  t.is(wrapper.find('Icon').length, 2);
});
