export const useColorScheme = () => {
  return typeof window !== 'undefined'
    ? window.matchMedia('(prefers-color-scheme:dark)').matches
      ? 'dark'
      : 'light'
    : null;
};
