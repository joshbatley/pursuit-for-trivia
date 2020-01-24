import React from 'react';
import { render } from '@testing-library/react';
import Component from '../ProvidersWrapper';

test('Is not null', () => {
  const { container } = render(<Component><h1>Hello</h1></Component>);
  expect(container).not.toBeNull();
});
