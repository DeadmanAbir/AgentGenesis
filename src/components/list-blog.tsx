// Blog.tsx
import Link from 'next/link';
import { query } from '@/lib/hashnode';
import { Post } from '@/types/posts';
import Container from '@/components/Container';

export default async function listblog() {
  const {
    data: { publication },
  } = await query({
    query: `
      query($host: String!) {
        publication(host: $host) {
          posts(first: 10) {
            edges {
              node {
                id
                publishedAt
                slug
                title
                author {
                  name
                }
              }
            }
          }
          title
        }
      }
    `,
    variables: {
      host: process.env.NEXT_PUBLIC_HASHNODE_HOST,
    },
  });

  const posts: Array<Post> = publication.posts.edges.map(
    ({ node }: { node: Post }) => node,
  );

  return (
    <Container className="max-w-sm pt-16">
      Blogs
      <ul className="space-y-4 mt-3">
        {posts.map((post) => (
          <li key={post.id}>
            <h2 className="text-xl font-bold">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-sm text-zinc-500">
              By {post.author.name} on{' '}
              {new Date(post.publishedAt).toLocaleDateString('en-us', {
                weekday: 'long',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
