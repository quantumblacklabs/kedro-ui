import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Slider from './slider';

configure({ adapter: new Adapter() });

test('Slider should be a function', () => {
  expect(typeof Slider)
    .toBe('function');
});

test('Slider of type single should correctly call SliderRenderer', () => {
  const wrapper = mount(<Slider type='single' />);

  expect(wrapper.find('.kui-slider__wrapper').length === 1)
    .toBeTruthy();
});

test('Slider of type multiple should correctly call RangedSliderRenderer', () => {
  const wrapper = mount(<Slider type='multiple' />);

  expect(wrapper.find('.kui-slider__wrapper--multiple').length === 1)
    .toBeTruthy();
});

test('Slider should correctly have light theme class', () => {
  const wrapper = mount(<Slider theme='light' />);

  expect(wrapper.find('.kui-theme--light').length > 1)
    .toBeTruthy();
  expect(wrapper.find('.kui-theme--dark').length === 0)
    .toBeTruthy();
});

/* SINGLE SLIDER RENDERER */

test('SliderRenderer should include only one input field', () => {
  const wrapper1 = mount(<Slider type='multiple' />);
  const wrapper2 = mount(<Slider type='single' />);

  expect(wrapper1.find('input').length === 4)
    .toBeTruthy();
  expect(wrapper2.find('input').length === 2)
    .toBeTruthy();
});

test('SliderRenderer should correctly render the value', () => {
  const value = 33;
  const wrapper = mount(<Slider value={value} />);

  wrapper
    .find('input')
    .first()
    .html()
    .includes(`value="${value}"`);
});

/* RANGED SLIDER RENDERER */

test('RangedSliderRenderer should correctly render the values', () => {
  const values = [22, 33];
  const wrapper = mount(<Slider type='multiple' value={values} />);

  wrapper
    .find('input')
    .first()
    .html()
    .includes(`value="${values[0]}"`);

  wrapper
    .find('input')
    .last()
    .html()
    .includes(`value="${values[1]}"`);
});
