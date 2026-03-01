'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Plus, X, FileText, Heading, Image as ImageIcon, 
  Video, Quote, Send, Trash2, LayoutDashboard, FilePlus 
} from 'lucide-react';
import { BlogBlock, BlockType, BlogPost } from '@/types/blog';
import { createBlogAction } from '../action';
import crypto from 'crypto';

/**
 * AUTO-EXPANDING TEXTAREA COMPONENT
 * Handles line breaks and grows with content (Facebook-style)
 */
const AutoTextArea = ({ value, onChange, placeholder }: any) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    const element = textareaRef.current;
    if (element) {
      element.style.height = 'auto';
      element.style.height = `${element.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-transparent outline-none resize-none overflow-hidden text-lg leading-relaxed whitespace-pre-wrap placeholder:opacity-30"
      rows={1}
    />
  );
};

export default function UnifiedAdminEditor() {
  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [blocks, setBlocks] = useState<BlogBlock[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // BLOCK LOGIC
  const addBlock = (type: BlockType) => {
    const newBlock: BlogBlock = { id: Date.now().toString(), type, content: '' };
    setBlocks([...blocks, newBlock]);
    setIsModalOpen(false);
  };

  const updateBlock = (id: string, value: string) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, content: value } : b));
  };

  const removeBlock = (id: string) => {
    setBlocks(blocks.filter(b => b.id !== id));
  };

  const handlePublish = async () => {
    if (!title || blocks.length === 0) return alert("Title and content required!");
    
    let slug = title.toLowerCase().trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
    
    if (!slug) {
      const id = crypto.randomBytes(4).toString('hex');
      slug = `untitled-${id}`;
    }
    
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title,
      slug,
      coverImage: coverImage || 'https://modulex.com/wp-content/uploads/2022/10/Modulex-Blog-Thumbnail-Image.jpg',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      readTime: `${Math.ceil(blocks.length * 0.5)} min`,
      excerpt: blocks.find(b => b.type === 'paragraph')?.content.slice(0, 150) || '',
      blocks
    };

    await createBlogAction(newPost);
    alert("Post Published Successfully!");
  };

  return (
    <div className="min-h-screen bg-[--background] text-[--foreground] pb-32">
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto px-6 pt-10 md:pt-20">
        <input 
          className="text-4xl md:text-6xl font-black bg-transparent border-none w-full mb-6 outline-none placeholder:opacity-20 tracking-tighter" 
          placeholder="Enter a title..." 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input 
          className="text-sm md:text-base bg-transparent border-b border-zinc-800/50 w-full mb-12 outline-none pb-2 opacity-50 focus:opacity-100 transition-opacity" 
          placeholder="Paste Cover Image URL (Unsplash/Direct link)..." 
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
        />

        {/* DYNAMIC CONTENT AREA */}
        <div className="space-y-10">
          {blocks.map((block) => (
            <div key={block.id} className="group relative animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="absolute -left-12 top-1 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <button onClick={() => removeBlock(block.id)} className="text-zinc-600 hover:text-red-500 p-2 cursor-pointer">
                    <Trash2 size={16} />
                 </button>
              </div>

              {/* RENDER BY TYPE */}
              <div className="pl-2 border-l-2 border-transparent group-hover:border-zinc-800 transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-20 mb-2 block">{block.type}</span>
                
                {block.type === 'paragraph' ? (
                  <AutoTextArea 
                    value={block.content} 
                    onChange={(val: string) => updateBlock(block.id, val)}
                    placeholder="Tell your story..." 
                  />
                ) : block.type === 'heading' ? (
                  <input 
                    className="w-full bg-transparent text-2xl md:text-3xl font-bold outline-none placeholder:opacity-20"
                    value={block.content}
                    placeholder="Enter subtitle..."
                    onChange={(e) => updateBlock(block.id, e.target.value)}
                  />
                ) : (
                  <div className="flex flex-col gap-4">
                    <input 
                      className="w-full bg-zinc-900/50 border border-zinc-800 p-3 rounded-lg text-sm font-mono outline-none focus:border-blue-500"
                      value={block.content}
                      placeholder={`Enter ${block.type} URL or content...`}
                      onChange={(e) => updateBlock(block.id, e.target.value)}
                    />
                    {/* Tiny Preview for Images */}
                    {block.type === 'image' && block.content && (
                      <img src={block.content} className="max-h-40 rounded-lg object-cover w-fit border border-zinc-800" alt="Preview" />
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* ADD BLOCK TRIGGER */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full py-16 border-2 border-dashed border-zinc-800/50 rounded-3xl flex flex-col items-center justify-center gap-4 text-zinc-500 hover:text-white hover:border-zinc-600 hover:bg-zinc-900/30 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
              <Plus size={24} />
            </div>
            <p className="font-medium">Add content to your post</p>
          </button>
        </div>
      </div>

      {/* BLOCK SELECTOR MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-zinc-950 border border-zinc-800 w-full max-w-sm rounded-[32px] p-8 shadow-2xl overflow-hidden relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-zinc-500 hover:text-white cursor-pointer">
              <X size={20} />
            </button>
            
            <h3 className="text-xl font-bold mb-8 tracking-tight italic">Select Block Type</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { type: 'paragraph', label: 'Text', icon: <FileText size={20} />, color: 'bg-blue-500/10 text-blue-500' },
                { type: 'heading', label: 'Heading', icon: <Heading size={20} />, color: 'bg-purple-500/10 text-purple-500' },
                { type: 'image', label: 'Image', icon: <ImageIcon size={20} />, color: 'bg-green-500/10 text-green-500' },
                { type: 'video', label: 'Video', icon: <Video size={20} />, color: 'bg-red-500/10 text-red-500' },
                { type: 'quote', label: 'Quote', icon: <Quote size={20} />, color: 'bg-yellow-500/10 text-yellow-500' },
              ].map((item) => (
                <button
                  key={item.type}
                  onClick={() => addBlock(item.type as BlockType)}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl border border-zinc-900 bg-zinc-900/30 hover:bg-zinc-800 transition-all text-center cursor-pointer active:scale-95"
                >
                  <div className={`p-3 rounded-xl ${item.color}`}>{item.icon}</div>
                  <span className="font-bold text-xs uppercase tracking-widest">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FLOATING ACTION BUTTON */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
        <button 
          onClick={handlePublish}
          className="bg-white text-black px-10 py-4 rounded-full font-black shadow-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
        >
          Publish Now <Send size={18} />
        </button>
      </div>
    </div>
  );
}