import React from 'react';
import ReactRouter from 'react-router-dom';
import { useGameManager } from 'contexts/GameManager';
import Header from 'components/Header';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Answer from 'components/Answer';
import Grid from 'components/Grid';
import Flex from 'components/Flex';
import Button from 'components/Button';

interface Props {
  match: ReactRouter.match<{ mode: string }>;
}

const GameScene: React.FC<Props> = ({ match }: Props) => {
  let { params } = match;
  let { startGame } = useGameManager();
  let question = 'Which artist composed the original soundtrack for “Watch Dogs 2“?';

  startGame(params.mode);
  return (
    <>
      <Header lives={3} score={0} />
      <Grid gutter="75px 25px 0" template="35% 40% 20%">
        <Flex style={{ alignSelf: 'self-start' }}>
          <Heading>QUESTION 1</Heading>
          <Text size="24px">{question}</Text>
        </Flex>
        <Flex>
          <Answer text="asddas" id="1" />
          <Answer text="asddas" id="2" />
          <Answer text="asddas" id="3" />
          <Answer text="asddas" id="4" />
        </Flex>
        <Button>Submit</Button>
      </Grid>
    </>
  );
};

export default GameScene;
