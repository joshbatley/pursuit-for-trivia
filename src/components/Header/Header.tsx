import React from 'react';
import Timer from 'components/Timer';
import Lives from 'components/Lives';
import style from './styles.module.css';

interface Props {
  lives: number;
  timeUp?: () => void;
}

const Header: React.FC<Props> = ({ lives, timeUp }: Props) => (
  <header>
    <Lives lives={lives} />
    <div className={style.header}>
      <Timer cb={timeUp} />
    </div>
  </header>
);

export default Header;
