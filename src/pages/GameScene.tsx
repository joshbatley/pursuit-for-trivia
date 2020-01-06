import React from 'react';
import ReactRouter from 'react-router-dom';
import useGameManager from 'hooks/useGameManager';
import Header from 'components/Header';


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
      <Header lives={1} />
      <h1>GAME SCREEN</h1>
    </>
  );
};
export default GameScene;
