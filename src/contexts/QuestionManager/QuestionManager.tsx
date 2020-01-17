import React, {
  useState, useCallback, createContext, useContext,
} from 'react';
import { fetchQuestions } from 'api';

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

interface QuestionManager {
  next: () => Promise<void>;
  reset: () => void;
  fetch: () => Promise<void>;
  questionArray: Question[] | null;
  revealAnswers: () => void;
  shuffle: () => void;
  clear: () => void;
}

const QuestionManagerCtx = createContext<QuestionManager | void>(undefined);

export function useQuestionManager(): QuestionManager {
  let context = useContext(QuestionManagerCtx);
  if (context === undefined) {
    throw new Error('useQuestionManager must be used within a QuestionManagerProvider');
  }

  return context;
}


export const QuestionManagerProvider: React.FC<Props> = ({ children }: Props) => {
  let [current, setCurrent] = useState(0);
  let [question, setQuestions] = useState([] as Question[]);

  // let loadQuestions = (data) => {

  // };

  let next = async (): Promise<void> => setCurrent(current + 1);

  let fetch = useCallback(async (): Promise<void> => {
    console.log('fetch');
    try {
      let res: QuestionRes = await fetchQuestions({});
      if (res) {
        setQuestions(res);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  let reset = (): void => { };
  let shuffle = (): void => { };
  let clear = (): void => { };
  let revealAnswers = (): void => { };

  let values: QuestionManager = {
    next,
    fetch,
    reset,
    questionArray: question,
    revealAnswers,
    shuffle,
    clear,
  };

  return (
    <QuestionManagerCtx.Provider value={values}>
      {children}
    </QuestionManagerCtx.Provider>
  );
};
