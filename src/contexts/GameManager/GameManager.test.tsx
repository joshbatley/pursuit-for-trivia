import React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import * as Game from './GameManager';

describe('GameManager', () => {
  test('should render', () => {
    const { container } = render(<Game.GameManagerProvider />);
    expect(container).not.toBeNull();
  });
  test('useGameManager should throw error if no provider found', () => {
    const { result } = renderHook(() => Game.useGameManager());
    expect(result.error.message).toBe('useGameManager must be used within a GameManagerProvider');
  });
});
