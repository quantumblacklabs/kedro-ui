import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Slider from './slider';
import SliderRenderer from './slider-renderer';
import RangedSliderRenderer from './ranged-slider-renderer';

test('Slider should be a function', t => {
  t.is(typeof Slider, 'function');
});

test('Slider of type single should correctly call SliderRenderer', () => {
  const wrapper = shallow(<Slider type='single' />);

  wrapper.containsMatchingElement(SliderRenderer);
});

test('Slider of type multiple should correctly call RangedSliderRenderer', () => {
  const wrapper = shallow(<Slider type='multiple' />);

  wrapper.containsMatchingElement(RangedSliderRenderer);
});

test('Slider should correctly have light theme class', t => {
  const wrapper = shallow(<Slider theme='light' />);

  t.true(wrapper.find('.cbn-theme--light').length > 1);
  t.true(wrapper.find('.cbn-theme--dark').length === 0);
});

test('Slider should correctly have dark theme class', t => {
  const wrapper = shallow(<Slider theme='dark' />);

  t.true(wrapper.find('.cbn-theme--dark').length > 1);
  t.true(wrapper.find('.cbn-theme--light').length === 0);
});

/* SINGLE SLIDER RENDERER */

test('SliderRenderer should include only one input field', t => {
  const wrapper = shallow(<SliderRenderer />);

  t.true(wrapper.find('input').length === 1);
});

test('SliderRenderer should correctly render the value', () => {
  const value = 33;
  const wrapper = shallow(<SliderRenderer value={value} />);

  wrapper
    .find('input')
    .html()
    .includes(`value="${value}"`);
});

/* RANGED SLIDER RENDERER */

test('RangedSliderRenderer should include two input fields', t => {
  const wrapper = shallow(<RangedSliderRenderer />);

  t.true(wrapper.find('input').length === 2);
});

test('RangedSliderRenderer should correctly render the values', () => {
  const values = [22, 33];
  const wrapper = shallow(<RangedSliderRenderer value={values} />);

  wrapper
    .find('.cbn-slider__input--min')
    .html()
    .includes(`value="${values[0]}"`);

  wrapper
    .find('.cbn-slider__input--max')
    .html()
    .includes(`value="${values[1]}"`);
});
