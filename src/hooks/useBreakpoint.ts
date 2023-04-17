import { useEffect, useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

/** 
 * @param options breakPoints= {
            xl:  1440,
            lg:  1024,
            md:  768,
            sm:  480,
            xs: 0
        }
 * @returns 
 */
export const useBreakpoint = (options?: {
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
}) => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<null | string>(
    null
  );
  const listener = () => {
    const breakpoint = {
      xl: options?.xl ?? 1440,
      lg: options?.lg ?? 1024,
      md: options?.md ?? 768,
      sm: options?.sm ?? 480,
      xs: 0,
    } as any;
    for (const key in breakpoint) {
      if (window.innerWidth >= breakpoint[key]) {
        setCurrentBreakpoint(key);
        break;
      }
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') listener();
  }, []);
  useWindowEvent('resize', listener);

  return currentBreakpoint;
};
