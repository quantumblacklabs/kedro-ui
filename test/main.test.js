import {
  Checkbox,
  Dropdown,
  Icon,
  Input,
  RadioButton,
  MenuOption
} from '../src/index';

test('Browser enviromnent should be mocked', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  expect(document.querySelector('div')).toBe(div);
});

test('MenuOption should be exposed', () => {
  expect(typeof MenuOption).toBe('function');
});

test('Dropdown should be exposed', () => {
  expect(typeof Dropdown).toBe('function');
});

test('Icon should be exposed', () => {
  expect(typeof Icon).toBe('function');
});

test('Checkbox should be exposed', () => {
  expect(typeof Checkbox).toBe('function');
});

test('Input should be exposed', () => {
  expect(typeof Input).toBe('function');
});

test('RadioButton should be exposed', () => {
  expect(typeof RadioButton).toBe('function');
});
