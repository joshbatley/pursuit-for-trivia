import React from 'react';
import { useEventManager, AllowActions } from 'contexts/EventManager';
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
  let { categories, setCategory } = useCategoryManager();
  let { difficulty } = config.mode.normal;
  let { dispatch } = useEventManager();

  function onChange(value: string) {
    setCategory(parseInt(value, 10));
  }

  return (
    <Grid gutter="25px" template="10% 40% 40% 10%">
      <PageTitle>Set up</PageTitle>
      <Flex>
        <Heading>How to play</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mae
          cenas cursus justo nec lorem ornare malesuada. Nullam aliquet dic
          tum imperdiet. Nullam at mi eu orci rutrum auctor ac vel augue. P
          raesent sed nunc neque. Mauris vestibulum quam non tortor rhonc
          us mollis. Pellentesque habitant morbi tristique senectus et net
          us et malesuada fames ac turpis egestas. Maecenas sed efficitur mauris.
        </Text>
      </Flex>
      <Flex>
        <Dropdown options={categories} onChange={onChange} placeholder="Difficulty" />
        <Dropdown options={difficulty} onChange={onChange} placeholder="Category" />
      </Flex>
      <Button
        to="/game/normal"
        onClick={() => dispatch({ type: AllowActions.START })}
      >
        Play
      </Button>
    </Grid>
  );
};

export default ModeSelector;
