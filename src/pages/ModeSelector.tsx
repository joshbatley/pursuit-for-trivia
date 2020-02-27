import React from 'react';
import { useCategoryManager } from 'contexts/CategoryManager';
import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import PageTitle from 'components/PageTitle';
import Heading from 'components/Heading';
import Grid from 'components/Grid';
import Text from 'components/Text';
import Flex from 'components/Flex';
import config from 'config';

const ModeSelector: React.FC = () => {
  let { categories, setCategory, setDifficulty } = useCategoryManager();
  let { difficulties } = config.mode.normal;

  function categoryChange(value: string) {
    setCategory(parseInt(value, 10));
  }

  function difficultyChange(value: string) {
    setDifficulty(value === '' ? undefined : value as QuestionDifficulty);
  }

  return (
    <Grid gutter="25px" template="10% 40% 40% 10%">
      <PageTitle>Set up</PageTitle>
      <Flex>
        <Heading>How to play</Heading>
        <Text>{`
          You get ${config.mode.normal.maxTime.toString()} seconds to answer a question, the quicker you are the more pointes you.

          If you're wrong, you lose a life and lose all 3 lives then GAME OVER.
          `}
        </Text>
      </Flex>
      <Flex>
        <Dropdown options={categories} onChange={categoryChange} placeholder="Category" />
        <Dropdown options={difficulties} onChange={difficultyChange} placeholder="Difficulty" />
      </Flex>
      <Button to="/game/normal">
        Play
      </Button>
    </Grid>
  );
};

export default ModeSelector;
