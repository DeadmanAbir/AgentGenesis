import Image from 'next/image';
import type { Metadata } from 'next';
import { getPostBySlug } from '@/lib/posts';
import { Post as PostType } from '@/types/posts';
import Container from '@/components/Container';
import Footer from '@/components/footer';
import { ChevronRightIcon } from 'lucide-react';
import ListBlog from '@/components/list-blog';

interface PageParams {
  params: { postSlug: string };
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const post: PostType = await getPostBySlug(params.postSlug);
  return {
    title: `${post.title} - AgentGenesis`,
    description: post.seo?.description || `${post.title} on AgentGenesis`,
  };
}

export default async function PageComponent({ params }: PageParams) {
  const post: PostType = await getPostBySlug(params.postSlug);
  return (
    <div className="bg-background dark:bg-black text-foreground dark:text-white mt-12">
      <Container className="max-w-5xl xl:max-w-7xl xl:grid xl:grid-cols-[1fr_2fr] gap-12 mt-12 mb-24">
        <aside className="hidden xl:block xl:sticky xl:top-16">
          <ListBlog />
        </aside>
        <article className="w-full xl:order-1 mx-auto pt-16">
          <div className="mb-4 flex items-center space-x-1 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
              Blog
            </div>
            <ChevronRightIcon className="h-4 w-4" />
            <div className="font-medium text-zinc-900 dark:text-zinc-100">
              {post.title}
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
          <div className="max-w-3xl flex items-center gap-4 mb-8">
            <Image
              width={48}
              height={48}
              className="w-12 h-auto rounded-full"
              src={post.author.profilePicture}
              alt={post.author.name}
            />
            <div>
              <p className="text-lg font-bold mb-[.1rem] text-zinc-900 dark:text-zinc-100">
                {post.author.name}
              </p>
              <ul className="flex gap-3">
                <li className="text-sm">
                  <a
                    className="hover:underline hover:text-blue-500 dark:hover:text-blue-400"
                    href={post.author.socialMediaLinks.twitter}
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="italic text-zinc-500 dark:text-zinc-400 mb-6">
            Published on{' '}
            {new Date(post.publishedAt).toLocaleDateString('en-us', {
              weekday: 'long',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </p>
          <div
            className="pb-12 pt-8 prose max-w-3xl text-foreground dark:text-white"
            dangerouslySetInnerHTML={{
              __html: post.content.html,
            }}
          />
        </article>
      </Container>
      <Footer />
    </div>
  );
}
