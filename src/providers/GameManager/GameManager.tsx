import React, { useState } from 'react';
import GameManagerCtx, { GameManager } from 'contexts/GameManager';
import config from 'config';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const GameManagerProvider: React.FC<Props> = ({ children }: Props) => {
  const [lives, setLives] = useState(3);
  const [timer, setTimer] = useState(30);

  const resetTimer = (): void => setTimer(config.settings.maxTimer);
  const startTimer = (): NodeJS.Timeout => setInterval(() => setTimer(timer - 1), 1000);
  const cancelTimer = (): void => {};

  const loseLife = (): void => setLives(lives - 1);
  const resetLife = (): void => setLives(config.settings.maxLives);

  const timesUp = (): void => { };
  const correct = (): void => { };
  const incorrect = (): void => { };

  const values: GameManager = {
    lives,
    timer,
    resetTimer,
    startTimer,
    cancelTimer,
    loseLife,
    resetLife,
    timesUp,
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
