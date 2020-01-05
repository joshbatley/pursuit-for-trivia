import React from 'react';

interface Props {
  time: number;
}

const Header: React.FC<Props> = ({ time }: Props) => {
  return (
    <header>
      {/* <span>Lives: {lives}</span> */}
      <span>Time: {time}</span>
    </header>
  );
};

export default Header;
