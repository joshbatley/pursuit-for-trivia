import React from 'react';
import Timer from 'components/Timer';

interface Props {
  lives: number;
  timeUp?: () => void;
}

const ActionBar: React.FC<Props> = ({ lives, timeUp }: Props) => (
  <header>
    <span>Lives: {lives}</span>
    <Timer cb={timeUp} />
  </header>
);

export default ActionBar;
