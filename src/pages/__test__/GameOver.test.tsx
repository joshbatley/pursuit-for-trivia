import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Component from '../GameOver';

describe('Page Start', () => {
  test('should render and', async () => {
    const { getByText } = render(<Router><Component /></Router>);
    expect(getByText(/game over/i)).toBeInTheDocument();
  });
  test('matches snapshot', async () => {
    const { container } = render(<Router><Component /></Router>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
