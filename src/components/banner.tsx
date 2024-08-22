import Link from 'next/link';
const Banner = () => {
  return (
    // changed h-[800px] to md:h-[800px]
    <div className="relative h-[400px] md:h-[800px] overflow-hidden  flex items-center justify-center ">
      <div className="absolute inset-0 h-full w-full pointer-events-none z-0 hidden md:block">
        <div className="absolute inset-0 h-full w-full bg-white dark:bg-black pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent,white)]"></div>
        <div className="flex">
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path3" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path3"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>{' '}
        <div className="flex">
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>{' '}
        <div className="flex">
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>{' '}
        <div className="flex">
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>{' '}
        <div className="flex">
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path3" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path3"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <div className="flex flex-col items-start justify-center  w-60">
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 bg-white dark:bg-neutral-900 flex items-center justify-center rounded-full">
                <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-100 dark:text-neutral-800"
              >
                <path id="path3" d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  id="path3"
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:Rid9sv9uja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:Rid9sv9uja:"
                    gradientUnits="userSpaceOnUse"
                    x1="49.02459743316285"
                    y1="0"
                    x2="190.52869700535666"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#CCCCCC"></stop>
                    <stop offset="50%" stopColor="#999999"></stop>
                    <stop offset="100%" stopColor="#666666"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800 ml-3"
            >
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                id="path2"
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R4d9sv9uja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R4d9sv9uja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-107.4009298987221"
                  x2="2"
                  y2="8.032248451490887"
                >
                  <stop offset="0%" stopColor="#CCCCCC"></stop>
                  <stop offset="50%" stopColor="#999999"></stop>
                  <stop offset="100%" stopColor="#666666"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className=" relative items-center justify-center z-40   mb-20 rounded-lg md:p-20 p-5 bg-gradient-to-br from-slate-800  to-zinc-900  max-w-[1440px] w-full mx-4 ">
        <div className="absolute rounded-md inset-0 w-full h-full opacity-10  [mask-image:radial-gradient(#fff,transparent,75%)]  bg-[url('/noise.webp')]  bg-contain z-0"></div>

        <div className="z-40 flex flex-col items-center justify-center gap-3  ">
          <div className="text-center z-40 text-balance mx-auto text-3xl md:text-5xl font-semibold tracking-[-0.015em] text-white ">
            Contact
          </div>
          <span className="mt-1 md:text-xl text-md max-w-[26rem] text-center mx-auto z-40  text-neutral-200">
            Looking for specific use cases and support?
          </span>
          <Link
            href="mailto:agentgenesisdev@gmail.com"
            className="bg-neutral-900 relative z-40 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] "
          >
            Lets Chat
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
