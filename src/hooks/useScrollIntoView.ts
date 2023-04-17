import { useRef } from 'react';

export const useScrollIntoView = <T extends HTMLElement = HTMLDivElement>() => {
  const ref = useRef<T>(null) as React.MutableRefObject<T | null>;
  const scrollIntoView = (
    alignment: 'center' | 'end' | 'start' | 'nearest'
  ) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: alignment,
      inline: 'center',
    });
  };
  return { ref, scrollIntoView };
};
