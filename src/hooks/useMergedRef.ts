export const useMergedRef = (...refs: any[]) => {
  return (node: any) => refs.forEach((ref) => (ref.current = node));
};
