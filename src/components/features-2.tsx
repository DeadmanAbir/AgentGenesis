'use client';
import React, { useState } from 'react';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Link from 'next/link';

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
    Component: () => <div>LinkedIn Tool Component</div>,
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
      <div className="md:text-7xl text-7xl text-center font-semibold my-4">
        Features
      </div>

      <div className="w-full grid grid-cols-2 p-5">
        <div>
          <div className="text-black dark:text-white w-full flex flex-col items-start space-y-4">
            <span className="md:text-5xl text-3xl font-bold">
              {testimonials[currentIndex].name}
            </span>
            <span className="md:text-xl text-md">
              {testimonials[currentIndex].quote}
            </span>
            <Link
              href={testimonials[currentIndex].href}
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 dark:text-neutral-100 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)] w-full md:w-[30%]"
            >
              Check Out
            </Link>
          </div>
          <div className="flex gap-4 md:mt-10 mt-5">
            <button
              onClick={handlePrevClick}
              className="size-12 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <ArrowBigLeft className="size-10 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNextClick}
              className="size-12 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <ArrowBigRight className="size-10 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <div className="w-full flex justify-center items-center my-10">
          <CurrentComponent />
        </div>
      </div>
    </div>
  );
};

export default Features;
