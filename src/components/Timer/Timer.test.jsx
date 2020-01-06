import React from 'react';
import { render, waitForDomChange, wait } from '@testing-library/react';
import Component from './Timer';

describe('Timer component', () => {
  it('should render and count down', async () => {
    const { getByText } = render(<Component />);
    expect(getByText('30')).toBeInTheDocument();
    await waitForDomChange();
    expect(getByText('29')).toBeInTheDocument();
  });
  it('should fire callback when timer reach 0', async () => {
    const mockFn = jest.fn(() => {});
    render(<Component cb={mockFn} maxTime={1} />);
    expect(mockFn).toHaveBeenCalledTimes(0);
    await wait(() => {
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });
});
