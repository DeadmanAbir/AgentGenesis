'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
export function UnstructuredLoaderDemo() {
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
          src="/componentpics/unstructured Loader dark.png'"
          loader={() => {
            return '/componentpics/unstructured Loader dark.png';
          }}
          width={800}
          height={500}
          alt="unstructured_loader_flowchart"
        />
      ) : (
        <Image
          src="/componentpics/unstructured Loader light.png"
          loader={() => {
            return '/componentpics/unstructured Loader light.png';
          }}
          width={800}
          height={500}
          alt="unstructured_loader_flowchart"
        />
      )}
    </>
  );
}
