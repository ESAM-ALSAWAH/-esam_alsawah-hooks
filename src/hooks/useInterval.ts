import { useRef, useState } from 'react';
/**
 *
 * @param fn void function
 * @param time this in ms
 */

export const useInterval = (fn: () => void, time: number) => {
  const [active, setActive] = useState(false);
  const intervalRef = useRef<number>();
  const start = () => {
    setActive((old) => {
      if (!old && !intervalRef.current) {
        intervalRef.current = window.setInterval(fn, time);
      }
      return true;
    });
  };

  const stop = () => {
    setActive(false);
    window.clearInterval(intervalRef.current);
    intervalRef.current = undefined;
  };

  const toggle = () => {
    if (active) {
      stop();
    } else {
      start();
    }
  };

  return { start, stop, toggle, active };
};
