import React from 'react';

export interface GameManager {
  lives: number;
  timesUp: () => void;
  resetGame: () => void;
  startGame: (mode: string) => void;
  correct: () => Promise<void>;
  incorrect: () => Promise<void>;
}

const GameManagerCtx = React.createContext<GameManager>({
  lives: 0,
  timesUp: () => {},
  resetGame: () => {},
  startGame: () => {},
  correct: async () => {},
  incorrect: async () => {},
});

export default GameManagerCtx;
