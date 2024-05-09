'use client';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from '../../components/ui/hero-highlight';
import InputSpotlightBorder from '@/components/customUI/input';
import ButtonRotatingBackgroundGradient from '@/components/customUI/button';

export function JoinTheWaitList() {
  return (
    <HeroHighlight className="">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Joint the
        <Highlight className="text-black dark:text-white">Waitlist.</Highlight>
      </motion.h1>
      <div className="text-white flex md:flex-row flex-col items-center justify-center mt-20 md:w-[600px] gap-5 px-10   ">
        <InputSpotlightBorder />
        <ButtonRotatingBackgroundGradient />
      </div>
    </HeroHighlight>
  );
}
