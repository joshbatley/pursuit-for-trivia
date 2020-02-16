import React from 'react';
import Button from 'components/Button';
import Logo from 'components/Logo';
import Flex from 'components/Flex';
import Grid from 'components/Grid';


const Start: React.FC = () => (
  <Grid template="70% auto">
    <Logo />
    <Flex>
      <Button disabled to="/game">Continue</Button>
      <Button to="/mode-selector">Start</Button>
    </Flex>
  </Grid>
);

export default Start;
