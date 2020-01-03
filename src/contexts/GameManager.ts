import React from 'react';

export interface GameManager {
  timer: number;
  lives: number;
  resetTimer: () => void;
  cancelTimer: () => void;
  startTimer: () => void;
  loseLife: () => void;
  resetLife: () => void;
  timesUp: () => void;
  correct: () => void;
  incorrect: () => void;
}

const GameManagerCtx = React.createContext<GameManager>({
  timer: 0,
  lives: 0,
  resetTimer: () => {},
  cancelTimer: () => {},
  startTimer: () => {},
  loseLife: () => {},
  resetLife: () => {},
  timesUp: () => {},
  correct: () => {},
  incorrect: () => {},
});

export default GameManagerCtx;
