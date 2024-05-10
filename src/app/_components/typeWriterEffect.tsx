'use client';
import { TypewriterEffectSmooth } from '../../components/ui/typewriter-effect';
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: 'Build',
    },
    {
      text: 'awesome',
    },
    {
      text: 'apps',
    },
    {
      text: 'with',
    },
    {
      text: 'Aceternity.',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center   ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
