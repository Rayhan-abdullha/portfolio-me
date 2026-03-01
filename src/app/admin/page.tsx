import { getAllPosts } from '@/app/lib/blog';
import Link from 'next/link';
import {Eye, FileText, Calendar } from 'lucide-react';
import DeleteButton from './components/DeleteButton';

export default async function AdminDashboard() {
  const posts = await getAllPosts();
  const totalPosts = posts.length;

  return (
    <div className="space-y-10">
      {/* Header & Stats */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Post Management</h1>
          <p className="opacity-50 text-sm">Overview of your published journal entries.</p>
        </div>
        
        {/* Stat Card */}
        <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 min-w-[200px]">
          <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500">
            <FileText size={20} />
          </div>
          <div>
            <p className="text-xs opacity-50 font-bold uppercase tracking-wider">Total Posts</p>
            <p className="text-2xl font-black">{totalPosts}</p>
          </div>
        </div>
      </header>

      {/* Posts Table/List */}
      <div className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900/20 backdrop-blur-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-900/50 text-xs uppercase tracking-widest opacity-50">
              <th className="p-4 font-semibold">Article</th>
              <th className="p-4 font-semibold hidden md:table-cell">Date</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/50">
            {posts.map((post) => (
              <tr key={post.id} className="group hover:bg-zinc-800/20 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src={post.coverImage} 
                      className="w-12 h-12 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all" 
                      alt="not found" 
                    />
                    <div>
                      <p className="font-bold text-sm md:text-base leading-none mb-1">{post.title}</p>
                      <p className="text-xs opacity-40">{post.slug}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <div className="flex items-center gap-2 text-sm opacity-60">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-end gap-2">
                    {/* View Live Button */}
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="p-2 hover:bg-zinc-800 rounded-lg transition-colors opacity-60 hover:opacity-100"
                      target="_blank"
                    >
                      <Eye size={18} />
                    </Link>

                   <DeleteButton post={post} />
                  </div>
                </td>
              </tr>
            ))}

            {posts.length === 0 && (
              <tr>
                <td colSpan={3} className="p-20 text-center opacity-30 italic">
                  No posts found. Start writing!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}