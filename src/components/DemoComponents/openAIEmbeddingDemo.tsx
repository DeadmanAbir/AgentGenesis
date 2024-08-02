'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
export function OpenAIEmbeddingDemo() {
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
          src="/componentpics/openAiEmbeddings dark.png"
          loader={() => {
            return '/componentpics/openAiEmbeddings dark.png';
          }}
          width={800}
          height={500}
          alt="openai_embeddings_flowchart"
        />
      ) : (
        <Image
          src="/componentpics/openAiEmbeddings light.png"
          loader={() => {
            return '/componentpics/openAiEmbeddings light.png';
          }}
          width={800}
          height={500}
          alt="openai_embeddings_flowchart"
        />
      )}
    </>
  );
}
