import { query } from '@/lib/hashnode';
import { Post } from '@/types/posts';

export async function getPostBySlug(slug: string) {
  const {
    data: { publication },
  } = await query({
    query: `
      query($host: String!, $slug: String!) {
        publication(host: $host) {
          post(slug: $slug) {
            author {
              name
              profilePicture
              socialMediaLinks {
                twitter
              }
            }
            content {
              html
            }
            coverImage {
              url
            }
            id
            publishedAt
            title
          }
        }
      }
    `,
    variables: {
      host: process.env.NEXT_PUBLIC_HASHNODE_HOST,
      slug,
    },
  });

  const post = publication?.post as Post;

  return post;
}
