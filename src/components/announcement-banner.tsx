'use client';
import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="md:flex hidden mx-auto animate-background-shine-2 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-700 to-zinc-900 bg-[length:200%_100%] text-white w-full z-50"
        >
          <div className="container mx-auto flex items-center justify-between px-5 py-1">
            <div></div>
            <p className="p-1">
              🔈 Big News! Agentgenesis is an Official 🔈{' '}
              <Link
                className="font-bold tracking-widest"
                href="https://www.ibm.com/watsonx/partners#AI+agents"
                target="_blank"
              >
                IBM Watsonx Partner!
              </Link>
            </p>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close banner"
            >
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBanner;
