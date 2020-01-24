import React from 'react';
import { render as testRender } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { GameManagerProvider } from 'contexts/GameManager';
import Component from '../GameScene';

function render(children: React.ReactNode | React.ReactNode[]) {
  return testRender(
    <Router>
      <GameManagerProvider>
        {children}
      </GameManagerProvider>
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
    expect(getByText(/game screen/i)).toBeInTheDocument();
  });
});
