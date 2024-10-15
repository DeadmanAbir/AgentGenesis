import { query } from '@/lib/hashnode';
import { Page } from '@/types/pages';

export async function getPageBySlug(slug: string) {
  const {
    data: { publication },
  } = await query({
    query: `
      query($host: String!, $slug: String!) {
        publication(host: $host) {
          staticPage(slug: $slug) {
            content {
              html
            }
            id
            seo {
              description
            }
            slug
            title
            publishedAt 
          }
        }
      }
    `,
    variables: {
      host: process.env.NEXT_PUBLIC_HASHNODE_HOST,
      slug,
    },
  });

  const page = publication?.staticPage as Page;

  return page;
}
