import Link from 'next/link';
import { BlogPost } from '@/types/blog';
import { getAllPosts } from '../lib/blog';

// We make this an async function so it can read the folder
export default async function BlogListPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-6 pt-35">
      {posts.length === 0 && (
        <p className="opacity-50 italic">No posts found. Add some in the admin!</p>
      )}

      <div className="grid gap-12 ">
        {posts.map((post: BlogPost) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
            <article className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-[--color-background] border border-zinc-800">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <span className="text-sm opacity-60">{post.date} • {post.readTime}</span>
                <h2 className="text-3xl font-bold mt-2 group-hover:text-[--color-foreground] transition-colors">
                  {post.title}
                </h2>
                <p className="mt-4 opacity-70 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-4 font-medium border-b border-current opacity-80 group-hover:opacity-100 transition-opacity">
                  Read Post
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}