import React from 'react';
import { EventManagerProvider } from 'contexts/EventManager';
import { GameManagerProvider } from 'contexts/GameManager';
import { QuestionManagerProvider } from 'contexts/QuestionManager';
import { AnimationManagerProvider } from 'contexts/AnimationManager';
import { CategoryManagerProvider } from 'contexts/CategoryManager';

interface Props {
  children: React.ReactNode;
}

const ProviderWrapper: React.FC<Props> = ({ children }: Props) => (
  <EventManagerProvider>
    <GameManagerProvider>
      <CategoryManagerProvider>
        <QuestionManagerProvider>
          <AnimationManagerProvider>
            {children}
          </AnimationManagerProvider>
        </QuestionManagerProvider>
      </CategoryManagerProvider>
    </GameManagerProvider>
  </EventManagerProvider>
);

export default ProviderWrapper;
