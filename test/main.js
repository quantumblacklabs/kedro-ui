import test from 'ava';
import {
  Checkbox,
  Dropdown,
  Icon,
  Input,
  RadioButton,
  MenuOption
} from '../src/index';

test('Browser enviromnent should be mocked', t => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  t.is(document.querySelector('div'), div);
});

test('MenuOption should be exposed', t => {
  t.is(typeof MenuOption, 'function');
});

test('Dropdown should be exposed', t => {
  t.is(typeof Dropdown, 'function');
});

test('Icon should be exposed', t => {
  t.is(typeof Icon, 'function');
});

test('Checkbox should be exposed', t => {
  t.is(typeof Checkbox, 'function');
});

test('Input should be exposed', t => {
  t.is(typeof Input, 'function');
});

test('RadioButton should be exposed', t => {
  t.is(typeof RadioButton, 'function');
});
