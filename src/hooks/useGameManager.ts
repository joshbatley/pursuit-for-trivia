import { useContext } from 'react';
import { GameManager, GameManagerCtx } from 'contexts/GameManager';

function useGameManager(): GameManager {
  let context = useContext(GameManagerCtx);
  if (context === undefined) {
    throw new Error('useGameManager must be used within a GameManaagerProvider');
  }

  return context;
}

export default useGameManager;
