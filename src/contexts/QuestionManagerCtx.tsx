import { createContext } from 'react';

export interface QuestionManager {
  current: number;
  nextQuestion: () => Promise<void>;
  reset: () => void;
  fetch: () => Promise<void>;
  questionArray: Question[] | null;
  revealAnswers: () => void;
  shuffle: () => void;
  clear: () => void;
}

const QuestionManagerCtx = createContext<QuestionManager>({
  current: 0,
  nextQuestion: async () => {},
  fetch: async () => {},
  reset: () => {},
  questionArray: null,
  revealAnswers: () => {},
  shuffle: () => {},
  clear: () => {},
});

export default QuestionManagerCtx;
