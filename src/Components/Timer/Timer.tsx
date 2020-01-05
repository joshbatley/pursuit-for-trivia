import React from 'react';

interface Props {
  time: number;
}

const Timer: React.FC<Props> = ({ time }: Props) => (
  <span>{time}</span>
);

export default Timer;
