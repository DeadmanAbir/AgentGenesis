import { allDocuments } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

import { ChevronRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Balancer from 'react-wrap-balancer';
import { Mdx } from '@/components/mdx-components';
import { getTableOfContents } from '@/lib/toc';
import { ScrollArea } from '@/components/scroll-area';
import { DashboardTableOfContents } from '@/components/toc';
import { Contribute } from '@/components/contribute';
import { DocPager } from '@/components/pager';
interface AgentsPageProps {
  params: {
    slug: string[];
  };
}
async function getDocFromParams({ params }: AgentsPageProps) {
  const slug = params.slug?.join('/') || '';
  const doc = allDocuments.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export async function generateStaticParams(): Promise<
  AgentsPageProps['params'][]
> {
  return allDocuments.map((doc) => ({
    slug: doc.slugAsParams.split('/'),
  }));
}

export async function Agents({ params }: AgentsPageProps) {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    notFound();
  }
  const toc = await getTableOfContents(doc.body.raw);
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px] mt-14 ">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Docs
          </div>
          <ChevronRightIcon className="h-4 w-4" />
          <div className="font-medium text-foreground">{doc.title}</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-lg text-muted-foreground">
              <Balancer>{doc.description}</Balancer>
            </p>
          )}
        </div>
        <div className="pb-12 pt-8 prose dark:prose-invert prose-p:my-0">
          <Mdx code={doc.body.code} />
        </div>
        <DocPager doc={doc} />
      </div>
      {doc.toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <ScrollArea className="pb-10">
              <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12 flex flex-col gap-4">
                <DashboardTableOfContents toc={toc} />
                <Contribute doc={doc} />
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  );
}

export default Agents;
