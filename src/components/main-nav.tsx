'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export function MainNav() {
  const pathname = usePathname();
  const theme = useTheme();
  return (
    <div className="mr-4 hidden md:flex  ">
      <Link href="/" className="mr-6 flex items-center space-x-1">
        {theme.theme === 'dark' ? (
          <Image src="/logo-white.png" alt="Logo" height={20} width={20} />
        ) : (
          <Image src="/logo-black.png" alt="Logo" height={20} width={20} />
        )}
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6 group  hover:dark:bg-neutral-700 hover:bg-neutral-100  px-2 py-1 rounded-lg">
        <Link
          href="/docs"
          className={cn(
            'transition-colors group-hover:text-foreground/80',
            pathname === '/docs' ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          Docs
        </Link>
      </nav>
    </div>
  );
}
