'use client';
import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { ModeToggle } from './mode-toggle';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';
import { Icons } from './icons';
import { Button } from './ui/button';
import useScrollTop from '@/hooks/use-scroll';
import { usePathname } from 'next/navigation';
import { Github } from 'lucide-react';
const SiteHeader = () => {
  const scrolled = useScrollTop();
  const pathname = usePathname();
  return (
    <header className=" w-full  fixed top-2 z-50 flex items-center justify-center  ">
      <div
        className={`container  relative  mx-3 flex h-12 max-w-[1440px]   items-center rounded-full transition duration-500 ${
          scrolled ? 'dark:bg-neutral-900 bg-white  ' : ' bg-transparent'
        }   `}
      >
        <div
          className={`absolute inset-0 h-full w-full max-w-[1440px]   bg-[#F9F9F9] dark:bg-neutral-800 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent,white)] rounded-full transition duration-500  ${
            scrolled ? 'opacity-100 border-[2px]' : 'opacity-0'
          }`}
        ></div>
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center  space-x-2 justify-end">
          {pathname.includes('docs') && (
            <div>
              <div className="inline-flex h-full animate-background-shine cursor-pointer  items-center justify-center rounded-full border hover:border-1 dark:hover:border-stone-400  border-gray-800 dark:bg-[linear-gradient(110deg,#A9A9A9,45%,#FFFFFF,55%,#A9A9A9)]  bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-xs  font-semibold text-gray-300 dark:text-gray-800 ">
                <Github className="h-3 w-4" />
                Star us on Github
              </div>
            </div>
          )}

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
