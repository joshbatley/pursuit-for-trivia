import React from 'react';
import { QuestionManagerProvider } from 'contexts/QuestionManager';
import { AnimationManagerProvider } from 'contexts/AnimationManager';
import { CategoryManagerProvider } from 'contexts/CategoryManager';

interface Props {
  children: React.ReactChild;
}

const ProviderWrapper: React.FC<Props> = ({ children }: Props) => (
  <CategoryManagerProvider>
    <QuestionManagerProvider>
      <AnimationManagerProvider>
        {children}
      </AnimationManagerProvider>
    </QuestionManagerProvider>
  </CategoryManagerProvider>
);

export default ProviderWrapper;
