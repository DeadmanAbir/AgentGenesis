'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Link from 'next/link';

const GRID_SIZE = 10;
const COUNT = GRID_SIZE * GRID_SIZE;
const testimonials = [
  {
    quote:
      'Explore our LinkedIn Agent, a powerful tool that efficiently summarizes data from public LinkedIn profiles.',
    name: 'LinkedIn Agent',
    src: '/agent.png',
    href: '/components/linkedinAgent',
  },
  {
    quote:
      'Our LinkedIn Tool is a powerful solution that efficiently provides data from public LinkedIn profiles when you provide a link.',
    name: 'LinkedIn Tool',
    src: '/tool.png',
    href: '/components/linkedinTool',
  },
  {
    quote:
      'Our Chat Models allows you to generate responses to text inputs from different LLMs. OpenAI, Gemini and Anthropic are supported for now.',
    name: 'Chat Models',

    src: '/models.png',
    href: '/components/chatOpenAi',
  },
];

const Features = () => {
  const [flipped, setFlipped] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const getManhattanDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
  ) => {
    return Math.abs(x2 - x1) + Math.abs(y2 - y1);
  };

  const maxDistance = getManhattanDistance(0, 0, GRID_SIZE - 1, GRID_SIZE - 1);
  const totalAnimationDuration = maxDistance * 0.1 + 0.5;

  const getRandomGridPosition = () => ({
    x: Math.floor(Math.random() * GRID_SIZE),
    y: Math.floor(Math.random() * GRID_SIZE),
  });

  const triggerFlip = (randomPosition?: { x: number; y: number }) => {
    const position = randomPosition || getRandomGridPosition();

    setClickPosition(position);
    setFlipped((prev) => !prev);
    setIsAnimating(true);

    setTimeout(() => {
      if (!flipped) {
        setCurrentIndex((pre) => (pre + 2) % testimonials.length);
      } else {
        setNextIndex((pre) => (pre + 2) % testimonials.length);
      }
      setIsAnimating(false);
    }, totalAnimationDuration * 1000);
  };

  const handleNextClick = () => {
    if (isAnimating) return;
    triggerFlip();
  };

  const handlePrevClick = () => {
    if (isAnimating) return;
    triggerFlip();
  };

  return (
    <div className="py-10 flex flex-col items-center justify-center relative ">
      <div className="md:text-7xl text-7xl text-center font-semibold my-4 z-30">
        Features
      </div>

      <div
        className=" w-full grid md:grid-cols-2 grid-cols-1  p-5 "
        style={
          {
            '--current-image': `url(${testimonials[currentIndex].src})`,
            '--next-image': `url(${testimonials[nextIndex].src})`,
          } as React.CSSProperties
        }
      >
        <div className="flex flex-col items-center justify-center md:px-10 max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div className=" text-white w-full  ">
              {flipped ? (
                <motion.div
                  key="next"
                  initial={{ y: 20, opacity: 0, filter: 'blur(20px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -20, opacity: 0, filter: 'blur(20px)' }}
                  transition={{
                    ease: 'easeInOut',
                    duration: totalAnimationDuration * 0.75,
                  }}
                  className="flex flex-col items-start space-y-4"
                >
                  <div className="flex flex-col items-start">
                    <span className="md:text-5xl text-3xl font-bold">
                      {testimonials[nextIndex].name}
                    </span>
                  </div>
                  <span className="md:text-xl text-md">
                    {testimonials[nextIndex].quote}
                  </span>
                  <Link
                    href={testimonials[nextIndex].href}
                    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 dark:text-neutral-100 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)] w-full md:w-[30%]"
                  >
                    Check Out
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key="current"
                  initial={{ y: 20, opacity: 0, filter: 'blur(20px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -20, opacity: 0, filter: 'blur(20px)' }}
                  transition={{
                    ease: 'easeInOut',
                    duration: totalAnimationDuration * 0.75,
                  }}
                  className="flex flex-col items-start space-y-4"
                >
                  <div className="flex flex-col items-start">
                    <span className="md:text-5xl text-3xl font-bold">
                      {testimonials[currentIndex].name}
                    </span>
                  </div>
                  <span className="md:text-xl text-md">
                    {testimonials[currentIndex].quote}
                  </span>
                  <Link
                    href={testimonials[currentIndex].href}
                    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 dark:text-neutral-100 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)] w-full md:w-[30%]"
                  >
                    Check Out
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-4 md:mt-10 mt-5 w-full z-50 ">
            <button
              onClick={handlePrevClick}
              disabled={isAnimating}
              className="size-12 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button disabled:opacity-50"
            >
              <ArrowBigLeft className=" size-10 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNextClick}
              disabled={isAnimating}
              className="size-12 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button disabled:opacity-50"
            >
              <ArrowBigRight className="size-10 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <div
          className={`grid grid-cols-10 border-2 shadow-lg shadow-zinc-400 border-zinc-800 md:size-[500px] size-[300px] mx-auto mt-10 md:mt-0  ${
            isAnimating ? 'pointer-events-none' : ''
          } `}
        >
          {Array.from({ length: COUNT }, (_, index) => {
            const x = index % GRID_SIZE;
            const y = Math.floor(index / GRID_SIZE);

            return (
              <motion.div
                key={index}
                className={`relative w-full h-full  cursor-pointer [transform-style:preserve-3d] transition-transform duration-500`}
                initial="initial"
                animate={{
                  rotateX: flipped ? 180 : 0,
                  transition: {
                    rotateX: {
                      duration: 0.1,
                      delay:
                        getManhattanDistance(
                          clickPosition.x,
                          clickPosition.y,
                          x,
                          y,
                        ) * 0.1,
                    },
                  },
                }}
                style={
                  {
                    '--x': x,
                    '--y': y,
                    '--grid-size': GRID_SIZE,
                  } as React.CSSProperties
                }
              >
                <div
                  className="absolute w-full h-full  bg-blue-500 text-center flex items-center justify-center text-xs md:text-base [backface-visibility:hidden] [transform:rotateY(0deg)]"
                  style={{
                    backgroundImage: 'var(--current-image)',
                    backgroundPosition: `calc(var(--x, 0) * -100%) calc(var(--y, 0) * -100%)`,
                    backgroundSize: `calc(var(--grid-size, 10) * 100%)`,
                  }}
                />
                <div
                  className="absolute w-full h-full bg-red-500 text-center flex items-center justify-center text-xs md:text-base [backface-visibility:hidden] [transform:rotateX(180deg)]"
                  style={{
                    backgroundImage: 'var(--next-image)',
                    backgroundPosition: `calc(var(--x, 0) * -100%) calc(var(--y, 0) * -100%)`,
                    backgroundSize: `calc(var(--grid-size, 10) * 100%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
