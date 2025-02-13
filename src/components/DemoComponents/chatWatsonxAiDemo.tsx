'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
export function ChatWatsonxDemo() {
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
          src="/componentpics/chatWatsonxAi dark.png"
          loader={() => {
            return '/componentpics/chatWatsonxAi dark.png';
          }}
          width={800}
          height={500}
          alt="chat_watsonx_flowchart"
        />
      ) : (
        <Image
          src="/componentpics/chatWatsonxAi light.png"
          loader={() => {
            return '/componentpics/chatWatsonxAi light.png';
          }}
          width={800}
          height={500}
          alt="chat_watsonx_flowchart"
        />
      )}
    </>
  );
}
