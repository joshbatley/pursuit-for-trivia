import React from 'react';

interface Props {
  score: number;
}

const Score: React.FC<Props> = ({ score }: Props) => (
  <div>{score}</div>
);

export default Score;
