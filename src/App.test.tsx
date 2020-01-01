import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Is not null', () => {
  const { container } = render(<App />);
  expect(container).not.toBeNull();
});
