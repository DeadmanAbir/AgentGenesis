'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
export function WeaviateDbDemo() {
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
          src="/componentpics/Weaviate DB dark.png"
          loader={() => {
            return '/componentpics/Weaviate DB dark.png';
          }}
          width={800}
          height={500}
          alt="weaviate_db_flowchart"
        />
      ) : (
        <Image
          src="/componentpics/Weaviate DB light.png"
          loader={() => {
            return '/componentpics/Weaviate DB light.png';
          }}
          width={800}
          height={500}
          alt="weaviate_db_flowchart"
        />
      )}
    </>
  );
}
