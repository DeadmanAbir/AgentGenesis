'use client';

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

export const CopyButton = ({ text }: any) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 10000);
  };

  return (
    <button
      className="absolute right-4 top-5"
      disabled={isCopied}
      onClick={copy}
    >
      {isCopied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4 text-white" />
      )}
    </button>
  );
};
