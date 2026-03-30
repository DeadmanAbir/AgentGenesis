'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
export function SerpApiToolDemo() {
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
          src="/componentpics/serpApi Tool dark.png"
          loader={() => {
            return '/componentpics/serpApi Tool dark.png';
          }}
          width={800}
          height={500}
          alt="serpApi_flowchart"
        />
      ) : (
        <Image
          src="/componentpics/serpApi Tool light.png"
          loader={() => {
            return '/componentpics/serpApi Tool light.png';
          }}
          width={800}
          height={500}
          alt="serpApi_flowchart"
        />
      )}
    </>
  );
}
