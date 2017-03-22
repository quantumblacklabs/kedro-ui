import test from 'ava';
import {
  Dropdown,
  Icon,
  Insights,
  MenuOption
} from '../src/index';

test('Browser enviromnent should be mocked', t => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    t.is(document.querySelector('div'), div);
});

test('Insights Components should be exposed', t => {
  t.is(typeof Insights.DataSummary, 'function');
  t.is(typeof Insights.ExpandablePanel, 'function');
  t.is(typeof Insights.Satellite, 'function');
});

test('Components should be exposed', t => {
  t.is(typeof MenuOption, 'function');
  t.is(typeof Insights.ExpandablePanel, 'function');
  t.is(typeof Insights.Satellite, 'function');
});

test('Dropdown should be exposed', t => {
  t.is(typeof Dropdown, 'function');
});

test('Icon should be exposed', t => {
  t.is(typeof Icon, 'function');
});

test('MenuOption should be exposed', t => {
  t.is(typeof MenuOption, 'function');
});
