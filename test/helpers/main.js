import test from 'ava';
import { Insights } from '../src/index';

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
