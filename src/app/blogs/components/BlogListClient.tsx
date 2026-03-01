'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import CategoryFilter from './CategoryFilter';
import { BlogPost } from '@/types/blog';

const categories = ['All', 'Health', 'Politics', 'Programming', 'Islamic', 'Sports'];

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  return (
    <div className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-20">
      <div className="relative mb-16 border-b border-zinc-800/50 pb-10 overflow-hidden">
        {/* --- Fixed Decorative Background Glows --- */}
        {/* Added 'pointer-events-none' so they don't block clicks on links/text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full -z-10 pointer-events-none" />

        {/* --- Content --- */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50">
              Latest Updates
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 italic bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
            Explore Our Blog
          </h1>
          
          <p className="text-lg md:text-xl opacity-50 max-w-2xl leading-relaxed font-medium">
            Dive into our collection of insightful articles covering 
            <span className="text-white"> health</span>, 
            <span className="text-white"> politics</span>, 
            <span className="text-white"> programming</span>, 
            <span className="text-white"> Islamic topics</span>, and 
            <span className="text-white"> sports</span>. 
            Explore the latest trends and timeless wisdom in one place.
          </p>
        </div>
      </div>
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {filteredPosts.length === 0 ? (
        <div className="py-20 text-center border border-dashed border-zinc-800 rounded-3xl">
          <p className="opacity-30 italic">No stories found in this category.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          {filteredPosts.map((post: BlogPost) => (
            <Link key={post.id} href={`/blogs/${post.slug}`} className="group block">
              <div className="border border-white/5 rounded-2xl p-6 hover:border-blue-600 transition">
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="opacity-50 mt-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}