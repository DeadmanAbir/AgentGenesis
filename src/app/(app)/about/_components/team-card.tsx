'use client';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from '@/components/animated-modal';
import { Card } from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
import React from 'react';
import Teammembercard from './team-membercard';

const TeamCard = () => {
  const [mounted, setMounted] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const images = [
    '/faisal004.jpg',
    'https://github.com/Kirtikagoyal.png',
    '/abir.jpg',
  ];

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (!mounted) {
    return null;
  }
  const handleBookCall = () => {
    const email = 'agentgenesisdev@gmail.com';
    const mailtoUrl = `mailto:${email}`;
    window.location.href = mailtoUrl;
  };
  return (
    <Card className="mt-5 py-10 px-5 w-full grid md:grid-cols-2 grid-cols-1 gap-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 to-black">
      <div className="left w-full flex flex-col justify-between gap-5 md:pr-10 md:pl-5">
        <div className="flex flex-col gap-2">
          <div className="mr-6 flex items-center space-x-1">
            <Image src="/logo-white.png" alt="Logo" height={40} width={40} />
            <span className=" font-bold sm:inline-block md:text-4xl text-3xl text-white">
              {siteConfig.name}
            </span>
          </div>
        </div>
        <div>
          <div className="text-3xl text-white tracking-tighter">
            Want to build cutting edge AI applications? Get in touch!
          </div>
          <p className="text-sm text-white mt-2 tracking-normal">
            Enjoy the benefits of personalized Tools, Models and Agents, crafted
            just for you.✨
          </p>
        </div>
        <button
          onClick={handleBookCall}
          className="group h-10 w-32 select-none rounded-full bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-600 px-3 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_rgba(0,0,0,0.8)_inset,0_0_0_1px_rgb(9_9_11)_inset,0_0.5px_0_1.5px_#71717a_inset] hover:bg-gradient-to-b hover:from-zinc-900 hover:via-zinc-900 hover:to-zinc-700 active:shadow-[0_3px_0_0_rgba(0,0,0)_inset]"
        >
          <span className="block group-active:[transform:translate3d(0,1px,0)]">
            Book a Call
          </span>
        </button>
      </div>

      <div className="grid grid-cols-3 w-full gap-4 md:px-20">
        <div className="bg-zinc-900 rounded-xl border-2 p-1"></div>

        <Modal>
          <ModalTrigger className="bg-zinc-900 rounded-xl border-2 p-1 relative group">
            <div className="absolute inset-0 h-full font-semibold text-3xl text-white bottom-0 w-full tr bg-neutral-700/30 z-20 group-hover:flex hidden transition-all duration-500 items-center justify-center">
              Click
            </div>
            <Image
              src={images[0]}
              alt="faisal004"
              height={300}
              width={400}
              className={`object-cover rounded-lg transition duration-500 ${
                activeIndex === 0 ? 'grayscale-0 scale-105' : 'grayscale '
              }`}
            />
          </ModalTrigger>
          <ModalBody>
            <ModalContent className="">
              <Teammembercard
                imageSrc={images[0]}
                name="Faisal Husain"
                role="Frontend Developer"
                description="I specialize in creating visually captivating and user-centric frontends using the latest technologies like Next.js and React."
                socials={{
                  github: 'https://github.com/faisal004',
                  linkedin: 'https://www.linkedin.com/in/faisal004/',
                  twitter: 'https://x.com/faisalh004',
                  website: 'https://www.faisalhusa.in/',
                }}
              />
            </ModalContent>
          </ModalBody>
        </Modal>

        <div className="bg-zinc-950 rounded-lg border-2"></div>
        <Modal>
          <ModalTrigger className="bg-zinc-900 rounded-xl border-2 p-1 group relative">
            <div className="absolute inset-0 h-full font-semibold text-3xl text-white bottom-0 w-full tr bg-neutral-700/30 z-20 group-hover:flex hidden transition-all duration-500 items-center justify-center">
              Click
            </div>
            <Image
              src={images[1]}
              alt="kirtika"
              height={300}
              width={400}
              className={`object-cover rounded-lg transition duration-500 ${
                activeIndex === 1 ? 'grayscale-0 scale-105' : 'grayscale'
              }`}
            />
          </ModalTrigger>
          <ModalBody>
            <ModalContent className="">
              <Teammembercard
                imageSrc={images[1]}
                name="Kirtika Goyal"
                role="Marketing Specialist"
                description="Dedicated to propelling SaaS startups forward through strategic marketing and investor engagement."
                socials={{
                  github: 'https://github.com/Kirtikagoyal',
                  linkedin: 'https://www.linkedin.com/in/kirtika-goyal/',
                  twitter: 'https://x.com/kirtikastwt',
                }}
              />
            </ModalContent>
          </ModalBody>
        </Modal>

        <div className="bg-zinc-950 rounded-lg border-2"></div>
        <Modal>
          <ModalTrigger className="bg-zinc-900 rounded-xl border-2 p-1 group relative">
            <div className="absolute inset-0 h-full font-semibold text-3xl text-white bottom-0 w-full tr bg-neutral-700/30 z-20 group-hover:flex hidden transition-all duration-500 items-center justify-center">
              Click
            </div>
            <Image
              src={images[2]}
              alt="abir"
              height={300}
              width={400}
              className={`object-cover rounded-lg transition duration-500 ${
                activeIndex === 2 ? 'grayscale-0 scale-105' : 'grayscale'
              }`}
            />
          </ModalTrigger>
          <ModalBody>
            <ModalContent className="">
              <Teammembercard
                imageSrc={images[2]}
                name="Abir Dutta"
                role="Full Stack Gen AI Developer"
                description="Proficient in building full-stack AI solutions with expertise in GEN AI, Next.js, TypeScript, and Node.js."
                socials={{
                  github: 'https://github.com/DeadmanAbir',
                  linkedin: 'https://www.linkedin.com/in/abir-dutta-408759223/',
                  twitter: 'https://x.com/ItsDutta99',
                  website: 'https://abir-dutta-portfolio.vercel.app/',
                }}
              />
            </ModalContent>
          </ModalBody>
        </Modal>
      </div>
    </Card>
  );
};

export default TeamCard;
