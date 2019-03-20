import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from './modal';

configure({ adapter: new Adapter() });

test('Modal should be a function', () => {
  expect(typeof Modal)
    .toBe('function');
});

test('Modal should have correct structure', () => {
  const wrapper = shallow(
    <Modal title='Hello Test'>
      <div />
    </Modal>
  );

  expect(wrapper.find('.cbn-modal__bg').length === 1)
    .toBeTruthy();
  expect(wrapper.find('.cbn-modal__content').length === 1)
    .toBeTruthy();
  expect(wrapper.find('.cbn-modal__wrapper').length === 1)
    .toBeTruthy();
  expect(wrapper.find('Button').length === 0)
    .toBeTruthy();
});

test('Modal should have button and description when supplied no children', () => {
  const wrapper = shallow(
    <Modal title='Hello Test' />
  );

  expect(wrapper.find('.cbn-modal__description').length === 1)
    .toBeTruthy();
  expect(wrapper.find('Button').length === 1)
    .toBeTruthy();
});

test('Modal should have correct structure when supplied children', () => {
  const wrapper = shallow(
    <Modal title='Hello Test'>
      <button>Hello World</button>
    </Modal>
  );

  expect(wrapper.find('button').length === 1)
    .toBeTruthy();
});
