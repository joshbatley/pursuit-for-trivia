import React from 'react';
import styles from './styles.module.css';

interface Props {
  score: number;
}

const Score: React.FC<Props> = ({ score }: Props) => {
  let normalizeScore = '000000'.substring(0, 6 - score.toString().length) + score;
  return (
    <div className={styles.score}>{normalizeScore}</div>
  );
};

export default Score;
