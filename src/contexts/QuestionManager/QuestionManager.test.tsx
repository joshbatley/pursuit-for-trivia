import React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import * as Question from './QuestionManager';

describe('QuestionManager', () => {
  test('should render', () => {
    const { container } = render(<Question.QuestionManagerProvider />);
    expect(container).not.toBeNull();
  });

  test('useQuestionManager should throw error if no provider found', () => {
    const { result } = renderHook(() => Question.useQuestionManager());
    expect(result.error.message).toBe('useQuestionManager must be used within a QuestionManagerProvider');
  });
});
