import { cn } from '@/lib/utils';

interface ComponentWrapperProps {
  className?: string;
  children: any;
}
const ComponentWrapper = ({ className, children }: ComponentWrapperProps) => {
  return (
    <div
      className={cn(
        'not-prose max-w-screen relative flex flex-col items-center justify-center rounded-xl  p-0 md:border md:p-16',
        className,
      )}
    >
      <div />
      {children}
    </div>
  );
};

export default ComponentWrapper;
