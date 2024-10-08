export interface Page {
  content: {
    html: string;
  };
  id: string;
  seo: {
    description: string;
  };
  slug: string;
  title: string;
  publishedAt?: string;
}
