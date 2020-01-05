import React, { useState } from 'react';
import useInterval from 'hooks/useInterval';
import config from 'config';

interface Props {
  cb?: () => void;
  maxTime?: number;
}

const Timer: React.FC<Props> = ({ cb, maxTime }: Props) => {
  const [time, setTime] = useState(maxTime || config.mode.normal.maxTime);
  const [isRunning, setRunning] = useState(true);
  useInterval(() => {
    if (time <= 0) {
      if (cb) {
        cb();
      }
      setRunning(false);
      return;
    }
    setTime(time - 1);
  }, isRunning ? 1000 : null);

  return (
    <span>{time}</span>
  );
};

export default Timer;
