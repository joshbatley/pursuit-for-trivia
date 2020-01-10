import { createContext } from 'react';

export interface QuestionManager {
  next: () => Promise<void>;
  reset: () => void;
  fetch: () => Promise<void>;
  questionArray: Question[] | null;
  revealAnswers: () => void;
  shuffle: () => void;
  clear: () => void;
}

const QuestionManagerCtx = createContext<QuestionManager>({
  next: async () => {},
  reset: () => {},
  fetch: async () => {},
  questionArray: null,
  revealAnswers: () => {},
  shuffle: () => {},
  clear: () => {},
});

export default QuestionManagerCtx;
