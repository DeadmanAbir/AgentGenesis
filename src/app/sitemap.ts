import { MetadataRoute } from 'next';
import { allDocuments } from 'contentlayer/generated';

export default function sitemap(): MetadataRoute.Sitemap {
  const url = 'https://www.agentgenesis.dev';
  const currentDate = new Date();

  const pages = allDocuments.map((document) => ({
    url: `${url}${document.slug}`,
    lastModified: currentDate,
  }));

  pages.unshift({ url, lastModified: currentDate });

  return pages;
}
