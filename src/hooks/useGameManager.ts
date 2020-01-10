import { useContext } from 'react';
import GameManagerCtx, { GameManager } from 'contexts/GameManagerCtx';

function useGameManager(): GameManager {
  const context = useContext(GameManagerCtx);
  if (context === undefined) {
    throw new Error('useGameManager must be used within a GameManaagerProvider');
  }

  return context;
}

export default useGameManager;
