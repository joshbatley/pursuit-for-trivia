import React, { useState } from 'react';
import GameManagerCtx from 'contexts/GameManagerCtx';
import config from 'config';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const GameManagerProvider: React.FC<Props> = ({ children }: Props) => {
  const { maxLives } = config.mode.normal;
  const [lives, setLives] = useState(maxLives);

  const startGame = async (): Promise<void> => {
    // fire start event stasrt
  };

  const loseLife = (): void => setLives(lives - 1);
  const resetLife = (): void => setLives(maxLives);

  const resetGame = (): void => {
    resetLife();
  };

  const timesUp = async (): Promise<void> => {
    loseLife();
    // Times up animation
    // reveal answers
    // next question
  };

  const correct = async (): Promise<void> => {
    // Fire confetti
    // reveal answers
    // next question
  };

  const incorrect = async (): Promise<void> => {
    loseLife();
    // Dunce animation
    // reveal answers
    // next question
  };

  const values = {
    lives,
    timesUp,
    startGame,
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
