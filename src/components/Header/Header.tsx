import React from 'react';
import Timer from 'components/Timer';
import Score from 'components/Score';
import Lives from 'components/Lives';
import style from './styles.module.css';

interface Props {
  lives: number;
  timeUp?: () => void;
  score: number;
}

const Header: React.FC<Props> = ({ lives, timeUp, score }: Props) => (
  <header className={style.header}>
    <Score score={score} />
    <Timer cb={timeUp} />
    <Lives lives={lives} />
  </header>
);

export default Header;
