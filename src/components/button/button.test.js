import test from 'ava';
import Button from './button';

test('Button is a React Component', t => {
  t.is(typeof Button, 'function');
});
