import React from 'react';
import { render } from '@testing-library/react';
import Component from './Header';

describe('Header component', () => {
  test('should render and show lives', async () => {
    const { getByText } = render(<Component reset={() => {}} lives={999} score={12} />);
    expect(getByText(/999/i)).toBeInTheDocument();
  });
});
