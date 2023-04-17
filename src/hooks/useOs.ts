const getSystem = () => {
  const isWindows = navigator?.platform.indexOf('Win') !== -1;
  const isMac = navigator?.platform.indexOf('Mac') !== -1;
  const isMobile = /iPhone|iPad|iPod|Android|Mobile/;

  let system: string | null = null;

  if (isWindows) system = 'windows';
  else if (isMac) system = 'Mac';
  else if (isMobile) {
    const match = navigator.userAgent.match(isMobile);
    system = match ? match[0] : 'Unknown';
  } else system = 'Linux';
  return system;
};

export const useOs = () => (typeof window !== 'undefined' ? getSystem() : null);
