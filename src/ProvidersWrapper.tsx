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
      <QuestionManagerProvider>
        <CategoryManagerProvider>
          <AnimationManagerProvider>
            {children}
          </AnimationManagerProvider>
        </CategoryManagerProvider>
      </QuestionManagerProvider>
    </GameManagerProvider>
  </EventManagerProvider>
);

export default ProviderWrapper;
