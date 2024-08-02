'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
export function ChatAnthropicDemo() {
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
          src="/componentpics/chatAnthrotopic dark.png"
          loader={() => {
            return '/componentpics/chatAnthrotopic dark.png';
          }}
          width={800}
          height={500}
          alt="chat_anthropic_flowchart"
        />
      ) : (
        <Image
          src="/componentpics/chatAnthrotopic light.png"
          loader={() => {
            return '/componentpics/chatAnthrotopic light.png';
          }}
          width={800}
          height={500}
          alt="chat_anthropic_flowchart"
        />
      )}
    </>
  );
}
