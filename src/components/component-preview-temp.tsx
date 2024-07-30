import { cn } from '@/lib/utils';

export function ComponentPreviewTemp({ children }: any) {
  return (
    <div
      className={cn(
        'p-3 border-2 rounded-xl mt-5 dark:bg-[radial-gradient(#808080_1px,transparent_1px)] bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:30px_30px]   ',
      )}
    >
      <div>{children}</div>
    </div>
  );
}
