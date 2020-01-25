import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCategories } from 'api';

const ModeSelector: React.FC = () => {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    async function fetch() {
      let data = await fetchCategories();
      setCategories(data?.trivia_categories ?? []);
    }
    fetch();
  }, [categories]);

  return (
    <>
      <h1>MODE SELECTOR</h1>
      <select>
        {categories && categories.map(({ id, name }) => (
          <option key={id}>{name}</option>
        ))}
      </select>
      <Link to="/game/normal">nomal</Link>
    </>
  );
};

export default ModeSelector;
