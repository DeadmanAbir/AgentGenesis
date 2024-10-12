import { query } from '@/lib/hashnode';
import { Post } from '@/types/posts';

export let cachedBlogPosts: Array<{ title: string; slug: string }> = [];

export async function fetchBlogPosts(): Promise<
  Array<{ title: string; slug: string }>
> {
  const host = process.env.NEXT_PUBLIC_HASHNODE_HOST;
  if (!host) {
    console.error('HASHNODE_HOST is not defined.');
    return [];
  }

  try {
    const {
      data: { publication },
    } = await query({
      query: `
        query($host: String!) {
          publication(host: $host) {
            posts(first: 10) {
              edges {
                node {
                  slug
                  title
                }
              }
            }
          }
        }
      `,
      variables: {
        host,
      },
    });

    if (!publication || !publication.posts || !publication.posts.edges.length) {
      console.warn('No posts found in publication');
      return [];
    }

    const blogPosts: Array<{ title: string; slug: string }> =
      publication.posts.edges.map(({ node }: { node: Post }) => ({
        title: node.title,
        slug: `/blog/${node.slug}`,
      }));
    cachedBlogPosts = blogPosts;
    return blogPosts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }
  return cachedBlogPosts;
}
