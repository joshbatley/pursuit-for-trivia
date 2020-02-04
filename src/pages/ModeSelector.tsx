import React from 'react';
import { Link } from 'react-router-dom';
import { useCategoryManager } from 'contexts/CategoryManager';
import Dropdown from 'components/Dropdown';

const ModeSelector: React.FC = () => {
  const { categories, setCategory } = useCategoryManager();

  function onChange(value: string) {
    console.log(value);
    setCategory(parseInt(value, 10));
  }

  return (
    <>
      <h1>MODE SELECTOR</h1>
      <Dropdown options={categories} onChange={onChange} placeholder="select category" />
      <Link to="/game/normal">nomal</Link>
    </>
  );
};

export default ModeSelector;
