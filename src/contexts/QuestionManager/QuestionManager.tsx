import React, {
  useState, useCallback, createContext, useContext, useRef,
} from 'react';
import { fetchQuestions } from 'api';
import { useCategoryManager } from 'contexts/CategoryManager';
import { isNullOrUndefined } from 'utils';

interface Props {
  children?: React.ReactChild;
}

interface QuestionManager {
  next: () => Promise<Question>;
  reset: () => void;
  questionArray: Question[] | null;
  revealAnswers: () => void;
  shuffle: () => void;
  clear: () => void;
  error: Error | null;
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
  let current = useRef(0);
  let questions = useRef<Question[]>([]);
  let error = useRef<Error | null>(null);
  let [isLoading, setLoading] = useState(false);
  let { selected } = useCategoryManager();

  let fetch = useCallback(async (): Promise<void> => {
    if (questions == null || questions.current.length > 0 || isLoading === true) {
      return;
    }
    try {
      setLoading(true);
      let nextSet = await fetchQuestions({ category: selected });
      if (!isNullOrUndefined(nextSet)) {
        questions.current = [...questions.current, ...nextSet as Question[]];
      }
    } catch (err) {
      error.current = err;
    } finally {
      setLoading(false);
    }
  }, [selected, isLoading]);

  async function next(): Promise<Question> {
    if (questions.current.length <= 0) {
      // no question so fetch them
      await fetch();
    } else if (questions.current.length >= current.current - 3) {
      // fetch more if 4 away fro last
      await fetch();
      current.current += 1;
    } else {
      // just get next question
      current.current += 1;
    }

    return new Promise((res) => {
      if (isLoading !== true) {
        return res(questions.current[current.current]);
      }
    });
  }

  let reset = (): void => { };
  let shuffle = (): void => { };
  let clear = (): void => { };
  let revealAnswers = (): void => { };

  let values: QuestionManager = {
    next,
    reset,
    questionArray: questions.current,
    revealAnswers,
    shuffle,
    clear,
    error: error.current,
  };

  return (
    <QuestionManagerCtx.Provider value={values}>
      {children}
    </QuestionManagerCtx.Provider>
  );
};
