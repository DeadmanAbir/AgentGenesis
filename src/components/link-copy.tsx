'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Check, Copy } from 'lucide-react';

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => console.error('Could not copy text: ', err));
    }
  };

  return (
    <Button
      variant="outline"
      className="w-full relative overflow-hidden transition-all duration-300"
      onClick={handleShare}
      disabled={copied}
    >
      <span
        className={`flex items-center justify-center gap-2 transition-transform duration-300 ${copied ? 'transform -translate-y-10 opacity-0' : ''}`}
      >
        <Copy className="h-4 w-4" />
        Share Link
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-300 ${copied ? 'transform translate-y-0' : 'transform translate-y-10 opacity-0'}`}
      >
        <Check className="h-4 w-4 text-green-500" />
        Copied!
      </span>
    </Button>
  );
}
