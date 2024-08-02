import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
  title: 'AgentGenesis',
  description:
    'Copy paste the most trending AI agents and use them in your project without having to write everything from scratch.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/logo-black.png',
        href: '/logo-black.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo-white.png',
        href: '/logo-white.png',
      },
    ],
  },
  openGraph: {
    title: 'AgentGenesis',
    description:
      'Copy paste the most trending AI agents and use them in your project without having to write everything from scratch.',
    url: 'https://agentgenesis-beta.vercel.app/',
    images: [
      {
        url: 'https://agentgenesis-beta.vercel.app/api/og?title=Welcome%20To%20AgentGenesis',
        width: 1200,
        height: 639,
        alt: 'AgentGenesis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgentGenesis',
    description:
      'Copy paste the most trending AI agents and use them in your project without having to write everything from scratch.',
    images: [
      {
        url: 'https://agentgenesis-beta.vercel.app/api/og?title=Welcome%20To%20AgentGenesis',
        width: 1200,
        height: 639,
        alt: 'AgentGenesis',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
