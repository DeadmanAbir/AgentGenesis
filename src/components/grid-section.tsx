const GridSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10">
      <div className="flex flex-col lg:border-r py-10 relative group lg:border-l lg:border-b dark:border-neutral-800">
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
        <div className="mb-4 relative z-10 px-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-terminal-2 "
          >
            <path d="M8 9l3 3l-3 3"></path>
            <path d="M13 15l3 0"></path>
            <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-ease-in-out "
          >
            <path d="M3 20c8 0 10 -16 18 -16"></path>
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-currency-dollar "
          >
            <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"></path>
            <path d="M12 3v3m0 12v3"></path>
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-cloud "
          >
            <path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878"></path>
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-route-alt-left "
          >
            <path d="M8 3h-5v5"></path>
            <path d="M16 3h5v5"></path>
            <path d="M3 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93"></path>
            <path d="M18 6.01v-.01"></path>
            <path d="M16 8.02v-.01"></path>
            <path d="M14 10v.01"></path>
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-help "
          >
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M12 17l0 .01"></path>
            <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"></path>
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-adjustments-bolt "
          >
            <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M6 4v4"></path>
            <path d="M6 12v8"></path>
            <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M12 4v10"></path>
            <path d="M19 16l-2 3h4l-2 3"></path>
            <path d="M12 18v2"></path>
            <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M18 4v1"></path>
            <path d="M18 9v3"></path>
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-heart "
          >
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
          </svg>
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
