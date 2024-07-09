import Image from 'next/image';

const ImageDisplay = () => {
  return (
    <div className="flex items-center justify-center mb-20 bg-neutral-700 p-[16px] rounded-2xl relative ">
      <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black  pointer-events-none"></div>
      <div className="rounded-2xl p-1 bg-black">
        <Image
          src="/dashboard1.webp"
          height={800}
          width={1440}
          alt="Dashboard"
          className="rounded-2xl p-2"
        />
      </div>
    </div>
  );
};

export default ImageDisplay;
