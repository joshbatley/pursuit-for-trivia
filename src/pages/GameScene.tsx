import React from 'react';
import ReactRouter from 'react-router-dom';
import { useGameManager } from 'contexts/GameManager';
import Header from 'components/Header';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Answer from 'components/Answer';
import Grid from 'components/Grid';

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
      <Grid gutter="0 25px">
        <Heading>QUESTION 1</Heading>
        <Text>123</Text>
        <Answer text="asddas" id="1" />
        <Answer text="asddas" id="1" />
        <Answer text="asddas" id="1" />
        <Answer text="asddas" id="1" />
      </Grid>
    </>
  );
};

export default GameScene;
