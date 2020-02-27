import React from 'react';
import Button from 'components/Button';
import Flex from 'components/Flex';
import Grid from 'components/Grid';
import PageTitle from 'components/PageTitle';
import useHighscore from 'hooks/useHighscore';

const GameOver: React.FC = () => {
  let [score] = useHighscore();

  return (
    <Grid template="70% auto">
      <PageTitle>GAME OVER</PageTitle>
      <PageTitle>score: {score}</PageTitle>
      <Flex>
        <Button to="/mode-selector">Resart</Button>
      </Flex>
    </Grid>
  );
};

export default GameOver;
