import { MetadataRoute } from 'next';
import { allDocuments } from 'contentlayer/generated';
import { fetchBlogPosts } from '@/utils/hashnode';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = 'https://agentgenesis.dev';
  const currentDate = new Date();

  let pages = allDocuments.map((document) => ({
    url: `${url}${document.slug}`,
    lastModified: currentDate,
  }));

  const posts = await fetchBlogPosts();
  const slugs = posts.posts.edges.map((post: any) => ({
    url: `${url}/blogs/${post.node.slug}`,
    lastModified: currentDate,
  }));

  pages.push({ url: `${url}/about`, lastModified: currentDate });
  pages.push({ url: `${url}/blogs`, lastModified: currentDate });
  pages = pages.concat(slugs);
  pages.unshift({ url, lastModified: currentDate });

  return pages;
}
