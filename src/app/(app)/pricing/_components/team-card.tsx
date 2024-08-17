'use client';
import { Card } from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TeamCard = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <Card className="mt-5 p-5 w-full grid md:grid-cols-2 grid-cols-1 gap-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 to-black  ">
      <div className="left w-full flex flex-col justify-between gap-2 md:pr-10 md:pl-5 ">
        <div className=" flex flex-col gap-2">
          <Link href="/" className="mr-6 flex items-center space-x-1">
            <Image src="/logo-white.png" alt="Logo" height={20} width={20} />

            <span className="hidden font-bold sm:inline-block text-base text-white">
              {siteConfig.name}
            </span>
          </Link>

          <div className="text-2xl text-white">
            Want a website that converts? Get in touch!
          </div>
          <p className="text-sm text-white">
            Experience the magic of a stunning website designed and developed
            just for you! ✨
          </p>
        </div>

        <button className="group h-10 w-32 select-none rounded-full bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-600 px-3 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_rgba(0,0,0,0.8)_inset,0_0_0_1px_rgb(9_9_11)_inset,0_0.5px_0_1.5px_#71717a_inset] hover:bg-gradient-to-b hover:from-zinc-900 hover:via-zinc-900 hover:to-zinc-700 active:shadow-[0_3px_0_0_rgba(0,0,0)_inset]">
          <span className="block group-active:[transform:translate3d(0,1px,0)]">
            Book a Call
          </span>
        </button>
      </div>
      <div className="grid grid-cols-3 w-full gap-4  md:px-20  ">
        <div className=" bg-zinc-900 rounded-xl border-2 p-1"></div>
        <div className=" bg-zinc-900 rounded-xl border-2 p-1">
          <Image
            src="https://github.com/faisal004.png"
            alt="team-image"
            height={300}
            width={400}
            className="object-cover rounded-lg grayscale "
          />
        </div>{' '}
        <div className=" bg-zinc-900 rounded-lg border-2"></div>{' '}
        <div className=" bg-zinc-900 rounded-xl border-2 p-1">
          <Image
            src="https://github.com/faisal004.png"
            alt="team-image"
            height={300}
            width={400}
            className="object-cover rounded-lg "
          />
        </div>{' '}
        <div className=" bg-zinc-900 rounded-lg border-2"></div>{' '}
        <div className=" bg-zinc-900 rounded-xl border-2 p-1">
          <Image
            src="https://github.com/faisal004.png"
            alt="team-image"
            height={300}
            width={400}
            className="object-cover rounded-lg "
          />
        </div>
      </div>
    </Card>
  );
};

export default TeamCard;
