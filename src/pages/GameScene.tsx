import React from 'react';
import ReactRouter from 'react-router-dom';
import { useGameManager } from 'contexts/GameManager';
import Header from 'components/Header';
import config from 'config';

interface Props {
  match: ReactRouter.match<{ mode: string }>;
}

const GameScene: React.FC<Props> = ({ match }: Props) => {
  let { params } = match;
  let { startGame } = useGameManager();

  startGame(params.mode);
  return (
    <>
      <Header lives={config.mode.normal.maxLives} />
      <h1>GAME SCREEN</h1>
    </>
  );
};

export default GameScene;
