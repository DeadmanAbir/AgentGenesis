import Image from 'next/image';
import { Button } from './ui/button';

const Features = () => {
  return (
    <div className="py-10 flex flex-col items-center justify-center relative ">
      <div className="md:text-7xl text-4xl text-center font-semibold mb-4 z-30">
        Features
      </div>
      <div className="text-lg mb-6 z-30 text-center">
        One platform, endless possibilities. See some of features.
      </div>
      <div className="flex md:flex-row flex-col  w-full gap-4 mt-3">
        <div className="  flex flex-col items-start justify-center p-3 gap-3 w-full">
          <div className="text-3xl tracking-wider font-semibold">
            LinkedIn Agent
          </div>
          <p className="tracking-wide leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            atque nesciunt dignissimos ducimus magni. A debitis magni ratione
            explicabo recusandae.
          </p>
          <Button>See</Button>
        </div>
        <div className="flex items-center justify-center w-full  rounded-xl">
          <Image
            src="/snippet.png"
            alt="Features2"
            className="w-full h-auto rounded-2xl border-4 p   shadow-xl shadow-neutral-300 dark:shadow-neutral-700 bg-center "
            height={800}
            width={800}
          />
        </div>
      </div>
      <div className="flex md:flex-row-reverse flex-col  w-full gap-4 mt-3">
        <div className="  flex flex-col items-start justify-center p-3 gap-3 w-full">
          <div className="text-3xl tracking-wider font-semibold">
            LinkedIn Agent
          </div>
          <p className="tracking-wide leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            atque nesciunt dignissimos ducimus magni. A debitis magni ratione
            explicabo recusandae.
          </p>
          <Button>See</Button>
        </div>
        <div className="flex items-center justify-center w-full  rounded-xl">
          <Image
            src="/snippet.png"
            alt="Features2"
            className="w-full h-auto rounded-2xl border-4 p   shadow-xl shadow-neutral-300 dark:shadow-neutral-700 bg-center "
            height={800}
            width={800}
          />
        </div>
      </div>{' '}
      <div className="flex md:flex-row flex-col  w-full gap-4 mt-3">
        <div className="  flex flex-col items-start justify-center p-3 gap-3 w-full">
          <div className="text-3xl tracking-wider font-semibold">
            LinkedIn Agent
          </div>
          <p className="tracking-wide leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            atque nesciunt dignissimos ducimus magni. A debitis magni ratione
            explicabo recusandae.
          </p>
          <Button>See</Button>
        </div>
        <div className="flex items-center justify-center w-full  rounded-xl">
          <Image
            src="/snippet.png"
            alt="Features2"
            className="w-full h-auto rounded-2xl border-4 p   shadow-xl shadow-neutral-300 dark:shadow-neutral-700 bg-center "
            height={800}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
