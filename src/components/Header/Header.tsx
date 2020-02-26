import React from 'react';
import Timer from 'components/Timer';
import Score from 'components/Score';
import Lives from 'components/Lives';
import styles from './styles.module.css';

interface Props {
  lives: number;
  timeUp?: () => void;
  reset: (resetFn: () => void) => void;
  score: number;
}

const Header: React.FC<Props> = ({
  lives, timeUp, score, reset,
}: Props) => (
  <header className={styles.header}>
    <Score score={score} />
    <Timer cb={timeUp} resetTimer={reset} />
    <Lives lives={lives} />
  </header>
);

export default Header;
