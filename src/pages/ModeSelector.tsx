import React from 'react';
import { Link } from 'react-router-dom';
import { useCategoryManager } from 'contexts/CategoryManager';
import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import { useEventManager, AllowActions } from 'contexts/EventManager';
import PageTitle from 'components/PageTitle';
import Heading from 'components/Heading';
import Grid from 'components/Grid';

const ModeSelector: React.FC = () => {
  let { categories, setCategory } = useCategoryManager();
  let { dispatch } = useEventManager();

  function onChange(value: string) {
    setCategory(parseInt(value, 10));
  }

  return (
    <Grid>
      <PageTitle>Set up</PageTitle>
      <Heading>How to play</Heading>
      <Dropdown options={categories} onChange={onChange} placeholder="Difficulty" />
      <Dropdown options={categories} onChange={onChange} placeholder="Category" />
      <Link to="/game/normal">
        <Button onClick={() => dispatch({ type: AllowActions.START })}>Play</Button>
      </Link>
    </Grid>
  );
};

export default ModeSelector;
