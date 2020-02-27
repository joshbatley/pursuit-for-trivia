import React from 'react';
import {
  render, waitForDomChange, wait, act,
} from '@testing-library/react';
import config from 'config';
import Component from './Timer';

describe('Timer component', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });
  test('matches snapshot', async () => {
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render and count down', async () => {
    config.mode.normal.maxTime = 3;
    const { getByText } = render(<Component />);
    expect(getByText('3')).toBeInTheDocument();
    await waitForDomChange();
    expect(getByText('2')).toBeInTheDocument();
  });

  test('should fire callback when timer reach 0', async () => {
    const mockFn = jest.fn(() => {});
    render(<Component cb={mockFn} maxTime={1} />);
    expect(mockFn).toHaveBeenCalledTimes(0);
    await wait(() => {
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });

  test('should fire cb, then then resetTimer can reset', async () => {
    let toBeCalled = () => {};
    const mockFn = jest.fn((reset) => { toBeCalled = jest.fn(reset); });
    const cbFn = jest.fn();
    render(<Component maxTime={1} cb={cbFn} resetTimer={mockFn} />);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toBeCalledWith(expect.any(Function));
    await wait(() => {
      expect(cbFn).toHaveBeenCalledTimes(1);
    });
    act(() => {
      toBeCalled();
      expect(toBeCalled).toHaveBeenCalledTimes(1);
    });
  });
});
