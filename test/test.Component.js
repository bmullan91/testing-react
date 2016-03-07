import { test } from 'tape';
import React from 'react';
import _omit from 'lodash.omit';
import Component from '../src/Component';
import ReactTestUtils from 'react-addons-test-utils';

test('creates a component', ({ plan, equal }) => {
  plan(1);

  const actual = ReactTestUtils.isElement(<Component />);
  const expected = true;

  equal(actual, expected, 'should be an element');
});

test('Component has the correct default props', ({ plan, deepEqual }) => {
  plan(1);

  const actual = Component.defaultProps;
  const expected = {
    name: 'Stranger?'
  };

  deepEqual(actual, expected, 'Should have a default name prop');
});

test('recongises the name prop and renders the correct children', ({ plan, deepEqual }) => {
  plan(1);

  debugger;
  const name = 'Brian'
  const expected = <span>hello {name}</span>;

  const shallowRenderer = ReactTestUtils.createRenderer();
  shallowRenderer.render(<Component name={name} />);
  const renderedCmp = shallowRenderer.getRenderOutput();
  const actual = renderedCmp.props.children;

  deepEqual(_omit(actual, '_owner'), _omit(expected, '_owner'));
});
