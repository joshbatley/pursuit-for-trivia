import { useContext } from 'react';
import QuestionManagerCtx, { QuestionManager } from 'contexts/QuestionManagerCtx';

function useQuestionManager(): QuestionManager {
  const values = useContext(QuestionManagerCtx);

  return values;
}

export default useQuestionManager;
