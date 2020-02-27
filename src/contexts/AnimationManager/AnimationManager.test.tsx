import React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { AnimationManagerProvider as Component, useAnimationManager } from './AnimationManager';

describe('AnimationManager', () => {
  test('should render', () => {
    const { container } = render(<Component />);
    expect(container).not.toBeNull();
  });

  test('useAnimationManager should throw error if no provider found', () => {
    const { result } = renderHook(() => useAnimationManager());
    expect(result.error.message).toBe('useAnimationManager must be used within a AnimationManagerProvider');
  });
});
