import React, { useState, createContext, useContext } from 'react';
import config from 'config';

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

interface GameManager {
  lives: number;
  timesUp: () => void;
  resetGame: () => void;
  startGame: (mode: string) => void;
  correct: () => Promise<void>;
  incorrect: () => Promise<void>;
}

const GameManagerCtx = createContext<GameManager | void>(undefined);

export function useGameManager(): GameManager {
  let context = useContext(GameManagerCtx);
  if (context === undefined) {
    throw new Error('useGameManager must be used within a GameManaagerProvider');
  }

  return context;
}

export const GameManagerProvider: React.FC<Props> = ({ children }: Props) => {
  let { maxLives } = config.mode.normal;
  let [lives, setLives] = useState(maxLives);

  let startGame = async (): Promise<void> => {
    // fire start event stasrt
  };

  let loseLife = (): void => setLives(lives - 1);
  let resetLife = (): void => setLives(maxLives);

  let resetGame = (): void => {
    resetLife();
  };

  let timesUp = async (): Promise<void> => {
    loseLife();
    // Times up animation
    // reveal answers
    // next question
  };

  let correct = async (): Promise<void> => {
    // Fire confetti
    // reveal answers
    // next question
  };

  let incorrect = async (): Promise<void> => {
    loseLife();
    // Dunce animation
    // reveal answers
    // next question
  };

  let values = {
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
