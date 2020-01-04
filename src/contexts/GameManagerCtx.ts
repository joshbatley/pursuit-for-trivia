import React from 'react';

export interface GameManager {
  time: number;
  lives: number;
  resetGame: () => void;
  cancelTimer: () => void;
  startGame: () => void;
  correct: () => Promise<void>;
  incorrect: () => Promise<void>;
}

const GameManagerCtx = React.createContext<GameManager>({
  time: 0,
  lives: 0,
  resetGame: () => {},
  cancelTimer: () => {},
  startGame: () => {},
  correct: async () => {},
  incorrect: async () => {},
});

export default GameManagerCtx;
