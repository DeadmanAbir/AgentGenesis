'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      className=""
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <MoonIcon className={`w-4 h-4  `} />
      ) : (
        <SunIcon className="w-4 h-4 " />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
