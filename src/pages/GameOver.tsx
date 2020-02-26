import React from 'react';
import Button from 'components/Button';
import Flex from 'components/Flex';
import Grid from 'components/Grid';
import PageTitle from 'components/PageTitle';


const GameOver: React.FC = () => (
  <Grid template="70% auto">
    <PageTitle>GAME OVER</PageTitle>
    <Flex>
      <Button to="/mode-selector">Resart</Button>
    </Flex>
  </Grid>
);

export default GameOver;
