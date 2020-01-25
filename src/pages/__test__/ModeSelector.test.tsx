import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { fetchCategories } from 'api';

import Component from '../ModeSelector';

jest.mock('api');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Page ModeSelector', () => {
  test('should render and', async () => {
    const { getByText } = render(<Router><Component /></Router>);
    expect(getByText(/mode selector/i)).toBeInTheDocument();
    expect(fetchCategories).toHaveBeenCalledTimes(1);
  });
});
