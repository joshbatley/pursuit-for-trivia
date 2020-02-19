import React from 'react';
import { render as testRender } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Component from '../GameScene';

function render(children: React.ReactChild) {
  return testRender(
    <Router>
      {children}
    </Router>,
  );
}

describe('Page GameScene', () => {
  test('should render and', async () => {
    // isExact, path, url
    let match = {
      params: { mode: 'normal' },
      isExact: false,
      path: '/game/normal',
      url: '/',
    };
    const { getByText } = render(<Component match={match} />);
    expect(getByText(/30/i)).toBeInTheDocument();
  });
});
