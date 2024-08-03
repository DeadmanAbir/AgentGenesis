import VideoPlayer from './react-player';

const VideoDisplay = () => {
  return (
    <div className="flex items-center justify-center mb-20 bg-neutral-700 md:p-[16px] p-1 rounded-2xl relative  ">
      <div className="absolute inset-x-0 bottom-0 md:h-40 h-0  w-full bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black pointer-events-none"></div>
      <VideoPlayer />
    </div>
  );
};

export default VideoDisplay;
