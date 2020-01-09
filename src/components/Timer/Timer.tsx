import React, { useState } from 'react';
import useInterval from 'hooks/useInterval';
import config from 'config';
import style from './style.module.css';

interface Props {
  cb?: () => void;
  maxTime?: number;
}

const Timer: React.FC<Props> = ({ cb, maxTime = config.mode.normal.maxTime }: Props) => {
  const [time, setTime] = useState(maxTime);
  const [isRunning, setRunning] = useState(true);
  useInterval(() => {
    if (time <= 0) {
      cb?.();
      setRunning(false);
      return;
    }
    setTime(time - 1);
  }, isRunning ? 1000 : null);

  const setCssVariable = { ['--time' as string]: maxTime };
  return (
    <div className={style.timer} style={setCssVariable}>
      <svg className={style.progress} width="70" height="70" viewBox="0 0 250 250">
        <circle className={style.progress__meter} cx="125" cy="125" r="113" />
        <circle className={style.progress__value} cx="125" cy="125" r="113" />
      </svg>
      <div className={style.time}>
        {time}
      </div>
    </div>
  );
};

export default Timer;
