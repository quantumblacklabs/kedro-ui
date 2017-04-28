import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import SearchResults from './search-results';

const testProps = {
  value: '',
  results: [
    { icon: 'copy', label: 'Lorem ipsum dolor sit amet' },
    { icon: 'paste', label: 'Consetetur sadipscing elitr' },
    { icon: 'undo', label: 'Sed diam nonumy eirmod tempor' },
    { icon: 'cut', label: 'Invidunt ut labore et dolore magna aliquyam erat' },
    { icon: 'refresh', label: 'Sed diam voluptua' },
    { label: 'At vero eos et accusam et justo duo dolores et ea rebum' },
    { label: 'Vel, facere officia consectetur labore' },
    { label: 'Quaerat quo reprehenderit' },
    { label: 'Nisi ipsam totam optio illo' },
    { label: 'Delectus hic aspernatur corporis culpa' },
    { label: 'Placeat eveniet quod, illum' },
    { label: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque' }
  ]
};

test('SearchResults should be a function', t => {
  t.is(typeof SearchResults, 'function');
});

test('SearchResults should render correctly', t => {
  const wrapper = shallow(
    <SearchResults {...testProps} />
  );

  t.is(typeof wrapper.props().row, 'object');
  t.is(typeof wrapper.props().results, 'object');
});
