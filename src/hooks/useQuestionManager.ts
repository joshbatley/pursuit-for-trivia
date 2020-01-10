import { useContext } from 'react';
import QuestionManagerCtx, { QuestionManager } from 'contexts/QuestionManagerCtx';

function useQuestionManager(): QuestionManager {
  const context = useContext(QuestionManagerCtx);
  if (context === undefined) {
    throw new Error('useQuestionManager must be used within a QuestionManagerProvider');
  }

  return context;
}

export default useQuestionManager;
