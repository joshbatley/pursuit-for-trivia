import React from 'react';
import { render } from '@testing-library/react';
import { QuestionManagerProvider as Component } from './QuestionManager';

describe('QuestionManager', () => {
  it('should render', () => {
    const { container } = render(<Component />);
    expect(container).not.toBeNull();
  });
});
