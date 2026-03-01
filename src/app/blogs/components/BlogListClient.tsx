'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react'; // Make sure to install lucide-react
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
      {/* Header Section (Your Fixed Version) */}
      <div className="relative mb-16 border-b border-zinc-800/50 pb-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50">Latest Updates</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 italic bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
            Explore Our Blog
          </h1>
          <p className="text-lg md:text-xl opacity-50 max-w-2xl leading-relaxed font-medium">
            Dive into our collection of insightful articles covering 
            <span className="text-white"> health</span>, <span className="text-white"> politics</span>, 
            <span className="text-white"> programming</span>, <span className="text-white"> Islamic topics</span>, and 
            <span className="text-white"> sports</span>.
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
          <p className="opacity-30 italic text-xl">No stories found in this category.</p>
        </div>
      ) : (
        /* --- Premium Blog Grid --- */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {filteredPosts.map((post: BlogPost) => (
            <Link key={post.id} href={`/blogs/${post.slug}`} className="group block">
              <article className="space-y-6">
                
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
                  <img 
                    src={post.coverImage || '/api/placeholder/800/500'} 
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  
                  {/* Category Badge - Glassmorphism */}
                  <div className="absolute top-4 left-4 backdrop-blur-md bg-black/40 border border-white/10 px-4 py-1.5 rounded-full shadow-2xl">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/90">
                      {post.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                     <span className="flex items-center gap-2 text-white font-bold text-sm">
                       Read Full Entry <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                     </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="space-y-3 px-2">
                  <div className="flex items-center gap-4 text-xs font-bold opacity-40">
                    <time>{post.date}</time>
                    <span className="w-1 h-1 bg-zinc-500 rounded-full" />
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} />
                      <span>{post.readTime} min read</span>
                      <span className="opacity-70 ml-2">({post.readCount} views)</span>
                    </div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold pt-2 leading-tight tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="text-zinc-500 line-clamp-2 leading-relaxed font-medium">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}