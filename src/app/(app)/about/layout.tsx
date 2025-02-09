import { siteUrl } from '@/utils/utils';
import { Metadata } from 'next';
import React from 'react';

interface AboutLayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: ' About | AgentGenesis',
  description: 'Handy AI Components for Developers',

  openGraph: {
    title: 'About | AgentGenesis',
    description: 'Handy AI Components for Developers',
    url: 'https://agentgenesis.dev/',
    images: [
      {
        url: `${siteUrl}api/og?title=About`,
        width: 1200,
        height: 639,
        alt: 'AgentGenesis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ' About | AgentGenesis',
    description: 'Handy AI Components for Developers',
    images: [
      {
        url: `${siteUrl}api/og?title=About`,
        width: 1200,
        height: 639,
        alt: 'AgentGenesis',
      },
    ],
  },
};
export default function DocsLayout({ children }: AboutLayoutProps) {
  return <>{children}</>;
}
