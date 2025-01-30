import { Post } from '@/types/posts';
import { fetchBlogPosts } from '@/utils/hashnode';
import BlogGrid from './blog-grid';

export async function Blog() {
  const publication = await fetchBlogPosts();
  if (!publication) {
    throw new Error('Failed to fetch blog posts');
  }

  const posts: Array<Post> = publication.posts.edges.map(
    ({ node }: { node: Post }) => node,
  );

  return (
    <div className="mx-auto w-full ">
      <BlogGrid posts={posts} />
    </div>
  );
}
