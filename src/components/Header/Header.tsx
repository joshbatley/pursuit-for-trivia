import React from 'react';
import Timer from 'components/Timer';
import style from './styles.module.css';

interface Props {
  lives: number;
  timeUp?: () => void;
}

const Header: React.FC<Props> = ({ lives, timeUp }: Props) => (
  <header>
    <span>Lives: {lives}</span>
    <div className={style.header}>
      <Timer cb={timeUp} />
    </div>
  </header>
);

export default Header;
