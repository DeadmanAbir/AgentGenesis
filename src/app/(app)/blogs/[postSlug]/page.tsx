import Image from 'next/image';
import type { Metadata } from 'next';
import { getPostBySlug } from '@/lib/posts';
import { Post as PostType } from '@/types/posts';
import Container from '@/components/Container';
import Footer from '@/components/footer';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

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
    <>
      <div className="bg-background  text-foreground dark:text-white mt-12 ">
        <Container className="max-w-5xl w-full mt-12 mb-24  ">
          <article className="w-full  mx-auto pt-16">
            <div className="mb-4 flex items-center space-x-1 text-sm text-zinc-600 dark:text-zinc-400">
              <Link
                href={'/blogs'}
                className="overflow-hidden text-ellipsis whitespace-nowrap hover:dark:text-zinc-200 hover:text-zinc-800"
              >
                Blog
              </Link>
              <ChevronRightIcon className="h-4 w-4 hidden md:flex" />
              <div className="font-medium text-zinc-900 dark:text-zinc-100 hidden md:flex">
                {post.title}
              </div>
            </div>
            <h1 className="md:text-4xl text-xl font-bold mb-8">{post.title}</h1>
            <div className="w-full flex items-center gap-4 mb-8">
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
            <p className="italic text-zinc-500 dark:text-zinc-400 mb-6 ">
              Published on{' '}
              {new Date(post.publishedAt).toLocaleDateString('en-us', {
                weekday: 'long',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
            <div className="prose max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: post.content.html }}
                className="prose max-w-none prose-img:rounded-lg prose-img:w-full prose-a:text-blue-600 dark:prose-invert "
              />
            </div>
          </article>
        </Container>
      </div>
      <Footer />
    </>
  );
}
