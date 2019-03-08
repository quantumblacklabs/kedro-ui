import test from 'ava';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from './modal';

configure({ adapter: new Adapter() });

test('Modal should be a function', t => {
  t.is(typeof Modal, 'function');
});

test('Modal should have correct structure', t => {
  const wrapper = shallow(
    <Modal title='Hello Test'>
      <div />
    </Modal>
  );

  t.true(wrapper.find('.cbn-modal__bg').length === 1);
  t.true(wrapper.find('.cbn-modal__content').length === 1);
  t.true(wrapper.find('.cbn-modal__wrapper').length === 1);
  t.true(wrapper.find('Button').length === 0);
});

test('Modal should have button and description when supplied no children', t => {
  const wrapper = shallow(
    <Modal title='Hello Test' />
  );

  t.true(wrapper.find('.cbn-modal__description').length === 1);
  t.true(wrapper.find('Button').length === 1);
});

test('Modal should have correct structure when supplied children', t => {
  const wrapper = shallow(
    <Modal title='Hello Test'>
      <button>Hello World</button>
    </Modal>
  );

  t.true(wrapper.find('button').length === 1);
});
