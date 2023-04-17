import { useCallback, useEffect, useState } from 'react';

export const useViewportSize = () => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    height: 0,
    width: 0,
  });
  const listener = useCallback(
    () =>
      setSize({
        width: window.innerWidth || 0,
        height: window.innerHeight || 0,
      }),
    []
  );
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', listener);
      listener();
    }
    return () => window.removeEventListener('resize', listener);
  }, []);
  return { ...size };
};
