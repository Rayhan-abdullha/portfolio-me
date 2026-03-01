'use client';
import { useState } from 'react';
import { BlogBlock, BlockType, BlogPost } from '@/types/blog';
import { createBlogAction } from '../action';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState(''); // Added Cover Image state
  const [blocks, setBlocks] = useState<BlogBlock[]>([]);

  const addBlock = (type: BlockType) => {
    const newBlock: BlogBlock = { id: Date.now().toString(), type, content: '' };
    setBlocks([...blocks, newBlock]);
  };

  const updateBlock = (id: string, value: string) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, content: value } : b));
  };

  const removeBlock = (id: string) => {
    setBlocks(blocks.filter(b => b.id !== id));
  };

  const handlePublish = async () => {
    if (!title || blocks.length === 0) return alert("Title and content required!");

    const slug = title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title,
      slug,
      coverImage: coverImage || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      readTime: `${Math.ceil(blocks.length * 0.5)} min`, // Simple calculation
      excerpt: blocks.find(b => b.type === 'paragraph')?.content.slice(0, 150) || '',
      blocks
    };

    await createBlogAction(newPost);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-10 bg-[--background] text-[--foreground]">
      
      {/* Title Input - Adjusted text size for mobile */}
      <input 
        className="text-3xl md:text-5xl font-black bg-transparent border-b border-zinc-800 w-full mb-4 md:mb-6 outline-none pb-4" 
        placeholder="Blog Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Cover Image Input */}
      <input 
        className="text-base md:text-lg bg-transparent border-b border-zinc-800 w-full mb-8 md:mb-10 outline-none pb-2 opacity-70" 
        placeholder="Cover Image URL..." 
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
      />

      <div className="space-y-4 md:space-y-6 mb-24 md:mb-10">
        {blocks.map((block) => (
          <div key={block.id} className="relative group p-3 md:p-4 border border-zinc-800 rounded-xl bg-zinc-900/10">
            <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">{block.type}</span>
                <button 
                  onClick={() => removeBlock(block.id)} 
                  className="text-red-500 text-xs md:opacity-0 md:group-hover:opacity-100 transition-opacity p-1"
                >
                  Delete
                </button>
            </div>
            
            {block.type === 'heading' ? (
                 <input 
                 className="w-full bg-transparent text-xl md:text-2xl font-bold outline-none" 
                 placeholder="Enter Subtitle..."
                 onChange={(e) => updateBlock(block.id, e.target.value)}
               />
            ) : (
                <textarea 
                className="w-full bg-transparent mt-1 outline-none min-h-[100px] md:min-h-[80px] resize-y text-base" 
                placeholder={`Enter ${block.type} content...`}
                onChange={(e) => updateBlock(block.id, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Responsive Toolbar */}
      <div className="fixed bottom-0 left-0 right-0 md:sticky md:bottom-10 bg-[--background] border-t md:border border-zinc-800 p-4 md:rounded-2xl shadow-2xl z-50">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center">
          
          {/* Scrollable buttons for mobile */}
          <div className="flex overflow-x-auto w-full md:w-auto gap-2 pb-2 md:pb-0 no-scrollbar items-center">
            <span className="text-xs font-bold uppercase opacity-40 mr-2 shrink-0 hidden md:block">Add:</span>
            <button onClick={() => addBlock('heading')} className="whitespace-nowrap px-3 py-2 bg-zinc-800 rounded-lg text-xs font-medium shrink-0">Subtitle</button>
            <button onClick={() => addBlock('paragraph')} className="whitespace-nowrap px-3 py-2 bg-zinc-800 rounded-lg text-xs font-medium shrink-0">Paragraph</button>
            <button onClick={() => addBlock('image')} className="whitespace-nowrap px-3 py-2 bg-zinc-800 rounded-lg text-xs font-medium shrink-0">Image</button>
            <button onClick={() => addBlock('video')} className="whitespace-nowrap px-3 py-2 bg-zinc-800 rounded-lg text-xs font-medium shrink-0">Video</button>
            <button onClick={() => addBlock('quote')} className="whitespace-nowrap px-3 py-2 bg-zinc-800 rounded-lg text-xs font-medium shrink-0">Quote</button>
          </div>
          
          <button 
              onClick={handlePublish} 
              className="w-full md:w-auto md:ml-auto px-6 py-3 md:py-2 bg-foreground text-background font-bold rounded-xl hover:scale-105 transition-transform text-sm"
          >
              Publish Post
          </button>
        </div>
      </div>
    </div>
  );
}