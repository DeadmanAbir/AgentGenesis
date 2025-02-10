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
    }, 3000);
  };

  return (
    <button
      className={`absolute right-3 top-3  p-2 ring-inset ring-2 transition-all duration-200  rounded-[0.3vw] bg-zinc-800 ${
        isCopied ? 'ring-green-500' : 'ring-zinc-500'
      } `}
      disabled={isCopied}
      onClick={copy}
    >
      <div className="relative w-4 h-4">
        <div
          className={`absolute inset-0 transform transition-all duration-300 ease-in-out ${
            isCopied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          <Copy className="text-white size-4" />
        </div>
        <div
          className={`absolute inset-0 transform transition-all duration-300 ease-in-out ${
            isCopied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }
          `}
        >
          <Check className="text-green-500 size-4" />
        </div>
      </div>
    </button>
  );
};
