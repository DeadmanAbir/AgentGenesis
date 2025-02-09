'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { docsConfig } from '@/config/doc';

export function MainNav() {
  const pathname = usePathname();
  const theme = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
      <nav className="flex items-center  gap-4 text-sm lg:gap-4  ">
        {docsConfig.mainNav &&
          docsConfig.mainNav.map((item) => (
            <Link
              key={item.title}
              href={item.href || '/'}
              className={cn(
                'transition-colors hover:text-foreground/80 hover:dark:bg-neutral-700 hover:bg-neutral-100  px-2 py-1 rounded-lg',
                pathname === item.href
                  ? 'text-foreground '
                  : 'text-foreground/60',
              )}
            >
              {item.title}
            </Link>
          ))}
        <a
          href="mailto:agentgenesisdev@gmail.com"
          className={cn(
            'transition-colors hover:text-foreground/80 hover:dark:bg-neutral-700 hover:bg-neutral-100 px-2 py-1 rounded-lg text-foreground/60',
          )}
        >
          Contact Us
        </a>
      </nav>
    </div>
  );
}
