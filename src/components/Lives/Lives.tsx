import React from 'react';
import { EmptyArrayOfSize } from 'utils';
import style from './styles.module.css';

interface Props {
  lives: number;
}

const Heart = () => (
  <div>[]</div>
);

const LivesContainer: React.FC<Props> = ({ lives }: Props) => {
  let groupLives = lives > 3;

  return groupLives ? (
    <>
      <h3 className={style.counter}>{lives}</h3>
      <Heart />
    </>
  ) : (
    <>
      {EmptyArrayOfSize(lives).map((o, i) => (
        <Heart key={i} />
      ))}
    </>
  );
};

export default LivesContainer;
