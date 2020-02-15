import React from 'react';
import { EmptyArrayOfSize } from 'utils';
import { ReactComponent as Heart } from 'assets/heart.svg';
import config, { Modes } from 'config';
import classnames from 'classnames';
import styles from './styles.module.css';

interface Props {
  lives: number;
  mode?: Modes;
}

interface HCProps {
  disabled?: boolean;
}

const HeartContainer: React.FC<HCProps> = ({ disabled }: HCProps) => (
  <Heart width="32" height="32" className={classnames(styles.heart, disabled && styles.disabled)} />
);

const LivesContainer: React.FC<Props> = ({ lives, mode = Modes.Normal }: Props) => {
  let groupLives = lives > 3;
  let { maxLives } = config.mode[mode];

  return groupLives ? (
    <div className={styles.conatiner}>
      <h3 className={styles.counter}>{lives}</h3>
      <HeartContainer />
    </div>
  ) : (
    <div className={styles.conatiner}>
      {EmptyArrayOfSize(maxLives).map((o, i) => (
        <HeartContainer key={i} disabled={i >= lives} />
      ))}
    </div>
  );
};

export default LivesContainer;
