import { query } from '@/lib/hashnode';
import { Publication } from '@/types/publication';

export async function getPublication() {
  const { data } = await query({
    query: `
      query($host: String) {
        publication(host: $host) {
          descriptionSEO
          preferences {
            navbarItems {
              id
              label
              url
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

  const publication: Publication = data?.publication;

  return publication;
}
