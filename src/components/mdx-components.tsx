'use client';

import * as React from 'react';

import { useMDXComponent } from 'next-contentlayer/hooks';

import { useConfig } from '@/hooks/use-config';

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const [config] = useConfig();
  const Component = useMDXComponent(code, {
    style: config.style,
  });

  return (
    <div className="mdx">
      <Component />
    </div>
  );
}
