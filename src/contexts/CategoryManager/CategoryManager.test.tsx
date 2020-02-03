import React from 'react';
import { render } from '@testing-library/react';
import { CategoryManagerProvider as Component } from './CategoryManager';

describe('CategoryManager', () => {
  test('should render', () => {
    const { container } = render(<Component />);
    expect(container).not.toBeNull();
  });
});
