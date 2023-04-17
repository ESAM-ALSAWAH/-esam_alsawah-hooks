import { useState, useRef, useEffect } from 'react';

export const useFullScreen = <T extends HTMLElement = HTMLImageElement>() => {
  const [fullScreen, SetFullScreen] = useState<boolean>(false);
  const ref = useRef<T>(null) as React.MutableRefObject<T | null>;

  const handleFullscreenChange = () => {
    SetFullScreen(!!document.fullscreenElement);
  };
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      document.addEventListener('fullscreenchange', handleFullscreenChange);
      return () => {
        document.removeEventListener(
          'fullscreenchange',
          handleFullscreenChange
        );
      };
    }
    return undefined;
  }, []);
  const toggle = () => {
    if (ref.current) {
      ref.current?.requestFullscreen().then(() => SetFullScreen(false));
    } else {
      if (document.fullscreenElement)
        document.exitFullscreen().then(() => SetFullScreen(false));
      else
        document.documentElement
          .requestFullscreen()
          .then(() => SetFullScreen(true));
    }
  };
  return { fullScreen, toggle, ref };
};
