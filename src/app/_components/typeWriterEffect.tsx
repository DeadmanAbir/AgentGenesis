'use client';
import { TypewriterEffectSmooth } from '../../components/ui/typewriter-effect';
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: 'Open',
    },
    {
      text: 'source',
    },
    {
      text: 'AI',
    },
    {
      text: 'agent',
    },
    {
      text: 'components.',
      className: 'text-[#985AF6] dark:text-[#985AF6]',
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center   ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
