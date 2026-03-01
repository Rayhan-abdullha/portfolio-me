import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BlogBlock } from '@/types/blog';
import { getPostBySlug } from '@/app/lib/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  
  const [post] = await Promise.all([
    getPostBySlug(slug),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[--background] text-[--foreground] pt-25 md:pt-30 pb-20 px-6">
      <article className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link 
            href="/blogs" 
            className="text-sm font-medium opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2"
          >
            ← Back to all posts
          </Link>
        </div>

        {/* Header Section */}
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] mb-6">
            {post.title}
          </h1>
          {post.coverImage && (
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-800/50 shadow-2xl">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="object-cover w-full h-full"
              />
            </div>
          )}
          <div className="flex items-center gap-3 text-sm mb-3 mt-6 text-zinc-300 opacity-60 font-medium">
            <time>{post.date}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Dynamic Content Renderer */}
        <section className="space-y-8">
          {post.blocks.map((block: BlogBlock) => {
            switch (block.type) {
              case 'heading':
                return (
                  <h2 key={block.id} className="text-xl md:text-2xl font-bold mt-8 mb-4 pt-4 tracking-tight">
                    {block.content}
                  </h2>
                );

              case 'paragraph':
                return (
                  <p 
                    key={block.id} 
                    /* whitespace-pre-wrap is the key here to show line breaks */
                    className="text-md leading-relaxed opacity-90 whitespace-pre-wrap font-sans"
                  >
                    {block.content}
                  </p>
                );

              case 'image':
                return (
                  <figure key={block.id} className="my-12">
                    <img 
                      src={block.content} 
                      alt="" 
                      className="rounded-2xl w-full border border-zinc-800/30 shadow-lg" 
                    />
                  </figure>
                );

              case 'quote':
                return (
                  <blockquote key={block.id} className="border-l-4 border-blue-600 pl-8 py-2 my-12 italic bg-zinc-900/30 rounded-r-2xl">
                    <p className="text-lg md:text-2xl font-medium leading-snug whitespace-pre-wrap">"{block.content}"</p>
                  </blockquote>
                );

              case 'video':
                const videoId = block.content.includes('v=') 
                  ? block.content.split('v=')[1].split('&')[0] 
                  : block.content.split('/').pop();
                
                return (
                  <div key={block.id} className="my-12 aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-zinc-800">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                );

              default:
                return null;
            }
          })}
        </section>

        <footer className="mt-20 pt-10 border-t border-zinc-800/50">
          <p className="text-sm opacity-50">
            Thanks for reading. If you enjoyed this post, feel free to share it.
          </p>
        </footer>
      </article>
    </main>
  );
}