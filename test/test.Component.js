import { test } from 'tape';
import React from 'react';
import Component from '../../lib/Component';
import * as ReactTestUtils from 'react-addons-test-utils';

test('Component tests', ({ plan, equal }) => {
  plan(1);

  const actual = ReactTestUtils.isElement(<Component />);
  const expected = true;

  equal(actual, expected, 'should be an element');
});


test('name prop should default to "stranger?"', ({ plan, equal }) => {
  plan(1);
  const actual = Component.defaultProps.name;
  const expected = 'stranger?';

  equal(actual, expected, 'name should default to stranger?');
});
