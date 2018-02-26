import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

import ReactTestUtils from 'react-dom/test-utils'; // ES6
import ShallowRenderer from 'react-test-renderer/shallow';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow render', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Header />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('div');
  expect(result.props.children[1].type._meta.name).toBe('Menu');
  expect(result.props.children[2].type._meta.name).toBe('Menu');
  expect(result.props.children[3].type).toBe('br');
  expect(result.props.children[4].type._meta.name).toBe('BudgetStatusMenu');
});
