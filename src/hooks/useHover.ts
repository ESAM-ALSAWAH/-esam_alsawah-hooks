import { useState, useRef, useEffect, useCallback } from 'react';

export const useHover = <T extends HTMLElement = HTMLDivElement>() => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<T>(null) as React.MutableRefObject<T | null>;
  const onMouseEnter = useCallback(() => setHovered(true), []);
  const onMouseLeave = useCallback(() => setHovered(false), []);

  useEffect(() => {
    if (ref.current && typeof window !== 'undefined') {
      ref.current.addEventListener('mouseenter', onMouseEnter);
      ref.current.addEventListener('mouseleave', onMouseLeave);

      return () => {
        ref.current?.removeEventListener('mouseenter', onMouseEnter);
        ref.current?.removeEventListener('mouseleave', onMouseLeave);
      };
    }
    return undefined;
  }, []);

  return { ref, hovered };
};
