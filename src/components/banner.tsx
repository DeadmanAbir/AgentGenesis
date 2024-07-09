import { Button } from './ui/button';

const Banner = () => {
  return (
    <div className="flex relative items-center justify-center  mb-20 rounded-lg p-10 bg-gradient-to-br from-slate-800 dark:from-neutral-900 to-gray-900">
      <div className="absolute rounded-md inset-0 w-full h-full opacity-10  [mask-image:radial-gradient(#fff,transparent,75%)]  bg-[url('/noise.webp')]  bg-contain "></div>

      <div className="z-20 flex flex-col items-center justify-center gap-3">
        <div className="text-center text-balance mx-auto text-3xl md:text-5xl font-semibold tracking-[-0.015em] text-white ">
          Ready to signup and join the waitlist?
        </div>
        <span className="mt-4 max-w-[26rem] text-center mx-auto  text-base/6 text-neutral-200">
          Get instant access to our state of the art project and join the
          waitlist.
        </span>
        <Button
          size="sm"
          className="bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] "
        >
          Join Waitlist
        </Button>
      </div>
    </div>
  );
};

export default Banner;
