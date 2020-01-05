import React from 'react';
import { render } from '@testing-library/react';
import Component from './QuestionManager';

describe('QuestionManager', () => {
  it('should render', () => {
    const { container } = render(<Component />);
    expect(container).not.toBeNull();
  });
});
