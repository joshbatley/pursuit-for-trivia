import React from 'react';

interface GameManager {
  timer: number;
  lives: number;
}

const GameManagerContext = React.createContext<GameManager>({
  timer: 0,
  lives: 0,
});

export default GameManagerContext;
