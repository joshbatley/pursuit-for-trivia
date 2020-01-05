import React from 'react';

import GameManagerProvider from 'providers/GameManager';
import QuestionManagerProvider from 'providers/QuestionManager';

interface Props {
  children: React.ReactNode;
}

const ProviderWrapper: React.FC<Props> = ({ children }: Props) => (
  <QuestionManagerProvider>
    <GameManagerProvider>
      {children}
    </GameManagerProvider>
  </QuestionManagerProvider>
);

export default ProviderWrapper;
