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
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 pb-20">
        {posts?.slice(1)?.map((post) => (
          <li
            key={post.id}
            className="bg-white text-black dark:bg-neutral-950 relative overflow-hidden rounded-md shadow-xl dark:shadow-lg dark:shadow-zinc-900 transition-transform duration-300 transform hover:-translate-y-1 cursor-pointer group h-[450px]"
          >
            <Link
              href={`/blogs/${post.slug}`}
              className=" h-full flex flex-col"
            >
              <div className="relative aspect-w-16 aspect-h-9 rounded-t-md overflow-hidden h-52 ">
                <Image
                  width={400}
                  height={250}
                  className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                  src={post.coverImage.url}
                  alt={post.title}
                />
                <div className="absolute inset-0 dark:bg-black opacity-10 transition-opacity duration-300 group-hover:opacity-70"></div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-light text-sm md:text-xl text-black dark:text-gray-50 group-hover:text-indigo-400 transition-colors duration-300 antialiased">
                    {post.title}
                  </h3>
                </div>
                <p className="text-xs font-extralight text-gray-700 dark:text-gray-400 mt-auto self-end antialiased">
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
