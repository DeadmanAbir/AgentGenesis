'use client'; // Add this line at the top

import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types/posts';
import Container from '@/components/Container';
import Footer from '@/components/footer';
import { fetchBlogPosts } from '@/utils/hashnode';

// Blog component with revamped layout, styles, and gradient effect
export async function Blog() {
  const publication = await fetchBlogPosts();
  if (!publication) {
    throw new Error('Failed to fetch blog posts');
  }

  const posts: Array<Post> = publication.posts.edges.map(
    ({ node }: { node: Post }) => node,
  );

  return (
    <Container className="max-w-6xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center mt-16">
        <h1 className="text-5xl font-bold mb-4">
          Insights for Building Web Applications
        </h1>
        <p className="text-lg text-gray-500">
          Dive deep into the latest trends, tips, and techniques for creating
          powerful, user-focused web applications.
        </p>
      </div>

      {/* Featured Post */}
      <div className="relative flex gap-8 items-center text-white rounded-lg p-8 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-70 animate-liquid"></div>
        <div className="w-1/2 relative z-10">
          <h2 className="text-2xl font-semibold">
            10 Inspiring Web Application Designs for 2024
          </h2>
          <p className="mt-2">
            Discover some of the most innovative and visually stunning web
            applications that have set the bar high in 2024. Perfect for
            inspiration and design ideas.
          </p>
          <button className="mt-4 py-2 px-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100">
            Read More
          </button>
        </div>
        <Image
          width={300}
          height={200}
          src="/blog1.svg"
          alt="Featured Post Image"
          className="rounded-lg relative z-10"
        />
      </div>

      {/* Blog Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative">
                <Image
                  width={400}
                  height={250}
                  className="object-cover w-full h-48"
                  src={post.coverImage.url}
                  alt={post.title}
                />
                <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full p-2">
                  <span className="text-lg">➔</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  {new Date(post.publishedAt).toLocaleDateString('en-us', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
                <p className="mt-4 text-gray-600 text-sm">{post.excerpt}</p>
              </div>
              <div className="p-4">
                <button className="py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  Read More
                </button>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

// Blogs page wrapper
const Blogs = () => {
  return (
    <div className="container mt-32 font-semibold flex flex-col items-center gap-20">
      <Blog />
      <Footer />
    </div>
  );
};

export default Blogs;

// CSS for liquid effect
<style jsx>{`
  @keyframes liquid {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .animate-liquid {
    animation: liquid 8s ease-in-out infinite;
    background-size: 200% 200%;
  }
`}</style>;
