import React, { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useCategoryManager } from 'contexts/CategoryManager';

const ModeSelector: React.FC = () => {
  const { categories, setCategory } = useCategoryManager();

  function onChange({ target }: ChangeEvent<HTMLSelectElement>) {
    setCategory(parseInt(target.value, 10));
  }

  return (
    <>
      <h1>MODE SELECTOR</h1>
      <select onChange={onChange}>
        {categories?.map(({ id, name }) => (
          <option key={id} value={id}>{name}</option>
        ))}
      </select>
      <Link to="/game/normal">nomal</Link>
    </>
  );
};

export default ModeSelector;
