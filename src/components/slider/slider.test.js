import test from 'ava';
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Slider from './slider';

configure({ adapter: new Adapter() });

test('Slider should be a function', t => {
  t.is(typeof Slider, 'function');
});

test('Slider of type single should correctly call SliderRenderer', t => {
  const wrapper = mount(<Slider type='single' />);

  t.true(wrapper.find('.cbn-slider__wrapper').length === 1);
});

test('Slider of type multiple should correctly call RangedSliderRenderer', t => {
  const wrapper = mount(<Slider type='multiple' />);

  t.true(wrapper.find('.cbn-slider__wrapper--multiple').length === 1);
});

test('Slider should correctly have light theme class', t => {
  const wrapper = mount(<Slider theme='light' />);

  t.true(wrapper.find('.cbn-theme--light').length > 1);
  t.true(wrapper.find('.cbn-theme--dark').length === 0);
});

/* SINGLE SLIDER RENDERER */

test('SliderRenderer should include only one input field', t => {
  const wrapper1 = mount(<Slider type='multiple' />);
  const wrapper2 = mount(<Slider type='single' />);

  t.true(wrapper1.find('input').length === 4);
  t.true(wrapper2.find('input').length === 2);
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
  const wrapper = mount(<Slider value={values} />);

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
