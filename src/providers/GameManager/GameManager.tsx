import React, { useState } from 'react';
import GameManagerContext from 'contexts/GameManager';
import config from 'config';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const GameManagerProvider: React.FC<Props> = ({ children }: Props) => {
  const [lives, setLives] = useState(3);
  const [timer, setTimer] = useState(30);

  const resetTimer = () => setTimer(config.settings.maxTimer);
  const startTimer = () => setInterval(() => setTimer(timer - 1), 1000);

  const loseLife = () => setLives(lives - 1);
  const resetLife = () => setLives(config.settings.maxLives);

  const timerRanOut = () => { };
  const correctAnswer = () => { };
  const incorrectAnswer = () => { };

  return (
    <GameManagerContext.Provider value={{ lives, timer }}>
      {children}
    </GameManagerContext.Provider>
  );
};

export default GameManagerProvider;
