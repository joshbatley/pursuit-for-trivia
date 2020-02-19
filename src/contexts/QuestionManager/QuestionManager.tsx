import React, {
  useState, useCallback, createContext, useContext, useEffect,
} from 'react';
import { fetchQuestions } from 'api';
import { useCategoryManager } from 'contexts/CategoryManager';

interface Props {
  children?: React.ReactChild;
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
  let [question, setQuestions] = useState<Question[] | null>([]);
  let { selected } = useCategoryManager();

  let fetch = useCallback(async (): Promise<void> => {
    if (question == null || question.length > 0) {
      return;
    }
    try {
      let res = await fetchQuestions({ category: selected });
      if (res) {
        setQuestions(res);
      }
    } catch (err) {
      setQuestions(null);
    }
  }, [selected, question]);

  // useEffect(() => {
  //   switch (state.current) {
  //     case 'setup':
  //       fetch();
  //       break;
  //     default:
  //       break;
  //   }
  // });
  let next = async (): Promise<void> => setCurrent(current + 1);

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
