import {
  useState, useCallback, useEffect, FormEvent,
} from 'react';
import config from 'config';
import { shuffle } from 'utils';
import { useQuestionManager } from 'contexts/QuestionManager';
import { useAnimationManager, Events } from 'contexts/AnimationManager';

interface Answer {
  text: string;
  isAnswer: boolean | null;
  id: number;
  onChange: () => void;
}

interface Current {
  current: number;
  question: string;
  correct: string;
  answers: Answer[];
}

interface ReturnedValues {
  lives: number;
  score: number;
  answers: Answer[];
  question: string | undefined;
  questionNo: number;
  isFetching: boolean;
  selected: string;
}

interface ReturnedFunctions {
  timeUp: () => void;
  submit: (e: FormEvent<Element>) => void;
}

function useGame(): [ReturnedValues, ReturnedFunctions] {
  // TOOD: Load from params and storage
  let { next, error, isFetching } = useQuestionManager();
  let animation = useAnimationManager();
  let [lives, setLives] = useState(config.mode.normal.maxLives);
  let [score, setScore] = useState(0);
  let [selected, setSelected] = useState('');
  let [current, setCurrent] = useState<Current | null>(null);

  const saveNext = useCallback(async () => {
    let nextQuestion = await next();
    setCurrent({
      current: nextQuestion.current,
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
          onChange: () => setSelected(i),
        })),
    });
  }, [next]);

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

  async function submit(e: FormEvent) {
    e.preventDefault();
    reaveal();
    if (selected === current?.correct) {
      await animation.fireAnimation(Events.CORRECT);
      await saveNext();
      setSelected('');
    } else {
      setLives(lives - 1);
      await animation.fireAnimation(Events.INCORRECT);
      await saveNext();
      setSelected('');
    }
  }

  useEffect(() => {
    async function startGame() {
      await saveNext();
    }

    if (current == null && error == null && isFetching === false) {
      startGame();
    }
  }, [current, error, saveNext, isFetching]);

  return [{
    lives,
    score,
    isFetching,
    answers: current?.answers as Current['answers'],
    question: current?.question,
    questionNo: current?.current as number,
    selected,
  }, {
    timeUp: () => {},
    submit,
  }];
}

export default useGame;
