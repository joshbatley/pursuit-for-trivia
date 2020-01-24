import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Component from '../ModeSelector';

describe('Page ModeSelector', () => {
  test('should render and', async () => {
    const { getByText } = render(<Router><Component /></Router>);
    expect(getByText(/mode selector/i)).toBeInTheDocument();
  });
});
