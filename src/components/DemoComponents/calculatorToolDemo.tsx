'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
export function CalculatorToolDemo() {
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
          src="/componentpics/calculator Tool dark.png"
          loader={() => {
            return '/componentpics/calculator Tool dark.png';
          }}
          width={800}
          height={500}
          alt="calculator_tool_flowchart"
        />
      ) : (
        <Image
          src="/componentpics/calculator Tool light.png"
          loader={() => {
            return '/componentpics/calculator Tool light.png';
          }}
          width={800}
          height={500}
          alt="calculator_tool_flowchart"
        />
      )}
    </>
  );
}
