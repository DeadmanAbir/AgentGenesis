'use client';

import { CheckCheck, Copy } from 'lucide-react';
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
      className="absolute right-3 top-3"
      disabled={isCopied}
      onClick={copy}
    >
      {isCopied ? (
        <CheckCheck className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4 text-white" />
      )}
    </button>
  );
};
