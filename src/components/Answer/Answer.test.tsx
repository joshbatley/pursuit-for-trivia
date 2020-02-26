import React from 'react';
import { render } from '@testing-library/react';
import Component from './Answer';

describe('Answer component', () => {
  test('matches snapshot', async () => {
    const { container } = render(<Component text="123" id="1" onChange={() => {}} selected="123" />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test('matches snapshot', async () => {
    const { container } = render(<Component text="123" id="1" onChange={() => {}} selected="1234" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
