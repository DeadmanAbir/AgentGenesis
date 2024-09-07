import { siteUrl } from '@/utils/utils';
import { Metadata } from 'next';
import React from 'react';

interface PricingLayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: ' Pricing | AgentGenesis',
  description: 'Handy AI Components for Developers',

  openGraph: {
    title: 'Pricing | AgentGenesis',
    description: 'Handy AI Components for Developers',
    url: 'https://agentgenesis.dev/',
    images: [
      {
        url: `${siteUrl}api/og?title=Pricing`,
        width: 1200,
        height: 639,
        alt: 'AgentGenesis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ' Pricing | AgentGenesis',
    description: 'Handy AI Components for Developers',
    images: [
      {
        url: `${siteUrl}api/og?title=Pricing`,
        width: 1200,
        height: 639,
        alt: 'AgentGenesis',
      },
    ],
  },
};
export default function DocsLayout({ children }: PricingLayoutProps) {
  return <>{children}</>;
}
