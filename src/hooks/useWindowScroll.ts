import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

export const useWindowScroll = (): [
  scroll: { x: number; y: number },
  scrollTo: (options?: { x?: number; y?: number }) => void
] => {
  const [scroll, setScroll] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  useWindowEvent('scroll', () =>
    setScroll({ x: window.scrollX, y: window.scrollY })
  );
  const scrollTo = (options?: { x?: number; y?: number }) =>
    window.scrollTo({
      top: options?.y ?? 0,
      left: options?.x ?? 0,
      behavior: 'smooth',
    });

  return [scroll, scrollTo];
};
