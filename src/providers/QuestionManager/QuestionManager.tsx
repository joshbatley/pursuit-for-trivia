import React, { useState, useCallback } from 'react';
import QuestionManagerCtx, { QuestionManager } from 'contexts/QuestionManagerCtx';
import getQuestions from 'api';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const QuestionManagerProvider: React.FC<Props> = ({ children }: Props) => {
  const [current, setCurrent] = useState(0);
  const [question, setQuestions] = useState([] as Question[]);

  // const loadQuestions = (data) => {

  // };

  const next = async (): Promise<void> => setCurrent(current + 1);

  const fetch = useCallback(async (): Promise<void> => {
    console.log('fetch');
    try {
      const res: QuestionRes = await getQuestions();
      if (res) {
        setQuestions(res);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const reset = (): void => {};
  const shuffle = (): void => {};
  const clear = (): void => {};
  const revealAnswers = (): void => {};

  const values: QuestionManager = {
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

export default QuestionManagerProvider;
