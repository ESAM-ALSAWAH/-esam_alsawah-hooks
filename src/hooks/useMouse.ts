import { useState, useEffect, useRef } from 'react';

export const useMouse = <T extends HTMLElement = HTMLDivElement>(options?: {
  resetOnExit?: boolean;
}) => {
  const ref = useRef<T>(null) as React.MutableRefObject<T | null>;
  const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (ref.current) {
        ref.current.addEventListener('mousemove', onMouseMove);
        ref.current.addEventListener('mouseleave', onMouseLeave);
      } else {
        window.addEventListener('mousemove', onMouseMove);
      }
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mousemove', onMouseMove);
        ref.current.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, []);
  const onMouseLeave = () =>
    options?.resetOnExit && setCoordinates({ x: 0, y: 0 });
  const onMouseMove = (event: MouseEvent) => {
    setCoordinates({
      x: event.offsetX,
      y: event.offsetY,
    });
  };
  return { ref, coordinates, x: coordinates.x, y: coordinates.y };
};
