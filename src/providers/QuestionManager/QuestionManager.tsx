import React, { useState } from 'react';
import QuestionManagerCtx, { QuestionManager } from 'contexts/QuestionManager';
import getQuestions from 'api';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const QuestionManagerProvider: React.FC<Props> = ({ children }: Props) => {
  const [current, setCurrent] = useState(0);
  const [question, setQuestions] = useState([] as Question[]);
  const next = (): void => setCurrent(current + 1);
  const fetch = async (): Promise<void> => {
    try {
      const res: QuestionRes = await getQuestions();
      if (res) {
        setQuestions(res);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const reset = (): void => {};
  const shuffle = (): void => {};
  const clear = (): void => {};

  const values: QuestionManager = {
    current,
    next,
    fetch,
    reset,
    questionArray: question,
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
