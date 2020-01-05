import { useState, useRef, useEffect } from 'react';
import config from 'config';

interface Timer {
  time: number;
  start: () => void;
  reset: () => void;
  stop: () => void;
}

function useTimer(timeUp: () => void): Timer {
  const { maxTime } = config.mode.normal;
  const [time, setTimer] = useState(maxTime);
  const interval = useRef<NodeJS.Timeout>();

  // const startTimer = (): void => {
  //   if (!state.timer) {
  //     setTime(maxTime);
  //     setTimer(true);
  //   }
  // };

  const start = (): void => {
    interval.current = setInterval(() => {}, 1000);
  };

  const reset = (): void => {

  };

  const stop = (): void => {
    if (interval.current !== undefined) {
      clearInterval(interval.current);
    }
  };

  useEffect(() => {
    if (time <= 0) {
      stop();
      timeUp();
    }

    start();
    return (): void => reset();
  });

  return {
    time,
    start,
    reset,
    stop,
  };
}

export default useTimer;
