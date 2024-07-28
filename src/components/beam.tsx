'use client';
import { motion } from 'framer-motion';

export const Beam = () => {
  return (
    <svg
      width="156"
      height="63"
      viewBox="0 0 156 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-[70px] md:-left-[5px] -left-10 ml-60 mt-8"
    >
      <path
        d="M40 1h40M0 1h40m40 60h40m-1 0h40m-1 40h40M80 90V0m80 80V40"
        stroke="url(#grad1)"
        strokeWidth={1.5}
      />
      <defs>
        <motion.linearGradient
          variants={{
            initial: {
              x1: '40%',
              x2: '50%',
              y1: '160%',
              y2: '180%',
            },
            animate: {
              x1: '0%',
              x2: '10%',
              y1: '-40%',
              y2: '-20%',
            },
          }}
          animate="animate"
          initial="initial"
          transition={{
            duration: 1.8,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            repeatDelay: 2,
          }}
          id="grad1"
        >
          <stop stopColor="#18CCFC" stopOpacity="0" />
          <stop stopColor="#18CCFC" />
          <stop offset="0.325" stopColor="#6344F5" />
          <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
export const Beam2 = () => {
  return (
    <svg
      width="156"
      height="63"
      viewBox="0 0 156 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-[69px]  md:left-[600px] -left-60 ml-60 mt-8 rotate-180"
    >
      <path
        d="M40 1h40M0 1h40m40 60h40m-1 0h40m-1 40h40M80 90V0m80 80V40"
        stroke="url(#grad1)"
        strokeWidth={2}
      />
      <defs>
        <motion.linearGradient
          variants={{
            initial: {
              x1: '40%',
              x2: '50%',
              y1: '160%',
              y2: '180%',
            },
            animate: {
              x1: '0%',
              x2: '10%',
              y1: '-40%',
              y2: '-20%',
            },
          }}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2.8,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            repeatDelay: 1,
          }}
          id="grad1"
        >
          <stop stopColor="#18CCFC" stopOpacity="0" />
          <stop stopColor="#18CCFC" />
          <stop offset="0.325" stopColor="#6344F5" />
          <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
