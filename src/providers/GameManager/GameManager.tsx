import React, { useState } from 'react';
import GameManagerCtx from 'contexts/GameManagerCtx';
import useQuestionManager from 'hooks/useQuestionManager';
import useInterval from 'hooks/useInterval';
import config from 'config';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const GameManagerProvider: React.FC<Props> = ({ children }: Props) => {
  const { maxTime, maxLives } = config.settings;
  const { nextQuestion, fetch } = useQuestionManager();
  const [lives, setLives] = useState(3);
  const [timer, setTimer] = useState(false as (boolean));
  const [time, setTime] = useState(maxTime);

  const startGame = (): false | void => (!timer && time === maxTime) && setTimer(true);
  const cancelTimer = (): void => setTimer(false);

  const loseLife = (): void => setLives(lives - 1);
  const resetLife = (): void => setLives(maxLives);

  const resetTimer = (): void => {
    setTime(maxTime);
    setTimer(true);
  };

  const resetGame = (): void => {
    resetLife();
    resetTimer();
  };

  const timesUp = async (): Promise<void> => {
    loseLife();
    cancelTimer();
    // Times up animation
    await nextQuestion(); // Reveal(correct answer), next questin
    console.log('time up');
    resetTimer();
  };

  const correct = async (): Promise<void> => {
    cancelTimer();
    // Fire confetti
    await nextQuestion(); // Reveal(nothing), next question
    resetTimer();
  };

  const incorrect = async (): Promise<void> => {
    cancelTimer();
    loseLife();
    // Dunce animation
    await nextQuestion(); // Reveal(correct answer), next question
    resetTimer();
  };

  useInterval(() => {
    if (time <= 0) {
      timesUp();
      return;
    }
    setTime(time - 1);
  }, timer ? 1000 : null);

  const values = {
    lives,
    time,
    startGame,
    cancelTimer,
    resetGame,
    correct,
    incorrect,
  };

  return (
    <GameManagerCtx.Provider value={values}>
      {children}
    </GameManagerCtx.Provider>
  );
};

export default GameManagerProvider;
