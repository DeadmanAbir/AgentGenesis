'use client';
import React, { useState } from 'react';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import LinkedToolEffect from './linked-in-tool';

const testimonials = [
  {
    quote:
      'Explore our LinkedIn Agent, a powerful tool that efficiently summarizes data from public LinkedIn profiles.',
    name: 'LinkedIn Agent',
    Component: () => <div>LinkedIn Agent Component</div>,
    href: '/components/linkedinAgent',
  },
  {
    quote:
      'Our LinkedIn Tool is a powerful solution that efficiently provides data from public LinkedIn profiles when you provide a link.',
    name: 'LinkedIn Tool',
    Component: () => <LinkedToolEffect />,
    href: '/components/linkedinTool',
  },
  {
    quote:
      'Our Chat Models allow you to generate responses to text inputs from different LLMs. OpenAI, Gemini, and Anthropic are supported for now.',
    name: 'Chat Models',
    Component: () => <div>Chat Models Component</div>,
    href: '/components/chatOpenAi',
  },
];

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalAnimationDuration = 0.5; // Animation duration in seconds

  const handleNextClick = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const CurrentComponent = testimonials[currentIndex].Component;

  return (
    <div className="py-10 flex flex-col items-center justify-center relative">
      <motion.div
        initial={{ y: 20, opacity: 0, filter: 'blur(10px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ ease: 'easeInOut', duration: totalAnimationDuration }}
        className="md:text-7xl text-7xl text-center font-semibold my-4"
      >
        Features
      </motion.div>

      <div className="w-full grid grid-cols-2 p-5">
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: 20, opacity: 0, filter: 'blur(20px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -20, opacity: 0, filter: 'blur(20px)' }}
              transition={{
                ease: 'easeInOut',
                duration: totalAnimationDuration * 0.75,
              }}
              className="text-black dark:text-white w-full flex flex-col items-start space-y-4"
            >
              <span className="md:text-5xl text-3xl font-bold">
                {testimonials[currentIndex].name}
              </span>
              <span className="md:text-xl text-md">
                {testimonials[currentIndex].quote}
              </span>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href={testimonials[currentIndex].href}
                  className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 dark:text-neutral-100 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)] w-full md:w-[100%]"
                >
                  Check Out
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4 md:mt-10 mt-5">
            <motion.button
              onClick={handlePrevClick}
              className="size-12 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowBigLeft className="size-10 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </motion.button>
            <motion.button
              onClick={handleNextClick}
              className="size-12 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowBigRight className="size-10 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </motion.button>
          </div>
        </div>

        <div className="w-full flex justify-center items-center min-h-80  ">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: 20, opacity: 0, filter: 'blur(20px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -20, opacity: 0, filter: 'blur(20px)' }}
              transition={{
                ease: 'easeInOut',
                duration: totalAnimationDuration * 0.75,
              }}
              className="w-full flex items-center justify-center"
            >
              <CurrentComponent />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Features;
