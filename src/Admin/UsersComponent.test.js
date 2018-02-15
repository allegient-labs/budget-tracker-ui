import React from 'react';
import ReactDOM from 'react-dom';
import UsersComponent from './UsersComponent';
import { MemoryRouter } from 'react-router-dom';

import ReactTestUtils from 'react-dom/test-utils'; // ES6

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <MemoryRouter>
      <UsersComponent />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
