import {
  Blocks,
  CodeXml,
  FastForward,
  Handshake,
  InfoIcon,
  PenLine,
  ShieldPlus,
  Users,
} from 'lucide-react';

const GridSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 md:py-20 py-10">
      <div className="flex flex-col lg:border-r py-10 relative group lg:border-l lg:border-b dark:border-neutral-800">
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
        <div className="mb-4 relative z-10 px-10">
          <Blocks />
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200"></div>
          <span className="group-hover:translate-x-2 transition duration-200 inline-block">
            Seamless AI Integration
          </span>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 max-w-xs mx-auto relative z-10 px-10">
          Integrate AI seamlessly with our ready-to-use, copy-paste code
          snippets{' '}
        </p>
      </div>
      <div className="flex flex-col lg:border-r py-10 relative group lg:border-b dark:border-neutral-800">
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
        <div className="mb-4 relative z-10 px-10">
          <CodeXml />
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200"></div>
          <span className="group-hover:translate-x-2 transition duration-200 inline-block">
            Fully Open Source
          </span>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 max-w-xs mx-auto relative z-10 px-10">
          Enjoy open-source flexibility with AgentGenesis, licensed under MIT.{' '}
        </p>
      </div>
      <div className="flex flex-col lg:border-r py-10 relative group lg:border-b dark:border-neutral-800">
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
        <div className="mb-4 relative z-10 px-10">
          <Handshake />
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200"></div>
          <span className="group-hover:translate-x-2 transition duration-200 inline-block">
            Developer-Friendly Solutions
          </span>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 max-w-xs mx-auto relative z-10 px-10">
          Simplify development with our extensive library of reusable code.{' '}
        </p>
      </div>
      <div className="flex flex-col lg:border-r py-10 relative group lg:border-b dark:border-neutral-800">
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
        <div className="mb-4 relative z-10 px-10">
          <ShieldPlus />
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200"></div>
          <span className="group-hover:translate-x-2 transition duration-200 inline-block">
            Build on Top of Robust Foundations
          </span>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 max-w-xs mx-auto relative z-10 px-10">
          Start with solid, well-documented, and maintainable code bases.{' '}
        </p>
      </div>
      <div className="flex flex-col lg:border-r py-10 relative group lg:border-l dark:border-neutral-800">
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
        <div className="mb-4 relative z-10 px-10">
          <FastForward />
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200"></div>
          <span className="group-hover:translate-x-2 transition duration-200 inline-block">
            Accelerate AI Development
          </span>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 max-w-xs mx-auto relative z-10 px-10">
          Speed up projects with pre-built components for rapid innovation.
        </p>
      </div>
      <div className="flex flex-col lg:border-r py-10 relative group dark:border-neutral-800">
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
        <div className="mb-4 relative z-10 px-10">
          <InfoIcon />
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200"></div>
          <span className="group-hover:translate-x-2 transition duration-200 inline-block">
            Comprehensive Code Library
          </span>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 max-w-xs mx-auto relative z-10 px-10">
          Access a wide range of AI templates, including RAG flows and QnA bots.
        </p>
      </div>
      <div className="flex flex-col lg:border-r py-10 relative group dark:border-neutral-800">
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
        <div className="mb-4 relative z-10 px-10">
          <Users />
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200"></div>
          <span className="group-hover:translate-x-2 transition duration-200 inline-block">
            Community-Driven Improvements
          </span>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 max-w-xs mx-auto relative z-10 px-10">
          Benefit from ongoing enhancements by a dedicated developer community.
        </p>
      </div>
      <div className="flex flex-col lg:border-r py-10 relative group dark:border-neutral-800">
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
        <div className="mb-4 relative z-10 px-10">
          <PenLine />
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200"></div>
          <span className="group-hover:translate-x-2 transition duration-200 inline-block">
            Easy Customization
          </span>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 max-w-xs mx-auto relative z-10 px-10">
          Tailor reusable code to perfectly match your project's unique needs.{' '}
        </p>
      </div>
    </div>
  );
};

export default GridSection;
