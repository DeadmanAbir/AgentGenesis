'use client';

import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
export function LinkedInAgentDemo() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const handleReady = () => {
    setIsLoading(false);
  };
  if (!isMounted) {
    return null;
  }
  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl z-10">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-gray-500" />
        </div>
      )}
      <div className="rounded-md p-1 bg-black aspect-video w-full max-w-screen-2xl h-full relative">
        <div className="absolute inset-x-0 bottom-0 md:dark:h-20 md:h-8 h-0  w-full bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black pointer-events-none"></div>

        <ReactPlayer
          url="https://youtu.be/MbdRmzH_nqM?si=_V0HMEREXeIXVOVJ"
          width="100%"
          height="100%"
          style={{ borderRadius: '1rem' }}
          controls={false}
          muted={true}
          playing={true}
          onReady={handleReady}
        />
      </div>
    </>
  );
}
