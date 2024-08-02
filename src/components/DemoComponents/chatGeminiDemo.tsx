'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
export function ChatGeminiDemo() {
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
          src="/componentpics/chatGemini dark.png"
          loader={() => {
            return '/componentpics/chatGemini dark.png';
          }}
          width={800}
          height={500}
          alt="chat_gemini_flowchart"
        />
      ) : (
        <Image
          src="/componentpics/chatGemini light.png"
          loader={() => {
            return '/componentpics/chatGemini light.png';
          }}
          width={800}
          height={500}
          alt="chat_gemini_flowchart"
        />
      )}
    </>
  );
}
