import { extractTextFromChildren } from '@/utils/extractText';
import { CopyButton } from './copy-button';

export const Pre = ({ children, ...props }: any) => {
  const textToCopy = extractTextFromChildren(children);

  return (
    <div className="relative">
      <CopyButton text={textToCopy} />
      <pre {...props}>{children}</pre>
    </div>
  );
};
