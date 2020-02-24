import React from 'react';
import { render as testRender } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import ProviderWrapper from 'ProvidersWrapper';
import question from '__mocks__/question.json';
import Component from '../GameScene';

function render(children: React.ReactChild) {
  return testRender(
    <ProviderWrapper>
      <Router>
        {children}
      </Router>
    </ProviderWrapper>,
  );
}

describe('Page GameScene', () => {
  test('should render and', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify(question),
      { status: 200 },
    );
    const { getByText } = render(<Component />);
    expect(getByText(/30/i)).toBeInTheDocument();
  });
});
