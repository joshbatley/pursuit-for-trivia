import React from 'react';
import { render } from '@testing-library/react';
import { AnimationManagerProvider as Component } from './AnimationManager';

describe('AnimationManager', () => {
  test('should render', () => {
    const { container } = render(<Component />);
    expect(container).not.toBeNull();
  });
});
