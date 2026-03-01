"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
      <div>
        <nav className="fixed w-full z-50 border-b border-white/5 bg-[#030303]/70 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-xl font-black tracking-tighter">
              <a href="/" className="uppercase">Rayhan.</a>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {["Projects", "Skills", "About"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            <Link href={`/blogs`} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Blogs
            </Link>
            <a href="https://drive.google.com/file/d/1elKi72H6KTHWoo6Wp0BsYeeaAxQlyLYe/view?usp=sharing" target='blank' download className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
              <Download size={16} /> Resume
            </a>
            </div>

            <button className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 bg-[#030303] pt-24 px-6 md:hidden"
            >
              <div className="flex flex-col gap-6 font-bold">
                <a href="#projects" className="text-sm font-medium text-gray-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
                <a href="#skills" className="text-sm font-medium text-gray-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
                <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
                <Link href={`/blogs`} className="text-sm font-medium text-gray-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Blogs
              </Link>
                <a href='https://drive.google.com/file/d/1elKi72H6KTHWoo6Wp0BsYeeaAxQlyLYe/view?usp=sharing' target='blank' className="bg-blue-600 px-4 py-2 rounded-2xl flex items-center justify-center gap-2">
                  <Download size={20} /> Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  )
}

export default Navbar