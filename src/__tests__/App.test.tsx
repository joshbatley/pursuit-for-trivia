import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

test('Is not null', () => {
  const { container } = render(<Router><App /></Router>);
  expect(container).not.toBeNull();
});
