import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Component from '../Start';

describe('Page Start', () => {
  test('should render and', async () => {
    const { getByText } = render(<Router><Component /></Router>);
    expect(getByText(/start/i)).toBeInTheDocument();
  });
});
