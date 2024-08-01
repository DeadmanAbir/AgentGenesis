'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
export function WikipediaToolDemo() {
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
          src="/componentpics/wikipediaTool dark.png"
          width={800}
          height={500}
          alt="reranking_flowchart"
        />
      ) : (
        <Image
          src="/componentpics/wikipediaTool light.png"
          width={800}
          height={500}
          alt="reranking_flowchart"
        />
      )}
    </>
  );
}
