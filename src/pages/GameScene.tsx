import React from 'react';
import ReactRouter from 'react-router-dom';
import { useGameManager } from 'contexts/GameManager';
import Header from 'components/Header';
import Heading from 'components/Heading';
import Question from 'components/Question';
import Answer from 'components/Answer';


interface Props {
  match: ReactRouter.match<{ mode: string }>;
}

const GameScene: React.FC<Props> = ({ match }: Props) => {
  let { params } = match;
  let { startGame } = useGameManager();

  startGame(params.mode);
  return (
    <>
      <Header lives={3} score={0} />
      <Heading>QUESTION 1</Heading>
      <Question text="12" />
      <Answer text="asddas" id="1" />
    </>
  );
};

export default GameScene;
