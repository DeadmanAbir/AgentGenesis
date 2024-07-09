'use client';
import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { ModeToggle } from './mode-toggle';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';
import { Icons } from './icons';
import { Button } from './ui/button';
import useScrollTop from '@/hooks/use-scroll';
const SiteHeader = () => {
  const scrolled = useScrollTop();
  return (
    <header className=" w-full  fixed top-2 z-40 ">
      <div
        className={`container   mx-auto flex h-14 max-w-[1440px] items-center rounded-full transition duration-500 ${scrolled ? 'dark:bg-neutral-900 bg-white  ' : ' bg-transparent'}   `}
      >
        <div
          className={`absolute inset-0 h-full w-full max-w-[1440px] mx-auto bg-[#F9F9F9] dark:bg-neutral-800 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent,white)] rounded-full transition duration-500  ${scrolled ? 'opacity-100 border-[2px]' : 'opacity-0'}`}
        ></div>
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center  space-x-2 justify-end">
          <nav className="flex items-center gap-3">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-9 px-0 bg- ">
                <Button variant="ghost">
                  <Icons.gitHub className="h-4 w-4 " />
                </Button>

                <span className="sr-only">GitHub</span>
              </div>
            </Link>

            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
