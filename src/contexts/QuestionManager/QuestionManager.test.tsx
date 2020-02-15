import React from 'react';
import { render as testRender } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { EventManagerProvider } from 'contexts/EventManager';
import { CategoryManagerProvider } from 'contexts/CategoryManager';
import * as Question from './QuestionManager';

function render(children: React.ReactChild) {
  return testRender(
    <EventManagerProvider>
      <CategoryManagerProvider>
        {children}
      </CategoryManagerProvider>
    </EventManagerProvider>,
  );
}


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
