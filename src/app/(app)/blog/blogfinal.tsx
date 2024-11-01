import Link from 'next/link';
import Image from 'next/image';

import { Post } from '@/types/posts';

import Container from '@/components/Container';
import { fetchBlogPosts } from '@/utils/hashnode';

export default async function Blog() {
  const publication = await fetchBlogPosts();

  if (!publication) {
    throw new Error('Failed to fetch blog posts');
  }

  const posts: Array<Post> = publication.posts.edges.map(
    ({ node }: { node: Post }) => node,
  );
  return (
    <>
      <Container className="max-w-4xl">
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="grid sm:grid-cols-2 gap-8 mb-16">
              <Link href={`/blog/${post.slug}`}>
                <Image
                  width={600}
                  height={400}
                  className="rounded border border-zinc-200"
                  src={post.coverImage.url}
                  alt={post.title}
                />
              </Link>
              <div>
                <h2 className="text-2xl pb-5 border-b-2 mb-5">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-zinc-500">
                  {new Date(post.publishedAt).toLocaleDateString('en-us', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
