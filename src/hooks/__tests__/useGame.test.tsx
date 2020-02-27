import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import ProviderWrapper from 'ProvidersWrapper';
import { MemoryRouter as Router } from 'react-router-dom';
import useGame from '../useGame';

describe('useGame', () => {
  test('should give the results', () => {
    const { result } = renderHook(() => useGame(), {
      wrapper: ({ children }: any) => (
        <Router><ProviderWrapper>{children}</ProviderWrapper></Router>
      ),
    });
    expect(result.current[0]).toEqual({
      answers: undefined,
      isFetching: true,
      lives: 3,
      question: undefined,
      questionNo: undefined,
      score: 0,
      selected: '',
    });
  });
});
