import React from 'react';

import { GameManagerProvider } from 'contexts/GameManager';
import { QuestionManagerProvider } from 'contexts/QuestionManager';
import { AnimationManagerProvider } from 'contexts/AnimationManager';

interface Props {
  children: React.ReactNode;
}

const ProviderWrapper: React.FC<Props> = ({ children }: Props) => (
  <GameManagerProvider>
    <QuestionManagerProvider>
      <AnimationManagerProvider>
        {children}
      </AnimationManagerProvider>
    </QuestionManagerProvider>
  </GameManagerProvider>
);

export default ProviderWrapper;
