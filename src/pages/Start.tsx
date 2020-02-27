import React from 'react';
import Button from 'components/Button';
import Logo from 'components/Logo';
import Flex from 'components/Flex';
import Grid from 'components/Grid';
import PageTitle from 'components/PageTitle';
import useHighscore from 'hooks/useHighscore';

const Start: React.FC = () => {
  let [score] = useHighscore();
  return (
    <Grid template="70% auto">
      <Logo />
      <PageTitle>Highscore: {score ?? 0}</PageTitle>
      <Flex>
        <Button to="/mode-selector">Start</Button>
      </Flex>
    </Grid>
  );
};

export default Start;
