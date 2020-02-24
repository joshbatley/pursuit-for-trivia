import { useState, useCallback, useEffect } from 'react';
import config from 'config';
import { useQuestionManager } from 'contexts/QuestionManager';
import { useAnimationManager } from 'contexts/AnimationManager';


interface Values {
  lives: number;
  score: number;
  answers: string[] | undefined;
  question: string | undefined;
  questionNo: number;
}

interface Functions {
  timeUp: () => void;
  submit: () => void;
}

interface Current {
  question: string;
  answers: string[];
}

function useGame(): [Values, Functions] {
  // Load from params and storage
  let { next, error } = useQuestionManager();
  let animation = useAnimationManager();
  let [lives, setLives] = useState(config.mode.normal.maxLives);
  let [score, setScore] = useState(0);
  let [current, setCurrent] = useState<Current | null>(null);
  // let question = 'Which artist composed the original soundtrack for “Watch Dogs 2“?';

  let startGame = useCallback(async (): Promise<void> => {
    // console.log('here');
    if (error == null) {
      /* eslint-disable @typescript-eslint/camelcase */
      let nextQuestion = await next();
      setCurrent({
        question: nextQuestion.question,
        answers: [nextQuestion.correct_answer, ...nextQuestion.incorrect_answers],
      });
    }
    //  fire start event stasrt
  }, [error, next]);

  // let loseLife = (): void => setLives(lives - 1);
  // let resetLife = (): void => setLives(maxLives);

  // let resetGame = (): void => {
  //   resetLife();
  // };

  // let timesUp = async (): Promise<void> => {
  //   loseLife();
  //   // Times up animation
  //   // reveal answers
  //   // next question
  // };

  // let correct = async (): Promise<void> => {
  //   // Fire confetti
  //   // reveal answers
  //   // next question
  // };

  // let incorrect = async (): Promise<void> => {
  //   loseLife();
  //   // Dunce animation
  //   // reveal answers
  //   // next question
  // };

  useEffect(() => {
    if (current == null) {
      startGame();
    }
  }, [current, startGame]);
  return [{
    lives,
    score,
    answers: current?.answers,
    question: current?.question,
    questionNo: 1,
  }, {
    timeUp: () => {},
    submit: () => {},
  }];
}

export default useGame;
