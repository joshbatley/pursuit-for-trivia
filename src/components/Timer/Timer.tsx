import React, { useState } from 'react';
import useInterval from 'hooks/useInterval';
import config from 'config';
import styles from './styles.module.css';

interface Props {
  cb?: () => void;
  resetTimer?: (reset: () => void) => void;
  maxTime?: number;
}

const Timer: React.FC<Props> = ({
  cb, maxTime = config.mode.normal.maxTime, resetTimer,
}: Props) => {
  let [time, setTime] = useState(maxTime);
  let [isRunning, setRunning] = useState(true);

  function reset() {
    setRunning(false);
    return () => {
      let currentTime = time;
      setTime(maxTime);
      setRunning(true);
      return currentTime;
    };
  }

  resetTimer?.(reset);

  useInterval(() => {
    if (time <= 0) {
      cb?.();
      setRunning(false);
      return;
    }
    setTime(time - 1);
  }, isRunning ? 1000 : null);

  let setCssVariable = { ['--time' as string]: maxTime };

  return (
    <div className={styles.container} style={setCssVariable}>
      <svg className={styles.timer} width="150" height="75" viewBox="0 150 250 75">
        <circle className={styles.timer__background} cx="125" cy="125" r="113" />
        {isRunning && <circle className={styles.timer__left} cx="125" cy="125" r="113" />}
      </svg>
      <div className={styles.time}>
        {time}
      </div>
    </div>
  );
};

export default Timer;
