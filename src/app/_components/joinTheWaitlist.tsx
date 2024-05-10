'use client';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from '../../components/ui/hero-highlight';
import JoinTheWaitListForm from './joinTheWaitlistForm';
import { TypewriterEffectSmoothDemo } from './typeWriterEffect';

export function JoinTheWaitList() {
  return (
    <HeroHighlight className="flex flex-col gap-12">
      <div className="w-full">
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
          className="text-5xl px-4 md:text-4xl lg:text-8xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Coming Soon
        </motion.h1>
        <TypewriterEffectSmoothDemo />
      </div>

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
      <div className="flex items-center justify-center">
        <JoinTheWaitListForm />
      </div>
    </HeroHighlight>
  );
}
