import React from 'react';
import { render } from '@testing-library/react';
import Component from './Button';

describe('Button component', () => {
  test('should render and', async () => {
    const { getByText } = render(<Component>button</Component>);
    expect(getByText('button')).toBeInTheDocument();
  });
});
