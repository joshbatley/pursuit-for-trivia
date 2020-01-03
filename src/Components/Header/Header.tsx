import React from 'react';
import useGameManager from 'hooks/useGameManager';

const Header: React.FC = () => {
  const { lives, timer } = useGameManager();

  return (
    <header>
      <span>Lives: {lives}</span>
      <span>Time: {timer}</span>
    </header>
  );
};

export default Header;
