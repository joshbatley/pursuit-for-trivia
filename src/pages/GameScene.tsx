import React from 'react';
import ReactRouter from 'react-router-dom';
import useGameManager from 'hooks/useGameManager';
import useTimer from 'hooks/useTimer';

import Header from 'components/Header';

interface Props {
  match: ReactRouter.match<{ mode: string }>;
}

const GameScene: React.FC<Props> = ({ match }: Props) => {
  const { params } = match;
  const { startGame } = useGameManager();
  const { time } = useTimer(() => console.log('123'));

  startGame(params.mode);
  console.log('Rerender');
  return (
    <>
      <Header time={time} />
      <h1>GAME SCREEN</h1>
    </>
  );
};
export default GameScene;
