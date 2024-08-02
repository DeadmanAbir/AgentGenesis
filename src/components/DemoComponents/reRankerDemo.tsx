'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
export function ReRankerDemo() {
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
          src="/componentpics/cohere dark.png"
          loader={() => {
            return '/componentpics/cohere dark.png';
          }}
          width={800}
          height={500}
          alt="reranking_flowchart"
        />
      ) : (
        <Image
          src="/componentpics/cohere light.png"
          loader={() => {
            return '/componentpics/cohere light.png';
          }}
          width={800}
          height={500}
          alt="reranking_flowchart"
        />
      )}
    </>
  );
}
