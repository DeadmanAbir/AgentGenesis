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
            <div className="flex items-center">
              <div className="relative group inline-block overflow-hidden rounded-full p-[1px]">
                <div className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-3 py-1 text-xs font-medium text-gray-50 backdrop-blur-3xl">
                  <Github className="h-3 w-4 group-hover:scale-125 duration-200 transition-all" />
                  Star us on Github
                </div>
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
