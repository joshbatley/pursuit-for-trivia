import { createContext } from 'react';

export interface QuestionManager {
  current: number;
  next: () => void;
  reset: () => void;
  fetch: () => Promise<void>;
  questionArray: Question[] | null;
  shuffle: () => void;
  clear: () => void;
}

const QuestionManagerCtx = createContext<QuestionManager>({
  current: 0,
  next: () => {},
  fetch: async () => {},
  reset: () => {},
  questionArray: null,
  shuffle: () => {},
  clear: () => {},
});

export default QuestionManagerCtx;
