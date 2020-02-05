import React from 'react';
import { Link } from 'react-router-dom';
import { useCategoryManager } from 'contexts/CategoryManager';
import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import { useEventManager, AllowActions } from 'contexts/EventManager';

const ModeSelector: React.FC = () => {
  let { categories, setCategory } = useCategoryManager();
  let { dispatch } = useEventManager();

  function onChange(value: string) {
    setCategory(parseInt(value, 10));
  }

  return (
    <section>
      <h1>MODE SELECTOR</h1>
      <Dropdown options={categories} onChange={onChange} placeholder="select category" />
      <Link to="/game/normal">
        <Button onClick={() => dispatch({ type: AllowActions.START })}>Play</Button>
      </Link>
    </section>
  );
};

export default ModeSelector;
