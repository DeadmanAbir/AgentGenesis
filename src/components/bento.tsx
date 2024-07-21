import Image from 'next/image';

const BentoGrid = () => {
  return (
    <div className="flex flex-col items-center justify-center relative py-20 ">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="md:text-6xl text-4xl text-balance font-semibold text-center">
          Build , Iterate And Ship Fast
        </div>
        <p className="max-w-[500px] text-center ">
          Transforming Developer Experience in Generative AI with AgentGenesis
        </p>
      </div>
      {/* <div className="border-t-2 border-white overflow-hidden border-dashed  -top-[0px] w-[105%] " ></div> */}
      <div className="w-full relative mt-10">
        <div className="grid grid-cols-1 md:grid-cols-6 w-full    ">
          <div className=" col-span-1 md:col-span-4 h-[500px] md:p-10   ">
            <div className="md:text-4xl text-3xl font-semibold">
              Generate images with text
            </div>
            <div className="md:w-1/2 w-full my-3">
              Generate images from a text prompt, a video, or a video segment in
              bulk at the speed of light.
            </div>
            <div className="w-full h-full  ">
              <Image
                src="https://assets.lummi.ai/assets/QmXefBSTibki21yg492eRAxaFvFLc5uu139ghEnUBJRWxd?auto=format&w=1500"
                alt="iamge"
                height={200}
                width={800}
                className="overflow-hidden object-cover h-[300px] md:p-10 dark:bg-black bg-neutral-500"
              />
            </div>
          </div>
          <div className=" col-span-1 md:col-span-2 h-[500px] ">
            <div className="w-full h-full  ">
              <Image
                src="https://assets.lummi.ai/assets/QmRMtRgBJzA7wEwbHHasK1AwmVP5cxFhpn7yfVoziwQiYu?auto=format&w=1500"
                alt="iamge"
                height={600}
                width={800}
                className="overflow-hidden object-cover"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 h-[300px]">
            <div className="w-full h-full  ">
              <Image
                src="https://assets.lummi.ai/assets/QmerqxSqpqBcJSs17BVsQbhEARYGbwZL9VGj2x4QDGBJbm?auto=format&w=1500"
                alt="iamge"
                height={200}
                width={800}
                className="overflow-hidden object-cover  h-[300px]"
              />
            </div>
          </div>
          <div className=" col-span-1 md:col-span-3 h-[300px]">
            <div className="w-full h-full  ">
              <Image
                src="https://assets.lummi.ai/assets/QmXefBSTibki21yg492eRAxaFvFLc5uu139ghEnUBJRWxd?auto=format&w=1500"
                alt="iamge"
                height={200}
                width={800}
                className="overflow-hidden object-cover h-[300px] md:p-10 dark:bg-black bg-neutral-500"
              />
            </div>
          </div>
        </div>
        <div className="border-t-2 dark:border-white border-slate-500 overflow-hidden border-dashed absolute md:block hidden -left-4 -top-[2px] w-[103%] "></div>

        <div className="border-l-2 dark:border-white border-slate-500 overflow-hidden border-dashed absolute md:block hidden -right-0.5 -top-[17px] h-[105%] "></div>
        <div className="border-l-2 dark:border-white border-slate-500 overflow-hidden border-dashed absolute md:block hidden -left-0.5 -top-[17px] h-[105%] "></div>

        <div className="border-t-2 dark:border-white border-slate-500 overflow-hidden border-dashed absolute md:block hidden -left-4 top-[800px] w-[103%] "></div>
      </div>
    </div>
  );
};

export default BentoGrid;
