import { useEffect, useRef } from 'react';

function useInterval(callback: () => void, delay: number | null): void {
  let savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect((): (void | (() => void)) => {
    function tick(): void {
        savedCallback.current?.();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return (): void => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
