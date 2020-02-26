import React, {
  useState, useCallback, useEffect, useRef,
} from 'react';
import config from 'config';
import { useHistory } from 'react-router-dom';
import { shuffle } from 'utils';
import { useQuestionManager } from 'contexts/QuestionManager';
import { useAnimationManager, Events } from 'contexts/AnimationManager';
import scoreCalc from 'utils/scoreCalc';

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
  reset: (resetFn: () => void) => void;
  submit: (e: React.FormEvent<Element>) => Promise<void>;
}

function useGame(): [ReturnedValues, ReturnedFunctions] {
  // TOOD: Load from params and storage
  let { next, error, isFetching } = useQuestionManager();
  let animation = useAnimationManager();
  let [lives, setLives] = useState(config.mode.normal.maxLives);
  let [score, setScore] = useState(0);
  let [selected, setSelected] = useState('');
  let resetTimer = useRef<Function | null>(null);
  let [current, setCurrent] = useState<Current | null>(null);
  let { push } = useHistory();

  const getNextQuestion = useCallback(async () => {
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

  function reset(resetFn: () => void) {
    resetTimer.current = resetFn;
  }

  function reaveal() {
    setCurrent(({
      ...current,
      answers: current?.answers.map((a) => ({
        ...a,
        isAnswer: current?.correct === a.text,
      })),
    }) as Current);
  }

  async function correct(): Promise<void> {
    let resartTimer = resetTimer?.current?.();
    reaveal();
    await animation.fireAnimation(Events.CORRECT);
    await getNextQuestion();
    setSelected('');
    const timeLeft = resartTimer();
    setScore(score + scoreCalc(timeLeft, 1));
  }

  async function incorrect(): Promise<void> {
    let resartTimer = resetTimer?.current?.();
    reaveal();
    setLives(lives - 1);
    await animation.fireAnimation(Events.INCORRECT);
    if (lives === 0) {
      animation.fireAnimation(Events.GAMEOVER);
      return push('/game-over');
    }
    await getNextQuestion();
    setSelected('');
    resartTimer();
  }

  async function timeUp(): Promise<void> {
    if (selected === current?.correct) {
      await correct();
    } else {
      await incorrect();
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (selected === current?.correct) {
      await correct();
    } else {
      await incorrect();
    }
  }

  useEffect(() => {
    async function startGame() {
      await getNextQuestion();
    }

    if (current == null && error == null && isFetching === false) {
      startGame();
    }
  }, [current, error, getNextQuestion, isFetching]);

  return [{
    lives,
    score,
    isFetching,
    answers: current?.answers as Current['answers'],
    question: current?.question,
    questionNo: current?.current as number,
    selected,
  }, {
    timeUp,
    submit,
    reset,
  }];
}

export default useGame;
