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
          loader={() => {
            return '/componentpics/wikipediaTool dark.png';
          }}
          width={800}
          height={500}
          alt="wikipedia_tool_flowchart"
        />
      ) : (
        <Image
          src="/componentpics/wikipediaTool light.png"
          loader={() => {
            return '/componentpics/wikipediaTool light.png';
          }}
          width={800}
          height={500}
          alt="wikipedia_tool_flowchart"
        />
      )}
    </>
  );
}
