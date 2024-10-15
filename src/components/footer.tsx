'use client';

import { siteConfig } from '@/config/site';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Footer = () => {
  const theme = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="relative">
      <div className="bg-gradient-to-r absolute inset-0 dark:from-zinc-900 from-zinc-100 dark:via-zinc-700 via-zinc-300 dark:to-zinc-900 to-zinc-100 h-[1.5px] rounded-full "></div>{' '}
      <div className="max-w-[1440px] mx-auto flex md:flex-row flex-col justify-between gap-7  items-start md:p-20 p-10">
        <div className="flex flex-col gap-1">
          <Link
            href="/"
            className="text-3xl flex items-center space-x-1 font-semibold"
          >
            {theme.theme === 'dark' ? (
              <Image src="/logo-white.png" alt="Logo" height={40} width={40} />
            ) : (
              <Image src="/logo-black.png" alt="Logo" height={40} width={40} />
            )}
            <span className=" font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <div>@{new Date().getFullYear()}</div>
          <div className="text-sm">
            Built by{' '}
            <Link
              href="https://github.com/DeadmanAbir"
              target="_blank"
              className="font-semibold hover:underline"
            >
              abir
            </Link>{' '}
            ,{' '}
            <Link
              href="https://github.com/faisal004"
              target="_blank"
              className="font-semibold hover:underline"
            >
              faisal
            </Link>{' '}
            and{' '}
            <Link
              href="https://github.com/Kirtikagoyal"
              target="_blank"
              className="font-semibold hover:underline"
            >
              kirtika
            </Link>
            .The source code is available on{' '}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              className="font-semibold hover:underline"
            >
              Github
            </Link>
            .
          </div>
        </div>
        <div className="grid grid-cols-1  gap-10 items-start ">
          <div className="flex md:flex-row flex-col  gap-4">
            <Link className="hover:underline" href="/components">
              Components
            </Link>
            <Link className="hover:underline" href="/blogs">
              Blog
            </Link>
          </div>
        </div>
      </div>
      <p className="w-full text-center text-5xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 ">
        AGENTGENESIS
      </p>
    </div>
  );
};

export default Footer;
