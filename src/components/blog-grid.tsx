import { Post } from '@/types/posts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface BlogGridProps {
  posts: Post[];
}

const BlogGrid = ({ posts }: BlogGridProps) => {
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 pb-20">
        {posts.map((post, index) => (
          <li
            key={post.id}
            className={`bg-white text-black dark:bg-zinc-900 relative overflow-hidden rounded-md shadow-xl transition-transform duration-300 transform cursor-pointer group ring-2 dark:ring-zinc-700 ring-zinc-200 ${
              index % 3 === 0 ? 'md:col-span-2 h-[440px]' : 'h-[440px]'
            }`}
          >
            <Link href={`/blogs/${post.slug}`} className="h-full flex flex-col">
              <div
                className={`relative rounded-t-md overflow-hidden ${
                  index === 0 ? 'h-96' : 'h-72'
                }`}
              >
                <Image
                  width={index === 0 ? 800 : 400}
                  height={index === 0 ? 500 : 250}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  src={post.coverImage.url}
                  alt={post.title}
                />
                <div className="absolute inset-0 dark:bg-black opacity-10 transition-opacity duration-300 group-hover:opacity-70" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3
                    className={`font-light text-black dark:text-gray-50 group-hover:text-zinc-400 transition-colors duration-300 antialiased line-clamp-1 text-2xl`}
                  >
                    {post.title}
                  </h3>
                </div>
                <p className="text-xs font-extralight text-gray-700 dark:text-gray-400 mt-auto self-start antialiased pt-2">
                  {new Date(post.publishedAt).toLocaleDateString('en-us', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogGrid;
