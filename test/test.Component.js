import { test } from 'tape';
import React from 'react';
import Component from '../src/Component';
import * as ReactTestUtils from 'react-addons-test-utils';

test('Component tests', ({ plan, equal }) => {
  plan(1);

  const actual = ReactTestUtils.isElement(<Component />);
  const expected = true;

  equal(actual, expected, 'should be an element');
});
