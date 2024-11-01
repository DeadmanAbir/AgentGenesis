import { query } from '@/lib/hashnode';

export const fetchBlogPosts = async () => {
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
                    coverImage {
                      url
                    }
                    id
                    publishedAt
                    slug
                    title
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

    return publication;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return null;
  }
};
