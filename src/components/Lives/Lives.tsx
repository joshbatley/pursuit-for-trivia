import React from 'react';
import { EmptyArrayOfSize } from 'utils';
import { ReactComponent as Heart } from 'assets/heart.svg';
import style from './styles.module.css';

interface Props {
  lives: number;
}

const HeartContainer = () => (
  <Heart width="32" height="32" className={style.heart} />
);

const LivesContainer: React.FC<Props> = ({ lives }: Props) => {
  let groupLives = lives > 3;

  return groupLives ? (
    <div className={style.conatiner}>
      <h3 className={style.counter}>{lives}</h3>
      <HeartContainer />
    </div>
  ) : (
    <div className={style.conatiner}>
      {EmptyArrayOfSize(lives).map((o, i) => (
        <HeartContainer key={i} />
      ))}
    </div>
  );
};

export default LivesContainer;
