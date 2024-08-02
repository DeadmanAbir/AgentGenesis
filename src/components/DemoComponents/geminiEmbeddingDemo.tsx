'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
export function GeminiEmbeddingDemo() {
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
          src="/componentpics/geminiAi dark.png"
          loader={() => {
            return '/componentpics/geminiAi dark.png';
          }}
          width={800}
          height={500}
          alt="geminiai_embeddings_flowchart"
        />
      ) : (
        <Image
          src="/componentpics/geminiAi light.png"
          loader={() => {
            return '/componentpics/geminiAi light.png';
          }}
          width={800}
          height={500}
          alt="geminiai_embeddings_flowchart"
        />
      )}
    </>
  );
}
