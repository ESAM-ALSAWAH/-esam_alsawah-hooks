import { useEffect, useState } from 'react';
export const useLocalStorage = <Tvalues extends string>({
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
      if (localStorage.getItem(key))
        setValue(String(localStorage.getItem(key)) as Tvalues);
      else setValue((defaultValue as Tvalues) ?? ('' as Tvalues));
    }
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined' && value) {
      localStorage.setItem(key, value);
    }
  }, [value]);
  const removeValue = () => {
    localStorage.removeItem(key);
    setValue('' as Tvalues);
  };
  return [value, setValue, removeValue];
};
