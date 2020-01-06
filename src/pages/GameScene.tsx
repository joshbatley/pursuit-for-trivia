import React from 'react';
import ReactRouter from 'react-router-dom';
import useGameManager from 'hooks/useGameManager';

import ActionBar from 'components/ActionBar';

interface Props {
  match: ReactRouter.match<{ mode: string }>;
}

const GameScene: React.FC<Props> = ({ match }: Props) => {
  const { params } = match;
  const { startGame } = useGameManager();

  startGame(params.mode);
  console.log('Rerender');
  return (
    <>
      <ActionBar lives={1} />
      <h1>GAME SCREEN</h1>
    </>
  );
};
export default GameScene;
