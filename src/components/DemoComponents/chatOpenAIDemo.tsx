'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
export function ChatOpenAIDemo() {
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
          src="/componentpics/chatOpenAI dark.png"
          loader={() => {
            return '/componentpics/chatOpenAI dark.png';
          }}
          width={800}
          height={500}
          alt="chat_openai_flowchart"
        />
      ) : (
        <Image
          src="/componentpics/chatOpenAI light.png"
          loader={() => {
            return '/componentpics/chatOpenAI light.png';
          }}
          width={800}
          height={500}
          alt="chat_openai_flowchart"
        />
      )}
    </>
  );
}
