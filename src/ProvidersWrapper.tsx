import React from 'react';

import GameManagerProvider from 'providers/GameManager';
import QuestionManagerProvider from 'providers/QuestionManager';

interface Props {
  children: React.ReactNode;
}

const ProviderWrapper: React.FC<Props> = ({ children }: Props) => (
  <GameManagerProvider>
    <QuestionManagerProvider>
      {children}
    </QuestionManagerProvider>
  </GameManagerProvider>
);

export default ProviderWrapper;
