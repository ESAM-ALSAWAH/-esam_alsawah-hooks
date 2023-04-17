import { useEffect, useState } from 'react';
export const useSessionStorage = <Tvalues extends string>({
  key,
  defaultValue,
}: {
  key: string;
  defaultValue?: string;
}): [
  value: string,
  setValue: React.Dispatch<React.SetStateAction<Tvalues>>,
  removeValue: () => void
] => {
  const [value, setValue] = useState<Tvalues>('' as Tvalues);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem(key))
        setValue(String(sessionStorage.getItem(key)) as Tvalues);
      else setValue((defaultValue as Tvalues) ?? ('' as Tvalues));
    }
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined' && value) {
      sessionStorage.setItem(key, value);
    }
  }, [value]);
  const removeValue = () => {
    sessionStorage.removeItem(key);
    setValue('' as Tvalues);
  };
  return [value, setValue, removeValue];
};
