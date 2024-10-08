export interface Post {
  author: {
    name: string;
    profilePicture: string;
    socialMediaLinks: {
      twitter: string;
    };
  };
  content: {
    html: string;
  };
  coverImage: {
    url: string;
  };
  id: string;
  publishedAt: string;
  seo: {
    description: string;
  };
  slug: string;
  title: string;
}
