import { Post } from '@/types/posts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

interface BlogGridProps {
  posts: Post[];
}

const BlogGrid = ({ posts }: BlogGridProps) => {
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {posts?.slice(1)?.map((post) => (
          <li
            key={post.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <Link href={`/blogs/${post.slug}`} className="block">
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
              </div>
              <div className="p-4">
                <Button className="py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  Read More
                </Button>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogGrid;
