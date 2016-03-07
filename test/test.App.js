import { test } from 'tape';
import React from 'react';
import App from '../src/App';
import Component from '../src/Component';
import ReactTestUtils from 'react-addons-test-utils';

test('renders the Component as a child', ({ plan, deepEqual }) => {
  plan(1);

  const shallowRenderer = ReactTestUtils.createRenderer();
  shallowRenderer.render(<App />);
  const renderedCmp = shallowRenderer.getRenderOutput();

  const actual = renderedCmp.props.children[1];
  const expected = <Component />;


  deepEqual(actual, expected, 'should render a component as its second child');
});

//TODO further tests
