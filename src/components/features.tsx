import Image from 'next/image';
import Link from 'next/link';

const Features = () => {
  return (
    <div className="py-10 flex flex-col items-center justify-center relative ">
      <div className="md:text-7xl text-5xl text-center font-semibold mb-4 z-30">
        Features
      </div>
      <div className="text-lg mb-6 z-30 text-center">
        One platform, endless possibilities. See some of features.
      </div>
      <div className="flex md:flex-row flex-col  w-full gap-4 my-7">
        <div className="  flex flex-col md:items-start  items-center justify-center p-3 gap-3 w-full">
          <div className="text-3xl tracking-wider font-semibold ">
            LinkedIn Agent
          </div>
          <div className="tracking-wide leading-7 w-full text-center md:text-left ">
            Explore our LinkedIn Agent, a powerful tool that efficiently
            summarizes data from public LinkedIn profiles.
          </div>
          <Link
            href="/components/linkedinAgent"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 dark:text-neutral-100 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)] w-full md:w-[30%]"
          >
            Check Out
          </Link>
        </div>
        <div className="flex items-center justify-center w-full  rounded-xl">
          <Image
            src="/agent.png"
            alt="Features2"
            className="w-full h-auto rounded-2xl border-4 p aspect-video object-cover   shadow-xl shadow-neutral-700 bg-center "
            height={800}
            width={800}
          />
        </div>
      </div>
      <div className="flex md:flex-row-reverse flex-col  w-full gap-4 my-7">
        <div className="  flex flex-col md:items-start  items-center justify-center p-3 gap-3 w-full">
          <div className="text-3xl tracking-wider font-semibold ">
            LinkedIn Tool
          </div>
          <div className="tracking-wide leading-7 w-full text-center md:text-left ">
            Our LinkedIn Tool is a powerful solution that efficiently provides
            data from public LinkedIn profiles when you provide a link.
          </div>
          <Link
            href="/components/linkedinTool"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 dark:text-neutral-100 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)] w-full md:w-[30%]"
          >
            Check Out
          </Link>
        </div>
        <div className="flex items-center justify-center w-full  rounded-xl">
          <Image
            src="/tool.png"
            alt="Features2"
            className="w-full h-auto rounded-2xl border-4 p aspect-video object-cover    shadow-xl shadow-neutral-700 bg-center "
            height={800}
            width={800}
          />
        </div>
      </div>{' '}
      <div className="flex md:flex-row flex-col  w-full gap-4 my-7">
        <div className="  flex flex-col md:items-start  items-center justify-center p-3 gap-3 w-full">
          <div className="text-3xl tracking-wider font-semibold ">
            Chat Models
          </div>
          <div className="tracking-wide leading-7 w-full text-center md:text-left ">
            Our Chat Models allows you to generate responses to text inputs from
            different LLMs. OpenAI, Gemini and Anthropic are supported for now.
          </div>
          <Link
            href="/components/chatOpenAi"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 dark:text-neutral-100 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)] w-full md:w-[30%]"
          >
            Check Out
          </Link>
        </div>
        <div className="flex items-center justify-center w-full  rounded-xl">
          <Image
            src="/models.png"
            alt="Features2"
            className="w-full h-auto rounded-2xl border-4 p   aspect-video object-cover   shadow-xl shadow-neutral-700 bg-center "
            height={800}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
