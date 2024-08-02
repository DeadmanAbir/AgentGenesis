'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
export function LinkedinToolDemo() {
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
          src="/componentpics/linkedin tool dark.png"
          loader={() => {
            return '/componentpics/linkedin tool dark.png';
          }}
          width={800}
          height={500}
          alt="linkedin_tool_flowchart"
        />
      ) : (
        <Image
          src="/componentpics/linkedin tool light.png"
          loader={() => {
            return '/componentpics/linkedin tool light.png';
          }}
          width={800}
          height={500}
          alt="linkedin_tool_flowchart"
        />
      )}
    </>
  );
}
