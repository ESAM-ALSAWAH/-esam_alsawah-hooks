import { useState } from 'react';

/**
 *
 * @param options  -> timeout in ms
 * @returns
 */
export const useClipboard = (options?: { timeout: number }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const copy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), options?.timeout ?? 2000);
      })
      .catch((error) => console.error('Failed to copy text: ', error));
  };
  return { copy, copied };
};
