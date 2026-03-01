'use client';
import Link from 'next/link';
import { MoveLeft, Home, Search } from 'lucide-react';
export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full z-0" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full z-0" />

      <div className="relative z-10 text-center space-y-8">
        {/* The Big Error Code */}
        <div className="relative inline-block">
          <h1 className="text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter opacity-10 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold tracking-[0.3em] uppercase italic bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
              Lost in Space
            </span>
          </div>
        </div>

        {/* Messaging */}
        <div className="max-w-md mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            The entry you're looking for has vanished.
          </h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            The page might have been moved, deleted, or perhaps it never existed in this dimension at all.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
          <Link 
            href="/"
            className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <Home size={18} />
            Return Home
          </Link>
          
          <Link 
            href="/blogs"
            className="group flex items-center gap-3 border border-zinc-800 bg-zinc-900/50 backdrop-blur-md px-8 py-4 rounded-full font-bold text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
          >
            <Search size={18} />
            Browse Journal
          </Link>
        </div>

        {/* Bottom Detail */}
        <div className="pt-20">
          <button 
            onClick={() => window.history.back()}
            className="text-xs uppercase tracking-[0.4em] font-bold opacity-30 hover:opacity-100 transition-opacity flex items-center gap-2 mx-auto cursor-pointer"
          >
            <MoveLeft size={14} />
            Go back to previous safety
          </button>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-20">
        <div className="w-4 h-4 bg-blue-600 rounded-sm" />
        <span className="text-xs font-black tracking-widest uppercase">Portfolio.OS / System.Error</span>
      </div>
    </div>
  );
}