import { useState, useEffect } from 'react';
export const useColorScheme = () => {
  const [colorSchema, setColorSchema] = useState<'dark' | 'light' | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.matchMedia('(prefers-color-scheme:dark)').matches)
        setColorSchema('dark');
      else setColorSchema('light');
    }
  }, []);
  return colorSchema;
};
