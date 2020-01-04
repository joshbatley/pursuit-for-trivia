import React from 'react';
import useGameManager from 'hooks/useGameManager';

const Header: React.FC = () => {
  const { lives, time } = useGameManager();
  return (
    <header>
      <span>Lives: {lives}</span>
      <span>Time: {time}</span>
    </header>
  );
};

export default Header;
