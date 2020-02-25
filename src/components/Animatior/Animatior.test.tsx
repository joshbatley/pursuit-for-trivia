import React from 'react';
import { render } from '@testing-library/react';
import { Events } from 'contexts/AnimationManager';
import Component from './Animatior';

describe('Animatior component', () => {
  test('should render and', async () => {
    const { container } = render(<Component event={null} />);
    expect(container).not.toBeNull();
  });

  test('should render and fire correct', async () => {
    const { container } = render(<Component event={Events.CORRECT} />);
    expect(container).not.toBeNull();
  });

  test('should render and fire incorrect', async () => {
    const { container } = render(<Component event={Events.INCORRECT} />);
    expect(container).not.toBeNull();
  });
});
