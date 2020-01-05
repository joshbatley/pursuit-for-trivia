import React from 'react';

export interface GameManager {
  lives: number;
  resetGame: () => void;
  startGame: (mode: string) => void;
  correct: () => Promise<void>;
  incorrect: () => Promise<void>;
}

const GameManagerCtx = React.createContext<GameManager>({
  lives: 0,
  resetGame: () => {},
  startGame: () => {},
  correct: async () => {},
  incorrect: async () => {},
});

export default GameManagerCtx;
