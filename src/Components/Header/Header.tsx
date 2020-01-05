import React from 'react';
import Timer from 'components/Timer';

interface Props {
  lives: number;
  timeUp?: () => void;
}

const Header: React.FC<Props> = ({ lives, timeUp }: Props) => {
  return (
    <header>
      <span>Lives: {lives}</span>
      <Timer cb={timeUp} />
    </header>
  );
};

export default Header;
