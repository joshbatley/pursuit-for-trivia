import React from 'react';
import { render } from '@testing-library/react';
import Component from './GameManager';

describe('GameManager', () => {
  it('should render', () => {
    const { container } = render(<Component />);
    expect(container).not.toBeNull();
  });
});
