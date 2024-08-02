'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
export function SearchApiToolDemo() {
  const theme = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      {theme.theme === 'dark' ? (
        <Image
          src="/componentpics/searchApi Tool dark.png"
          loader={() => {
            return '/componentpics/searchApi Tool dark.png';
          }}
          width={800}
          height={500}
          alt="searchApi_flowchart"
        />
      ) : (
        <Image
          src="/componentpics/searchApi Tool light.png"
          loader={() => {
            return '/componentpics/searchApi Tool light.png';
          }}
          width={800}
          height={500}
          alt="searchApi_flowchart"
        />
      )}
    </>
  );
}
