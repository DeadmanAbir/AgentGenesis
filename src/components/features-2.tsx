'use client';
import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import LinkedToolEffect from './linked-in-tool';
import AnimatedChat from './feature-chats';
import LinkedAgentEffect from './linkedin-agent';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from './ui/card';

const testimonials = [
  {
    id: 'linkedin-agent',
    quote:
      'Explore our LinkedIn Agent, a powerful tool that efficiently summarizes data from public LinkedIn profiles.',
    name: 'LinkedIn Agent',
    Component: LinkedAgentEffect,
    href: '/components/linkedinAgent',
  },
  {
    id: 'linkedin-tool',
    quote:
      'Our LinkedIn Tool is a powerful solution that efficiently provides data from public LinkedIn profiles when you provide a link.',
    name: 'LinkedIn Tool',
    Component: LinkedToolEffect,
    href: '/components/linkedinTool',
  },
  {
    id: 'chat-models',
    quote:
      'Our Chat Models allow you to generate responses to text inputs from different LLMs. OpenAI, Gemini, and Anthropic are supported for now.',
    name: 'Chat Models',
    Component: AnimatedChat,
    href: '/components/chatOpenAi',
  },
];

const Features = () => {
  return (
    <div className="py-10 flex flex-col items-center justify-center relative">
      <motion.div
        initial={{ y: 20, opacity: 0, filter: 'blur(10px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
        className="md:text-7xl text-7xl text-center font-semibold my-4"
      >
        Features
      </motion.div>

      <Tabs defaultValue={testimonials[0].id} className="w-full my-5">
        <TabsList
          id="tabs"
          className="w-full flex items-center justify-start bg-transparent border-b overflow-x-auto overflow-y-hidden "
        >
          {testimonials.map((feature) => (
            <TabsTrigger
              key={feature.id}
              value={feature.id}
              className="relative w-full h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground text-xl"
            >
              {feature.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {testimonials.map(({ id, quote, name, href, Component }) => (
          <TabsContent key={id} value={id}>
            <Card className="w-full flex flex-col relative  md:p-10 p-5 mt-5 overflow-hidden rounded-none">
              <div
                className="absolute bottom-0 left-0 right-0 top-0 h-[700px]
    bg-[linear-gradient(to_right,#d4d4d8_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d8_1px,transparent_1px)]
    dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)]
    bg-[size:40px_40px]
    [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
              ></div>

              <div>
                <motion.div
                  initial={{ y: 20, opacity: 0, filter: 'blur(20px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  transition={{ ease: 'easeInOut', duration: 0.4 }}
                  className="text-black dark:text-white w-full flex flex-col items-center space-y-4 pb-10"
                >
                  <span className="md:text-5xl text-3xl font-bold">{name}</span>
                  <span className="md:text-md text-md  md:w-11/12 text-center text-black dark:text-white">
                    {quote}
                  </span>
                </motion.div>
              </div>

              <div className="w-full flex justify-center items-center min-h-80">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={id}
                    initial={{ y: 20, opacity: 0, filter: 'blur(20px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -20, opacity: 0, filter: 'blur(20px)' }}
                    transition={{ ease: 'easeInOut', duration: 0.4 }}
                    className="w-full flex items-center justify-center"
                  >
                    <Component />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex items-center justify-center w-full mt-8">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href={href}
                    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 dark:text-neutral-100 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)] w-full md:w-[100%]"
                  >
                    Check Out
                  </Link>
                </motion.div>
              </div>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Features;
