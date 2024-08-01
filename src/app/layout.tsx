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
        url: '/logo-white.png',
        href: '/logo-white.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo-white.png',
        href: '/logo-white.png',
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
