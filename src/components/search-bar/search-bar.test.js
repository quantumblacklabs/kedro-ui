import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from './search-bar';

configure({ adapter: new Adapter() });

// check the type of the component
test('SearchBar should be a function', () => {
  expect(typeof SearchBar)
    .toBe('function');
});

// should render correctly
test('SearchBar should render correctly', () => {
  const wrapper = shallow(
    <SearchBar />
  );

  expect(wrapper.props().iconType)
    .toBe('search');
  expect(typeof wrapper.props().onChange)
    .toBe('function');
  expect(typeof wrapper.props().onClear)
    .toBe('function');
});


test('It should trigger onFocus when focused prop set on mount', () => {
  const cb = jest.fn();

  const wrapper = mount(<SearchBar focused={true} onFocus={cb} />);

  expect(cb)
    .toHaveBeenCalled();
});

test('It should trigger onFocus and onBlur when focused prop changes', () => {
  const onFocus = jest.fn();
  const onBlur = jest.fn();

  const wrapper = mount(<SearchBar focused={null} onFocus={onFocus} onBlur={onBlur} />);

  expect(onFocus)
    .not.toHaveBeenCalled();

  expect(onBlur)
    .not.toHaveBeenCalled();

  wrapper.setProps({ focused: true });
  wrapper.update();

  expect(onFocus)
    .toHaveBeenCalled();

  wrapper.setProps({ focused: false });
  wrapper.update();

  expect(onBlur)
    .toHaveBeenCalled();
});
