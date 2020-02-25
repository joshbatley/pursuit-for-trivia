import {
  useState, useCallback, useEffect, FormEvent,
} from 'react';
import config from 'config';
import { shuffle } from 'utils';
import { useQuestionManager } from 'contexts/QuestionManager';
import { useAnimationManager, Events } from 'contexts/AnimationManager';


interface Values {
  lives: number;
  score: number;
  answers: {
    text: string;
    isAnswer: boolean | null;
    id: number;
  }[];
  question: string | undefined;
  questionNo: number;
}

interface Functions {
  timeUp: () => void;
  submit: (answers: string) => (e: FormEvent<Element>) => void;
}

interface Current {
  question: string;
  correct: string;
  answers: {
    text: string;
    isAnswer: boolean | null;
    id: number;
  }[];
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
    if (error == null) {
      let nextQuestion = await next();
      setCurrent({
        question: window.atob(nextQuestion.question),
        correct: window.atob(nextQuestion.correct_answer),
        answers: [
          nextQuestion.correct_answer,
          ...nextQuestion.incorrect_answers,
        ]
          .map((i) => window.atob(i))
          .sort(shuffle)
          .map((i, id) => ({
            text: i,
            isAnswer: null,
            id,
          })),
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

  function reaveal() {
    setCurrent(({
      ...current,
      answers: current?.answers.map((a) => ({
        ...a,
        isAnswer: current?.correct === a.text,
      })),
    }) as Current);
  }

  function submit(answers: string) {
    return (e: FormEvent) => {
      e.preventDefault();
      reaveal();
      if (answers === current?.correct) {
        animation.fireAnimation(Events.CORRECT);
      } else {
        setLives(lives - 1);
        animation.fireAnimation(Events.INCORRECT);
      }
    };
  }

  useEffect(() => {
    if (current == null) {
      startGame();
    }
  }, [current, startGame]);
  return [{
    lives,
    score,
    answers: current?.answers as Current['answers'],
    question: current?.question,
    questionNo: 1,
  }, {
    timeUp: () => {},
    submit,
  }];
}

export default useGame;
