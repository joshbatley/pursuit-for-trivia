import React, { useState } from 'react';
import useInterval from 'hooks/useInterval';
import config from 'config';
import style from './style.module.css';

interface Props {
  cb?: () => void;
  maxTime?: number;
}

const Timer: React.FC<Props> = ({ cb, maxTime = config.mode.normal.maxTime }: Props) => {
  let [time, setTime] = useState(maxTime);
  let [isRunning, setRunning] = useState(true);

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
    <div className={style.container} style={setCssVariable}>
      <svg className={style.timer} width="150" height="75" viewBox="0 150 250 75">
        <circle className={style.timer__background} cx="125" cy="125" r="113" />
        <circle className={style.timer__left} cx="125" cy="125" r="113" />
      </svg>
      <div className={style.time}>
        {time}
      </div>
    </div>
  );
};

export default Timer;
