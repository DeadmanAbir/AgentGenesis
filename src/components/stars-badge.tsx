'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import CountUp from './count-up';

const StarBadge = () => {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    const fetchStars = async () => {
      if (stars > 100) return;
      try {
        const response = await fetch(
          'https://api.github.com/repos/DeadmanAbir/AgentGenesis',
          {
            headers: process.env.NEXT_PUBLIC_GITHUB_OAUTH_TOKEN
              ? {
                  Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_OAUTH_TOKEN}`,
                  'Content-Type': 'application/json',
                }
              : {},
          },
        );

        if (response.ok) {
          const data = await response.json();
          setStars(data.stargazers_count || 100);
        }
      } catch (error) {
        console.error('Error fetching GitHub stars:', error);
      }
    };

    fetchStars();
  }, [stars, setStars]);

  return (
    <motion.a
      href="https://github.com/DeadmanAbir/AgentGenesis"
      target="_blank"
      rel="noopener noreferrer"
      className="relative mb-8 inline-flex overflow-hidden rounded-full p-[1px] ring-1 ring-inset ring-gray-100/10  hover:shadow-yellow-500 dark:hover:shadow-yellow-500 dark:shadow-zinc-500 shadow-zinc-300 cursor-pointer shadow-[0_5px_50px_rgba(8,_112,_184,_0.7)] group"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileTap={{ scale: 0.9 }}
    >
      <span className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-3 py-2 text-[12px] font-medium uppercase text-white backdrop-blur">
        <span className="flex items-center gap-2">
          We are Open-Source
          <span className="h-4 w-[1px] bg-gray-200/50"></span> Star On Github
          <span className="h-4 w-[1px] bg-gray-200/50"></span>{' '}
          <span className="flex items-center tabular-nums">
            <CountUp
              from={50}
              to={stars}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
            <Star
              fill="#dba809"
              className="ml-2 inline-block h-4 w-4 text-yellow-500 group-hover:animate-rotateStar"
            />
          </span>
        </span>
      </span>
    </motion.a>
  );
};

export default StarBadge;
