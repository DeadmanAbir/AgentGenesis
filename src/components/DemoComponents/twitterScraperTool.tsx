'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
export function TwitterScraperToolDemo() {
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
          src="/componentpics/twitterScraperTool dark.png"
          loader={() => {
            return '/componentpics/twitterScraperTool dark.png';
          }}
          width={800}
          height={500}
          alt="twitterScraperTool_flowchart"
        />
      ) : (
        <Image
          src="/componentpics/twitterScraperTool light.png"
          loader={() => {
            return '/componentpics/twitterScraperTool light.png';
          }}
          width={800}
          height={500}
          alt="twitterScraperTool_flowchart"
        />
      )}
    </>
  );
}
